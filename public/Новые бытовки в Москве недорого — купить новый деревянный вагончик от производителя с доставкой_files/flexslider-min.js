/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!(function (a) {
  ((a.flexslider = function (b, c) {
    var d = a(b);
    d.vars = a.extend({}, a.flexslider.defaults, c);
    var j,
      e = d.vars.namespace,
      f =
        window.navigator &&
        window.navigator.msPointerEnabled &&
        window.MSGesture,
      g =
        ('ontouchstart' in window ||
          f ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        d.vars.touch,
      h = 'click touchend MSPointerUp',
      i = '',
      k = 'vertical' === d.vars.direction,
      l = d.vars.reverse,
      m = d.vars.itemWidth > 0,
      n = 'fade' === d.vars.animation,
      o = '' !== d.vars.asNavFor,
      p = {},
      q = !0;
    (a.data(b, 'flexslider', d),
      (p = {
        init: function () {
          ((d.animating = !1),
            (d.currentSlide = parseInt(
              d.vars.startAt ? d.vars.startAt : 0,
              10
            )),
            isNaN(d.currentSlide) && (d.currentSlide = 0),
            (d.animatingTo = d.currentSlide),
            (d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last),
            (d.containerSelector = d.vars.selector.substr(
              0,
              d.vars.selector.search(' ')
            )),
            (d.slides = a(d.vars.selector, d)),
            (d.container = a(d.containerSelector, d)),
            (d.count = d.slides.length),
            (d.syncExists = a(d.vars.sync).length > 0),
            'slide' === d.vars.animation && (d.vars.animation = 'swing'),
            (d.prop = k ? 'top' : 'marginLeft'),
            (d.args = {}),
            (d.manualPause = !1),
            (d.stopped = !1),
            (d.started = !1),
            (d.startTimeout = null),
            (d.transitions =
              !d.vars.video &&
              !n &&
              d.vars.useCSS &&
              (function () {
                var a = document.createElement('div'),
                  b = [
                    'perspectiveProperty',
                    'WebkitPerspective',
                    'MozPerspective',
                    'OPerspective',
                    'msPerspective',
                  ];
                for (var c in b)
                  if (void 0 !== a.style[b[c]])
                    return (
                      (d.pfx = b[c].replace('Perspective', '').toLowerCase()),
                      (d.prop = '-' + d.pfx + '-transform'),
                      !0
                    );
                return !1;
              })()),
            (d.ensureAnimationEnd = ''),
            '' !== d.vars.controlsContainer &&
              (d.controlsContainer =
                a(d.vars.controlsContainer).length > 0 &&
                a(d.vars.controlsContainer)),
            '' !== d.vars.manualControls &&
              (d.manualControls =
                a(d.vars.manualControls).length > 0 &&
                a(d.vars.manualControls)),
            d.vars.randomize &&
              (d.slides.sort(function () {
                return Math.round(Math.random()) - 0.5;
              }),
              d.container.empty().append(d.slides)),
            d.doMath(),
            d.setup('init'),
            d.vars.controlNav && p.controlNav.setup(),
            d.vars.directionNav && p.directionNav.setup(),
            d.vars.keyboard &&
              (1 === a(d.containerSelector).length ||
                d.vars.multipleKeyboard) &&
              a(document).bind('keyup', function (a) {
                var b = a.keyCode;
                if (!d.animating && (39 === b || 37 === b)) {
                  var c =
                    39 === b
                      ? d.getTarget('next')
                      : 37 === b
                        ? d.getTarget('prev')
                        : !1;
                  d.flexAnimate(c, d.vars.pauseOnAction);
                }
              }),
            d.vars.mousewheel &&
              d.bind('mousewheel', function (a, b) {
                a.preventDefault();
                var f = 0 > b ? d.getTarget('next') : d.getTarget('prev');
                d.flexAnimate(f, d.vars.pauseOnAction);
              }),
            d.vars.pausePlay && p.pausePlay.setup(),
            d.vars.slideshow &&
              d.vars.pauseInvisible &&
              p.pauseInvisible.init(),
            d.vars.slideshow &&
              (d.vars.pauseOnHover &&
                d.hover(
                  function () {
                    d.manualPlay || d.manualPause || d.pause();
                  },
                  function () {
                    d.manualPause || d.manualPlay || d.stopped || d.play();
                  }
                ),
              (d.vars.pauseInvisible && p.pauseInvisible.isHidden()) ||
                (d.vars.initDelay > 0
                  ? (d.startTimeout = setTimeout(d.play, d.vars.initDelay))
                  : d.play())),
            o && p.asNav.setup(),
            g && d.vars.touch && p.touch(),
            (!n || (n && d.vars.smoothHeight)) &&
              a(window).bind('resize orientationchange focus', p.resize),
            d.find('img').attr('draggable', 'false'),
            setTimeout(function () {
              d.vars.start(d);
            }, 200));
        },
        asNav: {
          setup: function () {
            ((d.asNav = !0),
              (d.animatingTo = Math.floor(d.currentSlide / d.move)),
              (d.currentItem = d.currentSlide),
              d.slides
                .removeClass(e + 'active-slide')
                .eq(d.currentItem)
                .addClass(e + 'active-slide'),
              f
                ? ((b._slider = d),
                  d.slides.each(function () {
                    var b = this;
                    ((b._gesture = new MSGesture()),
                      (b._gesture.target = b),
                      b.addEventListener(
                        'MSPointerDown',
                        function (a) {
                          (a.preventDefault(),
                            a.currentTarget._gesture &&
                              a.currentTarget._gesture.addPointer(a.pointerId));
                        },
                        !1
                      ),
                      b.addEventListener('MSGestureTap', function (b) {
                        b.preventDefault();
                        var c = a(this),
                          e = c.index();
                        a(d.vars.asNavFor).data('flexslider').animating ||
                          c.hasClass('active') ||
                          ((d.direction = d.currentItem < e ? 'next' : 'prev'),
                          d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0));
                      }));
                  }))
                : d.slides.on(h, function (b) {
                    b.preventDefault();
                    var c = a(this),
                      f = c.index(),
                      g = c.offset().left - a(d).scrollLeft();
                    0 >= g && c.hasClass(e + 'active-slide')
                      ? d.flexAnimate(d.getTarget('prev'), !0)
                      : a(d.vars.asNavFor).data('flexslider').animating ||
                        c.hasClass(e + 'active-slide') ||
                        ((d.direction = d.currentItem < f ? 'next' : 'prev'),
                        d.flexAnimate(f, d.vars.pauseOnAction, !1, !0, !0));
                  }));
          },
        },
        controlNav: {
          setup: function () {
            d.manualControls
              ? p.controlNav.setupManual()
              : p.controlNav.setupPaging();
          },
          setupPaging: function () {
            var f,
              g,
              b =
                'thumbnails' === d.vars.controlNav
                  ? 'control-thumbs'
                  : 'control-paging',
              c = 1;
            if (
              ((d.controlNavScaffold = a(
                '<ol class="' + e + 'control-nav ' + e + b + '"></ol>'
              )),
              d.pagingCount > 1)
            )
              for (var j = 0; j < d.pagingCount; j++) {
                if (
                  ((g = d.slides.eq(j)),
                  (f =
                    'thumbnails' === d.vars.controlNav
                      ? '<img src="' + g.attr('data-thumb') + '"/>'
                      : '<a>' + c + '</a>'),
                  'thumbnails' === d.vars.controlNav &&
                    !0 === d.vars.thumbCaptions)
                ) {
                  var k = g.attr('data-thumbcaption');
                  '' != k &&
                    void 0 != k &&
                    (f += '<span class="' + e + 'caption">' + k + '</span>');
                }
                (d.controlNavScaffold.append('<li>' + f + '</li>'), c++);
              }
            (d.controlsContainer
              ? a(d.controlsContainer).append(d.controlNavScaffold)
              : d.append(d.controlNavScaffold),
              p.controlNav.set(),
              p.controlNav.active(),
              d.controlNavScaffold.delegate('a, img', h, function (b) {
                if ((b.preventDefault(), '' === i || i === b.type)) {
                  var c = a(this),
                    f = d.controlNav.index(c);
                  c.hasClass(e + 'active') ||
                    ((d.direction = f > d.currentSlide ? 'next' : 'prev'),
                    d.flexAnimate(f, d.vars.pauseOnAction));
                }
                ('' === i && (i = b.type), p.setToClearWatchedEvent());
              }));
          },
          setupManual: function () {
            ((d.controlNav = d.manualControls),
              p.controlNav.active(),
              d.controlNav.bind(h, function (b) {
                if ((b.preventDefault(), '' === i || i === b.type)) {
                  var c = a(this),
                    f = d.controlNav.index(c);
                  c.hasClass(e + 'active') ||
                    ((d.direction = f > d.currentSlide ? 'next' : 'prev'),
                    d.flexAnimate(f, d.vars.pauseOnAction));
                }
                ('' === i && (i = b.type), p.setToClearWatchedEvent());
              }));
          },
          set: function () {
            var b = 'thumbnails' === d.vars.controlNav ? 'img' : 'a';
            d.controlNav = a(
              '.' + e + 'control-nav li ' + b,
              d.controlsContainer ? d.controlsContainer : d
            );
          },
          active: function () {
            d.controlNav
              .removeClass(e + 'active')
              .eq(d.animatingTo)
              .addClass(e + 'active');
          },
          update: function (b, c) {
            (d.pagingCount > 1 && 'add' === b
              ? d.controlNavScaffold.append(
                  a('<li><a>' + d.count + '</a></li>')
                )
              : 1 === d.pagingCount
                ? d.controlNavScaffold.find('li').remove()
                : d.controlNav.eq(c).closest('li').remove(),
              p.controlNav.set(),
              d.pagingCount > 1 && d.pagingCount !== d.controlNav.length
                ? d.update(c, b)
                : p.controlNav.active());
          },
        },
        directionNav: {
          setup: function () {
            var b = a(
              '<ul class="' +
                e +
                'direction-nav"><li><a class="' +
                e +
                'prev" href="#">' +
                d.vars.prevText +
                '</a></li><li><a class="' +
                e +
                'next" href="#">' +
                d.vars.nextText +
                '</a></li></ul>'
            );
            (d.controlsContainer
              ? (a(d.controlsContainer).append(b),
                (d.directionNav = a(
                  '.' + e + 'direction-nav li a',
                  d.controlsContainer
                )))
              : (d.append(b),
                (d.directionNav = a('.' + e + 'direction-nav li a', d))),
              p.directionNav.update(),
              d.directionNav.bind(h, function (b) {
                b.preventDefault();
                var c;
                (('' === i || i === b.type) &&
                  ((c = a(this).hasClass(e + 'next')
                    ? d.getTarget('next')
                    : d.getTarget('prev')),
                  d.flexAnimate(c, d.vars.pauseOnAction)),
                  '' === i && (i = b.type),
                  p.setToClearWatchedEvent());
              }));
          },
          update: function () {
            var a = e + 'disabled';
            1 === d.pagingCount
              ? d.directionNav.addClass(a).attr('tabindex', '-1')
              : d.vars.animationLoop
                ? d.directionNav.removeClass(a).removeAttr('tabindex')
                : 0 === d.animatingTo
                  ? d.directionNav
                      .removeClass(a)
                      .filter('.' + e + 'prev')
                      .addClass(a)
                      .attr('tabindex', '-1')
                  : d.animatingTo === d.last
                    ? d.directionNav
                        .removeClass(a)
                        .filter('.' + e + 'next')
                        .addClass(a)
                        .attr('tabindex', '-1')
                    : d.directionNav.removeClass(a).removeAttr('tabindex');
          },
        },
        pausePlay: {
          setup: function () {
            var b = a('<div class="' + e + 'pauseplay"><a></a></div>');
            (d.controlsContainer
              ? (d.controlsContainer.append(b),
                (d.pausePlay = a('.' + e + 'pauseplay a', d.controlsContainer)))
              : (d.append(b), (d.pausePlay = a('.' + e + 'pauseplay a', d))),
              p.pausePlay.update(d.vars.slideshow ? e + 'pause' : e + 'play'),
              d.pausePlay.bind(h, function (b) {
                (b.preventDefault(),
                  ('' === i || i === b.type) &&
                    (a(this).hasClass(e + 'pause')
                      ? ((d.manualPause = !0), (d.manualPlay = !1), d.pause())
                      : ((d.manualPause = !1), (d.manualPlay = !0), d.play())),
                  '' === i && (i = b.type),
                  p.setToClearWatchedEvent());
              }));
          },
          update: function (a) {
            'play' === a
              ? d.pausePlay
                  .removeClass(e + 'pause')
                  .addClass(e + 'play')
                  .html(d.vars.playText)
              : d.pausePlay
                  .removeClass(e + 'play')
                  .addClass(e + 'pause')
                  .html(d.vars.pauseText);
          },
        },
        touch: function () {
          function r(f) {
            d.animating
              ? f.preventDefault()
              : (window.navigator.msPointerEnabled || 1 === f.touches.length) &&
                (d.pause(),
                (g = k ? d.h : d.w),
                (i = Number(new Date())),
                (o = f.touches[0].pageX),
                (p = f.touches[0].pageY),
                (e =
                  m && l && d.animatingTo === d.last
                    ? 0
                    : m && l
                      ? d.limit -
                        (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo
                      : m && d.currentSlide === d.last
                        ? d.limit
                        : m
                          ? (d.itemW + d.vars.itemMargin) *
                            d.move *
                            d.currentSlide
                          : l
                            ? (d.last - d.currentSlide + d.cloneOffset) * g
                            : (d.currentSlide + d.cloneOffset) * g),
                (a = k ? p : o),
                (c = k ? o : p),
                b.addEventListener('touchmove', s, !1),
                b.addEventListener('touchend', t, !1));
          }
          function s(b) {
            ((o = b.touches[0].pageX),
              (p = b.touches[0].pageY),
              (h = k ? a - p : a - o),
              (j = k
                ? Math.abs(h) < Math.abs(o - c)
                : Math.abs(h) < Math.abs(p - c)));
            var f = 500;
            (!j || Number(new Date()) - i > f) &&
              (b.preventDefault(),
              !n &&
                d.transitions &&
                (d.vars.animationLoop ||
                  (h /=
                    (0 === d.currentSlide && 0 > h) ||
                    (d.currentSlide === d.last && h > 0)
                      ? Math.abs(h) / g + 2
                      : 1),
                d.setProps(e + h, 'setTouch')));
          }
          function t() {
            if (
              (b.removeEventListener('touchmove', s, !1),
              d.animatingTo === d.currentSlide && !j && null !== h)
            ) {
              var k = l ? -h : h,
                m = k > 0 ? d.getTarget('next') : d.getTarget('prev');
              d.canAdvance(m) &&
              ((Number(new Date()) - i < 550 && Math.abs(k) > 50) ||
                Math.abs(k) > g / 2)
                ? d.flexAnimate(m, d.vars.pauseOnAction)
                : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0);
            }
            (b.removeEventListener('touchend', t, !1),
              (a = null),
              (c = null),
              (h = null),
              (e = null));
          }
          function u(a) {
            (a.stopPropagation(),
              d.animating
                ? a.preventDefault()
                : (d.pause(),
                  b._gesture.addPointer(a.pointerId),
                  (q = 0),
                  (g = k ? d.h : d.w),
                  (i = Number(new Date())),
                  (e =
                    m && l && d.animatingTo === d.last
                      ? 0
                      : m && l
                        ? d.limit -
                          (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo
                        : m && d.currentSlide === d.last
                          ? d.limit
                          : m
                            ? (d.itemW + d.vars.itemMargin) *
                              d.move *
                              d.currentSlide
                            : l
                              ? (d.last - d.currentSlide + d.cloneOffset) * g
                              : (d.currentSlide + d.cloneOffset) * g)));
          }
          function v(a) {
            a.stopPropagation();
            var c = a.target._slider;
            if (c) {
              var d = -a.translationX,
                f = -a.translationY;
              return (
                (q += k ? f : d),
                (h = q),
                (j = k
                  ? Math.abs(q) < Math.abs(-d)
                  : Math.abs(q) < Math.abs(-f)),
                a.detail === a.MSGESTURE_FLAG_INERTIA
                  ? (setImmediate(function () {
                      b._gesture.stop();
                    }),
                    void 0)
                  : ((!j || Number(new Date()) - i > 500) &&
                      (a.preventDefault(),
                      !n &&
                        c.transitions &&
                        (c.vars.animationLoop ||
                          (h =
                            q /
                            ((0 === c.currentSlide && 0 > q) ||
                            (c.currentSlide === c.last && q > 0)
                              ? Math.abs(q) / g + 2
                              : 1)),
                        c.setProps(e + h, 'setTouch'))),
                    void 0)
              );
            }
          }
          function w(b) {
            b.stopPropagation();
            var d = b.target._slider;
            if (d) {
              if (d.animatingTo === d.currentSlide && !j && null !== h) {
                var f = l ? -h : h,
                  k = f > 0 ? d.getTarget('next') : d.getTarget('prev');
                d.canAdvance(k) &&
                ((Number(new Date()) - i < 550 && Math.abs(f) > 50) ||
                  Math.abs(f) > g / 2)
                  ? d.flexAnimate(k, d.vars.pauseOnAction)
                  : n ||
                    d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0);
              }
              ((a = null), (c = null), (h = null), (e = null), (q = 0));
            }
          }
          var a,
            c,
            e,
            g,
            h,
            i,
            j = !1,
            o = 0,
            p = 0,
            q = 0;
          f
            ? ((b.style.msTouchAction = 'none'),
              (b._gesture = new MSGesture()),
              (b._gesture.target = b),
              b.addEventListener('MSPointerDown', u, !1),
              (b._slider = d),
              b.addEventListener('MSGestureChange', v, !1),
              b.addEventListener('MSGestureEnd', w, !1))
            : b.addEventListener('touchstart', r, !1);
        },
        resize: function () {
          !d.animating &&
            d.is(':visible') &&
            (m || d.doMath(),
            n
              ? p.smoothHeight()
              : m
                ? (d.slides.width(d.computedW),
                  d.update(d.pagingCount),
                  d.setProps())
                : k
                  ? (d.viewport.height(d.h), d.setProps(d.h, 'setTotal'))
                  : (d.vars.smoothHeight && p.smoothHeight(),
                    d.newSlides.width(d.computedW),
                    d.setProps(d.computedW, 'setTotal')));
        },
        smoothHeight: function (a) {
          if (!k || n) {
            var b = n ? d : d.viewport;
            a
              ? b.animate({ height: d.slides.eq(d.animatingTo).height() }, a)
              : b.height(d.slides.eq(d.animatingTo).height());
          }
        },
        sync: function (b) {
          var c = a(d.vars.sync).data('flexslider'),
            e = d.animatingTo;
          switch (b) {
            case 'animate':
              c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
              break;
            case 'play':
              c.playing || c.asNav || c.play();
              break;
            case 'pause':
              c.pause();
          }
        },
        uniqueID: function (b) {
          return (
            b.find('[id]').each(function () {
              var b = a(this);
              b.attr('id', b.attr('id') + '_clone');
            }),
            b
          );
        },
        pauseInvisible: {
          visProp: null,
          init: function () {
            var a = ['webkit', 'moz', 'ms', 'o'];
            if ('hidden' in document) return 'hidden';
            for (var b = 0; b < a.length; b++)
              a[b] + 'Hidden' in document &&
                (p.pauseInvisible.visProp = a[b] + 'Hidden');
            if (p.pauseInvisible.visProp) {
              var c =
                p.pauseInvisible.visProp.replace(/[H|h]idden/, '') +
                'visibilitychange';
              document.addEventListener(c, function () {
                p.pauseInvisible.isHidden()
                  ? d.startTimeout
                    ? clearTimeout(d.startTimeout)
                    : d.pause()
                  : d.started
                    ? d.play()
                    : d.vars.initDelay > 0
                      ? setTimeout(d.play, d.vars.initDelay)
                      : d.play();
              });
            }
          },
          isHidden: function () {
            return document[p.pauseInvisible.visProp] || !1;
          },
        },
        setToClearWatchedEvent: function () {
          (clearTimeout(j),
            (j = setTimeout(function () {
              i = '';
            }, 3e3)));
        },
      }),
      (d.flexAnimate = function (b, c, f, h, i) {
        if (
          (d.vars.animationLoop ||
            b === d.currentSlide ||
            (d.direction = b > d.currentSlide ? 'next' : 'prev'),
          o &&
            1 === d.pagingCount &&
            (d.direction = d.currentItem < b ? 'next' : 'prev'),
          !d.animating && (d.canAdvance(b, i) || f) && d.is(':visible'))
        ) {
          if (o && h) {
            var j = a(d.vars.asNavFor).data('flexslider');
            if (
              ((d.atEnd = 0 === b || b === d.count - 1),
              j.flexAnimate(b, !0, !1, !0, i),
              (d.direction = d.currentItem < b ? 'next' : 'prev'),
              (j.direction = d.direction),
              Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b)
            )
              return (
                (d.currentItem = b),
                d.slides
                  .removeClass(e + 'active-slide')
                  .eq(b)
                  .addClass(e + 'active-slide'),
                !1
              );
            ((d.currentItem = b),
              d.slides
                .removeClass(e + 'active-slide')
                .eq(b)
                .addClass(e + 'active-slide'),
              (b = Math.floor(b / d.visible)));
          }
          if (
            ((d.animating = !0),
            (d.animatingTo = b),
            c && d.pause(),
            d.vars.before(d),
            d.syncExists && !i && p.sync('animate'),
            d.vars.controlNav && p.controlNav.active(),
            m ||
              d.slides
                .removeClass(e + 'active-slide')
                .eq(b)
                .addClass(e + 'active-slide'),
            (d.atEnd = 0 === b || b === d.last),
            d.vars.directionNav && p.directionNav.update(),
            b === d.last && (d.vars.end(d), d.vars.animationLoop || d.pause()),
            n)
          )
            g
              ? (d.slides.eq(d.currentSlide).css({ opacity: 0, zIndex: 1 }),
                d.slides.eq(b).css({ opacity: 1, zIndex: 2 }),
                d.wrapup(q))
              : (d.slides
                  .eq(d.currentSlide)
                  .css({ zIndex: 1 })
                  .animate(
                    { opacity: 0 },
                    d.vars.animationSpeed,
                    d.vars.easing
                  ),
                d.slides
                  .eq(b)
                  .css({ zIndex: 2 })
                  .animate(
                    { opacity: 1 },
                    d.vars.animationSpeed,
                    d.vars.easing,
                    d.wrapup
                  ));
          else {
            var r,
              s,
              t,
              q = k ? d.slides.filter(':first').height() : d.computedW;
            (m
              ? ((r = d.vars.itemMargin),
                (t = (d.itemW + r) * d.move * d.animatingTo),
                (s = t > d.limit && 1 !== d.visible ? d.limit : t))
              : (s =
                  0 === d.currentSlide &&
                  b === d.count - 1 &&
                  d.vars.animationLoop &&
                  'next' !== d.direction
                    ? l
                      ? (d.count + d.cloneOffset) * q
                      : 0
                    : d.currentSlide === d.last &&
                        0 === b &&
                        d.vars.animationLoop &&
                        'prev' !== d.direction
                      ? l
                        ? 0
                        : (d.count + 1) * q
                      : l
                        ? (d.count - 1 - b + d.cloneOffset) * q
                        : (b + d.cloneOffset) * q),
              d.setProps(s, '', d.vars.animationSpeed),
              d.transitions
                ? ((d.vars.animationLoop && d.atEnd) ||
                    ((d.animating = !1), (d.currentSlide = d.animatingTo)),
                  d.container.unbind('webkitTransitionEnd transitionend'),
                  d.container.bind(
                    'webkitTransitionEnd transitionend',
                    function () {
                      (clearTimeout(d.ensureAnimationEnd), d.wrapup(q));
                    }
                  ),
                  clearTimeout(d.ensureAnimationEnd),
                  (d.ensureAnimationEnd = setTimeout(function () {
                    d.wrapup(q);
                  }, d.vars.animationSpeed + 100)))
                : d.container.animate(
                    d.args,
                    d.vars.animationSpeed,
                    d.vars.easing,
                    function () {
                      d.wrapup(q);
                    }
                  ));
          }
          d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed);
        }
      }),
      (d.wrapup = function (a) {
        (n ||
          m ||
          (0 === d.currentSlide &&
          d.animatingTo === d.last &&
          d.vars.animationLoop
            ? d.setProps(a, 'jumpEnd')
            : d.currentSlide === d.last &&
              0 === d.animatingTo &&
              d.vars.animationLoop &&
              d.setProps(a, 'jumpStart')),
          (d.animating = !1),
          (d.currentSlide = d.animatingTo),
          d.vars.after(d));
      }),
      (d.animateSlides = function () {
        !d.animating && q && d.flexAnimate(d.getTarget('next'));
      }),
      (d.pause = function () {
        (clearInterval(d.animatedSlides),
          (d.animatedSlides = null),
          (d.playing = !1),
          d.vars.pausePlay && p.pausePlay.update('play'),
          d.syncExists && p.sync('pause'));
      }),
      (d.play = function () {
        (d.playing && clearInterval(d.animatedSlides),
          (d.animatedSlides =
            d.animatedSlides ||
            setInterval(d.animateSlides, d.vars.slideshowSpeed)),
          (d.started = d.playing = !0),
          d.vars.pausePlay && p.pausePlay.update('pause'),
          d.syncExists && p.sync('play'));
      }),
      (d.stop = function () {
        (d.pause(), (d.stopped = !0));
      }),
      (d.canAdvance = function (a, b) {
        var c = o ? d.pagingCount - 1 : d.last;
        return b
          ? !0
          : o &&
              d.currentItem === d.count - 1 &&
              0 === a &&
              'prev' === d.direction
            ? !0
            : o &&
                0 === d.currentItem &&
                a === d.pagingCount - 1 &&
                'next' !== d.direction
              ? !1
              : a !== d.currentSlide || o
                ? d.vars.animationLoop
                  ? !0
                  : d.atEnd &&
                      0 === d.currentSlide &&
                      a === c &&
                      'next' !== d.direction
                    ? !1
                    : d.atEnd &&
                        d.currentSlide === c &&
                        0 === a &&
                        'next' === d.direction
                      ? !1
                      : !0
                : !1;
      }),
      (d.getTarget = function (a) {
        return (
          (d.direction = a),
          'next' === a
            ? d.currentSlide === d.last
              ? 0
              : d.currentSlide + 1
            : 0 === d.currentSlide
              ? d.last
              : d.currentSlide - 1
        );
      }),
      (d.setProps = function (a, b, c) {
        var e = (function () {
          var c = a
              ? a
              : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo,
            e = (function () {
              if (m)
                return 'setTouch' === b
                  ? a
                  : l && d.animatingTo === d.last
                    ? 0
                    : l
                      ? d.limit -
                        (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo
                      : d.animatingTo === d.last
                        ? d.limit
                        : c;
              switch (b) {
                case 'setTotal':
                  return l
                    ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a
                    : (d.currentSlide + d.cloneOffset) * a;
                case 'setTouch':
                  return l ? a : a;
                case 'jumpEnd':
                  return l ? a : d.count * a;
                case 'jumpStart':
                  return l ? d.count * a : a;
                default:
                  return a;
              }
            })();
          return -1 * e + 'px';
        })();
        (d.transitions &&
          ((e = k
            ? 'translate3d(0,' + e + ',0)'
            : 'translate3d(' + e + ',0,0)'),
          (c = void 0 !== c ? c / 1e3 + 's' : '0s'),
          d.container.css('-' + d.pfx + '-transition-duration', c),
          d.container.css('transition-duration', c)),
          (d.args[d.prop] = e),
          (d.transitions || void 0 === c) && d.container.css(d.args),
          d.container.css('transform', e));
      }),
      (d.setup = function (b) {
        if (n)
          (d.slides.css({
            width: '100%',
            float: 'left',
            marginRight: '-100%',
            position: 'relative',
          }),
            'init' === b &&
              (g
                ? d.slides
                    .css({
                      opacity: 0,
                      display: 'block',
                      webkitTransition:
                        'opacity ' + d.vars.animationSpeed / 1e3 + 's ease',
                      zIndex: 1,
                    })
                    .eq(d.currentSlide)
                    .css({ opacity: 1, zIndex: 2 })
                : d.slides
                    .css({ opacity: 0, display: 'block', zIndex: 1 })
                    .eq(d.currentSlide)
                    .css({ zIndex: 2 })
                    .animate(
                      { opacity: 1 },
                      d.vars.animationSpeed,
                      d.vars.easing
                    )),
            d.vars.smoothHeight && p.smoothHeight());
        else {
          var c, f;
          ('init' === b &&
            ((d.viewport = a('<div class="' + e + 'viewport"></div>')
              .css({ overflow: 'hidden', position: 'relative' })
              .appendTo(d)
              .append(d.container)),
            (d.cloneCount = 0),
            (d.cloneOffset = 0),
            l &&
              ((f = a.makeArray(d.slides).reverse()),
              (d.slides = a(f)),
              d.container.empty().append(d.slides))),
            d.vars.animationLoop &&
              !m &&
              ((d.cloneCount = 2),
              (d.cloneOffset = 1),
              'init' !== b && d.container.find('.clone').remove(),
              p
                .uniqueID(
                  d.slides
                    .first()
                    .clone()
                    .addClass('clone')
                    .attr('aria-hidden', 'true')
                )
                .appendTo(d.container),
              p
                .uniqueID(
                  d.slides
                    .last()
                    .clone()
                    .addClass('clone')
                    .attr('aria-hidden', 'true')
                )
                .prependTo(d.container)),
            (d.newSlides = a(d.vars.selector, d)),
            (c = l
              ? d.count - 1 - d.currentSlide + d.cloneOffset
              : d.currentSlide + d.cloneOffset),
            k && !m
              ? (d.container
                  .height(200 * (d.count + d.cloneCount) + '%')
                  .css('position', 'absolute')
                  .width('100%'),
                setTimeout(
                  function () {
                    (d.newSlides.css({ display: 'block' }),
                      d.doMath(),
                      d.viewport.height(d.h),
                      d.setProps(c * d.h, 'init'));
                  },
                  'init' === b ? 100 : 0
                ))
              : (d.container.width(200 * (d.count + d.cloneCount) + '%'),
                d.setProps(c * d.computedW, 'init'),
                setTimeout(
                  function () {
                    (d.doMath(),
                      d.newSlides.css({
                        width: d.computedW,
                        float: 'left',
                        display: 'block',
                      }),
                      d.vars.smoothHeight && p.smoothHeight());
                  },
                  'init' === b ? 100 : 0
                )));
        }
        (m ||
          d.slides
            .removeClass(e + 'active-slide')
            .eq(d.currentSlide)
            .addClass(e + 'active-slide'),
          d.vars.init(d));
      }),
      (d.doMath = function () {
        var a = d.slides.first(),
          b = d.vars.itemMargin,
          c = d.vars.minItems,
          e = d.vars.maxItems;
        ((d.w = void 0 === d.viewport ? d.width() : d.viewport.width()),
          (d.h = a.height()),
          (d.boxPadding = a.outerWidth() - a.width()),
          m
            ? ((d.itemT = d.vars.itemWidth + b),
              (d.minW = c ? c * d.itemT : d.w),
              (d.maxW = e ? e * d.itemT - b : d.w),
              (d.itemW =
                d.minW > d.w
                  ? (d.w - b * (c - 1)) / c
                  : d.maxW < d.w
                    ? (d.w - b * (e - 1)) / e
                    : d.vars.itemWidth > d.w
                      ? d.w
                      : d.vars.itemWidth),
              (d.visible = Math.floor(d.w / d.itemW)),
              (d.move =
                d.vars.move > 0 && d.vars.move < d.visible
                  ? d.vars.move
                  : d.visible),
              (d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1)),
              (d.last = d.pagingCount - 1),
              (d.limit =
                1 === d.pagingCount
                  ? 0
                  : d.vars.itemWidth > d.w
                    ? d.itemW * (d.count - 1) + b * (d.count - 1)
                    : (d.itemW + b) * d.count - d.w - b))
            : ((d.itemW = d.w),
              (d.pagingCount = d.count),
              (d.last = d.count - 1)),
          (d.computedW = d.itemW - d.boxPadding));
      }),
      (d.update = function (a, b) {
        (d.doMath(),
          m ||
            (a < d.currentSlide
              ? (d.currentSlide += 1)
              : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1),
            (d.animatingTo = d.currentSlide)),
          d.vars.controlNav &&
            !d.manualControls &&
            (('add' === b && !m) || d.pagingCount > d.controlNav.length
              ? p.controlNav.update('add')
              : (('remove' === b && !m) ||
                  d.pagingCount < d.controlNav.length) &&
                (m &&
                  d.currentSlide > d.last &&
                  ((d.currentSlide -= 1), (d.animatingTo -= 1)),
                p.controlNav.update('remove', d.last))),
          d.vars.directionNav && p.directionNav.update());
      }),
      (d.addSlide = function (b, c) {
        var e = a(b);
        ((d.count += 1),
          (d.last = d.count - 1),
          k && l
            ? void 0 !== c
              ? d.slides.eq(d.count - c).after(e)
              : d.container.prepend(e)
            : void 0 !== c
              ? d.slides.eq(c).before(e)
              : d.container.append(e),
          d.update(c, 'add'),
          (d.slides = a(d.vars.selector + ':not(.clone)', d)),
          d.setup(),
          d.vars.added(d));
      }),
      (d.removeSlide = function (b) {
        var c = isNaN(b) ? d.slides.index(a(b)) : b;
        ((d.count -= 1),
          (d.last = d.count - 1),
          isNaN(b)
            ? a(b, d.slides).remove()
            : k && l
              ? d.slides.eq(d.last).remove()
              : d.slides.eq(b).remove(),
          d.doMath(),
          d.update(c, 'remove'),
          (d.slides = a(d.vars.selector + ':not(.clone)', d)),
          d.setup(),
          d.vars.removed(d));
      }),
      p.init());
  }),
    a(window)
      .blur(function () {
        focused = !1;
      })
      .focus(function () {
        focused = !0;
      }),
    (a.flexslider.defaults = {
      namespace: 'flex-',
      selector: '.slides > li',
      animation: 'fade',
      easing: 'swing',
      direction: 'horizontal',
      reverse: !1,
      animationLoop: !0,
      smoothHeight: !1,
      startAt: 0,
      slideshow: !0,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      initDelay: 0,
      randomize: !1,
      thumbCaptions: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      pauseInvisible: !0,
      useCSS: !0,
      touch: !0,
      video: !1,
      controlNav: !0,
      directionNav: !0,
      prevText: 'Previous',
      nextText: 'Next',
      keyboard: !0,
      multipleKeyboard: !1,
      mousewheel: !1,
      pausePlay: !1,
      pauseText: 'Pause',
      playText: 'Play',
      controlsContainer: '',
      manualControls: '',
      sync: '',
      asNavFor: '',
      itemWidth: 0,
      itemMargin: 0,
      minItems: 1,
      maxItems: 0,
      move: 0,
      allowOneSlide: !0,
      start: function () {},
      before: function () {},
      after: function () {},
      end: function () {},
      added: function () {},
      removed: function () {},
      init: function () {},
    }),
    (a.fn.flexslider = function (b) {
      if ((void 0 === b && (b = {}), 'object' == typeof b))
        return this.each(function () {
          var c = a(this),
            d = b.selector ? b.selector : '.slides > li',
            e = c.find(d);
          (1 === e.length && b.allowOneSlide === !0) || 0 === e.length
            ? (e.fadeIn(400), b.start && b.start(c))
            : void 0 === c.data('flexslider') && new a.flexslider(this, b);
        });
      var c = a(this).data('flexslider');
      switch (b) {
        case 'play':
          c.play();
          break;
        case 'pause':
          c.pause();
          break;
        case 'stop':
          c.stop();
          break;
        case 'next':
          c.flexAnimate(c.getTarget('next'), !0);
          break;
        case 'prev':
        case 'previous':
          c.flexAnimate(c.getTarget('prev'), !0);
          break;
        default:
          'number' == typeof b && c.flexAnimate(b, !0);
      }
    }));
})(jQuery);
/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:false, latedef:true, newcap:true, noarg:true, noempty:true, nonew:true, undef:true, strict:false, trailing:true, 
  browser:true, jquery:true */
/*!
 * jQuery flexslider extension
 * Original author: @markirby
 * Licensed under the MIT license
 */
!(function (e) {
  function t(t, o) {
    ((this.element = t),
      (this.options = e.extend({}, n, o)),
      (this._flexslider = e(t).data('flexslider')),
      (this._originalFlexsliderWrapupFunction = this._flexslider.wrapup),
      (this._defaults = n),
      (this._name = i),
      this.init());
  }
  var i = 'flexsliderManualDirectionControls',
    n = {
      previousElementSelector: '.previous',
      nextElementSelector: '.next',
      disabledStateClassName: 'disable',
    };
  ((t.prototype.init = function () {
    this.addEventListeners();
    var e = this;
    this._flexslider.wrapup = function (t) {
      e.onAnimationEnd.call(e, t);
    };
  }),
    (t.prototype.addEventListeners = function () {
      (e(this.element)
        .find(this.options.previousElementSelector)
        .bind(
          'touchstart.flexsliderPromo click.flexsliderPromo',
          { self: this },
          function (e) {
            (e.stopPropagation(),
              e.preventDefault(),
              e.handled ||
                (e.data.self.goToTargetInDirection('prev'), (e.handled = !0)));
          }
        ),
        e(this.element)
          .find(this.options.nextElementSelector)
          .bind('click.flexsliderPromo', { self: this }, function (e) {
            (e.stopPropagation(),
              e.preventDefault(),
              e.handled ||
                (e.data.self.goToTargetInDirection('next'), (e.handled = !0)));
          }));
    }),
    (t.prototype.goToTargetInDirection = function (e) {
      var t = this._flexslider.getTarget(e);
      return (
        this._flexslider.canAdvance(t) && this._flexslider.flexAnimate(t),
        !1
      );
    }),
    (t.prototype.addOrRemoveDisabledStateForDirection = function (e, t) {
      var i = this._flexslider.getTarget(e);
      this._flexslider.canAdvance(i)
        ? t.removeClass(this.options.disabledStateClassName)
        : t.addClass(this.options.disabledStateClassName);
    }),
    (t.prototype.onAnimationEnd = function (t) {
      var i = e(this.element).find(this.options.nextElementSelector),
        n = e(this.element).find(this.options.previousElementSelector);
      (this.addOrRemoveDisabledStateForDirection('next', i),
        this.addOrRemoveDisabledStateForDirection('prev', n),
        this._originalFlexsliderWrapupFunction(t));
    }),
    (e.fn[i] = function (n) {
      return this.each(function () {
        e.data(this, 'plugin_' + i) ||
          e.data(this, 'plugin_' + i, new t(this, n));
      });
    }));
})(jQuery, window, document);

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
(function (a) {
  function d(b) {
    var c = b || window.event,
      d = [].slice.call(arguments, 1),
      e = 0,
      f = !0,
      g = 0,
      h = 0;
    return (
      (b = a.event.fix(c)),
      (b.type = 'mousewheel'),
      c.wheelDelta && (e = c.wheelDelta / 120),
      c.detail && (e = -c.detail / 3),
      (h = e),
      c.axis !== undefined &&
        c.axis === c.HORIZONTAL_AXIS &&
        ((h = 0), (g = -1 * e)),
      c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120),
      c.wheelDeltaX !== undefined && (g = (-1 * c.wheelDeltaX) / 120),
      d.unshift(b, e, g, h),
      (a.event.dispatch || a.event.handle).apply(this, d)
    );
  }
  var b = ['DOMMouseScroll', 'mousewheel'];
  if (a.event.fixHooks)
    for (var c = b.length; c; ) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
  ((a.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener)
        for (var a = b.length; a; ) this.addEventListener(b[--a], d, !1);
      else this.onmousewheel = d;
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var a = b.length; a; ) this.removeEventListener(b[--a], d, !1);
      else this.onmousewheel = null;
    },
  }),
    a.fn.extend({
      mousewheel: function (a) {
        return a ? this.bind('mousewheel', a) : this.trigger('mousewheel');
      },
      unmousewheel: function (a) {
        return this.unbind('mousewheel', a);
      },
    }));
})(jQuery);
