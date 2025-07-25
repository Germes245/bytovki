/*Modernizr v2.8.3  -  jQuery Easing v1.3  -  Bootstrap v3.3.2 - appear - countTo - owl.carousel - Magnific Popup - Retina.js - Sticky - jQuery Parallax - classi - jQuery Validation - jQuery Form Plugin

/*Modernizr v2.8.3*/
window.Modernizr = (function (e, t, n) {
  function r(e) {
    b.cssText = e;
  }
  function o(e, t) {
    return r(S.join(e + ';') + (t || ''));
  }
  function a(e, t) {
    return typeof e === t;
  }
  function i(e, t) {
    return !!~('' + e).indexOf(t);
  }
  function c(e, t) {
    for (var r in e) {
      var o = e[r];
      if (!i(o, '-') && b[o] !== n) return 'pfx' == t ? o : !0;
    }
    return !1;
  }
  function s(e, t, r) {
    for (var o in e) {
      var i = t[e[o]];
      if (i !== n)
        return r === !1 ? e[o] : a(i, 'function') ? i.bind(r || t) : i;
    }
    return !1;
  }
  function u(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.slice(1),
      o = (e + ' ' + k.join(r + ' ') + r).split(' ');
    return a(t, 'string') || a(t, 'undefined')
      ? c(o, t)
      : ((o = (e + ' ' + T.join(r + ' ') + r).split(' ')), s(o, t, n));
  }
  function l() {
    ((p.input = (function (n) {
      for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in E);
      return (
        j.list &&
          (j.list = !(!t.createElement('datalist') || !e.HTMLDataListElement)),
        j
      );
    })(
      'autocomplete autofocus list placeholder max min multiple pattern required step'.split(
        ' '
      )
    )),
      (p.inputtypes = (function (e) {
        for (var r, o, a, i = 0, c = e.length; c > i; i++)
          (E.setAttribute('type', (o = e[i])),
            (r = 'text' !== E.type),
            r &&
              ((E.value = x),
              (E.style.cssText = 'position:absolute;visibility:hidden;'),
              /^range$/.test(o) && E.style.WebkitAppearance !== n
                ? (g.appendChild(E),
                  (a = t.defaultView),
                  (r =
                    a.getComputedStyle &&
                    'textfield' !==
                      a.getComputedStyle(E, null).WebkitAppearance &&
                    0 !== E.offsetHeight),
                  g.removeChild(E))
                : /^(search|tel)$/.test(o) ||
                  (r = /^(url|email)$/.test(o)
                    ? E.checkValidity && E.checkValidity() === !1
                    : E.value != x)),
            (P[e[i]] = !!r));
        return P;
      })(
        'search tel url email datetime date month week time datetime-local number range color'.split(
          ' '
        )
      )));
  }
  var d,
    f,
    m = '2.8.3',
    p = {},
    h = !0,
    g = t.documentElement,
    v = 'modernizr',
    y = t.createElement(v),
    b = y.style,
    E = t.createElement('input'),
    x = ':)',
    w = {}.toString,
    S = ' -webkit- -moz- -o- -ms- '.split(' '),
    C = 'Webkit Moz O ms',
    k = C.split(' '),
    T = C.toLowerCase().split(' '),
    N = { svg: 'http://www.w3.org/2000/svg' },
    M = {},
    P = {},
    j = {},
    $ = [],
    D = $.slice,
    F = function (e, n, r, o) {
      var a,
        i,
        c,
        s,
        u = t.createElement('div'),
        l = t.body,
        d = l || t.createElement('body');
      if (parseInt(r, 10))
        for (; r--; )
          ((c = t.createElement('div')),
            (c.id = o ? o[r] : v + (r + 1)),
            u.appendChild(c));
      return (
        (a = ['&#173;', '<style id="s', v, '">', e, '</style>'].join('')),
        (u.id = v),
        ((l ? u : d).innerHTML += a),
        d.appendChild(u),
        l ||
          ((d.style.background = ''),
          (d.style.overflow = 'hidden'),
          (s = g.style.overflow),
          (g.style.overflow = 'hidden'),
          g.appendChild(d)),
        (i = n(u, e)),
        l
          ? u.parentNode.removeChild(u)
          : (d.parentNode.removeChild(d), (g.style.overflow = s)),
        !!i
      );
    },
    z = function (t) {
      var n = e.matchMedia || e.msMatchMedia;
      if (n) return (n(t) && n(t).matches) || !1;
      var r;
      return (
        F(
          '@media ' + t + ' { #' + v + ' { position: absolute; } }',
          function (t) {
            r =
              'absolute' ==
              (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)
                .position;
          }
        ),
        r
      );
    },
    A = (function () {
      function e(e, o) {
        ((o = o || t.createElement(r[e] || 'div')), (e = 'on' + e));
        var i = e in o;
        return (
          i ||
            (o.setAttribute || (o = t.createElement('div')),
            o.setAttribute &&
              o.removeAttribute &&
              (o.setAttribute(e, ''),
              (i = a(o[e], 'function')),
              a(o[e], 'undefined') || (o[e] = n),
              o.removeAttribute(e))),
          (o = null),
          i
        );
      }
      var r = {
        select: 'input',
        change: 'input',
        submit: 'form',
        reset: 'form',
        error: 'img',
        load: 'img',
        abort: 'img',
      };
      return e;
    })(),
    L = {}.hasOwnProperty;
  ((f =
    a(L, 'undefined') || a(L.call, 'undefined')
      ? function (e, t) {
          return t in e && a(e.constructor.prototype[t], 'undefined');
        }
      : function (e, t) {
          return L.call(e, t);
        }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (e) {
        var t = this;
        if ('function' != typeof t) throw new TypeError();
        var n = D.call(arguments, 1),
          r = function () {
            if (this instanceof r) {
              var o = function () {};
              o.prototype = t.prototype;
              var a = new o(),
                i = t.apply(a, n.concat(D.call(arguments)));
              return Object(i) === i ? i : a;
            }
            return t.apply(e, n.concat(D.call(arguments)));
          };
        return r;
      }),
    (M.flexbox = function () {
      return u('flexWrap');
    }),
    (M.flexboxlegacy = function () {
      return u('boxDirection');
    }),
    (M.canvas = function () {
      var e = t.createElement('canvas');
      return !(!e.getContext || !e.getContext('2d'));
    }),
    (M.canvastext = function () {
      return !(
        !p.canvas ||
        !a(t.createElement('canvas').getContext('2d').fillText, 'function')
      );
    }),
    (M.webgl = function () {
      return !!e.WebGLRenderingContext;
    }),
    (M.touch = function () {
      var n;
      return (
        'ontouchstart' in e || (e.DocumentTouch && t instanceof DocumentTouch)
          ? (n = !0)
          : F(
              [
                '@media (',
                S.join('touch-enabled),('),
                v,
                ')',
                '{#modernizr{top:9px;position:absolute}}',
              ].join(''),
              function (e) {
                n = 9 === e.offsetTop;
              }
            ),
        n
      );
    }),
    (M.geolocation = function () {
      return 'geolocation' in navigator;
    }),
    (M.postmessage = function () {
      return !!e.postMessage;
    }),
    (M.websqldatabase = function () {
      return !!e.openDatabase;
    }),
    (M.indexedDB = function () {
      return !!u('indexedDB', e);
    }),
    (M.hashchange = function () {
      return A('hashchange', e) && (t.documentMode === n || t.documentMode > 7);
    }),
    (M.history = function () {
      return !(!e.history || !history.pushState);
    }),
    (M.draganddrop = function () {
      var e = t.createElement('div');
      return 'draggable' in e || ('ondragstart' in e && 'ondrop' in e);
    }),
    (M.websockets = function () {
      return 'WebSocket' in e || 'MozWebSocket' in e;
    }),
    (M.rgba = function () {
      return (
        r('background-color:rgba(150,255,150,.5)'),
        i(b.backgroundColor, 'rgba')
      );
    }),
    (M.hsla = function () {
      return (
        r('background-color:hsla(120,40%,100%,.5)'),
        i(b.backgroundColor, 'rgba') || i(b.backgroundColor, 'hsla')
      );
    }),
    (M.multiplebgs = function () {
      return (
        r('background:url(https://),url(https://),red url(https://)'),
        /(url\s*\(.*?){3}/.test(b.background)
      );
    }),
    (M.backgroundsize = function () {
      return u('backgroundSize');
    }),
    (M.borderimage = function () {
      return u('borderImage');
    }),
    (M.borderradius = function () {
      return u('borderRadius');
    }),
    (M.boxshadow = function () {
      return u('boxShadow');
    }),
    (M.textshadow = function () {
      return '' === t.createElement('div').style.textShadow;
    }),
    (M.opacity = function () {
      return (o('opacity:.55'), /^0.55$/.test(b.opacity));
    }),
    (M.cssanimations = function () {
      return u('animationName');
    }),
    (M.csscolumns = function () {
      return u('columnCount');
    }),
    (M.cssgradients = function () {
      var e = 'background-image:',
        t = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        n = 'linear-gradient(left top,#9f9, white);';
      return (
        r(
          (e + '-webkit- '.split(' ').join(t + e) + S.join(n + e)).slice(
            0,
            -e.length
          )
        ),
        i(b.backgroundImage, 'gradient')
      );
    }),
    (M.cssreflections = function () {
      return u('boxReflect');
    }),
    (M.csstransforms = function () {
      return !!u('transform');
    }),
    (M.csstransforms3d = function () {
      var e = !!u('perspective');
      return (
        e &&
          'webkitPerspective' in g.style &&
          F(
            '@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',
            function (t) {
              e = 9 === t.offsetLeft && 3 === t.offsetHeight;
            }
          ),
        e
      );
    }),
    (M.csstransitions = function () {
      return u('transition');
    }),
    (M.fontface = function () {
      var e;
      return (
        F(
          '@font-face {font-family:"font";src:url("https://")}',
          function (n, r) {
            var o = t.getElementById('smodernizr'),
              a = o.sheet || o.styleSheet,
              i = a
                ? a.cssRules && a.cssRules[0]
                  ? a.cssRules[0].cssText
                  : a.cssText || ''
                : '';
            e = /src/i.test(i) && 0 === i.indexOf(r.split(' ')[0]);
          }
        ),
        e
      );
    }),
    (M.generatedcontent = function () {
      var e;
      return (
        F(
          [
            '#',
            v,
            '{font:0/0 a}#',
            v,
            ':after{content:"',
            x,
            '";visibility:hidden;font:3px/1 a}',
          ].join(''),
          function (t) {
            e = t.offsetHeight >= 3;
          }
        ),
        e
      );
    }),
    (M.video = function () {
      var e = t.createElement('video'),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, '')),
          (n.h264 = e
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, '')),
          (n.webm = e
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, '')));
      } catch (r) {}
      return n;
    }),
    (M.audio = function () {
      var e = t.createElement('audio'),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, '')),
          (n.mp3 = e.canPlayType('audio/mpeg;').replace(/^no$/, '')),
          (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')),
          (n.m4a = (
            e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;')
          ).replace(/^no$/, '')));
      } catch (r) {}
      return n;
    }),
    (M.localstorage = function () {
      try {
        return (localStorage.setItem(v, v), localStorage.removeItem(v), !0);
      } catch (e) {
        return !1;
      }
    }),
    (M.sessionstorage = function () {
      try {
        return (sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0);
      } catch (e) {
        return !1;
      }
    }),
    (M.webworkers = function () {
      return !!e.Worker;
    }),
    (M.applicationcache = function () {
      return !!e.applicationCache;
    }),
    (M.svg = function () {
      return (
        !!t.createElementNS && !!t.createElementNS(N.svg, 'svg').createSVGRect
      );
    }),
    (M.inlinesvg = function () {
      var e = t.createElement('div');
      return (
        (e.innerHTML = '<svg/>'),
        (e.firstChild && e.firstChild.namespaceURI) == N.svg
      );
    }),
    (M.smil = function () {
      return (
        !!t.createElementNS &&
        /SVGAnimate/.test(w.call(t.createElementNS(N.svg, 'animate')))
      );
    }),
    (M.svgclippaths = function () {
      return (
        !!t.createElementNS &&
        /SVGClipPath/.test(w.call(t.createElementNS(N.svg, 'clipPath')))
      );
    }));
  for (var H in M)
    f(M, H) &&
      ((d = H.toLowerCase()), (p[d] = M[H]()), $.push((p[d] ? '' : 'no-') + d));
  return (
    p.input || l(),
    (p.addTest = function (e, t) {
      if ('object' == typeof e) for (var r in e) f(e, r) && p.addTest(r, e[r]);
      else {
        if (((e = e.toLowerCase()), p[e] !== n)) return p;
        ((t = 'function' == typeof t ? t() : t),
          'undefined' != typeof h &&
            h &&
            (g.className += ' ' + (t ? '' : 'no-') + e),
          (p[e] = t));
      }
      return p;
    }),
    r(''),
    (y = E = null),
    (function (e, t) {
      function n(e, t) {
        var n = e.createElement('p'),
          r = e.getElementsByTagName('head')[0] || e.documentElement;
        return (
          (n.innerHTML = 'x<style>' + t + '</style>'),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = y.elements;
        return 'string' == typeof e ? e.split(' ') : e;
      }
      function o(e) {
        var t = v[e[h]];
        return (t || ((t = {}), g++, (e[h] = g), (v[g] = t)), t);
      }
      function a(e, n, r) {
        if ((n || (n = t), l)) return n.createElement(e);
        r || (r = o(n));
        var a;
        return (
          (a = r.cache[e]
            ? r.cache[e].cloneNode()
            : p.test(e)
              ? (r.cache[e] = r.createElem(e)).cloneNode()
              : r.createElem(e)),
          !a.canHaveChildren || m.test(e) || a.tagUrn
            ? a
            : r.frag.appendChild(a)
        );
      }
      function i(e, n) {
        if ((e || (e = t), l)) return e.createDocumentFragment();
        n = n || o(e);
        for (
          var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length;
          s > i;
          i++
        )
          a.createElement(c[i]);
        return a;
      }
      function c(e, t) {
        (t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return y.shivMethods ? a(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            'h,f',
            'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
              r()
                .join()
                .replace(/[\w\-]+/g, function (e) {
                  return (
                    t.createElem(e),
                    t.frag.createElement(e),
                    'c("' + e + '")'
                  );
                }) +
              ');return n}'
          )(y, t.frag)));
      }
      function s(e) {
        e || (e = t);
        var r = o(e);
        return (
          !y.shivCSS ||
            u ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
            )),
          l || c(e, r),
          e
        );
      }
      var u,
        l,
        d = '3.7.0',
        f = e.html5 || {},
        m =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        h = '_html5shiv',
        g = 0,
        v = {};
      !(function () {
        try {
          var e = t.createElement('a');
          ((e.innerHTML = '<xyz></xyz>'),
            (u = 'hidden' in e),
            (l =
              1 == e.childNodes.length ||
              (function () {
                t.createElement('a');
                var e = t.createDocumentFragment();
                return (
                  'undefined' == typeof e.cloneNode ||
                  'undefined' == typeof e.createDocumentFragment ||
                  'undefined' == typeof e.createElement
                );
              })()));
        } catch (n) {
          ((u = !0), (l = !0));
        }
      })();
      var y = {
        elements:
          f.elements ||
          'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
        version: d,
        shivCSS: f.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: f.shivMethods !== !1,
        type: 'default',
        shivDocument: s,
        createElement: a,
        createDocumentFragment: i,
      };
      ((e.html5 = y), s(t));
    })(this, t),
    (p._version = m),
    (p._prefixes = S),
    (p._domPrefixes = T),
    (p._cssomPrefixes = k),
    (p.mq = z),
    (p.hasEvent = A),
    (p.testProp = function (e) {
      return c([e]);
    }),
    (p.testAllProps = u),
    (p.testStyles = F),
    (p.prefixed = function (e, t, n) {
      return t ? u(e, t, n) : u(e, 'pfx');
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +
      (h ? ' js ' + $.join(' ') : '')),
    p
  );
})(this, this.document);

/*jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/*/
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function (a, b, c, d, e) {
    return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
  },
  easeInQuad: function (a, b, c, d, e) {
    return d * (b /= e) * b + c;
  },
  easeOutQuad: function (a, b, c, d, e) {
    return -d * (b /= e) * (b - 2) + c;
  },
  easeInOutQuad: function (a, b, c, d, e) {
    if ((b /= e / 2) < 1) return (d / 2) * b * b + c;
    return (-d / 2) * (--b * (b - 2) - 1) + c;
  },
  easeInCubic: function (a, b, c, d, e) {
    return d * (b /= e) * b * b + c;
  },
  easeOutCubic: function (a, b, c, d, e) {
    return d * ((b = b / e - 1) * b * b + 1) + c;
  },
  easeInOutCubic: function (a, b, c, d, e) {
    if ((b /= e / 2) < 1) return (d / 2) * b * b * b + c;
    return (d / 2) * ((b -= 2) * b * b + 2) + c;
  },
  easeInQuart: function (a, b, c, d, e) {
    return d * (b /= e) * b * b * b + c;
  },
  easeOutQuart: function (a, b, c, d, e) {
    return -d * ((b = b / e - 1) * b * b * b - 1) + c;
  },
  easeInOutQuart: function (a, b, c, d, e) {
    if ((b /= e / 2) < 1) return (d / 2) * b * b * b * b + c;
    return (-d / 2) * ((b -= 2) * b * b * b - 2) + c;
  },
  easeInQuint: function (a, b, c, d, e) {
    return d * (b /= e) * b * b * b * b + c;
  },
  easeOutQuint: function (a, b, c, d, e) {
    return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
  },
  easeInOutQuint: function (a, b, c, d, e) {
    if ((b /= e / 2) < 1) return (d / 2) * b * b * b * b * b + c;
    return (d / 2) * ((b -= 2) * b * b * b * b + 2) + c;
  },
  easeInSine: function (a, b, c, d, e) {
    return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c;
  },
  easeOutSine: function (a, b, c, d, e) {
    return d * Math.sin((b / e) * (Math.PI / 2)) + c;
  },
  easeInOutSine: function (a, b, c, d, e) {
    return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c;
  },
  easeInExpo: function (a, b, c, d, e) {
    return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
  },
  easeOutExpo: function (a, b, c, d, e) {
    return b == e ? c + d : d * (-Math.pow(2, (-10 * b) / e) + 1) + c;
  },
  easeInOutExpo: function (a, b, c, d, e) {
    if (b == 0) return c;
    if (b == e) return c + d;
    if ((b /= e / 2) < 1) return (d / 2) * Math.pow(2, 10 * (b - 1)) + c;
    return (d / 2) * (-Math.pow(2, -10 * --b) + 2) + c;
  },
  easeInCirc: function (a, b, c, d, e) {
    return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
  },
  easeOutCirc: function (a, b, c, d, e) {
    return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
  },
  easeInOutCirc: function (a, b, c, d, e) {
    if ((b /= e / 2) < 1) return (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c;
    return (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
  },
  easeInElastic: function (a, b, c, d, e) {
    var f = 1.70158;
    var g = 0;
    var h = d;
    if (b == 0) return c;
    if ((b /= e) == 1) return c + d;
    if (!g) g = e * 0.3;
    if (h < Math.abs(d)) {
      h = d;
      var f = g / 4;
    } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
    return (
      -(
        h *
        Math.pow(2, 10 * (b -= 1)) *
        Math.sin(((b * e - f) * 2 * Math.PI) / g)
      ) + c
    );
  },
  easeOutElastic: function (a, b, c, d, e) {
    var f = 1.70158;
    var g = 0;
    var h = d;
    if (b == 0) return c;
    if ((b /= e) == 1) return c + d;
    if (!g) g = e * 0.3;
    if (h < Math.abs(d)) {
      h = d;
      var f = g / 4;
    } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
    return (
      h * Math.pow(2, -10 * b) * Math.sin(((b * e - f) * 2 * Math.PI) / g) +
      d +
      c
    );
  },
  easeInOutElastic: function (a, b, c, d, e) {
    var f = 1.70158;
    var g = 0;
    var h = d;
    if (b == 0) return c;
    if ((b /= e / 2) == 2) return c + d;
    if (!g) g = e * 0.3 * 1.5;
    if (h < Math.abs(d)) {
      h = d;
      var f = g / 4;
    } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
    if (b < 1)
      return (
        -0.5 *
          h *
          Math.pow(2, 10 * (b -= 1)) *
          Math.sin(((b * e - f) * 2 * Math.PI) / g) +
        c
      );
    return (
      h *
        Math.pow(2, -10 * (b -= 1)) *
        Math.sin(((b * e - f) * 2 * Math.PI) / g) *
        0.5 +
      d +
      c
    );
  },
  easeInBack: function (a, b, c, d, e, f) {
    if (f == undefined) f = 1.70158;
    return d * (b /= e) * b * ((f + 1) * b - f) + c;
  },
  easeOutBack: function (a, b, c, d, e, f) {
    if (f == undefined) f = 1.70158;
    return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
  },
  easeInOutBack: function (a, b, c, d, e, f) {
    if (f == undefined) f = 1.70158;
    if ((b /= e / 2) < 1)
      return (d / 2) * b * b * (((f *= 1.525) + 1) * b - f) + c;
    return (d / 2) * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c;
  },
  easeInBounce: function (a, b, c, d, e) {
    return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
  },
  easeOutBounce: function (a, b, c, d, e) {
    if ((b /= e) < 1 / 2.75) {
      return d * 7.5625 * b * b + c;
    } else if (b < 2 / 2.75) {
      return d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c;
    } else if (b < 2.5 / 2.75) {
      return d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c;
    } else {
      return d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c;
    }
  },
  easeInOutBounce: function (a, b, c, d, e) {
    if (b < e / 2)
      return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * 0.5 + c;
    return (
      jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * 0.5 + d * 0.5 + c
    );
  },
});

/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ('undefined' == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
(+(function (a) {
  'use strict';
  var b = a.fn.jquery.split(' ')[0].split('.');
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (a) {
    'use strict';
    function b() {
      var a = document.createElement('bootstrap'),
        b = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
          transition: 'transitionend',
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    ((a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one('bsTransitionEnd', function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return (setTimeout(e, b), this);
    }),
      a(function () {
        ((a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            }));
      }));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data('bs.alert');
        (e || c.data('bs.alert', (e = new d(this))),
          'string' == typeof b && e[b].call(c));
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on('click', c, this.close);
      };
    ((d.VERSION = '3.3.2'),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger('closed.bs.alert').remove();
        }
        var e = a(this),
          f = e.attr('data-target');
        f || ((f = e.attr('href')), (f = f && f.replace(/.*(?=#[^\s]*$)/, '')));
        var g = a(f);
        (b && b.preventDefault(),
          g.length || (g = e.closest('.alert')),
          g.trigger((b = a.Event('close.bs.alert'))),
          b.isDefaultPrevented() ||
            (g.removeClass('in'),
            a.support.transition && g.hasClass('fade')
              ? g
                  .one('bsTransitionEnd', c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c()));
      }));
    var e = a.fn.alert;
    ((a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return ((a.fn.alert = e), this);
      }),
      a(document).on('click.bs.alert.data-api', c, d.prototype.close));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data('bs.button'),
          f = 'object' == typeof b && b;
        (e || d.data('bs.button', (e = new c(this, f))),
          'toggle' == b ? e.toggle() : b && e.setState(b));
      });
    }
    var c = function (b, d) {
      ((this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1));
    };
    ((c.VERSION = '3.3.2'),
      (c.DEFAULTS = { loadingText: 'loading...' }),
      (c.prototype.setState = function (b) {
        var c = 'disabled',
          d = this.$element,
          e = d.is('input') ? 'val' : 'html',
          f = d.data();
        ((b += 'Text'),
          null == f.resetText && d.data('resetText', d[e]()),
          setTimeout(
            a.proxy(function () {
              (d[e](null == f[b] ? this.options[b] : f[b]),
                'loadingText' == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c)));
            }, this),
            0
          ));
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find('input');
          ('radio' == c.prop('type') &&
            (c.prop('checked') && this.$element.hasClass('active')
              ? (a = !1)
              : b.find('.active').removeClass('active')),
            a &&
              c
                .prop('checked', !this.$element.hasClass('active'))
                .trigger('change'));
        } else
          this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
        a && this.$element.toggleClass('active');
      }));
    var d = a.fn.button;
    ((a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return ((a.fn.button = d), this);
      }),
      a(document)
        .on(
          'click.bs.button.data-api',
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            (d.hasClass('btn') || (d = d.closest('.btn')),
              b.call(d, 'toggle'),
              c.preventDefault());
          }
        )
        .on(
          'focus.bs.button.data-api blur.bs.button.data-api',
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest('.btn')
              .toggleClass('focus', /^focus(in)?$/.test(b.type));
          }
        ));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data('bs.carousel'),
          f = a.extend({}, c.DEFAULTS, d.data(), 'object' == typeof b && b),
          g = 'string' == typeof b ? b : f.slide;
        (e || d.data('bs.carousel', (e = new c(this, f))),
          'number' == typeof b
            ? e.to(b)
            : g
              ? e[g]()
              : f.interval && e.pause().cycle());
      });
    }
    var c = function (b, c) {
      ((this.$element = a(b)),
        (this.$indicators = this.$element.find('.carousel-indicators')),
        (this.options = c),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        this.options.keyboard &&
          this.$element.on('keydown.bs.carousel', a.proxy(this.keydown, this)),
        'hover' == this.options.pause &&
          !('ontouchstart' in document.documentElement) &&
          this.$element
            .on('mouseenter.bs.carousel', a.proxy(this.pause, this))
            .on('mouseleave.bs.carousel', a.proxy(this.cycle, this)));
    };
    ((c.VERSION = '3.3.2'),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: 'hover', wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children('.item')),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ('prev' == a && 0 === c) ||
            ('next' == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = 'prev' == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find('.item.active'))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
            ? this.$element.one('slid.bs.carousel', function () {
                b.to(a);
              })
            : c == a
              ? this.pause().cycle()
              : this.slide(a > c ? 'next' : 'prev', this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find('.next, .prev').length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide('next');
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide('prev');
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find('.item.active'),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = 'next' == b ? 'left' : 'right',
          i = this;
        if (f.hasClass('active')) return (this.sliding = !1);
        var j = f[0],
          k = a.Event('slide.bs.carousel', { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find('.active').removeClass('active');
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass('active');
          }
          var m = a.Event('slid.bs.carousel', {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass('slide')
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one('bsTransitionEnd', function () {
                    (f.removeClass([b, h].join(' ')).addClass('active'),
                      e.removeClass(['active', h].join(' ')),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0));
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass('active'),
                f.addClass('active'),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      }));
    var d = a.fn.carousel;
    ((a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return ((a.fn.carousel = d), this);
      }));
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr('data-target') ||
            ((d = e.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, ''))
        );
      if (f.hasClass('carousel')) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr('data-slide-to');
        (h && (g.interval = !1),
          b.call(f, g),
          h && f.data('bs.carousel').to(h),
          c.preventDefault());
      }
    };
    (a(document)
      .on('click.bs.carousel.data-api', '[data-slide]', e)
      .on('click.bs.carousel.data-api', '[data-slide-to]', e),
      a(window).on('load', function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      }));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      var c,
        d =
          b.attr('data-target') ||
          ((c = b.attr('href')) && c.replace(/.*(?=#[^\s]+$)/, ''));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data('bs.collapse'),
          f = a.extend({}, d.DEFAULTS, c.data(), 'object' == typeof b && b);
        (!e && f.toggle && 'show' == b && (f.toggle = !1),
          e || c.data('bs.collapse', (e = new d(this, f))),
          'string' == typeof b && e[b]());
      });
    }
    var d = function (b, c) {
      ((this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(this.options.trigger).filter(
          '[href="#' + b.id + '"], [data-target="#' + b.id + '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle());
    };
    ((d.VERSION = '3.3.2'),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass('width');
        return a ? 'width' : 'height';
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass('in')) {
          var b,
            e =
              this.$parent &&
              this.$parent.children('.panel').children('.in, .collapsing');
          if (
            !(
              e &&
              e.length &&
              ((b = e.data('bs.collapse')), b && b.transitioning)
            )
          ) {
            var f = a.Event('show.bs.collapse');
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, 'hide'), b || e.data('bs.collapse', null));
              var g = this.dimension();
              (this.$element
                .removeClass('collapse')
                .addClass('collapsing')
                [g](0)
                .attr('aria-expanded', !0),
                this.$trigger
                  .removeClass('collapsed')
                  .attr('aria-expanded', !0),
                (this.transitioning = 1));
              var h = function () {
                (this.$element
                  .removeClass('collapsing')
                  .addClass('collapse in')
                  [g](''),
                  (this.transitioning = 0),
                  this.$element.trigger('shown.bs.collapse'));
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(['scroll', g].join('-'));
              this.$element
                .one('bsTransitionEnd', a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass('in')) {
          var b = a.Event('hide.bs.collapse');
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            (this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass('collapsing')
                .removeClass('collapse in')
                .attr('aria-expanded', !1),
              this.$trigger.addClass('collapsed').attr('aria-expanded', !1),
              (this.transitioning = 1));
            var e = function () {
              ((this.transitioning = 0),
                this.$element
                  .removeClass('collapsing')
                  .addClass('collapse')
                  .trigger('hidden.bs.collapse'));
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one('bsTransitionEnd', a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass('in');
        (a.attr('aria-expanded', c),
          b.toggleClass('collapsed', !c).attr('aria-expanded', c));
      }));
    var e = a.fn.collapse;
    ((a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return ((a.fn.collapse = e), this);
      }),
      a(document).on(
        'click.bs.collapse.data-api',
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr('data-target') || d.preventDefault();
          var f = b(e),
            g = f.data('bs.collapse'),
            h = g ? 'toggle' : a.extend({}, e.data(), { trigger: this });
          c.call(f, h);
        }
      ));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      (b && 3 === b.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = c(d),
            f = { relatedTarget: this };
          e.hasClass('open') &&
            (e.trigger((b = a.Event('hide.bs.dropdown', f))),
            b.isDefaultPrevented() ||
              (d.attr('aria-expanded', 'false'),
              e.removeClass('open').trigger('hidden.bs.dropdown', f)));
        }));
    }
    function c(b) {
      var c = b.attr('data-target');
      c ||
        ((c = b.attr('href')),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, '')));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data('bs.dropdown');
        (d || c.data('bs.dropdown', (d = new g(this))),
          'string' == typeof b && d[b].call(c));
      });
    }
    var e = '.dropdown-backdrop',
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on('click.bs.dropdown', this.toggle);
      };
    ((g.VERSION = '3.3.2'),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is('.disabled, :disabled')) {
          var f = c(e),
            g = f.hasClass('open');
          if ((b(), !g)) {
            'ontouchstart' in document.documentElement &&
              !f.closest('.navbar-nav').length &&
              a('<div class="dropdown-backdrop"/>')
                .insertAfter(a(this))
                .on('click', b);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event('show.bs.dropdown', h))),
              d.isDefaultPrevented())
            )
              return;
            (e.trigger('focus').attr('aria-expanded', 'true'),
              f.toggleClass('open').trigger('shown.bs.dropdown', h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (b) {
        if (
          /(38|40|27|32)/.test(b.which) &&
          !/input|textarea/i.test(b.target.tagName)
        ) {
          var d = a(this);
          if (
            (b.preventDefault(),
            b.stopPropagation(),
            !d.is('.disabled, :disabled'))
          ) {
            var e = c(d),
              g = e.hasClass('open');
            if ((!g && 27 != b.which) || (g && 27 == b.which))
              return (
                27 == b.which && e.find(f).trigger('focus'),
                d.trigger('click')
              );
            var h = ' li:not(.divider):visible a',
              i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            if (i.length) {
              var j = i.index(b.target);
              (38 == b.which && j > 0 && j--,
                40 == b.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger('focus'));
            }
          }
        }
      }));
    var h = a.fn.dropdown;
    ((a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return ((a.fn.dropdown = h), this);
      }),
      a(document)
        .on('click.bs.dropdown.data-api', b)
        .on('click.bs.dropdown.data-api', '.dropdown form', function (a) {
          a.stopPropagation();
        })
        .on('click.bs.dropdown.data-api', f, g.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', f, g.prototype.keydown)
        .on(
          'keydown.bs.dropdown.data-api',
          '[role="menu"]',
          g.prototype.keydown
        )
        .on(
          'keydown.bs.dropdown.data-api',
          '[role="listbox"]',
          g.prototype.keydown
        ));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data('bs.modal'),
          g = a.extend({}, c.DEFAULTS, e.data(), 'object' == typeof b && b);
        (f || e.data('bs.modal', (f = new c(this, g))),
          'string' == typeof b ? f[b](d) : g.show && f.show(d));
      });
    }
    var c = function (b, c) {
      ((this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$backdrop = this.isShown = null),
        (this.scrollbarWidth = 0),
        this.options.remote &&
          this.$element.find('.modal-content').load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger('loaded.bs.modal');
            }, this)
          ));
    };
    ((c.VERSION = '3.3.2'),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event('show.bs.modal', { relatedTarget: b });
        (this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass('modal-open'),
            this.escape(),
            this.resize(),
            this.$element.on(
              'click.dismiss.bs.modal',
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass('fade');
              (d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.options.backdrop && d.adjustBackdrop(),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass('in').attr('aria-hidden', !1),
                d.enforceFocus());
              var f = a.Event('shown.bs.modal', { relatedTarget: b });
              e
                ? d.$element
                    .find('.modal-dialog')
                    .one('bsTransitionEnd', function () {
                      d.$element.trigger('focus').trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger('focus').trigger(f);
            })));
      }),
      (c.prototype.hide = function (b) {
        (b && b.preventDefault(),
          (b = a.Event('hide.bs.modal')),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off('focusin.bs.modal'),
            this.$element
              .removeClass('in')
              .attr('aria-hidden', !0)
              .off('click.dismiss.bs.modal'),
            a.support.transition && this.$element.hasClass('fade')
              ? this.$element
                  .one('bsTransitionEnd', a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal()));
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off('focusin.bs.modal')
          .on(
            'focusin.bs.modal',
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger('focus');
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              'keydown.dismiss.bs.modal',
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off('keydown.dismiss.bs.modal');
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on('resize.bs.modal', a.proxy(this.handleUpdate, this))
          : a(window).off('resize.bs.modal');
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        (this.$element.hide(),
          this.backdrop(function () {
            (a.$body.removeClass('modal-open'),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger('hidden.bs.modal'));
          }));
      }),
      (c.prototype.removeBackdrop = function () {
        (this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null));
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass('fade') ? 'fade' : '';
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a('<div class="modal-backdrop ' + e + '" />')
              .prependTo(this.$element)
              .on(
                'click.dismiss.bs.modal',
                a.proxy(function (a) {
                  a.target === a.currentTarget &&
                    ('static' == this.options.backdrop
                      ? this.$element[0].focus.call(this.$element[0])
                      : this.hide.call(this));
                }, this)
              )),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass('in'),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one('bsTransitionEnd', b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in');
          var g = function () {
            (d.removeBackdrop(), b && b());
          };
          a.support.transition && this.$element.hasClass('fade')
            ? this.$backdrop
                .one('bsTransitionEnd', g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        (this.options.backdrop && this.adjustBackdrop(), this.adjustDialog());
      }),
      (c.prototype.adjustBackdrop = function () {
        this.$backdrop
          .css('height', 0)
          .css('height', this.$element[0].scrollHeight);
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : '',
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : '',
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: '', paddingRight: '' });
      }),
      (c.prototype.checkScrollbar = function () {
        ((this.bodyIsOverflowing =
          document.body.scrollHeight > document.documentElement.clientHeight),
          (this.scrollbarWidth = this.measureScrollbar()));
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css('padding-right') || 0, 10);
        this.bodyIsOverflowing &&
          this.$body.css('padding-right', a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css('padding-right', '');
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement('div');
        ((a.className = 'modal-scrollbar-measure'), this.$body.append(a));
        var b = a.offsetWidth - a.clientWidth;
        return (this.$body[0].removeChild(a), b);
      }));
    var d = a.fn.modal;
    ((a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return ((a.fn.modal = d), this);
      }),
      a(document).on(
        'click.bs.modal.data-api',
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr('href'),
            f = a(
              d.attr('data-target') || (e && e.replace(/.*(?=#[^\s]+$)/, ''))
            ),
            g = f.data('bs.modal')
              ? 'toggle'
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          (d.is('a') && c.preventDefault(),
            f.one('show.bs.modal', function (a) {
              a.isDefaultPrevented() ||
                f.one('hidden.bs.modal', function () {
                  d.is(':visible') && d.trigger('focus');
                });
            }),
            b.call(f, g, this));
        }
      ));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data('bs.tooltip'),
          f = 'object' == typeof b && b;
        (e || 'destroy' != b) &&
          (e || d.data('bs.tooltip', (e = new c(this, f))),
          'string' == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      ((this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init('tooltip', a, b));
    };
    ((c.VERSION = '3.3.2'),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: 'top',
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: 'body', padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(this.options.viewport.selector || this.options.viewport)));
        for (var e = this.options.trigger.split(' '), f = e.length; f--; ) {
          var g = e[f];
          if ('click' == g)
            this.$element.on(
              'click.' + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ('manual' != g) {
            var h = 'hover' == g ? 'mouseenter' : 'focusin',
              i = 'hover' == g ? 'mouseleave' : 'focusout';
            (this.$element.on(
              h + '.' + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + '.' + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              ));
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: 'manual',
              selector: '',
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            'number' == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data('bs.' + this.type);
        return c && c.$tip && c.$tip.is(':visible')
          ? void (c.hoverState = 'in')
          : (c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data('bs.' + this.type, c)),
            clearTimeout(c.timeout),
            (c.hoverState = 'in'),
            c.options.delay && c.options.delay.show
              ? void (c.timeout = setTimeout(function () {
                  'in' == c.hoverState && c.show();
                }, c.options.delay.show))
              : c.show());
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data('bs.' + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data('bs.' + this.type, c)),
          clearTimeout(c.timeout),
          (c.hoverState = 'out'),
          c.options.delay && c.options.delay.hide
            ? void (c.timeout = setTimeout(function () {
                'out' == c.hoverState && c.hide();
              }, c.options.delay.hide))
            : c.hide()
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event('show.bs.' + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          (this.setContent(),
            f.attr('id', g),
            this.$element.attr('aria-describedby', g),
            this.options.animation && f.addClass('fade'));
          var h =
              'function' == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          (j && (h = h.replace(i, '') || 'top'),
            f
              .detach()
              .css({ top: 0, left: 0, display: 'block' })
              .addClass(h)
              .data('bs.' + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element));
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.options.container
                ? a(this.options.container)
                : this.$element.parent(),
              p = this.getPosition(o);
            ((h =
              'bottom' == h && k.bottom + m > p.bottom
                ? 'top'
                : 'top' == h && k.top - m < p.top
                  ? 'bottom'
                  : 'right' == h && k.right + l > p.width
                    ? 'left'
                    : 'left' == h && k.left - l < p.left
                      ? 'right'
                      : h),
              f.removeClass(n).addClass(h));
          }
          var q = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(q, h);
          var r = function () {
            var a = e.hoverState;
            (e.$element.trigger('shown.bs.' + e.type),
              (e.hoverState = null),
              'out' == a && e.leave(e));
          };
          a.support.transition && this.$tip.hasClass('fade')
            ? f
                .one('bsTransitionEnd', r)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : r();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css('margin-top'), 10),
          h = parseInt(d.css('margin-left'), 10);
        (isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top = b.top + g),
          (b.left = b.left + h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass('in'));
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        'top' == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? 'offsetWidth' : 'offsetHeight';
        (d.offset(b), this.replaceArrow(m, d[0][n], l));
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? 'left' : 'top', 50 * (1 - a / b) + '%')
          .css(c ? 'top' : 'left', '');
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        (a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b),
          a.removeClass('fade in top bottom left right'));
      }),
      (c.prototype.hide = function (b) {
        function d() {
          ('in' != e.hoverState && f.detach(),
            e.$element
              .removeAttr('aria-describedby')
              .trigger('hidden.bs.' + e.type),
            b && b());
        }
        var e = this,
          f = this.tip(),
          g = a.Event('hide.bs.' + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass('in'),
              a.support.transition && this.$tip.hasClass('fade')
                ? f
                    .one('bsTransitionEnd', d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr('title') || 'string' != typeof a.attr('data-original-title')) &&
          a
            .attr('data-original-title', a.attr('title') || '')
            .attr('title', '');
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = 'BODY' == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return 'bottom' == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : 'top' == a
            ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
            : 'left' == a
              ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
              : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr('data-original-title') ||
          ('function' == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        return (this.$tip = this.$tip || a(this.options.template));
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        (b &&
          ((c = a(b.currentTarget).data('bs.' + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data('bs.' + this.type, c))),
          c.tip().hasClass('in') ? c.leave(c) : c.enter(c));
      }),
      (c.prototype.destroy = function () {
        var a = this;
        (clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off('.' + a.type).removeData('bs.' + a.type);
          }));
      }));
    var d = a.fn.tooltip;
    ((a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return ((a.fn.tooltip = d), this);
      }));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data('bs.popover'),
          f = 'object' == typeof b && b;
        (e || 'destroy' != b) &&
          (e || d.data('bs.popover', (e = new c(this, f))),
          'string' == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init('popover', a, b);
    };
    if (!a.fn.tooltip) throw new Error('Popover requires tooltip.js');
    ((c.VERSION = '3.3.2'),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        (a.find('.popover-title')[this.options.html ? 'html' : 'text'](b),
          a
            .find('.popover-content')
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? 'string' == typeof c
                  ? 'html'
                  : 'append'
                : 'text'
            ](c),
          a.removeClass('fade top bottom left right in'),
          a.find('.popover-title').html() || a.find('.popover-title').hide());
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr('data-content') ||
          ('function' == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'));
      }),
      (c.prototype.tip = function () {
        return (this.$tip || (this.$tip = a(this.options.template)), this.$tip);
      }));
    var d = a.fn.popover;
    ((a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return ((a.fn.popover = d), this);
      }));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(c, d) {
      var e = a.proxy(this.process, this);
      ((this.$body = a('body')),
        (this.$scrollElement = a(a(c).is('body') ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || '') + ' .nav li > a'),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on('scroll.bs.scrollspy', e),
        this.refresh(),
        this.process());
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data('bs.scrollspy'),
          f = 'object' == typeof c && c;
        (e || d.data('bs.scrollspy', (e = new b(this, f))),
          'string' == typeof c && e[c]());
      });
    }
    ((b.VERSION = '3.3.2'),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = 'offset',
          c = 0;
        (a.isWindow(this.$scrollElement[0]) ||
          ((b = 'position'), (c = this.$scrollElement.scrollTop())),
          (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()));
        var d = this;
        this.$body
          .find(this.selector)
          .map(function () {
            var d = a(this),
              e = d.data('target') || d.attr('href'),
              f = /^#./.test(e) && a(e);
            return (
              (f && f.length && f.is(':visible') && [[f[b]().top + c, e]]) ||
              null
            );
          })
          .sort(function (a, b) {
            return a[0] - b[0];
          })
          .each(function () {
            (d.offsets.push(this[0]), d.targets.push(this[1]));
          });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return ((this.activeTarget = null), this.clear());
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (!e[a + 1] || b <= e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        ((this.activeTarget = b), this.clear());
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents('li').addClass('active');
        (d.parent('.dropdown-menu').length &&
          (d = d.closest('li.dropdown').addClass('active')),
          d.trigger('activate.bs.scrollspy'));
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, '.active')
          .removeClass('active');
      }));
    var d = a.fn.scrollspy;
    ((a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return ((a.fn.scrollspy = d), this);
      }),
      a(window).on('load.bs.scrollspy.data-api', function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      }));
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data('bs.tab');
        (e || d.data('bs.tab', (e = new c(this))),
          'string' == typeof b && e[b]());
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    ((c.VERSION = '3.3.2'),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest('ul:not(.dropdown-menu)'),
          d = b.data('target');
        if (
          (d ||
            ((d = b.attr('href')), (d = d && d.replace(/.*(?=#[^\s]*$)/, ''))),
          !b.parent('li').hasClass('active'))
        ) {
          var e = c.find('.active:last a'),
            f = a.Event('hide.bs.tab', { relatedTarget: b[0] }),
            g = a.Event('show.bs.tab', { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            (this.activate(b.closest('li'), c),
              this.activate(h, h.parent(), function () {
                (e.trigger({ type: 'hidden.bs.tab', relatedTarget: b[0] }),
                  b.trigger({ type: 'shown.bs.tab', relatedTarget: e[0] }));
              }));
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          (g
            .removeClass('active')
            .find('> .dropdown-menu > .active')
            .removeClass('active')
            .end()
            .find('[data-toggle="tab"]')
            .attr('aria-expanded', !1),
            b
              .addClass('active')
              .find('[data-toggle="tab"]')
              .attr('aria-expanded', !0),
            h ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'),
            b.parent('.dropdown-menu') &&
              b
                .closest('li.dropdown')
                .addClass('active')
                .end()
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', !0),
            e && e());
        }
        var g = d.find('> .active'),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass('fade')) || !!d.find('> .fade').length);
        (g.length && h
          ? g
              .one('bsTransitionEnd', f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass('in'));
      }));
    var d = a.fn.tab;
    ((a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return ((a.fn.tab = d), this);
      }));
    var e = function (c) {
      (c.preventDefault(), b.call(a(this), 'show'));
    };
    a(document)
      .on('click.bs.tab.data-api', '[data-toggle="tab"]', e)
      .on('click.bs.tab.data-api', '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    'use strict';
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data('bs.affix'),
          f = 'object' == typeof b && b;
        (e || d.data('bs.affix', (e = new c(this, f))),
          'string' == typeof b && e[b]());
      });
    }
    var c = function (b, d) {
      ((this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on('scroll.bs.affix.data-api', a.proxy(this.checkPosition, this))
          .on(
            'click.bs.affix.data-api',
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = this.unpin = this.pinnedOffset = null),
        this.checkPosition());
    };
    ((c.VERSION = '3.3.2'),
      (c.RESET = 'affix affix-top affix-bottom'),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && 'top' == this.affixed) return c > e ? 'top' : !1;
        if ('bottom' == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : 'bottom'
            : a - d >= e + g
              ? !1
              : 'bottom';
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? 'top'
          : null != d && i + j >= a - d
            ? 'bottom'
            : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass('affix');
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(':visible')) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = a('body').height();
          ('object' != typeof d && (f = e = d),
            'function' == typeof e && (e = d.top(this.$element)),
            'function' == typeof f && (f = d.bottom(this.$element)));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css('top', '');
            var i = 'affix' + (h ? '-' + h : ''),
              j = a.Event(i + '.bs.affix');
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            ((this.affixed = h),
              (this.unpin = 'bottom' == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace('affix', 'affixed') + '.bs.affix'));
          }
          'bottom' == h && this.$element.offset({ top: g - b - f });
        }
      }));
    var d = a.fn.affix;
    ((a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return ((a.fn.affix = d), this);
      }),
      a(window).on('load', function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          ((d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d));
        });
      }));
  })(jQuery));

/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
  $.fn.appear = function (f, o) {
    var s = $.extend({ one: true }, o);
    return this.each(function () {
      var t = $(this);
      t.appeared = false;
      if (!f) {
        t.trigger('appear', s.data);
        return;
      }
      var w = $(window);
      var c = function () {
        if (!t.is(':visible')) {
          t.appeared = false;
          return;
        }
        var a = w.scrollLeft();
        var b = w.scrollTop();
        var o = t.offset();
        var x = o.left;
        var y = o.top;
        if (
          y + t.height() >= b &&
          y <= b + w.height() &&
          x + t.width() >= a &&
          x <= a + w.width()
        ) {
          if (!t.appeared) t.trigger('appear', s.data);
        } else {
          t.appeared = false;
        }
      };
      var m = function () {
        t.appeared = true;
        if (s.one) {
          w.unbind('scroll', c);
          var i = $.inArray(c, $.fn.appear.checks);
          if (i >= 0) $.fn.appear.checks.splice(i, 1);
        }
        f.apply(this, arguments);
      };
      if (s.one) t.one('appear', s.data, m);
      else t.bind('appear', s.data, m);
      w.scroll(c);
      $.fn.appear.checks.push(c);
      c();
    });
  };
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function () {
      var l = $.fn.appear.checks.length;
      if (l > 0) while (l--) $.fn.appear.checks[l]();
    },
    run: function () {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    },
  });
  $.each(
    [
      'append',
      'prepend',
      'after',
      'before',
      'attr',
      'removeAttr',
      'addClass',
      'removeClass',
      'toggleClass',
      'remove',
      'css',
      'show',
      'hide',
    ],
    function (i, n) {
      var u = $.fn[n];
      if (u) {
        $.fn[n] = function () {
          var r = u.apply(this, arguments);
          $.fn.appear.run();
          return r;
        };
      }
    }
  );
})(jQuery);

/*jquery.countTo*/
!(function (t) {
  'use strict';
  function e(t, e) {
    return t.toFixed(e.decimals);
  }
  ((t.fn.countTo = function (e) {
    return (
      (e = e || {}),
      t(this).each(function () {
        function a() {
          ((s += l),
            c++,
            n(s),
            'function' == typeof o.onUpdate && o.onUpdate.call(i, s),
            c >= r &&
              (f.removeData('countTo'),
              clearInterval(d.interval),
              (s = o.to),
              'function' == typeof o.onComplete && o.onComplete.call(i, s)));
        }
        function n(t) {
          var e = o.formatter.call(i, t, o);
          f.text(e);
        }
        var o = t.extend(
            {},
            t.fn.countTo.defaults,
            {
              from: t(this).data('from'),
              to: t(this).data('to'),
              speed: t(this).data('speed'),
              refreshInterval: t(this).data('refresh-interval'),
              decimals: t(this).data('decimals'),
            },
            e
          ),
          r = Math.ceil(o.speed / o.refreshInterval),
          l = (o.to - o.from) / r,
          i = this,
          f = t(this),
          c = 0,
          s = o.from,
          d = f.data('countTo') || {};
        (f.data('countTo', d),
          d.interval && clearInterval(d.interval),
          (d.interval = setInterval(a, o.refreshInterval)),
          n(s));
      })
    );
  }),
    (t.fn.countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1e3,
      refreshInterval: 100,
      decimals: 0,
      formatter: e,
      onUpdate: null,
      onComplete: null,
    }));
})(jQuery);

/*owl.carousel rtl*/
('function' != typeof Object.create &&
  (Object.create = function (t) {
    function e() {}
    return ((e.prototype = t), new e());
  }),
  (function (t, e, o, i) {
    var s = {
      init: function (e, o) {
        var i = this;
        ((i.$elem = t(o)),
          (i.options = t.extend(
            {},
            t.fn.owlCarousel.options,
            i.$elem.data(),
            e
          )),
          (i.userOptions = e),
          i.loadContent());
      },
      loadContent: function () {
        function e(t) {
          if ('function' == typeof o.options.jsonSuccess)
            o.options.jsonSuccess.apply(this, [t]);
          else {
            var e = '';
            for (var i in t.owl) e += t.owl[i].item;
            o.$elem.html(e);
          }
          o.logIn();
        }
        var o = this;
        if (
          ('function' == typeof o.options.beforeInit &&
            o.options.beforeInit.apply(this, [o.$elem]),
          'string' == typeof o.options.jsonPath)
        ) {
          var i = o.options.jsonPath;
          t.getJSON(i, e);
        } else o.logIn();
      },
      logIn: function () {
        var t = this;
        (t.$elem
          .data('owl-originalStyles', t.$elem.attr('style'))
          .data('owl-originalClasses', t.$elem.attr('class')),
          t.$elem.css({ opacity: 0 }),
          (t.orignalItems = t.options.items),
          t.checkBrowser(),
          (t.wrapperWidth = 0),
          t.checkVisible,
          t.setVars());
      },
      setVars: function () {
        var t = this;
        return 0 === t.$elem.children().length
          ? !1
          : (t.baseClass(),
            t.eventTypes(),
            (t.$userItems = t.$elem.children()),
            (t.itemsAmount = t.$userItems.length),
            t.wrapItems(),
            (t.$owlItems = t.$elem.find('.owl-item')),
            (t.$owlWrapper = t.$elem.find('.owl-wrapper')),
            (t.playDirection = 'next'),
            (t.prevItem = 0),
            (t.prevArr = [0]),
            (t.currentItem = 0),
            t.customEvents(),
            void t.onStartup());
      },
      onStartup: function () {
        var t = this;
        (t.updateItems(),
          t.calculateAll(),
          t.buildControls(),
          t.updateControls(),
          t.response(),
          t.moveEvents(),
          t.stopOnHover(),
          t.owlStatus(),
          t.options.transitionStyle !== !1 &&
            t.transitionTypes(t.options.transitionStyle),
          t.options.autoPlay === !0 && (t.options.autoPlay = 5e3),
          t.play(),
          t.$elem.find('.owl-wrapper').css('display', 'block'),
          t.$elem.is(':visible')
            ? t.$elem.css('opacity', 1)
            : t.watchVisibility(),
          (t.onstartup = !1),
          t.eachMoveUpdate(),
          'function' == typeof t.options.afterInit &&
            t.options.afterInit.apply(this, [t.$elem]));
      },
      eachMoveUpdate: function () {
        var t = this;
        (t.options.lazyLoad === !0 && t.lazyLoad(),
          t.options.autoHeight === !0 && t.autoHeight(),
          t.onVisibleItems(),
          'function' == typeof t.options.afterAction &&
            t.options.afterAction.apply(this, [t.$elem]));
      },
      updateVars: function () {
        var t = this;
        ('function' == typeof t.options.beforeUpdate &&
          t.options.beforeUpdate.apply(this, [t.$elem]),
          t.watchVisibility(),
          t.updateItems(),
          t.calculateAll(),
          t.updatePosition(),
          t.updateControls(),
          t.eachMoveUpdate(),
          'function' == typeof t.options.afterUpdate &&
            t.options.afterUpdate.apply(this, [t.$elem]));
      },
      reload: function () {
        var t = this;
        setTimeout(function () {
          t.updateVars();
        }, 0);
      },
      watchVisibility: function () {
        var t = this;
        return t.$elem.is(':visible') !== !1
          ? !1
          : (t.$elem.css({ opacity: 0 }),
            clearInterval(t.autoPlayInterval),
            clearInterval(t.checkVisible),
            void (t.checkVisible = setInterval(function () {
              t.$elem.is(':visible') &&
                (t.reload(),
                t.$elem.animate({ opacity: 1 }, 200),
                clearInterval(t.checkVisible));
            }, 500)));
      },
      wrapItems: function () {
        var t = this;
        (t.$userItems
          .wrapAll('<div class="owl-wrapper">')
          .wrap('<div class="owl-item"></div>'),
          t.$elem.find('.owl-wrapper').wrap('<div class="owl-wrapper-outer">'),
          (t.wrapperOuter = t.$elem.find('.owl-wrapper-outer')),
          t.$elem.css('display', 'block'));
      },
      baseClass: function () {
        var t = this,
          e = t.$elem.hasClass(t.options.baseClass),
          o = t.$elem.hasClass(t.options.theme);
        (e || t.$elem.addClass(t.options.baseClass),
          o || t.$elem.addClass(t.options.theme));
      },
      updateItems: function () {
        var e = this;
        if (e.options.responsive === !1) return !1;
        if (e.options.singleItem === !0)
          return (
            (e.options.items = e.orignalItems = 1),
            (e.options.itemsCustom = !1),
            (e.options.itemsDesktop = !1),
            (e.options.itemsDesktopSmall = !1),
            (e.options.itemsTablet = !1),
            (e.options.itemsTabletSmall = !1),
            (e.options.itemsMobile = !1),
            !1
          );
        var o = t(e.options.responsiveBaseWidth).width();
        if (
          (o > (e.options.itemsDesktop[0] || e.orignalItems) &&
            (e.options.items = e.orignalItems),
          'undefined' != typeof e.options.itemsCustom &&
            e.options.itemsCustom !== !1)
        ) {
          e.options.itemsCustom.sort(function (t, e) {
            return t[0] - e[0];
          });
          for (var i in e.options.itemsCustom)
            'undefined' != typeof e.options.itemsCustom[i] &&
              e.options.itemsCustom[i][0] <= o &&
              (e.options.items = e.options.itemsCustom[i][1]);
        } else
          (o <= e.options.itemsDesktop[0] &&
            e.options.itemsDesktop !== !1 &&
            (e.options.items = e.options.itemsDesktop[1]),
            o <= e.options.itemsDesktopSmall[0] &&
              e.options.itemsDesktopSmall !== !1 &&
              (e.options.items = e.options.itemsDesktopSmall[1]),
            o <= e.options.itemsTablet[0] &&
              e.options.itemsTablet !== !1 &&
              (e.options.items = e.options.itemsTablet[1]),
            o <= e.options.itemsTabletSmall[0] &&
              e.options.itemsTabletSmall !== !1 &&
              (e.options.items = e.options.itemsTabletSmall[1]),
            o <= e.options.itemsMobile[0] &&
              e.options.itemsMobile !== !1 &&
              (e.options.items = e.options.itemsMobile[1]));
        e.options.items > e.itemsAmount &&
          e.options.itemsScaleUp === !0 &&
          (e.options.items = e.itemsAmount);
      },
      response: function () {
        var o,
          i = this;
        if (i.options.responsive !== !0) return !1;
        var s = t(e).width();
        ((i.resizer = function () {
          t(e).width() !== s &&
            (i.options.autoPlay !== !1 && clearInterval(i.autoPlayInterval),
            clearTimeout(o),
            (o = setTimeout(function () {
              ((s = t(e).width()), i.updateVars());
            }, i.options.responsiveRefreshRate)));
        }),
          t(e).resize(i.resizer));
      },
      updatePosition: function () {
        var t = this;
        (t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp());
      },
      appendItemsSizes: function () {
        var e = this,
          o = 0,
          i = e.itemsAmount - e.options.items;
        e.$owlItems.each(function (s) {
          var n = t(this);
          (n.css({ width: e.itemWidth }).data('owl-item', Number(s)),
            (s % e.options.items === 0 || s === i) && (s > i || (o += 1)),
            n.data('owl-roundPages', o));
        });
      },
      appendWrapperSizes: function () {
        var t,
          e = this,
          o = e.$owlItems.length * e.itemWidth;
        ((t =
          'rtl' == e.options.direction
            ? { right: 0, direction: 'rtl' }
            : { left: 0 }),
          e.$owlWrapper.css({ width: o }),
          e.$owlWrapper.css(t),
          e.appendItemsSizes());
      },
      calculateAll: function () {
        var t = this;
        (t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max());
      },
      calculateWidth: function () {
        var t = this;
        t.itemWidth = Math.round(t.$elem.width() / t.options.items);
      },
      max: function () {
        var t = this,
          e =
            -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
        return (
          t.options.items > t.itemsAmount
            ? ((t.maximumItem = 0), (e = 0), (t.maximumPixels = 0))
            : ((t.maximumItem = t.itemsAmount - t.options.items),
              (t.maximumPixels = e)),
          e
        );
      },
      min: function () {
        return 0;
      },
      loops: function () {
        var e = this;
        ((e.positionsInArray = [0]), (e.pagesInArray = []));
        for (var o = 0, i = 0, s = 0; s < e.itemsAmount; s++)
          if (
            ((i += e.itemWidth),
            e.positionsInArray.push(-i),
            e.options.scrollPerPage === !0)
          ) {
            var n = t(e.$owlItems[s]),
              a = n.data('owl-roundPages');
            a !== o && ((e.pagesInArray[o] = e.positionsInArray[s]), (o = a));
          }
      },
      buildControls: function () {
        var e = this;
        ((e.options.navigation === !0 || e.options.pagination === !0) &&
          (e.owlControls = t('<div class="owl-controls"/>')
            .toggleClass('clickable', !e.browser.isTouch)
            .appendTo(e.$elem)),
          e.options.pagination === !0 && e.buildPagination(),
          e.options.navigation === !0 && e.buildButtons());
      },
      buildButtons: function () {
        var e = this,
          o = t('<div class="owl-buttons"/>');
        (e.owlControls.append(o),
          (e.buttonPrev = t('<div/>', {
            class: 'owl-prev',
            html: e.options.navigationText[0] || '',
          })),
          (e.buttonNext = t('<div/>', {
            class: 'owl-next',
            html: e.options.navigationText[1] || '',
          })),
          o.append(e.buttonPrev).append(e.buttonNext),
          o.on(
            'touchstart.owlControls mousedown.owlControls',
            'div[class^="owl"]',
            function (t) {
              t.preventDefault();
            }
          ),
          o.on(
            'touchend.owlControls mouseup.owlControls',
            'div[class^="owl"]',
            function (o) {
              (o.preventDefault(),
                t(this).hasClass('owl-next') ? e.next() : e.prev());
            }
          ));
      },
      buildPagination: function () {
        var e = this;
        ((e.paginationWrapper = t('<div class="owl-pagination"/>')),
          e.owlControls.append(e.paginationWrapper),
          e.paginationWrapper.on(
            'touchend.owlControls mouseup.owlControls',
            '.owl-page',
            function (o) {
              (o.preventDefault(),
                Number(t(this).data('owl-page')) !== e.currentItem &&
                  e.goTo(Number(t(this).data('owl-page')), !0));
            }
          ));
      },
      updatePagination: function () {
        var e = this;
        if (e.options.pagination === !1) return !1;
        e.paginationWrapper.html('');
        for (
          var o = 0,
            i = e.itemsAmount - (e.itemsAmount % e.options.items),
            s = 0;
          s < e.itemsAmount;
          s++
        )
          if (s % e.options.items === 0) {
            if (((o += 1), i === s)) var n = e.itemsAmount - e.options.items;
            var a = t('<div/>', { class: 'owl-page' }),
              r = t('<span></span>', {
                text: e.options.paginationNumbers === !0 ? o : '',
                class: e.options.paginationNumbers === !0 ? 'owl-numbers' : '',
              });
            (a.append(r),
              a.data('owl-page', i === s ? n : s),
              a.data('owl-roundPages', o),
              e.paginationWrapper.append(a));
          }
        e.checkPagination();
      },
      checkPagination: function () {
        var e = this;
        return e.options.pagination === !1
          ? !1
          : void e.paginationWrapper.find('.owl-page').each(function () {
              t(this).data('owl-roundPages') ===
                t(e.$owlItems[e.currentItem]).data('owl-roundPages') &&
                (e.paginationWrapper.find('.owl-page').removeClass('active'),
                t(this).addClass('active'));
            });
      },
      checkNavigation: function () {
        var t = this;
        return t.options.navigation === !1
          ? !1
          : void (
              t.options.rewindNav === !1 &&
              (0 === t.currentItem && 0 === t.maximumItem
                ? (t.buttonPrev.addClass('disabled'),
                  t.buttonNext.addClass('disabled'))
                : 0 === t.currentItem && 0 !== t.maximumItem
                  ? (t.buttonPrev.addClass('disabled'),
                    t.buttonNext.removeClass('disabled'))
                  : t.currentItem === t.maximumItem
                    ? (t.buttonPrev.removeClass('disabled'),
                      t.buttonNext.addClass('disabled'))
                    : 0 !== t.currentItem &&
                      t.currentItem !== t.maximumItem &&
                      (t.buttonPrev.removeClass('disabled'),
                      t.buttonNext.removeClass('disabled')))
            );
      },
      updateControls: function () {
        var t = this;
        (t.updatePagination(),
          t.checkNavigation(),
          t.owlControls &&
            (t.options.items >= t.itemsAmount
              ? t.owlControls.hide()
              : t.owlControls.show()));
      },
      destroyControls: function () {
        var t = this;
        t.owlControls && t.owlControls.remove();
      },
      next: function (t) {
        var e = this;
        if (e.isTransition) return !1;
        if (
          ((e.currentItem +=
            e.options.scrollPerPage === !0 ? e.options.items : 1),
          e.currentItem >
            e.maximumItem +
              (1 == e.options.scrollPerPage ? e.options.items - 1 : 0))
        ) {
          if (e.options.rewindNav !== !0)
            return ((e.currentItem = e.maximumItem), !1);
          ((e.currentItem = 0), (t = 'rewind'));
        }
        e.goTo(e.currentItem, t);
      },
      prev: function (t) {
        var e = this;
        if (e.isTransition) return !1;
        if (
          (e.options.scrollPerPage === !0 &&
          e.currentItem > 0 &&
          e.currentItem < e.options.items
            ? (e.currentItem = 0)
            : (e.currentItem -=
                e.options.scrollPerPage === !0 ? e.options.items : 1),
          e.currentItem < 0)
        ) {
          if (e.options.rewindNav !== !0) return ((e.currentItem = 0), !1);
          ((e.currentItem = e.maximumItem), (t = 'rewind'));
        }
        e.goTo(e.currentItem, t);
      },
      goTo: function (t, e, o) {
        var i = this;
        if (i.isTransition) return !1;
        if (
          ('function' == typeof i.options.beforeMove &&
            i.options.beforeMove.apply(this, [i.$elem]),
          t >= i.maximumItem ? (t = i.maximumItem) : 0 >= t && (t = 0),
          (i.currentItem = i.owl.currentItem = t),
          i.options.transitionStyle !== !1 &&
            'drag' !== o &&
            1 === i.options.items &&
            i.browser.support3d === !0)
        )
          return (
            i.swapSpeed(0),
            i.browser.support3d === !0
              ? i.transition3d(i.positionsInArray[t])
              : i.css2slide(i.positionsInArray[t], 1),
            i.afterGo(),
            i.singleItemTransition(),
            !1
          );
        var s = i.positionsInArray[t];
        (i.browser.support3d === !0
          ? ((i.isCss3Finish = !1),
            e === !0
              ? (i.swapSpeed('paginationSpeed'),
                setTimeout(function () {
                  i.isCss3Finish = !0;
                }, i.options.paginationSpeed))
              : 'rewind' === e
                ? (i.swapSpeed(i.options.rewindSpeed),
                  setTimeout(function () {
                    i.isCss3Finish = !0;
                  }, i.options.rewindSpeed))
                : (i.swapSpeed('slideSpeed'),
                  setTimeout(function () {
                    i.isCss3Finish = !0;
                  }, i.options.slideSpeed)),
            i.transition3d(s))
          : e === !0
            ? i.css2slide(s, i.options.paginationSpeed)
            : 'rewind' === e
              ? i.css2slide(s, i.options.rewindSpeed)
              : i.css2slide(s, i.options.slideSpeed),
          i.afterGo());
      },
      jumpTo: function (t) {
        var e = this;
        ('function' == typeof e.options.beforeMove &&
          e.options.beforeMove.apply(this, [e.$elem]),
          t >= e.maximumItem || -1 === t
            ? (t = e.maximumItem)
            : 0 >= t && (t = 0),
          e.swapSpeed(0),
          e.browser.support3d === !0
            ? e.transition3d(e.positionsInArray[t])
            : e.css2slide(e.positionsInArray[t], 1),
          (e.currentItem = e.owl.currentItem = t),
          e.afterGo());
      },
      afterGo: function () {
        var t = this;
        (t.prevArr.push(t.currentItem),
          (t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2]),
          t.prevArr.shift(0),
          t.prevItem !== t.currentItem &&
            (t.checkPagination(),
            t.checkNavigation(),
            t.eachMoveUpdate(),
            t.options.autoPlay !== !1 && t.checkAp()),
          'function' == typeof t.options.afterMove &&
            t.prevItem !== t.currentItem &&
            t.options.afterMove.apply(this, [t.$elem]));
      },
      stop: function () {
        var t = this;
        ((t.apStatus = 'stop'), clearInterval(t.autoPlayInterval));
      },
      checkAp: function () {
        var t = this;
        'stop' !== t.apStatus && t.play();
      },
      play: function () {
        var t = this;
        return (
          (t.apStatus = 'play'),
          t.options.autoPlay === !1
            ? !1
            : (clearInterval(t.autoPlayInterval),
              void (t.autoPlayInterval = setInterval(function () {
                t.next(!0);
              }, t.options.autoPlay)))
        );
      },
      swapSpeed: function (t) {
        var e = this;
        'slideSpeed' === t
          ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))
          : 'paginationSpeed' === t
            ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))
            : 'string' != typeof t && e.$owlWrapper.css(e.addCssSpeed(t));
      },
      addCssSpeed: function (t) {
        return {
          '-webkit-transition': 'all ' + t + 'ms ease',
          '-moz-transition': 'all ' + t + 'ms ease',
          '-o-transition': 'all ' + t + 'ms ease',
          transition: 'all ' + t + 'ms ease',
        };
      },
      removeTransition: function () {
        return {
          '-webkit-transition': '',
          '-moz-transition': '',
          '-o-transition': '',
          transition: '',
        };
      },
      doTranslate: function (t) {
        var e = this;
        return (
          (t = 'rtl' == e.options.direction ? -t : t),
          {
            '-webkit-transform': 'translate3d(' + t + 'px, 0px, 0px)',
            '-moz-transform': 'translate3d(' + t + 'px, 0px, 0px)',
            '-o-transform': 'translate3d(' + t + 'px, 0px, 0px)',
            '-ms-transform': 'translate3d(' + t + 'px, 0px, 0px)',
            transform: 'translate3d(' + t + 'px, 0px,0px)',
          }
        );
      },
      transition3d: function (t) {
        var e = this;
        e.$owlWrapper.css(e.doTranslate(t));
      },
      css2move: function (t) {
        var e,
          o = this;
        ((e = 'rtl' == o.options.direction ? { right: t } : { left: t }),
          o.$owlWrapper.css(e));
      },
      css2slide: function (t, e) {
        var o,
          i = this;
        ((o = 'rtl' == i.options.direction ? { right: t } : { left: t }),
          (i.isCssFinish = !1),
          i.$owlWrapper.stop(!0, !0).animate(o, {
            duration: e || i.options.slideSpeed,
            complete: function () {
              i.isCssFinish = !0;
            },
          }));
      },
      checkBrowser: function () {
        var t = this,
          i = 'translate3d(0px, 0px, 0px)',
          s = o.createElement('div');
        s.style.cssText =
          '  -moz-transform:' +
          i +
          '; -ms-transform:' +
          i +
          '; -o-transform:' +
          i +
          '; -webkit-transform:' +
          i +
          '; transform:' +
          i;
        var n = /translate3d\(0px, 0px, 0px\)/g,
          a = s.style.cssText.match(n),
          r = null !== a && 1 === a.length,
          l = 'ontouchstart' in e || navigator.msMaxTouchPoints;
        t.browser = { support3d: r, isTouch: l };
      },
      moveEvents: function () {
        var t = this;
        (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) &&
          (t.gestures(), t.disabledEvents());
      },
      eventTypes: function () {
        var t = this,
          e = ['s', 'e', 'x'];
        ((t.ev_types = {}),
          t.options.mouseDrag === !0 && t.options.touchDrag === !0
            ? (e = [
                'touchstart.owl mousedown.owl',
                'touchmove.owl mousemove.owl',
                'touchend.owl touchcancel.owl mouseup.owl',
              ])
            : t.options.mouseDrag === !1 && t.options.touchDrag === !0
              ? (e = [
                  'touchstart.owl',
                  'touchmove.owl',
                  'touchend.owl touchcancel.owl',
                ])
              : t.options.mouseDrag === !0 &&
                t.options.touchDrag === !1 &&
                (e = ['mousedown.owl', 'mousemove.owl', 'mouseup.owl']),
          (t.ev_types.start = e[0]),
          (t.ev_types.move = e[1]),
          (t.ev_types.end = e[2]));
      },
      disabledEvents: function () {
        var e = this;
        (e.$elem.on('dragstart.owl', function (t) {
          t.preventDefault();
        }),
          e.$elem.on('mousedown.disableTextSelect', function (e) {
            return t(e.target).is('input, textarea, select, option');
          }));
      },
      gestures: function () {
        function s(t) {
          return t.touches
            ? { x: t.touches[0].pageX, y: t.touches[0].pageY }
            : t.pageX !== i
              ? { x: t.pageX, y: t.pageY }
              : { x: t.clientX, y: t.clientY };
        }
        function n(e) {
          'on' === e
            ? (t(o).on(p.ev_types.move, r), t(o).on(p.ev_types.end, l))
            : 'off' === e &&
              (t(o).off(p.ev_types.move), t(o).off(p.ev_types.end));
        }
        function a(o) {
          var o = o.originalEvent || o || e.event;
          if (3 === o.which) return !1;
          if (!(p.itemsAmount <= p.options.items)) {
            if (p.isCssFinish === !1 && !p.options.dragBeforeAnimFinish)
              return !1;
            if (p.isCss3Finish === !1 && !p.options.dragBeforeAnimFinish)
              return !1;
            (p.options.autoPlay !== !1 && clearInterval(p.autoPlayInterval),
              p.browser.isTouch === !0 ||
                p.$owlWrapper.hasClass('grabbing') ||
                p.$owlWrapper.addClass('grabbing'),
              (p.newPosX = 0),
              (p.newRelativeX = 0),
              t(this).css(p.removeTransition()));
            var i = t(this).position();
            ('rtl' == p.options.direction
              ? ((positionRight = p.$owlItems.eq(0).width() * p.currentItem),
                (m.relativePos = positionRight),
                (m.offsetX = -s(o).x + positionRight))
              : ((m.relativePos = i.left), (m.offsetX = s(o).x - i.left)),
              (m.offsetY = s(o).y - i.top),
              n('on'),
              (m.sliding = !1),
              (m.targetElement = o.target || o.srcElement));
          }
        }
        function r(i) {
          var i = i.originalEvent || i || e.event;
          ('rtl' == p.options.direction
            ? ((p.newPosX = -s(i).x - m.offsetX),
              (p.newPosY = s(i).y - m.offsetY),
              (p.newRelativeX = p.newPosX + m.relativePos))
            : ((p.newPosX = s(i).x - m.offsetX),
              (p.newPosY = s(i).y - m.offsetY),
              (p.newRelativeX = p.newPosX - m.relativePos)),
            'function' == typeof p.options.startDragging &&
              m.dragging !== !0 &&
              0 !== p.newRelativeX &&
              ((m.dragging = !0), p.options.startDragging.apply(p, [p.$elem])),
            (p.newRelativeX > 8 ||
              (p.newRelativeX < -8 && p.browser.isTouch === !0)) &&
              (i.preventDefault ? i.preventDefault() : (i.returnValue = !1),
              (m.sliding = !0)),
            (p.newPosY > 10 || p.newPosY < -10) &&
              m.sliding === !1 &&
              t(o).off('touchmove.owl'));
          var n = function () {
              return p.newRelativeX / 5;
            },
            a = function () {
              return p.maximumPixels + p.newRelativeX / 5;
            };
          ((p.newPosX = Math.max(Math.min(p.newPosX, n()), a())),
            p.browser.support3d === !0
              ? p.transition3d(p.newPosX)
              : p.css2move(p.newPosX));
        }
        function l(o) {
          var o = o.originalEvent || o || e.event;
          if (
            ((o.target = o.target || o.srcElement),
            (m.dragging = !1),
            p.browser.isTouch !== !0 && p.$owlWrapper.removeClass('grabbing'),
            (p.dragDirection = p.owl.dragDirection =
              'rtl' == p.options.direction
                ? p.newRelativeX < 0
                  ? 'right'
                  : 'left'
                : p.newRelativeX < 0
                  ? 'left'
                  : 'right'),
            0 !== p.newRelativeX)
          ) {
            var i = p.getNewPosition();
            if (
              (p.goTo(i, !1, 'drag'),
              m.targetElement === o.target && p.browser.isTouch !== !0)
            ) {
              t(o.target).on('click.disable', function (e) {
                (e.stopImmediatePropagation(),
                  e.stopPropagation(),
                  e.preventDefault(),
                  t(o.target).off('click.disable'));
              });
              var s = t._data(o.target, 'events').click,
                a = s.pop();
              s.splice(0, 0, a);
            }
          }
          n('off');
        }
        var p = this,
          m = {
            offsetX: 0,
            offsetY: 0,
            baseElWidth: 0,
            relativePos: 0,
            position: null,
            minSwipe: null,
            maxSwipe: null,
            sliding: null,
            dargging: null,
            targetElement: null,
          };
        ((p.isCssFinish = !0), p.$elem.on(p.ev_types.start, '.owl-wrapper', a));
      },
      getNewPosition: function () {
        var t,
          e = this;
        return (
          (t = e.closestItem()),
          t > e.maximumItem
            ? ((e.currentItem = e.maximumItem), (t = e.maximumItem))
            : e.newPosX >= 0 && ((t = 0), (e.currentItem = 0)),
          t
        );
      },
      closestItem: function () {
        var e = this,
          o =
            e.options.scrollPerPage === !0
              ? e.pagesInArray
              : e.positionsInArray,
          i = e.newPosX,
          s = null;
        return (
          t.each(o, function (n, a) {
            i - e.itemWidth / 20 > o[n + 1] &&
            i - e.itemWidth / 20 < a &&
            'left' === e.moveDirection()
              ? ((s = a),
                (e.currentItem =
                  e.options.scrollPerPage === !0
                    ? t.inArray(s, e.positionsInArray)
                    : n))
              : i + e.itemWidth / 20 < a &&
                i + e.itemWidth / 20 > (o[n + 1] || o[n] - e.itemWidth) &&
                'right' === e.moveDirection() &&
                (e.options.scrollPerPage === !0
                  ? ((s = o[n + 1] || o[o.length - 1]),
                    (e.currentItem = t.inArray(s, e.positionsInArray)))
                  : ((s = o[n + 1]), (e.currentItem = n + 1)));
          }),
          e.currentItem
        );
      },
      moveDirection: function () {
        var t,
          e = this;
        return (
          e.newRelativeX < 0
            ? ((t = 'right'), (e.playDirection = 'next'))
            : ((t = 'left'), (e.playDirection = 'prev')),
          t
        );
      },
      customEvents: function () {
        var t = this;
        (t.$elem.on('owl.next', function () {
          t.next();
        }),
          t.$elem.on('owl.prev', function () {
            t.prev();
          }),
          t.$elem.on('owl.play', function (e, o) {
            ((t.options.autoPlay = o), t.play(), (t.hoverStatus = 'play'));
          }),
          t.$elem.on('owl.stop', function () {
            (t.stop(), (t.hoverStatus = 'stop'));
          }),
          t.$elem.on('owl.goTo', function (e, o) {
            t.goTo(o);
          }),
          t.$elem.on('owl.jumpTo', function (e, o) {
            t.jumpTo(o);
          }));
      },
      stopOnHover: function () {
        var t = this;
        t.options.stopOnHover === !0 &&
          t.browser.isTouch !== !0 &&
          t.options.autoPlay !== !1 &&
          (t.$elem.on('mouseover', function () {
            t.stop();
          }),
          t.$elem.on('mouseout', function () {
            'stop' !== t.hoverStatus && t.play();
          }));
      },
      lazyLoad: function () {
        var e = this;
        if (e.options.lazyLoad === !1) return !1;
        for (var o = 0; o < e.itemsAmount; o++) {
          var s = t(e.$owlItems[o]);
          if ('loaded' !== s.data('owl-loaded')) {
            var n,
              a = s.data('owl-item'),
              r = s.find('.lazyOwl');
            'string' == typeof r.data('src')
              ? (s.data('owl-loaded') === i &&
                  (r.hide(),
                  s.addClass('loading').data('owl-loaded', 'checked')),
                (n = e.options.lazyFollow === !0 ? a >= e.currentItem : !0),
                n &&
                  a < e.currentItem + e.options.items &&
                  r.length &&
                  e.lazyPreload(s, r))
              : s.data('owl-loaded', 'loaded');
          }
        }
      },
      lazyPreload: function (t, e) {
        function o() {
          ((n += 1),
            s.completeImg(e.get(0)) || a === !0
              ? i()
              : 100 >= n
                ? setTimeout(o, 100)
                : i());
        }
        function i() {
          (t.data('owl-loaded', 'loaded').removeClass('loading'),
            e.removeAttr('data-src'),
            'fade' === s.options.lazyEffect ? e.fadeIn(400) : e.show(),
            'function' == typeof s.options.afterLazyLoad &&
              s.options.afterLazyLoad.apply(this, [s.$elem]));
        }
        var s = this,
          n = 0;
        if ('DIV' === e.prop('tagName')) {
          e.css('background-image', 'url(' + e.data('src') + ')');
          var a = !0;
        } else e[0].src = e.data('src');
        o();
      },
      autoHeight: function () {
        function e() {
          ((a += 1),
            s.completeImg(n.get(0))
              ? o()
              : 100 >= a
                ? setTimeout(e, 100)
                : s.wrapperOuter.css('height', ''));
        }
        function o() {
          var e = t(s.$owlItems[s.currentItem]).height();
          (s.wrapperOuter.css('height', e + 'px'),
            s.wrapperOuter.hasClass('autoHeight') ||
              setTimeout(function () {
                s.wrapperOuter.addClass('autoHeight');
              }, 0));
        }
        var s = this,
          n = t(s.$owlItems[s.currentItem]).find('img');
        if (n.get(0) !== i) {
          var a = 0;
          e();
        } else o();
      },
      completeImg: function (t) {
        return t.complete
          ? 'undefined' != typeof t.naturalWidth && 0 == t.naturalWidth
            ? !1
            : !0
          : !1;
      },
      onVisibleItems: function () {
        var e = this;
        (e.options.addClassActive === !0 && e.$owlItems.removeClass('active'),
          (e.visibleItems = []));
        for (var o = e.currentItem; o < e.currentItem + e.options.items; o++)
          (e.visibleItems.push(o),
            e.options.addClassActive === !0 &&
              t(e.$owlItems[o]).addClass('active'));
        e.owl.visibleItems = e.visibleItems;
      },
      transitionTypes: function (t) {
        var e = this;
        ((e.outClass = 'owl-' + t + '-out'), (e.inClass = 'owl-' + t + '-in'));
      },
      singleItemTransition: function () {
        function t(t) {
          return { position: 'relative', left: t + 'px' };
        }
        var e = this;
        e.isTransition = !0;
        var o = e.outClass,
          i = e.inClass,
          s = e.$owlItems.eq(e.currentItem),
          n = e.$owlItems.eq(e.prevItem),
          a =
            Math.abs(e.positionsInArray[e.currentItem]) +
            e.positionsInArray[e.prevItem],
          r = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2;
        e.$owlWrapper.addClass('owl-origin').css({
          '-webkit-transform-origin': r + 'px',
          '-moz-perspective-origin': r + 'px',
          'perspective-origin': r + 'px',
        });
        var l = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
        (n
          .css(t(a, 10))
          .addClass(o)
          .on(l, function () {
            ((e.endPrev = !0), n.off(l), e.clearTransStyle(n, o));
          }),
          s.addClass(i).on(l, function () {
            ((e.endCurrent = !0), s.off(l), e.clearTransStyle(s, i));
          }));
      },
      clearTransStyle: function (t, e) {
        var o = this;
        (t.css({ position: '', left: '' }).removeClass(e),
          o.endPrev &&
            o.endCurrent &&
            (o.$owlWrapper.removeClass('owl-origin'),
            (o.endPrev = !1),
            (o.endCurrent = !1),
            (o.isTransition = !1)));
      },
      owlStatus: function () {
        var t = this;
        t.owl = {
          userOptions: t.userOptions,
          baseElement: t.$elem,
          userItems: t.$userItems,
          owlItems: t.$owlItems,
          currentItem: t.currentItem,
          prevItem: t.prevItem,
          visibleItems: t.visibleItems,
          isTouch: t.browser.isTouch,
          browser: t.browser,
          dragDirection: t.dragDirection,
        };
      },
      clearEvents: function () {
        var i = this;
        (i.$elem.off('.owl owl mousedown.disableTextSelect'),
          t(o).off('.owl owl'),
          t(e).off('resize', i.resizer));
      },
      unWrap: function () {
        var t = this;
        (0 !== t.$elem.children().length &&
          (t.$owlWrapper.unwrap(),
          t.$userItems.unwrap().unwrap(),
          t.owlControls && t.owlControls.remove()),
          t.clearEvents(),
          t.$elem
            .attr('style', t.$elem.data('owl-originalStyles') || '')
            .attr('class', t.$elem.data('owl-originalClasses')));
      },
      destroy: function () {
        var t = this;
        (t.stop(),
          clearInterval(t.checkVisible),
          t.unWrap(),
          t.$elem.removeData());
      },
      reinit: function (e) {
        var o = this,
          i = t.extend({}, o.userOptions, e);
        (o.unWrap(), o.init(i, o.$elem));
      },
      addItem: function (t, e) {
        var o,
          s = this;
        return t
          ? 0 === s.$elem.children().length
            ? (s.$elem.append(t), s.setVars(), !1)
            : (s.unWrap(),
              (o = e === i || -1 === e ? -1 : e),
              o >= s.$userItems.length || -1 === o
                ? s.$userItems.eq(-1).after(t)
                : s.$userItems.eq(o).before(t),
              void s.setVars())
          : !1;
      },
      removeItem: function (t) {
        var e,
          o = this;
        return 0 === o.$elem.children().length
          ? !1
          : ((e = t === i || -1 === t ? -1 : t),
            o.unWrap(),
            o.$userItems.eq(e).remove(),
            void o.setVars());
      },
    };
    ((t.fn.owlCarousel = function (e) {
      return this.each(function () {
        if (t(this).data('owl-init') === !0) return !1;
        t(this).data('owl-init', !0);
        var o = Object.create(s);
        (o.init(e, this), t.data(this, 'owlCarousel', o));
      });
    }),
      (t.fn.owlCarousel.options = {
        direction: 'ltr',
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ['prev', 'next'],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: 'owl-carousel',
        theme: 'owl-theme',
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: 'fade',
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1,
      }));
  })(jQuery, window, document),
  Function.prototype.bind ||
    (Function.prototype.bind = function (t) {
      if ('function' != typeof this)
        throw new TypeError(
          'Function.prototype.bind - what is trying to be bound is not callable'
        );
      var i = Array.prototype.slice.call(arguments, 1),
        s = this,
        e = function () {},
        o = function () {
          return s.apply(
            this instanceof e && t ? this : t,
            i.concat(Array.prototype.slice.call(arguments))
          );
        };
      return ((e.prototype = this.prototype), (o.prototype = new e()), o);
    }));

/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : a(
        'object' == typeof exports
          ? require('jquery')
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = 'Close',
    i = 'BeforeClose',
    j = 'AfterClose',
    k = 'BeforeAppend',
    l = 'MarkupParse',
    m = 'Open',
    n = 'Change',
    o = 'mfp',
    p = '.' + o,
    q = 'mfp-ready',
    r = 'mfp-removing',
    s = 'mfp-prevent-close',
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement('div');
      return (
        (f.className = 'mfp-' + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      (b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace('%title%', b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement('p').style,
        b = ['ms', 'O', 'Moz', 'Webkit'];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + 'Transition' in a) return !0;
      return !1;
    };
  ((t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      ((b.isIE7 = -1 !== c.indexOf('MSIE 7.')),
        (b.isIE8 = -1 !== c.indexOf('MSIE 8.')),
        (b.isLowIE = b.isIE7 || b.isIE8),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {}));
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        ((b.items = c.items.toArray()), (b.index = 0));
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        ((b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0));
      if (b.isOpen) return void b.updateItemHTML();
      ((b.types = []),
        (f = ''),
        (b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          'auto' === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x('bg').on('click' + p, function () {
            b.close();
          })),
          (b.wrap = x('wrap')
            .attr('tabindex', -1)
            .on('click' + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x('container', b.wrap))),
        (b.contentContainer = x('content')),
        b.st.preloader &&
          (b.preloader = x('preloader', b.container, b.st.tLoading)));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        ((j = j.charAt(0).toUpperCase() + j.slice(1)), b['init' + j].call(b));
      }
      (y('BeforeOpen'),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += ' mfp-close-btn-in'))
            : b.wrap.append(z())),
        b.st.alignTop && (f += ' mfp-align-top'),
        b.wrap.css(
          b.fixedContentPos
            ? {
                overflow: b.st.overflowY,
                overflowX: 'hidden',
                overflowY: b.st.overflowY,
              }
            : { top: v.scrollTop(), position: 'absolute' }
        ),
        (b.st.fixedBgPos === !1 ||
          ('auto' === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: 'absolute' }),
        b.st.enableEscapeKey &&
          d.on('keyup' + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on('resize' + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += ' mfp-auto-cursor'),
        f && b.wrap.addClass(f));
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a('body, html').css('overflow', 'hidden')
          : (n.overflow = 'hidden'));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += ' mfp-ie7'),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y('BuildControls'),
        a('html').css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          (b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on('focusin' + p, b._onFocusIn));
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + ' ' + q + ' ';
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + ' '),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: '' };
        (b.isIE7 ? a('body, html').css('overflow', '') : (e.overflow = ''),
          a('html').css(e));
      }
      (d.off('keyup' + p + ' focusin' + p),
        b.ev.off(p),
        b.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
        b.bgOverlay.attr('class', 'mfp-bg'),
        b.container.attr('class', 'mfp-container'),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j));
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        (b.wrap.css('height', d), (b.wH = d));
      } else b.wH = a || v.height();
      (b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize'));
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      (b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index)));
      var d = c.type;
      if (
        (y('BeforeChange', [b.currItem ? b.currItem.type : '', d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        (y('FirstMarkupParse', f), (b.currTemplate[d] = f ? a(f) : !0));
      }
      e && e !== c.type && b.container.removeClass('mfp-' + e + '-holder');
      var g = b['get' + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      (b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y('AfterChange'));
    },
    appendContent: function (a, c) {
      ((b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find('.mfp-close').length || b.content.append(z())
            : (b.content = a)
          : (b.content = ''),
        y(k),
        b.container.addClass('mfp-' + c + '-holder'),
        b.contentContainer.append(b.content));
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass('mfp-' + f[g])) {
            d = f[g];
            break;
          }
        ((e.src = e.el.attr('data-mfp-src')),
          e.src || (e.src = e.el.attr('href')));
      }
      return (
        (e.type = d || b.st.type || 'inline'),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y('ElementParse', e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        ((d.mfpEl = this), b._openClick(d, a, c));
      };
      c || (c = {});
      var e = 'click.magnificPopup';
      ((c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d))));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || (2 !== c.which && !c.ctrlKey && !c.metaKey)) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        (c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e));
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        (c !== a && b.container.removeClass('mfp-s-' + c),
          d || 'loading' !== a || (d = b.st.tLoading));
        var e = { status: a, text: d };
        (y('UpdateStatus', e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find('a').on('click', function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass('mfp-s-' + a),
          (c = a));
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass('mfp-close') ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      (b.bgOverlay.addClass(a), b.wrap.addClass(a));
    },
    _removeClassFromMFP: function (a) {
      (this.bgOverlay.removeClass(a), b.wrap.removeClass(a));
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      (d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (a, c) {
          if (void 0 === c || c === !1) return !0;
          if (((e = a.split('_')), e.length > 1)) {
            var d = b.find(p + '-' + e[0]);
            if (d.length > 0) {
              var f = e[1];
              'replaceWith' === f
                ? d[0] !== c[0] && d.replaceWith(c)
                : 'img' === f
                  ? d.is('img')
                    ? d.attr('src', c)
                    : d.replaceWith(
                        '<img src="' +
                          c +
                          '" class="' +
                          d.attr('class') +
                          '" />'
                      )
                  : d.attr(e[1], c);
            }
          } else b.find(p + '-' + a).html(c);
        }));
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement('div');
        ((a.style.cssText =
          'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a));
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        (c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b));
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: '',
        preloader: !0,
        focus: '',
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&times;</button>',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ('string' == typeof c)
        if ('open' === c) {
          var e,
            f = u ? d.data('magnificPopup') : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          (f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f));
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        ((c = a.extend(!0, {}, c)),
          u ? d.data('magnificPopup', c) : (d[0].magnificPopup = c),
          b.addGroup(d, c));
      return d;
    }));
  var C,
    D,
    E,
    F = 'inline',
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: 'hide',
      markup: '',
      tNotFound: 'Content not found',
    },
    proto: {
      initInline: function () {
        (b.types.push(F),
          w(h + '.' + F, function () {
            G();
          }));
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            (g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = 'mfp-' + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus('ready'));
          } else (b.updateStatus('error', e.tNotFound), (f = a('<div>')));
          return ((c.inlineElement = f), f);
        }
        return (b.updateStatus('ready'), b._parseMarkup(d, {}, c), d);
      },
    },
  });
  var H,
    I = 'ajax',
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      (J(), b.req && b.req.abort());
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        (b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + '.' + I, K),
          w('BeforeChange.' + I, K));
      },
      getAjax: function (c) {
        (H && a(document.body).addClass(H), b.updateStatus('loading'));
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              (y('ParseAjax', g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus('ready'),
                y('AjaxContentAdded'));
            },
            error: function () {
              (J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  'error',
                  b.st.ajax.tError.replace('%url%', c.src)
                ));
            },
          },
          b.st.ajax.settings
        );
        return ((b.req = a.ajax(d)), '');
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || '';
      }
      return '';
    };
  a.magnificPopup.registerModule('image', {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = '.image';
        (b.types.push('image'),
          w(m + d, function () {
            'image' === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            (c.cursor && a(document.body).removeClass(c.cursor),
              v.off('resize' + p));
          }),
          w('Resize' + d, b.resizeImage),
          b.isLowIE && w('AfterChange', b.resizeImage));
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          (b.isLowIE &&
            (c =
              parseInt(a.img.css('padding-top'), 10) +
              parseInt(a.img.css('padding-bottom'), 10)),
            a.img.css('max-height', b.wH - c));
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y('ImageHasSize', a),
          a.imgHidden &&
            (b.content && b.content.removeClass('mfp-loading'),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            (L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                        ? e(50)
                        : 100 === c && e(500)));
              }, f)));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off('.mfploader'),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus('ready')),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y('ImageLoadComplete'))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off('.mfploader'),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus('error', h.tError.replace('%url%', c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find('.mfp-img');
        if (i.length) {
          var j = document.createElement('img');
          ((j.className = 'mfp-img'),
            c.el &&
              c.el.find('img').length &&
              (j.alt = c.el.find('img').attr('alt')),
            (c.img = a(j).on('load.mfploader', f).on('error.mfploader', g)),
            (j.src = c.src),
            i.is('img') && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0
              ? (c.hasSize = !0)
              : j.width || (c.hasSize = !1));
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass('mfp-loading'),
                  b.updateStatus('error', h.tError.replace('%url%', c.src)))
                : (d.removeClass('mfp-loading'), b.updateStatus('ready')),
              d)
            : (b.updateStatus('loading'),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass('mfp-loading'),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement('p').style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener: function (a) {
        return a.is('img') ? a : a.find('img');
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = '.zoom';
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr('style')
                  .removeAttr('class')
                  .addClass('mfp-animated-image'),
                d = 'all ' + c.duration / 1e3 + 's ' + c.easing,
                e = {
                  position: 'fixed',
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  '-webkit-backface-visibility': 'hidden',
                },
                f = 'transition';
              return (
                (e['-webkit-' + f] = e['-moz-' + f] = e['-o-' + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css('visibility', 'visible');
            };
          (w('BuildControls' + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css('visibility', 'hidden'),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              ((f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  (f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      (k(),
                        setTimeout(function () {
                          (f.remove(), (a = f = null), y('ZoomAnimationEnded'));
                        }, 16));
                    }, g)));
                }, 16)));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                (f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css('visibility', 'hidden'),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16));
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            }));
        }
      },
      _allowZoom: function () {
        return 'image' === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css('padding-top'), 10),
          g = parseInt(d.css('padding-bottom'), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h['-moz-transform'] = h.transform =
                'translate(' + e.left + 'px,' + e.top + 'px)')
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = 'iframe',
    Q = '//about:blank',
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find('iframe');
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css('display', a ? 'block' : 'none'));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: 'iframe_src',
      patterns: {
        youtube: {
          index: 'youtube.com',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1',
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1',
        },
        gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
      },
    },
    proto: {
      initIframe: function () {
        (b.types.push(P),
          w('BeforeChange', function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + '.' + P, function () {
            R();
          }));
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  'string' == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace('%id%', e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus('ready'),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule('gallery', {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%',
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = '.mfp-gallery',
          g = Boolean(a.fn.mfpFastClick);
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += ' mfp-gallery'),
              w(m + e, function () {
                (c.navigateByImgClick &&
                  b.wrap.on('click' + e, '.mfp-img', function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on('keydown' + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  }));
              }),
              w('UpdateStatus' + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : '';
              }),
              w('BuildControls' + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, 'left')
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, 'right')
                    ).addClass(s)),
                    h = g ? 'mfpFastClick' : 'click';
                  (e[h](function () {
                    b.prev();
                  }),
                    f[h](function () {
                      b.next();
                    }),
                    b.isIE7 &&
                      (x('b', e[0], !1, !0),
                      x('a', e[0], !1, !0),
                      x('b', f[0], !1, !0),
                      x('a', f[0], !1, !0)),
                    b.container.append(e.add(f)));
                }
              }),
              w(n + e, function () {
                (b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    (b.preloadNearbyImages(), (b._preloadTimeout = null));
                  }, 16)));
              }),
              void w(h + e, function () {
                (d.off(e),
                  b.wrap.off('click' + e),
                  b.arrowLeft &&
                    g &&
                    b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),
                  (b.arrowRight = b.arrowLeft = null));
              }))
            : !1
        );
      },
      next: function () {
        ((b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML());
      },
      prev: function () {
        ((b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML());
      },
      goTo: function (a) {
        ((b.direction = a >= b.index), (b.index = a), b.updateItemHTML());
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          (d.parsed || (d = b.parseEl(c)),
            y('LazyLoad', d),
            'image' === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on('load.mfploader', function () {
                  d.hasSize = !0;
                })
                .on('error.mfploader', function () {
                  ((d.hasSize = !0), (d.loadError = !0), y('LazyLoadError', d));
                })
                .attr('src', d.src)),
            (d.preloaded = !0));
        }
      },
    },
  });
  var U = 'retina';
  (a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return '@2x' + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          ((c = isNaN(c) ? c() : c),
            c > 1 &&
              (w('ImageHasSize.' + U, function (a, b) {
                b.img.css({
                  'max-width': b.img[0].naturalWidth / c,
                  width: '100%',
                });
              }),
              w('ElementParse.' + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              })));
        }
      },
    },
  }),
    (function () {
      var b = 1e3,
        c = 'ontouchstart' in window,
        d = function () {
          v.off('touchmove' + f + ' touchend' + f);
        },
        e = 'mfpFastClick',
        f = '.' + e;
      ((a.fn.mfpFastClick = function (e) {
        return a(this).each(function () {
          var g,
            h = a(this);
          if (c) {
            var i, j, k, l, m, n;
            h.on('touchstart' + f, function (a) {
              ((l = !1),
                (n = 1),
                (m = a.originalEvent
                  ? a.originalEvent.touches[0]
                  : a.touches[0]),
                (j = m.clientX),
                (k = m.clientY),
                v
                  .on('touchmove' + f, function (a) {
                    ((m = a.originalEvent
                      ? a.originalEvent.touches
                      : a.touches),
                      (n = m.length),
                      (m = m[0]),
                      (Math.abs(m.clientX - j) > 10 ||
                        Math.abs(m.clientY - k) > 10) &&
                        ((l = !0), d()));
                  })
                  .on('touchend' + f, function (a) {
                    (d(),
                      l ||
                        n > 1 ||
                        ((g = !0),
                        a.preventDefault(),
                        clearTimeout(i),
                        (i = setTimeout(function () {
                          g = !1;
                        }, b)),
                        e()));
                  }));
            });
          }
          h.on('click' + f, function () {
            g || e();
          });
        });
      }),
        (a.fn.destroyMfpFastClick = function () {
          (a(this).off('touchstart' + f + ' click' + f),
            c && v.off('touchmove' + f + ' touchend' + f));
        }));
    })(),
    A());
});

/*Retina.js v1.3.0*/
//!function(){function a(){}function b(a){return f.retinaImageSuffix+a}function c(a,c){if(this.path=a||"","undefined"!=typeof c&&null!==c)this.at_2x_path=c,this.perform_check=!1;else{if(void 0!==document.createElement){var d=document.createElement("a");d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href}else{var e=this.path.split("?");e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")}this.perform_check=!0}}function d(a){this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};e.Retina=a,a.configure=function(a){null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e);var b=a.onload||function(){};a.onload=function(){var a,c,e=document.getElementsByTagName("img"),f=[];for(a=0;a<e.length;a+=1)c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));b()}},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1};var g=/\.\w+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){var b,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){if(4!==b.readyState)return a(!1);if(b.status>=200&&b.status<=399){if(f.check_mime_type){var e=b.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return c.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){function b(){c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);var c=this;b()},a.isRetina()&&a.init(e)}();

/*Sticky Plugin v1.0.0 for jQuery*/
!(function (t) {
  var e = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: !1,
      getWidthFrom: '',
      responsiveWidth: !1,
    },
    i = t(window),
    s = t(document),
    n = [],
    r = i.height(),
    o = function () {
      for (
        var e = i.scrollTop(),
          o = s.height(),
          a = o - r,
          c = e > a ? a - e : 0,
          p = 0;
        p < n.length;
        p++
      ) {
        var d = n[p],
          l = d.stickyWrapper.offset().top,
          h = l - d.topSpacing - c;
        if (h >= e)
          null !== d.currentTop &&
            (d.stickyElement
              .css('width', '')
              .css('position', '')
              .css('top', ''),
            d.stickyElement
              .trigger('sticky-end', [d])
              .parent()
              .removeClass(d.className),
            (d.currentTop = null));
        else {
          var u =
            o -
            d.stickyElement.outerHeight() -
            d.topSpacing -
            d.bottomSpacing -
            e -
            c;
          (0 > u ? (u += d.topSpacing) : (u = d.topSpacing),
            d.currentTop != u &&
              (d.stickyElement
                .css('width', d.stickyElement.width())
                .css('position', 'fixed')
                .css('top', u),
              'undefined' != typeof d.getWidthFrom &&
                d.stickyElement.css('width', t(d.getWidthFrom).width()),
              d.stickyElement
                .trigger('sticky-start', [d])
                .parent()
                .addClass(d.className),
              (d.currentTop = u)));
        }
      }
    },
    a = function () {
      r = i.height();
      for (var e = 0; e < n.length; e++) {
        var s = n[e];
        'undefined' != typeof s.getWidthFrom &&
          s.responsiveWidth === !0 &&
          s.stickyElement.css('width', t(s.getWidthFrom).width());
      }
    },
    c = {
      init: function (i) {
        var s = t.extend({}, e, i);
        return this.each(function () {
          var i = t(this),
            r = i.attr('id'),
            o =
              (r ? r + '-' + e.wrapperClassName : e.wrapperClassName,
              t('<div></div>')
                .attr('id', r + '-sticky-wrapper')
                .addClass(s.wrapperClassName));
          (i.wrapAll(o),
            s.center &&
              i.parent().css({
                width: i.outerWidth(),
                marginLeft: 'auto',
                marginRight: 'auto',
              }),
            'right' == i.css('float') &&
              i.css({ float: 'none' }).parent().css({ float: 'right' }));
          var a = i.parent();
          (a.css('height', i.outerHeight()),
            n.push({
              topSpacing: s.topSpacing,
              bottomSpacing: s.bottomSpacing,
              stickyElement: i,
              currentTop: null,
              stickyWrapper: a,
              className: s.className,
              getWidthFrom: s.getWidthFrom,
              responsiveWidth: s.responsiveWidth,
            }));
        });
      },
      update: o,
      unstick: function () {
        return this.each(function () {
          for (var e = t(this), i = -1, s = 0; s < n.length; s++)
            n[s].stickyElement.get(0) == e.get(0) && (i = s);
          -1 != i && (n.splice(i, 1), e.unwrap(), e.removeAttr('style'));
        });
      },
    };
  (window.addEventListener
    ? (window.addEventListener('scroll', o, !1),
      window.addEventListener('resize', a, !1))
    : window.attachEvent &&
      (window.attachEvent('onscroll', o), window.attachEvent('onresize', a)),
    (t.fn.sticky = function (e) {
      return c[e]
        ? c[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : 'object' != typeof e && e
          ? void t.error('Method ' + e + ' does not exist on jQuery.sticky')
          : c.init.apply(this, arguments);
    }),
    (t.fn.unstick = function (e) {
      return c[e]
        ? c[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : 'object' != typeof e && e
          ? void t.error('Method ' + e + ' does not exist on jQuery.sticky')
          : c.unstick.apply(this, arguments);
    }),
    t(function () {
      setTimeout(o, 0);
    }));
})(jQuery);

/*Plugin: jQuery Parallax
Version 1.1.3*/
!(function (n) {
  var t = n(window),
    e = t.height();
  (t.resize(function () {
    e = t.height();
  }),
    (n.fn.parallax = function (o, i, r) {
      function u() {
        var r = t.scrollTop();
        a.each(function () {
          var t = n(this),
            u = t.offset().top,
            c = h(t);
          r > u + c ||
            u > r + e ||
            a.css(
              'backgroundPosition',
              o + ' ' + Math.round((l - r) * i) + 'px'
            );
        });
      }
      var h,
        l,
        a = n(this);
      (a.each(function () {
        l = a.offset().top;
      }),
        (h = r
          ? function (n) {
              return n.outerHeight(!0);
            }
          : function (n) {
              return n.height();
            }),
        (arguments.length < 1 || null === o) && (o = '50%'),
        (arguments.length < 2 || null === i) && (i = 0.1),
        (arguments.length < 3 || null === r) && (r = !0),
        t.bind('scroll', u).resize(u),
        u());
    }));
})(jQuery);

/*classie*/
!(function (s) {
  'use strict';
  function e(s) {
    return new RegExp('(^|\\s+)' + s + '(\\s+|$)');
  }
  function n(s, e) {
    var n = a(s, e) ? c : t;
    n(s, e);
  }
  var a, t, c;
  'classList' in document.documentElement
    ? ((a = function (s, e) {
        return s.classList.contains(e);
      }),
      (t = function (s, e) {
        s.classList.add(e);
      }),
      (c = function (s, e) {
        s.classList.remove(e);
      }))
    : ((a = function (s, n) {
        return e(n).test(s.className);
      }),
      (t = function (s, e) {
        a(s, e) || (s.className = s.className + ' ' + e);
      }),
      (c = function (s, n) {
        s.className = s.className.replace(e(n), ' ');
      }));
  var i = {
    hasClass: a,
    addClass: t,
    removeClass: c,
    toggleClass: n,
    has: a,
    add: t,
    remove: c,
    toggle: n,
  };
  'function' == typeof define && define.amd ? define(i) : (s.classie = i);
})(window);

/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  'function' == typeof define && define.amd ? define(['jquery'], a) : a(jQuery);
})(function (a) {
  (a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], 'validator');
      return c
        ? c
        : (this.attr('novalidate', 'novalidate'),
          (c = new a.validator(b, this[0])),
          a.data(this[0], 'validator', c),
          c.settings.onsubmit &&
            (this.validateDelegate(':submit', 'click', function (b) {
              (c.settings.submitHandler && (c.submitButton = b.target),
                a(b.target).hasClass('cancel') && (c.cancelSubmit = !0),
                void 0 !== a(b.target).attr('formnovalidate') &&
                  (c.cancelSubmit = !0));
            }),
            this.submit(function (b) {
              function d() {
                var d, e;
                return c.settings.submitHandler
                  ? (c.submitButton &&
                      (d = a("<input type='hidden'/>")
                        .attr('name', c.submitButton.name)
                        .val(a(c.submitButton).val())
                        .appendTo(c.currentForm)),
                    (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                    c.submitButton && d.remove(),
                    void 0 !== e ? e : !1)
                  : !0;
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                    ? c.pendingRequest
                      ? ((c.formSubmitted = !0), !1)
                      : d()
                    : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c;
      return (
        a(this[0]).is('form')
          ? (b = this.validate().form())
          : ((b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              b = c.element(this) && b;
            })),
        b
      );
    },
    removeAttrs: function (b) {
      var c = {},
        d = this;
      return (
        a.each(b.split(/\s/), function (a, b) {
          ((c[b] = d.attr(b)), d.removeAttr(b));
        }),
        c
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0];
      if (b)
        switch (
          ((d = a.data(j.form, 'validator').settings),
          (e = d.rules),
          (f = a.validator.staticRules(j)),
          b)
        ) {
          case 'add':
            (a.extend(f, a.validator.normalizeRule(c)),
              delete f.messages,
              (e[j.name] = f),
              c.messages &&
                (d.messages[j.name] = a.extend(
                  d.messages[j.name],
                  c.messages
                )));
            break;
          case 'remove':
            return c
              ? ((i = {}),
                a.each(c.split(/\s/), function (b, c) {
                  ((i[c] = f[c]),
                    delete f[c],
                    'required' === c && a(j).removeAttr('aria-required'));
                }),
                i)
              : (delete e[j.name], f);
        }
      return (
        (g = a.validator.normalizeRules(
          a.extend(
            {},
            a.validator.classRules(j),
            a.validator.attributeRules(j),
            a.validator.dataRules(j),
            a.validator.staticRules(j)
          ),
          j
        )),
        g.required &&
          ((h = g.required),
          delete g.required,
          (g = a.extend({ required: h }, g)),
          a(j).attr('aria-required', 'true')),
        g.remote &&
          ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
        g
      );
    },
  }),
    a.extend(a.expr[':'], {
      blank: function (b) {
        return !a.trim('' + a(b).val());
      },
      filled: function (b) {
        return !!a.trim('' + a(b).val());
      },
      unchecked: function (b) {
        return !a(b).prop('checked');
      },
    }),
    (a.validator = function (b, c) {
      ((this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init());
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return (c.unshift(b), a.validator.format.apply(this, c));
          }
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp('\\{' + a + '\\}', 'g'), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: 'error',
        validClass: 'valid',
        errorElement: 'label',
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ':hidden',
        ignoreTitle: !1,
        onfocusin: function (a) {
          ((this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a))));
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (a, b) {
          (9 !== b.which || '' !== this.elementValue(a)) &&
            (a.name in this.submitted || a === this.lastElement) &&
            this.element(a);
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          'radio' === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          'radio' === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: 'This field is required.',
        remote: 'Please fix this field.',
        email: 'Please enter a valid email address.',
        url: 'Please enter a valid URL.',
        date: 'Please enter a valid date.',
        dateISO: 'Please enter a valid date ( ISO ).',
        number: 'Please enter a valid number.',
        digits: 'Please enter only digits.',
        creditcard: 'Please enter a valid credit card number.',
        equalTo: 'Please enter the same value again.',
        maxlength: a.validator.format(
          'Please enter no more than {0} characters.'
        ),
        minlength: a.validator.format('Please enter at least {0} characters.'),
        rangelength: a.validator.format(
          'Please enter a value between {0} and {1} characters long.'
        ),
        range: a.validator.format('Please enter a value between {0} and {1}.'),
        max: a.validator.format(
          'Please enter a value less than or equal to {0}.'
        ),
        min: a.validator.format(
          'Please enter a value greater than or equal to {0}.'
        ),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            var c = a.data(this[0].form, 'validator'),
              d = 'on' + b.type.replace(/^validate/, ''),
              e = c.settings;
            e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
          }
          ((this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset());
          var c,
            d = (this.groups = {});
          (a.each(this.settings.groups, function (b, c) {
            ('string' == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                d[c] = b;
              }));
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .validateDelegate(
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                'focusin focusout keyup',
                b
              )
              .validateDelegate(
                "select, option, [type='radio'], [type='checkbox']",
                'click',
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).bind(
                'invalid-form.validate',
                this.settings.invalidHandler
              ),
            a(this.currentForm)
              .find('[required], [data-rule-required], .required')
              .attr('aria-required', 'true'));
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler('invalid-form', [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c = this.clean(b),
            d = this.validationTargetFor(c),
            e = !0;
          return (
            (this.lastElement = d),
            void 0 === d
              ? delete this.invalid[c.name]
              : (this.prepareElement(d),
                (this.currentElements = a(d)),
                (e = this.check(d) !== !1),
                e ? delete this.invalid[d.name] : (this.invalid[d.name] = !0)),
            a(b).attr('aria-invalid', !e),
            this.numberOfInvalids() ||
              (this.toHide = this.toHide.add(this.containers)),
            this.showErrors(),
            e
          );
        },
        showErrors: function (b) {
          if (b) {
            (a.extend(this.errorMap, b), (this.errorList = []));
            for (var c in b)
              this.errorList.push({
                message: b[c],
                element: this.findByName(c)[0],
              });
            this.successList = a.grep(this.successList, function (a) {
              return !(a.name in b);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          (a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.submitted = {}),
            (this.lastElement = null),
            this.prepareForm(),
            this.hideErrors(),
            this.elements()
              .removeClass(this.settings.errorClass)
              .removeData('previousValue')
              .removeAttr('aria-invalid'));
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) c++;
          return c;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (a) {
          (a.not(this.containers).text(''), this.addWrapper(a).hide());
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(':visible')
                .focus()
                .trigger('focusin');
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find('input, select, textarea')
            .not(':submit, :reset, :image, [disabled], [readonly]')
            .not(this.settings.ignore)
            .filter(function () {
              return (
                !this.name &&
                  b.settings.debug &&
                  window.console &&
                  console.error('%o has no name assigned', this),
                this.name in c || !b.objectLength(a(this).rules())
                  ? !1
                  : ((c[this.name] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(' ').join('.');
          return a(this.settings.errorElement + '.' + b, this.errorContext);
        },
        reset: function () {
          ((this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([])),
            (this.currentElements = a([])));
        },
        prepareForm: function () {
          (this.reset(), (this.toHide = this.errors().add(this.containers)));
        },
        prepareElement: function (a) {
          (this.reset(), (this.toHide = this.errorsFor(a)));
        },
        elementValue: function (b) {
          var c,
            d = a(b),
            e = b.type;
          return 'radio' === e || 'checkbox' === e
            ? a("input[name='" + b.name + "']:checked").val()
            : 'number' === e && 'undefined' != typeof b.validity
              ? b.validity.badInput
                ? !1
                : d.val()
              : ((c = d.val()),
                'string' == typeof c ? c.replace(/\r/g, '') : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function (a, b) {
              return b;
            }).length,
            h = !1,
            i = this.elementValue(b);
          for (d in f) {
            e = { method: d, parameters: f[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                'dependency-mismatch' === c && 1 === g)
              ) {
                h = !0;
                continue;
              }
              if (((h = !1), 'pending' === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return (this.formatAndAdd(b, e), !1);
            } catch (j) {
              throw (
                this.settings.debug &&
                  window.console &&
                  console.log(
                    'Exception occurred when checking element ' +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    j
                  ),
                j
              );
            }
          }
          if (!h) return (this.objectLength(f) && this.successList.push(b), !0);
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              'msg' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data('msg')
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
          return void 0;
        },
        defaultMessage: function (b, c) {
          return this.findDefined(
            this.customMessage(b.name, c),
            this.customDataMessage(b, c),
            (!this.settings.ignoreTitle && b.title) || void 0,
            a.validator.messages[c],
            '<strong>Warning: No message defined for ' + b.name + '</strong>'
          );
        },
        formatAndAdd: function (b, c) {
          var d = this.defaultMessage(b, c.method),
            e = /\$?\{(\d+)\}/g;
          ('function' == typeof d
            ? (d = d.call(this, c.parameters, b))
            : e.test(d) &&
              (d = a.validator.format(d.replace(e, '{$1}'), c.parameters)),
            this.errorList.push({ message: d, element: b, method: c.method }),
            (this.errorMap[b.name] = d),
            (this.submitted[b.name] = d));
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            ((c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message));
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          ((this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show());
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d,
            e,
            f,
            g = this.errorsFor(b),
            h = this.idOrName(b),
            i = a(b).attr('aria-describedby');
          (g.length
            ? (g
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              g.html(c))
            : ((g = a('<' + this.settings.errorElement + '>')
                .attr('id', h + '-error')
                .addClass(this.settings.errorClass)
                .html(c || '')),
              (d = g),
              this.settings.wrapper &&
                (d = g
                  .hide()
                  .show()
                  .wrap('<' + this.settings.wrapper + '/>')
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                  ? this.settings.errorPlacement(d, a(b))
                  : d.insertAfter(b),
              g.is('label')
                ? g.attr('for', h)
                : 0 === g.parents("label[for='" + h + "']").length &&
                  ((f = g.attr('id').replace(/(:|\.|\[|\])/g, '\\$1')),
                  i
                    ? i.match(new RegExp('\\b' + f + '\\b')) || (i += ' ' + f)
                    : (i = f),
                  a(b).attr('aria-describedby', i),
                  (e = this.groups[b.name]),
                  e &&
                    a.each(this.groups, function (b, c) {
                      c === e &&
                        a("[name='" + b + "']", this.currentForm).attr(
                          'aria-describedby',
                          g.attr('id')
                        );
                    }))),
            !c &&
              this.settings.success &&
              (g.text(''),
              'string' == typeof this.settings.success
                ? g.addClass(this.settings.success)
                : this.settings.success(g, b)),
            (this.toShow = this.toShow.add(g)));
        },
        errorsFor: function (b) {
          var c = this.idOrName(b),
            d = a(b).attr('aria-describedby'),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ', #' + d.replace(/\s+/g, ', #')),
            this.errors().filter(e)
          );
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find("[name='" + b + "']");
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case 'select':
              return a('option:selected', c).length;
            case 'input':
              if (this.checkable(c))
                return this.findByName(c.name).filter(':checked').length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return this.dependTypes[typeof a]
            ? this.dependTypes[typeof a](a, b)
            : !0;
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            'dependency-mismatch'
          );
        },
        startRequest: function (a) {
          this.pending[a.name] ||
            (this.pendingRequest++, (this.pending[a.name] = !0));
        },
        stopRequest: function (b, c) {
          (this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler('invalid-form', [this]),
                (this.formSubmitted = !1)));
        },
        previousValue: function (b) {
          return (
            a.data(b, 'previousValue') ||
            a.data(b, 'previousValue', {
              old: null,
              valid: !0,
              message: this.defaultMessage(b, 'remote'),
            })
          );
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr('class');
        return (
          d &&
            a.each(d.split(' '), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute('type');
        for (c in a.validator.methods)
          ('required' === c
            ? ((d = b.getAttribute(c)), '' === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            /min|max/.test(c) &&
              (null === g || /number|range|text/.test(g)) &&
              (d = Number(d)),
            d || 0 === d
              ? (e[c] = d)
              : g === c && 'range' !== g && (e[c] = !0));
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b);
        for (c in a.validator.methods)
          ((d = f.data(
            'rule' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            void 0 !== d && (e[c] = d));
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, 'validator');
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case 'string':
                  f = !!a(e.depends, c.form).length;
                  break;
                case 'function':
                  f = e.depends.call(c, c);
              }
              f ? (b[d] = void 0 !== e.param ? e.param : !0) : delete b[d];
            }
          }),
          a.each(b, function (d, e) {
            b[d] = a.isFunction(e) ? e(c) : e;
          }),
          a.each(['minlength', 'maxlength'], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(['rangelength', 'range'], function () {
            var c;
            b[this] &&
              (a.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : 'string' == typeof b[this] &&
                  ((c = b[this].replace(/[\[\]]/g, '').split(/[\s,]+/)),
                  (b[this] = [Number(c[0]), Number(c[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ('string' == typeof b) {
          var c = {};
          (a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c));
        }
        return b;
      },
      addMethod: function (b, c, d) {
        ((a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b)));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return 'dependency-mismatch';
          if ('select' === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c)
            ? this.getLength(b, c) > 0
            : a.trim(b).length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
              a
            )
          );
        },
        date: function (a, b) {
          return (
            this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          );
        },
        dateISO: function (a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        creditcard: function (a, b) {
          if (this.optional(b)) return 'dependency-mismatch';
          if (/[^0-9 \-]+/.test(a)) return !1;
          var c,
            d,
            e = 0,
            f = 0,
            g = !1;
          if (((a = a.replace(/\D/g, '')), a.length < 13 || a.length > 19))
            return !1;
          for (c = a.length - 1; c >= 0; c--)
            ((d = a.charAt(c)),
              (f = parseInt(d, 10)),
              g && (f *= 2) > 9 && (f -= 9),
              (e += f),
              (g = !g));
          return e % 10 === 0;
        },
        minlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e >= d;
        },
        maxlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || d >= e;
        },
        rangelength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || c >= a;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e
                .unbind('.validate-equalTo')
                .bind('blur.validate-equalTo', function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d) {
          if (this.optional(c)) return 'dependency-mismatch';
          var e,
            f,
            g = this.previousValue(c);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (g.originalMessage = this.settings.messages[c.name].remote),
            (this.settings.messages[c.name].remote = g.message),
            (d = ('string' == typeof d && { url: d }) || d),
            g.old === b
              ? g.valid
              : ((g.old = b),
                (e = this),
                this.startRequest(c),
                (f = {}),
                (f[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      url: d,
                      mode: 'abort',
                      port: 'validate' + c.name,
                      dataType: 'json',
                      data: f,
                      context: e.currentForm,
                      success: function (d) {
                        var f,
                          h,
                          i,
                          j = d === !0 || 'true' === d;
                        ((e.settings.messages[c.name].remote =
                          g.originalMessage),
                          j
                            ? ((i = e.formSubmitted),
                              e.prepareElement(c),
                              (e.formSubmitted = i),
                              e.successList.push(c),
                              delete e.invalid[c.name],
                              e.showErrors())
                            : ((f = {}),
                              (h = d || e.defaultMessage(c, 'remote')),
                              (f[c.name] = g.message =
                                a.isFunction(h) ? h(b) : h),
                              (e.invalid[c.name] = !0),
                              e.showErrors(f)),
                          (g.valid = j),
                          e.stopRequest(c, j));
                      },
                    },
                    d
                  )
                ),
                'pending')
          );
        },
      },
    }),
    (a.format = function () {
      throw '$.format has been deprecated. Please use $.validator.format instead.';
    }));
  var b,
    c = {};
  (a.ajaxPrefilter
    ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        'abort' === a.mode && (c[e] && c[e].abort(), (c[e] = d));
      })
    : ((b = a.ajax),
      (a.ajax = function (d) {
        var e = ('mode' in d ? d : a.ajaxSettings).mode,
          f = ('port' in d ? d : a.ajaxSettings).port;
        return 'abort' === e
          ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
          : b.apply(this, arguments);
      })),
    a.extend(a.fn, {
      validateDelegate: function (b, c, d) {
        return this.bind(c, function (c) {
          var e = a(c.target);
          return e.is(b) ? d.apply(e, arguments) : void 0;
        });
      },
    }));
});

/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!(function (e) {
  'use strict';
  'function' == typeof define && define.amd
    ? define(['jquery'], e)
    : e('undefined' != typeof jQuery ? jQuery : window.Zepto);
})(function (e) {
  'use strict';
  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r));
  }
  function r(t) {
    var r = t.target,
      a = e(r);
    if (!a.is('[type=submit],[type=image]')) {
      var n = a.closest('[type=submit]');
      if (0 === n.length) return;
      r = n[0];
    }
    var i = this;
    if (((i.clk = r), 'image' == r.type))
      if (void 0 !== t.offsetX) ((i.clk_x = t.offsetX), (i.clk_y = t.offsetY));
      else if ('function' == typeof e.fn.offset) {
        var o = a.offset();
        ((i.clk_x = t.pageX - o.left), (i.clk_y = t.pageY - o.top));
      } else
        ((i.clk_x = t.pageX - r.offsetLeft), (i.clk_y = t.pageY - r.offsetTop));
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null;
    }, 100);
  }
  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
      window.console && window.console.log
        ? window.console.log(t)
        : window.opera && window.opera.postError && window.opera.postError(t);
    }
  }
  var n = {};
  ((n.fileapi = void 0 !== e("<input type='file'/>").get(0).files),
    (n.formdata = void 0 !== window.FormData));
  var i = !!e.fn.prop;
  ((e.fn.attr2 = function () {
    if (!i) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return (e && e.jquery) || 'string' == typeof e
      ? e
      : this.attr.apply(this, arguments);
  }),
    (e.fn.ajaxSubmit = function (t) {
      function r(r) {
        var a,
          n,
          i = e.param(r, t.traditional).split('&'),
          o = i.length,
          s = [];
        for (a = 0; o > a; a++)
          ((i[a] = i[a].replace(/\+/g, ' ')),
            (n = i[a].split('=')),
            s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]));
        return s;
      }
      function o(a) {
        for (var n = new FormData(), i = 0; i < a.length; i++)
          n.append(a[i].name, a[i].value);
        if (t.extraData) {
          var o = r(t.extraData);
          for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]);
        }
        t.data = null;
        var s = e.extend(!0, {}, e.ajaxSettings, t, {
          contentType: !1,
          processData: !1,
          cache: !1,
          type: u || 'POST',
        });
        (t.uploadProgress &&
          (s.xhr = function () {
            var r = e.ajaxSettings.xhr();
            return (
              r.upload &&
                r.upload.addEventListener(
                  'progress',
                  function (e) {
                    var r = 0,
                      a = e.loaded || e.position,
                      n = e.total;
                    (e.lengthComputable && (r = Math.ceil((a / n) * 100)),
                      t.uploadProgress(e, a, n, r));
                  },
                  !1
                ),
              r
            );
          }),
          (s.data = null));
        var c = s.beforeSend;
        return (
          (s.beforeSend = function (e, r) {
            ((r.data = t.formData ? t.formData : n), c && c.call(this, e, r));
          }),
          e.ajax(s)
        );
      }
      function s(r) {
        function n(e) {
          var t = null;
          try {
            e.contentWindow && (t = e.contentWindow.document);
          } catch (r) {
            a('cannot get iframe.contentWindow document: ' + r);
          }
          if (t) return t;
          try {
            t = e.contentDocument ? e.contentDocument : e.document;
          } catch (r) {
            (a('cannot get iframe.contentDocument: ' + r), (t = e.document));
          }
          return t;
        }
        function o() {
          function t() {
            try {
              var e = n(g).readyState;
              (a('state = ' + e),
                e && 'uninitialized' == e.toLowerCase() && setTimeout(t, 50));
            } catch (r) {
              (a('Server abort: ', r, ' (', r.name, ')'),
                s(k),
                j && clearTimeout(j),
                (j = void 0));
            }
          }
          var r = f.attr2('target'),
            i = f.attr2('action'),
            o = 'multipart/form-data',
            c = f.attr('enctype') || f.attr('encoding') || o;
          (w.setAttribute('target', p),
            (!u || /post/i.test(u)) && w.setAttribute('method', 'POST'),
            i != m.url && w.setAttribute('action', m.url),
            m.skipEncodingOverride ||
              (u && !/post/i.test(u)) ||
              f.attr({
                encoding: 'multipart/form-data',
                enctype: 'multipart/form-data',
              }),
            m.timeout &&
              (j = setTimeout(function () {
                ((T = !0), s(D));
              }, m.timeout)));
          var l = [];
          try {
            if (m.extraData)
              for (var d in m.extraData)
                m.extraData.hasOwnProperty(d) &&
                  l.push(
                    e.isPlainObject(m.extraData[d]) &&
                      m.extraData[d].hasOwnProperty('name') &&
                      m.extraData[d].hasOwnProperty('value')
                      ? e(
                          '<input type="hidden" name="' +
                            m.extraData[d].name +
                            '">'
                        )
                          .val(m.extraData[d].value)
                          .appendTo(w)[0]
                      : e('<input type="hidden" name="' + d + '">')
                          .val(m.extraData[d])
                          .appendTo(w)[0]
                  );
            (m.iframeTarget || v.appendTo('body'),
              g.attachEvent
                ? g.attachEvent('onload', s)
                : g.addEventListener('load', s, !1),
              setTimeout(t, 15));
            try {
              w.submit();
            } catch (h) {
              var x = document.createElement('form').submit;
              x.apply(w);
            }
          } finally {
            (w.setAttribute('action', i),
              w.setAttribute('enctype', c),
              r ? w.setAttribute('target', r) : f.removeAttr('target'),
              e(l).remove());
          }
        }
        function s(t) {
          if (!x.aborted && !F) {
            if (
              ((M = n(g)),
              M || (a('cannot access response document'), (t = k)),
              t === D && x)
            )
              return (x.abort('timeout'), void S.reject(x, 'timeout'));
            if (t == k && x)
              return (
                x.abort('server abort'),
                void S.reject(x, 'error', 'server abort')
              );
            if ((M && M.location.href != m.iframeSrc) || T) {
              g.detachEvent
                ? g.detachEvent('onload', s)
                : g.removeEventListener('load', s, !1);
              var r,
                i = 'success';
              try {
                if (T) throw 'timeout';
                var o = 'xml' == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                if (
                  (a('isXml=' + o),
                  !o &&
                    window.opera &&
                    (null === M.body || !M.body.innerHTML) &&
                    --O)
                )
                  return (
                    a('requeing onLoad callback, DOM not available'),
                    void setTimeout(s, 250)
                  );
                var u = M.body ? M.body : M.documentElement;
                ((x.responseText = u ? u.innerHTML : null),
                  (x.responseXML = M.XMLDocument ? M.XMLDocument : M),
                  o && (m.dataType = 'xml'),
                  (x.getResponseHeader = function (e) {
                    var t = { 'content-type': m.dataType };
                    return t[e.toLowerCase()];
                  }),
                  u &&
                    ((x.status = Number(u.getAttribute('status')) || x.status),
                    (x.statusText =
                      u.getAttribute('statusText') || x.statusText)));
                var c = (m.dataType || '').toLowerCase(),
                  l = /(json|script|text)/.test(c);
                if (l || m.textarea) {
                  var f = M.getElementsByTagName('textarea')[0];
                  if (f)
                    ((x.responseText = f.value),
                      (x.status = Number(f.getAttribute('status')) || x.status),
                      (x.statusText =
                        f.getAttribute('statusText') || x.statusText));
                  else if (l) {
                    var p = M.getElementsByTagName('pre')[0],
                      h = M.getElementsByTagName('body')[0];
                    p
                      ? (x.responseText = p.textContent
                          ? p.textContent
                          : p.innerText)
                      : h &&
                        (x.responseText = h.textContent
                          ? h.textContent
                          : h.innerText);
                  }
                } else
                  'xml' == c &&
                    !x.responseXML &&
                    x.responseText &&
                    (x.responseXML = X(x.responseText));
                try {
                  E = _(x, c, m);
                } catch (y) {
                  ((i = 'parsererror'), (x.error = r = y || i));
                }
              } catch (y) {
                (a('error caught: ', y), (i = 'error'), (x.error = r = y || i));
              }
              (x.aborted && (a('upload aborted'), (i = null)),
                x.status &&
                  (i =
                    (x.status >= 200 && x.status < 300) || 304 === x.status
                      ? 'success'
                      : 'error'),
                'success' === i
                  ? (m.success && m.success.call(m.context, E, 'success', x),
                    S.resolve(x.responseText, 'success', x),
                    d && e.event.trigger('ajaxSuccess', [x, m]))
                  : i &&
                    (void 0 === r && (r = x.statusText),
                    m.error && m.error.call(m.context, x, i, r),
                    S.reject(x, 'error', r),
                    d && e.event.trigger('ajaxError', [x, m, r])),
                d && e.event.trigger('ajaxComplete', [x, m]),
                d && !--e.active && e.event.trigger('ajaxStop'),
                m.complete && m.complete.call(m.context, x, i),
                (F = !0),
                m.timeout && clearTimeout(j),
                setTimeout(function () {
                  (m.iframeTarget ? v.attr('src', m.iframeSrc) : v.remove(),
                    (x.responseXML = null));
                }, 100));
            }
          }
        }
        var c,
          l,
          m,
          d,
          p,
          v,
          g,
          x,
          y,
          b,
          T,
          j,
          w = f[0],
          S = e.Deferred();
        if (
          ((S.abort = function (e) {
            x.abort(e);
          }),
          r)
        )
          for (l = 0; l < h.length; l++)
            ((c = e(h[l])),
              i ? c.prop('disabled', !1) : c.removeAttr('disabled'));
        if (
          ((m = e.extend(!0, {}, e.ajaxSettings, t)),
          (m.context = m.context || m),
          (p = 'jqFormIO' + new Date().getTime()),
          m.iframeTarget
            ? ((v = e(m.iframeTarget)),
              (b = v.attr2('name')),
              b ? (p = b) : v.attr2('name', p))
            : ((v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />')),
              v.css({ position: 'absolute', top: '-1000px', left: '-1000px' })),
          (g = v[0]),
          (x = {
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function () {},
            getResponseHeader: function () {},
            setRequestHeader: function () {},
            abort: function (t) {
              var r = 'timeout' === t ? 'timeout' : 'aborted';
              (a('aborting upload... ' + r), (this.aborted = 1));
              try {
                g.contentWindow.document.execCommand &&
                  g.contentWindow.document.execCommand('Stop');
              } catch (n) {}
              (v.attr('src', m.iframeSrc),
                (x.error = r),
                m.error && m.error.call(m.context, x, r, t),
                d && e.event.trigger('ajaxError', [x, m, r]),
                m.complete && m.complete.call(m.context, x, r));
            },
          }),
          (d = m.global),
          d && 0 === e.active++ && e.event.trigger('ajaxStart'),
          d && e.event.trigger('ajaxSend', [x, m]),
          m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
        )
          return (m.global && e.active--, S.reject(), S);
        if (x.aborted) return (S.reject(), S);
        ((y = w.clk),
          y &&
            ((b = y.name),
            b &&
              !y.disabled &&
              ((m.extraData = m.extraData || {}),
              (m.extraData[b] = y.value),
              'image' == y.type &&
                ((m.extraData[b + '.x'] = w.clk_x),
                (m.extraData[b + '.y'] = w.clk_y)))));
        var D = 1,
          k = 2,
          A = e('meta[name=csrf-token]').attr('content'),
          L = e('meta[name=csrf-param]').attr('content');
        (L && A && ((m.extraData = m.extraData || {}), (m.extraData[L] = A)),
          m.forceSync ? o() : setTimeout(o, 10));
        var E,
          M,
          F,
          O = 50,
          X =
            e.parseXML ||
            function (e, t) {
              return (
                window.ActiveXObject
                  ? ((t = new ActiveXObject('Microsoft.XMLDOM')),
                    (t.async = 'false'),
                    t.loadXML(e))
                  : (t = new DOMParser().parseFromString(e, 'text/xml')),
                t &&
                t.documentElement &&
                'parsererror' != t.documentElement.nodeName
                  ? t
                  : null
              );
            },
          C =
            e.parseJSON ||
            function (e) {
              return window.eval('(' + e + ')');
            },
          _ = function (t, r, a) {
            var n = t.getResponseHeader('content-type') || '',
              i = 'xml' === r || (!r && n.indexOf('xml') >= 0),
              o = i ? t.responseXML : t.responseText;
            return (
              i &&
                'parsererror' === o.documentElement.nodeName &&
                e.error &&
                e.error('parsererror'),
              a && a.dataFilter && (o = a.dataFilter(o, r)),
              'string' == typeof o &&
                ('json' === r || (!r && n.indexOf('json') >= 0)
                  ? (o = C(o))
                  : ('script' === r || (!r && n.indexOf('javascript') >= 0)) &&
                    e.globalEval(o)),
              o
            );
          };
        return S;
      }
      if (!this.length)
        return (
          a('ajaxSubmit: skipping submit process - no element selected'),
          this
        );
      var u,
        c,
        l,
        f = this;
      ('function' == typeof t ? (t = { success: t }) : void 0 === t && (t = {}),
        (u = t.type || this.attr2('method')),
        (c = t.url || this.attr2('action')),
        (l = 'string' == typeof c ? e.trim(c) : ''),
        (l = l || window.location.href || ''),
        l && (l = (l.match(/^([^#]+)/) || [])[1]),
        (t = e.extend(
          !0,
          {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || '')
              ? 'javascript:false'
              : 'about:blank',
          },
          t
        )));
      var m = {};
      if ((this.trigger('form-pre-serialize', [this, t, m]), m.veto))
        return (
          a('ajaxSubmit: submit vetoed via form-pre-serialize trigger'),
          this
        );
      if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
        return (
          a('ajaxSubmit: submit aborted via beforeSerialize callback'),
          this
        );
      var d = t.traditional;
      void 0 === d && (d = e.ajaxSettings.traditional);
      var p,
        h = [],
        v = this.formToArray(t.semantic, h);
      if (
        (t.data && ((t.extraData = t.data), (p = e.param(t.data, d))),
        t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
      )
        return (
          a('ajaxSubmit: submit aborted via beforeSubmit callback'),
          this
        );
      if ((this.trigger('form-submit-validate', [v, this, t, m]), m.veto))
        return (
          a('ajaxSubmit: submit vetoed via form-submit-validate trigger'),
          this
        );
      var g = e.param(v, d);
      (p && (g = g ? g + '&' + p : p),
        'GET' == t.type.toUpperCase()
          ? ((t.url += (t.url.indexOf('?') >= 0 ? '&' : '?') + g),
            (t.data = null))
          : (t.data = g));
      var x = [];
      if (
        (t.resetForm &&
          x.push(function () {
            f.resetForm();
          }),
        t.clearForm &&
          x.push(function () {
            f.clearForm(t.includeHidden);
          }),
        !t.dataType && t.target)
      ) {
        var y = t.success || function () {};
        x.push(function (r) {
          var a = t.replaceTarget ? 'replaceWith' : 'html';
          e(t.target)[a](r).each(y, arguments);
        });
      } else t.success && x.push(t.success);
      if (
        ((t.success = function (e, r, a) {
          for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
            x[i].apply(n, [e, r, a || f, f]);
        }),
        t.error)
      ) {
        var b = t.error;
        t.error = function (e, r, a) {
          var n = t.context || this;
          b.apply(n, [e, r, a, f]);
        };
      }
      if (t.complete) {
        var T = t.complete;
        t.complete = function (e, r) {
          var a = t.context || this;
          T.apply(a, [e, r, f]);
        };
      }
      var j = e('input[type=file]:enabled', this).filter(function () {
          return '' !== e(this).val();
        }),
        w = j.length > 0,
        S = 'multipart/form-data',
        D = f.attr('enctype') == S || f.attr('encoding') == S,
        k = n.fileapi && n.formdata;
      a('fileAPI :' + k);
      var A,
        L = (w || D) && !k;
      (t.iframe !== !1 && (t.iframe || L)
        ? t.closeKeepAlive
          ? e.get(t.closeKeepAlive, function () {
              A = s(v);
            })
          : (A = s(v))
        : (A = (w || D) && k ? o(v) : e.ajax(t)),
        f.removeData('jqxhr').data('jqxhr', A));
      for (var E = 0; E < h.length; E++) h[E] = null;
      return (this.trigger('form-submit-notify', [this, t]), this);
    }),
    (e.fn.ajaxForm = function (n) {
      if (
        ((n = n || {}),
        (n.delegation = n.delegation && e.isFunction(e.fn.on)),
        !n.delegation && 0 === this.length)
      ) {
        var i = { s: this.selector, c: this.context };
        return !e.isReady && i.s
          ? (a('DOM not ready, queuing ajaxForm'),
            e(function () {
              e(i.s, i.c).ajaxForm(n);
            }),
            this)
          : (a(
              'terminating; zero elements found by selector' +
                (e.isReady ? '' : ' (DOM not ready)')
            ),
            this);
      }
      return n.delegation
        ? (e(document)
            .off('submit.form-plugin', this.selector, t)
            .off('click.form-plugin', this.selector, r)
            .on('submit.form-plugin', this.selector, n, t)
            .on('click.form-plugin', this.selector, n, r),
          this)
        : this.ajaxFormUnbind()
            .bind('submit.form-plugin', n, t)
            .bind('click.form-plugin', n, r);
    }),
    (e.fn.ajaxFormUnbind = function () {
      return this.unbind('submit.form-plugin click.form-plugin');
    }),
    (e.fn.formToArray = function (t, r) {
      var a = [];
      if (0 === this.length) return a;
      var i,
        o = this[0],
        s = this.attr('id'),
        u = t ? o.getElementsByTagName('*') : o.elements;
      if (
        (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()),
        s &&
          ((i = e(':input[form="' + s + '"]').get()),
          i.length && (u = (u || []).concat(i))),
        !u || !u.length)
      )
        return a;
      var c, l, f, m, d, p, h;
      for (c = 0, p = u.length; p > c; c++)
        if (((d = u[c]), (f = d.name), f && !d.disabled))
          if (t && o.clk && 'image' == d.type)
            o.clk == d &&
              (a.push({ name: f, value: e(d).val(), type: d.type }),
              a.push(
                { name: f + '.x', value: o.clk_x },
                { name: f + '.y', value: o.clk_y }
              ));
          else if (((m = e.fieldValue(d, !0)), m && m.constructor == Array))
            for (r && r.push(d), l = 0, h = m.length; h > l; l++)
              a.push({ name: f, value: m[l] });
          else if (n.fileapi && 'file' == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
              for (l = 0; l < v.length; l++)
                a.push({ name: f, value: v[l], type: d.type });
            else a.push({ name: f, value: '', type: d.type });
          } else
            null !== m &&
              'undefined' != typeof m &&
              (r && r.push(d),
              a.push({
                name: f,
                value: m,
                type: d.type,
                required: d.required,
              }));
      if (!t && o.clk) {
        var g = e(o.clk),
          x = g[0];
        ((f = x.name),
          f &&
            !x.disabled &&
            'image' == x.type &&
            (a.push({ name: f, value: g.val() }),
            a.push(
              { name: f + '.x', value: o.clk_x },
              { name: f + '.y', value: o.clk_y }
            )));
      }
      return a;
    }),
    (e.fn.formSerialize = function (t) {
      return e.param(this.formToArray(t));
    }),
    (e.fn.fieldSerialize = function (t) {
      var r = [];
      return (
        this.each(function () {
          var a = this.name;
          if (a) {
            var n = e.fieldValue(this, t);
            if (n && n.constructor == Array)
              for (var i = 0, o = n.length; o > i; i++)
                r.push({ name: a, value: n[i] });
            else
              null !== n &&
                'undefined' != typeof n &&
                r.push({ name: this.name, value: n });
          }
        }),
        e.param(r)
      );
    }),
    (e.fn.fieldValue = function (t) {
      for (var r = [], a = 0, n = this.length; n > a; a++) {
        var i = this[a],
          o = e.fieldValue(i, t);
        null === o ||
          'undefined' == typeof o ||
          (o.constructor == Array && !o.length) ||
          (o.constructor == Array ? e.merge(r, o) : r.push(o));
      }
      return r;
    }),
    (e.fieldValue = function (t, r) {
      var a = t.name,
        n = t.type,
        i = t.tagName.toLowerCase();
      if (
        (void 0 === r && (r = !0),
        r &&
          (!a ||
            t.disabled ||
            'reset' == n ||
            'button' == n ||
            (('checkbox' == n || 'radio' == n) && !t.checked) ||
            (('submit' == n || 'image' == n) && t.form && t.form.clk != t) ||
            ('select' == i && -1 == t.selectedIndex)))
      )
        return null;
      if ('select' == i) {
        var o = t.selectedIndex;
        if (0 > o) return null;
        for (
          var s = [],
            u = t.options,
            c = 'select-one' == n,
            l = c ? o + 1 : u.length,
            f = c ? o : 0;
          l > f;
          f++
        ) {
          var m = u[f];
          if (m.selected) {
            var d = m.value;
            if (
              (d ||
                (d =
                  m.attributes &&
                  m.attributes.value &&
                  !m.attributes.value.specified
                    ? m.text
                    : m.value),
              c)
            )
              return d;
            s.push(d);
          }
        }
        return s;
      }
      return e(t).val();
    }),
    (e.fn.clearForm = function (t) {
      return this.each(function () {
        e('input,select,textarea', this).clearFields(t);
      });
    }),
    (e.fn.clearFields = e.fn.clearInputs =
      function (t) {
        var r =
          /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
          var a = this.type,
            n = this.tagName.toLowerCase();
          r.test(a) || 'textarea' == n
            ? (this.value = '')
            : 'checkbox' == a || 'radio' == a
              ? (this.checked = !1)
              : 'select' == n
                ? (this.selectedIndex = -1)
                : 'file' == a
                  ? /MSIE/.test(navigator.userAgent)
                    ? e(this).replaceWith(e(this).clone(!0))
                    : e(this).val('')
                  : t &&
                    ((t === !0 && /hidden/.test(a)) ||
                      ('string' == typeof t && e(this).is(t))) &&
                    (this.value = '');
        });
      }),
    (e.fn.resetForm = function () {
      return this.each(function () {
        ('function' == typeof this.reset ||
          ('object' == typeof this.reset && !this.reset.nodeType)) &&
          this.reset();
      });
    }),
    (e.fn.enable = function (e) {
      return (
        void 0 === e && (e = !0),
        this.each(function () {
          this.disabled = !e;
        })
      );
    }),
    (e.fn.selected = function (t) {
      return (
        void 0 === t && (t = !0),
        this.each(function () {
          var r = this.type;
          if ('checkbox' == r || 'radio' == r) this.checked = t;
          else if ('option' == this.tagName.toLowerCase()) {
            var a = e(this).parent('select');
            (t &&
              a[0] &&
              'select-one' == a[0].type &&
              a.find('option').selected(!1),
              (this.selected = t));
          }
        })
      );
    }),
    (e.fn.ajaxSubmit.debug = !1));
});
