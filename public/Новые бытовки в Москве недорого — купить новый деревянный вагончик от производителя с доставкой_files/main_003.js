!(function () {
  function a() {
    sessionStorage.getItem('rhlp.initialReferrer') ||
      sessionStorage.setItem('rhlp.initialReferrer', document.referrer);
  }
  a();
  var b,
    c,
    d = document.getElementById('rhlpscrtg').src,
    e = d.split('//')[0];
  c = ~d.indexOf('.com/')
    ? 'web.redhelper.com'
    : d.split('?')[0].indexOf('/development/') > -1
      ? 'development'
      : d.indexOf('/dev/') > -1
        ? 'dev'
        : d.indexOf('/test.web.redhelper.ru/') > -1
          ? 'test.web.redhelper.ru'
          : 'web.redhelper.ru';
  var f = function (a) {
    var b = function () {
      a.done ||
        ((a.done = !0),
        a(),
        document.removeEventListener &&
          (document.removeEventListener('DOMContentLoaded', b),
          window.removeEventListener('load', b)),
        document.detachEvent &&
          (document.detachEvent('onreadystatechange', b),
          window.detachEvent('onload', b)));
    };
    if ('complete' === document.readyState) return void setTimeout(b, 1);
    if (document.addEventListener)
      (document.addEventListener('DOMContentLoaded', b, !1),
        window.addEventListener('load', b, !1));
    else if (document.attachEvent) {
      (document.attachEvent('onreadystatechange', b),
        window.attachEvent('onload', b));
      var c = !1;
      try {
        c = null === window.frameElement;
      } catch (a) {}
      if (document.documentElement.doScroll && c) {
        var d = function () {
          try {
            document.documentElement.doScroll('left');
          } catch (a) {
            return void setTimeout(d, 5);
          }
          b();
        };
        setTimeout(d, 1);
      }
    }
  };
  if (
    void 0 !== navigator.userAgent &&
    -1 !== navigator.userAgent.indexOf('Awesomium')
  )
    b = function () {
      var a =
          -1 !== navigator.userAgent.indexOf('Cobrowse3')
            ? 'main.js'
            : 'main.old.js',
        b =
          e + '//' + c + '/cobrowsing/' + a + '?version=3.1.539.1630063113454',
        d = document.createElement('script');
      ((d.async = !0),
        (d.charset = 'utf8'),
        (d.src = b),
        document.documentElement
          .getElementsByTagName('head')[0]
          .appendChild(d));
    };
  else {
    b = function () {
      var a = e + '//' + c + '/container/main.js?version=3.1.539.1630063113454',
        b = document.createElement('script');
      ((b.charset = 'utf8'),
        (b.async = !0),
        (b.src = a),
        document.documentElement.getElementsByTagName('head')[0].appendChild(b),
        (function () {
          function a() {
            var a,
              b,
              c = 0;
            for (a = 0; a < localStorage.length; a++)
              ((b = localStorage.key(a)),
                0 == b.indexOf('rhlp.' + d) &&
                  b.indexOf('.vid') > 4 &&
                  0 == c &&
                  (c = localStorage.getItem(b)));
            if (!c)
              for (a = 0; a < localStorage.length; a++)
                ((b = localStorage.key(a)),
                  0 == b.indexOf('rhlp.' + d) &&
                    b.indexOf('.visIdFromNx') > 4 &&
                    0 == c &&
                    (c = localStorage.getItem(b)));
            return c;
          }
          try {
            var b = document.getElementById('rhlpscrtg').src,
              d = b.split('?c=')[1].split('&')[0].toLowerCase(),
              f =
                e +
                '//' +
                c +
                '/nx/start?version=3.1.539.1630063113454&c=' +
                d +
                '&page=' +
                encodeURIComponent(location.href.substr(0, 256));
            a() > 0 && (f += '&vid=' + encodeURIComponent(a()));
            var g = document.createElement('script');
            ((g.charset = 'utf8'),
              (g.src = f),
              (g.async = !0),
              document.documentElement
                .getElementsByTagName('head')[0]
                .appendChild(g));
          } catch (a) {}
        })());
    };
  }
  (f(b),
    (function (a) {
      null === window.opera && (window.opera = a);
    })());
})();
