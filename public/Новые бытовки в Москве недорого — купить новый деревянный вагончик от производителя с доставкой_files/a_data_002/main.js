!(function () {
  function b64_sha1(a) {
    return binb2b64(core_sha1(str2binb(a), 8 * a.length));
  }
  function str_sha1(a) {
    return binb2str(core_sha1(str2binb(a), 8 * a.length));
  }
  function b64_hmac_sha1(a, b) {
    return binb2b64(core_hmac_sha1(a, b));
  }
  function str_hmac_sha1(a, b) {
    return binb2str(core_hmac_sha1(a, b));
  }
  function core_sha1(a, b) {
    ((a[b >> 5] |= 128 << (24 - (b % 32))),
      (a[15 + (((b + 64) >> 9) << 4)] = b));
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k = new Array(80),
      l = 1732584193,
      m = -271733879,
      n = -1732584194,
      o = 271733878,
      p = -1009589776;
    for (c = 0; c < a.length; c += 16) {
      for (f = l, g = m, h = n, i = o, j = p, d = 0; d < 80; d++)
        ((k[d] =
          d < 16
            ? a[c + d]
            : rol(k[d - 3] ^ k[d - 8] ^ k[d - 14] ^ k[d - 16], 1)),
          (e = safe_add(
            safe_add(rol(l, 5), sha1_ft(d, m, n, o)),
            safe_add(safe_add(p, k[d]), sha1_kt(d))
          )),
          (p = o),
          (o = n),
          (n = rol(m, 30)),
          (m = l),
          (l = e));
      ((l = safe_add(l, f)),
        (m = safe_add(m, g)),
        (n = safe_add(n, h)),
        (o = safe_add(o, i)),
        (p = safe_add(p, j)));
    }
    return [l, m, n, o, p];
  }
  function sha1_ft(a, b, c, d) {
    return a < 20
      ? (b & c) | (~b & d)
      : a < 40
        ? b ^ c ^ d
        : a < 60
          ? (b & c) | (b & d) | (c & d)
          : b ^ c ^ d;
  }
  function sha1_kt(a) {
    return a < 20
      ? 1518500249
      : a < 40
        ? 1859775393
        : a < 60
          ? -1894007588
          : -899497514;
  }
  function core_hmac_sha1(a, b) {
    var c = str2binb(a);
    c.length > 16 && (c = core_sha1(c, 8 * a.length));
    for (var d = new Array(16), e = new Array(16), f = 0; f < 16; f++)
      ((d[f] = 909522486 ^ c[f]), (e[f] = 1549556828 ^ c[f]));
    var g = core_sha1(d.concat(str2binb(b)), 512 + 8 * b.length);
    return core_sha1(e.concat(g), 672);
  }
  function safe_add(a, b) {
    var c = (65535 & a) + (65535 & b);
    return (((a >> 16) + (b >> 16) + (c >> 16)) << 16) | (65535 & c);
  }
  function rol(a, b) {
    return (a << b) | (a >>> (32 - b));
  }
  function str2binb(a) {
    for (var b = [], c = 255, d = 0; d < 8 * a.length; d += 8)
      b[d >> 5] |= (a.charCodeAt(d / 8) & c) << (24 - (d % 32));
    return b;
  }
  function binb2str(a) {
    for (var b = '', c = 255, d = 0; d < 32 * a.length; d += 8)
      b += String.fromCharCode((a[d >> 5] >>> (24 - (d % 32))) & c);
    return b;
  }
  function binb2b64(a) {
    for (
      var b,
        c,
        d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        e = '',
        f = 0;
      f < 4 * a.length;
      f += 3
    )
      for (
        b =
          (((a[f >> 2] >> (8 * (3 - (f % 4)))) & 255) << 16) |
          (((a[(f + 1) >> 2] >> (8 * (3 - ((f + 1) % 4)))) & 255) << 8) |
          ((a[(f + 2) >> 2] >> (8 * (3 - ((f + 2) % 4)))) & 255),
          c = 0;
        c < 4;
        c++
      )
        8 * f + 6 * c > 32 * a.length
          ? (e += '=')
          : (e += d.charAt((b >> (6 * (3 - c))) & 63));
    return e;
  }
  var rhLocalName = 'rhLocal' + Math.random().toString().substring(2, 8);
  ((window.rhGlobal = window.rhGlobal || {}),
    (rhGlobal.modules = rhGlobal.modules || []));
  var old = rhGlobal.define;
  ((rhGlobal.define = function (a, b, c, d) {
    function e() {
      define ? define(a, b, c) : setTimeout(e, 100);
    }
    (e(),
      d || rhGlobal.modules.push({ a: a, b: b, c: c }),
      old && old(a, b, c, !0));
  }),
    (rhGlobal.define.amd = !0),
    (rhGlobal.define.rhLocalName = rhLocalName));
  var requirejs, require, define;
  (!(function (global, setTimeout) {
    function commentReplace(a, b) {
      return b || '';
    }
    function isFunction(a) {
      return '[object Function]' === ostring.call(a);
    }
    function isArray(a) {
      return '[object Array]' === ostring.call(a);
    }
    function each(a, b) {
      if (a) {
        var c;
        for (c = 0; c < a.length && (!a[c] || !b(a[c], c, a)); c += 1);
      }
    }
    function eachReverse(a, b) {
      if (a) {
        var c;
        for (c = a.length - 1; c > -1 && (!a[c] || !b(a[c], c, a)); c -= 1);
      }
    }
    function hasProp(a, b) {
      return hasOwn.call(a, b);
    }
    function getOwn(a, b) {
      return hasProp(a, b) && a[b];
    }
    function eachProp(a, b) {
      var c;
      for (c in a) if (hasProp(a, c) && b(a[c], c)) break;
    }
    function mixin(a, b, c, d) {
      return (
        b &&
          eachProp(b, function (b, e) {
            (!c && hasProp(a, e)) ||
              (!d ||
              'object' != typeof b ||
              !b ||
              isArray(b) ||
              isFunction(b) ||
              b instanceof RegExp
                ? (a[e] = b)
                : (a[e] || (a[e] = {}), mixin(a[e], b, c, d)));
          }),
        a
      );
    }
    function bind(a, b) {
      return function () {
        return b.apply(a, arguments);
      };
    }
    function scripts() {
      return document.getElementsByTagName('script');
    }
    function defaultOnError(a) {
      throw a;
    }
    function getGlobal(a) {
      if (!a) return a;
      var b = global;
      return (
        each(a.split('.'), function (a) {
          b = b[a];
        }),
        b
      );
    }
    function makeError(a, b, c, d) {
      var e = new Error(b + '\nhttps://requirejs.org/docs/errors.html#' + a);
      return (
        (e.requireType = a),
        (e.requireModules = d),
        c && (e.originalError = c),
        e
      );
    }
    function newContext(a) {
      function b(a) {
        var b, c;
        for (b = 0; b < a.length; b++)
          if ('.' === (c = a[b])) (a.splice(b, 1), (b -= 1));
          else if ('..' === c) {
            if (0 === b || (1 === b && '..' === a[2]) || '..' === a[b - 1])
              continue;
            b > 0 && (a.splice(b - 1, 2), (b -= 2));
          }
      }
      function c(a, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = c && c.split('/'),
          q = x.map,
          r = q && q['*'];
        if (
          (a &&
            ((a = a.split('/')),
            (j = a.length - 1),
            x.nodeIdCompat &&
              jsSuffixRegExp.test(a[j]) &&
              (a[j] = a[j].replace(jsSuffixRegExp, '')),
            '.' === a[0].charAt(0) &&
              p &&
              ((o = p.slice(0, p.length - 1)), (a = o.concat(a))),
            b(a),
            (a = a.join('/'))),
          d && q && (p || r))
        ) {
          f = a.split('/');
          a: for (g = f.length; g > 0; g -= 1) {
            if (((i = f.slice(0, g).join('/')), p))
              for (h = p.length; h > 0; h -= 1)
                if (
                  (e = getOwn(q, p.slice(0, h).join('/'))) &&
                  (e = getOwn(e, i))
                ) {
                  ((k = e), (l = g));
                  break a;
                }
            !m && r && getOwn(r, i) && ((m = getOwn(r, i)), (n = g));
          }
          (!k && m && ((k = m), (l = n)),
            k && (f.splice(0, l, k), (a = f.join('/'))));
        }
        return getOwn(x.pkgs, a) || a;
      }
      function d(a) {
        isBrowser &&
          each(scripts(), function (b) {
            if (
              b.getAttribute('data-requiremodule') === a &&
              b.getAttribute('data-requirecontext') === u.contextName
            )
              return (b.parentNode.removeChild(b), !0);
          });
      }
      function e(a) {
        var b = getOwn(x.paths, a);
        if (b && isArray(b) && b.length > 1)
          return (
            b.shift(),
            u.require.undef(a),
            u.makeRequire(null, { skipMap: !0 })([a]),
            !0
          );
      }
      function f(a) {
        var b,
          c = a ? a.indexOf('!') : -1;
        return (
          c > -1 &&
            ((b = a.substring(0, c)), (a = a.substring(c + 1, a.length))),
          [b, a]
        );
      }
      function g(a, b, d, e) {
        var g,
          h,
          i,
          j,
          k = null,
          l = b ? b.name : null,
          m = a,
          n = !0,
          o = '';
        return (
          a || ((n = !1), (a = '_@r' + (F += 1))),
          (j = f(a)),
          (k = j[0]),
          (a = j[1]),
          k && ((k = c(k, l, e)), (h = getOwn(C, k))),
          a &&
            (k
              ? (o = d
                  ? a
                  : h && h.normalize
                    ? h.normalize(a, function (a) {
                        return c(a, l, e);
                      })
                    : -1 === a.indexOf('!')
                      ? c(a, l, e)
                      : a)
              : ((o = c(a, l, e)),
                (j = f(o)),
                (k = j[0]),
                (o = j[1]),
                (d = !0),
                (g = u.nameToUrl(o)))),
          (i = !k || h || d ? '' : '_unnormalized' + (G += 1)),
          {
            prefix: k,
            name: o,
            parentMap: b,
            unnormalized: !!i,
            url: g,
            originalName: m,
            isDefine: n,
            id: (k ? k + '!' + o : o) + i,
          }
        );
      }
      function h(a) {
        var b = a.id,
          c = getOwn(y, b);
        return (c || (c = y[b] = new u.Module(a)), c);
      }
      function i(a, b, c) {
        var d = a.id,
          e = getOwn(y, d);
        !hasProp(C, d) || (e && !e.defineEmitComplete)
          ? ((e = h(a)), e.error && 'error' === b ? c(e.error) : e.on(b, c))
          : 'defined' === b && c(C[d]);
      }
      function j(a, b) {
        var c = a.requireModules,
          d = !1;
        b
          ? b(a)
          : (each(c, function (b) {
              var c = getOwn(y, b);
              c &&
                ((c.error = a),
                c.events.error && ((d = !0), c.emit('error', a)));
            }),
            d || req.onError(a));
      }
      function k() {
        globalDefQueue.length &&
          (each(globalDefQueue, function (a) {
            var b = a[0];
            ('string' == typeof b && (u.defQueueMap[b] = !0), B.push(a));
          }),
          (globalDefQueue = []));
      }
      function l(a) {
        (delete y[a], delete z[a]);
      }
      function m(a, b, c) {
        var d = a.map.id;
        a.error
          ? a.emit('error', a.error)
          : ((b[d] = !0),
            each(a.depMaps, function (d, e) {
              var f = d.id,
                g = getOwn(y, f);
              !g ||
                a.depMatched[e] ||
                c[f] ||
                (getOwn(b, f) ? (a.defineDep(e, C[f]), a.check()) : m(g, b, c));
            }),
            (c[d] = !0));
      }
      function n() {
        var a,
          b,
          c = 1e3 * x.waitSeconds,
          f = c && u.startTime + c < new Date().getTime(),
          g = [],
          h = [],
          i = !1,
          k = !0;
        if (!s) {
          if (
            ((s = !0),
            eachProp(z, function (a) {
              var c = a.map,
                j = c.id;
              if (a.enabled && (c.isDefine || h.push(a), !a.error))
                if (!a.inited && f)
                  e(j) ? ((b = !0), (i = !0)) : (g.push(j), d(j));
                else if (
                  !a.inited &&
                  a.fetched &&
                  c.isDefine &&
                  ((i = !0), !c.prefix)
                )
                  return (k = !1);
            }),
            f && g.length)
          )
            return (
              (a = makeError(
                'timeout',
                'Load timeout for modules: ' + g,
                null,
                g
              )),
              (a.contextName = u.contextName),
              j(a)
            );
          (k &&
            each(h, function (a) {
              m(a, {}, {});
            }),
            (f && !b) ||
              !i ||
              (!isBrowser && !isWebWorker) ||
              w ||
              (w = setTimeout(function () {
                ((w = 0), n());
              }, 50)),
            (s = !1));
        }
      }
      function o(a) {
        hasProp(C, a[0]) || h(g(a[0], null, !0)).init(a[1], a[2]);
      }
      function p(a, b, c, d) {
        a.detachEvent && !isOpera
          ? d && a.detachEvent(d, b)
          : a.removeEventListener(c, b, !1);
      }
      function q(a) {
        var b = a.currentTarget || a.srcElement;
        return (
          p(b, u.onScriptLoad, 'load', 'onreadystatechange'),
          p(b, u.onScriptError, 'error'),
          { node: b, id: b && b.getAttribute('data-requiremodule') }
        );
      }
      function r() {
        var a;
        for (k(); B.length; ) {
          if (((a = B.shift()), null === a[0]))
            return j(
              makeError(
                'mismatch',
                'Mismatched anonymous define() module: ' + a[a.length - 1]
              )
            );
          o(a);
        }
        u.defQueueMap = {};
      }
      var s,
        t,
        u,
        v,
        w,
        x = {
          waitSeconds: 7,
          baseUrl: './',
          paths: {},
          bundles: {},
          pkgs: {},
          shim: {},
          config: {},
        },
        y = {},
        z = {},
        A = {},
        B = [],
        C = {},
        D = {},
        E = {},
        F = 1,
        G = 1;
      return (
        (v = {
          require: function (a) {
            return a.require ? a.require : (a.require = u.makeRequire(a.map));
          },
          exports: function (a) {
            if (((a.usingExports = !0), a.map.isDefine))
              return a.exports
                ? (C[a.map.id] = a.exports)
                : (a.exports = C[a.map.id] = {});
          },
          module: function (a) {
            return a.module
              ? a.module
              : (a.module = {
                  id: a.map.id,
                  uri: a.map.url,
                  config: function () {
                    return getOwn(x.config, a.map.id) || {};
                  },
                  exports: a.exports || (a.exports = {}),
                });
          },
        }),
        (t = function (a) {
          ((this.events = getOwn(A, a.id) || {}),
            (this.map = a),
            (this.shim = getOwn(x.shim, a.id)),
            (this.depExports = []),
            (this.depMaps = []),
            (this.depMatched = []),
            (this.pluginMaps = {}),
            (this.depCount = 0));
        }),
        (t.prototype = {
          init: function (a, b, c, d) {
            ((d = d || {}),
              this.inited ||
                ((this.factory = b),
                c
                  ? this.on('error', c)
                  : this.events.error &&
                    (c = bind(this, function (a) {
                      this.emit('error', a);
                    })),
                (this.depMaps = a && a.slice(0)),
                (this.errback = c),
                (this.inited = !0),
                (this.ignore = d.ignore),
                d.enabled || this.enabled ? this.enable() : this.check()));
          },
          defineDep: function (a, b) {
            this.depMatched[a] ||
              ((this.depMatched[a] = !0),
              (this.depCount -= 1),
              (this.depExports[a] = b));
          },
          fetch: function () {
            if (!this.fetched) {
              ((this.fetched = !0), (u.startTime = new Date().getTime()));
              var a = this.map;
              if (!this.shim) return a.prefix ? this.callPlugin() : this.load();
              u.makeRequire(this.map, { enableBuildCallback: !0 })(
                this.shim.deps || [],
                bind(this, function () {
                  return a.prefix ? this.callPlugin() : this.load();
                })
              );
            }
          },
          load: function () {
            var a = this.map.url;
            D[a] || ((D[a] = !0), u.load(this.map.id, a));
          },
          check: function () {
            if (this.enabled && !this.enabling) {
              var a,
                b,
                c = this.map.id,
                d = this.depExports,
                e = this.exports,
                f = this.factory;
              if (this.inited) {
                if (this.error) this.emit('error', this.error);
                else if (!this.defining) {
                  if (
                    ((this.defining = !0), this.depCount < 1 && !this.defined)
                  ) {
                    if (isFunction(f)) {
                      if (
                        (this.events.error && this.map.isDefine) ||
                        req.onError !== defaultOnError
                      )
                        try {
                          e = u.execCb(c, f, d, e);
                        } catch (b) {
                          a = b;
                        }
                      else e = u.execCb(c, f, d, e);
                      if (
                        (this.map.isDefine &&
                          void 0 === e &&
                          ((b = this.module),
                          b
                            ? (e = b.exports)
                            : this.usingExports && (e = this.exports)),
                        a)
                      )
                        return (
                          (a.requireMap = this.map),
                          (a.requireModules = this.map.isDefine
                            ? [this.map.id]
                            : null),
                          (a.requireType = this.map.isDefine
                            ? 'define'
                            : 'require'),
                          j((this.error = a))
                        );
                    } else e = f;
                    if (
                      ((this.exports = e),
                      this.map.isDefine &&
                        !this.ignore &&
                        ((C[c] = e), req.onResourceLoad))
                    ) {
                      var g = [];
                      (each(this.depMaps, function (a) {
                        g.push(a.normalizedMap || a);
                      }),
                        req.onResourceLoad(u, this.map, g));
                    }
                    (l(c), (this.defined = !0));
                  }
                  ((this.defining = !1),
                    this.defined &&
                      !this.defineEmitted &&
                      ((this.defineEmitted = !0),
                      this.emit('defined', this.exports),
                      (this.defineEmitComplete = !0)));
                }
              } else hasProp(u.defQueueMap, c) || this.fetch();
            }
          },
          callPlugin: function () {
            var a = this.map,
              b = a.id,
              d = g(a.prefix);
            (this.depMaps.push(d),
              i(
                d,
                'defined',
                bind(this, function (d) {
                  var e,
                    f,
                    k,
                    m = getOwn(E, this.map.id),
                    n = this.map.name,
                    o = this.map.parentMap ? this.map.parentMap.name : null,
                    p = u.makeRequire(a.parentMap, { enableBuildCallback: !0 });
                  return this.map.unnormalized
                    ? (d.normalize &&
                        (n =
                          d.normalize(n, function (a) {
                            return c(a, o, !0);
                          }) || ''),
                      (f = g(a.prefix + '!' + n, this.map.parentMap, !0)),
                      i(
                        f,
                        'defined',
                        bind(this, function (a) {
                          ((this.map.normalizedMap = f),
                            this.init(
                              [],
                              function () {
                                return a;
                              },
                              null,
                              { enabled: !0, ignore: !0 }
                            ));
                        })
                      ),
                      void (
                        (k = getOwn(y, f.id)) &&
                        (this.depMaps.push(f),
                        this.events.error &&
                          k.on(
                            'error',
                            bind(this, function (a) {
                              this.emit('error', a);
                            })
                          ),
                        k.enable())
                      ))
                    : m
                      ? ((this.map.url = u.nameToUrl(m)), void this.load())
                      : ((e = bind(this, function (a) {
                          this.init(
                            [],
                            function () {
                              return a;
                            },
                            null,
                            { enabled: !0 }
                          );
                        })),
                        (e.error = bind(this, function (a) {
                          ((this.inited = !0),
                            (this.error = a),
                            (a.requireModules = [b]),
                            eachProp(y, function (a) {
                              0 === a.map.id.indexOf(b + '_unnormalized') &&
                                l(a.map.id);
                            }),
                            j(a));
                        })),
                        (e.fromText = bind(this, function (c, d) {
                          var f = a.name,
                            i = g(f),
                            k = useInteractive;
                          (d && (c = d),
                            k && (useInteractive = !1),
                            h(i),
                            hasProp(x.config, b) &&
                              (x.config[f] = x.config[b]));
                          try {
                            req.exec(c);
                          } catch (a) {
                            return j(
                              makeError(
                                'fromtexteval',
                                'fromText eval for ' + b + ' failed: ' + a,
                                a,
                                [b]
                              )
                            );
                          }
                          (k && (useInteractive = !0),
                            this.depMaps.push(i),
                            u.completeLoad(f),
                            p([f], e));
                        })),
                        void d.load(a.name, p, e, x));
                })
              ),
              u.enable(d, this),
              (this.pluginMaps[d.id] = d));
          },
          enable: function () {
            ((z[this.map.id] = this),
              (this.enabled = !0),
              (this.enabling = !0),
              each(
                this.depMaps,
                bind(this, function (a, b) {
                  var c, d, e;
                  if ('string' == typeof a) {
                    if (
                      ((a = g(
                        a,
                        this.map.isDefine ? this.map : this.map.parentMap,
                        !1,
                        !this.skipMap
                      )),
                      (this.depMaps[b] = a),
                      (e = getOwn(v, a.id)))
                    )
                      return void (this.depExports[b] = e(this));
                    ((this.depCount += 1),
                      i(
                        a,
                        'defined',
                        bind(this, function (a) {
                          this.undefed || (this.defineDep(b, a), this.check());
                        })
                      ),
                      this.errback
                        ? i(a, 'error', bind(this, this.errback))
                        : this.events.error &&
                          i(
                            a,
                            'error',
                            bind(this, function (a) {
                              this.emit('error', a);
                            })
                          ));
                  }
                  ((c = a.id),
                    (d = y[c]),
                    hasProp(v, c) || !d || d.enabled || u.enable(a, this));
                })
              ),
              eachProp(
                this.pluginMaps,
                bind(this, function (a) {
                  var b = getOwn(y, a.id);
                  b && !b.enabled && u.enable(a, this);
                })
              ),
              (this.enabling = !1),
              this.check());
          },
          on: function (a, b) {
            var c = this.events[a];
            (c || (c = this.events[a] = []), c.push(b));
          },
          emit: function (a, b) {
            (each(this.events[a], function (a) {
              a(b);
            }),
              'error' === a && delete this.events[a]);
          },
        }),
        (u = {
          config: x,
          contextName: a,
          registry: y,
          defined: C,
          urlFetched: D,
          defQueue: B,
          defQueueMap: {},
          Module: t,
          makeModuleMap: g,
          nextTick: req.nextTick,
          onError: j,
          configure: function (a) {
            if (
              (a.baseUrl &&
                '/' !== a.baseUrl.charAt(a.baseUrl.length - 1) &&
                (a.baseUrl += '/'),
              'string' == typeof a.urlArgs)
            ) {
              var b = a.urlArgs;
              a.urlArgs = function (a, c) {
                return (-1 === c.indexOf('?') ? '?' : '&') + b;
              };
            }
            var c = x.shim,
              d = { paths: !0, bundles: !0, config: !0, map: !0 };
            (eachProp(a, function (a, b) {
              d[b] ? (x[b] || (x[b] = {}), mixin(x[b], a, !0, !0)) : (x[b] = a);
            }),
              a.bundles &&
                eachProp(a.bundles, function (a, b) {
                  each(a, function (a) {
                    a !== b && (E[a] = b);
                  });
                }),
              a.shim &&
                (eachProp(a.shim, function (a, b) {
                  (isArray(a) && (a = { deps: a }),
                    (!a.exports && !a.init) ||
                      a.exportsFn ||
                      (a.exportsFn = u.makeShimExports(a)),
                    (c[b] = a));
                }),
                (x.shim = c)),
              a.packages &&
                each(a.packages, function (a) {
                  var b, c;
                  ((a = 'string' == typeof a ? { name: a } : a),
                    (c = a.name),
                    (b = a.location),
                    b && (x.paths[c] = a.location),
                    (x.pkgs[c] =
                      a.name +
                      '/' +
                      (a.main || 'main')
                        .replace(currDirRegExp, '')
                        .replace(jsSuffixRegExp, '')));
                }),
              eachProp(y, function (a, b) {
                a.inited || a.map.unnormalized || (a.map = g(b, null, !0));
              }),
              (a.deps || a.callback) && u.require(a.deps || [], a.callback));
          },
          makeShimExports: function (a) {
            function b() {
              var b;
              return (
                a.init && (b = a.init.apply(global, arguments)),
                b || (a.exports && getGlobal(a.exports))
              );
            }
            return b;
          },
          makeRequire: function (b, e) {
            function f(c, d, i) {
              var k, l, m;
              return (
                e.enableBuildCallback &&
                  d &&
                  isFunction(d) &&
                  (d.__requireJsBuild = !0),
                'string' == typeof c
                  ? isFunction(d)
                    ? j(makeError('requireargs', 'Invalid require call'), i)
                    : b && hasProp(v, c)
                      ? v[c](y[b.id])
                      : req.get
                        ? req.get(u, c, b, f)
                        : ((l = g(c, b, !1, !0)),
                          (k = l.id),
                          hasProp(C, k)
                            ? C[k]
                            : j(
                                makeError(
                                  'notloaded',
                                  'Module name "' +
                                    k +
                                    '" has not been loaded yet for context: ' +
                                    a +
                                    (b ? '' : '. Use require([])')
                                )
                              ))
                  : (r(),
                    u.nextTick(function () {
                      (r(),
                        (m = h(g(null, b))),
                        (m.skipMap = e.skipMap),
                        m.init(c, d, i, { enabled: !0 }),
                        n());
                    }),
                    f)
              );
            }
            return (
              (e = e || {}),
              mixin(f, {
                isBrowser: isBrowser,
                toUrl: function (a) {
                  var d,
                    e = a.lastIndexOf('.'),
                    f = a.split('/')[0],
                    g = '.' === f || '..' === f;
                  return (
                    -1 !== e &&
                      (!g || e > 1) &&
                      ((d = a.substring(e, a.length)), (a = a.substring(0, e))),
                    u.nameToUrl(c(a, b && b.id, !0), d, !0)
                  );
                },
                defined: function (a) {
                  return hasProp(C, g(a, b, !1, !0).id);
                },
                specified: function (a) {
                  return (
                    (a = g(a, b, !1, !0).id),
                    hasProp(C, a) || hasProp(y, a)
                  );
                },
              }),
              b ||
                (f.undef = function (a) {
                  k();
                  var c = g(a, b, !0),
                    e = getOwn(y, a);
                  ((e.undefed = !0),
                    d(a),
                    delete C[a],
                    delete D[c.url],
                    delete A[a],
                    eachReverse(B, function (b, c) {
                      b[0] === a && B.splice(c, 1);
                    }),
                    delete u.defQueueMap[a],
                    e && (e.events.defined && (A[a] = e.events), l(a)));
                }),
              f
            );
          },
          enable: function (a) {
            getOwn(y, a.id) && h(a).enable();
          },
          completeLoad: function (a) {
            var b,
              c,
              d,
              f = getOwn(x.shim, a) || {},
              g = f.exports;
            for (k(); B.length; ) {
              if (((c = B.shift()), null === c[0])) {
                if (((c[0] = a), b)) break;
                b = !0;
              } else c[0] === a && (b = !0);
              o(c);
            }
            if (
              ((u.defQueueMap = {}),
              (d = getOwn(y, a)),
              !b && !hasProp(C, a) && d && !d.inited)
            ) {
              if (!(!x.enforceDefine || (g && getGlobal(g))))
                return e(a)
                  ? void 0
                  : j(
                      makeError('nodefine', 'No define call for ' + a, null, [
                        a,
                      ])
                    );
              o([a, f.deps || [], f.exportsFn]);
            }
            n();
          },
          nameToUrl: function (a, b, c) {
            var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k = getOwn(x.pkgs, a);
            if ((k && (a = k), (j = getOwn(E, a)))) return u.nameToUrl(j, b, c);
            if (req.jsExtRegExp.test(a)) h = a + (b || '');
            else {
              for (d = x.paths, e = a.split('/'), f = e.length; f > 0; f -= 1)
                if (((g = e.slice(0, f).join('/')), (i = getOwn(d, g)))) {
                  (isArray(i) && (i = i[0]), e.splice(0, f, i));
                  break;
                }
              ((h = e.join('/')),
                (h += b || (/^data\:|^blob\:|\?/.test(h) || c ? '' : '.js')),
                (h =
                  ('/' === h.charAt(0) || h.match(/^[\w\+\.\-]+:/)
                    ? ''
                    : x.baseUrl) + h));
            }
            return x.urlArgs && !/^blob\:/.test(h) ? h + x.urlArgs(a, h) : h;
          },
          load: function (a, b) {
            req.load(u, a, b);
          },
          execCb: function (a, b, c, d) {
            return b.apply(d, c);
          },
          onScriptLoad: function (a) {
            if (
              'load' === a.type ||
              readyRegExp.test((a.currentTarget || a.srcElement).readyState)
            ) {
              interactiveScript = null;
              var b = q(a);
              u.completeLoad(b.id);
            }
          },
          onScriptError: function (a) {
            var b = q(a);
            if (!e(b.id)) {
              var c = [];
              return (
                eachProp(y, function (a, d) {
                  0 !== d.indexOf('_@r') &&
                    each(a.depMaps, function (a) {
                      if (a.id === b.id) return (c.push(d), !0);
                    });
                }),
                j(
                  makeError(
                    'scripterror',
                    'Script error for "' +
                      b.id +
                      (c.length ? '", needed by: ' + c.join(', ') : '"'),
                    a,
                    [b.id]
                  )
                )
              );
            }
          },
        }),
        (u.require = u.makeRequire()),
        u
      );
    }
    function getInteractiveScript() {
      return interactiveScript && 'interactive' === interactiveScript.readyState
        ? interactiveScript
        : (eachReverse(scripts(), function (a) {
            if ('interactive' === a.readyState) return (interactiveScript = a);
          }),
          interactiveScript);
    }
    var req,
      s,
      head,
      baseElement,
      dataMain,
      src,
      interactiveScript,
      currentlyAddingScript,
      mainScript,
      subPath,
      version = '2.3.6',
      commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
      cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
      jsSuffixRegExp = /\.js$/,
      currDirRegExp = /^\.\//,
      op = Object.prototype,
      ostring = op.toString,
      hasOwn = op.hasOwnProperty,
      isBrowser = !(
        'undefined' == typeof window ||
        'undefined' == typeof navigator ||
        !window.document
      ),
      isWebWorker = !isBrowser && 'undefined' != typeof importScripts,
      readyRegExp =
        isBrowser && 'PLAYSTATION 3' === navigator.platform
          ? /^complete$/
          : /^(complete|loaded)$/,
      defContextName = '_',
      isOpera =
        'undefined' != typeof opera && '[object Opera]' === opera.toString(),
      contexts = {},
      cfg = {},
      globalDefQueue = [],
      useInteractive = !1;
    if (void 0 === define) {
      if (void 0 !== requirejs) {
        if (isFunction(requirejs)) return;
        ((cfg = requirejs), (requirejs = void 0));
      }
      (void 0 === require ||
        isFunction(require) ||
        ((cfg = require), (require = void 0)),
        (req = requirejs =
          function (a, b, c, d) {
            var e,
              f,
              g = defContextName;
            return (
              isArray(a) ||
                'string' == typeof a ||
                ((f = a), isArray(b) ? ((a = b), (b = c), (c = d)) : (a = [])),
              f && f.context && (g = f.context),
              (e = getOwn(contexts, g)),
              e || (e = contexts[g] = req.s.newContext(g)),
              f && e.configure(f),
              e.require(a, b, c)
            );
          }),
        (req.config = function (a) {
          return req(a);
        }),
        (req.nextTick =
          void 0 !== setTimeout
            ? function (a) {
                setTimeout(a, 4);
              }
            : function (a) {
                a();
              }),
        require || (require = req),
        (req.version = version),
        (req.jsExtRegExp = /^\/|:|\?|\.js$/),
        (req.isBrowser = isBrowser),
        (s = req.s = { contexts: contexts, newContext: newContext }),
        req({}),
        each(['toUrl', 'undef', 'defined', 'specified'], function (a) {
          req[a] = function () {
            var b = contexts[defContextName];
            return b.require[a].apply(b, arguments);
          };
        }),
        isBrowser &&
          ((head = s.head = document.getElementsByTagName('head')[0]),
          (baseElement = document.getElementsByTagName('base')[0]) &&
            (head = s.head = baseElement.parentNode)),
        (req.onError = defaultOnError),
        (req.createNode = function (a, b, c) {
          var d = a.xhtml
            ? document.createElementNS(
                'http://www.w3.org/1999/xhtml',
                'html:script'
              )
            : document.createElement('script');
          return (
            (d.type = a.scriptType || 'text/javascript'),
            (d.charset = 'utf-8'),
            (d.async = !0),
            d
          );
        }),
        (req.load = function (a, b, c) {
          var d,
            e = (a && a.config) || {};
          if (isBrowser)
            return (
              (d = req.createNode(e, b, c)),
              d.setAttribute('data-requirecontext', a.contextName),
              d.setAttribute('data-requiremodule', b),
              !d.attachEvent ||
              (d.attachEvent.toString &&
                d.attachEvent.toString().indexOf('[native code') < 0) ||
              isOpera
                ? (d.addEventListener('load', a.onScriptLoad, !1),
                  d.addEventListener('error', a.onScriptError, !1))
                : ((useInteractive = !0),
                  d.attachEvent('onreadystatechange', a.onScriptLoad)),
              (d.src = c),
              e.onNodeCreated && e.onNodeCreated(d, e, b, c),
              (currentlyAddingScript = d),
              baseElement
                ? head.insertBefore(d, baseElement)
                : head.appendChild(d),
              (currentlyAddingScript = null),
              d
            );
          if (isWebWorker)
            try {
              (setTimeout(function () {}, 0),
                importScripts(c),
                a.completeLoad(b));
            } catch (d) {
              a.onError(
                makeError(
                  'importscripts',
                  'importScripts failed for ' + b + ' at ' + c,
                  d,
                  [b]
                )
              );
            }
        }),
        isBrowser &&
          !cfg.skipDataMain &&
          eachReverse(scripts(), function (a) {
            if (
              (head || (head = a.parentNode),
              (dataMain = a.getAttribute('data-main')))
            )
              return (
                (mainScript = dataMain),
                cfg.baseUrl ||
                  -1 !== mainScript.indexOf('!') ||
                  ((src = mainScript.split('/')),
                  (mainScript = src.pop()),
                  (subPath = src.length ? src.join('/') + '/' : './'),
                  (cfg.baseUrl = subPath)),
                (mainScript = mainScript.replace(jsSuffixRegExp, '')),
                req.jsExtRegExp.test(mainScript) && (mainScript = dataMain),
                (cfg.deps = cfg.deps
                  ? cfg.deps.concat(mainScript)
                  : [mainScript]),
                !0
              );
          }),
        (define = function (a, b, c) {
          var d, e;
          ('string' != typeof a && ((c = b), (b = a), (a = null)),
            isArray(b) || ((c = b), (b = null)),
            !b &&
              isFunction(c) &&
              ((b = []),
              c.length &&
                (c
                  .toString()
                  .replace(commentRegExp, commentReplace)
                  .replace(cjsRequireRegExp, function (a, c) {
                    b.push(c);
                  }),
                (b = (
                  1 === c.length
                    ? ['require']
                    : ['require', 'exports', 'module']
                ).concat(b)))),
            useInteractive &&
              (d = currentlyAddingScript || getInteractiveScript()) &&
              (a || (a = d.getAttribute('data-requiremodule')),
              (e = contexts[d.getAttribute('data-requirecontext')])),
            e
              ? (e.defQueue.push([a, b, c]), (e.defQueueMap[a] = !0))
              : globalDefQueue.push([a, b, c]));
        }),
        (define.amd = { jQuery: !0 }),
        (req.exec = function (text) {
          return eval(text);
        }),
        req(cfg));
    }
  })(this, 'undefined' == typeof setTimeout ? void 0 : setTimeout),
    define('almond', function () {}),
    define('common/extensions/compatibility', [], function () {
      ('function' != typeof Date.now &&
        (Date.now = function () {
          return new Date().getTime();
        }),
        'bind' in Function.prototype ||
          (Function.prototype.bind = function (a) {
            var b = this;
            if (arguments.length <= 1)
              return function () {
                return b.apply(a, arguments);
              };
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
              return b.apply(
                a,
                0 === arguments.length
                  ? c
                  : c.concat(Array.prototype.slice.call(arguments))
              );
            };
          }),
        'trim' in String.prototype ||
          (String.prototype.trim = function () {
            return this.replace(/^\s+/, '').replace(/\s+$/, '');
          }),
        ('indexOf' in Array.prototype &&
          'function' == typeof Array.prototype.indexOf &&
          -1 == [].indexOf(0)) ||
          (Array.prototype.indexOf = function (a, b) {
            (void 0 === b && (b = 0),
              b < 0 && (b += this.length),
              b < 0 && (b = 0));
            for (var c = this.length; b < c; b++) if (this[b] === a) return b;
            return -1;
          }),
        'lastIndexOf' in Array.prototype ||
          (Array.prototype.lastIndexOf = function (a, b) {
            for (
              void 0 === b && (b = this.length - 1),
                b < 0 && (b += this.length),
                b > this.length - 1 && (b = this.length - 1),
                b++;
              b-- > 0;

            )
              if (b in this && this[b] === a) return b;
            return -1;
          }),
        'forEach' in Array.prototype ||
          (Array.prototype.forEach = function (a, b) {
            for (var c = 0, d = this.length; c < d; c++)
              c in this && a.call(b, this[c], c, this);
          }),
        'map' in Array.prototype ||
          (Array.prototype.map = function (a, b) {
            for (
              var c = new Array(this.length), d = 0, e = this.length;
              d < e;
              d++
            )
              d in this && (c[d] = a.call(b, this[d], d, this));
            return c;
          }),
        'filter' in Array.prototype ||
          (Array.prototype.filter = function (a, b) {
            for (var c, d = [], e = 0, f = this.length; e < f; e++)
              e in this && a.call(b, (c = this[e]), e, this) && d.push(c);
            return d;
          }),
        'every' in Array.prototype ||
          (Array.prototype.every = function (a, b) {
            for (var c = 0, d = this.length; c < d; c++)
              if (c in this && !a.call(b, this[c], c, this)) return !1;
            return !0;
          }),
        'some' in Array.prototype ||
          (Array.prototype.some = function (a, b) {
            for (var c = 0, d = this.length; c < d; c++)
              if (c in this && a.call(b, this[c], c, this)) return !0;
            return !1;
          }),
        'reduce' in Array.prototype ||
          (Array.prototype.reduce = function (a, b) {
            if (null === this || void 0 === this)
              throw new TypeError(
                'Array.prototype.reduce called on null or undefined'
              );
            if ('function' != typeof a)
              throw new TypeError(a + ' is not a function');
            var c,
              d,
              e = this.length >>> 0,
              f = !1;
            for (1 < arguments.length && ((d = b), (f = !0)), c = 0; e > c; ++c)
              this.hasOwnProperty(c) &&
                (f ? (d = a(d, this[c], c, this)) : ((d = this[c]), (f = !0)));
            if (!f)
              throw new TypeError(
                'Reduce of empty array with no initial value'
              );
            return d;
          }),
        JSON &&
          'function' != typeof JSON.stringify &&
          (JSON.stringify = JSON.encode),
        JSON && 'function' != typeof JSON.parse && (JSON.parse = JSON.decode),
        (window.rhlpSetInterval = function (a, b) {
          var c = function () {
            try {
              a();
            } catch (a) {}
            setTimeout(c, b);
          };
          c();
        }),
        (window.rhlpSetRealInterval = function (a, b) {
          var c = Math.ceil(1e3 / b),
            d = function () {
              setTimeout(d, c * b);
              for (var e = 0; e < c; e++)
                setTimeout(function () {
                  a();
                }, e * b);
            };
          d();
        }));
    }),
    define('common/extensions/browserDetect', [], function () {
      var a = {
        init: function () {
          ((this.browser = this.searchString(this.dataBrowser) || '-'),
            (this.version =
              this.searchVersion(navigator.userAgent) ||
              this.searchVersion(navigator.appVersion) ||
              ''),
            (this.OS = this.searchString(this.dataOS) || '-'),
            'Opera' === this.browser &&
              (navigator.userAgent.split('Version/')[1]
                ? (this.version = navigator.userAgent.split('Version/')[1])
                : (this.version = parseFloat(
                    navigator.userAgent.split('OPR/')[1]
                  ).toFixed(1))),
            (this.isMobile = a._isMobile()));
        },
        searchString: function (a) {
          var b;
          for (b = 0; b < a.length; b++) {
            var c = a[b].string,
              d = a[b].prop;
            if (
              ((this.versionSearchString = a[b].versionSearch || a[b].identity),
              c)
            ) {
              if (-1 !== c.indexOf(a[b].subString))
                return (
                  a[b].identity + (a[b].version ? ' ' + a[b].version() : '')
                );
            } else if (d)
              return a[b].identity + (a[b].version ? ' ' + a[b].version() : '');
          }
        },
        searchVersion: function (a) {
          var b = a.indexOf(this.versionSearchString);
          if (-1 !== b)
            return parseFloat(
              a.substring(b + this.versionSearchString.length + 1)
            );
        },
        dataBrowser: [
          {
            string: navigator.userAgent,
            subString: 'Android',
            identity: 'Android',
          },
          { string: navigator.userAgent, subString: 'OPR/', identity: 'Opera' },
          { string: navigator.userAgent, subString: 'Edge', identity: 'Edge' },
          {
            string: navigator.userAgent,
            subString: 'Chrome',
            identity: 'Chrome',
          },
          {
            string: navigator.userAgent,
            subString: 'OmniWeb',
            versionSearch: 'OmniWeb/',
            identity: 'OmniWeb',
          },
          {
            string: navigator.vendor,
            subString: 'Apple',
            identity: 'Safari',
            versionSearch: 'Version',
          },
          {
            string: navigator.userAgent,
            subString: 'Safari',
            identity: 'Safari',
            versionSearch: 'Version',
          },
          { prop: window.opera, identity: 'Opera' },
          { string: navigator.vendor, subString: 'iCab', identity: 'iCab' },
          { string: navigator.vendor, subString: 'KDE', identity: 'Konqueror' },
          {
            string: navigator.userAgent,
            subString: 'Firefox',
            identity: 'Firefox',
          },
          { string: navigator.vendor, subString: 'Camino', identity: 'Camino' },
          {
            string: navigator.userAgent,
            subString: 'iPhone',
            identity: 'iPhone',
          },
          {
            string: navigator.userAgent,
            subString: 'Netscape',
            identity: 'Netscape',
          },
          {
            string: navigator.userAgent,
            subString: 'MSIE',
            identity: 'Explorer',
            versionSearch: 'MSIE',
          },
          {
            string: navigator.userAgent,
            subString: 'Gecko/',
            identity: 'Mozilla',
            versionSearch: 'rv',
          },
          {
            string: navigator.userAgent,
            subString: 'Trident',
            identity: 'Explorer',
            versionSearch: 'rv',
          },
        ],
        dataOS: [
          {
            string: navigator.userAgent,
            subString: 'Android',
            identity: 'android',
            version: function () {
              return navigator.userAgent.substr(
                navigator.userAgent.indexOf('Android ') + 8,
                3
              );
            },
          },
          {
            string: navigator.platform,
            subString: 'Win',
            identity: 'windows',
            version: function () {
              switch (
                navigator.userAgent.substr(
                  navigator.userAgent.indexOf('NT ') + 3,
                  3
                )
              ) {
                case '6.3':
                  return '8.1';
                case '6.2':
                  return '8';
                case '6.1':
                  return '7';
                case '6.0':
                  return 'Vista';
                case '5.1':
                  return 'XP';
                case '5.0':
                  return '2000';
                case '4.1':
                  return 'NT 4.1';
                default:
                  return '';
              }
            },
          },
          { string: navigator.platform, subString: 'Mac', identity: 'mac' },
          { string: navigator.userAgent, subString: 'iPhone', identity: 'iOS' },
          { string: navigator.userAgent, subString: 'iPad', identity: 'iOS' },
          { string: navigator.userAgent, subString: 'iPod', identity: 'iOS' },
          { string: navigator.platform, subString: 'Linux', identity: 'linux' },
        ],
        _isMobile: function () {
          var a = !1;
          return (
            (function (b, c) {
              (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                b
              ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                  b.substr(0, 4)
                )) &&
                (a = !0);
            })(navigator.userAgent || navigator.vendor || window.opera),
            a
          );
        },
        isMobile: !1,
      };
      return (a.init(), a);
    }),
    define('common/extensions/debug', [], function () {
      return {
        log: function (a) {},
        eventLog: function (a) {},
        sessionLog: function (a) {},
        info: function (a) {},
        clear: function () {},
        debug: function (a) {},
        time: function (a) {},
        timeEnd: function (a) {},
        profile: function () {},
        profileEnd: function () {},
        error: function (a) {},
        assert: function (a, b) {},
      };
    }),
    define(
      'common/application/eventTarget',
      ['common/extensions/debug'],
      function (a) {
        function b(a, b) {
          ((this.message = b),
            (this.name = 'Custom Event Exception'),
            (this.target = a));
        }
        var c = function (a) {
          ((this._listeners = {}), (this.targetName = a));
        };
        return (
          (c.prototype = {
            addEventListener: function (c, d) {
              var e = 'dispatcher_' + c;
              if (
                void 0 === c ||
                '' === c ||
                ('number' == typeof c && isNaN(c)) ||
                null === c
              )
                throw new b(this.targetName, 'empty type');
              if ('function' != typeof d)
                throw new b(
                  this.targetName,
                  'provided listener for event type ' + c + ' is not a function'
                );
              this._listeners[e] instanceof Array || (this._listeners[e] = []);
              for (var f in this._listeners[e])
                if (this._listeners[f] === d)
                  return void a.eventLog(
                    'Listener already exists:\ntargetName=' +
                      this.targetName +
                      ', type=' +
                      c
                  );
              this._listeners[e].push(d);
              try {
                a.eventLog(
                  'New event listener added:\ntargetName=' +
                    this.targetName +
                    ', type=' +
                    c
                );
              } catch (a) {}
            },
            addOneShotEventListener: function (a, b) {
              var c = function () {
                (this.removeEventListener(a, c), b.apply(this, arguments));
              };
              this.addEventListener(a, c);
            },
            removeAllEventListeners: function (b) {
              var c = 'dispatcher_' + b;
              if (this._listeners[c]) {
                this._listeners[c] = [];
                try {
                  a.eventLog(
                    'All listeners were removed\ntargetName=' +
                      this.targetName +
                      ', type=' +
                      b
                  );
                } catch (a) {}
              }
            },
            removeEventListener: function (b, c) {
              var d = 'dispatcher_' + b;
              if (this._listeners[d]) {
                var e = this._listeners[d].indexOf(c);
                if (-1 !== e) {
                  this._listeners[d].splice(e, 1);
                  try {
                    a.eventLog(
                      'One listener was removed\ntargetName=' +
                        this.targetName +
                        ', type=' +
                        b
                    );
                  } catch (a) {}
                }
              }
            },
            fire: function (c, d, e) {
              var f = c;
              if (
                ('string' == typeof c && (c = { type: c }),
                c._target || (c._target = this),
                !c.type)
              )
                throw new b(this.targetName, "Event missing 'type' property");
              if ('object' == typeof d)
                for (var g in d)
                  'webkitStorageInfo' != g &&
                    'webkitIndexedDB' != g &&
                    ((d.hasOwnProperty =
                      d.hasOwnProperty || Object.prototype.hasOwnProperty),
                    d.hasOwnProperty(g) && (c[g] = d[g]));
              else 'function' == typeof d && ((e = d), (d = null));
              var h = 0,
                i = 'dispatcher_' + ('string' == typeof f ? f : c.type);
              if (this._listeners[i])
                for (
                  var j = this._listeners[i].slice(0), k = j.length;
                  h < k;
                  h++
                )
                  if (j[h])
                    try {
                      j[h].call(this, c);
                    } catch (b) {
                      a.error(b);
                    }
              if ('*' !== c.type) {
                var l = '*';
                if (this._listeners[l])
                  for (var j = this._listeners[l], k = j.length; h < k; h++)
                    try {
                      j[h].call(this, c);
                    } catch (b) {
                      a.error(b);
                    }
              }
              if ('function' == typeof e)
                try {
                  e();
                } catch (b) {
                  a.error(b);
                }
              if (d && !d.isMessageTarget)
                try {
                  a.eventLog(
                    'Event was fired, ' +
                      h +
                      ' listeners was called:\ntargetName=' +
                      this.targetName +
                      ', type=' +
                      c.type
                  );
                } catch (a) {}
            },
          }),
          c
        );
      }
    ),
    define(
      'application/dispatcher',
      ['common/application/eventTarget'],
      function (a) {
        return new a('Chat');
      }
    ),
    define('jquery-private', ['jquery'], function (a) {
      return a.noConflict(!0);
    }),
    define('common/extensions/customScrollbar', ['jquery'], function (a) {
      (!(function (b, c) {
        function d(a, c, d) {
          ((a._eventHandlers = a._eventHandlers || [
            {
              element: a.scroller,
              handler: function (b) {
                a.scroll(b);
              },
              type: 'scroll',
            },
            {
              element: a.scroller,
              handler: function () {
                a.update();
              },
              type: 'keyup',
            },
            {
              element: a.bar,
              handler: function (b) {
                (b.preventDefault(), a.selection(), (a.drag.now = 1));
              },
              type: 'touchstart mousedown',
            },
            {
              element: document,
              handler: function () {
                (a.selection(1), (a.drag.now = 0));
              },
              type: 'mouseup blur touchend',
            },
            {
              element: document,
              handler: function (b) {
                2 != b.button && a._pos0(b);
              },
              type: 'touchstart mousedown',
            },
            {
              element: document,
              handler: function (b) {
                a.drag.now && a.drag(b);
              },
              type: 'mousemove touchmove',
            },
            {
              element: document,
              handler: function (b) {
                0 == b.buttons && (a.selection(1), (a.drag.now = 0));
              },
              type: 'mouseenter',
            },
            {
              element: b,
              handler: function () {
                a.update();
              },
              type: 'resize',
            },
            {
              element: a.root,
              handler: function () {
                a.update();
              },
              type: 'sizeChange',
            },
          ]),
            m(a._eventHandlers, function (a) {
              a.element && c(a.element, a.type, a.handler, d);
            }));
        }
        function e(a, b, c) {
          var d = 'data-baron-' + b;
          if ('on' == c) a.setAttribute(d, 'inited');
          else {
            if ('off' != c) return a.getAttribute(d);
            a.removeAttribute(d);
          }
        }
        function f(a) {
          if (e(a.root, a.direction))
            throw new Error('Second baron initialization');
          var b = new o.prototype.constructor(a);
          return (
            d(b, a.event, 'on'),
            e(b.root, a.direction, 'on'),
            b.update({ initMode: !0 }),
            b
          );
        }
        function g(a) {
          var b = {};
          a = a || {};
          for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
          return b;
        }
        function h(a) {
          var b = g(a);
          b.direction = b.direction || 'v';
          var c =
            a.event ||
            function (a, c, d, e) {
              b.$(a)[e || 'on'](c, d);
            };
          return (
            (b.event = function (a, b, d, e) {
              m(a, function (a) {
                c(a, b, d, e);
              });
            }),
            b
          );
        }
        function i(a) {
          if (this.events && this.events[a])
            for (var b = 0; b < this.events[a].length; b++) {
              var c = Array.prototype.slice.call(arguments, 1);
              this.events[a][b].apply(this, c);
            }
        }
        if (b) {
          var j = n,
            k = ['left', 'top', 'right', 'bottom', 'width', 'height'],
            l = {
              v: {
                x: 'Y',
                pos: k[1],
                oppos: k[3],
                crossPos: k[0],
                crossOpPos: k[2],
                size: k[5],
                crossSize: k[4],
                client: 'clientHeight',
                crossClient: 'clientWidth',
                crossScroll: 'scrollWidth',
                offset: 'offsetHeight',
                crossOffset: 'offsetWidth',
                offsetPos: 'offsetTop',
                scroll: 'scrollTop',
                scrollSize: 'scrollHeight',
              },
              h: {
                x: 'X',
                pos: k[0],
                oppos: k[2],
                crossPos: k[1],
                crossOpPos: k[3],
                size: k[4],
                crossSize: k[5],
                client: 'clientWidth',
                crossClient: 'clientHeight',
                crossScroll: 'scrollHeight',
                offset: 'offsetWidth',
                crossOffset: 'offsetHeight',
                offsetPos: 'offsetLeft',
                scroll: 'scrollLeft',
                scrollSize: 'scrollWidth',
              },
            },
            m = function (a, d) {
              var e = 0;
              for ((a.length !== c && a !== b) || (a = [a]); a[e]; )
                (d.call(this, a[e], e), e++);
            },
            n = function (a) {
              var c, d, e;
              return (
                (a = a || {}),
                (e = a.$ || b.jQuery),
                (c = this instanceof e),
                c ? (a.root = d = this) : (d = e(a.root || a.scroller)),
                new n.fn.constructor(d, a, e)
              );
            };
          n.fn = {
            constructor: function (a, b, c) {
              var d = h(b);
              ((d.$ = c),
                m.call(this, a, function (a, b) {
                  var c = g(d);
                  (d.root && d.scroller
                    ? ((c.scroller = d.$(d.scroller, a)),
                      c.scroller.length || (c.scroller = a))
                    : (c.scroller = a),
                    (c.root = a),
                    (this[b] = f(c)),
                    (this.length = b + 1));
                }),
                (this.params = d));
            },
            dispose: function () {
              var a = this.params;
              (m(this, function (b) {
                b.dispose(a);
              }),
                (this.params = null));
            },
            update: function () {
              for (var a = 0; this[a]; )
                (this[a].update.apply(this[a], arguments), a++);
            },
            baron: function (a) {
              return (
                (a.root = []),
                (a.scroller = this.params.scroller),
                m.call(this, this, function (b) {
                  a.root.push(b.root);
                }),
                (a.direction = 'v' == this.params.direction ? 'h' : 'v'),
                (a._chain = !0),
                n(a)
              );
            },
          };
          var o = {};
          ((o.prototype = {
            constructor: function (a) {
              function b(a, b) {
                return k(a, b)[0];
              }
              function d(a) {
                var b = this.barMinSize || 20;
                (a > 0 && a < b && (a = b),
                  this.bar &&
                    k(this.bar).css(this.origin.size, parseInt(a, 10) + 'px'));
              }
              function e(a) {
                this.bar && k(this.bar).css(this.origin.pos, +a + 'px');
              }
              function f() {
                return (
                  o[this.origin.client] -
                  this.barTopLimit -
                  this.bar[this.origin.offset]
                );
              }
              function g(a) {
                return a * f.call(this) + this.barTopLimit;
              }
              function h(a) {
                return (a - this.barTopLimit) / f.call(this);
              }
              function j() {
                return !1;
              }
              var k, m, n, o, p, q, r, s, t, u, v;
              return (
                (u = t = new Date().getTime()),
                (k = this.$ = a.$),
                (this.event = a.event),
                (this.events = {}),
                (this.root = a.root),
                (this.scroller = b(a.scroller)),
                (this.bar = b(a.bar, this.root)),
                (o = this.track = b(a.track, this.root)),
                !this.track && this.bar && (o = this.bar.parentNode),
                (this.clipper = this.scroller.parentNode),
                (this.direction = a.direction),
                (this.origin = l[this.direction]),
                (this.barOnCls = a.barOnCls),
                (this.scrollingCls = a.scrollingCls),
                (this.barTopLimit = 0),
                (s = 1e3 * a.pause || 0),
                (this.cursor = function (a) {
                  return (
                    a['client' + this.origin.x] ||
                    (((a.originalEvent || a).touches || {})[0] || {})[
                      'page' + this.origin.x
                    ]
                  );
                }),
                (this.pos = function (a) {
                  var b = 'page' + this.origin.x + 'Offset',
                    d = this.scroller[b] ? b : this.origin.scroll;
                  return (a !== c && (this.scroller[d] = a), this.scroller[d]);
                }),
                (this.rpos = function (a) {
                  var b =
                    this.scroller[this.origin.scrollSize] -
                    this.scroller[this.origin.client];
                  return (a ? this.pos(a * b) : this.pos()) / (b || 1);
                }),
                (this.barOn = function (a) {
                  this.barOnCls &&
                    (a ||
                    this.scroller[this.origin.client] >=
                      this.scroller[this.origin.scrollSize]
                      ? k(this.root).removeClass(this.barOnCls)
                      : k(this.root).addClass(this.barOnCls));
                }),
                (this._pos0 = function (a) {
                  n = this.cursor(a) - m;
                }),
                (this.drag = function (a) {
                  this.scroller[this.origin.scroll] =
                    h.call(this, this.cursor(a) - n) *
                    (this.scroller[this.origin.scrollSize] -
                      this.scroller[this.origin.client]);
                }),
                (this.selection = function (a) {
                  this.event(
                    document,
                    'selectpos selectstart',
                    j,
                    a ? 'off' : 'on'
                  );
                }),
                (this.resize = function () {
                  function b() {
                    var b, d;
                    (c.barOn(),
                      (d = c.scroller[c.origin.crossClient]),
                      (b = c.scroller[c.origin.crossOffset] - d),
                      a.freeze &&
                        !c.clipper.style[c.origin.crossSize] &&
                        k(c.clipper).css(
                          c.origin.crossSize,
                          c.clipper[c.origin.crossClient] - b + 'px'
                        ),
                      k(c.scroller).css(
                        c.origin.crossSize,
                        c.clipper[c.origin.crossClient] + b + 'px'
                      ),
                      Array.prototype.unshift.call(arguments, 'resize'),
                      i.apply(c, arguments),
                      (u = new Date().getTime()));
                  }
                  var c = this,
                    d = 0;
                  (new Date().getTime() - u < s && (clearTimeout(p), (d = s)),
                    d ? (p = setTimeout(b, d)) : b());
                }),
                (this.updatePositions = function () {
                  var a,
                    b = this;
                  (b.bar &&
                    ((a =
                      ((o[b.origin.client] - b.barTopLimit) *
                        b.scroller[b.origin.client]) /
                      b.scroller[b.origin.scrollSize]),
                    parseInt(v, 10) != parseInt(a, 10) &&
                      (d.call(b, a), (v = a)),
                    (m = g.call(b, b.rpos())),
                    e.call(b, m)),
                    Array.prototype.unshift.call(arguments, 'scroll'),
                    i.apply(b, arguments),
                    (t = new Date().getTime()));
                }),
                (this.scroll = function () {
                  var a = 0,
                    b = this;
                  (new Date().getTime() - t < s && (clearTimeout(q), (a = s)),
                    new Date().getTime() - t < s && (clearTimeout(q), (a = s)),
                    a
                      ? (q = setTimeout(function () {
                          b.updatePositions();
                        }, a))
                      : b.updatePositions(),
                    b.scrollingCls &&
                      (r || this.$(this.scroller).addClass(this.scrollingCls),
                      clearTimeout(r),
                      (r = setTimeout(function () {
                        (b.$(b.scroller).removeClass(b.scrollingCls), (r = c));
                      }, 300))));
                }),
                this
              );
            },
            update: function (a) {
              return (
                i.call(this, 'upd', a),
                this.resize(1),
                this.updatePositions(),
                this
              );
            },
            dispose: function (b) {
              (d(this, this.event, 'off'),
                e(this.root, b.direction, 'off'),
                a(this.scroller).css(this.origin.crossSize, ''),
                this.barOn(!0),
                i.call(this, 'dispose'));
            },
            on: function (a, b, c) {
              for (var d = a.split(' '), e = 0; e < d.length; e++)
                'init' == d[e]
                  ? b.call(this, c)
                  : ((this.events[d[e]] = this.events[d[e]] || []),
                    this.events[d[e]].push(function (a) {
                      b.call(this, a || c);
                    }));
            },
          }),
            (n.fn.constructor.prototype = n.fn),
            (o.prototype.constructor.prototype = o.prototype),
            (n.noConflict = function () {
              return ((b.baron = j), n);
            }),
            (n.version = '0.7.7'),
            a && a.fn && (a.fn.baron = n),
            (b.baron = n),
            b.module && module.exports && (module.exports = n.noConflict()));
        }
      })(window),
        (function (a, b) {
          var c = function (a) {
            function c(a, c, d) {
              var e = 1 == d ? 'pos' : 'oppos';
              (g < (h.minView || 0) && (c = b),
                this.$(f[a])
                  .css(this.origin.pos, '')
                  .css(this.origin.oppos, '')
                  .removeClass(h.outside),
                c !== b &&
                  ((c += 'px'),
                  this.$(f[a]).css(this.origin[e], c).addClass(h.outside)));
            }
            function d(a) {
              try {
                ((i = document.createEvent('WheelEvent')),
                  i.initWebKitWheelEvent(
                    a.originalEvent.wheelDeltaX,
                    a.originalEvent.wheelDeltaY
                  ),
                  m.dispatchEvent(i),
                  a.preventDefault());
              } catch (a) {}
            }
            function e(a) {
              var b;
              for (var c in a) h[c] = a[c];
              if ((f = this.$(h.elements, this.scroller))) {
                g = this.scroller[this.origin.client];
                for (var e = 0; e < f.length; e++)
                  ((b = {}),
                    (b[this.origin.size] = f[e][this.origin.offset]),
                    f[e].parentNode !== this.scroller &&
                      this.$(f[e].parentNode).css(b),
                    (b = {}),
                    (b[this.origin.crossSize] =
                      f[e].parentNode[this.origin.crossClient]),
                    this.$(f[e]).css(b),
                    (g -= f[e][this.origin.offset]),
                    (l[e] = f[e].parentNode[this.origin.offsetPos]),
                    (j[e] = j[e - 1] || 0),
                    (k[e] = k[e - 1] || Math.min(l[e], 0)),
                    f[e - 1] &&
                      ((j[e] += f[e - 1][this.origin.offset]),
                      (k[e] += f[e - 1][this.origin.offset])),
                    (0 == e && 0 == l[e]) ||
                      (this.event(f[e], 'mousewheel', d, 'off'),
                      this.event(f[e], 'mousewheel', d)));
                (h.limiter &&
                  f[0] &&
                  (this.track && this.track != this.scroller
                    ? ((b = {}),
                      (b[this.origin.pos] =
                        f[0].parentNode[this.origin.offset]),
                      this.$(this.track).css(b))
                    : (this.barTopLimit = f[0].parentNode[this.origin.offset]),
                  this.scroll()),
                  !1 === h.limiter && (this.barTopLimit = 0));
              }
              var i = {
                element: f,
                handler: function () {
                  for (
                    var a, b = o(this)[0].parentNode, c = b.offsetTop, d = 0;
                    d < f.length;
                    d++
                  )
                    f[d] === this && (a = d);
                  var e = c - j[a];
                  h.scroll
                    ? h.scroll({ x1: p.scroller.scrollTop, x2: e })
                    : (p.scroller.scrollTop = e);
                },
                type: 'click',
              };
              h.clickable &&
                (this._eventHandlers.push(i),
                n(i.element, i.type, i.handler, 'on'));
            }
            var f,
              g,
              h = {
                outside: '',
                inside: '',
                before: '',
                after: '',
                past: '',
                future: '',
                radius: 0,
                minView: 0,
              },
              j = [],
              k = [],
              l = [],
              m = this.scroller,
              n = this.event,
              o = this.$,
              p = this;
            this.on('init', e, a);
            var q = [],
              r = [];
            (this.on('init scroll', function () {
              var a, d, e;
              if (f) {
                for (var i, m = 0; m < f.length; m++)
                  ((a = 0),
                    l[m] - this.pos() < k[m] + h.radius
                      ? ((a = 1), (d = j[m]))
                      : l[m] - this.pos() > k[m] + g - h.radius
                        ? ((a = 2),
                          (d =
                            this.scroller[this.origin.client] -
                            f[m][this.origin.offset] -
                            j[m] -
                            g))
                        : ((a = 3), (d = b)),
                    (e = !1),
                    (l[m] - this.pos() < k[m] ||
                      l[m] - this.pos() > k[m] + g) &&
                      (e = !0),
                    (a == q[m] && e == r[m]) ||
                      (c.call(this, m, d, a),
                      (q[m] = a),
                      (r[m] = e),
                      (i = !0)));
                if (i)
                  for (m = 0; m < f.length; m++)
                    (1 == q[m] &&
                      h.past &&
                      this.$(f[m]).addClass(h.past).removeClass(h.future),
                      2 == q[m] &&
                        h.future &&
                        this.$(f[m]).addClass(h.future).removeClass(h.past),
                      3 == q[m]
                        ? ((h.future || h.past) &&
                            this.$(f[m])
                              .removeClass(h.past)
                              .removeClass(h.future),
                          h.inside && this.$(f[m]).addClass(h.inside))
                        : h.inside && this.$(f[m]).removeClass(h.inside),
                      q[m] != q[m + 1] && 1 == q[m] && h.before
                        ? this.$(f[m]).addClass(h.before).removeClass(h.after)
                        : q[m] != q[m - 1] && 2 == q[m] && h.after
                          ? this.$(f[m]).addClass(h.after).removeClass(h.before)
                          : this.$(f[m])
                              .removeClass(h.before)
                              .removeClass(h.after),
                      h.grad &&
                        (r[m]
                          ? this.$(f[m]).addClass(h.grad)
                          : this.$(f[m]).removeClass(h.grad)));
              }
            }),
              this.on('resize upd', function (a) {
                e.call(this, a && a.fix);
              }));
          };
          baron.fn.fix = function (a) {
            for (var b = 0; this[b]; ) (c.call(this[b], a), b++);
            return this;
          };
        })(window),
        (function (a, b) {
          var c = function (a) {
            var b,
              c,
              d,
              e,
              f,
              g = this;
            ((e = a.screen || 0.9),
              a.forward &&
                ((b = this.$(a.forward, this.clipper)),
                (f = {
                  element: b,
                  handler: function () {
                    var b = g.pos() - a.delta || 30;
                    g.pos(b);
                  },
                  type: 'click',
                }),
                this._eventHandlers.push(f),
                this.event(f.element, f.type, f.handler, 'on')),
              a.backward &&
                ((c = this.$(a.backward, this.clipper)),
                (f = {
                  element: c,
                  handler: function () {
                    var b = g.pos() + a.delta || 30;
                    g.pos(b);
                  },
                  type: 'click',
                }),
                this._eventHandlers.push(f),
                this.event(f.element, f.type, f.handler, 'on')),
              a.track &&
                (d =
                  !0 === a.track
                    ? this.track
                    : this.$(a.track, this.clipper)[0]) &&
                ((f = {
                  element: d,
                  handler: function (a) {
                    var b = a['offset' + g.origin.x],
                      c = g.bar[g.origin.offsetPos],
                      d = 0;
                    b < c
                      ? (d = -1)
                      : b > c + g.bar[g.origin.offset] && (d = 1);
                    var f = g.pos() + d * e * g.scroller[g.origin.client];
                    g.pos(f);
                  },
                  type: 'mousedown',
                }),
                this._eventHandlers.push(f),
                this.event(f.element, f.type, f.handler, 'on')));
          };
          baron.fn.controls = function (a) {
            for (var b = 0; this[b]; ) (c.call(this[b], a), b++);
            return this;
          };
        })(window),
        (function (a, b) {
          var c = function (a) {
            function b() {
              return r.scroller[r.origin.scroll] + r.scroller[r.origin.offset];
            }
            function c() {
              return r.scroller[r.origin.scrollSize];
            }
            function d() {
              return r.scroller[r.origin.client];
            }
            function e(a, b) {
              var c = 5e-4 * a;
              return Math.floor(b - c * (a + 550));
            }
            function f(a) {
              ((k = a),
                a ? (g(), (h = setInterval(g, 200))) : clearInterval(h));
            }
            function g() {
              var g,
                h,
                k = {},
                w = b(),
                x = c(),
                y = 1 == s;
              if (
                ((h = 0),
                s > 0 && (h = 40),
                (g = e(u, h)),
                w >= x - u && s > -1 ? y && (u += g) : (u = 0),
                u < 0 && (u = 0),
                (k[m] = u + 'px'),
                d() <= c())
              ) {
                r.$(l).css(k);
                for (var z = 0; z < p.length; z++)
                  r.$(p[z].self).css(
                    p[z].property,
                    Math.min((u / n) * 100, 100) + '%'
                  );
              }
              (q && u && r.$(r.root).addClass(q),
                0 == u && a.onCollapse && a.onCollapse(),
                (s = 0),
                (i = setTimeout(function () {
                  s = -1;
                }, v)),
                o && u > n && !j && (o(), (j = !0)),
                0 == u ? t++ : (t = 0),
                t > 1 && (f(!1), (j = !1), q && r.$(r.root).removeClass(q)));
            }
            var h,
              i,
              j,
              k,
              l = this.$(a.block),
              m = a.size || this.origin.size,
              n = a.limit || 80,
              o = a.onExpand,
              p = a.elements || [],
              q = a.inProgress || '',
              r = this,
              s = 0,
              t = 0,
              u = 0,
              v = a.waiting || 500;
            (this.on('init', function () {
              f(!0);
            }),
              this.on('dispose', function () {
                f(!1);
              }),
              this.event(
                this.scroller,
                'mousewheel DOMMouseScroll',
                function (a) {
                  (a.wheelDelta < 0 ||
                    (a.originalEvent && a.originalEvent.wheelDelta < 0) ||
                    a.detail > 0) &&
                    ((s = 1), clearTimeout(i), !k && b() >= c() && f(!0));
                }
              ));
          };
          baron.fn.pull = function (a) {
            for (var b = 0; this[b]; ) (c.call(this[b], a), b++);
            return this;
          };
        })(window),
        (function (a, b) {
          var c =
              a.MutationObserver ||
              a.WebKitMutationObserver ||
              a.MozMutationObserver ||
              null,
            d = function () {
              var a = this;
              ((this._observer = new MutationObserver(function () {
                a.update();
              })),
                this.on('init', function () {
                  a._observer.observe(a.root, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                  });
                }),
                this.on('dispose', function () {
                  (a._observer.dissconect(), delete a._observer);
                }));
            };
          baron.fn.autoUpdate = function (a) {
            if (!c) return this;
            for (var b = 0; this[b]; ) (d.call(this[b], a), b++);
            return this;
          };
        })(window));
    }),
    define(
      'common/extensions/jquery.disableSelection',
      ['jquery', 'common/extensions/browserDetect'],
      function (a, b) {
        'Firefox' === b.browser
          ? ((a.fn.disableTextSelect = function () {
              return this.each(function () {
                a(this).css('MozUserSelect', 'none');
              });
            }),
            (a.fn.enableTextSelect = function () {
              return this.each(function () {
                a(this).css('MozUserSelect', '');
              });
            }))
          : navigator &&
              navigator.userAgent &&
              navigator.userAgent.indexOf('WebKit') > -1
            ? ((a.fn.disableTextSelect = function () {
                return this.each(function () {
                  a(this).css('-webkit-user-select', 'none');
                });
              }),
              (a.fn.enableTextSelect = function () {
                return this.each(function () {
                  a(this).css('-webkit-user-select', '');
                });
              }))
            : 'Explorer' === b.browser
              ? ((a.fn.disableTextSelect = function () {
                  return this.each(function () {
                    a(this).bind('selectstart.disableTextSelect', function () {
                      return !1;
                    });
                  });
                }),
                (a.fn.enableTextSelect = function () {
                  return this.each(function () {
                    a(this).unbind('selectstart.disableTextSelect');
                  });
                }))
              : ((a.fn.disableTextSelect = function () {
                  return this.each(function () {
                    a(this).bind('mousedown.disableTextSelect', function () {
                      return !1;
                    });
                  });
                }),
                (a.fn.enableTextSelect = function () {
                  return this.each(function () {
                    a(this).unbind('mousedown.disableTextSelect');
                  });
                }));
      }
    ),
    define('common/extensions/jquery.easing', ['jquery'], function (a) {
      ((a.easing.rh_expIn = function (a, b, c, d) {
        return 0 == b ? c : c + d * Math.pow(2, 10 * (a - 1));
      }),
        (a.easing.rh_expOut = function (a, b, c, d) {
          return 1 == a ? c + d : c + d * (1 - Math.pow(2, -10 * a));
        }),
        (a.easing.rh_in = function (a, b, c, d) {
          return c + d * a * a * (3 * a - 2);
        }),
        (a.easing.rh_out = function (a, b, c, d) {
          return c + d * ((a - 1) * (a - 1) * (3 * (a - 1) + 2) + 1);
        }),
        (a.easing.rh_bounce = function (a, b, c, d) {
          var e = 1 / 2.75;
          return a < e
            ? c + d * (7.5625 * a * a)
            : a < 2 * e
              ? c + d * (7.5625 * (a - 1.5 * e) * (a - 1.5 * e) + 0.75)
              : a < 2.5 * e
                ? c + d * (7.5625 * (a - 2.25 * e) * (a - 2.25 * e) + 0.9375)
                : c +
                  d * (7.5625 * (a - 2.625 * e) * (a - 2.625 * e) + 0.984375);
        }));
    }),
    define('common/extensions/jquery.fix', ['jquery'], function (a) {
      function b(a) {
        return 'object' == typeof Node
          ? a instanceof Node
          : a &&
              'object' == typeof a &&
              'number' == typeof a.nodeType &&
              'string' == typeof a.nodeName;
      }
      ((a.fn.oldIs = a.fn.oldIs || a.fn.is),
        (a.fn.is = function (a) {
          return ':visible' == a
            ? 'none' != this.css('display') && this.oldIs(':visible')
            : this.oldIs(a);
        }),
        (a.fn.oldFind = a.fn.oldFind || a.fn.find),
        (a.fn.find = function (a) {
          var c = this.oldFind(a),
            d = c[0];
          return (d && d[0] && !b(d) && (c = d), c);
        }),
        (a.fn.oldHeight = a.fn.oldHeight || a.fn.height),
        (a.fn.height = function () {
          return this[0] === window
            ? window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight
            : this.oldHeight();
        }),
        (a.acceptData = function (b) {
          if ('string' == typeof b.nodeName) {
            var c = a.noData[b.nodeName.toLowerCase()];
            if (c) return !(!0 === c || b.getAttribute('classid') !== c);
          }
          return !0;
        }));
    }),
    define('common/extensions/jquery.getpath', ['jquery'], function (a) {
      function b(a) {
        for (var b = [], c = [], d = a, e = Number(new Date()); d.length; ) {
          var f = d[0];
          if (void 0 !== f.path && e - f.pathTime < 1e3) {
            c.push(f.path);
            break;
          }
          var g = f.localName || f.tagName || f.nodeName;
          if (!g || '#document' == g) break;
          g = g.toLowerCase();
          var h = d.parent(),
            i = h.children(g);
          (i.length > 1 && (g += ':eq(' + i.index(d) + ')'),
            b.push(d[0]),
            c.push(g),
            (d = h));
        }
        var j = b.length,
          k = c.pop();
        c.length === b.length && c.length > 0 && (k = k + '>' + c.pop());
        for (var l = j - 1; l >= 0; l--)
          ((b[l].path = k),
            (b[l].pathTime = e),
            l > 0 && (k += '>' + c[l - 1]));
        return k;
      }
      a.fn.getPath = function () {
        if (0 == this.length) throw 'Requires one element.';
        return b(this);
      };
    }),
    define('common/extensions/jquery.getvisible', ['jquery'], function (a) {
      return (
        (a.fn.getVisible = function () {
          if (this.length <= 1) return this;
          var b = function (b) {
              if (!a(b).is(':visible'))
                return { top: 0, left: 0, width: 0, height: 0 };
              var c = {
                left: parseInt(a(b).css('padding-left')),
                right: parseInt(a(b).css('padding-right')),
                top: parseInt(a(b).css('padding-top')),
                bottom: parseInt(a(b).css('padding-bottom')),
              };
              for (var d in c) c[d] != c[d] && (c[d] = 0);
              var e = {
                left: parseInt(a(b).css('border-left-width')),
                right: parseInt(a(b).css('border-right-width')),
                top: parseInt(a(b).css('border-top-width')),
                bottom: parseInt(a(b).css('border-bottom-width')),
              };
              for (d in e) e[d] != e[d] && (e[d] = 0);
              var f = a(b).offset();
              return (
                (f.width = a(b).width() + c.left + c.right + e.left + e.right),
                (f.height =
                  a(b).height() + c.top + c.bottom + e.top + e.bottom),
                f
              );
            },
            c = function (a, b) {
              return (
                a.left + a.width > b.left &&
                b.left + b.width > a.left &&
                a.top + a.height > b.top &&
                b.top + b.height > a.top
              );
            },
            d = {
              left: a(window).scrollLeft(),
              top: a(window).scrollTop(),
              width: a(window).width(),
              height: a(window).height(),
            },
            e = null;
          return (
            a.each(this, function (a, f) {
              if (c(d, b(f))) return ((e = f), !1);
            }),
            a(e)
          );
        }),
        a
      );
    }),
    define('common/extensions/jquery.maskedinput', ['jquery'], function (a) {
      return (
        (function (a) {
          function b() {
            var a = document.createElement('input'),
              b = 'onpaste';
            return (
              a.setAttribute(b, ''),
              'function' == typeof a[b] ? 'paste' : 'input'
            );
          }
          var c,
            d = b() + '.mask',
            e = navigator.userAgent,
            f = /iphone/i.test(e),
            g = /android/i.test(e);
          ((a.mask = {
            definitions: { 9: '[0-9]', a: '[A-Za-z]', '*': '[A-Za-z0-9]' },
            dataName: 'rawMaskFn',
            placeholder: '_',
          }),
            a.fn.extend({
              caret: function (a, b) {
                var c;
                if (0 !== this.length && !this.is(':hidden'))
                  return 'number' == typeof a
                    ? ((b = 'number' == typeof b ? b : a),
                      this.each(function () {
                        this.setSelectionRange
                          ? this.setSelectionRange(a, b)
                          : this.createTextRange &&
                            ((c = this.createTextRange()),
                            c.collapse(!0),
                            c.moveEnd('character', b),
                            c.moveStart('character', a),
                            c.select());
                      }))
                    : (this[0].setSelectionRange
                        ? ((a = this[0].selectionStart),
                          (b = this[0].selectionEnd))
                        : document.selection &&
                          document.selection.createRange &&
                          ((c = document.selection.createRange()),
                          (a = 0 - c.duplicate().moveStart('character', -1e5)),
                          (b = a + c.text.length)),
                      { begin: a, end: b });
              },
              unmask: function () {
                return this.trigger('unmask');
              },
              mask: function (b, e) {
                var h, i, j, k, l, m;
                return !b && this.length > 0
                  ? ((h = a(this[0])), h.data(a.mask.dataName)())
                  : ((e = a.extend(
                      { placeholder: a.mask.placeholder, completed: null },
                      e
                    )),
                    (i = a.mask.definitions),
                    (j = []),
                    (k = m = b.length),
                    (l = null),
                    a.each(b.split(''), function (a, b) {
                      '?' == b
                        ? (m--, (k = a))
                        : i[b]
                          ? (j.push(new RegExp(i[b])),
                            null === l && (l = j.length - 1))
                          : j.push(null);
                    }),
                    this.trigger('unmask').each(function () {
                      function h(a) {
                        for (; ++a < m && !j[a]; );
                        return a;
                      }
                      function n(a) {
                        for (; --a >= 0 && !j[a]; );
                        return a;
                      }
                      function o(a, b) {
                        var c, d;
                        if (!(a < 0)) {
                          for (c = a, d = h(b); c < m; c++)
                            if (j[c]) {
                              if (!(d < m && j[c].test(w[d]))) break;
                              ((w[c] = w[d]),
                                (w[d] = e.placeholder),
                                (d = h(d)));
                            }
                          (t(), v.caret(Math.max(l, a)));
                        }
                      }
                      function p(a) {
                        var b, c, d, f;
                        for (b = a, c = e.placeholder; b < m; b++)
                          if (j[b]) {
                            if (
                              ((d = h(b)),
                              (f = w[b]),
                              (w[b] = c),
                              !(d < m && j[d].test(f)))
                            )
                              break;
                            c = f;
                          }
                      }
                      function q(a) {
                        var b,
                          c,
                          d,
                          e = a.which;
                        8 === e || 46 === e || (f && 127 === e)
                          ? ((b = v.caret()),
                            (c = b.begin),
                            (d = b.end),
                            d - c == 0 &&
                              ((c = 46 !== e ? n(c) : (d = h(c - 1))),
                              (d = 46 === e ? h(d) : d)),
                            s(c, d),
                            o(c, d - 1),
                            a.preventDefault())
                          : 27 == e &&
                            (v.val(x), v.caret(0, u()), a.preventDefault());
                      }
                      function r(b) {
                        var c,
                          d,
                          f,
                          i = b.which,
                          k = v.caret();
                        b.ctrlKey ||
                          b.altKey ||
                          b.metaKey ||
                          i < 32 ||
                          (i &&
                            (k.end - k.begin != 0 &&
                              (s(k.begin, k.end), o(k.begin, k.end - 1)),
                            (c = h(k.begin - 1)),
                            c < m &&
                              ((d = String.fromCharCode(i)),
                              j[c].test(d) &&
                                (p(c),
                                (w[c] = d),
                                t(),
                                (f = h(c)),
                                g
                                  ? setTimeout(a.proxy(a.fn.caret, v, f), 0)
                                  : v.caret(f),
                                e.completed && f >= m && e.completed.call(v))),
                            b.preventDefault()));
                      }
                      function s(a, b) {
                        var c;
                        for (c = a; c < b && c < m; c++)
                          j[c] && (w[c] = e.placeholder);
                      }
                      function t() {
                        v.val(w.join(''));
                      }
                      function u(a) {
                        var b,
                          c,
                          d = v.val(),
                          f = -1;
                        for (b = 0, pos = 0; b < m; b++)
                          if (j[b]) {
                            for (w[b] = e.placeholder; pos++ < d.length; )
                              if (((c = d.charAt(pos - 1)), j[b].test(c))) {
                                ((w[b] = c), (f = b));
                                break;
                              }
                            if (pos > d.length) break;
                          } else
                            w[b] === d.charAt(pos) &&
                              b !== k &&
                              (pos++, (f = b));
                        return (
                          a
                            ? t()
                            : f + 1 < k
                              ? (v.val(''), s(0, m))
                              : (t(), v.val(v.val().substring(0, f + 1))),
                          k ? b : l
                        );
                      }
                      var v = a(this),
                        w = a.map(b.split(''), function (a, b) {
                          if ('?' != a) return i[a] ? e.placeholder : a;
                        }),
                        x = v.val();
                      (v.data(a.mask.dataName, function () {
                        return a
                          .map(w, function (a, b) {
                            return j[b] && a != e.placeholder ? a : null;
                          })
                          .join('');
                      }),
                        v.attr('readonly') ||
                          v
                            .one('unmask', function () {
                              v.unbind('.mask').removeData(a.mask.dataName);
                            })
                            .bind('focus.mask', function () {
                              (v.removeClass('placeholder'), clearTimeout(c));
                              var a;
                              ((x = v.val()),
                                (a = u()),
                                (c = setTimeout(function () {
                                  (t(),
                                    a == b.length ? v.caret(0, a) : v.caret(a));
                                }, 10)));
                            })
                            .bind('blur.mask', function () {
                              (u(),
                                v.val() != x
                                  ? v.change()
                                  : v.addClass('placeholder'));
                            })
                            .bind('keydown.mask', q)
                            .bind('keypress.mask', r)
                            .bind(d, function () {
                              setTimeout(function () {
                                var a = u(!0);
                                (v.caret(a),
                                  e.completed &&
                                    a == v.val().length &&
                                    e.completed.call(v));
                              }, 0);
                            }),
                        u());
                    }));
              },
            }));
        })(a),
        a
      );
    }),
    define('common/extensions/jquery.minbox', ['jquery'], function (a) {
      var b = function (a) {
          return {
            'font-family': a.css('font-family'),
            'font-size': a.css('font-size'),
            'font-weight': a.css('font-weight'),
            'line-height': a.css('line-height'),
          };
        },
        c = function (c, d, e) {
          e = e || 4048;
          var f = 0,
            g = b(c),
            h = a('<div/>').css(g).html(c.html());
          (h.css('float', 'left'),
            h.css('height', d + 'px'),
            h.appendTo('body'),
            (f = h.width()),
            h.css('height', 'auto'),
            h.css('float', 'none'),
            h.css('width', e / 2));
          var i = 1,
            j = e,
            k = j;
          for (j /= 2; Math.abs(k - j) > i; )
            (h.height() <= d ? ((k = j), (j /= 2)) : (j = (k + j) / 2),
              h.css('width', j));
          var l;
          return ((l = h.height() > d ? k : j), h.remove(), l > 1 ? l : f);
        };
      a.fn.minBox = function (a) {
        return c(this, a);
      };
    }),
    define('common/extensions/jquery.placeholder', ['jquery'], function (a) {
      !(function (a, b, c) {
        function d(a) {
          var b = {},
            d = /^jQuery\d+$/;
          return (
            c.each(a.attributes, function (a, c) {
              c.specified && !d.test(c.name) && (b[c.name] = c.value);
            }),
            b
          );
        }
        function e(a, b) {
          var d = this,
            e = c(d);
          if (e.hasClass('placeholder'))
            if (e.data('placeholder-password')) {
              if (
                ((e = e
                  .hide()
                  .next()
                  .show()
                  .attr('id', e.removeAttr('id').data('placeholder-id'))),
                !0 === a)
              )
                return (e[0].value = b);
              e.focus();
            } else
              ((d.value = ''),
                e.removeClass('placeholder'),
                d == g() && d.select());
        }
        function f() {
          var a,
            b = this,
            f = c(b),
            g = this.id;
          if ('' == b.value) {
            if ('password' == b.type) {
              if (!f.data('placeholder-textinput')) {
                try {
                  a = f.clone().attr({ type: 'text' });
                } catch (b) {
                  a = c('<input>').attr(c.extend(d(this), { type: 'text' }));
                }
                (a
                  .removeAttr('name')
                  .data({ 'placeholder-password': f, 'placeholder-id': g })
                  .bind('focus.placeholder', e),
                  f
                    .data({ 'placeholder-textinput': a, 'placeholder-id': g })
                    .before(a));
              }
              f = f.removeAttr('id').hide().prev().attr('id', g).show();
            }
            (f.addClass('placeholder'), (f[0].value = f.attr('placeholder')));
          } else f.removeClass('placeholder');
        }
        function g() {
          try {
            return b.activeElement;
          } catch (a) {}
        }
        var h,
          i,
          j = 'placeholder' in b.createElement('input'),
          k = 'placeholder' in b.createElement('textarea'),
          l = c.fn,
          m = c.valHooks,
          n = c.propHooks;
        j && k
          ? ((i = l.placeholder =
              function () {
                return this;
              }),
            (i.input = i.textarea = !0))
          : ((i = l.placeholder =
              function () {
                var a = this;
                return (
                  a
                    .filter((j ? 'textarea' : ':input') + '[placeholder]')
                    .not('.placeholder')
                    .bind({ 'focus.placeholder': e, 'blur.placeholder': f })
                    .data('placeholder-enabled', !0)
                    .trigger('blur.placeholder'),
                  a
                );
              }),
            (i.input = j),
            (i.textarea = k),
            (h = {
              get: function (a) {
                var b = c(a),
                  d = b.data('placeholder-password');
                return d
                  ? d[0].value
                  : b.data('placeholder-enabled') && b.hasClass('placeholder')
                    ? ''
                    : a.value;
              },
              set: function (a, b) {
                var d = c(a),
                  h = d.data('placeholder-password');
                return h
                  ? (h[0].value = b)
                  : d.data('placeholder-enabled')
                    ? ('' == b
                        ? ((a.value = b), a != g() && f.call(a))
                        : d.hasClass('placeholder')
                          ? e.call(a, !0, b) || (a.value = b)
                          : (a.value = b),
                      d)
                    : (a.value = b);
              },
            }),
            j || ((m.input = h), (n.value = h)),
            k || ((m.textarea = h), (n.value = h)),
            c(function () {
              c(b).delegate('form', 'submit.placeholder', function () {
                var a = c('.placeholder', this).each(e);
                setTimeout(function () {
                  a.each(f);
                }, 10);
              });
            }),
            c(a).bind('beforeunload.placeholder', function () {
              c('.placeholder').each(function () {
                this.value = '';
              });
            }));
      })(window, document, a);
    }),
    define('common/extensions/jquery.postMessage', ['jquery'], function (a) {
      window.postMessage &&
        ((a.postMessage = function (a, b) {
          a.postMessage(b, '*');
        }),
        (a.receiveMessage = function (a) {
          window.addEventListener
            ? window.addEventListener('message', a, !1)
            : window.attachEvent && window.attachEvent('onmessage', a);
        }));
    }),
    define('common/extensions/jquery.pulse', ['jquery'], function (a) {
      a.fn.pulse = function (b) {
        var c = a(this).css('opacity');
        a(this)
          .animate({ opacity: 0 }, { duration: 100, queue: !0 })
          .animate({ opacity: c }, { duration: 120, queue: !0 })
          .animate({ opacity: 0 }, { duration: 150, queue: !0 })
          .animate({ opacity: c }, { duration: 170, queue: !0 })
          .animate({ opacity: 0 }, { duration: 200, queue: !0 })
          .animate({ opacity: c }, { duration: 300, queue: !0 })
          .animate(
            { opacity: 0 },
            {
              duration: 600,
              queue: !0,
              complete: function () {
                (a(this).hide().css('opacity', c), b());
              },
            }
          );
      };
    }),
    define(
      'common/extensions/jquery.plugins',
      [
        'jquery',
        'common/extensions/customScrollbar',
        'common/extensions/jquery.disableSelection',
        'common/extensions/jquery.easing',
        'common/extensions/jquery.fix',
        'common/extensions/jquery.getpath',
        'common/extensions/jquery.getvisible',
        'common/extensions/jquery.maskedinput',
        'common/extensions/jquery.minbox',
        'common/extensions/jquery.placeholder',
        'common/extensions/jquery.postMessage',
        'common/extensions/jquery.pulse',
      ],
      function (a) {
        return a;
      }
    ),
    define('common/constants/type', {
      STRING: 0,
      BOOLEAN: 1,
      INTEGER: 2,
      OBJECT: 3,
    }),
    define('common/extensions/base64', [], function () {
      var a = {
        CA: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        CAS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
        IA: new Array(256),
        IAS: new Array(256),
        isUtf8: function (a) {
          for (var b = !1, c = 0; c < a.length; c++)
            if (a.charCodeAt(c) > 255) {
              b = !0;
              break;
            }
          return b;
        },
        toByteArray: function (a, b) {
          var c,
            d,
            e = [];
          for (b = void 0 === b || b, c = 0; c < a.length; c++)
            ((d = a.charCodeAt(c)),
              d <= 127 || !b
                ? e.push(d)
                : d <= 2047
                  ? (e.push((d >> 6) | 192), e.push((63 & d) | 128))
                  : d <= 65535
                    ? (e.push((d >> 12) | 224),
                      e.push(((d >> 6) & 63) | 128),
                      e.push((63 & d) | 128))
                    : (e.push((d >> 18) | 240),
                      e.push(((d >> 12) & 63) | 128),
                      e.push(((d >> 6) & 63) | 128),
                      e.push((63 & d) | 128)));
          return e;
        },
        fromByteArray: function (a, b) {
          var c,
            d = '',
            e = 0;
          for (b = void 0 === b || b, e = 0; e < a.length; e++)
            ((c = a[e]),
              c <= 127 ||
                !b ||
                (192 == (224 & c)
                  ? ((c = (31 & c) << 6), (c += 63 & a[++e]))
                  : 224 == (240 & c)
                    ? ((c = (15 & c) << 12),
                      (c += (63 & a[++e]) << 6),
                      (c += 63 & a[++e]))
                    : ((c = (7 & c) << 18),
                      (c += (63 & a[++e]) << 12),
                      (c += (63 & a[++e]) << 6),
                      (c += 63 & a[++e]))),
              0 !== c && (d += String.fromCharCode(c)));
          return d;
        },
        init: function () {
          var b;
          for (b = 0; b < 256; b++) ((a.IA[b] = -1), (a.IAS[b] = -1));
          for (b = 0, iS = a.CA.length; b < iS; b++)
            ((a.IA[a.CA.charCodeAt(b)] = b), (a.IAS[a.CAS.charCodeAt(b)] = b));
          a.IA['='] = a.IAS['='] = 0;
        },
        encode: function (b, c) {
          var d, e, f, g, h, i, j, k, l, m;
          for (
            d = c ? a.CAS : a.CA,
              f = b.constructor == Array ? b : a.toByteArray(b),
              g = f.length,
              h = (g / 3) * 3,
              i = ((g - 1) / 3 + 1) << 2,
              e = new Array(i),
              j = 0,
              k = 0;
            j < h;

          )
            ((m =
              ((255 & f[j++]) << 16) | ((255 & f[j++]) << 8) | (255 & f[j++])),
              (e[k++] = d.charAt((m >> 18) & 63)),
              (e[k++] = d.charAt((m >> 12) & 63)),
              (e[k++] = d.charAt((m >> 6) & 63)),
              (e[k++] = d.charAt(63 & m)));
          return (
            (l = g - h),
            l > 0 &&
              ((m =
                ((255 & f[h]) << 10) | (2 == l ? (255 & f[g - 1]) << 2 : 0)),
              (e[i - 4] = d.charAt(m >> 12)),
              (e[i - 3] = d.charAt((m >> 6) & 63)),
              (e[i - 2] = 2 == l ? d.charAt(63 & m) : '='),
              (e[i - 1] = '=')),
            e.join('')
          );
        },
        decode: function (b, c) {
          var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
          for (
            d = c ? a.IAS : a.IA,
              b.constructor == Array
                ? ((f = b), (h = !0))
                : ((f = a.toByteArray(b)), (h = !1)),
              g = f.length,
              i = 0,
              j = g - 1;
            i < j && d[f[i]] < 0;

          )
            i++;
          for (; j > 0 && d[f[j]] < 0; ) j--;
          for (
            k = '=' == f[j] ? ('=' == f[j - 1] ? 2 : 1) : 0,
              l = j - i + 1,
              m = g > 76 ? ('\r' == f[76] ? l / 78 : 0) << 1 : 0,
              n = ((6 * (l - m)) >> 3) - k,
              e = new Array(n),
              o = 0,
              p = 0,
              eLen = (n / 3) * 3;
            o < eLen;

          )
            ((q =
              (d[f[i++]] << 18) |
              (d[f[i++]] << 12) |
              (d[f[i++]] << 6) |
              d[f[i++]]),
              (e[o++] = (q >> 16) & 255),
              (e[o++] = (q >> 8) & 255),
              (e[o++] = 255 & q),
              m > 0 && 19 == ++p && ((i += 2), (p = 0)));
          if (o < n) {
            for (q = 0, r = 0; i <= j - k; r++) q |= d[f[i++]] << (18 - 6 * r);
            for (s = 16; o < n; s -= 8) e[o++] = (q >> s) & 255;
          }
          return h ? e : a.fromByteArray(e);
        },
        _keyStr:
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encodeOld: function (b, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = '',
            l = 0;
          for (b = a._UTF8Encode(b, c); l < b.length; )
            ((d = b.charCodeAt(l++)),
              (e = b.charCodeAt(l++)),
              (f = b.charCodeAt(l++)),
              (g = d >> 2),
              (h = ((3 & d) << 4) | (e >> 4)),
              (i = ((15 & e) << 2) | (f >> 6)),
              (j = 63 & f),
              isNaN(e) ? (i = j = 64) : isNaN(f) && (j = 64),
              (k =
                k +
                this._keyStr.charAt(g) +
                this._keyStr.charAt(h) +
                this._keyStr.charAt(i) +
                this._keyStr.charAt(j)));
          return k;
        },
        decodeOld: function (b, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = '',
            l = 0;
          for (b = b.replace(/[^A-Za-z0-9\+\/=]/g, ''); l < b.length; )
            ((g = this._keyStr.indexOf(b.charAt(l++))),
              (h = this._keyStr.indexOf(b.charAt(l++))),
              (i = this._keyStr.indexOf(b.charAt(l++))),
              (j = this._keyStr.indexOf(b.charAt(l++))),
              (d = (g << 2) | (h >> 4)),
              (e = ((15 & h) << 4) | (i >> 2)),
              (f = ((3 & i) << 6) | j),
              (k += String.fromCharCode(d)),
              64 !== i && (k += String.fromCharCode(e)),
              64 !== j && (k += String.fromCharCode(f)));
          return (k = a._UTF8Decode(k, c));
        },
        _UTF8Encode: function (a, b) {
          return (
            (a = a.replace(/\r\n/g, '\n')),
            b ? encodeURIComponent(a) : unescape(encodeURIComponent(a))
          );
        },
        _UTF8Decode: function (a, b) {
          return b ? decodeURIComponent(a) : decodeURIComponent(escape(a));
        },
      };
      return (a.init(), a);
    }),
    define('common/constants/scope', { LOCAL: 0, SESSION: 1, STORAGE: 2 }),
    define(
      'common/application/session',
      [
        'common/extensions/jquery.plugins',
        'common/application/eventTarget',
        'common/constants/type',
        'common/extensions/debug',
        'common/extensions/base64',
        'common/constants/scope',
      ],
      function (a, b, c, d, e, f) {
        function g(a) {
          return a === f.STORAGE
            ? localStorage
            : a === f.LOCAL
              ? o
              : sessionStorage;
        }
        function h(a, b, d) {
          var e;
          switch (
            (void 0 === b && (b = c.STRING), !a && d && (a = p.get(d)), b)
          ) {
            case c.BOOLEAN:
              var f = a.toLowerCase();
              e = 'true' === f || 'yes' === f || 'ok' === f || '1' === f;
              break;
            case c.INTEGER:
              ((e = +a), !e && d && (e = +p.get(d)), e !== e && (e = 0));
              break;
            case c.OBJECT:
              try {
                if ('string' == typeof (e = JSON.parse(a)))
                  try {
                    e = JSON.parse(e);
                  } catch (a) {}
              } catch (a) {
                e = void 0;
              }
              break;
            default:
              e = a;
          }
          return e;
        }
        if (!window.sessionStorage || !window.localStorage) return {};
        var i = null,
          j = function () {},
          k = null,
          l = '',
          m = !1,
          n = '',
          o = {
            setItem: function (a, b) {
              o[a + ''] = b + '';
            },
            getItem: function (a) {
              return o[a + ''] ? o[a + ''] : null;
            },
          },
          p = a.extend(new Image(), {
            dispatcher: new b('Session'),
            init: function (a, b) {
              ((n = 'rhlp.' + a + '.'), (i = b), (p.fields = []));
              for (var e in i)
                i.hasOwnProperty(e) &&
                  (function (a) {
                    var b = function () {
                        var b = p.get(a),
                          c = h(b, i[a].type, i[a].fallback);
                        return i[a].value && '' === b ? i[a].value : c;
                      },
                      d = function (b) {
                        if (b === b && void 0 !== b && null !== b) {
                          var d = i[a].scope;
                          (i[a].type === c.OBJECT && (b = JSON.stringify(b)),
                            void 0 === d && (d = f.SESSION),
                            p.set(a, b, d));
                        }
                      };
                    (!Object.__defineGetter__ && Object.defineProperty
                      ? Object.defineProperty(p, a, { get: b, set: d })
                      : p.__defineGetter__ &&
                        (p.__defineGetter__(a, b), p.__defineSetter__(a, d)),
                      p.fields.push(a));
                  })(e);
              var g = function (a) {
                if (
                  (!a.storageArea || a.storageArea !== sessionStorage) &&
                  'key' in a &&
                  0 === a.key.indexOf(n)
                ) {
                  var b = a.key.substr(n.length);
                  p.dispatcher.fire(
                    'on' + b.charAt(0).toUpperCase() + b.substr(1) + 'Changed',
                    { inCurrentTab: !1 }
                  );
                }
              };
              (window.addEventListener
                ? (window.addEventListener('storage', g, !1),
                  window.addEventListener('onstorage', g, !1))
                : (window.attachEvent('onstorage', g),
                  document.attachEvent('onstorage', g)),
                d.sessionLog(['INIT | ', n]));
            },
            onLoad: function (a) {
              ('function' == typeof a && (j = a), (k && !m) || j());
            },
            get: function (a) {
              if (!i[a]) return '';
              var b = a;
              a = n + a;
              var c = g(i[b].scope);
              return null !== c.getItem(a) ? c.getItem(a) : '';
            },
            set: function (a, b, c, e) {
              if (
                (!e &&
                  k &&
                  k.send('updateSession', { name: a, value: b, scope: c }),
                p.get(a) !== '' + b)
              ) {
                var f = a;
                a = n + a;
                (g(c).setItem(a, b),
                  p.dispatcher.fire(
                    'on' + f.charAt(0).toUpperCase() + f.substr(1) + 'Changed',
                    { inCurrentTab: !0 }
                  ),
                  d.sessionLog('STORAGE | ' + a + ' = ' + b));
              }
            },
            attachTo: function (a, b, d) {
              ((k = a),
                (l = d),
                k.addHandler('initSession', function (a) {
                  a = JSON.parse(a.value);
                  for (var d in a)
                    a.hasOwnProperty(d) &&
                      (b[d].priority || (b[d].priority = 'external'),
                      b[d] &&
                        l !== b[d].priority &&
                        (b[d].type === c.OBJECT &&
                          (a[d] = JSON.stringify(a[d])),
                        p.set(d, a[d], b[d].scope, !0)));
                  ((m = !0), 'function' == typeof j && j());
                }),
                k.addHandler('requestSession', function (a) {
                  a = JSON.parse(a.value);
                  var b = {};
                  for (var c in a)
                    a.hasOwnProperty(c) && void 0 !== p[c] && (b[c] = p[c]);
                  k.send('initSession', { value: JSON.stringify(b) });
                }),
                k.addHandler('updateSession', function (a) {
                  b[a.name] &&
                    (b[a.name].type === c.OBJECT &&
                      (a.value = JSON.stringify(a.value)),
                    p.set(a.name, a.value, a.scope, !0));
                }));
            },
            clear: function (a) {
              for (var b in i)
                if (i.hasOwnProperty(b)) {
                  if (!a && 'vid' === b) continue;
                  p[b] = i[b].value || '';
                }
            },
            sendRequest: function () {
              k.send('requestSession', { value: JSON.stringify(i) });
            },
          });
        return p;
      }
    ),
    define(
      'common/communication/encoder',
      ['common/extensions/base64'],
      function (a) {
        return {
          serialize: function (a) {
            return JSON.stringify(a);
          },
          parse: function (a) {
            return JSON.parse(a);
          },
          compress: function (b) {
            return a.encodeOld(JSON.stringify(b));
          },
          decompress: function (b) {
            return JSON.parse(a.decodeOld(b));
          },
        };
      }
    ),
    define('config/setup', ['common/communication/encoder'], function (a) {
      var b;
      try {
        b = a.decompress(location.hash.split('#')[1]);
      } catch (a) {
        b = { url: 'http://rhlp.net' + location.search };
      }
      var c = location.href.indexOf('test.') > -1 ? 'test.' : '',
        d = {
          DEBUG: !1,
          SHOW_EVENTS: !1,
          SHOW_SESSION: !1,
          WEBSOCKET: !1,
          XMPP_DOMAIN: 'xmpp.redhelper.ru',
          DATA_URL: location.protocol + '//hb.bizmrg.com/data.redhelper.ru',
          BOSH_SERVICE:
            location.protocol + '//' + location.host + '/http-bind/',
          WS_SERVICE: 'wss://' + c + 'xmpp.redhelper.ru:80/ws-xmpp',
          NX_URL: ~location.href.indexOf('.com/')
            ? location.protocol + '//' + c + 'web.redhelper.com/nx/'
            : location.protocol + '//' + c + 'web.redhelper.ru/nx/',
          APP_URL: location.protocol + '//' + location.host + '/',
          CLIENT_NAME: location.href
            .split('?')[1]
            .split('c=')[1]
            .split('&')[0]
            .split('#')[0]
            .toLowerCase(),
          PARENT_URI: b.url,
          PARENT_URL:
            b.url.split('//')[0] + '//' + b.url.split('//')[1].split('/')[0],
          STANDALONE: location.href.indexOf('&standalone') > -1,
          REQUIRE_OPERATOR: null,
          CURRENT_URL: '',
          CURRENT_TITLE: '',
          QUEUE_DELAY_COUNT: 0,
          COMPANY_ID: b.companyId,
        };
      ((d.FILE_UPLOAD = d.APP_URL + 'nx/upload'),
        (d.FILE_FRAME = d.APP_URL + 'chat/upload.html'),
        (d.RATE_URL = d.APP_URL + 'nx/rate'));
      try {
        localStorage.getItem('rhlp.debug') && (d.DEBUG = !0);
      } catch (a) {}
      return (
        (d.getImageUrl = function (a) {
          return a
            ? a && ~a.indexOf('://')
              ? a
              : -1 !==
                  [
                    'Ava_default.png',
                    'Ava_man_1.jpg',
                    'Ava_woman_1.jpg',
                    'Ava_def_man.png',
                    'Ava_man_2.jpg',
                    'Ava_woman_2.jpg',
                    'Ava_def_woman.png',
                    'Ava_man_3.jpg',
                    'Ava_woman_3.jpg',
                    'Ava_default.svg',
                    'mac/Ava_woman_1.jpg',
                    'mac/Ava_woman_2.jpg',
                    'mac/Ava_woman_3.jpg',
                    'mac/Ava_man_1.jpg',
                    'mac/Ava_man_2.jpg',
                    'mac/Ava_man_3.jpg',
                  ].indexOf(a)
                ? d.APP_URL + 'container/images/common/avatar/' + a
                : d.DATA_URL + '/images/' + a
            : '';
        }),
        (d.empty = function (a) {
          return (
            void 0 === a ||
            '' === a ||
            ('number' == typeof a && isNaN(a)) ||
            null === a
          );
        }),
        (Number.prototype.toVisitorJid = function () {
          return this + '@visitor.' + d.XMPP_DOMAIN;
        }),
        (String.prototype.toVisitorJid = function () {
          return this + '@visitor.' + d.XMPP_DOMAIN;
        }),
        (String.prototype.toOperatorJid = function () {
          return this.split('@')[0] + '@operator.' + d.XMPP_DOMAIN;
        }),
        (String.prototype.extractNode = function () {
          var a = this.indexOf('@');
          return a > -1 ? this.slice(0, a) : this;
        }),
        d
      );
    }),
    define('common/constants/chatState', {
      MINIMIZED: 0,
      INVITATION: 1,
      MAXIMIZED: 2,
      WINDOW: 3,
    }),
    define('common/constants/chatWindowStage', {
      UNKNOWN: -1,
      OFFLINE_FORM: 0,
      ONLINE: 1,
      DEPARTMENTS: 2,
    }),
    define(
      'common/communication/messageTarget',
      [
        'common/extensions/jquery.plugins',
        'common/application/eventTarget',
        'common/communication/encoder',
        'common/extensions/debug',
      ],
      function (a, b, c, d) {
        function e() {
          ((this._dispatcher = new b('MessageTarget')),
            (this._fireCounter = 1));
          var a = [],
            c = !1;
          ((this.queueMessage = function (b, c) {
            a.push({ type: b, obj: c });
          }),
            (this.startMessaging = function () {
              c = !0;
              for (var b = 0, d = a.length; b < d; b++)
                this.send(a[b].type, a[b].obj);
            }),
            (this.isAllowed = function () {
              return c;
            }),
            (this.allow = function () {
              c = !0;
            }));
        }
        return (
          (e.prototype = {
            init: function (b, c, e, f) {
              ((this._targetUri = e),
                (this._targetWindow = b),
                (this._origin = c),
                f && this.allow());
              var g = this;
              try {
                a.receiveMessage(function (a) {
                  g._handle(a);
                });
              } catch (a) {
                d.error(a);
              }
            },
            _handle: function (a) {
              try {
                if (
                  'string' != typeof a.data ||
                  -1 === a.data.indexOf('__rh__')
                )
                  return;
              } catch (a) {
                return void d.log(a);
              }
              var b = c.parse(a.data.replace('__rh__', ''));
              if (b._messageType)
                if (((b.isMessageTarget = !0), b._messageId)) {
                  var e = this;
                  this._dispatcher.fire(
                    b._messageType,
                    { type: b._messageType, obj: b },
                    function () {
                      e.send('msg-handlers-completed-' + b._messageId);
                    }
                  );
                } else
                  this._dispatcher.fire(b._messageType, {
                    type: b._messageType,
                    obj: b,
                  });
            },
            setOrigin: function (a) {
              this._origin = a;
            },
            addHandler: function (a, b) {
              this._dispatcher.addEventListener(a, function (a) {
                b(a.obj);
              });
            },
            removeHandler: function (a, b) {
              this._dispatcher.removeEventListener(a, b);
            },
            removeHandlers: function (a) {
              this._dispatcher.removeAllEventListeners(a);
            },
            send: function (b, d, e) {
              if (!this.isAllowed()) return void this.queueMessage(b, d);
              if (
                (void 0 === d
                  ? (d = {})
                  : 'function' == typeof d && void 0 === e
                    ? ((e = d), (d = {}))
                    : 'object' != typeof d && (d = { value: d }),
                (d._messageType = b),
                'function' == typeof e)
              ) {
                d._messageId = this._fireCounter++;
                var f = this,
                  g = function () {
                    (f.removeHandlers('msg-handlers-completed-' + d._messageId),
                      e());
                  };
                this.addHandler('msg-handlers-completed-' + d._messageId, g);
              }
              var h = '__rh__' + c.serialize(d);
              a.postMessage(
                this._targetWindow,
                h,
                this._origin,
                this._targetUri
              );
            },
          }),
          e
        );
      }
    ),
    define(
      'application/parent',
      ['common/communication/messageTarget', 'config/setup'],
      function (a, b) {
        var c = new a();
        return (
          b.STANDALONE ||
            (c.init(parent, b.PARENT_URL, b.PARENT_URI, !0),
            c.startMessaging()),
          c
        );
      }
    ),
    define(
      'application/session.objects',
      [
        'application/dispatcher',
        'common/application/session',
        'config/setup',
        'common/constants/scope',
        'common/constants/type',
        'common/constants/chatState',
        'common/constants/chatWindowStage',
        'common/extensions/jquery.plugins',
        'application/parent',
      ],
      function (a, b, c, d, e, f, g, h, i) {
        var j = {
            activeSalesShown: {
              type: e.BOOLEAN,
              value: !1,
              scope: d.STORAGE,
              priority: 'internal',
            },
            allowed: { type: e.BOOLEAN, scope: d.STORAGE, value: !0 },
            audioEnabled: {
              value: !0,
              type: e.BOOLEAN,
              scope: d.STORAGE,
              priority: 'internal',
            },
            badge: { value: 'badge1.png', scope: d.LOCAL },
            badgeColor: {},
            badgeFontSize: { type: e.INTEGER, value: 0 },
            badgePadding: { type: e.INTEGER, value: 0 },
            badgePosition: { value: 'left', scope: d.LOCAL },
            badgeText: {},
            badgeX: { value: '70%' },
            badgeY: { value: '40%' },
            byEnter: { value: !1, type: e.BOOLEAN },
            cachedEvent: {},
            chatColor: {},
            chatHeight: { type: e.INTEGER, fallback: 'defaultChatHeight' },
            chatIntensity: {},
            chatStarted: { value: '', scope: d.STORAGE, priority: 'internal' },
            chatState: { type: e.INTEGER, value: f.MINIMIZED },
            chatWidth: { type: e.INTEGER, fallback: 'defaultChatWidth' },
            chatWindowStage: {
              type: e.INTEGER,
              scope: d.STORAGE,
              priority: 'internal',
              value: g.UNKNOWN,
            },
            chatX: { type: e.INTEGER },
            chatY: { type: e.INTEGER },
            chosenOperators: {},
            city: { scope: d.SESSION },
            city_ru: { scope: d.SESSION },
            cloneSession: { type: e.BOOLEAN },
            commandQueue: { scope: d.STORAGE, value: '[]' },
            companyId: { type: e.INTEGER, value: 0 },
            compress: { type: e.BOOLEAN, value: !1 },
            contactsGot: { type: e.BOOLEAN, scope: d.STORAGE },
            country: { scope: d.SESSION },
            country_ru: { scope: d.SESSION },
            currentChatHeight: { type: e.INTEGER },
            currentChatWidth: { type: e.INTEGER },
            currentChatX: { type: e.INTEGER },
            currentChatY: { type: e.INTEGER },
            currentDepartment: {
              type: e.INTEGER,
              value: 0,
              scope: d.STORAGE,
              priority: 'internal',
            },
            currentDepartmentName: { scope: d.STORAGE },
            currentFirstMessage: {},
            currentHeader: {},
            currentOfflineHeader: {},
            currentOfflineText: {},
            currentOperator: { scope: d.STORAGE, priority: 'internal' },
            currentOperAvatar: { scope: d.SESSION },
            currentTopText: {},
            currentTypedText: {},
            customFields: { scope: d.SESSION },
            customName: { scope: d.STORAGE },
            defaultChatHeight: { type: e.INTEGER, value: 420 },
            defaultChatWidth: { type: e.INTEGER, value: 300 },
            defaultFace: {},
            defaultHeader: {},
            defaultText: {},
            defaultWelcome: {},
            departments: { type: e.OBJECT, value: [] },
            departmentsShown: { scope: d.STORAGE, type: e.BOOLEAN },
            departmentsType: {},
            disableCobrowse: { type: e.BOOLEAN, value: !1 },
            disableForms: { type: e.BOOLEAN, value: !1 },
            extraAuth: { value: '' },
            firstMessage: {},
            firstMessageShown: { scope: d.STORAGE, value: !1 },
            free: { value: !1, type: e.BOOLEAN },
            hideLeaveContacts: { type: e.BOOLEAN, scope: d.STORAGE },
            hideRedHelper: { value: !1, type: e.BOOLEAN, scope: d.SESSION },
            holdMessage: { type: e.OBJECT, value: {} },
            invitation: { type: e.OBJECT, scope: d.STORAGE, value: {} },
            invitationHistory: { scope: d.STORAGE, value: '[]' },
            invitationsShown: {
              value: 0,
              type: e.INTEGER,
              priority: 'internal',
              scope: d.STORAGE,
            },
            inviteState: { value: 'none', priority: 'internal' },
            ip: { scope: d.STORAGE },
            isCloneSessionActive: { type: e.BOOLEAN, scope: d.STORAGE },
            isOnline: { type: e.BOOLEAN },
            isPartiallyOnline: { type: e.BOOLEAN, value: !1 },
            isSendMouseActive: { type: e.BOOLEAN, value: !1, scope: d.STORAGE },
            jid: { scope: d.STORAGE },
            lastActivity: { type: e.INTEGER, scope: d.STORAGE },
            lastChat: {
              type: e.INTEGER,
              value: 0,
              scope: d.STORAGE,
              priority: 'internal',
            },
            lastInvitationTime: {
              scope: d.STORAGE,
              priority: 'interval',
              type: e.INTEGER,
            },
            lastMessageFrom: { scope: d.STORAGE },
            lastMessageTime: { scope: d.STORAGE, priority: 'internal' },
            lastMouseOperator: { scope: d.STORAGE, priority: 'internal' },
            lastOperatorChat: { type: e.INTEGER, scope: d.STORAGE },
            lastVisit: { value: '1/1/2000', scope: d.STORAGE },
            lastVisitTime: { type: e.INTEGER, value: 0, scope: d.STORAGE },
            lastXMPPTransfer: { type: e.INTEGER, scope: d.STORAGE },
            leaveContactsSuggestions: { type: e.OBJECT },
            locale: { scope: d.STORAGE },
            messageQueue: { type: e.OBJECT, scope: d.STORAGE, value: [] },
            mouseOperators: { scope: d.STORAGE, priority: 'internal' },
            offlineEnabled: { type: e.BOOLEAN, value: !0, scope: d.STORAGE },
            offlineFields: {
              value: ['name', 'email', 'message'],
              type: e.OBJECT,
            },
            offlineHeader: {},
            offlineText: {},
            onlineOperators: { value: [], type: e.OBJECT },
            openApi: { type: e.BOOLEAN, value: !0 },
            operatorRates: { value: {}, type: e.OBJECT, scope: d.STORAGE },
            operAvatar: { scope: d.STORAGE, fallback: 'defaultFace' },
            operDisplayName: { scope: d.STORAGE },
            optimizeConnections: { type: Boolean, value: !1, scope: d.STORAGE },
            preferredOperator: { value: '' },
            preferredOperatorError: { value: '' },
            previousDay: { value: '1/1/2000', scope: d.STORAGE },
            previousOperator: {},
            rateEnabled: { type: e.BOOLEAN },
            showEula: { type: e.BOOLEAN },
            cpPublicId: { type: e.STRING },
            hideActiveCopyright: { type: e.BOOLEAN },
            realDepartment: {
              type: e.INTEGER,
              value: 0,
              scope: d.STORAGE,
              priority: 'internal',
            },
            reconnecting: { value: !1, type: e.BOOLEAN },
            reconnects: { type: e.INTEGER, value: 0 },
            referrer: { scope: d.STORAGE, priority: 'internal' },
            referrerStored: {
              scope: d.STORAGE,
              priority: 'internal',
              type: e.BOOLEAN,
              value: !1,
            },
            region: { scope: d.SESSION },
            requiredOperator: { value: '' },
            responsible: { type: e.OBJECT, value: [] },
            rid: {
              value: 0,
              type: e.INTEGER,
              priority: 'internal',
              scope: d.STORAGE,
            },
            sessionViewers: { type: e.OBJECT, value: [] },
            showHoldMessage: { type: e.BOOLEAN, scope: d.STORAGE, value: !1 },
            showLeaveContacts: { type: e.BOOLEAN, scope: d.STORAGE },
            sid: { value: '', priority: 'internal', scope: d.STORAGE },
            siteVisitLastTime: {
              value: 0,
              type: e.INTEGER,
              priority: 'internal',
              scope: d.STORAGE,
            },
            skin: {},
            stringChatState: {
              scope: d.STORAGE,
              priority: 'internal',
              value: 'browse',
            },
            time: { type: e.INTEGER, value: 0 },
            trigger: { scope: d.STORAGE, priority: 'internal' },
            userLocale: { value: '' },
            vid: { scope: d.STORAGE, type: e.INTEGER, priority: 'internal' },
            visIdFromNx: { scope: d.STORAGE, type: e.INTEGER },
            viewedPages: {
              type: e.INTEGER,
              value: 0,
              scope: d.STORAGE,
              noNaN: !0,
            },
            visits: { type: e.INTEGER, value: 0, scope: d.STORAGE },
            watchingOperators: { scope: d.STORAGE, value: '{}' },
          },
          k = c.CLIENT_NAME + (c.COMPANY_ID ? '.' + c.COMPANY_ID : '');
        c.STANDALONE
          ? b.init(k, j)
          : (b.attachTo(i, j, 'internal'),
            b.init(k, j),
            -1 !== c.COMPANY_ID && b.sendRequest());
        var l = function (a) {
          b.dispatcher.addEventListener(
            'on' + a.charAt(0).toUpperCase() + a.substr(1) + 'Changed',
            function () {
              h('span.redhlp_' + a).html(b[a]);
            }
          );
        };
        for (var m in j) j.hasOwnProperty(m) && l(m);
        return (
          b.dispatcher.addEventListener('onVidChanged', function () {
            h('.redhlp_code').text(
              (b.vid + '').substr((b.vid + '').length - 4)
            );
          }),
          h('.redhlp_code').text((b.vid + '').substr((b.vid + '').length - 4)),
          b
        );
      }
    ),
    define(
      'application/distribution',
      [
        'application/dispatcher',
        'application/session.objects',
        'common/constants/chatWindowStage',
      ],
      function (a, b, c) {
        var d = {
          isOperatorOnline: function (a) {
            for (var c = b.onlineOperators, d = 0, e = c.length; d < e; d++)
              if (c[d].name === a) return 'offline' !== c[d].status;
            return !1;
          },
          isDepartmentOnline: function (a, c) {
            c || (c = '');
            for (var d = b.onlineOperators, e = 0, f = d.length; e < f; e++)
              if ('offline' !== d[e].status && (d[e].onPage || d[e].name === c))
                for (var g = 0, h = d[e].departments.length; g < h; g++)
                  if (d[e].departments[g] === a) return !0;
            return !1;
          },
          initializeChatWindowStage: function () {
            var e = b.currentOperator || '',
              f = b.currentDepartment;
            e && '-' != e && d.isOperatorOnline(e)
              ? (b.chatWindowStage = c.ONLINE)
              : f && d.isDepartmentOnline(f, e)
                ? ((b.currentOperator && '-' != b.currentOperator) ||
                    ((b.currentOperator = ''), a.fire('refreshOperator')),
                  (b.chatWindowStage = c.ONLINE))
                : (b.chatWindowStage = b.isOnline ? c.ONLINE : c.OFFLINE_FORM);
          },
        };
        return d;
      }
    ),
    define(
      'config/api',
      ['common/communication/encoder', 'application/dispatcher'],
      function (a, b) {
        var c = {};
        try {
          c = a.decompress(location.hash.split('#')[1]).settings;
        } catch (a) {}
        var d,
          e,
          f = [],
          g = !1;
        ((c.waitForTemplate = function (a) {
          if (g) return void a();
          'function' == typeof a && f.push(a);
        }),
          b.addEventListener('templateProcessed', function () {
            for (d = 0, e = f.length; d < e; d++) f[d]();
          }));
        var h = function () {
          g = !0;
        };
        return (b.addEventListener('templateReceived', h), c);
      }
    ),
    define('locales', {
      enabled: [
        'az',
        'bg',
        'cs',
        'de',
        'dk',
        'ee',
        'el',
        'en',
        'es',
        'fa',
        'fi',
        'ge',
        'he',
        'hu',
        'id',
        'it',
        'kk',
        'lt',
        'lv',
        'md',
        'pl',
        'ru',
        'sk',
        'uk',
        'uz',
        'zh',
      ],
      locales: {
        az: {
          CHAT_LABEL: 'Mətni buraya daxil edin...',
          YOU_LABEL: 'Siz',
          EMAIL_INCORRECT: 'Siz mövcud olmayan e-mail daxil etmisiniz',
          FAILED_TO_SEND: 'Mətni göndərmək mümkün olmadı',
          INCORRECT_EMAIL: 'Email adresi düzgün deyil',
          NOT_ALL_FIELDS: 'Siz bütün xanaları doldurmamısınız',
          MAIL_SUCCESS: 'Mesajınız uğurla göndərildi',
          MAIL_SENT: 'Mesajınız göndərildi',
          SEND_BUTTON: 'Göndər',
          THROBBER: 'Göndərilir...',
          MESSAGE_LABEL: 'Mesajınız:',
          EMAIL_LABEL: 'Sizin e-mail:',
          NAME_LABEL: 'Adınız:',
          OFFLINE_HEADER: 'Offline əlaqə forması',
          OFFLINE_TEXT:
            'Hal hazırda bütün operatorlar xətdə deyillər. Lütfən siz öz mesajınızı formadan istifadə edərək göndərin. Yaxın zamanda sizinlə əlaqə saxlanılacaqdır.',
          PAGE_TITLE: 'Online Məsləhətçi',
          URL_NEW_TAB: 'ayrı bir səhifədə',
          TITLE_NEW_TAB: 'ayrı bir səhifədə',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: 'cavab yazır',
          PROMPT_LABEL:
            'Operator sizə digər səhifəyə keçməyi təklif edir. Keçək?',
          PROMPT_BUTTON_YES: 'Bəli',
          PROMPT_BUTTON_NO: 'Xeyir',
          NOTIFICATION_HEADER: 'Operatorun mesaji',
          OPERATOR_REDIRECT: 'Operator çatı digər operatora yönləndirir',
          OPERATOR_REDIRECT_OK: 'Sizə xidmət edən operator',
          OPERATOR_CONNECTING: 'Sizə operator bağlanır, lütfən gözləyin',
          NO_PREFERRED_OPERATOR:
            'Hal hazırdakı operator yerində deyil, siz digər operatora bağlandınız',
          TOO_LONG: 'Mətndə icazə verilən maksimal simvol sayı həddinə çatıb',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Sizin telefon:',
          PHONE_MESSAGE: 'Telefon',
          INCORRECT_PHONE: 'Telefon formatı düzgün deyil',
          ALL_OFFLINE: 'Bütün operatorlar xətdə deyillər',
          LEAVE_MESSAGE: 'Məktub yaz',
          DEFAULT_FIRST_MESSAGE: 'Salam, Sizə necə kömək edə bilərəm?',
          COPYRIGHT: 'online məsləhətçi',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Faylı göndərmək üçün buraya dartıb atın',
          FILE_SENT_OPERATOR: 'Sizə göndərilən fayl:',
          FILE_SENT_VISITOR: 'Siz fayl göndərdiniz:',
          FILE_UPLOAD:
            '<span>Fayl Yüklə</span> (və ya faylı çat qutusuna atın)',
          UPLOAD_LEGEND: 'Fayl mübadiləsi',
          UPLOAD_ERROR: 'Fayl yükləmə xətası - faylın həcmi böyükdür',
          UPLOAD_ERROR_TYPE:
            'Fayl yükləmə xətası - bü növ fayllar dəstəklənmir',
          UPLOAD_ERROR_UNKNOWN:
            'Bilinməyən yükləmə xətası. Lütfən bir daha yoxlayınız',
          BACK_TO_CONVERSATION: 'Yazışmaya qayıtmaq',
          BACK_TO_OFFLINE: 'Ofline formaya qayıtmaq',
          CHOOSE_DEPARTMENT: 'Müraciət etmək istədiyiniz bölməni seçiniz:',
          DEPARTMENTS_BUTTON: 'Bölməni seçiniz',
          CHOOSE_DEPARTMENT_TITLE: 'Bölməni seçmək',
          CHAT_SEND_TITLE: 'Mesajı göndər',
          FILE_SEND_TITLE: 'Faylı göndər',
          RATE_TITLE: 'Operatoru qiymətləndir',
          HOLD_MESSAGE: 'Lütfən gözləyin, operator sizə tezliklə cavab yazacaq',
          LEAVE_CONTACTS:
            'Operator cavab vermir. Lütfən öz əlaqə vasitələrinizi bizə göndərin. Sizinlə tezliklə əlaqə saxlanılacaq.',
          PHONE: 'Telefon',
          EMAIL: 'e-mail',
          NAME: 'Ad',
          CONTACTS_SUCCESS:
            'Təşəkür edirik. Bizim nümayəndə sizinlə əlaqə saxlayacaq.',
          INCORRECT_CONTACTS: 'Məlumatların düzgünlüyünü yoxlayın',
          OPERATOR: 'Operator',
          TODAY: 'hazırda',
          YESTERDAY: 'dünən',
        },
        bg: {
          CHAT_LABEL: 'Напишете Вашето съобщение тук',
          YOU_LABEL: 'Вие',
          EMAIL_INCORRECT: 'Въведеният имейл е некоректен',
          FAILED_TO_SEND: 'Съобщението не беше изпратено',
          INCORRECT_EMAIL: 'Въведеният имейл е некоректен',
          NOT_ALL_FIELDS: 'Не всички полета са попълнени',
          MAIL_SUCCESS: 'Съобщението беше изпратено успешно',
          MAIL_SENT: 'Изпратено съобщение',
          SEND_BUTTON: 'Изпрати',
          THROBBER: 'Моля изчакайте...',
          MESSAGE_LABEL: 'Съобщение:',
          EMAIL_LABEL: 'Вашият имейл:',
          NAME_LABEL: 'Вашето име:',
          OFFLINE_HEADER: 'Форма за обратна връзка',
          OFFLINE_TEXT:
            'В момента няма оператор на линия. Моля, оставете Вашето съобщение и ще върнем отговор по имейл',
          PAGE_TITLE: 'Пишете ни',
          URL_NEW_TAB: 'in a separate tab',
          TITLE_NEW_TAB: 'in a separate tab',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' is typing',
          PROMPT_LABEL:
            'Operator wants to redirect you to another page. Allow?',
          PROMPT_BUTTON_YES: 'Yes',
          PROMPT_BUTTON_NO: 'No',
          NOTIFICATION_HEADER: 'Message from operator',
          OPERATOR_REDIRECT: 'Operator wants to switch you',
          OPERATOR_REDIRECT_OK: 'You are now chatting with',
          OPERATOR_CONNECTING: 'Operator is connecting, please wait',
          NO_PREFERRED_OPERATOR:
            'Current operator is unavailable, connected to another',
          TOO_LONG: 'Maximum message length exceed',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Your phone:',
          PHONE_MESSAGE: 'Phone',
          INCORRECT_PHONE: 'The phone is incorrect',
          ALL_OFFLINE: 'Operators offline',
          LEAVE_MESSAGE: 'Leave message',
          DEFAULT_FIRST_MESSAGE: 'Hello! How can I help you?',
          COPYRIGHT: 'powered by',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Drop file here',
          FILE_SENT_OPERATOR: 'Sent file to you:',
          FILE_SENT_VISITOR: 'You sent file:',
          FILE_UPLOAD: '<span>Upload a file</span> (or drag it into chat)',
          UPLOAD_LEGEND: 'Uploading file',
          UPLOAD_ERROR: 'Upload error - file too large',
          UPLOAD_ERROR_TYPE: 'Upload error - file type not supported',
          UPLOAD_ERROR_UNKNOWN: 'Unknown upload error. Try again',
          BACK_TO_CONVERSATION: 'Back to conversation',
          BACK_TO_OFFLINE: 'Back to offline form',
          CHOOSE_DEPARTMENT: 'Please choose department:',
          DEPARTMENTS_BUTTON: 'Choose department',
          CHOOSE_DEPARTMENT_TITLE: 'Choose department',
          CHAT_SEND_TITLE: 'Send message',
          FILE_SEND_TITLE: 'Send file',
          RATE_TITLE: 'Rate operator',
          HOLD_MESSAGE:
            'Please wait, operator will answer you as soon as possible',
          LEAVE_CONTACTS:
            'Operator is not responding, please leave your contacts',
          PHONE: 'Phone',
          EMAIL: 'e-mail',
          NAME: 'Name',
          CONTACTS_SUCCESS: 'Thank you, our manager will contact you soon',
          INCORRECT_CONTACTS: 'Please check highlighted fields',
          OPERATOR: 'Оператор',
          TODAY: 'днес',
          YESTERDAY: 'вчера',
        },
        cs: {
          CHAT_LABEL: 'Napsat zprávu...',
          YOU_LABEL: 'Vy',
          EMAIL_INCORRECT: 'Tento e-mail neexistuje',
          FAILED_TO_SEND: 'Nepodařilo se poslat zprávu',
          INCORRECT_EMAIL: 'Neplatný formát emailové adresy',
          NOT_ALL_FIELDS: 'Prosíme vyplňte všechny údaje',
          MAIL_SUCCESS: 'Zpráva je odeslána',
          MAIL_SENT: 'Zpráva je odeslána',
          SEND_BUTTON: 'Poslat',
          THROBBER: 'Odesílání..',
          MESSAGE_LABEL: 'Zpráva:',
          EMAIL_LABEL: 'Vaše e-mailová adresa:',
          NAME_LABEL: 'Jméno:',
          OFFLINE_HEADER: 'Zpětná zpráva',
          OFFLINE_TEXT:
            'Všichni naši operátoři jsou nyní offline. Pošlete nám prosím Vaše údaje a naši operátoři Vás v co nejbližší době budou kontaktovat.',
          PAGE_TITLE: 'Konzultace online',
          URL_NEW_TAB: 'otevřít v novém okně',
          TITLE_NEW_TAB: 'otevřít v nové kartě',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' odpovídá',
          PROMPT_LABEL: 'Operátor nabízí otevřít další stránku. Otevřít?',
          PROMPT_BUTTON_YES: 'Ano',
          PROMPT_BUTTON_NO: 'Ne',
          NOTIFICATION_HEADER: 'Zpráva od operátora',
          OPERATOR_REDIRECT: 'Operátor předává hovor dalšímu operátorovi',
          OPERATOR_REDIRECT_OK: 'Přidává se operátor',
          OPERATOR_CONNECTING: 'Počkejte, prosím, operátor se přidává',
          NO_PREFERRED_OPERATOR:
            'Tento operátor je nyní offline, budte přepojeni k dalšímu operátorovi',
          TOO_LONG: 'Překročen limit znaků',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Vaš telefon:',
          PHONE_MESSAGE: 'Telefon',
          INCORRECT_PHONE: 'Neplatný formát čísla',
          ALL_OFFLINE: 'Všichni operátoři jsou nyní offline',
          LEAVE_MESSAGE: 'Poslat zprávu',
          DEFAULT_FIRST_MESSAGE: 'Dobrý den, mohu Vám nejak pomoci?',
          COPYRIGHT: 'Konzultace online od',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Pro odesílání přetáhněte prosím soubor sem',
          FILE_SENT_OPERATOR: 'Operátor odeslal Vám soubor:',
          FILE_SENT_VISITOR: 'Odeslali jste soubor:',
          FILE_UPLOAD:
            '<span>Nahrát soubor</span> (nebo přetáhněte soubor do okna chatu)',
          UPLOAD_LEGEND: 'Nahrávávní souboru',
          UPLOAD_ERROR: 'Chyba nahrávání. Soubor je příliš velký',
          UPLOAD_ERROR_TYPE: 'Chyba nahrávání. Neplatný formát.',
          UPLOAD_ERROR_UNKNOWN: 'Neznámá chyba. Prosím zkuste znovu',
          BACK_TO_CONVERSATION: 'Vrátit se k hovoru',
          BACK_TO_OFFLINE: 'Vrátit se k offline formuláři',
          CHOOSE_DEPARTMENT:
            'Vyberte si prosím oddělení, na které se chcete obrátit:',
          DEPARTMENTS_BUTTON: 'Vybrat si oddělení',
          CHOOSE_DEPARTMENT_TITLE: 'Vybrat si oddělení',
          CHAT_SEND_TITLE: 'Poslat zprávu',
          FILE_SEND_TITLE: 'Odeslat soubor',
          RATE_TITLE: 'Ohodnotit operátora',
          HOLD_MESSAGE: 'Počkejte prosím, operátor za okamžik Vám odpoví',
          LEAVE_CONTACTS:
            'Operátor neodpovídá, prosím nechte kontakt na Vás a naši operátoři Vás v co nejbližší době budou kontaktovat.',
          PHONE: 'Telefon',
          EMAIL: 'e-mail',
          NAME: 'Jméno',
          CONTACTS_SUCCESS:
            'Děkujeme, naši operátoři Vás v co nejbližší době budou kontaktovat.',
          INCORRECT_CONTACTS: 'Prosím zkontrolujte Vaše údaje',
          OPERATOR: 'Operator',
          TODAY: 'dnes',
          YESTERDAY: 'včera',
        },
        de: {
          CHAT_LABEL: 'Geben Sie hier Ihre Nachricht ein',
          YOU_LABEL: 'Sie',
          EMAIL_INCORRECT:
            'Die  E-Mail-Adresse, die Sie eingegeben haben, ist ungültig',
          FAILED_TO_SEND: 'Ihre Nachricht wurde nicht gesendet',
          INCORRECT_EMAIL: 'Ihr email ist nicht korrekt',
          NOT_ALL_FIELDS: 'Füllen Sie, bitte, alle Felder aus',
          MAIL_SUCCESS: 'Ihre Nachricht wurde erfolgreich gesendet',
          MAIL_SENT: 'Die Nachricht wurde gesendet',
          SEND_BUTTON: 'Senden',
          THROBBER: 'Bitte warten...',
          MESSAGE_LABEL: 'Ihre Nachricht',
          EMAIL_LABEL: 'Ihr E-mail',
          NAME_LABEL: 'Ihr Name',
          OFFLINE_HEADER: 'Feedbackformular',
          OFFLINE_TEXT:
            'Wir sind momentan nicht erreichbar. Geben Sie hier Ihre Nachricht ein und wir beantworten sie per E-Mail.',
          PAGE_TITLE: 'Onlineberater',
          URL_NEW_TAB: 'In einem separaten Tabulator',
          TITLE_NEW_TAB: 'In einem separaten Tabulator',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: 'schreibt',
          PROMPT_LABEL:
            'Berater möchte Sie auf eine  andere  Seite  weiterleiten, erlauben Sie?',
          PROMPT_BUTTON_YES: 'Ja',
          PROMPT_BUTTON_NO: 'Nein',
          NOTIFICATION_HEADER: 'Nachricht von dem Berater',
          OPERATOR_REDIRECT:
            'Berater möchte Sie an einen anderen Berater weiterleiten',
          OPERATOR_REDIRECT_OK: 'Sie stehen mit dem Berater in Verbindung',
          OPERATOR_CONNECTING:
            'Wir leiten Sie  an einen Berater weiter. Warten Sie bitte',
          NO_PREFERRED_OPERATOR:
            'Ihr Berater ist nicht erreichbar, wir leiten Sie weiter, warten Sie bitte',
          TOO_LONG: 'Maximale Länge der Nachricht ist überschritten',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Ihr Telefon',
          PHONE_MESSAGE: 'Telefon',
          INCORRECT_PHONE: 'Die Telefonnummer ist nicht korrekt',
          ALL_OFFLINE: 'Alle Berater sind momentan nicht erreichbar',
          LEAVE_MESSAGE: 'Hier eine Nachricht eingeben',
          DEFAULT_FIRST_MESSAGE: 'Guten Tag! Kann ich Ihnen helfen?',
          COPYRIGHT: 'Berater von',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Um eine Datei zu senden, ziehen Sie sie hierher',
          FILE_SENT_OPERATOR: 'Datei wurde an Sie gesendet:',
          FILE_SENT_VISITOR: 'Sie haben eine Datei gesendet:',
          FILE_UPLOAD:
            '<span>Datei hochladen</span> (oder ziehen Sie sie ins Dialogfenster)',
          UPLOAD_LEGEND: 'Hochladen der Datei',
          UPLOAD_ERROR: 'Fehler beim Hochladen. Datei ist zu groß',
          UPLOAD_ERROR_TYPE:
            'Fehler beim Hochladen. Dateityp wird nicht unterstützt',
          UPLOAD_ERROR_UNKNOWN:
            'Ein unbekannter Fehler beim Hochladen der Daten. Bitte probieren Sie noch einmal',
          BACK_TO_CONVERSATION: 'Zurück zum Dialog',
          BACK_TO_OFFLINE: 'Zurück zum Feedbackformular',
          CHOOSE_DEPARTMENT:
            'Wählen Sie eine Abteilung, woran Sie sich wenden möchten:',
          DEPARTMENTS_BUTTON: 'Wählen Sie eine Abteilung',
          HOLD_MESSAGE:
            'Bitte warten Sie, ein Betreiber werden Sie bald beantworten',
          LEAVE_CONTACTS:
            'Bediener nicht beantworten, lassen Sie Ihre Kontaktdaten und wir werden Sie umgehend kontaktieren.',
          PHONE: 'Telefon',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          EMAIL: 'e-mail',
          NAME: 'Name',
          CONTACTS_SUCCESS:
            'Vielen Dank, unsere Mitarbeiter werden Sie umgehend kontaktieren.',
          INCORRECT_CONTACTS: 'Bitte überprüfen Sie Ihre Eingabe',
          OPERATOR: 'Bediener',
          TODAY: 'heute',
          YESTERDAY: 'gestern',
        },
        dk: {
          CHAT_LABEL: 'Skriv venligst din meddelelse her',
          YOU_LABEL: 'Dig',
          EMAIL_INCORRECT: 'Fejl i den indtastede e-mail adresse',
          FAILED_TO_SEND: 'Meddelelsen blev ikke sendt',
          INCORRECT_EMAIL: 'The email is incorrect',
          NOT_ALL_FIELDS: 'Udfyld venligst alle felter',
          MAIL_SUCCESS: 'Din meddelelse er blevet sendt',
          MAIL_SENT: 'Din meddelelse er blevet sendt',
          SEND_BUTTON: 'Send',
          THROBBER: 'Vent venligst',
          MESSAGE_LABEL: 'Meddelelse',
          EMAIL_LABEL: 'Din e-mail',
          NAME_LABEL: 'Dit navn',
          OFFLINE_HEADER: 'Feedback form',
          OFFLINE_TEXT:
            'Vi er desv?rre ikke online i ojeblikket. Efterlad en besked og vi svarer tilbage pa e-mail',
          PAGE_TITLE: 'Live Chat',
          URL_NEW_TAB: 'in a separate tab',
          TITLE_NEW_TAB: 'in a separate tab',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' skriver',
          PROMPT_LABEL: "'Du bliver nu stillet videre til en ny side. Tillad'",
          PROMPT_BUTTON_YES: 'Ja',
          PROMPT_BUTTON_NO: 'Nej',
          NOTIFICATION_HEADER: 'Besked fra operator',
          OPERATOR_REDIRECT: 'Operator wants to switch you',
          OPERATOR_REDIRECT_OK: 'Du chatter nu med',
          OPERATOR_CONNECTING: 'Operator logger pa, vent venligst',
          NO_PREFERRED_OPERATOR:
            'Denne operator er desv?rre optaget. Stiller om til anden',
          TOO_LONG: 'Maxl?ngde pa beskeden er overskredet',
          LEAVE_MESSAGE: 'Efterlade en besked',
          DROP_HERE: 'Træk og slip filer her',
          FILE_UPLOAD: 'Hent filen (eller trække en fil til chat)',
          UPLOAD_LEGEND: 'Hent fil',
          UPLOAD_ERROR: 'Upload fejl - filen for stor',
          UPLOAD_ERROR_TYPE: 'Upload fejl - filtype understøttes ikke',
          UPLOAD_ERROR_UNKNOWN: 'Ukendt upload fejl',
          BACK_TO_CONVERSATION: 'Tilbage til samtale',
          BACK_TO_OFFLINE: 'Back to offline formular',
          CHOOSE_DEPARTMENT: 'Vælg den sektion, hvor du ønsker at anvende',
          DEPARTMENTS_BUTTON: 'Vælg afdeling',
          CHOOSE_DEPARTMENT_TITLE: 'Vælg afdeling',
          CHAT_SEND_TITLE: 'Send besked',
          FILE_SEND_TITLE: 'Send fil',
          RATE_TITLE: 'Rate operatør',
          HOLD_MESSAGE: 'Vent venligst, en operatør vil svare dig hurtigt',
          LEAVE_CONTACTS:
            'operatør ikke svarer, forlade din kontakt, og vi vil kontakte dig snarest.',
          PHONE: 'Telephone',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Telephone',
          PHONE_MESSAGE: 'Telephone',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          EMAIL: 'e-mail',
          NAME: 'Navn',
          CONTACTS_SUCCESS: 'Tak, vores personale vil kontakte dig snarest.',
          INCORRECT_CONTACTS: 'Kontroller din indtastning',
          OPERATOR: 'Operatør',
          TODAY: 'i dag',
          YESTERDAY: 'i går',
        },
        ee: {
          CHAT_LABEL: 'Sisestage oma sõnum siia',
          YOU_LABEL: 'Teie',
          EMAIL_INCORRECT: 'Sisestatud e-postiaadress pole õige',
          FAILED_TO_SEND: 'Sõnumi saatmine ebaõnnestus',
          INCORRECT_EMAIL: 'Sisestatud mailiaadress pole korrektne',
          NOT_ALL_FIELDS: 'Osad väljad on täitmata',
          MAIL_SUCCESS: 'Teie sõnum saadeti ära',
          MAIL_SENT: 'Sõnum on saadetud',
          SEND_BUTTON: 'Saada',
          THROBBER: 'Palun oodake...',
          MESSAGE_LABEL: 'Sõnum',
          EMAIL_LABEL: 'Teie e-postiaadress',
          NAME_LABEL: 'Teie nimi',
          OFFLINE_HEADER: 'Tagasiside vorm',
          OFFLINE_TEXT:
            'Me oleme hetkel offlainis. Palun jätke meile sõnum ja me vastame teile e-kirjaga.',
          PAGE_TITLE: 'Vestlus',
          URL_NEW_TAB: 'teisel vahelehel',
          TITLE_NEW_TAB: ' teisel vahelehel',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' kirjutab',
          PROMPT_LABEL: 'Operaator suunab teid teisele lehele. Kas lubate?',
          PROMPT_BUTTON_YES: 'Jah',
          PROMPT_BUTTON_NO: 'Ei',
          NOTIFICATION_HEADER: 'Sõnum operaatorilt',
          OPERATOR_REDIRECT: 'Operaator tahab teid ümber suunata',
          OPERATOR_REDIRECT_OK: 'Te vestlete praegu',
          OPERATOR_CONNECTING: 'Operaator võtab ühendust, palun oodake',
          NO_PREFERRED_OPERATOR:
            'Praegune operaator pole kättesaadav, valige mõni teine',
          TOO_LONG: 'Sõnumi maksimumpikkus on ületatud',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Teie telefoninumber',
          PHONE_MESSAGE: 'Telefoninumber',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'Teie telefoninumber pole õige',
          ALL_OFFLINE: 'Operaatorid on offlainis',
          LEAVE_MESSAGE: 'Jätke sõnum',
          DEFAULT_FIRST_MESSAGE: 'Tere! Kuidas ma saan teid aidata?',
          COPYRIGHT: 'powered by',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Lohistage fail siia',
          FILE_SENT_OPERATOR: 'Teile saadetud fail:',
          FILE_SENT_VISITOR: 'Teie saadetud fail:',
          FILE_UPLOAD: 'Laadi fail üles (või lohista see vestlusaknasse)',
          UPLOAD_LEGEND: 'Faili üleslaadimine',
          UPLOAD_ERROR: ' Üleslaadimisviga – fail on liiga suur',
          UPLOAD_ERROR_TYPE: 'Üleslaadimisviga – failitüüp pole toetatud',
          UPLOAD_ERROR_UNKNOWN: 'Tundmatu üleslaadimise viga. Proovi uuesti',
          BACK_TO_CONVERSATION: 'Tagasi vestlus',
          BACK_TO_OFFLINE: 'Tagasi offline vorm',
          CHOOSE_DEPARTMENT: 'Valige lõik, milles soovite taotleda',
          DEPARTMENTS_BUTTON: 'Vali osakond',
          CHOOSE_DEPARTMENT_TITLE: 'Vali osakond',
          CHAT_SEND_TITLE: 'Saada sõnum',
          FILE_SEND_TITLE: 'Saada fail',
          RATE_TITLE: 'Hinda käitaja',
          HOLD_MESSAGE: 'Palun oota, operaator vastab sulle varsti',
          LEAVE_CONTACTS:
            'operaator ei vasta, jätke oma kontaktandmed ning me võtame teiega peagi ühendust.',
          PHONE: 'Telefon',
          EMAIL: 'e-mail',
          NAME: 'Nimi',
          CONTACTS_SUCCESS:
            'Tänan teid, meie töötajad võtame teiega peagi ühendust.',
          INCORRECT_CONTACTS: 'Palun kontrollige oma panuse',
          OPERATOR: 'Operaator',
          TODAY: 'täna',
          YESTERDAY: 'eile',
        },
        el: {
          CHAT_LABEL: 'Μήνυμα...',
          YOU_LABEL: 'Εσείς',
          EMAIL_INCORRECT: 'Το e-mail που πληκτρολογήσατε δεν είναι σωστό',
          FAILED_TO_SEND: 'Αποτυχία αποστολής μηνύματος',
          INCORRECT_EMAIL: 'Το e-mail δεν είναι σωστό',
          NOT_ALL_FIELDS: 'Συμπληρώστε τα υποχρεωτικά πεδία',
          MAIL_SUCCESS: 'Το μήνυμά σας εστάλη με επιτυχία',
          MAIL_SENT: 'Το μήνυμα εστάλη με επιτυχία',
          SEND_BUTTON: 'Αποστολή',
          THROBBER: 'Παρακαλώ περιμένετε...',
          MESSAGE_LABEL: 'Μήνυμα:',
          EMAIL_LABEL: 'Το e-mail σας:',
          NAME_LABEL: 'Το όνομά σας:',
          OFFLINE_HEADER: 'Φόρμα επικοινωνίας',
          OFFLINE_TEXT:
            'Βρισκόμαστε εκτός σύνδεσης αυτήν τη στιγμή. Παρακαλώ αφήστε το μήνυμά σας σας και εμείς θα επικοινωνήσουμε μαζί σας.',
          PAGE_TITLE: 'Live Chat',
          URL_NEW_TAB: 'Ανοιγμα συνδέσμου σε νέο Tab',
          TITLE_NEW_TAB: 'σε νέο Tab',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' πληκτρολογεί',
          PROMPT_LABEL: "'Ο σύμβουλος μπορεί να σας καθοδηγήσει. Επιτρέπετε;'",
          PROMPT_BUTTON_YES: 'Ναι',
          PROMPT_BUTTON_NO: 'Όχι',
          NOTIFICATION_HEADER: 'Μήνυμα από CleanSmart',
          OPERATOR_REDIRECT: 'Ο σύμβουλος θέλει να σας προωθήσει',
          OPERATOR_REDIRECT_OK: 'Τώρα συνομιλείτε με',
          OPERATOR_CONNECTING: 'Ο σύμβουλος συνδέεται, παρακαλώ περιμένετε',
          NO_PREFERRED_OPERATOR:
            'o τρέχων σύμβουλος δεν είναι διαθέσιμος, συνδεθήκατε με άλλο σύμβουλο',
          TOO_LONG: 'Μέγιστο μήκος του μηνύματος υπερβαίνει',
          PHONE_LABEL: 'Το τηλέφωνό σας:',
          PHONE_MESSAGE: 'Τηλέφωνο',
          INCORRECT_PHONE: 'Το τηλέφωνο δεν είναι σωστό',
          ALL_OFFLINE: 'Οι σύμβουλοί μας είναι εκτός σύνδεσης',
          LEAVE_MESSAGE: 'Παρακαλώ αφήστε το μήνυμά σας',
          DEFAULT_FIRST_MESSAGE: 'Γεια σας! Πως μπορούμε να σας βοηθήσουμε;',
          COPYRIGHT: 'powered by',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Μεταφέρετε το αρχείο σας εδώ',
          FILE_SENT_OPERATOR: 'Σας έστειλε αρχείο:',
          FILE_SENT_VISITOR: 'Έχετε στείλει αρχείο:',
          FILE_UPLOAD:
            '<span>Ανεβάστε το αρχείο σας</span> (ή μεταφέρετέ το στο παράθυρο συνομιλίας)',
          UPLOAD_LEGEND: 'Το αρχείο αποστέλλεται',
          UPLOAD_ERROR:
            'Σφάλμα κατά την αποστολή - Tο αρχείο είναι πολύ μεγάλο!',
          UPLOAD_ERROR_TYPE:
            'Σφάλμα κατά την αποστολή - Tο αρχείο  δεν υποστηρίζεται!',
          UPLOAD_ERROR_UNKNOWN: 'Άγνωστο σφάλμα. Δοκιμάστε ξανά!',
          BACK_TO_CONVERSATION: 'Επιστροφή στην συνομιλία',
          BACK_TO_OFFLINE: 'Επιστροφή στην φόρμα επικοινωνίας',
          CHOOSE_DEPARTMENT: 'Παρακαλώ επιλέξτε το τμήμα:',
          DEPARTMENTS_BUTTON: 'Επιλέξτε το τμήμα',
          CHOOSE_DEPARTMENT_TITLE: 'Επιλέξτε το τμήμα',
          CHAT_SEND_TITLE: 'Αποστολή μηνύματος',
          FILE_SEND_TITLE: 'Αποστολή αρχείου',
          RATE_TITLE: 'Βαθμολογήστε τον σύμβουλο',
          HOLD_MESSAGE:
            'Παρακαλώ περιμένετε και θα σας απαντήσουμε το συντομότερο δυνατό',
          LEAVE_CONTACTS:
            'Ο σύμβουλος σας δεν ανταποκρίνεται, παρακαλώ αφήστε το μήνυμά σας',
          PHONE: 'Τηλέφωνο',
          EMAIL: 'E-mail',
          NAME: 'Ονοματεπώνυμο',
          CONTACTS_SUCCESS:
            'Ευχαριστούμε πολύ, ένας σύμβουλος μας θα επικοινωνήσει μαζί σας σύντομα',
          INCORRECT_CONTACTS: 'Παρακαλούμε ελέγξτε τα πεδία',
          TODAY: 'σήμερα',
          YESTERDAY: 'εχθές',
        },
        en: {
          CHAT_LABEL: 'Type your message here',
          YOU_LABEL: 'You',
          EMAIL_INCORRECT: 'The email you specified is incorrect',
          FAILED_TO_SEND: 'Failed to send message',
          INCORRECT_EMAIL: 'The email is incorrect',
          NOT_ALL_FIELDS: 'Not all fields filled',
          MAIL_SUCCESS: 'Your message has been sent successfully',
          MAIL_SENT: 'The message has been sent',
          SEND_BUTTON: 'Send',
          THROBBER: 'Wait please...',
          MESSAGE_LABEL: 'Message',
          EMAIL_LABEL: 'E-mail',
          NAME_LABEL: 'Your name',
          OFFLINE_HEADER: 'Feedback form',
          OFFLINE_TEXT:
            'We are offline at the moment. Please leave a message and we will answer it by email.',
          PAGE_TITLE: 'Live Chat',
          URL_NEW_TAB: 'in a separate tab',
          TITLE_NEW_TAB: 'in a separate tab',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' is typing',
          PROMPT_LABEL:
            "'Operator wants to redirect you to another page. Allow?'",
          PROMPT_BUTTON_YES: 'Yes',
          PROMPT_BUTTON_NO: 'No',
          NOTIFICATION_HEADER: 'Message from operator',
          OPERATOR_REDIRECT: 'Operator wants to switch you',
          OPERATOR_REDIRECT_OK: 'You are now chatting with ',
          OPERATOR_CONNECTING: 'Operator is connecting, please wait',
          NO_PREFERRED_OPERATOR:
            'Current operator is unavailable, connected to another',
          TOO_LONG: 'Maximum message length exceed',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Phone',
          PHONE_MESSAGE: 'Phone',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'The phone is incorrect',
          ALL_OFFLINE: 'Operators offline',
          LEAVE_MESSAGE: 'Leave message',
          DEFAULT_FIRST_MESSAGE: 'Hello! How can I help you?',
          COPYRIGHT: 'powered by',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Drop file here',
          FILE_SENT_OPERATOR: 'Sent file to you:',
          FILE_SENT_VISITOR: 'You sent file:',
          FILE_SENT_DOWNLOAD: 'Download the file',
          MOVE_TO_DEPARTMENTS: 'Choose another department',
          FILE_UPLOAD: '<span>Upload a file</span> (or drag it into chat)',
          UPLOAD_LEGEND: 'Uploading file',
          UPLOAD_ERROR: 'Upload error - file too large',
          UPLOAD_ERROR_TYPE: 'Upload error - file type not supported',
          UPLOAD_ERROR_UNKNOWN: 'Unknown upload error. Try again',
          BACK_TO_CONVERSATION: 'Back to conversation',
          BACK_TO_OFFLINE: 'Back to offline form',
          CHOOSE_DEPARTMENT: 'Please choose department:',
          DEPARTMENTS_BUTTON: 'Choose department',
          CHOOSE_DEPARTMENT_TITLE: 'Choose department',
          CHAT_SEND_TITLE: 'Send message',
          FILE_SEND_TITLE: 'Send file',
          RATE_TITLE: 'Rate operator',
          HOLD_MESSAGE:
            'Please wait, operator will answer you as soon as possible',
          LEAVE_CONTACTS:
            'Operator is not responding, please leave your contacts',
          PHONE: 'Phone',
          EMAIL: 'e-mail',
          NAME: 'Name',
          CONTACTS_SUCCESS: 'Thank you, our manager will contact you soon',
          INCORRECT_CONTACTS: 'Please check highlighted fields',
          OPERATOR: 'Operator',
          PAGE: 'Page',
          TIMEONSITE: 'Time on site',
          BROWSER: 'Browser',
          REFERRER: 'Referrer',
          LOCATION: 'Location',
          NOTDEFINED: 'not defined',
          NOREFERRER: 'direct',
          TODAY: 'today',
          YESTERDAY: 'yesterday',
        },
        es: {
          CHAT_LABEL: 'Escriba un mensaje...',
          YOU_LABEL: 'Usted',
          EMAIL_INCORRECT: 'El correo electrónico especificada no es correcto',
          FAILED_TO_SEND: 'No se pudo enviar mensaje',
          INCORRECT_EMAIL: 'El correo electrónico no es correcto',
          NOT_ALL_FIELDS: 'Hay campos sin rellenar',
          MAIL_SUCCESS: 'Tu mensaje ha sido enviado',
          MAIL_SENT: 'El mensaje ha sido enviado',
          SEND_BUTTON: 'Enviar',
          THROBBER: 'Envío...',
          MESSAGE_LABEL: 'Mensaje',
          EMAIL_LABEL: 'Email',
          NAME_LABEL: 'Nombre',
          OFFLINE_HEADER: 'Formulario de contacto',
          OFFLINE_TEXT:
            'Todos nuestros operadores están actualmente desconectados. Dejar un mensaje y te responderemos en breve.',
          PAGE_TITLE: 'Chat en vivo',
          URL_NEW_TAB: 'en una pestaña independiente',
          TITLE_NEW_TAB: 'en una pestaña independiente',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' responde',
          PROMPT_LABEL: 'El operador ofrece ir a otra página. Acceder',
          PROMPT_BUTTON_YES: 'Si',
          PROMPT_BUTTON_NO: 'No',
          NOTIFICATION_HEADER: 'Mensaje del operador',
          OPERATOR_REDIRECT: 'El operador envía el chat a otro operador',
          OPERATOR_REDIRECT_OK: 'Esta conectando el operador',
          OPERATOR_CONNECTING: 'Esta conectando el operador, espera',
          NO_PREFERRED_OPERATOR:
            'El actual operador no está, usted se conecta a otro operador',
          TOO_LONG: 'Supera longitud máxima del mensaje',
          OFFLINE_HINT: 'Todos los campos son obligatorios',
          PHONE_LABEL: 'Vuestro teléfono',
          PHONE_MESSAGE: 'Teléfono',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'Formato de número no válido',
          ALL_OFFLINE: 'Todos los operadores fuera de línea',
          LEAVE_MESSAGE: 'Publicar un comentario',
          DEFAULT_FIRST_MESSAGE: 'Hola ¿Puedo ayudar?',
          COPYRIGHT: 'consultor online de',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Para enviar un archivo, arrastre el fichero aquí',
          FILE_SENT_OPERATOR: 'Te envió un archivo:',
          FILE_SENT_VISITOR: 'Usted envía un archivo:',
          FILE_UPLOAD:
            '<span>Subir archivo</span> (o arrastrar un archivo en el chat)',
          UPLOAD_LEGEND: 'Subida de archivo',
          UPLOAD_ERROR: 'Error al cargar el archivo - es demasiado grande',
          UPLOAD_ERROR_TYPE:
            'Error al cargar el archivo - tipo de archivo no se admite',
          BACK_TO_CONVERSATION: 'Respaldar a la conversación',
          BACK_TO_OFFLINE: 'Realice una copia de forma offline',
          CHOOSE_DEPARTMENT: 'Seleccione la sección en la que desea aplicar',
          DEPARTMENTS_BUTTON: 'Elija departamento',
          CHOOSE_DEPARTMENT_TITLE: 'Escoja departamento',
          CHAT_SEND_TITLE: 'Enviar mensaje',
          FILE_SEND_TITLE: 'Enviar archivo',
          RATE_TITLE: 'Evaluar el operador',
          HOLD_MESSAGE: 'Por favor espere, un operador le contestará en breve',
          LEAVE_CONTACTS:
            'operador no responde, deja tu contacto y nos pondremos en contacto con usted en breve.',
          PHONE: 'Teléfono',
          EMAIL: 'e-mail',
          NAME: 'Nombre',
          CONTACTS_SUCCESS:
            'Gracias a usted, nuestro personal se comunicará con usted en breve.',
          INCORRECT_CONTACTS: 'Por favor, compruebe su entrada',
          OPERATOR: 'Operador',
          TODAY: 'hoy',
          YESTERDAY: 'ayer',
        },
        fa: {
          CHAT_LABEL: 'پيغامتان را اينجا تايپ کنيد',
          YOU_LABEL: ' شما',
          EMAIL_INCORRECT: ' ایمیلی که وارد کرده اید اشتباه است',
          FAILED_TO_SEND: ' “ارسال ناموفق پیغام',
          INCORRECT_EMAIL: 'ایمیل اشتباه است',
          NOT_ALL_FIELDS: 'همه گزینه ها پر نشده است',
          MAIL_SUCCESS: 'ایمیل شما با موفقیت ارسال شد',
          MAIL_SENT: 'پیغام فرستاده شد',
          SEND_BUTTON: 'ارسال',
          THROBBER: 'لطفا صبر کنید ...',
          MESSAGE_LABEL: 'پیغام:',
          EMAIL_LABEL: 'ایمیل شما:',
          NAME_LABEL: 'نام شما',
          OFFLINE_HEADER: 'فرم نظرسنجی',
          OFFLINE_TEXT:
            'در حال حاضر در دسترس نیستیم. لطفا پیغام خود را بگذارید ما از طریق ایمیل به شما پاسخ خواهیم داد',
          PAGE_TITLE: 'چت آنلاین',
          URL_NEW_TAB: 'در یک تب جداگانه',
          TITLE_NEW_TAB: ' در یک تب جداگانه',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: 'در حال تایپ',
          PROMPT_LABEL:
            "'اجازه می دهید اپراتور شما را به صفحه دیگری منتقل کند؟'",
          PROMPT_BUTTON_YES: 'بله',
          PROMPT_BUTTON_NO: 'خیر',
          NOTIFICATION_HEADER: 'پیغام از اپراتور ',
          OPERATOR_REDIRECT: 'اپراتور می خواهد شما را جابه جا کند',
          OPERATOR_REDIRECT_OK: 'شما در حال چت با',
          OPERATOR_CONNECTING: 'اپراتور در حال اتصال است، لطفا صبر کنید',
          NO_PREFERRED_OPERATOR:
            'اپراتور فعلی در دسترس نیست، به اپراتور دیگر وصل شوید',
          TOO_LONG: 'طول پیام از حد مجاز بیش تر شده است ',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'شماره تلفن شما:',
          PHONE_MESSAGE: 'تلفن',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'شماره تلفن صحیح نمی باشد',
          ALL_OFFLINE: 'اپراتورها افلاین هستند',
          LEAVE_MESSAGE: 'پیغام بگذارید',
          DEFAULT_FIRST_MESSAGE: 'سلام، چه کمکی می توانم به شما بکنم؟',
          COPYRIGHT: 'طراحی شده توسط',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'فایل را اینجا بگذارید',
          FILE_SENT_OPERATOR: 'فایلی برای شما ارسال شد:',
          FILE_SENT_VISITOR: 'شما فایلی را ارسال کردید:',
          FILE_UPLOAD:
            '<span>یک فایل بارگذاری کنید</span> (یا آن را داخل چت بگذارید)',
          UPLOAD_LEGEND: 'بارگذاری فایل',
          UPLOAD_ERROR: 'خطای بارگذاری- فایل خیلی بزرگ است',
          UPLOAD_ERROR_TYPE: 'خطای بارگذاری- نوع فایل پشتیبانی نمی شود',
          UPLOAD_ERROR_UNKNOWN: 'خطای ناشناخته بارگذاری. دوباره تلاش کنید',
          BACK_TO_CONVERSATION: 'بازگشت به مکالمه',
          BACK_TO_OFFLINE: 'بازگشت به فرم آفلاین',
          CHOOSE_DEPARTMENT: 'لطفا گروه را انتخاب کنید',
          DEPARTMENTS_BUTTON: 'انتخاب گروه',
          CHOOSE_DEPARTMENT_TITLE: 'انتخاب گروه',
          CHAT_SEND_TITLE: 'ارسال پیام',
          FILE_SEND_TITLE: 'ارسال فایل',
          RATE_TITLE: 'اپراتور امتیاز',
          RTL: 'RTL',
          OPERATOR: '',
          TODAY: 'امروز',
          YESTERDAY: 'دیروز',
        },
        fi: {
          CHAT_LABEL: 'Kirjoita viesti...',
          YOU_LABEL: 'Te',
          EMAIL_INCORRECT: 'Annoit olematon e-mail',
          FAILED_TO_SEND: 'Viestin l?hetys ep?onnistui',
          INCORRECT_EMAIL: 'S?hk?postiosoitteen muoto ei kelpaa',
          NOT_ALL_FIELDS: 'Ette t?ytt?nyt kaikki kent?t',
          MAIL_SUCCESS: 'Tejd?n viestinne l?hetetty',
          MAIL_SENT: 'Viesti on l?hetetty',
          SEND_BUTTON: 'L?hett?',
          THROBBER: 'L?hett?...',
          MESSAGE_LABEL: 'Viesti',
          EMAIL_LABEL: 'Teid?n e-mail',
          NAME_LABEL: 'Teid?n nimi',
          OFFLINE_HEADER: 'Palautelomake',
          OFFLINE_TEXT:
            'Kaikki operaattorit ovat t?ll? hetkell? kirjautunut. J?t? viesti ja me vastaamme sinulle.',
          PAGE_TITLE: 'Tukineuvoja online tilassa',
          URL_NEW_TAB: 'erillisess? v?lilehdess?',
          TITLE_NEW_TAB: 'erillisess? v?lilehdess?',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' vastauksia',
          PROMPT_LABEL: 'Operaattori tarjoaa menn? toiselle sivulle. Menn??',
          PROMPT_BUTTON_YES: 'Kyll?',
          PROMPT_BUTTON_NO: 'Ei',
          NOTIFICATION_HEADER: 'operaattorin viesti',
          OPERATOR_REDIRECT:
            'Operaattori l?hett?? chat toiselle operaattorille',
          OPERATOR_REDIRECT_OK: 'operaattori yhdistyy',
          OPERATOR_CONNECTING: 'operaattori yhdistyy, odotaa',
          NO_PREFERRED_OPERATOR:
            'Nykyinen operaattori ei ole paikallaan, olet yhteydess? toisen operaattorin',
          TOO_LONG: 'Ylitt?nyt enimm?ispituus viestien l?hett?miseen',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Teid?n puhelin numero',
          PHONE_MESSAGE: 'puhelin numero',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'puhelin muoto ei kelpaa',
          ALL_OFFLINE: 'Kaikki operaattorit Ofline',
          LEAVE_MESSAGE: 'J?tt? viestin',
          DEFAULT_FIRST_MESSAGE: 'Hei, voinko auttaa jotenkin?',
          COPYRIGHT: 'Online Konsultti',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Jos haluat l?hett?? tiedoston, ved? t?h?n',
          FILE_SENT_OPERATOR: 'l?hettin teille tiedoston:',
          FILE_SENT_VISITOR: 'Te l?hettit tiedoston:',
          FILE_UPLOAD:
            '<span>Ladatta tiedosaton</span> (tai vet?m?ll? tiedosto chat)',
          UPLOAD_LEGEND: 'ladata tiedosto',
          UPLOAD_ERROR: 'Virhe tiedoston ladattaessa - liian suuri',
          UPLOAD_ERROR_TYPE:
            'Virhe tiedoston ladattaessa - tiedostotyyppi? ei tukea',
          BACK_TO_CONVERSATION: 'Takaisin keskusteluun',
          BACK_TO_OFFLINE: 'Takaisin offline muodossa',
          CHOOSE_DEPARTMENT: 'Valitse osio, jonka haluat hakea',
          DEPARTMENTS_BUTTON: 'Valitse osasto',
          CHOOSE_DEPARTMENT_TITLE: 'Valitse osasto',
          CHAT_SEND_TITLE: 'L?het? viesti',
          FILE_SEND_TITLE: 'L?het? tiedosto',
          RATE_TITLE: '??nest? toimija',
          HOLD_MESSAGE: 'Odota, operaattori vastaa sinulle pian',
          LEAVE_CONTACTS:
            'operaattori ei vastaa, j?t? yhteystietosi ja otamme sinuun yhteytt? pian.',
          PHONE: 'Puhelin',
          EMAIL: 'e-mail',
          NAME: 'Nimi',
          CONTACTS_SUCCESS: 'Kiitos, henkil?kunta ottaa sinuun pian yhteytt?.',
          INCORRECT_CONTACTS: 'Tarkista input',
          OPERATOR: 'Operaattori',
          TODAY: 'tänään',
          YESTERDAY: 'eilen',
        },
        ge: {
          CHAT_LABEL: 'შეტყობინების შეყვანა...',
          YOU_LABEL: 'თქვენ',
          EMAIL_INCORRECT: 'თქვენ შეიყვანეთ არარსებული  e-mail',
          FAILED_TO_SEND: 'შეტყობინების გაგზავნა ვერ მოხერხდა',
          INCORRECT_EMAIL: ' არასწორი e-mail',
          NOT_ALL_FIELDS: 'თქვენ არ შეავსეთ ყველა ველი',
          MAIL_SUCCESS: 'თქვენი შეტყობინება გაგზავნილია',
          MAIL_SENT: 'შეტყობინება გაგზავნილია',
          SEND_BUTTON: 'გაიგზავნოს',
          THROBBER: 'გაგზავნა',
          MESSAGE_LABEL: 'შეტყობინება',
          EMAIL_LABEL: 'E-mail',
          NAME_LABEL: 'თქვენი სახელი',
          OFFLINE_HEADER: 'უკუკავშირის ფორმა',
          OFFLINE_TEXT:
            'ამჟამად ყველა ოპერატორი დაკავებულია. დატოვეთ შეტყობინება და ჩვენ უახლოეს დროში  გიპასუხებთ .',
          PAGE_TITLE: 'ონლაინ კონსულტანტი',
          URL_NEW_TAB: 'ცალკე დანართში',
          TITLE_NEW_TAB: 'ცალკე დანართში',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' პასუხობს',
          PROMPT_LABEL:
            'ოპერატორი გთავაზობთ სხვა გვერდზე გადასვლას. გადახვედით?',
          PROMPT_BUTTON_YES: 'დიახ',
          PROMPT_BUTTON_NO: 'არა',
          NOTIFICATION_HEADER: 'ოპერატორის შეტყობინება',
          OPERATOR_REDIRECT:
            'ოპერატორი გადასცემს ჩატს სხვა ოპერატორს  OPERATOR_REDIRECT_OK',
          OPERATOR_CONNECTING: 'თქვენ დაგიკავშირდებათ  ოპერატორი, დაელოდეთ',
          NO_PREFERRED_OPERATOR:
            'მიმდინარე ოპერატორი დაკავებულია, დაკავშირებული ხართ სხვა ოპერატორთან',
          TOO_LONG:
            'გადაჭარბებულია გასაგზავნი შეტყობინების მაქსიმალური რაოდენობა',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'ტელეფონი',
          PHONE_MESSAGE: 'ტელეფონი',
          OFFLINE_BODY_HEADER1: 'მომხმარებლის Email',
          OFFLINE_BODY_HEADER2:
            'წერილის პასუხი გაიგზავნება მომხმარებლის ფოსტაზე',
          OFFLINE_FROM_VISITOR: 'მომხმარებლის შეტყობინება',
          OFFLINE_VISITOR_NAME: 'მომხმარებლის სახელი',
          INCORRECT_PHONE: 'არასწორი ტელეფონი',
          ALL_OFFLINE: 'ყველა ოპერატორი დაკავებულია',
          LEAVE_MESSAGE: 'დატოვეთ შეტყობინება',
          DEFAULT_FIRST_MESSAGE: 'გამარჯობა, შემიძლია დაგეხმაროთ?',
          COPYRIGHT: 'მოთხოვნა შესრულებულია',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'გასაგზავნი  ფაილი აქ გადმოიტანეთ',
          FILE_SENT_OPERATOR: 'ფაილი გამოგზავნილია:',
          FILE_SENT_VISITOR: 'თქვენ გამოაგზავნეთ ფაილი:',
          FILE_SENT_DOWNLOAD: 'ფაილის გადმოწერა',
          MOVE_TO_DEPARTMENTS: 'აირჩიეთ სხვა ფაილი',
          FILE_UPLOAD:
            '<span>ატვირთეთ ფაილი</span> (ან გადაიტანეთ ფაილი ჩატში)',
          UPLOAD_LEGEND: 'ფაილის ატვირთვა',
          UPLOAD_ERROR: 'შეცდომა ფაილის ატვირთვისას - ძალიან დიდი მოცულობა',
          UPLOAD_ERROR_TYPE:
            'შეცდომა ფაილის ატვირთვისას - არასწორი ფაილის ფორმატი',
          UPLOAD_ERROR_UNKNOWN: ' შეცდომა, ხელმეორედ სცადეთ',
          BACK_TO_CONVERSATION: 'დაუბრუნდით დიალოგს',
          BACK_TO_OFFLINE: 'ოფლაინ-რეჟიმში დაბრუნება',
          CHOOSE_DEPARTMENT: 'აირჩიეთ შესაბამისი განყოფილება:',
          DEPARTMENTS_BUTTON: 'აირჩიეთ ღილაკი',
          CHOOSE_DEPARTMENT_TITLE: 'აირჩიეთ განყოფილება',
          CHAT_SEND_TITLE: 'გააგზავნეთ შეტყობინება',
          FILE_SEND_TITLE: 'გააგზავნეთ ფაილი',
          RATE_TITLE: 'შეაფასეთ ოპერატორი',
          HOLD_MESSAGE: 'გთხოვთ დაელოდოთ, ოპერატორი მალე გიპასუხებთ',
          LEAVE_CONTACTS:
            'ოპერატორი დაკავებულია, დატოვეთ თქვენი საკონტაქტო ინფორმაცია  და უახლოეს დროში დაგიკავშირდებით.',
          PHONE: 'ტელეფონი',
          EMAIL: 'e-mail',
          NAME: 'სახელი',
          CONTACTS_SUCCESS:
            'მადლობა, ჩვენი თანამშრომელი უმოკლეს დროში დაგიკავშირდებათ.',
          INCORRECT_CONTACTS: 'გთხოვთ შეამოწმოთ შეყვანილი მონაცემების სისწორე',
          OPERATOR: 'ოპერატორი',
          PAGE: 'გვერდი',
          TIMEONSITE: 'დრო საიტზე',
          BROWSER: 'ბრაუზერი',
          REFERRER: 'წყარო',
          LOCATION: 'ქალაქი',
          NOTDEFINED: ' არ არის დადგენილი',
          NOREFERRER: 'შესვლა',
          TODAY: 'დღეს',
          YESTERDAY: 'გუშინ',
        },
        he: {
          CHAT_LABEL: 'הקלד את הודעתך',
          YOU_LABEL: 'את/ה',
          EMAIL_INCORRECT: 'כתובת אימייל לא חוקית',
          FAILED_TO_SEND: 'שליחת ההודעה נכשלה',
          INCORRECT_EMAIL: 'האימייל שגוי',
          NOT_ALL_FIELDS: 'לא כל השדות מלאים',
          MAIL_SUCCESS: 'הודעתך נשלחה בהצלחה',
          MAIL_SENT: 'ההודעה נשלחה',
          SEND_BUTTON: 'לשלוח',
          THROBBER: 'המתן בבקשה',
          MESSAGE_LABEL: 'הודעה',
          EMAIL_LABEL: 'אימייל',
          NAME_LABEL: 'שמך',
          OFFLINE_HEADER: 'משוב',
          OFFLINE_TEXT:
            'אנחנו לא מחוברים כרגע. אנא השאירו הודעה ואנו נחזור בהקדם',
          PAGE_TITLE: "צ'אט",
          URL_NEW_TAB: 'בכרטיסייה נפרדת',
          TITLE_NEW_TAB: 'בכרטיסייה נפרדת',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: 'מקליד/ה',
          PROMPT_LABEL: 'הנציג רוצה להפנות אותך לדף אחר.  האם להתיר?',
          PROMPT_BUTTON_YES: 'כן',
          PROMPT_BUTTON_NO: 'לא',
          NOTIFICATION_HEADER: 'הודעה מהנציג',
          OPERATOR_REDIRECT: "הצ'אט מועבר לנציג אחר",
          OPERATOR_REDIRECT_OK: 'את/ה משוחח/ת עם הנציג',
          OPERATOR_CONNECTING: 'הנציג מתחבר, בבקשה המתן',
          NO_PREFERRED_OPERATOR:
            'הנציג הנוכחי אינו זמין, את/ה מחובר/ת לנציג אחר',
          TOO_LONG: 'אורך הודעתך עולה על האורך המרבי המותר ',
          OFFLINE_HINT: 'כל השדות הם חובה',
          PHONE_LABEL: 'טלפון',
          PHONE_MESSAGE: 'טלפון',
          OFFLINE_BODY_HEADER1: 'אימייל הגולש',
          OFFLINE_BODY_HEADER2: 'תגובתך להודעה זו תישלח אל הגולש',
          OFFLINE_FROM_VISITOR: 'הודעה מהגולש',
          OFFLINE_VISITOR_NAME: 'שם הגולש',
          INCORRECT_PHONE: 'הטלפון שגוי',
          ALL_OFFLINE: 'נציגים במצב לא מקוון',
          LEAVE_MESSAGE: 'להשאיר הודעה',
          DEFAULT_FIRST_MESSAGE: 'שלום! איך אפשר לעזור לך?',
          COPYRIGHT: 'באינטרנט עוזר',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'זרוק את הקובץ כאן',
          FILE_SENT_OPERATOR: 'נשלח אליך',
          FILE_SENT_TO_OPERATOR: 'שלחת את הקובץ',
          FILE_SENT_VISITOR: 'שלחת את הקובץ',
          FILE_SENT_VISITOR_MTR: 'שלחת את הקובץ',
          FILE_SENT_DOWNLOAD: 'הורד את הקובץ',
          MOVE_TO_DEPARTMENTS: 'בחר מחלקה אחרת',
          FILE_UPLOAD: "<span>מעלה קובץ</span> (או לגרור אותו לצ'אט)",
          UPLOAD_LEGEND: 'מעלה קובץ',
          UPLOAD_ERROR: 'שגיאת העלאה - קובץ גדול מדי',
          UPLOAD_ERROR_TYPE: 'שגיאת העלאה - סוג הקובץ אינו נתמך',
          UPLOAD_ERROR_UNKNOWN: 'שגיאת העלאה לא ידועה. נסה שוב',
          BACK_TO_CONVERSATION: 'חזרה לשיחה',
          BACK_TO_OFFLINE: 'חזרה לטופס לא מקוון',
          CHOOSE_DEPARTMENT: 'בבקשה, בחר מחלקה',
          DEPARTMENTS_BUTTON: 'בחר מחלקה',
          CHOOSE_DEPARTMENT_TITLE: 'בחר מחלקה',
          CHAT_SEND_TITLE: 'לשלוח הודעה',
          FILE_SEND_TITLE: 'שלח קובץ',
          RATE_TITLE: 'דרג את הנציג',
          HOLD_MESSAGE: 'המתן בבקשה, הנציג יענה לך בהקדם האפשרי',
          LEAVE_CONTACTS: 'הנציג אינו מגיב, בבקשה, השאר את פרטי הקשר שלך',
          PHONE: 'טלפון',
          EMAIL: 'אימייל',
          NAME: 'שם',
          CONTACTS_SUCCESS: 'תודה, אנחנו ניצור איתך קשר בקרוב',
          INCORRECT_CONTACTS: 'בבקשה, בדוק פרטים שהזנת',
          OPERATOR: 'נציג',
          PAGE: 'דף',
          TIMEONSITE: 'זמן באתר',
          BROWSER: 'דפדפן',
          REFERRER: 'מפנה',
          LOCATION: 'מיקום',
          NOTDEFINED: 'לא מוגדר',
          NOREFERRER: 'ישיר',
          TODAY: 'היום',
          YESTERDAY: 'אתמול',
          RTL: 'RTL',
        },
        hu: {
          CHAT_LABEL: 'Ide írja az üzenetét',
          YOU_LABEL: 'Ön',
          EMAIL_INCORRECT: 'Helytelen e-mail címet adott meg',
          FAILED_TO_SEND: 'Nem sikerült elüldeni az üzenetet',
          INCORRECT_EMAIL: 'Az e-mail cím helytelen',
          NOT_ALL_FIELDS: 'Nincs kitöltve minden mező',
          MAIL_SUCCESS: 'Az üzenetét sikeresen elküldtük',
          MAIL_SENT: 'Az üzenet elküldésre került',
          SEND_BUTTON: 'Küldés',
          THROBBER: 'Kérjük, várjon...',
          MESSAGE_LABEL: 'Üzenet',
          EMAIL_LABEL: 'Az Ön e-mail címe',
          NAME_LABEL: 'Az Ön neve',
          OFFLINE_HEADER: 'Visszajelző',
          OFFLINE_TEXT:
            'Jelenleg offline vagyunk. Kérjük, hagyjon egy üzenetet, és e-mailben válaszolunk rá.',
          PAGE_TITLE: 'Éló csevegés',
          URL_NEW_TAB: 'új lapon',
          TITLE_NEW_TAB: 'új lapon',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' gépel',
          PROMPT_LABEL:
            "'Munkatársunk át szeretné Önt irányítani egy másik weblapra. Megengedi?'",
          PROMPT_BUTTON_YES: 'Igen',
          PROMPT_BUTTON_NO: 'Nem',
          NOTIFICATION_HEADER: 'Üzenet az ügyfélszolgálattól ',
          OPERATOR_REDIRECT: 'Másik munkatárshoz szeretnénk irányítani',
          OPERATOR_REDIRECT_OK:
            'Jelenleg a következő munkatársunkkal beszélget: ',
          OPERATOR_CONNECTING: 'A munkatársunk kapcsolódik, türelmét kérjük',
          NO_PREFERRED_OPERATOR:
            'Munkatársunk nem elérhető, másik munkatársunkhoz irányítottuk',
          TOO_LONG: 'Az üzenet túl hosszú',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'az Ön telefonszáma',
          PHONE_MESSAGE: 'Telefonszám',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'A telefonszám helytelen',
          ALL_OFFLINE: 'Munkatársaink nincsenek bejelentkezve',
          LEAVE_MESSAGE: 'Hagyjon üzenetet',
          DEFAULT_FIRST_MESSAGE: 'Üdvözlöm! Miben segíthetek?',
          COPYRIGHT: 'fejlesztette:',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Ide húzza be a fájlt',
          FILE_SENT_OPERATOR: 'Az Önnek küldött fájl:',
          FILE_SENT_VISITOR: 'Az Ön fájlja:',
          FILE_UPLOAD:
            '<span>Fájl feltöltése</span> (vagy húzza be a csevegőablakba)',
          UPLOAD_LEGEND: 'Fájl feltöltése',
          UPLOAD_ERROR: 'Feltöltési hiba - a fájl túl nagy',
          UPLOAD_ERROR_TYPE: 'Feltöltési hiba - a fájltípus nem támogatott',
          UPLOAD_ERROR_UNKNOWN:
            'Ismeretlen feltöltési hiba. Próbálja meg újra.',
          BACK_TO_CONVERSATION: 'Vissza a csevegéshez',
          BACK_TO_OFFLINE: 'Vissza az offline űrlaphoz',
          CHOOSE_DEPARTMENT: 'Kérjük, válasszon részleget:',
          DEPARTMENTS_BUTTON: 'Részleg kiválasztása',
          CHOOSE_DEPARTMENT_TITLE: 'Részleg kiválasztása',
          CHAT_SEND_TITLE: 'Üzenet küldése',
          FILE_SEND_TITLE: 'Fájl küldése',
          RATE_TITLE: 'Munkatársunk értékelése',
          HOLD_MESSAGE:
            'Please wait, operator will answer you as soon as possible',
          LEAVE_CONTACTS:
            'Operator is not responding, please leave your contacts',
          PHONE: 'Telefonszám',
          EMAIL: 'e-mail',
          NAME: 'Name',
          CONTACTS_SUCCESS: 'Thank you, our manager will contact you soon',
          INCORRECT_CONTACTS: 'Please check highlighted fields',
          OPERATOR: 'Operátor',
          TODAY: 'ma',
          YESTERDAY: 'tegnap',
        },
        id: {
          CHAT_LABEL: 'Ketik pesan anda di sini',
          YOU_LABEL: 'Anda',
          EMAIL_INCORRECT: 'Email yang Anda berikan salah!',
          FAILED_TO_SEND: 'Gagal mengirim pesan',
          INCORRECT_EMAIL: 'Email Anda salah',
          NOT_ALL_FIELDS: 'Kolom belum terisi',
          MAIL_SUCCESS: 'Pesan Anda berhasil',
          MAIL_SENT: 'Pesan Anda sudah terkirim',
          SEND_BUTTON: 'Kirim',
          THROBBER: 'Mohon menunggu...',
          MESSAGE_LABEL: 'Pesan',
          EMAIL_LABEL: 'Label e-mail',
          NAME_LABEL: 'Nama',
          OFFLINE_HEADER: 'Saran dan pesan',
          OFFLINE_TEXT:
            'Kami offline sementara ini. Mohon tinggalkan pesan dan kami akan segera jawab melalui email.',
          PAGE_TITLE: 'Live Chat',
          URL_NEW_TAB: 'in a separate tab',
          TITLE_NEW_TAB: 'in a separate tab',
          WEBSITE: 'http://redhelper.com',
          TYPING_LABEL: ' mengetik',
          PROMPT_LABEL: "'Operator ingin mengalihkan ke jalur lain. Allow?'",
          PROMPT_BUTTON_YES: 'Ya',
          PROMPT_BUTTON_NO: 'Tidak',
          NOTIFICATION_HEADER: 'Pesan dari Operator',
          OPERATOR_REDIRECT: 'Operator ingin berbicara',
          OPERATOR_REDIRECT_OK: 'Anda sedang berbicara dengan',
          OPERATOR_CONNECTING: 'Operator dihubungkan, mohon menunggu',
          NO_PREFERRED_OPERATOR:
            'Operator tidak tersedia, terhubung dengan lainnya.',
          TOO_LONG: 'Melebihi batas kolom',
          PHONE_LABEL: 'Telepon',
          PHONE_MESSAGE: 'Telepon',
          OFFLINE_BODY_HEADER1: 'Email pembaca',
          OFFLINE_BODY_HEADER2: 'Pesan anda akan disampaikan.',
          OFFLINE_FROM_VISITOR: 'Pesan',
          OFFLINE_VISITOR_NAME: 'Nama',
          INCORRECT_PHONE: 'Nomor telepon anda salah',
          ALL_OFFLINE: 'Operator sedang offline',
          LEAVE_MESSAGE: 'Tinggalkan pesan',
          DEFAULT_FIRST_MESSAGE: 'Hello! Bagaimana kami bisa membantu?',
          COPYRIGHT: 'powered by',
          COPYRIGHT_NAME: '<span>Red</span>Bantuan',
          DROP_HERE: 'TInggalkan pesan di sini',
          FILE_SENT_OPERATOR: 'File dikirim ke anda:',
          FILE_SENT_VISITOR: 'Anda mengirim file:',
          FILE_SENT_DOWNLOAD: 'Download file',
          MOVE_TO_DEPARTMENTS: 'Pilih bagian lainnya',
          FILE_UPLOAD: '<span>Upload file</span> (atau drag di chat)',
          UPLOAD_LEGEND: 'Uploading file',
          UPLOAD_ERROR: 'Upload error - file terlalu besar',
          UPLOAD_ERROR_TYPE: 'Tipe file tidak mendukung',
          UPLOAD_ERROR_UNKNOWN: 'Coba lagi',
          BACK_TO_CONVERSATION: 'Back to conversation',
          BACK_TO_OFFLINE: 'Back to offline form',
          CHOOSE_DEPARTMENT: 'Pilih bagian lain:',
          DEPARTMENTS_BUTTON: 'Pilih bagian',
          CHOOSE_DEPARTMENT_TITLE: 'Pilih bagian',
          CHAT_SEND_TITLE: 'Kirim pesan',
          FILE_SEND_TITLE: 'Kirim',
          RATE_TITLE: 'Nilai operator',
          HOLD_MESSAGE: 'Mohon menunggu, operator akan segera menjawab',
          LEAVE_CONTACTS: 'Operator sibuk, mohon tinggalkan pesan',
          PHONE: 'No Telepon',
          EMAIL: 'E-mail',
          NAME: 'Nama',
          CONTACTS_SUCCESS: 'Terima kasih,manager akan segera mengontak anda',
          INCORRECT_CONTACTS: 'Please check highlighted fields',
          OPERATOR: 'Operator',
          PAGE: 'Halaman',
          TIMEONSITE: 'Waktu',
          BROWSER: 'Browser',
          REFERRER: 'Referrer',
          LOCATION: 'Lokasi',
          NOTDEFINED: 'Tidak terdefinisi',
          NOREFERRER: 'Langsung',
        },
        it: {
          CHAT_LABEL: 'Scrivere messaggio',
          YOU_LABEL: 'Lei',
          EMAIL_INCORRECT: 'Ha inserito una e-mail inesistente',
          FAILED_TO_SEND: "Il messaggio non e' statto inviato",
          INCORRECT_EMAIL: "E-mail address e' sbagliato",
          NOT_ALL_FIELDS: 'Non ha compilato tutti i campi',
          MAIL_SUCCESS: "Il suo messaggio e' stato inviato",
          MAIL_SENT: "Il messaggio e' stato inviato",
          SEND_BUTTON: 'Inviare',
          THROBBER: 'Invio',
          MESSAGE_LABEL: 'Messaggio',
          EMAIL_LABEL: 'E-mail',
          NAME_LABEL: 'Nome',
          OFFLINE_HEADER: 'Modulo di contatto',
          OFFLINE_TEXT:
            "Tutti i nostri assistenti sono offline. Lasci un messaggio e le risponderemo al piu' presto",
          PAGE_TITLE: 'Consulente online',
          URL_NEW_TAB: 'In una nuova finestra',
          TITLE_NEW_TAB: 'In una nuova finestra',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' risponde',
          PROMPT_LABEL: "L'assistente chiede di aprire una nuova finestra",
          PROMPT_BUTTON_YES: 'Si',
          PROMPT_BUTTON_NO: 'No',
          NOTIFICATION_HEADER: "Messaggio da parte dell'assistente",
          OPERATOR_REDIRECT:
            "L'assistente la sta passando ad un altro assistente",
          OPERATOR_REDIRECT_OK: "L'assistente si e' collegato con lei:",
          OPERATOR_CONNECTING:
            "Aspettare che l'assistente si sta collegando con lei",
          NO_PREFERRED_OPERATOR:
            "Questo assistente e' assente, lei e' stato collegato ad un altro assistente",
          TOO_LONG: 'Ha superato il numero di caratteri per questo messaggio',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Numero di telefono',
          PHONE_MESSAGE: 'Numero di telefono',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: "Il numero di telefono e' sbagliato",
          ALL_OFFLINE: 'Tutti gli assistenti sono offline',
          LEAVE_MESSAGE: 'Lasciare un messaggio',
          DEFAULT_FIRST_MESSAGE: 'Salve, come posso aitarla?',
          COPYRIGHT: 'Assistente online di',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Per inviare ul file trascinarlo qui',
          FILE_SENT_OPERATOR: "Il file e' stato inviato:",
          FILE_SENT_VISITOR: "Il suo file e' stato inviato:",
          FILE_UPLOAD:
            '<span>scaricare un file</span> (trascinare il file in chat)',
          UPLOAD_LEGEND: 'Il file si sta scaricando',
          UPLOAD_ERROR:
            'Errore durante lo scaricamento – supera il volume consentito',
          UPLOAD_ERROR_TYPE:
            "Errore durante lo scaricamento – il tipo di file non e' supportato",
          UPLOAD_ERROR_UNKNOWN: 'Errore sconosciuto. Riprovare di nuovo',
          BACK_TO_CONVERSATION: 'Tornare alla conversazione',
          BACK_TO_OFFLINE: 'Titornare al modulo di contatto',
          CHOOSE_DEPARTMENT: 'Selezionare la sezione a cui vuole rivorgersi:',
          DEPARTMENTS_BUTTON: 'Selezionare la sezione',
          CHOOSE_DEPARTMENT_TITLE: 'Selezionare la sezione',
          CHAT_SEND_TITLE: 'Inviare il messaggio',
          FILE_SEND_TITLE: 'Inviare il file',
          RATE_TITLE: "Dare un voto all'assistente",
          HOLD_MESSAGE:
            "Aspettare per favore, l'assistente le rispondera' al piu' presto",
          LEAVE_CONTACTS:
            "L'assistente non risponde, lasciare il suo contatto e verra' ricontattato al piu' presto",
          PHONE: 'Numero di telefono',
          EMAIL: 'E-mail',
          NAME: 'Nome',
          CONTACTS_SUCCESS:
            "Grazie, il nosto assistente la contattera' al piu' presto",
          INCORRECT_CONTACTS: 'Controllare per favore se i dati sono corretti',
          OPERATOR: "L'assistente",
          TODAY: 'oggi',
          YESTERDAY: 'ieri',
        },
        kk: {
          CHAT_LABEL: 'Мәлімдеме еңгізу...',
          YOU_LABEL: 'Сіз',
          EMAIL_INCORRECT: 'Сіз жоқ e-mail адресін енгіздіңіз',
          FAILED_TO_SEND: 'Хабарлама жіберлімеді',
          INCORRECT_EMAIL: 'E-mail адресінің форматы дұрыс емес',
          NOT_ALL_FIELDS: 'Сіз барлық алаңды толдырмадыңыз',
          MAIL_SUCCESS: 'Сіздің хабарламаңыз жіберілді',
          MAIL_SENT: 'Хабарлама жіберілді',
          SEND_BUTTON: 'Жіберу',
          THROBBER: 'Жіберу',
          MESSAGE_LABEL: 'Хабарлама',
          EMAIL_LABEL: 'Сіздің e-mail',
          NAME_LABEL: 'Сіздің атыңыз',
          OFFLINE_HEADER: 'Керібайланыстүрі',
          OFFLINE_TEXT:
            'Біздің операторлар қазір желіде емес, хабаралама тастап кетіңіз, жақын арада біз жауап қайтарамыз',
          PAGE_TITLE: 'Онлайн кеңесші',
          URL_NEW_TAB: 'Косымша бетте',
          TITLE_NEW_TAB: 'қосымша бетте',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: 'жауап береді',
          PROMPT_LABEL: 'оператор сізді басқа бетке өтуді ұсынады. Өтесіз бе',
          PROMPT_BUTTON_YES: 'Иә',
          PROMPT_BUTTON_NO: 'Жоқ',
          NOTIFICATION_HEADER: 'Оператордан хабарлама',
          OPERATOR_REDIRECT: 'Оператор чатты басқа операторға береді',
          OPERATOR_REDIRECT_OK: 'Сізге оператор қосылды',
          OPERATOR_CONNECTING: 'Сізге оператор қосылуда, күте тұрыңыз',
          NO_PREFERRED_OPERATOR:
            'Ағымдағы оператор орнында емес, сіз басқа операторға қосылдыңыз',
          TOO_LONG: 'Хабарлама жіберудің максималды ұзындығы артыпкетті',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Сіздің телефоныңыз',
          PHONE_MESSAGE: 'Телефон',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'Телефонның пішімі дурыс емес',
          ALL_OFFLINE: 'Барлық операторлар желіде емес',
          LEAVE_MESSAGE: 'Хабарлама қалдыру',
          DEFAULT_FIRST_MESSAGE: 'Сәлеметсізбе, мен сізге көмектесе алам ба',
          COPYRIGHT: 'Онлайн кенесші',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Файлды жіберу үшін оны мына жерге апарыңыз',
          FILE_SENT_OPERATOR: 'Файлды сізге жібердім',
          FILE_SENT_VISITOR: 'Ссіз файылды жібердіңіз',
          FILE_UPLOAD:
            '<span> файлды қотару </span>  (немесе файлды чатқа апарыңыз)',
          UPLOAD_LEGEND: 'Файлды қотару',
          UPLOAD_ERROR: 'Файлды қотыру кезіндегі қате-өте улкен ауқым',
          UPLOAD_ERROR_TYPE:
            'Файлды қотыру кезіндегі қате-файлдың бұл түрі қолдауға жатпайды',
          UPLOAD_ERROR_UNKNOWN: 'Білгісіз қате, тағы бір тырысып көріңіз',
          BACK_TO_CONVERSATION: 'Диалогке оралу',
          BACK_TO_OFFLINE: 'Офлайн формасына оралу',
          CHOOSE_DEPARTMENT: 'Хабарлама алатын бөлімді таңдаңыз',
          DEPARTMENTS_BUTTON: 'Бөлімді таңдау',
          CHOOSE_DEPARTMENT_TITLE: 'Бөлімді таңдау',
          CHAT_SEND_TITLE: 'Хабарлама жіберу',
          FILE_SEND_TITLE: 'Файл жіберу',
          RATE_TITLE: 'Операторды бағалау',
          HOLD_MESSAGE:
            'Етінеміз, күтетұрыңыз, оператор жақын арада сізге жауап береді',
          LEAVE_CONTACTS:
            'Оператор жауап бермейді, өзіңіздің байланыс телефоныңызды тастап кетсеңіз біз жақын арада сізбен байланысамыз',
          PHONE: 'Телефон',
          EMAIL: 'Электрондықпоштаадресі (e-mail)',
          NAME: 'Аты',
          CONTACTS_SUCCESS:
            'Рахмет, біздің қызметкеріміз сізбен жақын арада байланысады',
          INCORRECT_CONTACTS:
            'Өтінеміз, енгізілген мағлұматтардың дұрыстығын тексеріңіз',
          OPERATOR: 'Оператор',
          TODAY: 'бүгін',
          YESTERDAY: 'кеше',
        },
        lt: {
          CHAT_LABEL: 'Palikite savo žinutę čia',
          YOU_LABEL: 'Jūs',
          EMAIL_INCORRECT: 'Jūsų nurodėtė neteisingą el.paštą',
          FAILED_TO_SEND: 'Nepavyko išsiųsti žinutės',
          INCORRECT_EMAIL: 'Neteisingas el.paštas',
          NOT_ALL_FIELDS: 'Užpildyti ne visi laukeliai',
          MAIL_SUCCESS: 'Jūsų žinutė buvo sėkmingai išsiųsta',
          MAIL_SENT: 'Žinutė išsiųsta',
          SEND_BUTTON: 'Siųsti',
          THROBBER: 'Prašome palaukti...',
          MESSAGE_LABEL: 'Žinutė',
          EMAIL_LABEL: 'Jūsų el.paštas',
          NAME_LABEL: 'Jūsų vardas',
          OFFLINE_HEADER: 'Atsiliepimo forma',
          OFFLINE_TEXT:
            'Šiuo metu mes neprisijungę. Prašome palikti žinutę ir mes atsakysime jums el.laišku.',
          PAGE_TITLE: 'Live Chat',
          URL_NEW_TAB: 'atskiroje kortelėje',
          TITLE_NEW_TAB: 'atskiroje kortelėje',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' rašo',
          PROMPT_LABEL:
            "'Operatorius nori nukreipti jus į kitą puslapį. Leisti?'",
          PROMPT_BUTTON_YES: 'Taip',
          PROMPT_BUTTON_NO: 'Ne',
          NOTIFICATION_HEADER: 'Žinutė iš operatoriaus',
          OPERATOR_REDIRECT: 'Operatorius nori jus perjungti',
          OPERATOR_REDIRECT_OK: 'Jūs dabar bendraujate su ',
          OPERATOR_CONNECTING: 'Operatorius prisijungia, prašome palaukti',
          NO_PREFERRED_OPERATOR:
            'Dabartinis operatorius nepasiekiamas, sujungiama su kitu',
          TOO_LONG: 'Viršijote maksimalų žinutės ilgį',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Jūsų telefonas',
          PHONE_MESSAGE: 'Telefonas',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'Neteisingas telefono numeris',
          ALL_OFFLINE: 'Operatoriai neprisijungę',
          LEAVE_MESSAGE: 'Palikite žinutę',
          DEFAULT_FIRST_MESSAGE: 'Sveiki! Kuo galiu padėti?',
          COPYRIGHT: 'sukurta',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Įmeskite failą čia',
          FILE_SENT_OPERATOR: 'Jums nusiųstas failas:',
          FILE_SENT_VISITOR: 'Jūs nusiuntėte failą:',
          FILE_UPLOAD: '<span>Įkelti failą</span> (ar nutempkite jį į pokalbį)',
          UPLOAD_LEGEND: 'Keliamas failas',
          UPLOAD_ERROR: 'Nepavyko įkelti - failas per didelis',
          UPLOAD_ERROR_TYPE: 'Nepavyko įkelti - nepalaikomas failo tipas',
          UPLOAD_ERROR_UNKNOWN:
            'Nežinoma įkėlimo klaida. Pabandykite dar kartą',
          BACK_TO_CONVERSATION: 'Grįžti į pokalbį',
          BACK_TO_OFFLINE: 'Grįžti į offline formą',
          CHOOSE_DEPARTMENT: 'Prašome pasirinkti skyrių:',
          DEPARTMENTS_BUTTON: 'Pasirinkti skyrių',
          CHOOSE_DEPARTMENT_TITLE: 'Pasirinkite skyrių',
          CHAT_SEND_TITLE: 'Siųsti žinutę',
          FILE_SEND_TITLE: 'Siųsti failą',
          RATE_TITLE: 'Įvertinti operatorių',
          OPERATOR: 'Operatorius',
          TODAY: 'šiandien',
          YESTERDAY: 'vakar',
        },
        lv: {
          CHAT_LABEL: 'Ievadiet savu ziņu šeit',
          EMAIL_INCORRECT: 'Nederīgs e-pasts',
          EMAIL_LABEL: 'Jūsu e-pasts',
          FAILED_TO_SEND: 'Kļūda sūtot ziņojumus',
          INCORRECT_EMAIL: 'Nederīga e-pasta adrese',
          MAIL_SENT: 'Offline-Ziņojums ir nosūtīts',
          MAIL_SUCCESS: 'Offline-Ziņa tika nosūtīta veiksmīgi',
          MESSAGE_LABEL: 'Ievadiet savu Offline-ziņu šeit',
          NAME_LABEL: 'Jūsu vārds',
          NO_PREFERRED_OPERATOR:
            'Pašreizējais operators nav uz vietas, Jums ir saistīts ar citu operatoru',
          NOT_ALL_FIELDS: 'Jums vajag aizpildīt visus laukus',
          NOTIFICATION_HEADER: 'Ziņojums no operatora',
          OFFLINE_HEADER: 'Atsauksmes forma',
          OFFLINE_HINT: 'All fields are mandatory',
          OFFLINE_TEXT:
            'Visi mūsu operatori ir atvienojušies. Atstāt ziņu un mēs atbildēsim uz to tuvākajā laikā.',
          OPERATOR_CONNECTING: 'Savieno jūs ar operatoru, uzgaidiet',
          OPERATOR_REDIRECT: 'Operators sūta tērzēšanu citam operatoram',
          OPERATOR_REDIRECT_OK: 'Ir savienots ar jums',
          PAGE_TITLE: 'Online konsultants',
          PROMPT_BUTTON_NO: 'Nē',
          PROMPT_BUTTON_YES: 'Jā',
          PROMPT_LABEL: 'Operators piedāvā pārcelties uz citu lapu. Iet?',
          SEND_BUTTON: 'Nosūtīt',
          THROBBER: 'Sūtīšana...',
          TITLE_NEW_TAB: 'Atsevišķā cilnē',
          TOO_LONG: 'Pārsniegta maksimāla garuma nosūtīšanai',
          TYPING_LABEL: 'atbild',
          URL_NEW_TAB: 'atsevišķā cilnē',
          YOU_LABEL: 'Jūs',
          YES_LABEL: 'Jā',
          NO_LABEL: ' Nē',
          MINIMIZE_CHAT: 'noslēpt čatu',
          MAXIMIZE_CHAT: 'atvērt atsevišķā cilnē',
          NEW_MESSAGE: 'Jauns ziņojums no operatora',
          BADGE_LABEL: 'Uzdot jautājumu',
          SOUND_ONOFF: 'Ieslēgt / izslēgt skaņu',
          HIGHLIGHT_LABEL: 'Pievērstet uzmanību',
          HIGHLIGHT_LINK: 'Pāriet',
          HINT_CLOSE: 'Spiediet, lai aizvērt',
          DEFAULT_LABEL: 'Uzdot jautājumu',
          LEAVE_MESSAGE: 'Atstāt ziņu',
          DROP_HERE: 'Velciet un nometiet failus šeit',
          FILE_UPLOAD:
            '<a>Augšuplādēt failu</a> (vai velciet failu uz tērzēšanas)',
          UPLOAD_LEGEND: 'Augšuplādēt failu',
          UPLOAD_ERROR: 'Pievienot kļūda - fails ir pārāk liels',
          UPLOAD_ERROR_TYPE: 'Pievienot kļūda - faila tips nav atbalstīts',
          UPLOAD_ERROR_UNKNOWN: 'Nezināma augšupielādes kļūda',
          BACK_TO_CONVERSATION: 'Atpakaļ uz sarunu',
          BACK_TO_OFFLINE: 'Atpakaļ uz bezsaistes formu',
          CHOOSE_DEPARTMENT: 'Izvēlieties sadaļu, kurā vēlaties pieteikties',
          DEPARTMENTS_BUTTON: 'Izvēlieties nodaļa',
          CHOOSE_DEPARTMENT_TITLE: 'Izvēlies nodaļa',
          CHAT_SEND_TITLE: 'Nosūtīt ziņu',
          FILE_SEND_TITLE: 'Nosūtīt failu',
          RATE_TITLE: 'Līmenis operators',
          HOLD_MESSAGE: 'Lūdzu uzgaidiet, operators jums atbildēs drīz',
          LEAVE_CONTACTS:
            'Operators nesniedz atbildi, atstājiet savu kontaktinformāciju, un mēs ar Jums sazināsimies tuvākajā laikā.',
          PHONE: 'Telephone',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          EMAIL: 'e-mail',
          NAME: 'Vārds',
          CONTACTS_SUCCESS:
            'Paldies, mūsu darbinieki sazināsies ar Jums tuvākajā laikā.',
          INCORRECT_CONTACTS: 'Lūdzu, pārbaudiet jūsu ieguldījumu',
          WEBSITE: '//redhelper.ru',
          OPERATOR: 'Operators',
          TODAY: 'šodien',
          YESTERDAY: 'vakar',
        },
        md: {
          CHAT_LABEL: 'Introduceți mesajul...',
          YOU_LABEL: 'Dvs',
          EMAIL_INCORRECT: 'Ați introdus un email inexistent',
          FAILED_TO_SEND: 'Expedierea mesajului a eșuat',
          INCORRECT_EMAIL: 'Format incorect al mesajului',
          NOT_ALL_FIELDS: 'Vă rog să completați toate câmpurile',
          MAIL_SUCCESS: 'Mesajul Dvs a fost expediat cu succes',
          MAIL_SENT: 'Mesajul a fost expediat',
          SEND_BUTTON: 'Expediază',
          THROBBER: 'Expediere în progres...',
          MESSAGE_LABEL: 'Mesaj',
          EMAIL_LABEL: 'Email',
          NAME_LABEL: 'Numele',
          OFFLINE_HEADER: 'Formular de contact',
          OFFLINE_TEXT:
            'Toți operatorii sunt ofline. Lăsați un mesaj și noi vom răspunde la el în scurt timp.',
          PAGE_TITLE: 'Consultant Online',
          URL_NEW_TAB: 'în fereastra de alături',
          TITLE_NEW_TAB: 'în fereastra de alături',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' răspunde',
          PROMPT_LABEL:
            'Operatorul vă propune să treceți pe altă pagină. Faceți trecerea?',
          PROMPT_BUTTON_YES: 'Da',
          PROMPT_BUTTON_NO: 'Nu',
          NOTIFICATION_HEADER: 'Mesaj de la Operator',
          OPERATOR_REDIRECT: 'Operatorul transmite discuția altui Operator',
          OPERATOR_REDIRECT_OK: 'Vi s-a alăturat operatorul',
          OPERATOR_CONNECTING: 'Se conectează un operator, așteptați',
          NO_PREFERRED_OPERATOR:
            'Operatorul precedent nu este pe loc, sunteți conectat la alt operator',
          TOO_LONG: 'Ați depășit limita maximă a mesajului',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Telefon',
          PHONE_MESSAGE: 'Telefon',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'Format incorect al numărului de telefon',
          ALL_OFFLINE: 'Toți operatorii sunt ofline',
          LEAVE_MESSAGE: 'Lăsați un mesaj',
          DEFAULT_FIRST_MESSAGE: 'Bună ziua, cu ce vă pot ajuta?',
          COPYRIGHT: 'consultant online de la',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Pentru expediere, trageți fișierul aici',
          FILE_SENT_OPERATOR: 'V-am expediat fișierul:',
          FILE_SENT_VISITOR: 'Dvs ne-ați expediat fișierul:',
          FILE_UPLOAD:
            '<span>Încarcă un fișier</span> (sau trageți-l deasupra chatului)',
          UPLOAD_LEGEND: 'Încărcare fișier',
          UPLOAD_ERROR:
            'Eroare la încărcarea fișierului - are dimensiunea prea mare',
          UPLOAD_ERROR_TYPE:
            'Eroare la încărcarea fișierului - format nepermis',
          UPLOAD_ERROR_UNKNOWN:
            'Eroare necunoscută la încărcare. Încercați din nou',
          BACK_TO_CONVERSATION: 'Revenire la dialog',
          BACK_TO_OFFLINE: 'Revenire la formularul ofline',
          CHOOSE_DEPARTMENT:
            'Alegeți departamentul la care doriți să vă adresați:',
          DEPARTMENTS_BUTTON: 'Alegeți departamentul',
          CHOOSE_DEPARTMENT_TITLE: 'Alegeți departamentul',
          CHAT_SEND_TITLE: 'Expediere mesaj',
          FILE_SEND_TITLE: 'Expediere fișier',
          RATE_TITLE: 'Estimează Operatorul',
          HOLD_MESSAGE:
            'Așteptați vă rog, un Operator o să vă răspundă în scurt timp',
          LEAVE_CONTACTS:
            'Operatorul nu răspunde, lăsați datele Dvs de contact și în scurt timp noi vom lua legătura cu Dvs',
          PHONE: 'Telefon ',
          EMAIL: 'e-mail ',
          NAME: 'Nume ',
          CONTACTS_SUCCESS:
            'Mulțumesc, unul din colegii noștri vă va contacta în timpul apropiat',
          INCORRECT_CONTACTS:
            'Vă rugăm, verificați corectitudinea datelor introduse',
          OPERATOR: 'Operatorul',
          TODAY: 'astăzi',
          YESTERDAY: 'ieri',
        },
        pl: {
          CHAT_LABEL: 'Napisz tutaj swoje pytanie',
          YOU_LABEL: 'Ty',
          EMAIL_INCORRECT: 'Wprowadzony e-mail adres jest nieprawidłowy',
          FAILED_TO_SEND: 'Nieudane wysłanie wiadomości',
          INCORRECT_EMAIL: 'Adres e-mail jest niewłaściwy',
          NOT_ALL_FIELDS: 'Proszę wpisać wszystkie dane',
          MAIL_SUCCESS: 'Odsyłanie wiadomości było udane',
          MAIL_SENT: 'Wiadomość była odesłana',
          SEND_BUTTON: 'Wysłać',
          THROBBER: 'Proszę czekać...',
          MESSAGE_LABEL: 'Wiadomość',
          EMAIL_LABEL: 'Twój e-mail',
          NAME_LABEL: 'Twoje imię',
          OFFLINE_HEADER: 'Pozostaw wiadomość',
          OFFLINE_TEXT:
            'Jest po godzinach pracy. Proszę pozostaw wiadomość, odpowiemy przez e-mail.',
          PAGE_TITLE: 'Żywa konwersacja',
          URL_NEW_TAB: 'W innej zakładce',
          TITLE_NEW_TAB: 'W innej zakładce',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: 'Wpisuję',
          PROMPT_LABEL:
            'Operator chcę przekierować na inną stronę internetową. Pozwolić?',
          PROMPT_BUTTON_YES: 'Tak',
          PROMPT_BUTTON_NO: 'Nie',
          NOTIFICATION_HEADER: 'Wiadomość od operatora',
          OPERATOR_REDIRECT: 'Operator chce cię przekierować',
          OPERATOR_REDIRECT_OK: 'Rozmawiasz z',
          OPERATOR_CONNECTING: 'Operator się łączy, proszę czekać',
          NO_PREFERRED_OPERATOR:
            'W tej chwili nie jest dostępny niniejszy operator. Połączymy cię z innym',
          TOO_LONG: 'Długość wiadomości była przekroczona',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Twój telefon',
          PHONE_MESSAGE: 'Telefon',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'Numer telefonu jest niewłaściwy',
          ALL_OFFLINE: 'Operatorzy nie są obecni',
          LEAVE_MESSAGE: 'Zostaw wiadomość',
          DEFAULT_FIRST_MESSAGE: 'Witaj! Jak mogę pomóc?',
          COPYRIGHT: 'Obsługiwane przez',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Tu przesuń plik',
          FILE_SENT_OPERATOR: 'Plik był wysłany do ciebie:',
          FILE_SENT_VISITOR: 'Wysłałeś plik:',
          FILE_UPLOAD: '<span>Wyślij plik</span> (lub przesuń do tego okna)',
          UPLOAD_LEGEND: 'Wysyłanie pliku',
          UPLOAD_ERROR:
            'Nastąpił błąd w trakcie wysyłania - plik jest zbyt duży',
          UPLOAD_ERROR_TYPE:
            'Nastąpił błąd w trakcie wysyłania - ten format pliku nie jest obsługiwany',
          UPLOAD_ERROR_UNKNOWN:
            'Nastąpił nieznany błąd w trakcie wysyłania. Spróbuj ponownie',
          BACK_TO_CONVERSATION: 'Z powrotem do konwersacji',
          BACK_TO_OFFLINE: 'Z powrotem do formularza offline',
          CHOOSE_DEPARTMENT: 'Proszę wybierz dział:',
          DEPARTMENTS_BUTTON: 'Proszę wybierz dział',
          CHOOSE_DEPARTMENT_TITLE: 'Wybierz dział',
          CHAT_SEND_TITLE: 'Wyślij wiadomość',
          FILE_SEND_TITLE: 'Wyślij plik',
          RATE_TITLE: 'Proszę ocenić operatora',
          HOLD_MESSAGE:
            'Please wait, operator will answer you as soon as possible',
          LEAVE_CONTACTS:
            'Operator is not responding, please leave your contacts',
          PHONE: 'telefon',
          EMAIL: 'e-mail',
          NAME: 'imię',
          CONTACTS_SUCCESS: 'Thank you, our manager will contact you soon',
          INCORRECT_CONTACTS: 'Please check highlighted fields',
          OPERATOR: 'Operator',
          TODAY: 'dzisiaj',
          YESTERDAY: 'wczoraj',
        },
        ru: {
          CHAT_LABEL: 'Ввести сообщение...',
          YOU_LABEL: 'Вы',
          EMAIL_INCORRECT: 'Вы ввели несуществующий e-mail',
          FAILED_TO_SEND: 'Не удалось отправить сообщение',
          INCORRECT_EMAIL: 'Неверный формат email адреса',
          NOT_ALL_FIELDS: 'Вы заполнили не все поля',
          MAIL_SUCCESS: 'Ваше сообщение отправлено',
          MAIL_SENT: 'Сообщение было отправлено',
          SEND_BUTTON: 'Отправить',
          THROBBER: 'Отправка...',
          MESSAGE_LABEL: 'Сообщение',
          EMAIL_LABEL: 'E-mail',
          NAME_LABEL: 'Ваше имя',
          OFFLINE_HEADER: 'Форма обратной связи',
          OFFLINE_TEXT:
            'Все наши операторы сейчас офлайн. Оставьте сообщение и мы ответим на него в ближайшее время.',
          PAGE_TITLE: 'Онлайн консультант',
          URL_NEW_TAB: 'в отдельной вкладке',
          TITLE_NEW_TAB: 'в отдельной вкладке',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' отвечает',
          PROMPT_LABEL:
            'Оператор предлагает вам перейти на другую страницу. Перейти?',
          PROMPT_BUTTON_YES: 'Да',
          PROMPT_BUTTON_NO: 'Нет',
          NOTIFICATION_HEADER: 'Сообщение от оператора',
          OPERATOR_REDIRECT: 'Оператор передаёт чат другому оператору',
          OPERATOR_REDIRECT_OK: 'К вам подключился оператор',
          OPERATOR_CONNECTING: 'К вам подключается оператор, подождите',
          NO_PREFERRED_OPERATOR:
            'Текущего оператора нет на месте, вы подключены к другому оператору',
          TOO_LONG: 'Превышена максимальная длина для отправки сообщения',
          OFFLINE_HINT: 'Все поля обязательны',
          PHONE_LABEL: 'Телефон',
          PHONE_MESSAGE: 'Телефон',
          OFFLINE_BODY_HEADER1: 'Email посетителя',
          OFFLINE_BODY_HEADER2:
            'Ответ на это письмо отправится на почту посетителя.',
          OFFLINE_FROM_VISITOR: 'Сообщение от посетителя',
          OFFLINE_VISITOR_NAME: 'Имя посетителя',
          INCORRECT_PHONE: 'Неверный формат телефона',
          ALL_OFFLINE: 'Все операторы офлайн',
          LEAVE_MESSAGE: 'Оставить сообщение',
          DEFAULT_FIRST_MESSAGE: 'Здравствуйте, могу ли я вам чем-то помочь?',
          COPYRIGHT: 'Сервис предоставлен',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Для отправки перетащите файл сюда',
          FILE_SENT_OPERATOR: 'Выслал вам файл:',
          FILE_SENT_VISITOR: 'Вы выслали файл:',
          FILE_SENT_DOWNLOAD: 'Скачать файл',
          MOVE_TO_DEPARTMENTS: 'Выбрать другой отдел',
          FILE_UPLOAD:
            '<span>Загрузить файл</span> (или перетащите файл в чат)',
          UPLOAD_LEGEND: 'Загрузка файла',
          UPLOAD_ERROR: 'Ошибка при загрузке файла - слишком большой размер',
          UPLOAD_ERROR_TYPE:
            'Ошибка при загрузке файла - данный тип файлов не поддерживается',
          UPLOAD_ERROR_UNKNOWN: 'Неизвестная ошибка. Попробуйте еще раз',
          BACK_TO_CONVERSATION: 'Вернуться к диалогу',
          BACK_TO_OFFLINE: 'Вернуться к офлайн-форме',
          CHOOSE_DEPARTMENT: 'Выберите отдел, в который хотите обратиться:',
          DEPARTMENTS_BUTTON: 'Выбрать отдел',
          CHOOSE_DEPARTMENT_TITLE: 'Выбрать отдел',
          CHAT_SEND_TITLE: 'Отправить сообщение',
          FILE_SEND_TITLE: 'Отправить файл',
          RATE_TITLE: 'Оценить оператора',
          HOLD_MESSAGE: 'Подождите, пожалуйста, оператор вам скоро ответит',
          LEAVE_CONTACTS:
            'Оператор не отвечает, оставьте свои контакты и мы свяжемся с вами в ближайшее время.',
          PHONE: 'Телефон',
          EMAIL: 'e-mail',
          NAME: 'Имя',
          CONTACTS_SUCCESS:
            'Спасибо, наш сотрудник свяжется с вами в ближайшее время.',
          INCORRECT_CONTACTS:
            'Пожалуйста, проверьте правильность введенных данных',
          OPERATOR: 'Оператор',
          PAGE: 'Страница',
          TIMEONSITE: 'Время на сайте',
          BROWSER: 'Браузер',
          REFERRER: 'Источник',
          LOCATION: 'Город',
          NOTDEFINED: ' не определён',
          NOREFERRER: 'зашёл напрямую',
          TODAY: 'сегодня',
          YESTERDAY: 'вчера',
        },
        sk: {
          CHAT_LABEL: 'Sem napíšte svoju otázku...',
          YOU_LABEL: 'Vy',
          EMAIL_INCORRECT: 'E-mail adresa, ktorú ste uviedli je nesprávna',
          FAILED_TO_SEND: 'Nepodarilo sa odoslať správu',
          INCORRECT_EMAIL: 'E-mail adresa je nesprávna',
          NOT_ALL_FIELDS: 'Nevyplnili ste všetky polia',
          MAIL_SUCCESS: 'Vaša správa bola poslaná úspešne',
          MAIL_SENT: 'Vaša správa bola poslaná',
          SEND_BUTTON: 'Poslať',
          THROBBER: 'Počkajte prosím...',
          MESSAGE_LABEL: 'Správa',
          EMAIL_LABEL: 'Váš e-mail',
          NAME_LABEL: 'Vaše meno',
          OFFLINE_HEADER: 'Zanechajte nám správu',
          OFFLINE_TEXT:
            'Zachytili ste nás mimo pracovnej doby. Prosím zanechajte nám odkaz a my vám odpovieme cez e-mail.',
          PAGE_TITLE: 'Živá konverzácia',
          URL_NEW_TAB: 'v inej záložke',
          TITLE_NEW_TAB: 'v inej záložke',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' píše',
          PROMPT_LABEL:
            '‘Operátor Vás chce presmerovať na inú web stránku. Povoliť?’',
          PROMPT_BUTTON_YES: 'Áno',
          PROMPT_BUTTON_NO: 'Nie',
          NOTIFICATION_HEADER: 'Odkaz od operátora',
          OPERATOR_REDIRECT: 'Operátor Vás chce presmerovať',
          OPERATOR_REDIRECT_OK: 'Rozprávate sa s',
          OPERATOR_CONNECTING: 'Operátor sa pripája, počkajte prosím',
          NO_PREFERRED_OPERATOR:
            'Súčasný operátor nie je v dispozícii. Budete prepojený na iného',
          TOO_LONG: 'Bola prekročená maximálna dĺžka správy',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Váš telefón',
          PHONE_MESSAGE: 'Telefón',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          INCORRECT_PHONE: 'Telefónne číslo je nesprávne',
          ALL_OFFLINE: 'Operátori nie sú prítomní',
          LEAVE_MESSAGE: 'Zanechajte odkaz',
          DEFAULT_FIRST_MESSAGE: 'Vitajte! Ako Vám môžeme pomôcť?',
          COPYRIGHT: 'poskytovateľ',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Položte sem súbor',
          FILE_SENT_OPERATOR: 'Súbor poslaný Vám:',
          FILE_SENT_VISITOR: 'Poslali ste súbor:',
          FILE_UPLOAD:
            '<span>Pošlite súbor</span> (alebo ho položte na toto okno)',
          UPLOAD_LEGEND: 'Posielanie súboru',
          UPLOAD_ERROR: 'Chyba pri odosielaní - súbor je príliš veľký',
          UPLOAD_ERROR_TYPE:
            'Chyba pri odosielaní - tento typ súboru nie je podporovaný',
          UPLOAD_ERROR_UNKNOWN:
            'Nastala neznáma chyba pri odosielaní. Skúste to znova.',
          BACK_TO_CONVERSATION: 'Naspäť ku konverzácii',
          BACK_TO_OFFLINE: 'Naspať na offline formulár',
          CHOOSE_DEPARTMENT: 'Prosím vyberte si oddelenie:',
          DEPARTMENTS_BUTTON: 'Vyberte si oddelenie',
          CHOOSE_DEPARTMENT_TITLE: 'Vyberte si oddelenie',
          CHAT_SEND_TITLE: 'Pošlite správu',
          FILE_SEND_TITLE: 'Pošlite súbor',
          RATE_TITLE: 'Ohodnoďte operátora',
          OPERATOR: 'Operátor',
          TODAY: 'dnes',
          YESTERDAY: 'včera',
        },
        uk: {
          CHAT_LABEL: 'Ввести повідомлення',
          YOU_LABEL: 'Ви',
          EMAIL_INCORRECT: 'Некорректный адрес email',
          FAILED_TO_SEND: 'Помилка відправлення офлайн-повідомлення',
          INCORRECT_EMAIL: 'Некорректный адрес email',
          NOT_ALL_FIELDS: 'Ви заповнили не всі рядки',
          MAIL_SUCCESS: 'Офлайн-повідомлення вдало відтправлено',
          MAIL_SENT: 'Офлайн-повідомлення відправлено',
          SEND_BUTTON: 'Відіслати',
          THROBBER: 'Надсилання...',
          MESSAGE_LABEL: 'Повідомлення',
          EMAIL_LABEL: 'Ваш email',
          NAME_LABEL: "Ваше ім'я",
          OFFLINE_HEADER: "Форма зворотнього зв'язку",
          OFFLINE_TEXT:
            'Всі наші оператори зараз офлайн. Залиште повідомлення і ми відповімо на нього найближчим часом.',
          PAGE_TITLE: 'Онлайн консультант',
          URL_NEW_TAB: 'В окремій вкладці',
          TITLE_NEW_TAB: 'В окремій вкладці',
          TYPING_LABEL: ' відповідає',
          PROMPT_LABEL:
            'Оператор пропонує Вам перейти на іншу сторінку. Перейти?',
          PROMPT_BUTTON_YES: 'Так',
          PROMPT_BUTTON_NO: 'Нi',
          NOTIFICATION_HEADER: 'Повідомлення від оператора',
          OPERATOR_REDIRECT: 'Оператор передає чат іншому оператору',
          OPERATOR_REDIRECT_OK: 'До вас підключився оператор',
          OPERATOR_CONNECTING: 'До вас підключається оператор, зачекайте',
          NO_PREFERRED_OPERATOR:
            'Поточного оператора немає на місці, ви підключені до іншого оператора',
          TOO_LONG:
            'Перевищена максимальна довжина для відправлення повідомлення',
          PHONE_MESSAGE: 'Телефон',
          OFFLINE_BODY_HEADER1: "Visitor's email",
          OFFLINE_BODY_HEADER2:
            'Your response to this message will be sent to the user.',
          OFFLINE_FROM_VISITOR: 'Message from visitor',
          OFFLINE_VISITOR_NAME: 'Visitor name',
          OFFLINE_HINT: "Всі поля обов'язкові",
          PHONE_LABEL: 'Ваш телефон',
          INCORRECT_PHONE: 'Невірний телефон',
          ALL_OFFLINE: 'Всі оператори офлайн',
          LEAVE_MESSAGE: 'Залишити повідомлення',
          DEFAULT_FIRST_MESSAGE: 'Здрастуйте, чи можу я Вам чимось допомогти?',
          DROP_HERE: 'Перетягніть файли сюди',
          FILE_UPLOAD:
            '<span>Завантажити файл</span> (або перетягніть файл у чат)',
          UPLOAD_LEGEND: 'Завантаження файлу',
          UPLOAD_ERROR: 'Помилка при завантаженні - файл занадто великий',
          UPLOAD_ERROR_TYPE:
            'Помилка при завантаженні - тип файлів не дозволені',
          UPLOAD_ERROR_UNKNOWN: 'Невідома помилка завантаження',
          BACK_TO_CONVERSATION: 'Повернутися до діалогу',
          BACK_TO_OFFLINE: 'Повернутися до офлайн-форми',
          CHOOSE_DEPARTMENT: 'Виберіть відділ, в який хочете звернутися',
          DEPARTMENTS_BUTTON: 'Виберіть відділ',
          CHOOSE_DEPARTMENT_TITLE: 'Виберіть відділ',
          CHAT_SEND_TITLE: 'Відправити повідомлення',
          FILE_SEND_TITLE: 'Відправити файл',
          RATE_TITLE: 'Швидкість оператора',
          HOLD_MESSAGE: 'Зачекайте, будь ласка, оператор вам скоро відповість',
          LEAVE_CONTACTS:
            "Оператор не відповідає, залиште свої контакти і ми зв'яжемося з вами найближчим часом.",
          PHONE: 'Телефон',
          EMAIL: 'e-mail',
          NAME: "Ім'я",
          CONTACTS_SUCCESS:
            "Спасибі, наш співробітник зв'яжеться з вами найближчим часом.",
          INCORRECT_CONTACTS:
            'Будь ласка, перевірте правильність введених даних',
          WEBSITE: '//redhelper.ru',
          OPERATOR: 'Оператор',
          TODAY: 'сьогодні',
          YESTERDAY: 'вчора',
        },
        uz: {
          CHAT_LABEL: 'Xabarni kiritish...',
          YOU_LABEL: 'Siz',
          EMAIL_INCORRECT: "Siz mavjud bo'lmagan e-mail kiritdingiz",
          FAILED_TO_SEND: "Xabarni yuborib bo'lmadi",
          INCORRECT_EMAIL: "email manzil noto'g'ri ko'rinishda",
          NOT_ALL_FIELDS: "Siz barcha maydonlarni to'ldirmadingiz",
          MAIL_SUCCESS: 'Sizning xabaringiz yuborildi',
          MAIL_SENT: 'Xabar yuborildi',
          SEND_BUTTON: 'Yuborish',
          THROBBER: 'Yuborilmoqda...',
          MESSAGE_LABEL: 'Xabar:',
          EMAIL_LABEL: 'Sizning e-mail:',
          NAME_LABEL: 'Sizning ismingiz:',
          OFFLINE_HEADER: "Aloqa fo'rmasi",
          OFFLINE_TEXT:
            'Xozirgi vaqtda bizning mutaxasislar offlayn. Savol va boshqa xabarni yuboring, tez orada javob beramiz.',
          PAGE_TITLE: 'Onlayn maslaxatchi',
          URL_NEW_TAB: 'alohida oynada',
          TITLE_NEW_TAB: 'alohida oynada',
          WEBSITE: '//redhelper.ru',
          TYPING_LABEL: ' javob bermoqda',
          PROMPT_LABEL:
            "Operator sizga boshqa sahifaga o'tishni taklif qilmoqda. O'tasizmi?",
          PROMPT_BUTTON_YES: 'Xa',
          PROMPT_BUTTON_NO: "Yo'q",
          NOTIFICATION_HEADER: 'operatordan xabar',
          OPERATOR_REDIRECT: "Operator chatni boshqa operatorga yo'naltirmoqda",
          OPERATOR_REDIRECT_OK: "Sizga operator bog'lanmoqda",
          OPERATOR_CONNECTING: "Sizga operator bog'lanmoqda, kuting",
          NO_PREFERRED_OPERATOR:
            "Joriy operator joyida emas, siz boshqa operatorga bog'landingiz",
          TOO_LONG: 'Xabar yuborish uchun maksimal uzunlik oshdi',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: 'Sizning telefon:',
          PHONE_MESSAGE: 'Telefon',
          INCORRECT_PHONE: "Telefon formati noto'g'ri",
          ALL_OFFLINE: 'Barcha operatorlar offlayn',
          LEAVE_MESSAGE: 'Xabar yuborish',
          DEFAULT_FIRST_MESSAGE: 'Salom, sizga yordam bera olamanmi?',
          COPYRIGHT: 'onlayn maslaxatchi',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: 'Faylni yuborish uchun shu yerga tashlang',
          FILE_SENT_OPERATOR: 'Sizga fayl yubordi:',
          FILE_SENT_VISITOR: 'Siz fayl yubordingiz:',
          FILE_UPLOAD:
            '<span>Faylni yuklab olmoq</span> (yoki faylni chatga tashnang)',
          UPLOAD_LEGEND: 'Fayl yuklanmoqda',
          UPLOAD_ERROR: "faylni yuklashda xatolik - me'yordan ortiq xajm",
          UPLOAD_ERROR_TYPE:
            'faylni yuklashda xatolik - Bu fayl turi taqiqlangan',
          UPLOAD_ERROR_UNKNOWN: "No'malum xatolik. Qaytadan urinib ko'ring",
          BACK_TO_CONVERSATION: 'Muloqatga qaytish',
          BACK_TO_OFFLINE: 'Oflayn formaga qayish',
          CHOOSE_DEPARTMENT: "Murojat qilmoqchi bo'lgan bo'limingizni tanlang:",
          DEPARTMENTS_BUTTON: "Bo'limni tanlang",
          CHOOSE_DEPARTMENT_TITLE: "Bo'limni tanlang",
          CHAT_SEND_TITLE: 'Xabar yuborish',
          FILE_SEND_TITLE: 'Fayl yuborish',
          RATE_TITLE: 'Operatorni baholash',
          HOLD_MESSAGE: 'Iltimis kuting, operator tez orada javob beradi',
          LEAVE_CONTACTS:
            "operator javob bermadi, kontaktlaringizni qoldiring, tez orada siz bilan bog'lanamiz.",
          PHONE: 'Telefon',
          EMAIL: 'e-mail',
          NAME: 'Ism',
          CONTACTS_SUCCESS:
            "Raxmat, bizning xodim, siz bilan tez orada bog'lanadi.",
          INCORRECT_CONTACTS:
            "Iltimos, kiritilgan ma'lumotlarni to'g'riligini tekshiring",
          OPERATOR: 'Operator',
          PAGE: 'Sahifa',
          TIMEONSITE: 'Veb-sayt vaqt',
          BROWSER: 'Brauzer',
          REFERRER: 'Referrer',
          LOCATION: 'Shahar',
          NOTDEFINED: ' not defined',
          NOREFERRER: 'No referrer',
          TODAY: 'bugun',
          YESTERDAY: 'kecha',
        },
        zh: {
          CHAT_LABEL: '请在这里留言',
          YOU_LABEL: '您',
          EMAIL_INCORRECT: '您的电子邮件地址不正确',
          FAILED_TO_SEND: '无法发送消息',
          INCORRECT_EMAIL: '电子邮件地址不正确',
          NOT_ALL_FIELDS: '无法包含所有文字',
          MAIL_SUCCESS: '您的信息已经成功发送',
          MAIL_SENT: '信息已经成功发送',
          SEND_BUTTON: '发送',
          THROBBER: '请稍后...',
          MESSAGE_LABEL: '留言:',
          EMAIL_LABEL: '您的e-mail:',
          NAME_LABEL: '您的姓名:',
          OFFLINE_HEADER: '反馈表',
          OFFLINE_TEXT: '我们目前不在线， 请留言,我们将通过电子邮件答复您。',
          PAGE_TITLE: '在线咨询',
          URL_NEW_TAB: '一个独立的标签',
          TITLE_NEW_TAB: '一个独立的标签',
          WEBSITE: 'http://redhelper.com',
          TYPING_LABEL: ' 打字',
          PROMPT_LABEL: "'运营商想要将您重新定向到另一个页面,是否同意?'",
          PROMPT_BUTTON_YES: '同意',
          PROMPT_BUTTON_NO: '不同意',
          NOTIFICATION_HEADER: '运营商信息',
          OPERATOR_REDIRECT: '运营商需要切换您',
          OPERATOR_REDIRECT_OK: '您目前的交谈人是',
          OPERATOR_CONNECTING: '运营商正在连接, 请稍后',
          NO_PREFERRED_OPERATOR: '当前服务人员不在, 已转接到另外的人员',
          TOO_LONG: '超过最大信息长度',
          OFFLINE_HINT: 'All fields are mandatory',
          PHONE_LABEL: '您的电话:',
          PHONE_MESSAGE: '电话',
          INCORRECT_PHONE: '此号码不正确',
          ALL_OFFLINE: '服务人员不在线',
          LEAVE_MESSAGE: '留言',
          DEFAULT_FIRST_MESSAGE: '您好！您需要什么帮助？',
          COPYRIGHT: '技术支持',
          COPYRIGHT_NAME: '<span>红色</span>助手',
          DROP_HERE: '在这里留下文件',
          FILE_SENT_OPERATOR: '发送文件给您:',
          FILE_SENT_VISITOR: '您已发送文件:',
          FILE_UPLOAD: '<span>上传一个文件</span> (或拖进对话框)',
          UPLOAD_LEGEND: '文件上传中',
          UPLOAD_ERROR: '上传错误 - 文件过大',
          UPLOAD_ERROR_TYPE: '上传错误- 文件类型不支持',
          UPLOAD_ERROR_UNKNOWN: '未知上传错误. 请再试一次',
          BACK_TO_CONVERSATION: '回到对话',
          BACK_TO_OFFLINE: '回到离线表格',
          CHOOSE_DEPARTMENT: '请选择需要部门:',
          DEPARTMENTS_BUTTON: '选择相关部门',
          CHOOSE_DEPARTMENT_TITLE: '选择相关部门',
          CHAT_SEND_TITLE: '发送消息',
          FILE_SEND_TITLE: '发送文件',
          RATE_TITLE: '顾问评价',
          HOLD_MESSAGE: '请稍后，顾问会立即回复您。',
          LEAVE_CONTACTS: '顾问暂时不在，请留下您的联系方式',
          PHONE: '电话',
          EMAIL: 'e-mail',
          NAME: '姓名',
          CONTACTS_SUCCESS: '谢谢，我们的经理会尽快回复您',
          INCORRECT_CONTACTS: '请检查高亮字段',
          OPERATOR: '运营商',
          TODAY: '今天',
          YESTERDAY: '昨天',
        },
      },
    }),
    define(
      'config/lang',
      [
        'application/session.objects',
        'config/api',
        'locales',
        'common/extensions/jquery.plugins',
      ],
      function (a, b, c, d) {
        var e = {
          CHAT_LABEL: '',
          YOU_LABEL: '',
          EMAIL_INCORRECT: '',
          FAILED_TO_SEND: '',
          INCORRECT_EMAIL: '',
          NOT_ALL_FIELDS: '',
          MAIL_SUCCESS: '',
          MAIL_SENT: '',
          SEND_BUTTON: '',
          THROBBER: '',
          MESSAGE_LABEL: '',
          EMAIL_LABEL: '',
          NAME_LABEL: '',
          OFFLINE_HEADER: '',
          OFFLINE_TEXT: '',
          PAGE_TITLE: '',
          URL_NEW_TAB: '',
          TITLE_NEW_TAB: '',
          WEBSITE: '',
          TYPING_LABEL: '',
          PROMPT_LABEL: '',
          PROMPT_BUTTON_YES: '',
          PROMPT_BUTTON_NO: '',
          NOTIFICATION_HEADER: '',
          OPERATOR_REDIRECT: '',
          OPERATOR_REDIRECT_OK: '',
          OPERATOR_CONNECTING: '',
          NO_PREFERRED_OPERATOR: '',
          TOO_LONG: '',
          PHONE_MESSAGE: '',
          PHONE_LABEL: '',
          OFFLINE_HINT: '',
          INCORRECT_PHONE: '',
          ALL_OFFLINE: '',
          LEAVE_MESSAGE: '',
          DEFAULT_FIRST_MESSAGE: '',
          COPYRIGHT_NAME: '<span>Red</span>Helper',
          DROP_HERE: '',
          FILE_SENT_OPERATOR: '',
          FILE_SENT_OPERATOR_MTR: 'Оператор выслал файл',
          FILE_SENT_TO_OPERATOR: 'Вы выслали файл',
          FILE_SENT_VISITOR: '',
          FILE_SENT_VISITOR_MTR: 'Файл выслан!',
          FILE_UPLOAD: '',
          UPLOAD_ERROR: '',
          UPLOAD_ERROR_TYPE: '',
          UPLOAD_ERROR_UNKNOWN: '',
          UPLOAD_LEGEND: '',
          UPLOAD_LEGEND_MTR: 'Идет отправка файла',
          BACK_TO_CONVERSATION: '',
          BACK_TO_OFFLINE: '',
          CHOOSE_DEPARTMENT: '',
          DEPARTMENTS_BUTTON: '',
          CHAT_SEND_TITLE: '',
          FILE_SEND_TITLE: '',
          RATE_TITLE: '',
          HOLD_MESSAGE: '',
          LEAVE_CONTACTS: '',
          PHONE: '',
          NAME: '',
          EMAIL: '',
          CONTACTS_SUCCESS: '',
          INCORRECT_CONTACTS: '',
          RTL: '',
          PAGE: '',
          TIMEONSITE: '',
          BROWSER: '',
          REFERRER: '',
          LOCATION: '',
          NOTDEFINED: '',
          NOREFERRER: '',
          TODAY: 'сегодня',
          YESTERDAY: 'вчера',
        };
        return (
          (e.setFields = function (a) {
            for (var b in a) a.hasOwnProperty(b) && (e[b] = a[b]);
            for (b in e)
              e.hasOwnProperty(b) && '' === e[b] && (e[b] = c.locales.en[b]);
          }),
          (e.initLanguage = function () {
            var f,
              g = c.enabled,
              h = (function () {
                return a.userLocale
                  ? a.userLocale
                  : a && a.locale && g.indexOf(a.locale) > -1
                    ? a.locale
                    : 'ru';
              })();
            if (
              (e.setFields(c.locales[h]),
              e.RTL && d('body').addClass('rtl'),
              !a.free && b && b.Lang)
            )
              for (f in e)
                e.hasOwnProperty(f) &&
                  b.Lang.hasOwnProperty(f) &&
                  (e[f] = b.Lang[f]);
            document.title = e.PAGE_TITLE;
          }),
          e.initLanguage(),
          e
        );
      }
    ),
    define('common/constants/sender', { VISITOR: 0, OPERATOR: 1 }),
    define('common/application/time', [], function () {
      var a = null,
        b = null,
        c = {
          now: function () {
            return ((a = new Date()), c);
          },
          parse: function (d) {
            return (
              (a = new Date(Date.parse(d))),
              b
                ? (a.setHours(a.getHours() + b[0]),
                  a.setMinutes(a.getMinutes() + b[1]),
                  a.setSeconds(a.getSeconds() + b[2]),
                  c)
                : this
            );
          },
          setTimeDifference: function (a) {
            var d = a.split(' ')[1].split(':');
            d[0] = +d[0];
            var e = new Date(),
              f = [e.getHours(), e.getMinutes(), e.getSeconds()];
            return (
              (b = d.map(function (a, b) {
                return f[b] - a;
              })),
              c
            );
          },
          getTimeDifference: function () {
            return b;
          },
          toString: function () {
            if (!a) return '';
            var b = [a.getHours(), a.getMinutes(), a.getSeconds()];
            return (
              b.forEach(function (a, c) {
                a < 10 && (b[c] = '0' + a);
              }),
              b.join(':')
            );
          },
          getTime: function () {
            return a.getTime();
          },
        };
      return ((window.rhlpTime = c), c);
    }),
    define(
      'view/template',
      [
        'application/session.objects',
        'common/extensions/jquery.plugins',
        'config/setup',
      ],
      function (a, b, c) {
        return {
          processTemplate: function (d, e) {
            ((d = b(d).clone()),
              d.removeAttr('id'),
              (d = b('<div></div>').append(d).html()));
            var f,
              g = /%(\w+)%/g;
            for (f = g.exec(d); f; f = g.exec(d)) {
              e &&
                e.hasOwnProperty(f[1]) &&
                (d = d.replace(new RegExp('%' + f[1] + '%', 'g'), e[f[1]]));
              try {
                a &&
                  Object.prototype.hasOwnProperty.call(a, f[1]) &&
                  (d =
                    'operAvatar' === f[1]
                      ? d.replace(
                          new RegExp('%' + f[1] + '%', 'g'),
                          c.getImageUrl(a[f[1]])
                        )
                      : d.replace(new RegExp('%' + f[1] + '%', 'g'), a[f[1]]));
              } catch (a) {}
            }
            var h = /#(\w+)#/g;
            for (f = h.exec(d); f; f = h.exec(d))
              a &&
                Object.prototype.hasOwnProperty.call(a, f[1]) &&
                (d = d.replace(
                  new RegExp('#' + f[1] + '#', 'g'),
                  '<span class="redhlp_' + f[1] + '">' + a[f[1]] + '</span>'
                ));
            return d;
          },
        };
      }
    ));
  var Base64 = (function () {
      var a =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      return {
        encode: function (b) {
          var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j = '',
            k = 0;
          do {
            ((c = b.charCodeAt(k++)),
              (d = b.charCodeAt(k++)),
              (e = b.charCodeAt(k++)),
              (f = c >> 2),
              (g = ((3 & c) << 4) | (d >> 4)),
              (h = ((15 & d) << 2) | (e >> 6)),
              (i = 63 & e),
              isNaN(d) ? (h = i = 64) : isNaN(e) && (i = 64),
              (j = j + a.charAt(f) + a.charAt(g) + a.charAt(h) + a.charAt(i)));
          } while (k < b.length);
          return j;
        },
        decode: function (b) {
          var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j = '',
            k = 0;
          b = b.replace(/[^A-Za-z0-9\+\/\=]/g, '');
          do {
            ((f = a.indexOf(b.charAt(k++))),
              (g = a.indexOf(b.charAt(k++))),
              (h = a.indexOf(b.charAt(k++))),
              (i = a.indexOf(b.charAt(k++))),
              (c = (f << 2) | (g >> 4)),
              (d = ((15 & g) << 4) | (h >> 2)),
              (e = ((3 & h) << 6) | i),
              (j += String.fromCharCode(c)),
              64 != h && (j += String.fromCharCode(d)),
              64 != i && (j += String.fromCharCode(e)));
          } while (k < b.length);
          return j;
        },
      };
    })(),
    MD5 = (function () {
      var a = function (a, b) {
          var c = (65535 & a) + (65535 & b);
          return (((a >> 16) + (b >> 16) + (c >> 16)) << 16) | (65535 & c);
        },
        b = function (a, b) {
          return (a << b) | (a >>> (32 - b));
        },
        c = function (a) {
          for (var b = [], c = 0; c < 8 * a.length; c += 8)
            b[c >> 5] |= (255 & a.charCodeAt(c / 8)) << c % 32;
          return b;
        },
        d = function (a) {
          for (var b = '', c = 0; c < 32 * a.length; c += 8)
            b += String.fromCharCode((a[c >> 5] >>> c % 32) & 255);
          return b;
        },
        e = function (a) {
          for (var b = '0123456789abcdef', c = '', d = 0; d < 4 * a.length; d++)
            c +=
              b.charAt((a[d >> 2] >> ((d % 4) * 8 + 4)) & 15) +
              b.charAt((a[d >> 2] >> ((d % 4) * 8)) & 15);
          return c;
        },
        f = function (c, d, e, f, g, h) {
          return a(b(a(a(d, c), a(f, h)), g), e);
        },
        g = function (a, b, c, d, e, g, h) {
          return f((b & c) | (~b & d), a, b, e, g, h);
        },
        h = function (a, b, c, d, e, g, h) {
          return f((b & d) | (c & ~d), a, b, e, g, h);
        },
        i = function (a, b, c, d, e, g, h) {
          return f(b ^ c ^ d, a, b, e, g, h);
        },
        j = function (a, b, c, d, e, g, h) {
          return f(c ^ (b | ~d), a, b, e, g, h);
        },
        k = function (b, c) {
          ((b[c >> 5] |= 128 << c % 32), (b[14 + (((c + 64) >>> 9) << 4)] = c));
          for (
            var d,
              e,
              f,
              k,
              l = 1732584193,
              m = -271733879,
              n = -1732584194,
              o = 271733878,
              p = 0;
            p < b.length;
            p += 16
          )
            ((d = l),
              (e = m),
              (f = n),
              (k = o),
              (l = g(l, m, n, o, b[p + 0], 7, -680876936)),
              (o = g(o, l, m, n, b[p + 1], 12, -389564586)),
              (n = g(n, o, l, m, b[p + 2], 17, 606105819)),
              (m = g(m, n, o, l, b[p + 3], 22, -1044525330)),
              (l = g(l, m, n, o, b[p + 4], 7, -176418897)),
              (o = g(o, l, m, n, b[p + 5], 12, 1200080426)),
              (n = g(n, o, l, m, b[p + 6], 17, -1473231341)),
              (m = g(m, n, o, l, b[p + 7], 22, -45705983)),
              (l = g(l, m, n, o, b[p + 8], 7, 1770035416)),
              (o = g(o, l, m, n, b[p + 9], 12, -1958414417)),
              (n = g(n, o, l, m, b[p + 10], 17, -42063)),
              (m = g(m, n, o, l, b[p + 11], 22, -1990404162)),
              (l = g(l, m, n, o, b[p + 12], 7, 1804603682)),
              (o = g(o, l, m, n, b[p + 13], 12, -40341101)),
              (n = g(n, o, l, m, b[p + 14], 17, -1502002290)),
              (m = g(m, n, o, l, b[p + 15], 22, 1236535329)),
              (l = h(l, m, n, o, b[p + 1], 5, -165796510)),
              (o = h(o, l, m, n, b[p + 6], 9, -1069501632)),
              (n = h(n, o, l, m, b[p + 11], 14, 643717713)),
              (m = h(m, n, o, l, b[p + 0], 20, -373897302)),
              (l = h(l, m, n, o, b[p + 5], 5, -701558691)),
              (o = h(o, l, m, n, b[p + 10], 9, 38016083)),
              (n = h(n, o, l, m, b[p + 15], 14, -660478335)),
              (m = h(m, n, o, l, b[p + 4], 20, -405537848)),
              (l = h(l, m, n, o, b[p + 9], 5, 568446438)),
              (o = h(o, l, m, n, b[p + 14], 9, -1019803690)),
              (n = h(n, o, l, m, b[p + 3], 14, -187363961)),
              (m = h(m, n, o, l, b[p + 8], 20, 1163531501)),
              (l = h(l, m, n, o, b[p + 13], 5, -1444681467)),
              (o = h(o, l, m, n, b[p + 2], 9, -51403784)),
              (n = h(n, o, l, m, b[p + 7], 14, 1735328473)),
              (m = h(m, n, o, l, b[p + 12], 20, -1926607734)),
              (l = i(l, m, n, o, b[p + 5], 4, -378558)),
              (o = i(o, l, m, n, b[p + 8], 11, -2022574463)),
              (n = i(n, o, l, m, b[p + 11], 16, 1839030562)),
              (m = i(m, n, o, l, b[p + 14], 23, -35309556)),
              (l = i(l, m, n, o, b[p + 1], 4, -1530992060)),
              (o = i(o, l, m, n, b[p + 4], 11, 1272893353)),
              (n = i(n, o, l, m, b[p + 7], 16, -155497632)),
              (m = i(m, n, o, l, b[p + 10], 23, -1094730640)),
              (l = i(l, m, n, o, b[p + 13], 4, 681279174)),
              (o = i(o, l, m, n, b[p + 0], 11, -358537222)),
              (n = i(n, o, l, m, b[p + 3], 16, -722521979)),
              (m = i(m, n, o, l, b[p + 6], 23, 76029189)),
              (l = i(l, m, n, o, b[p + 9], 4, -640364487)),
              (o = i(o, l, m, n, b[p + 12], 11, -421815835)),
              (n = i(n, o, l, m, b[p + 15], 16, 530742520)),
              (m = i(m, n, o, l, b[p + 2], 23, -995338651)),
              (l = j(l, m, n, o, b[p + 0], 6, -198630844)),
              (o = j(o, l, m, n, b[p + 7], 10, 1126891415)),
              (n = j(n, o, l, m, b[p + 14], 15, -1416354905)),
              (m = j(m, n, o, l, b[p + 5], 21, -57434055)),
              (l = j(l, m, n, o, b[p + 12], 6, 1700485571)),
              (o = j(o, l, m, n, b[p + 3], 10, -1894986606)),
              (n = j(n, o, l, m, b[p + 10], 15, -1051523)),
              (m = j(m, n, o, l, b[p + 1], 21, -2054922799)),
              (l = j(l, m, n, o, b[p + 8], 6, 1873313359)),
              (o = j(o, l, m, n, b[p + 15], 10, -30611744)),
              (n = j(n, o, l, m, b[p + 6], 15, -1560198380)),
              (m = j(m, n, o, l, b[p + 13], 21, 1309151649)),
              (l = j(l, m, n, o, b[p + 4], 6, -145523070)),
              (o = j(o, l, m, n, b[p + 11], 10, -1120210379)),
              (n = j(n, o, l, m, b[p + 2], 15, 718787259)),
              (m = j(m, n, o, l, b[p + 9], 21, -343485551)),
              (l = a(l, d)),
              (m = a(m, e)),
              (n = a(n, f)),
              (o = a(o, k)));
          return [l, m, n, o];
        };
      return {
        hexdigest: function (a) {
          return e(k(c(a), 8 * a.length));
        },
        hash: function (a) {
          return d(k(c(a), 8 * a.length));
        },
      };
    })();
  (Function.prototype.bind ||
    (Function.prototype.bind = function (a) {
      var b = this,
        c = Array.prototype.slice,
        d = Array.prototype.concat,
        e = c.call(arguments, 1);
      return function () {
        return b.apply(a || this, d.call(e, c.call(arguments, 0)));
      };
    }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (a) {
        var b = this.length,
          c = Number(arguments[1]) || 0;
        for (
          c = c < 0 ? Math.ceil(c) : Math.floor(c), c < 0 && (c += b);
          c < b;
          c++
        )
          if (c in this && this[c] === a) return c;
        return -1;
      }),
    (function (a) {
      function b(a, b) {
        return new f.Builder(a, b);
      }
      function c(a) {
        return new f.Builder('message', a);
      }
      function d(a) {
        return new f.Builder('iq', a);
      }
      function e(a) {
        return new f.Builder('presence', a);
      }
      var f;
      ((f = {
        VERSION: '',
        NS: {
          HTTPBIND: 'http://jabber.org/protocol/httpbind',
          BOSH: 'urn:xmpp:xbosh',
          CLIENT: 'jabber:client',
          AUTH: 'jabber:iq:auth',
          ROSTER: 'jabber:iq:roster',
          PROFILE: 'jabber:iq:profile',
          DISCO_INFO: 'http://jabber.org/protocol/disco#info',
          DISCO_ITEMS: 'http://jabber.org/protocol/disco#items',
          MUC: 'http://jabber.org/protocol/muc',
          SASL: 'urn:ietf:params:xml:ns:xmpp-sasl',
          STREAM: 'http://etherx.jabber.org/streams',
          BIND: 'urn:ietf:params:xml:ns:xmpp-bind',
          SESSION: 'urn:ietf:params:xml:ns:xmpp-session',
          VERSION: 'jabber:iq:version',
          STANZAS: 'urn:ietf:params:xml:ns:xmpp-stanzas',
          XHTML_IM: 'http://jabber.org/protocol/xhtml-im',
          XHTML: 'http://www.w3.org/1999/xhtml',
        },
        XHTML: {
          tags: [
            'a',
            'blockquote',
            'br',
            'cite',
            'em',
            'img',
            'li',
            'ol',
            'p',
            'span',
            'strong',
            'ul',
            'body',
          ],
          attributes: {
            a: ['href'],
            blockquote: ['style'],
            br: [],
            cite: ['style'],
            em: [],
            img: ['src', 'alt', 'style', 'height', 'width'],
            li: ['style'],
            ol: ['style'],
            p: ['style'],
            span: ['style'],
            strong: [],
            ul: ['style'],
            body: [],
          },
          css: [
            'background-color',
            'color',
            'font-family',
            'font-size',
            'font-style',
            'font-weight',
            'margin-left',
            'margin-right',
            'text-align',
            'text-decoration',
          ],
          validTag: function (a) {
            for (var b = 0; b < f.XHTML.tags.length; b++)
              if (a == f.XHTML.tags[b]) return !0;
            return !1;
          },
          validAttribute: function (a, b) {
            if (
              void 0 !== f.XHTML.attributes[a] &&
              f.XHTML.attributes[a].length > 0
            )
              for (var c = 0; c < f.XHTML.attributes[a].length; c++)
                if (b == f.XHTML.attributes[a][c]) return !0;
            return !1;
          },
          validCSS: function (a) {
            for (var b = 0; b < f.XHTML.css.length; b++)
              if (a == f.XHTML.css[b]) return !0;
            return !1;
          },
        },
        Status: {
          ERROR: 0,
          CONNECTING: 1,
          CONNFAIL: 2,
          AUTHENTICATING: 3,
          AUTHFAIL: 4,
          CONNECTED: 5,
          DISCONNECTED: 6,
          DISCONNECTING: 7,
          ATTACHED: 8,
        },
        LogLevel: { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, FATAL: 4 },
        ElementType: { NORMAL: 1, TEXT: 3, CDATA: 4, FRAGMENT: 11 },
        TIMEOUT: 1.1,
        SECONDARY_TIMEOUT: 0.1,
        addNamespace: function (a, b) {
          f.NS[a] = b;
        },
        forEachChild: function (a, b, c) {
          var d, e;
          for (d = 0; d < a.childNodes.length; d++)
            ((e = a.childNodes[d]),
              e.nodeType != f.ElementType.NORMAL ||
                (b && !this.isTagEqual(e, b)) ||
                c(e));
        },
        isTagEqual: function (a, b) {
          return a.tagName.toLowerCase() == b.toLowerCase();
        },
        _xmlGenerator: null,
        _makeGenerator: function () {
          var a;
          return (
            void 0 === document.implementation.createDocument ||
            (document.implementation.createDocument &&
              document.documentMode &&
              document.documentMode < 10)
              ? ((a = this._getIEXmlDom()),
                a.appendChild(a.createElement('strophe')))
              : (a = document.implementation.createDocument(
                  'jabber:client',
                  'strophe',
                  null
                )),
            a
          );
        },
        xmlGenerator: function () {
          return (
            f._xmlGenerator || (f._xmlGenerator = f._makeGenerator()),
            f._xmlGenerator
          );
        },
        _getIEXmlDom: function () {
          for (
            var a = null,
              b = [
                'Msxml2.DOMDocument.6.0',
                'Msxml2.DOMDocument.5.0',
                'Msxml2.DOMDocument.4.0',
                'MSXML2.DOMDocument.3.0',
                'MSXML2.DOMDocument',
                'MSXML.DOMDocument',
                'Microsoft.XMLDOM',
              ],
              c = 0;
            c < b.length && null === a;
            c++
          )
            try {
              a = new ActiveXObject(b[c]);
            } catch (b) {
              a = null;
            }
          return a;
        },
        xmlElement: function (a) {
          if (!a) return null;
          var b,
            c,
            d,
            e = f.xmlGenerator().createElement(a);
          for (b = 1; b < arguments.length; b++)
            if (arguments[b])
              if (
                'string' == typeof arguments[b] ||
                'number' == typeof arguments[b]
              )
                e.appendChild(f.xmlTextNode(arguments[b]));
              else if (
                'object' == typeof arguments[b] &&
                'function' == typeof arguments[b].sort
              )
                for (c = 0; c < arguments[b].length; c++)
                  'object' == typeof arguments[b][c] &&
                    'function' == typeof arguments[b][c].sort &&
                    e.setAttribute(arguments[b][c][0], arguments[b][c][1]);
              else if ('object' == typeof arguments[b])
                for (d in arguments[b])
                  arguments[b].hasOwnProperty(d) &&
                    e.setAttribute(d, arguments[b][d]);
          return e;
        },
        xmlescape: function (a) {
          return (
            (a = a.replace(/\&/g, '&amp;')),
            (a = a.replace(/</g, '&lt;')),
            (a = a.replace(/>/g, '&gt;')),
            (a = a.replace(/'/g, '&apos;')),
            (a = a.replace(/"/g, '&quot;'))
          );
        },
        xmlTextNode: function (a) {
          return f.xmlGenerator().createTextNode(a);
        },
        xmlHtmlNode: function (a) {
          var b;
          if (window.DOMParser) {
            b = new DOMParser().parseFromString(a, 'text/xml');
          } else
            ((b = new ActiveXObject('Microsoft.XMLDOM')),
              (b.async = 'false'),
              b.loadXML(a));
          return b;
        },
        getText: function (a) {
          if (!a) return null;
          var b = '';
          0 === a.childNodes.length &&
            a.nodeType == f.ElementType.TEXT &&
            (b += a.nodeValue);
          for (var c = 0; c < a.childNodes.length; c++)
            a.childNodes[c].nodeType == f.ElementType.TEXT &&
              (b += a.childNodes[c].nodeValue);
          return f.xmlescape(b);
        },
        copyElement: function (a) {
          var b, c;
          if (a.nodeType == f.ElementType.NORMAL) {
            for (
              c = f.xmlElement(a.tagName), b = 0;
              b < a.attributes.length;
              b++
            )
              c.setAttribute(
                a.attributes[b].nodeName.toLowerCase(),
                a.attributes[b].value
              );
            for (b = 0; b < a.childNodes.length; b++)
              c.appendChild(f.copyElement(a.childNodes[b]));
          } else
            a.nodeType == f.ElementType.TEXT &&
              (c = f.xmlGenerator().createTextNode(a.nodeValue));
          return c;
        },
        createHtml: function (a) {
          var b, c, d, e, g, h, i, j, k, l, m;
          if (a.nodeType == f.ElementType.NORMAL)
            if (((e = a.nodeName.toLowerCase()), f.XHTML.validTag(e)))
              try {
                for (
                  c = f.xmlElement(e), b = 0;
                  b < f.XHTML.attributes[e].length;
                  b++
                )
                  if (
                    ((g = f.XHTML.attributes[e][b]),
                    void 0 !== (h = a.getAttribute(g)) &&
                      null !== h &&
                      '' !== h &&
                      !1 !== h &&
                      0 !== h)
                  )
                    if (
                      ('style' == g &&
                        'object' == typeof h &&
                        void 0 !== h.cssText &&
                        (h = h.cssText),
                      'style' == g)
                    ) {
                      for (i = [], j = h.split(';'), d = 0; d < j.length; d++)
                        ((k = j[d].split(':')),
                          (l = k[0]
                            .replace(/^\s*/, '')
                            .replace(/\s*$/, '')
                            .toLowerCase()),
                          f.XHTML.validCSS(l) &&
                            ((m = k[1].replace(/^\s*/, '').replace(/\s*$/, '')),
                            i.push(l + ': ' + m)));
                      i.length > 0 &&
                        ((h = i.join('; ')), c.setAttribute(g, h));
                    } else c.setAttribute(g, h);
                for (b = 0; b < a.childNodes.length; b++)
                  c.appendChild(f.createHtml(a.childNodes[b]));
              } catch (a) {
                c = f.xmlTextNode('');
              }
            else
              for (
                c = f.xmlGenerator().createDocumentFragment(), b = 0;
                b < a.childNodes.length;
                b++
              )
                c.appendChild(f.createHtml(a.childNodes[b]));
          else if (a.nodeType == f.ElementType.FRAGMENT)
            for (
              c = f.xmlGenerator().createDocumentFragment(), b = 0;
              b < a.childNodes.length;
              b++
            )
              c.appendChild(f.createHtml(a.childNodes[b]));
          else
            a.nodeType == f.ElementType.TEXT &&
              (c = f.xmlTextNode(a.nodeValue));
          return c;
        },
        escapeNode: function (a) {
          return a
            .replace(/^\s+|\s+$/g, '')
            .replace(/\\/g, '\\5c')
            .replace(/ /g, '\\20')
            .replace(/\"/g, '\\22')
            .replace(/\&/g, '\\26')
            .replace(/\'/g, '\\27')
            .replace(/\//g, '\\2f')
            .replace(/:/g, '\\3a')
            .replace(/</g, '\\3c')
            .replace(/>/g, '\\3e')
            .replace(/@/g, '\\40');
        },
        unescapeNode: function (a) {
          return a
            .replace(/\\20/g, ' ')
            .replace(/\\22/g, '"')
            .replace(/\\26/g, '&')
            .replace(/\\27/g, "'")
            .replace(/\\2f/g, '/')
            .replace(/\\3a/g, ':')
            .replace(/\\3c/g, '<')
            .replace(/\\3e/g, '>')
            .replace(/\\40/g, '@')
            .replace(/\\5c/g, '\\');
        },
        getNodeFromJid: function (a) {
          return a.indexOf('@') < 0 ? null : a.split('@')[0];
        },
        getDomainFromJid: function (a) {
          var b = f.getBareJidFromJid(a);
          if (b.indexOf('@') < 0) return b;
          var c = b.split('@');
          return (c.splice(0, 1), c.join('@'));
        },
        getResourceFromJid: function (a) {
          var b = a.split('/');
          return b.length < 2 ? null : (b.splice(0, 1), b.join('/'));
        },
        getBareJidFromJid: function (a) {
          return a ? a.split('/')[0] : null;
        },
        log: function (a, b) {},
        debug: function (a) {
          this.log(this.LogLevel.DEBUG, a);
        },
        info: function (a) {
          this.log(this.LogLevel.INFO, a);
        },
        warn: function (a) {
          this.log(this.LogLevel.WARN, a);
        },
        error: function (a) {
          this.log(this.LogLevel.ERROR, a);
        },
        fatal: function (a) {
          this.log(this.LogLevel.FATAL, a);
        },
        serialize: function (a) {
          var b;
          if (!a) return null;
          'function' == typeof a.tree && (a = a.tree());
          var c,
            d,
            e = a.nodeName;
          for (
            a.getAttribute('_realname') && (e = a.getAttribute('_realname')),
              b = '<' + e,
              c = 0;
            c < a.attributes.length;
            c++
          )
            '_realname' != a.attributes[c].nodeName &&
              (b +=
                ' ' +
                a.attributes[c].nodeName.toLowerCase() +
                "='" +
                a.attributes[c].value
                  .replace(/&/g, '&amp;')
                  .replace(/\'/g, '&apos;')
                  .replace(/>/g, '&gt;')
                  .replace(/</g, '&lt;') +
                "'");
          if (a.childNodes.length > 0) {
            for (b += '>', c = 0; c < a.childNodes.length; c++)
              switch (((d = a.childNodes[c]), d.nodeType)) {
                case f.ElementType.NORMAL:
                  b += f.serialize(d);
                  break;
                case f.ElementType.TEXT:
                  b += f.xmlescape(d.nodeValue);
                  break;
                case f.ElementType.CDATA:
                  b += '<![CDATA[' + d.nodeValue + ']]>';
              }
            b += '</' + e + '>';
          } else b += '/>';
          return b;
        },
        _requestId: 0,
        _connectionPlugins: {},
        addConnectionPlugin: function (a, b) {
          f._connectionPlugins[a] = b;
        },
      }),
        (f.Builder = function (a, b) {
          (('presence' != a && 'message' != a && 'iq' != a) ||
            (b && !b.xmlns
              ? (b.xmlns = f.NS.CLIENT)
              : b || (b = { xmlns: f.NS.CLIENT })),
            (this.nodeTree = f.xmlElement(a, b)),
            (this.node = this.nodeTree));
        }),
        (f.Builder.prototype = {
          tree: function () {
            return this.nodeTree;
          },
          toString: function () {
            return f.serialize(this.nodeTree);
          },
          up: function () {
            return ((this.node = this.node.parentNode), this);
          },
          attrs: function (a) {
            for (var b in a)
              a.hasOwnProperty(b) && this.node.setAttribute(b, a[b]);
            return this;
          },
          c: function (a, b, c) {
            var d = f.xmlElement(a, b, c);
            return (this.node.appendChild(d), c || (this.node = d), this);
          },
          cnode: function (a) {
            var b,
              c = f.xmlGenerator();
            try {
              b = void 0 !== c.importNode;
            } catch (a) {
              b = !1;
            }
            var d = b ? c.importNode(a, !0) : f.copyElement(a);
            return (this.node.appendChild(d), (this.node = d), this);
          },
          t: function (a) {
            var b = f.xmlTextNode(a);
            return (this.node.appendChild(b), this);
          },
          h: function (a) {
            var b = document.createElement('body');
            b.innerHTML = a;
            for (var c = f.createHtml(b); c.childNodes.length > 0; )
              this.node.appendChild(c.childNodes[0]);
            return this;
          },
        }),
        (f.Handler = function (a, b, c, d, e, g, h) {
          ((this.handler = a),
            (this.ns = b),
            (this.name = c),
            (this.type = d),
            (this.id = e),
            (this.options = h || { matchBare: !1 }),
            this.options.matchBare || (this.options.matchBare = !1),
            this.options.matchBare
              ? (this.from = g ? f.getBareJidFromJid(g) : null)
              : (this.from = g),
            (this.user = !0));
        }),
        (f.Handler.prototype = {
          isMatch: function (a) {
            var b,
              c = null;
            if (
              ((c = this.options.matchBare
                ? f.getBareJidFromJid(a.getAttribute('from'))
                : a.getAttribute('from')),
              (b = !1),
              this.ns)
            ) {
              var d = this;
              (f.forEachChild(a, null, function (a) {
                a.getAttribute('xmlns') == d.ns && (b = !0);
              }),
                (b = b || a.getAttribute('xmlns') == this.ns));
            } else b = !0;
            return !(
              !b ||
              (this.name && !f.isTagEqual(a, this.name)) ||
              (this.type && a.getAttribute('type') != this.type) ||
              (this.id && a.getAttribute('id') != this.id) ||
              (this.from && c != this.from)
            );
          },
          run: function (a) {
            var b = null;
            try {
              b = this.handler(a);
            } catch (a) {
              throw (
                a.sourceURL
                  ? f.fatal(
                      'error: ' +
                        this.handler +
                        ' ' +
                        a.sourceURL +
                        ':' +
                        a.line +
                        ' - ' +
                        a.name +
                        ': ' +
                        a.message
                    )
                  : a.fileName
                    ? f.fatal(
                        'error: ' +
                          this.handler +
                          ' ' +
                          a.fileName +
                          ':' +
                          a.lineNumber +
                          ' - ' +
                          a.name +
                          ': ' +
                          a.message
                      )
                    : f.fatal('error: ' + a.message + '\n' + a.stack),
                a
              );
            }
            return b;
          },
          toString: function () {
            return (
              '{Handler: ' +
              this.handler +
              '(' +
              this.name +
              ',' +
              this.id +
              ',' +
              this.ns +
              ')}'
            );
          },
        }),
        (f.TimedHandler = function (a, b) {
          ((this.period = a),
            (this.handler = b),
            (this.lastCalled = new Date().getTime()),
            (this.user = !0));
        }),
        (f.TimedHandler.prototype = {
          run: function () {
            return ((this.lastCalled = new Date().getTime()), this.handler());
          },
          reset: function () {
            this.lastCalled = new Date().getTime();
          },
          toString: function () {
            return '{TimedHandler: ' + this.handler + '(' + this.period + ')}';
          },
        }),
        (f.Connection = function (a, b) {
          ((this.service = a), (this.options = b || {}));
          var c = this.options.protocol || '';
          (0 === a.indexOf('ws:') ||
          0 === a.indexOf('wss:') ||
          0 === c.indexOf('ws')
            ? (this._proto = new f.Websocket(this))
            : (this._proto = new f.Bosh(this)),
            (this.jid = ''),
            (this.domain = null),
            (this.features = null),
            (this._sasl_data = {}),
            (this.do_session = !1),
            (this.do_bind = !1),
            (this.timedHandlers = []),
            (this.handlers = []),
            (this.removeTimeds = []),
            (this.removeHandlers = []),
            (this.addTimeds = []),
            (this.addHandlers = []),
            (this._authentication = {}),
            (this._idleTimeout = null),
            (this._disconnectTimeout = null),
            (this.do_authentication = !0),
            (this.authenticated = !1),
            (this.disconnecting = !1),
            (this.connected = !1),
            (this.errors = 0),
            (this.paused = !1),
            (this._data = []),
            (this._uniqueId = 0),
            (this._sasl_success_handler = null),
            (this._sasl_failure_handler = null),
            (this._sasl_challenge_handler = null),
            (this.maxRetries = 5),
            (this._idleTimeout = setTimeout(this._onIdle.bind(this), 100)));
          for (var d in f._connectionPlugins)
            if (f._connectionPlugins.hasOwnProperty(d)) {
              var e = f._connectionPlugins[d],
                g = function () {};
              ((g.prototype = e), (this[d] = new g()), this[d].init(this));
            }
        }),
        (f.Connection.prototype = {
          reset: function () {
            (this._proto._reset(),
              (this.do_session = !1),
              (this.do_bind = !1),
              (this.timedHandlers = []),
              (this.handlers = []),
              (this.removeTimeds = []),
              (this.removeHandlers = []),
              (this.addTimeds = []),
              (this.addHandlers = []),
              (this._authentication = {}),
              (this.authenticated = !1),
              (this.disconnecting = !1),
              (this.connected = !1),
              (this.errors = 0),
              (this._requests = []),
              (this._uniqueId = 0));
          },
          pause: function () {
            this.paused = !0;
          },
          resume: function () {
            this.paused = !1;
          },
          getUniqueId: function (a) {
            return 'string' == typeof a || 'number' == typeof a
              ? ++this._uniqueId + ':' + a
              : ++this._uniqueId + '';
          },
          connect: function (a, b, c, d, e, g) {
            ((this.jid = a),
              (this.authzid = f.getBareJidFromJid(this.jid)),
              (this.authcid = f.getNodeFromJid(this.jid)),
              (this.pass = b),
              (this.servtype = 'xmpp'),
              (this.connect_callback = c),
              (this.disconnecting = !1),
              (this.connected = !1),
              (this.authenticated = !1),
              (this.errors = 0),
              (this.domain = f.getDomainFromJid(this.jid)),
              this._changeConnectStatus(f.Status.CONNECTING, null),
              this._proto._connect(d, e, g));
          },
          attach: function (a, b, c, d, e, f, g) {
            this._proto._attach(a, b, c, d, e, f, g);
          },
          xmlInput: function (a) {},
          xmlOutput: function (a) {},
          rawInput: function (a) {},
          rawOutput: function (a) {},
          send: function (a) {
            if (null !== a) {
              if ('function' == typeof a.sort)
                for (var b = 0; b < a.length; b++) this._queueData(a[b]);
              else
                'function' == typeof a.tree
                  ? this._queueData(a.tree())
                  : this._queueData(a);
              this._proto._send();
            }
          },
          flush: function () {
            (clearTimeout(this._idleTimeout), this._onIdle());
          },
          sendIQ: function (a, b, c, d) {
            var e = null,
              f = this;
            'function' == typeof a.tree && (a = a.tree());
            var g = a.getAttribute('id');
            g || ((g = this.getUniqueId('sendIQ')), a.setAttribute('id', g));
            var h = this.addHandler(
              function (a) {
                e && f.deleteTimedHandler(e);
                var d = a.getAttribute('type');
                if ('result' == d) b && b(a);
                else {
                  if ('error' != d)
                    throw {
                      name: 'StropheError',
                      message: 'Got bad IQ type of ' + d,
                    };
                  c && c(a);
                }
              },
              null,
              'iq',
              null,
              g
            );
            return (
              d &&
                (e = this.addTimedHandler(d, function () {
                  return (f.deleteHandler(h), c && c(null), !1);
                })),
              this.send(a),
              g
            );
          },
          _queueData: function (a) {
            if (null === a || !a.tagName || !a.childNodes)
              throw {
                name: 'StropheError',
                message: 'Cannot queue non-DOMElement.',
              };
            this._data.push(a);
          },
          _sendRestart: function () {
            (this._data.push('restart'),
              this._proto._sendRestart(),
              (this._idleTimeout = setTimeout(this._onIdle.bind(this), 100)));
          },
          addTimedHandler: function (a, b) {
            var c = new f.TimedHandler(a, b);
            return (this.addTimeds.push(c), c);
          },
          deleteTimedHandler: function (a) {
            this.removeTimeds.push(a);
          },
          addHandler: function (a, b, c, d, e, g, h) {
            var i = new f.Handler(a, b, c, d, e, g, h);
            return (this.addHandlers.push(i), i);
          },
          deleteHandler: function (a) {
            this.removeHandlers.push(a);
          },
          disconnect: function (a) {
            if (
              (this._changeConnectStatus(f.Status.DISCONNECTING, a),
              f.info('Disconnect was called because: ' + a),
              this.connected)
            ) {
              var b = !1;
              ((this.disconnecting = !0),
                this.authenticated &&
                  (b = e({ xmlns: f.NS.CLIENT, type: 'unavailable' })),
                (this._disconnectTimeout = this._addSysTimedHandler(
                  3e3,
                  this._onDisconnectTimeout.bind(this)
                )),
                this._proto._disconnect(b));
            }
          },
          _changeConnectStatus: function (a, b) {
            for (var c in f._connectionPlugins)
              if (f._connectionPlugins.hasOwnProperty(c)) {
                var d = this[c];
                if (d.statusChanged)
                  try {
                    d.statusChanged(a, b);
                  } catch (a) {
                    f.error(
                      c + ' plugin caused an exception changing status: ' + a
                    );
                  }
              }
            if (this.connect_callback)
              try {
                this.connect_callback(a, b);
              } catch (a) {
                f.error('User connection callback caused an exception: ' + a);
              }
          },
          _doDisconnect: function () {
            (null !== this._disconnectTimeout &&
              (this.deleteTimedHandler(this._disconnectTimeout),
              (this._disconnectTimeout = null)),
              f.info('_doDisconnect was called'),
              this._proto._doDisconnect(),
              (this.authenticated = !1),
              (this.disconnecting = !1),
              (this.handlers = []),
              (this.timedHandlers = []),
              (this.removeTimeds = []),
              (this.removeHandlers = []),
              (this.addTimeds = []),
              (this.addHandlers = []),
              this._changeConnectStatus(f.Status.DISCONNECTED, null),
              (this.connected = !1));
          },
          _dataRecv: function (a, b) {
            f.info('_dataRecv called');
            var c = this._proto._reqToData(a);
            if (null !== c) {
              (this.xmlInput !== f.Connection.prototype.xmlInput &&
                (c.nodeName === this._proto.strip && c.childNodes.length
                  ? this.xmlInput(c.childNodes[0])
                  : this.xmlInput(c)),
                this.rawInput !== f.Connection.prototype.rawInput &&
                  (b ? this.rawInput(b) : this.rawInput(f.serialize(c))));
              for (var d, e; this.removeHandlers.length > 0; )
                ((e = this.removeHandlers.pop()),
                  (d = this.handlers.indexOf(e)) >= 0 &&
                    this.handlers.splice(d, 1));
              for (; this.addHandlers.length > 0; )
                this.handlers.push(this.addHandlers.pop());
              if (this.disconnecting && this._proto._emptyQueue())
                return void this._doDisconnect();
              var g,
                h,
                i = c.getAttribute('type');
              if (null !== i && 'terminate' == i) {
                if (this.disconnecting) return;
                return (
                  (g = c.getAttribute('condition')),
                  (h = c.getElementsByTagName('conflict')),
                  null !== g
                    ? ('remote-stream-error' == g &&
                        h.length > 0 &&
                        (g = 'conflict'),
                      this._changeConnectStatus(f.Status.CONNFAIL, g))
                    : this._changeConnectStatus(f.Status.CONNFAIL, 'unknown'),
                  void this.disconnect('unknown stream-error')
                );
              }
              var j = this;
              f.forEachChild(c, null, function (a) {
                var b, c;
                for (
                  c = j.handlers, j.handlers = [], b = 0;
                  b < c.length;
                  b++
                ) {
                  var d = c[b];
                  try {
                    !d.isMatch(a) || (!j.authenticated && d.user)
                      ? j.handlers.push(d)
                      : d.run(a) && j.handlers.push(d);
                  } catch (a) {
                    f.warn(
                      'Removing Strophe handlers due to uncaught exception: ' +
                        a.message
                    );
                  }
                }
              });
            }
          },
          mechanisms: {},
          _connect_cb: function (a, b, c) {
            (f.info('_connect_cb was called'), (this.connected = !0));
            var d = this._proto._reqToData(a);
            if (d) {
              (this.xmlInput !== f.Connection.prototype.xmlInput &&
                (d.nodeName === this._proto.strip && d.childNodes.length
                  ? this.xmlInput(d.childNodes[0])
                  : this.xmlInput(d)),
                this.rawInput !== f.Connection.prototype.rawInput &&
                  (c ? this.rawInput(c) : this.rawInput(f.serialize(d))));
              if (this._proto._connect_cb(d) !== f.Status.CONNFAIL) {
                ((this._authentication.sasl_scram_sha1 = !1),
                  (this._authentication.sasl_plain = !1),
                  (this._authentication.sasl_digest_md5 = !1),
                  (this._authentication.sasl_anonymous = !1),
                  (this._authentication.legacy_auth = !1));
                var e = d.getElementsByTagName('stream:features').length > 0;
                e || (e = d.getElementsByTagName('features').length > 0);
                var g,
                  h,
                  i = d.getElementsByTagName('mechanism'),
                  j = [];
                if (!e) return void this._proto._no_auth_received(b);
                if (i.length > 0)
                  for (g = 0; g < i.length; g++)
                    ((h = f.getText(i[g])),
                      this.mechanisms[h] && j.push(this.mechanisms[h]));
                if (
                  ((this._authentication.legacy_auth =
                    d.getElementsByTagName('auth').length > 0),
                  !(this._authentication.legacy_auth || j.length > 0))
                )
                  return void this._proto._no_auth_received(b);
                !1 !== this.do_authentication && this.authenticate(j);
              }
            }
          },
          authenticate: function (a) {
            var c;
            for (c = 0; c < a.length - 1; ++c) {
              for (var e = c, g = c + 1; g < a.length; ++g)
                a[g].prototype.priority > a[e].prototype.priority && (e = g);
              if (e != c) {
                var h = a[c];
                ((a[c] = a[e]), (a[e] = h));
              }
            }
            var i = !1;
            for (c = 0; c < a.length; ++c)
              if (a[c].test(this)) {
                ((this._sasl_success_handler = this._addSysHandler(
                  this._sasl_success_cb.bind(this),
                  null,
                  'success',
                  null,
                  null
                )),
                  (this._sasl_failure_handler = this._addSysHandler(
                    this._sasl_failure_cb.bind(this),
                    null,
                    'failure',
                    null,
                    null
                  )),
                  (this._sasl_challenge_handler = this._addSysHandler(
                    this._sasl_challenge_cb.bind(this),
                    null,
                    'challenge',
                    null,
                    null
                  )),
                  (this._sasl_mechanism = new a[c]()),
                  this._sasl_mechanism.onStart(this));
                var j = b('auth', {
                  xmlns: f.NS.SASL,
                  mechanism: this._sasl_mechanism.name,
                });
                if (this._sasl_mechanism.isClientFirst) {
                  var k = this._sasl_mechanism.onChallenge(this, null);
                  j.t(Base64.encode(k));
                }
                (this.send(j.tree()), (i = !0));
                break;
              }
            i ||
              (null === f.getNodeFromJid(this.jid)
                ? (this._changeConnectStatus(
                    f.Status.CONNFAIL,
                    'x-strophe-bad-non-anon-jid'
                  ),
                  this.disconnect('x-strophe-bad-non-anon-jid'))
                : (this._changeConnectStatus(f.Status.AUTHENTICATING, null),
                  this._addSysHandler(
                    this._auth1_cb.bind(this),
                    null,
                    null,
                    null,
                    '_auth_1'
                  ),
                  this.send(
                    d({ type: 'get', to: this.domain, id: '_auth_1' })
                      .c('query', { xmlns: f.NS.AUTH })
                      .c('username', {})
                      .t(f.getNodeFromJid(this.jid))
                      .tree()
                  )));
          },
          _sasl_challenge_cb: function (a) {
            var c = Base64.decode(f.getText(a)),
              d = this._sasl_mechanism.onChallenge(this, c),
              e = b('response', { xmlns: f.NS.SASL });
            return ('' !== d && e.t(Base64.encode(d)), this.send(e.tree()), !0);
          },
          _auth1_cb: function (a) {
            var b = d({ type: 'set', id: '_auth_2' })
              .c('query', { xmlns: f.NS.AUTH })
              .c('username', {})
              .t(f.getNodeFromJid(this.jid))
              .up()
              .c('password')
              .t(this.pass);
            return (
              f.getResourceFromJid(this.jid) ||
                (this.jid = f.getBareJidFromJid(this.jid) + '/strophe'),
              b.up().c('resource', {}).t(f.getResourceFromJid(this.jid)),
              this._addSysHandler(
                this._auth2_cb.bind(this),
                null,
                null,
                null,
                '_auth_2'
              ),
              this.send(b.tree()),
              !1
            );
          },
          _sasl_success_cb: function (a) {
            if (this._sasl_data['server-signature']) {
              var b,
                c = Base64.decode(f.getText(a)),
                d = /([a-z]+)=([^,]+)(,|$)/,
                e = c.match(d);
              if (
                ('v' == e[1] && (b = e[2]),
                b != this._sasl_data['server-signature'])
              )
                return (
                  this.deleteHandler(this._sasl_failure_handler),
                  (this._sasl_failure_handler = null),
                  this._sasl_challenge_handler &&
                    (this.deleteHandler(this._sasl_challenge_handler),
                    (this._sasl_challenge_handler = null)),
                  (this._sasl_data = {}),
                  this._sasl_failure_cb(null)
                );
            }
            return (
              f.info('SASL authentication succeeded.'),
              this._sasl_mechanism && this._sasl_mechanism.onSuccess(),
              this.deleteHandler(this._sasl_failure_handler),
              (this._sasl_failure_handler = null),
              this._sasl_challenge_handler &&
                (this.deleteHandler(this._sasl_challenge_handler),
                (this._sasl_challenge_handler = null)),
              this._addSysHandler(
                this._sasl_auth1_cb.bind(this),
                null,
                'stream:features',
                null,
                null
              ),
              this._sendRestart(),
              !1
            );
          },
          _sasl_auth1_cb: function (a) {
            this.features = a;
            var b, c;
            for (b = 0; b < a.childNodes.length; b++)
              ((c = a.childNodes[b]),
                'bind' == c.nodeName && (this.do_bind = !0),
                'session' == c.nodeName && (this.do_session = !0));
            if (!this.do_bind)
              return (this._changeConnectStatus(f.Status.AUTHFAIL, null), !1);
            this._addSysHandler(
              this._sasl_bind_cb.bind(this),
              null,
              null,
              null,
              '_bind_auth_2'
            );
            var e = f.getResourceFromJid(this.jid);
            return (
              e
                ? this.send(
                    d({ type: 'set', id: '_bind_auth_2' })
                      .c('bind', { xmlns: f.NS.BIND })
                      .c('resource', {})
                      .t(e)
                      .tree()
                  )
                : this.send(
                    d({ type: 'set', id: '_bind_auth_2' })
                      .c('bind', { xmlns: f.NS.BIND })
                      .tree()
                  ),
              !1
            );
          },
          _sasl_bind_cb: function (a) {
            if ('error' == a.getAttribute('type')) {
              f.info('SASL binding failed.');
              var b,
                c = a.getElementsByTagName('conflict');
              return (
                c.length > 0 && (b = 'conflict'),
                this._changeConnectStatus(f.Status.AUTHFAIL, b),
                !1
              );
            }
            var e,
              g = a.getElementsByTagName('bind');
            if (!(g.length > 0))
              return (
                f.info('SASL binding failed.'),
                this._changeConnectStatus(f.Status.AUTHFAIL, null),
                !1
              );
            ((e = g[0].getElementsByTagName('jid')),
              e.length > 0 &&
                ((this.jid = f.getText(e[0])),
                this.do_session
                  ? (this._addSysHandler(
                      this._sasl_session_cb.bind(this),
                      null,
                      null,
                      null,
                      '_session_auth_2'
                    ),
                    this.send(
                      d({ type: 'set', id: '_session_auth_2' })
                        .c('session', { xmlns: f.NS.SESSION })
                        .tree()
                    ))
                  : ((this.authenticated = !0),
                    this._changeConnectStatus(f.Status.CONNECTED, null))));
          },
          _sasl_session_cb: function (a) {
            if ('result' == a.getAttribute('type'))
              ((this.authenticated = !0),
                this._changeConnectStatus(f.Status.CONNECTED, null));
            else if ('error' == a.getAttribute('type'))
              return (
                f.info('Session creation failed.'),
                this._changeConnectStatus(f.Status.AUTHFAIL, null),
                !1
              );
            return !1;
          },
          _sasl_failure_cb: function (a) {
            return (
              this._sasl_success_handler &&
                (this.deleteHandler(this._sasl_success_handler),
                (this._sasl_success_handler = null)),
              this._sasl_challenge_handler &&
                (this.deleteHandler(this._sasl_challenge_handler),
                (this._sasl_challenge_handler = null)),
              this._sasl_mechanism && this._sasl_mechanism.onFailure(),
              this._changeConnectStatus(f.Status.AUTHFAIL, null),
              !1
            );
          },
          _auth2_cb: function (a) {
            return (
              'result' == a.getAttribute('type')
                ? ((this.authenticated = !0),
                  this._changeConnectStatus(f.Status.CONNECTED, null))
                : 'error' == a.getAttribute('type') &&
                  (this._changeConnectStatus(f.Status.AUTHFAIL, null),
                  this.disconnect('authentication failed')),
              !1
            );
          },
          _addSysTimedHandler: function (a, b) {
            var c = new f.TimedHandler(a, b);
            return ((c.user = !1), this.addTimeds.push(c), c);
          },
          _addSysHandler: function (a, b, c, d, e) {
            var g = new f.Handler(a, b, c, d, e);
            return ((g.user = !1), this.addHandlers.push(g), g);
          },
          _onDisconnectTimeout: function () {
            return (
              f.info('_onDisconnectTimeout was called'),
              this._proto._onDisconnectTimeout(),
              this._doDisconnect(),
              !1
            );
          },
          _onIdle: function () {
            for (var a, b, c, d; this.addTimeds.length > 0; )
              this.timedHandlers.push(this.addTimeds.pop());
            for (; this.removeTimeds.length > 0; )
              ((b = this.removeTimeds.pop()),
                (a = this.timedHandlers.indexOf(b)) >= 0 &&
                  this.timedHandlers.splice(a, 1));
            var e = new Date().getTime();
            for (d = [], a = 0; a < this.timedHandlers.length; a++)
              ((b = this.timedHandlers[a]),
                (!this.authenticated && b.user) ||
                  ((c = b.lastCalled + b.period),
                  c - e <= 0 ? b.run() && d.push(b) : d.push(b)));
            ((this.timedHandlers = d),
              clearTimeout(this._idleTimeout),
              this._proto._onIdle(),
              this.connected &&
                (this._idleTimeout = setTimeout(this._onIdle.bind(this), 100)));
          },
        }),
        a && a(f, b, c, d, e),
        (f.SASLMechanism = function (a, b, c) {
          ((this.name = a), (this.isClientFirst = b), (this.priority = c));
        }),
        (f.SASLMechanism.prototype = {
          test: function (a) {
            return !0;
          },
          onStart: function (a) {
            this._connection = a;
          },
          onChallenge: function (a, b) {
            throw new Error('You should implement challenge handling!');
          },
          onFailure: function () {
            this._connection = null;
          },
          onSuccess: function () {
            this._connection = null;
          },
        }),
        (f.SASLAnonymous = function () {}),
        (f.SASLAnonymous.prototype = new f.SASLMechanism('ANONYMOUS', !1, 10)),
        (f.SASLAnonymous.test = function (a) {
          return null === a.authcid;
        }),
        (f.Connection.prototype.mechanisms[f.SASLAnonymous.prototype.name] =
          f.SASLAnonymous),
        (f.SASLPlain = function () {}),
        (f.SASLPlain.prototype = new f.SASLMechanism('PLAIN', !0, 20)),
        (f.SASLPlain.test = function (a) {
          return null !== a.authcid;
        }),
        (f.SASLPlain.prototype.onChallenge = function (a) {
          var b = a.authzid;
          return ((b += '\0'), (b += a.authcid), (b += '\0'), (b += a.pass));
        }),
        (f.Connection.prototype.mechanisms[f.SASLPlain.prototype.name] =
          f.SASLPlain),
        (f.SASLSHA1 = function () {}),
        (f.SASLSHA1.prototype = new f.SASLMechanism('SCRAM-SHA-1', !0, 40)),
        (f.SASLSHA1.test = function (a) {
          return null !== a.authcid;
        }),
        (f.SASLSHA1.prototype.onChallenge = function (a, b, c) {
          var d = c || MD5.hexdigest(1234567890 * Math.random()),
            e = 'n=' + a.authcid;
          return (
            (e += ',r='),
            (e += d),
            (a._sasl_data.cnonce = d),
            (a._sasl_data['client-first-message-bare'] = e),
            (e = 'n,,' + e),
            (this.onChallenge = function (a, b) {
              for (
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  n = 'c=biws,',
                  o = a._sasl_data['client-first-message-bare'] + ',' + b + ',',
                  p = a._sasl_data.cnonce,
                  q = /([a-z]+)=([^,]+)(,|$)/;
                b.match(q);

              ) {
                var r = b.match(q);
                switch (((b = b.replace(r[0], '')), r[1])) {
                  case 'r':
                    c = r[2];
                    break;
                  case 's':
                    d = r[2];
                    break;
                  case 'i':
                    e = r[2];
                }
              }
              if (c.substr(0, p.length) !== p)
                return ((a._sasl_data = {}), a._sasl_failure_cb());
              for (
                n += 'r=' + c,
                  o += n,
                  d = Base64.decode(d),
                  d += '\0\0\0',
                  f = h = core_hmac_sha1(a.pass, d),
                  i = 1;
                i < e;
                i++
              ) {
                for (g = core_hmac_sha1(a.pass, binb2str(h)), j = 0; j < 5; j++)
                  f[j] ^= g[j];
                h = g;
              }
              for (
                f = binb2str(f),
                  k = core_hmac_sha1(f, 'Client Key'),
                  l = str_hmac_sha1(f, 'Server Key'),
                  m = core_hmac_sha1(str_sha1(binb2str(k)), o),
                  a._sasl_data['server-signature'] = b64_hmac_sha1(l, o),
                  j = 0;
                j < 5;
                j++
              )
                k[j] ^= m[j];
              return (n += ',p=' + Base64.encode(binb2str(k)));
            }.bind(this)),
            e
          );
        }),
        (f.Connection.prototype.mechanisms[f.SASLSHA1.prototype.name] =
          f.SASLSHA1),
        (f.SASLMD5 = function () {}),
        (f.SASLMD5.prototype = new f.SASLMechanism('DIGEST-MD5', !1, 30)),
        (f.SASLMD5.test = function (a) {
          return null !== a.authcid;
        }),
        (f.SASLMD5.prototype._quote = function (a) {
          return '"' + a.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
        }),
        (f.SASLMD5.prototype.onChallenge = function (a, b, c) {
          for (
            var d,
              e = /([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/,
              f = c || MD5.hexdigest('' + 1234567890 * Math.random()),
              g = '',
              h = null,
              i = '';
            b.match(e);

          )
            switch (
              ((d = b.match(e)),
              (b = b.replace(d[0], '')),
              (d[2] = d[2].replace(/^"(.+)"$/, '$1')),
              d[1])
            ) {
              case 'realm':
                g = d[2];
                break;
              case 'nonce':
                i = d[2];
                break;
              case 'qop':
                d[2];
                break;
              case 'host':
                h = d[2];
            }
          var j = a.servtype + '/' + a.domain;
          null !== h && (j = j + '/' + h);
          var k =
              MD5.hash(a.authcid + ':' + g + ':' + this._connection.pass) +
              ':' +
              i +
              ':' +
              f,
            l = 'AUTHENTICATE:' + j,
            m = '';
          return (
            (m += 'charset=utf-8,'),
            (m += 'username=' + this._quote(a.authcid) + ','),
            (m += 'realm=' + this._quote(g) + ','),
            (m += 'nonce=' + this._quote(i) + ','),
            (m += 'nc=00000001,'),
            (m += 'cnonce=' + this._quote(f) + ','),
            (m += 'digest-uri=' + this._quote(j) + ','),
            (m +=
              'response=' +
              MD5.hexdigest(
                MD5.hexdigest(k) +
                  ':' +
                  i +
                  ':00000001:' +
                  f +
                  ':auth:' +
                  MD5.hexdigest(l)
              ) +
              ','),
            (m += 'qop=auth'),
            (this.onChallenge = function () {
              return '';
            }.bind(this)),
            m
          );
        }),
        (f.Connection.prototype.mechanisms[f.SASLMD5.prototype.name] =
          f.SASLMD5));
    })(function () {
      ((window.Strophe = arguments[0]),
        (window.$build = arguments[1]),
        (window.$msg = arguments[2]),
        (window.$iq = arguments[3]),
        (window.$pres = arguments[4]));
    }),
    (Strophe.Request = function (a, b, c, d) {
      ((this.id = ++Strophe._requestId),
        (this.xmlData = a),
        (this.data = Strophe.serialize(a)),
        (this.origFunc = b),
        (this.func = b),
        (this.rid = c),
        (this.date = NaN),
        (this.sends = d || 0),
        (this.abort = !1),
        (this.dead = null),
        (this.age = function () {
          return this.date ? (new Date() - this.date) / 1e3 : 0;
        }),
        (this.timeDead = function () {
          return this.dead ? (new Date() - this.dead) / 1e3 : 0;
        }),
        (this.xhr = this._newXHR()));
    }),
    (Strophe.Request.prototype = {
      getResponse: function () {
        var a = null;
        if (this.xhr.responseXML && this.xhr.responseXML.documentElement) {
          if (
            ((a = this.xhr.responseXML.documentElement),
            'parsererror' == a.tagName)
          )
            throw (
              Strophe.error('invalid response received'),
              Strophe.error('responseText: ' + this.xhr.responseText),
              Strophe.error(
                'responseXML: ' + Strophe.serialize(this.xhr.responseXML)
              ),
              'parsererror'
            );
        } else
          this.xhr.responseText &&
            (Strophe.error('invalid response received'),
            Strophe.error('responseText: ' + this.xhr.responseText),
            Strophe.error(
              'responseXML: ' + Strophe.serialize(this.xhr.responseXML)
            ));
        return a;
      },
      _newXHR: function () {
        var a = null;
        return (
          window.XMLHttpRequest
            ? ((a = new XMLHttpRequest()),
              a.overrideMimeType && a.overrideMimeType('text/xml'))
            : window.ActiveXObject &&
              (a = new ActiveXObject('Microsoft.XMLHTTP')),
          (a.onreadystatechange = this.func.bind(null, this)),
          a
        );
      },
    }),
    (Strophe.Bosh = function (a) {
      ((this._conn = a),
        (this.rid = Math.floor(4294967295 * Math.random())),
        (this.sid = null),
        (this.hold = 1),
        (this.wait = 60),
        (this.window = 5),
        (this._requests = []));
    }),
    (Strophe.Bosh.prototype = {
      strip: null,
      _buildBody: function () {
        var a = $build('body', { rid: this.rid++, xmlns: Strophe.NS.HTTPBIND });
        return (null !== this.sid && a.attrs({ sid: this.sid }), a);
      },
      _reset: function () {
        ((this.rid = Math.floor(4294967295 * Math.random())),
          (this.sid = null));
      },
      _connect: function (a, b, c) {
        ((this.wait = a || this.wait), (this.hold = b || this.hold));
        var d = this._buildBody().attrs({
          to: this._conn.domain,
          'xml:lang': 'en',
          wait: this.wait,
          hold: this.hold,
          content: 'text/xml; charset=utf-8',
          ver: '1.6',
          'xmpp:version': '1.0',
          'xmlns:xmpp': Strophe.NS.BOSH,
        });
        c && d.attrs({ route: c });
        var e = this._conn._connect_cb;
        (this._requests.push(
          new Strophe.Request(
            d.tree(),
            this._onRequestStateChange.bind(this, e.bind(this._conn)),
            d.tree().getAttribute('rid')
          )
        ),
          this._throttledRequestHandler());
      },
      _attach: function (a, b, c, d, e, f, g) {
        ((this._conn.jid = a),
          (this.sid = b),
          (this.rid = c),
          (this._conn.connect_callback = d),
          (this._conn.domain = Strophe.getDomainFromJid(this._conn.jid)),
          (this._conn.authenticated = !0),
          (this._conn.connected = !0),
          (this.wait = e || this.wait),
          (this.hold = f || this.hold),
          (this.window = g || this.window),
          this._conn._changeConnectStatus(Strophe.Status.ATTACHED, null));
      },
      _connect_cb: function (a) {
        var b,
          c,
          d = a.getAttribute('type');
        if (null !== d && 'terminate' == d)
          return (
            Strophe.error('BOSH-Connection failed: ' + b),
            (b = a.getAttribute('condition')),
            (c = a.getElementsByTagName('conflict')),
            null !== b
              ? ('remote-stream-error' == b && c.length > 0 && (b = 'conflict'),
                this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, b))
              : this._conn._changeConnectStatus(
                  Strophe.Status.CONNFAIL,
                  'unknown'
                ),
            this._conn._doDisconnect(),
            Strophe.Status.CONNFAIL
          );
        this.sid || (this.sid = a.getAttribute('sid'));
        var e = a.getAttribute('requests');
        e && (this.window = parseInt(e, 10));
        var f = a.getAttribute('hold');
        f && (this.hold = parseInt(f, 10));
        var g = a.getAttribute('wait');
        g && (this.wait = parseInt(g, 10));
      },
      _disconnect: function (a) {
        this._sendTerminate(a);
      },
      _doDisconnect: function () {
        ((this.sid = null),
          (this.rid = Math.floor(4294967295 * Math.random())));
      },
      _emptyQueue: function () {
        return 0 === this._requests.length;
      },
      _hitError: function (a) {
        (this.errors++,
          Strophe.warn(
            'request errored, status: ' +
              a +
              ', number of errors: ' +
              this.errors
          ),
          this.errors > 4 && this._onDisconnectTimeout());
      },
      _no_auth_received: function (a) {
        a = a ? a.bind(this._conn) : this._conn._connect_cb.bind(this._conn);
        var b = this._buildBody();
        (this._requests.push(
          new Strophe.Request(
            b.tree(),
            this._onRequestStateChange.bind(this, a.bind(this._conn)),
            b.tree().getAttribute('rid')
          )
        ),
          this._throttledRequestHandler());
      },
      _onDisconnectTimeout: function () {
        for (var a; this._requests.length > 0; )
          ((a = this._requests.pop()),
            (a.abort = !0),
            a.xhr.abort(),
            (a.xhr.onreadystatechange = function () {}));
      },
      _onIdle: function () {
        var a = this._conn._data;
        if (
          (this._conn.authenticated &&
            0 === this._requests.length &&
            0 === a.length &&
            !this._conn.disconnecting &&
            (Strophe.info(
              'no requests during idle cycle, sending blank request'
            ),
            a.push(null)),
          this._requests.length < 2 && a.length > 0 && !this._conn.paused)
        ) {
          for (
            var b = this._buildBody(), c = a.length, d = 0;
            d < a.length;
            d++
          )
            if (null !== a[d])
              if ('restart' === a[d])
                b.attrs({
                  to: this._conn.domain,
                  'xml:lang': 'en',
                  'xmpp:restart': 'true',
                  'xmlns:xmpp': Strophe.NS.BOSH,
                });
              else if ((b.cnode(a[d]).up(), +a[d].getAttribute('size') > 2e4)) {
                c = d + 1;
                break;
              }
          (this._conn._data.splice(0, c),
            b.tree().setAttribute('process-delay', 10),
            this._requests.push(
              new Strophe.Request(
                b.tree(),
                this._onRequestStateChange.bind(
                  this,
                  this._conn._dataRecv.bind(this._conn)
                ),
                b.tree().getAttribute('rid')
              )
            ),
            this._processRequest(this._requests.length - 1));
        }
        if (this._requests.length > 0) {
          var e = this._requests[0].age();
          (null !== this._requests[0].dead &&
            this._requests[0].timeDead() >
              Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait) &&
            this._throttledRequestHandler(),
            e > Math.floor(Strophe.TIMEOUT * this.wait) &&
              (Strophe.warn(
                'Request ' +
                  this._requests[0].id +
                  ' timed out, over ' +
                  Math.floor(Strophe.TIMEOUT * this.wait) +
                  ' seconds since last activity'
              ),
              this._throttledRequestHandler()));
        }
      },
      _onRequestStateChange: function (a, b) {
        if (
          (Strophe.debug(
            'request id ' +
              b.id +
              '.' +
              b.sends +
              ' state changed to ' +
              b.xhr.readyState
          ),
          b.abort)
        )
          return void (b.abort = !1);
        var c;
        if (4 == b.xhr.readyState) {
          c = 0;
          try {
            c = b.xhr.status;
          } catch (a) {}
          if ((void 0 === c && (c = 0), this.disconnecting && c >= 400))
            return void this._hitError(c);
          var d = this._requests[0] == b,
            e = this._requests[1] == b;
          (((c > 0 && c < 500) || b.sends > 5) &&
            (this._removeRequest(b),
            Strophe.debug('request id ' + b.id + ' should now be removed')),
            200 == c
              ? ((e ||
                  (d &&
                    this._requests.length > 0 &&
                    this._requests[0].age() >
                      Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait))) &&
                  this._restartRequest(0),
                Strophe.debug(
                  'request id ' + b.id + '.' + b.sends + ' got 200'
                ),
                a(b),
                (this.errors = 0))
              : (Strophe.error(
                  'request id ' +
                    b.id +
                    '.' +
                    b.sends +
                    ' error ' +
                    c +
                    ' happened'
                ),
                (0 === c || (c >= 400 && c < 600) || c >= 12e3) &&
                  (this._hitError(c),
                  c >= 400 &&
                    c < 500 &&
                    (this._conn._changeConnectStatus(
                      Strophe.Status.DISCONNECTING,
                      null
                    ),
                    this._conn._doDisconnect()))),
            (c > 0 && c < 500) ||
              b.sends > 5 ||
              this._throttledRequestHandler());
        }
      },
      _processRequest: function (a) {
        var b = this,
          c = this._requests[a],
          d = -1;
        try {
          4 == c.xhr.readyState && (d = c.xhr.status);
        } catch (b) {
          Strophe.error(
            'caught an error in _requests[' + a + '], reqStatus: ' + d
          );
        }
        if ((void 0 === d && (d = -1), c.sends > this.maxRetries))
          return void this._onDisconnectTimeout();
        var e = c.age(),
          f = !isNaN(e) && e > Math.floor(Strophe.TIMEOUT * this.wait),
          g =
            null !== c.dead &&
            c.timeDead() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait),
          h = 4 == c.xhr.readyState && (d < 1 || d >= 500);
        if (
          ((f || g || h) &&
            (g &&
              Strophe.error(
                'Request ' +
                  this._requests[a].id +
                  ' timed out (secondary), restarting'
              ),
            (c.abort = !0),
            c.xhr.abort(),
            (c.xhr.onreadystatechange = function () {}),
            (this._requests[a] = new Strophe.Request(
              c.xmlData,
              c.origFunc,
              c.rid,
              c.sends
            )),
            (c = this._requests[a])),
          0 === c.xhr.readyState)
        ) {
          Strophe.debug('request id ' + c.id + '.' + c.sends + ' posting');
          try {
            c.xhr.open('POST', this._conn.service, !this._conn.options.sync);
          } catch (a) {
            return (
              Strophe.error('XHR open failed.'),
              this._conn.connected ||
                this._conn._changeConnectStatus(
                  Strophe.Status.CONNFAIL,
                  'bad-service'
                ),
              void this._conn.disconnect()
            );
          }
          var i = function () {
            if (((c.date = new Date()), b._conn.options.customHeaders)) {
              var a = b._conn.options.customHeaders;
              for (var d in a)
                a.hasOwnProperty(d) && c.xhr.setRequestHeader(d, a[d]);
            }
            c.xhr.send(c.data);
          };
          if (c.sends > 1) {
            var j =
              1e3 *
              Math.min(
                Math.floor(Strophe.TIMEOUT * this.wait),
                Math.pow(c.sends, 3)
              );
            setTimeout(i, j);
          } else i();
          (c.sends++,
            this._conn.xmlOutput !== Strophe.Connection.prototype.xmlOutput &&
              (c.xmlData.nodeName === this.strip && c.xmlData.childNodes.length
                ? this._conn.xmlOutput(c.xmlData.childNodes[0])
                : this._conn.xmlOutput(c.xmlData)),
            this._conn.rawOutput !== Strophe.Connection.prototype.rawOutput &&
              this._conn.rawOutput(c.data));
        } else
          Strophe.debug(
            '_processRequest: ' +
              (0 === a ? 'first' : 'second') +
              ' request has readyState of ' +
              c.xhr.readyState
          );
      },
      _removeRequest: function (a) {
        Strophe.debug('removing request');
        var b;
        for (b = this._requests.length - 1; b >= 0; b--)
          a == this._requests[b] && this._requests.splice(b, 1);
        ((a.xhr.onreadystatechange = function () {}),
          this._throttledRequestHandler());
      },
      _restartRequest: function (a) {
        var b = this._requests[a];
        (null === b.dead && (b.dead = new Date()), this._processRequest(a));
      },
      _reqToData: function (a) {
        try {
          return a.getResponse();
        } catch (a) {
          if ('parsererror' != a) throw a;
          this._conn.disconnect('strophe-parsererror');
        }
      },
      _sendTerminate: function (a) {
        Strophe.info('_sendTerminate was called');
        var b = this._buildBody().attrs({ type: 'terminate' });
        a && b.cnode(a.tree());
        var c = new Strophe.Request(
          b.tree(),
          this._onRequestStateChange.bind(
            this,
            this._conn._dataRecv.bind(this._conn)
          ),
          b.tree().getAttribute('rid')
        );
        (this._requests.push(c), this._throttledRequestHandler());
      },
      _send: function () {
        (clearTimeout(this._conn._idleTimeout),
          this._throttledRequestHandler(),
          (this._conn._idleTimeout = setTimeout(
            this._conn._onIdle.bind(this._conn),
            100
          )));
      },
      _sendRestart: function () {
        (this._throttledRequestHandler(),
          clearTimeout(this._conn._idleTimeout));
      },
      _throttledRequestHandler: function () {
        (this._requests
          ? Strophe.debug(
              '_throttledRequestHandler called with ' +
                this._requests.length +
                ' requests'
            )
          : Strophe.debug(
              '_throttledRequestHandler called with undefined requests'
            ),
          this._requests &&
            0 !== this._requests.length &&
            (this._requests.length > 0 && this._processRequest(0),
            this._requests.length > 1 &&
              Math.abs(this._requests[0].rid - this._requests[1].rid) <
                this.window &&
              this._processRequest(1)));
      },
    }),
    (Strophe.Websocket = function (a) {
      ((this._conn = a), (this.strip = 'stream:stream'));
      var b = a.service;
      if (0 !== b.indexOf('ws:') && 0 !== b.indexOf('wss:')) {
        var c = '';
        ('ws' === a.options.protocol && 'https:' !== window.location.protocol
          ? (c += 'ws')
          : (c += 'wss'),
          (c += '://' + window.location.host),
          0 !== b.indexOf('/') ? (c += window.location.pathname + b) : (c += b),
          (a.service = c));
      }
    }),
    (Strophe.Websocket.prototype = {
      _buildStream: function () {
        return $build('stream:stream', {
          to: this._conn.domain,
          xmlns: Strophe.NS.CLIENT,
          'xmlns:stream': Strophe.NS.STREAM,
          version: '1.0',
        });
      },
      _check_streamerror: function (a, b) {
        var c = a.getElementsByTagName('stream:error');
        if (0 === c.length) return !1;
        for (
          var d = c[0],
            e = '',
            f = '',
            g = 'urn:ietf:params:xml:ns:xmpp-streams',
            h = 0;
          h < d.childNodes.length;
          h++
        ) {
          var i = d.childNodes[h];
          if (i.getAttribute('xmlns') !== g) break;
          'text' === i.nodeName ? (f = i.textContent) : (e = i.nodeName);
        }
        var j = 'WebSocket stream error: ';
        return (
          (j += e || 'unknown'),
          f && (j += ' - ' + e),
          Strophe.error(j),
          this._conn._changeConnectStatus(b, e),
          this._conn._doDisconnect(),
          !0
        );
      },
      _reset: function () {},
      _connect: function () {
        (this._closeSocket(),
          (this.socket = new WebSocket(this._conn.service, 'xmpp')),
          (this.socket.onopen = this._onOpen.bind(this)),
          (this.socket.onerror = this._onError.bind(this)),
          (this.socket.onclose = this._onClose.bind(this)),
          (this.socket.onmessage = this._connect_cb_wrapper.bind(this)));
      },
      _connect_cb: function (a) {
        if (this._check_streamerror(a, Strophe.Status.CONNFAIL))
          return Strophe.Status.CONNFAIL;
      },
      _handleStreamStart: function (a) {
        var b = !1,
          c = a.getAttribute('xmlns');
        'string' != typeof c
          ? (b = 'Missing xmlns in stream:stream')
          : c !== Strophe.NS.CLIENT &&
            (b = 'Wrong xmlns in stream:stream: ' + c);
        var d = a.namespaceURI;
        'string' != typeof d
          ? (b = 'Missing xmlns:stream in stream:stream')
          : d !== Strophe.NS.STREAM &&
            (b = 'Wrong xmlns:stream in stream:stream: ' + d);
        var e = a.getAttribute('version');
        return (
          'string' != typeof e
            ? (b = 'Missing version in stream:stream')
            : '1.0' !== e && (b = 'Wrong version in stream:stream: ' + e),
          !b ||
            (this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, b),
            this._conn._doDisconnect(),
            !1)
        );
      },
      _connect_cb_wrapper: function (a) {
        if (
          0 === a.data.indexOf('<stream:stream ') ||
          0 === a.data.indexOf('<?xml')
        ) {
          var b = a.data.replace(/^(<\?.*?\?>\s*)*/, '');
          if ('' === b) return;
          b = a.data.replace(
            /<stream:stream (.*[^\/])>/,
            '<stream:stream $1/>'
          );
          var c = new DOMParser().parseFromString(
            b,
            'text/xml'
          ).documentElement;
          (this._conn.xmlInput(c),
            this._conn.rawInput(a.data),
            this._handleStreamStart(c) &&
              (this._connect_cb(c),
              (this.streamStart = a.data.replace(
                /^<stream:(.*)\/>$/,
                '<stream:$1>'
              ))));
        } else {
          if ('</stream:stream>' === a.data)
            return (
              this._conn.rawInput(a.data),
              this._conn.xmlInput(document.createElement('stream:stream')),
              this._conn._changeConnectStatus(
                Strophe.Status.CONNFAIL,
                'Received closing stream'
              ),
              void this._conn._doDisconnect()
            );
          var d = this._streamWrap(a.data),
            e = new DOMParser().parseFromString(d, 'text/xml').documentElement;
          ((this.socket.onmessage = this._onMessage.bind(this)),
            this._conn._connect_cb(e, null, a.data));
        }
      },
      _disconnect: function (a) {
        if (this.socket.readyState !== WebSocket.CLOSED) {
          a && this._conn.send(a);
          var b = '</stream:stream>';
          (this._conn.xmlOutput(document.createElement('stream:stream')),
            this._conn.rawOutput(b));
          try {
            this.socket.send(b);
          } catch (a) {
            Strophe.info("Couldn't send closing stream tag.");
          }
        }
        this._conn._doDisconnect();
      },
      _doDisconnect: function () {
        (Strophe.info('WebSockets _doDisconnect was called'),
          this._closeSocket());
      },
      _streamWrap: function (a) {
        return this.streamStart + a + '</stream:stream>';
      },
      _closeSocket: function () {
        if (this.socket)
          try {
            this.socket.close();
          } catch (a) {}
        this.socket = null;
      },
      _emptyQueue: function () {
        return !0;
      },
      _onClose: function () {
        this._conn.connected && !this._conn.disconnecting
          ? (Strophe.error('Websocket closed unexcectedly'),
            this._conn._doDisconnect())
          : Strophe.info('Websocket closed');
      },
      _no_auth_received: function (a) {
        (Strophe.error('Server did not send any auth methods'),
          this._conn._changeConnectStatus(
            Strophe.Status.CONNFAIL,
            'Server did not send any auth methods'
          ),
          a && (a = a.bind(this._conn))(),
          this._conn._doDisconnect());
      },
      _onDisconnectTimeout: function () {},
      _onError: function (a) {
        (Strophe.error('Websocket error ' + a),
          this._conn._changeConnectStatus(
            Strophe.Status.CONNFAIL,
            'The WebSocket connection could not be established was disconnected.'
          ),
          this._disconnect());
      },
      _onIdle: function () {
        var a = this._conn._data;
        if (a.length > 0 && !this._conn.paused) {
          for (var b = 0; b < a.length; b++)
            if (null !== a[b]) {
              var c, d;
              ('restart' === a[b]
                ? ((c = this._buildStream()),
                  (d = this._removeClosingTag(c)),
                  (c = c.tree()))
                : ((c = a[b]), (d = Strophe.serialize(c))),
                this._conn.xmlOutput(c),
                this._conn.rawOutput(d),
                this.socket.send(d));
            }
          this._conn._data = [];
        }
      },
      _onMessage: function (a) {
        var b, c;
        if ('</stream:stream>' === a.data) {
          return (
            this._conn.rawInput('</stream:stream>'),
            this._conn.xmlInput(document.createElement('stream:stream')),
            void (this._conn.disconnecting || this._conn._doDisconnect())
          );
        }
        if (0 === a.data.search('<stream:stream ')) {
          if (
            ((c = a.data.replace(
              /<stream:stream (.*[^\/])>/,
              '<stream:stream $1/>'
            )),
            (b = new DOMParser().parseFromString(
              c,
              'text/xml'
            ).documentElement),
            !this._handleStreamStart(b))
          )
            return;
        } else
          ((c = this._streamWrap(a.data)),
            (b = new DOMParser().parseFromString(
              c,
              'text/xml'
            ).documentElement));
        if (!this._check_streamerror(b, Strophe.Status.ERROR))
          return this._conn.disconnecting &&
            'presence' === b.firstChild.nodeName &&
            'unavailable' === b.firstChild.getAttribute('type')
            ? (this._conn.xmlInput(b),
              void this._conn.rawInput(Strophe.serialize(b)))
            : void this._conn._dataRecv(b, a.data);
      },
      _onOpen: function () {
        Strophe.info('Websocket open');
        var a = this._buildStream();
        this._conn.xmlOutput(a.tree());
        var b = this._removeClosingTag(a);
        (this._conn.rawOutput(b), this.socket.send(b));
      },
      _removeClosingTag: function (a) {
        var b = Strophe.serialize(a);
        return (b = b.replace(/<(stream:stream .*[^\/])\/>$/, '<$1>'));
      },
      _reqToData: function (a) {
        return a;
      },
      _send: function () {
        this._conn.flush();
      },
      _sendRestart: function () {
        (clearTimeout(this._conn._idleTimeout),
          this._conn._onIdle.bind(this._conn)());
      },
    }),
    define('common/extensions/strophe.base', function () {}),
    define(
      'common/extensions/strophe',
      ['common/extensions/strophe.base'],
      function () {
        ((Strophe.xmlTextNode = function (a) {
          return Strophe.xmlGenerator().createTextNode(a);
        }),
          (Strophe.getText = function (a) {
            if (!a) return null;
            var b = '';
            0 === a.childNodes.length &&
              a.nodeType == Strophe.ElementType.TEXT &&
              (b += a.nodeValue);
            for (var c = 0; c < a.childNodes.length; c++)
              a.childNodes[c].nodeType == Strophe.ElementType.TEXT &&
                (b += a.childNodes[c].nodeValue);
            return b;
          }),
          Strophe.addConnectionPlugin('receipts', {
            _conn: null,
            _msgQueue: {},
            _retries: {},
            _resendCount: 0,
            _resendTime: 9e3,
            _callbacks: [],
            init: function (a) {
              ((this._conn = a),
                Strophe.addNamespace('RECEIPTS', 'urn:xmpp:receipts'));
            },
            statusChanged: function (a) {
              if (
                a === Strophe.Status.CONNECTED ||
                a === Strophe.Status.ATTACHED
              ) {
                this._conn.addHandler(
                  this._onRequestReceived.bind(this),
                  Strophe.NS.RECEIPTS,
                  'message'
                );
                var b = this;
                setTimeout(function () {
                  b.resendQueue();
                }, 5e3);
              }
            },
            _onRequestReceived: function (a) {
              return (this._processReceipt(a), !0);
            },
            sendMessage: function (a, b) {
              ((b = b || this._conn.getUniqueId()),
                a.tree().setAttribute('id', b));
              var c = Strophe.xmlElement('request', {
                xmlns: Strophe.NS.RECEIPTS,
              });
              return (
                a.tree().appendChild(c),
                (this._msgQueue[b] = a),
                (this._retries[b] = 0),
                this._conn.send(a.tree()),
                this.resendMessage(b),
                b
              );
            },
            messageStatus: function (a) {
              this._callbacks.push(a);
            },
            _setMessageStatus: function (a, b) {
              return;
            },
            resendMessage: function (a) {
              var b = this;
              setTimeout(function () {
                if (b._msgQueue[a]) {
                  if ((b._setMessageStatus(a, 'resending'), !b._conn.connected))
                    return void b.resendMessage(a);
                  if (++b._retries[a] > b._resendCount)
                    return (
                      b._setMessageStatus(a, 'failed'),
                      delete b._msgQueue[a],
                      void delete b._retries[a]
                    );
                  (b._msgQueue[a].tree().setAttribute('from', b._conn.jid),
                    b._conn.send(b._msgQueue[a].tree()),
                    b.resendMessage(a));
                }
              }, this._resendTime);
            },
            addReceiptHandler: function (a, b, c, d) {
              var e = this,
                f = function (b) {
                  return (e._processReceipt(b), a(b));
                };
              this._conn.addHandler(
                f,
                Strophe.NS.RECEIPTS,
                'message',
                b,
                null,
                c,
                d
              );
            },
            _processReceipt: function (a) {
              var b = a.getAttribute('id'),
                c = a.getAttribute('from'),
                d = a.getAttribute('type'),
                e = a.getElementsByTagName('request'),
                f = a.getElementsByTagName('received');
              if ('error' != d) {
                if (e.length > 0) {
                  var g = a.getAttribute('jid'),
                    h = $msg({
                      to: c,
                      from: this._conn.jid,
                      id: this._conn.getUniqueId(),
                      jid: g,
                    }),
                    i = Strophe.xmlElement('received', {
                      xmlns: Strophe.NS.RECEIPTS,
                      id: b,
                    });
                  (h.tree().appendChild(i), this._conn.send(h));
                }
                if (f.length > 0) {
                  var j = f[0].getAttribute('id');
                  j &&
                    (delete this._msgQueue[j],
                    delete this._retries[j],
                    this._setMessageStatus(j, 'done'));
                }
              }
            },
            resendQueue: function () {
              if (!this._conn.connected) {
                var a = this;
                return void setTimeout(function () {
                  a.resendQueue();
                }, 5e3);
              }
              for (var b in this._msgQueue)
                this._msgQueue.hasOwnProperty(b) &&
                  ++this._retries[b] <= this._resendCount &&
                  this._conn.send(this._msgQueue[b].tree());
            },
            getUnreceivedMsgs: function () {
              var a = [];
              for (var b in this._msgQueue)
                this._msgQueue.hasOwnProperty(b) && a.push(this._msgQueue[b]);
              return a;
            },
            clearMessages: function () {
              this._msgQueue = {};
            },
          }));
      }
    ),
    define(
      'xmpp/connection',
      [
        'application/dispatcher',
        'common/extensions/debug',
        'config/setup',
        'application/session.objects',
        'common/extensions/strophe',
        'common/extensions/browserDetect',
      ],
      function (a, b, c, d, e, f) {
        var g = {
          disconnecting: !1,
          _errorHandlers: [],
          _reconId: null,
          _connection: null,
          _messageHandler: null,
          _reconnecting: !1,
          _attached: !1,
          _isConnecting: !1,
          _isConnected: !1,
          _reconnectTimeout: 4e3,
          _defaultReconnectTimeout: 4e3,
          _maxTimeout: 3e4,
          _timeoutStep: 1500,
          _connectionIndex: 0,
          setMessageHandler: function (a) {
            this._messageHandler = a;
          },
          init: function (e) {
            var f = localStorage.rhlpws;
            void 0 === f && (f = c.WEBSOCKET);
            var h = f ? c.WS_SERVICE : c.BOSH_SERVICE;
            ((this._connection = new Strophe.Connection(h)),
              (this._connection.rawInput = function (a) {
                b.log('RECV: ' + a);
                try {
                  ((d.jid = g._connection.jid),
                    (d.rid = g._connection._proto.rid),
                    (d.sid = g._connection._proto.sid),
                    (d.lastXMPPTransfer = new Date().getTime()));
                } catch (a) {
                  b.error(a);
                }
              }),
              (this._connection.rawOutput = function (a) {
                b.log('SEND: ' + a);
                try {
                  ((d.jid = g._connection.jid),
                    (d.rid = g._connection._proto.rid),
                    (d.sid = g._connection._proto.sid),
                    (d.lastXMPPTransfer = new Date().getTime()));
                } catch (a) {
                  b.error(a);
                }
              }),
              this._connection.addHandler(
                g._messageHandler,
                null,
                'message',
                null,
                null,
                null
              ),
              (this._connection._hitError = function (a) {
                var b;
                ++g._connection.errors > 4 &&
                  g._connection._onDisconnectTimeout();
                for (b in g._errorHandlers)
                  g._errorHandlers.hasOwnProperty(b) &&
                    'function' == typeof g._errorHandlers[b] &&
                    g._errorHandlers[b](a, g._connection.errors);
              }),
              this._connection.connect(
                c.XMPP_DOMAIN,
                '',
                g.onStatusChanged,
                50,
                3
              ),
              a.fire('Connection.initialized'));
          },
          addErrorHandler: function (a) {
            'function' == typeof a && this._errorHandlers.push(a);
          },
          removeErrorHandlers: function () {
            this._errorHandlers = [];
          },
          checkPresence: function () {
            var a = $iq({ type: 'get' }).c('query', {
              xmlns: 'consultant:presence',
              from: c.XMPP_DOMAIN,
              to: c.CLIENT_NAME.toOperatorJid(),
            });
            this._connection.sendIQ(
              a.tree(),
              this.onPresence,
              g.reconnect,
              7e3
            );
          },
          disconnect: function () {
            ((g.disconnecting = !0), this._connection.disconnect());
          },
          pause: function () {
            ((g.paused = !0), this._connection.pause());
          },
          resume: function () {
            ((g.paused = !1), this._connection.resume());
          },
          reconnect: function () {
            ((g.disconnecting = !1),
              (d.reconnecting = !0),
              this._connection.disconnect());
          },
          onStatusChanged: function (b, e) {
            if (
              ((this._isConnecting =
                b == Strophe.Status.CONNECTING ||
                b == Strophe.Status.AUTHENTICATING),
              b === Strophe.Status.CONNECTED || b === Strophe.Status.ATTACHED)
            ) {
              ((g._isConnected = !0), a.fire('connected'));
              var f = ++g._connectionIndex;
              (setTimeout(
                function () {
                  f == g._connectionIndex &&
                    a.fire('connection.canStormPackets', {
                      canStormPackets: !0,
                    });
                },
                3e3 + 3e3 * Math.random()
              ),
                d.reconnecting &&
                  (a.fire('refreshHistory'), (d.reconnecting = !1)),
                b === Strophe.Status.ATTACHED &&
                  (a.fire('attached'), (g._attached = !0)),
                (g._reconnectTimeout = g._defaultReconnectTimeout));
            } else
              (b !== Strophe.Status.DISCONNECTING &&
                b !== Strophe.Status.ERROR &&
                b !== Strophe.Status.CONNFAIL &&
                b !== Strophe.Status.AUTHFAIL) ||
                (g._connectionIndex++,
                a.fire('connection.canStormPackets', { canStormPackets: !1 }),
                (g._isAuthenticated = !1),
                (g._isConnected = !1),
                g.disconnecting ||
                  (null === g._reconId &&
                    (g._reconId = setTimeout(function () {
                      (g._connection.reset(),
                        (d.reconnecting = !0),
                        g._connection.connect(
                          c.XMPP_DOMAIN,
                          '',
                          g.onStatusChanged,
                          50
                        ),
                        g._connection.addHandler(
                          g._messageHandler,
                          null,
                          'message',
                          null,
                          null,
                          null
                        ),
                        (g._reconId = null));
                    }, g._reconnectTimeout)),
                  (g._reconnectTimeout +=
                    Math.random() * g._timeoutStep + g._timeoutStep),
                  g._reconnectTimeout > g._maxTimeout &&
                    (g._reconnectTimeout = g._maxTimeout)));
            return !0;
          },
          onPresence: function (b) {
            a.fire('connected');
          },
          isAuthenticated: function () {
            return this._isAuthenticated;
          },
          isConnected: function () {
            return !!g._isConnected;
          },
          isConnecting: function () {
            return !!g._isConnecting;
          },
        };
        return g;
      }
    ),
    define(
      'view/chat',
      [
        'common/extensions/jquery.plugins',
        'application/dispatcher',
        'common/constants/sender',
        'application/session.objects',
        'config/lang',
        'common/constants/chatState',
        'application/parent',
        'common/application/time',
        'view/template',
        'common/extensions/browserDetect',
        'xmpp/connection',
      ],
      function (a, b, c, d, e, f, g, h, i, j, k) {
        a.valHooks.textarea = {
          get: function (a) {
            return a.value.replace(/\r?\n/g, '\r\n');
          },
        };
        var l,
          m = !1,
          n = null,
          o = {
            _displayElem: null,
            _lastMessageFrom: null,
            _lastMessageTime: 0,
            _typingTimer: 0,
            _isTyping: !1,
            _baron: null,
            _messages: [],
            _highlightLinks: function (a) {
              return a.replace(
                /(((http|https|ftp)[:][\/][\/])?([\w\d_\-\.а-яёА-ЯЁ]*@)?(([\w\d_\-а-яёА-ЯЁ]+)\.)+(\w{2,63}|рф|дети|москва|онлайн|орг|рус|сайт)([\/]\S*)*)(\s|$)/gm,
                function (a, b, c, d, e, f, g, h, i, j) {
                  return (
                    '<a target="_blank" href="' +
                    (b.indexOf('@') > -1
                      ? 'mailto:'
                      : b.indexOf('://') > -1
                        ? ''
                        : 'http://') +
                    b +
                    '">' +
                    b +
                    '</a>' +
                    j
                  );
                }
              );
            },
            _escapeHtml: function (a) {
              return a
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/\n/g, '<br>');
            },
            _decorateFile: function (a) {
              var b = a.text.split('/'),
                f = b[b.length - 1],
                g = f.split('.'),
                h = g[g.length - 1].toLowerCase(),
                i = 'unknown';
              (' png jpg jpeg bmp ico psd '.indexOf(' ' + h + ' ') > -1 &&
                (i = 'image'),
                'pdf' === h && (i = 'pdf'),
                ('doc' !== h && 'docx' !== h && 'odt' !== h) || (i = 'word'),
                'txt' === h && (i = 'txt'));
              var j =
                e[
                  'FILE_SENT_' +
                    (a.sender === c.OPERATOR ? 'OPERATOR' : 'VISITOR')
                ] +
                '<div class="file"><a target="_blank" title="' +
                e.FILE_SENT_DOWNLOAD +
                '" href="' +
                a.text +
                '"><span class="icon ' +
                i +
                '"></span>' +
                decodeURIComponent(f) +
                '</a><div style="clear: both"></div>';
              return (
                'material' == d.skin &&
                  (j =
                    a.sender == c.OPERATOR
                      ? '<div class="file file-operator"><span class="file-name-wrap"></span><span class="file-header"><span class="icon ' +
                        i +
                        '"></span></span> <a target="_blank" data-file="' +
                        decodeURIComponent(f) +
                        '" title="' +
                        e.FILE_SENT_DOWNLOAD +
                        '" href="' +
                        a.text +
                        '">' +
                        decodeURIComponent(f) +
                        '</a><div style="clear: both"></div></div>'
                      : '<div class="file file-visitor"><span class="file-name-wrap"></span><span class="file-header"><span class="icon ' +
                        i +
                        '"></span><span class="file-ok"></span>' +
                        e.FILE_SENT_VISITOR_MTR +
                        '</span> <a target="_blank" data-file="' +
                        decodeURIComponent(f) +
                        '" title="' +
                        e.FILE_SENT_DOWNLOAD +
                        '" href="' +
                        a.text +
                        '">' +
                        decodeURIComponent(f) +
                        '</a><div style="clear: both"></div></div>'),
                j
              );
            },
            _decorateFileName: function (b) {
              a('.msgBlock:last .file a').each(function () {
                var b,
                  c = a(this).closest('.file'),
                  d = a(this).data('file'),
                  e =
                    c.outerWidth(!0) -
                    a(this).prev('.file-header').outerWidth(!0),
                  f = $('.file-name-wrap', c).text(d).width(),
                  g = '';
                f > e
                  ? ((b = Math.floor(d.length / 2)),
                    (g =
                      '<div>' +
                      d.substr(0, b) +
                      '</div><div><span>' +
                      d.substr(b) +
                      '</span></div>'),
                    a(this).addClass('border').html(g))
                  : a(this).removeClass('border').text(d);
              });
            },
            _decorate: function (b, f, g, h, j) {
              if (!(b.guid && g && g.find('#' + b.guid).length > 0)) {
                var k = void 0 !== g;
                void 0 === f && (f = !1);
                var l,
                  m = b.text,
                  n = {},
                  o = !1;
                for (l in b) b.hasOwnProperty(l) && (n[l] = b[l]);
                var p = new Date(b.unixTime);
                ((n.date = p.getDate() > 9 ? p.getDate() : '0' + p.getDate()),
                  (n.date +=
                    '.' +
                    (p.getMonth() > 8
                      ? p.getMonth() + 1
                      : '0' + (p.getMonth() + 1))),
                  (n.date += '.' + p.getFullYear()),
                  (n.time = n.time.substring(0, 5)),
                  ~m.indexOf('//data.redhelper.ru/messagefiles') ||
                  ~m.indexOf('//media.redhelper.ru')
                    ? ((o = !0), (m = this._decorateFile(b)))
                    : f ||
                      (m = h
                        ? b.text
                        : this._highlightLinks(this._escapeHtml(b.text))),
                  (n.text = m));
                var q = 0;
                if ('material' == d.skin) {
                  var r = new Date(),
                    s = n.date,
                    t = (r.getTime() - b.unixTime) / 864e5;
                  ((q = (b.unixTime - this._lastMessageTime) / 1e3),
                    t <= 1
                      ? (s = e.TODAY)
                      : t > 1 && t <= 2 && (s = e.YESTERDAY),
                    o
                      ? b.sender === c.OPERATOR
                        ? (n.time =
                            e.FILE_SENT_OPERATOR_MTR + '. ' + n.time + ', ' + s)
                        : (n.time =
                            e.FILE_SENT_TO_OPERATOR + '. ' + n.time + ', ' + s)
                      : (n.time =
                          (b.sender === c.OPERATOR
                            ? n.displayName + ', '
                            : '') +
                          n.time +
                          ', ' +
                          s));
                }
                var u =
                    b.sender === c.OPERATOR ? 'fromOperator' : 'fromVisitor',
                  v = n.purpose ? n.purpose : u,
                  w = i.processTemplate('#' + v, n),
                  x = i.processTemplate('#' + u + 'Header', n),
                  y = a(w),
                  z = !('material' != d.skin || !o),
                  A = 'material' == d.skin && q > 30;
                (f && y.addClass('invitationMessage'),
                  (this._lastMessageFrom !== b.displayName || f || z || A) &&
                    y.prepend(x),
                  y.attr('id', b.guid));
                var B = a('<div></div>').append(y);
                (b.className && B.addClass(b.className),
                  o && B.children().addClass('fileWrapper'));
                var C = B.html();
                return (
                  k &&
                    (this._lastMessageFrom !== b.displayName || z || A
                      ? a('.msgBlock').length
                        ? a('.msgBlock:last', g).after(
                            '<div class="msgBlock ' +
                              u +
                              (b.additionalClass
                                ? ' ' + b.additionalClass
                                : '') +
                              '">' +
                              C +
                              '</div>'
                          )
                        : a('#invitation', g).after(
                            '<div class="msgBlock ' +
                              u +
                              (b.additionalClass
                                ? ' ' + b.additionalClass
                                : '') +
                              '">' +
                              C +
                              '</div>'
                          )
                      : 'material' == d.skin &&
                          a('.msgBlock:last .msg.fileWrapper', g).length
                        ? (y.prepend(x),
                          (B = a('<div></div>').append(y)),
                          b.className && B.addClass(b.className),
                          a('.msgBlock:last', g).after(
                            '<div class="msgBlock ' +
                              u +
                              '">' +
                              B.html() +
                              '</div>'
                          ))
                        : a('.msgBlock:last', g).append(C),
                    'material' == d.skin && this._decorateFileName(g)),
                  f || (this._lastMessageFrom = b.displayName),
                  (this._lastMessageTime = b.unixTime),
                  C
                );
              }
            },
            _decorateRedirectPrompt: function (b, c) {
              var d,
                e = b.text,
                f = {};
              for (d in b) b.hasOwnProperty(d) && (f[d] = b[d]);
              var g = new Date(b.unixTime);
              ((f.date = g.getDate() > 9 ? g.getDate() : '0' + g.getDate()),
                (f.date +=
                  '.' +
                  (g.getMonth() > 8
                    ? g.getMonth() + 1
                    : '0' + (g.getMonth() + 1))),
                (f.date += '.' + g.getFullYear()),
                (f.promptTime = f.time.substring(0, 5)),
                (f.text = e));
              var h = i.processTemplate('#promptContainer', f),
                j = a(h),
                k = a('<div></div>').append(j),
                l = k.html();
              return (
                a('.msgBlock').length
                  ? a('.msgBlock:last', c).after(
                      '<div class="msgBlock">' + l + '</div>'
                    )
                  : a(c).append('<div class="msgBlock">' + l + '</div>'),
                l
              );
            },
            setOutput: function (c) {
              var d = this._displayElem;
              ((this._displayElem = 'string' == typeof c ? a(c) : c),
                this._displayElem.on('click', '.promptButton', function () {
                  return a(this).hasClass('yes')
                    ? (b.fire('redirectOK', { link: a(this).data('link') }), !1)
                    : (a(this)
                        .parents('.msg')
                        .fadeOut('slow', function () {
                          (a(this).siblings().length ||
                            ((o._lastMessageFrom = e.YOU_LABEL),
                            a(this).parents('.msgBlock').remove()),
                            b.fire('redirectCancel'));
                        }),
                      !0);
                }),
                (l = this._displayElem.find('#chatLabel')),
                n && (o.showLabel(n.text, n.loading), (n = null)),
                this._displayElem.append(
                  "<div id='stickyMessage' style='display: none'><a id='stickyMessageClose'></a><div id='stickyMessageBody'></div></div>"
                ),
                this._displayElem
                  .find('#stickyMessageClose')
                  .click(function () {
                    b.fire('hideMessage');
                  }),
                d &&
                  (this._displayElem.empty(),
                  d.children().appendTo(this._displayElem)));
            },
            appendMessage: function (a) {
              (this._displayElem.find('#stickyMessageBody').html(a),
                this._displayElem.find('#stickyMessage').show(),
                this.scrollBottom());
            },
            hideMessage: function () {
              (this._displayElem.find('#stickyMessageBody').html(''),
                this._displayElem.find('#stickyMessage').hide(),
                this.scrollBottom());
            },
            append: function (b) {
              if (
                !b.hide &&
                0 !== b.text.indexOf(':g') &&
                0 !== b.text.indexOf(':г')
              ) {
                for (
                  var f = this._messages.length - 1;
                  f > 0 && this._messages[f].id && this._messages[f].id > b.id;

                )
                  f -= 1;
                ((b.pushAfter = f > 0 ? this._messages[f].id : 0),
                  (b.pushAfter &&
                    b.pushAfter === b.id &&
                    this._messages[f].text === b.text) ||
                    (this._messages.push(b),
                    this._messages.sort(function (a, b) {
                      return a.id && b.id
                        ? a.id - b.id
                        : -1 * (a.time < b.time) + (a.time > b.time);
                    }),
                    this._displayElem &&
                      (b.sender === c.VISITOR && (b.displayName = e.YOU_LABEL),
                      b.time || (b.time = h.now().toString()),
                      this._decorate(b, !1, this._displayElem),
                      'Android' === j.OS &&
                        navigator.userAgent.indexOf('Android 2') > -1 &&
                        this._displayElem.css(
                          'height',
                          a('body').height() /
                            parseFloat(a('body').css('fontSize')) -
                            16 +
                            'em'
                        ),
                      this.scrollBottom(),
                      'material' == d.skin &&
                        'message.new' == b.type &&
                        a(
                          '.msgBlock:last .msg:last',
                          this._displayElem
                        ).addClass('opaque'))));
              }
            },
            showTyping: function () {
              if (this._displayElem && !this._isTyping) {
                ((this._isTyping = !0),
                  a('#typingLabel .text').html(
                    d.operDisplayName + e.TYPING_LABEL + '...'
                  ),
                  a('#typingLabel').show());
                var b = 3,
                  c = a('#typingLabel .text', this._displayElem);
                ((this._typingTimer = setInterval(function () {
                  b > 2
                    ? (c.html(d.operDisplayName + e.TYPING_LABEL), (b = 0))
                    : (c.html(c.html() + '.'), (b += 1));
                }, 800)),
                  this.scrollBottom());
              }
            },
            showLabel: function (b, c) {
              if (!this._displayElem) return void (n = { text: b, loading: c });
              (c ? l.addClass('loading') : l.removeClass('loading'),
                l.find('.text').html(b),
                a('#operatorName').html(d.operDisplayName),
                l.show(),
                this.scrollBottom());
            },
            hideLabel: function () {
              if (!this._displayElem) return void (n = null);
              (l.removeClass('loading'), l.hide(), this.scrollBottom());
            },
            hideTyping: function () {
              this._displayElem &&
                this._isTyping &&
                (a('#typingLabel').hide(),
                clearInterval(this._typingTimer),
                (this._isTyping = !1));
            },
            showFirstMessage: function (b) {
              if (!this._displayElem || m)
                return void (
                  b.sender === c.OPERATOR &&
                  a('.msg.invitationMessage .sender').text(b.displayName)
                );
              (b.sender === c.VISITOR && (b.displayName = e.YOU_LABEL),
                (b.time = h.now().toString()),
                (b.unixTime = new Date().getTime()),
                'material' == d.skin
                  ? this._displayElem
                      .find('.topText')
                      .after(this._decorate(b, !0))
                  : this._displayElem.prepend(this._decorate(b, !0)),
                (m = !0),
                this.scrollBottom());
            },
            scrollBottom: function () {
              this._displayElem.trigger('sizeChange');
              var b = this._displayElem[0];
              ((b.scrollTop = b.scrollHeight), a('.time').disableTextSelect());
            },
            clear: function () {
              (this._displayElem.html(''), (this._lastMessageFrom = null));
            },
            showRedirectPrompt: function (a) {
              if (this._displayElem) {
                a.indexOf('://') < 0 && (a = 'http://' + a);
                var b =
                    '<div class="promptButtonWrapper"><a class="promptButton yes" data-link="' +
                    a +
                    '">' +
                    e.PROMPT_BUTTON_YES +
                    '</a><a class="promptButton no">' +
                    e.PROMPT_BUTTON_NO +
                    '</a><div style="clear: both"></div></div>',
                  i = {
                    displayName: d.operDisplayName,
                    sender: c.OPERATOR,
                    time: h.now().toString(),
                    unixTime: new Date().getTime(),
                    text:
                      '<div id="promptWrapper"><div class="promptLabel">' +
                      e.PROMPT_LABEL +
                      '</div>' +
                      b +
                      '</div>',
                  };
                (this._displayElem
                  .find('#promptWrapper')
                  .parents('.msgBlock')
                  .remove(),
                  this._decorateRedirectPrompt(i, this._displayElem),
                  this.scrollBottom(),
                  this.hideTyping(),
                  d.chatState === f.MINIMIZED && g.send('openChat'));
              }
            },
            replaceMessage: function (b) {
              (a('#' + b.guid + ' .textWrapper .text').html(
                this._highlightLinks(b.text)
              ),
                this.hideTyping());
            },
          };
        return (
          b.addEventListener('showLabel', function (a) {
            o.showLabel(a.text, a.loading);
          }),
          b.addEventListener('hideLabel', function (a) {
            o.hideLabel();
          }),
          b.addEventListener('replaceMessage', function (a) {
            o.replaceMessage(a);
          }),
          g.addHandler('resizeFont', function (c) {
            (a('body').css('font-size', c.size),
              b.addEventListener('changeDepartment', function () {
                a('body').css('font-size', c.size);
              }));
          }),
          g.addHandler('chatOpened', function () {
            b.fire('chatOpened');
          }),
          navigator.userAgent.indexOf('Android 2') > -1 &&
            g.addHandler('chatOpened', function () {
              setTimeout(function () {
                o._displayElem.css(
                  'height',
                  a('body').height() / parseFloat(a('body').css('fontSize')) -
                    16 +
                    'em'
                );
              }, 500);
            }),
          ('Explorer' !== j.browser && 'Edge' !== j.browser) ||
            a('body').addClass('ie'),
          b.addEventListener('appendProgressBar', function (a) {
            (o._displayElem.append(a.element), o.scrollBottom());
          }),
          b.addEventListener('renderChat', function () {
            (o._displayElem.trigger('sizeChange'), o.scrollBottom());
          }),
          b.addEventListener('appendMessage', function (a) {
            o.appendMessage(a.html);
          }),
          b.addEventListener('hideMessage', function () {
            o.hideMessage();
          }),
          b.addEventListener('Connection.initialized', function () {
            k._connection.receipts.messageStatus(function (b, c) {
              var d = a('#' + b + ' .delivery');
              (d.removeClass('resending'), d.addClass(c));
            });
          }),
          o
        );
      }
    ),
    define(
      'view/minbox',
      [
        'application/dispatcher',
        'common/extensions/jquery.plugins',
        'application/session.objects',
        'common/extensions/browserDetect',
      ],
      function (a, b, c, d) {
        if (!d.isMobile) {
          var e = 5.2,
            f = 6.25,
            g = (function () {
              return function () {
                try {
                  if (c.offlineFields && 0 === c.offlineFields.length) return;
                  var d = b('#offline .topPanel'),
                    g = b('#feedbackForm'),
                    h = b('#offline').css('display');
                  ('none' === h && b('#offline').show(),
                    d.css('width', '218px'),
                    d.css('height', 'auto'));
                  var i = Math.max(
                    0,
                    Math.min(
                      d.height() / parseInt(d.css('font-size'), 10) - e,
                      6
                    )
                  );
                  if (i !== i) return;
                  ('none' === h && b('#offline').hide(),
                    d.css('height', e + i + 'em'),
                    g.css('top', f + i + 'em'),
                    d.css('width', ''),
                    a.fire('sendResize', {
                      height: 300 + i * parseInt(d.css('font-size'), 10),
                    }));
                } catch (a) {}
              };
            })();
          (c.dispatcher.addEventListener('onOfflineTextChanged', function () {
            g();
          }),
            a.addEventListener('refreshOfflineForm', g));
        }
      }
    ),
    define(
      'view/operatorRates',
      [
        'config/setup',
        'common/extensions/jquery.plugins',
        'application/session.objects',
        'application/dispatcher',
      ],
      function (a, b, c, d) {
        var e = function (e, f) {
          b.ajax({
            url: a.RATE_URL,
            method: 'GET',
            data: { operator: e, rate: f, vid: c.vid },
            success: function (a) {
              if ('Ok' === a) {
                var b = c.operatorRates;
                ((b[e] = f),
                  (c.operatorRates = b),
                  d.fire('operatorRated', { name: e, value: f }));
              }
            },
            error: function () {
              d.fire('operatorRateError');
            },
          });
        };
        return {
          init: function () {
            (d.addEventListener('rateOperator', function (a) {
              e(c.currentOperator, a.value);
            }),
              d.addEventListener('operatorRated', function (a) {
                void 0 !== c.operatorRates[c.currentOperator] &&
                  (b('#like, #dislike').removeClass('active'),
                  b(
                    c.operatorRates[c.currentOperator] ? '#like' : '#dislike'
                  ).addClass('active'));
              }),
              d.addEventListener('operator', function (a) {
                (b('#like, #dislike').removeClass('active'),
                  void 0 !== c.operatorRates[c.currentOperator] &&
                    b(
                      c.operatorRates[c.currentOperator] ? '#like' : '#dislike'
                    ).addClass('active'));
              }),
              b('#like').click(function () {
                d.fire('rateOperator', { value: 1 });
              }),
              b('#dislike').click(function () {
                d.fire('rateOperator', { value: 0 });
              }));
          },
        };
      }
    ),
    define(
      'view/progressBar',
      ['common/extensions/jquery.plugins', 'application/dispatcher'],
      function (a, b) {
        var c = function () {
          this._element = a(
            "<div class='progressBarWrapper'><span class='legend'></span><div class='progressBar'><div class='progress'></div></div></div>"
          );
        };
        return (
          (c.prototype.setPercentageWrapper = function () {
            this._element
              .find('.progressBar')
              .before("<div class='percentage'></div>");
          }),
          (c.prototype.setLegend = function (a) {
            this._element.find('.legend').html(a);
          }),
          (c.prototype.append = function () {
            b.fire('appendProgressBar', { element: this._element });
          }),
          (c.prototype.remove = function () {
            this._element.detach();
          }),
          (c.prototype.fadeOut = function (a) {
            var b = this;
            this._element.fadeOut(600, function () {
              (b._element.detach(), a());
            });
          }),
          (c.prototype.setProgress = function (a) {
            ((this._part = Math.min(a, 1)),
              100 * a >= 99
                ? (this._element.find('.progress').css('width', 'auto'),
                  this._element.find('.percentage').html('100%'))
                : (this._element.find('.progress').css('width', 100 * a + '%'),
                  this._element
                    .find('.percentage')
                    .html(Math.round(100 * a) + '%')));
          }),
          (c.prototype.expWait = function () {
            var a = this;
            void 0 === a._part && (a._part = 0);
            var b = Math.max(a._part, 0.9);
            this._waitId = setInterval(function () {
              a.setProgress(a._part + 0.05 * (b - a._part));
            }, 100);
          }),
          (c.prototype.endWait = function (a) {
            try {
              clearInterval(this._waitId);
            } catch (a) {}
            var b = this._part,
              c = this;
            this._waitId = setInterval(function () {
              (c.setProgress(c._part + 0.1 * (1 - b)),
                c._part >= 1 && (clearInterval(c._waitId), c.fadeOut(a)));
            }, 100);
          }),
          c
        );
      }
    ),
    define(
      'view/sendFile',
      [
        'application/dispatcher',
        'jquery',
        'config/setup',
        'application/parent',
        'config/lang',
        'common/constants/sender',
        'common/communication/messageTarget',
        'view/progressBar',
        'common/extensions/browserDetect',
        'application/session.objects',
      ],
      function (a, b, c, d, e, f, g, h, i, j) {
        function k(a) {
          if (a.dataTransfer.types)
            for (var b = 0; b < a.dataTransfer.types.length; b++)
              if ('Files' === a.dataTransfer.types[b]) return !0;
          return !1;
        }
        if (!j.free) {
          var l = !1,
            m = !1;
          if (window.FileReader && 'Opera' !== i.browser) {
            (d.addHandler('fileDragged', function () {
              ((l = !0), FileReader && b('body').addClass('fileDragged'));
            }),
              d.addHandler('endDrag', function () {
                (l = !1) ||
                  m ||
                  setTimeout(function () {
                    l ||
                      m ||
                      (b('body').removeClass('fileDragged'),
                      d.send('showCopy'));
                  }, 30);
              }));
            var n = function () {
              var g = null;
              j.free ||
                b(document).on({
                  dragover: function (a) {
                    FileReader &&
                      k(a.originalEvent) &&
                      (a.preventDefault(),
                      clearInterval(g),
                      (g = setInterval(function () {
                        ((m = !1),
                          l ||
                            (b('body').removeClass('fileDragged'),
                            d.send('showCopy')),
                          clearInterval(g));
                      }, 400)),
                      m || ((m = !0), b('body').addClass('fileDragged')));
                  },
                });
              var i = function (d) {
                var g = new FormData(),
                  i = new h();
                ('material' == j.skin
                  ? (i.setLegend(e.UPLOAD_LEGEND_MTR), i.setPercentageWrapper())
                  : i.setLegend(e.UPLOAD_LEGEND + ' ' + d.name),
                  i.append(),
                  i.setProgress(0.01));
                var k = function (a) {
                    if (a.lengthComputable) {
                      var b = a.loaded / a.total;
                      (i.setProgress(0.7 * b), b > 0.96 && i.expWait());
                    }
                    return !0;
                  },
                  l = !1,
                  m = function (b) {
                    i.endWait(function () {
                      l ||
                        (a.fire('fileAppended', { link: b, from: f.VISITOR }),
                        (l = !0));
                    });
                  },
                  n = function (b) {
                    (i.remove(),
                      a.fire('showLabel', {
                        loading: !1,
                        text:
                          413 === b.status
                            ? e.UPLOAD_ERROR
                            : e.UPLOAD_ERROR_TYPE,
                      }),
                      setTimeout(function () {
                        a.fire('hideLabel');
                      }, 5e3));
                  };
                (g.append('file', d),
                  b.ajax({
                    url: c.FILE_UPLOAD,
                    type: 'POST',
                    xhr: function () {
                      var a = b.ajaxSettings.xhr();
                      return (
                        a.upload &&
                          a.upload.addEventListener('progress', k, !1),
                        a
                      );
                    },
                    success: m,
                    error: n,
                    data: g,
                    cache: !1,
                    contentType: !1,
                    processData: !1,
                  }));
              };
              j.free ||
                (b(
                  "<div id='dropArea'><div><div>" +
                    e.DROP_HERE +
                    '</div></div></div>'
                ).appendTo('#online'),
                b('#dropArea').on({
                  drop: function (a) {
                    a.preventDefault();
                    for (
                      var b = a.originalEvent, c = b.dataTransfer.files, d = 0;
                      d < c.length;
                      d++
                    )
                      i(c[d]);
                    return !1;
                  },
                }),
                b('#uploadedFile').change(function () {
                  i(b(this)[0].files[0]);
                }),
                b('#fileUploadWrapper .text').html(e.FILE_UPLOAD));
            };
            a.addEventListener('ready', n);
          }
          var o;
          a.addEventListener('ready', function () {
            var d = {};
            ((o = b('<iframe src="' + c.FILE_FRAME + '"/>')),
              o.bind('load', function (b) {
                if (
                  o[0].contentWindow.location.href.indexOf(
                    'web.redhelper.ru/nx/upload'
                  ) > -1 ||
                  o[0].contentWindow.location.href.indexOf(
                    'web.redhelper.com/nx/upload'
                  ) > -1
                ) {
                  var g = o[0].contentWindow.document.body.innerHTML;
                  if (g.indexOf('Too Large') > -1)
                    return (
                      d.remove(),
                      a.fire('showLabel', {
                        loading: !1,
                        text: e.UPLOAD_ERROR,
                      }),
                      setTimeout(function () {
                        a.fire('hideLabel');
                      }, 5e3),
                      void (o[0].contentWindow.document.location.href =
                        c.FILE_FRAME)
                    );
                  if (
                    -1 === g.indexOf('http://data.redhelper.ru') &&
                    -1 === g.indexOf('//media.redhelper.ru')
                  )
                    return (
                      d.remove(),
                      a.fire('showLabel', {
                        loading: !1,
                        text: e.UPLOAD_ERROR_UNKNOWN,
                      }),
                      setTimeout(function () {
                        a.fire('hideLabel');
                      }, 5e3),
                      void (o[0].contentWindow.document.location.href =
                        c.FILE_FRAME)
                    );
                  ((g.indexOf('<body>') > -1 || g.indexOf('"') > -1) &&
                    ((g = g.substring(g.indexOf('http://'))),
                    (g = g.substring(0, g.indexOf('<')))),
                    (o[0].contentWindow.document.location.href = c.FILE_FRAME));
                  var h = !0;
                  d.endWait(function () {
                    h &&
                      (a.fire('fileAppended', { link: g, from: f.VISITOR }),
                      (h = !1));
                  });
                }
                a.fire('ready:fileFrame', o[0].contentWindow);
              }));
            var i = new g();
            (i.addHandler('fileUploadStarted', function () {
              ((d = new h()),
                'material' == j.skin
                  ? (d.setLegend(e.UPLOAD_LEGEND_MTR), d.setPercentageWrapper())
                  : d.setLegend(e.UPLOAD_LEGEND),
                d.append(),
                d.expWait());
            }),
              (o[0].allowTransparency = 'true'),
              (o[0].frameBorder = '0'),
              o.appendTo('#fileSend'),
              i.init(o[0].contentWindow, '*', '*', !0));
          });
        }
      }
    ),
    define('view/copyright', ['config/lang'], function (a) {
      return (
        '<div id="rh-copy"><span class="rh-textWrapper">' +
        a.COPYRIGHT +
        '</span> <a href="' +
        a.WEBSITE +
        '?copy" target="_blank">' +
        a.COPYRIGHT_NAME +
        '</a></div>'
      );
    }),
    define(
      'view/standalone',
      ['application/dispatcher', 'view/copyright', 'jquery', 'config/setup'],
      function (a, b, c, d) {
        a.addEventListener('templateReceived', function () {
          d.STANDALONE && c('body').append(b);
        });
      }
    ),
    define(
      'view/androidFix',
      ['common/extensions/jquery.plugins'],
      function (a) {}
    ),
    define(
      'xmpp/departments',
      ['application/session.objects', 'application/dispatcher'],
      function (a, b) {
        var c = function () {
          var c = a.departments;
          if (c && c.length) {
            for (var d in c)
              c[d].online = Array.prototype.reduce.call(
                a.onlineOperators,
                function (b, e) {
                  try {
                    b =
                      b ||
                      (Array.prototype.indexOf.call(e.departments, c[d].id) >
                        -1 &&
                        ('online' === e.status || e.name === a.chatStarted));
                  } catch (a) {}
                  return b;
                },
                !1
              );
            (c.sort(function (a, b) {
              return b.online === a.online
                ? b.priority - a.priority
                : b.online
                  ? 1
                  : -1;
            }),
              (a.departments = c),
              b.fire('departmentsRefreshed'));
          }
        };
        return (
          b.addEventListener('sessionLoaded', function () {
            c();
          }),
          b.addEventListener('operatorsRefreshed', c),
          b.addEventListener('hideDepartments', function (b) {
            a.departmentsShown = !1;
          }),
          b.addEventListener('showDepartments', function (b) {
            a.departmentsShown = !0;
          }),
          b.addEventListener('changeDepartment', function (a) {
            a.saveOperator || b.fire('refreshOperator');
          }),
          b.addEventListener('changeRealDepartment', function (c) {
            ((a.currentDepartment = c.id),
              (a.previousOperator = a.currentOperator),
              (a.chatStarted = ''),
              (a.currentOperator = '-'),
              (a.realDepartment = c.id),
              b.fire('changeDepartment', { id: c.id, name: c.name }));
          }),
          b.addEventListener('operatorRedirectOk', function (c) {
            var d = c.operator.extractNode().toLowerCase();
            for (var e in a.onlineOperators)
              if (
                a.onlineOperators.hasOwnProperty(e) &&
                a.onlineOperators[e].name.toLowerCase() === d
              ) {
                var f = a.onlineOperators[e].departments;
                if (f && f.length) {
                  for (var g in f)
                    if (f.hasOwnProperty(g) && f[g] === a.currentDepartment)
                      return;
                  a.currentDepartment = f[0];
                } else a.currentDepartment = 0;
                b.fire('changeDepartment', { saveOperator: !0 });
              }
          }),
          {
            getDepartment: function (b) {
              for (var c in a.onlineOperators)
                if (
                  a.onlineOperators.hasOwnProperty(c) &&
                  a.onlineOperators[c].name.toLowerCase() === b
                )
                  return a.onlineOperators[c].departments[0];
              return 0;
            },
            getResponsible: function (b) {
              if (b)
                return Array.prototype.reduce.call(
                  a.onlineOperators,
                  function (a, c) {
                    return (
                      Array.prototype.indexOf.call(c.departments, b) > -1 &&
                        a.push(c.name.toLowerCase()),
                      a
                    );
                  },
                  []
                );
              var c = a.departments[0].priority,
                d = [];
              for (var e in a.departments)
                if (
                  a.departments.hasOwnProperty(e) &&
                  a.departments[e].priority === c
                )
                  for (var f in a.onlineOperators)
                    a.onlineOperators.hasOwnProperty(f) &&
                      a.onlineOperators[f].departments &&
                      Array.prototype.indexOf.call(
                        a.onlineOperators[f].departments,
                        a.departments[e].id
                      ) > -1 &&
                      -1 ===
                        d.indexOf(a.onlineOperators[f].name.toLowerCase()) &&
                      d.push(a.onlineOperators[f].name.toLowerCase());
              return d;
            },
          }
        );
      }
    ),
    define(
      'common/extensions/utils',
      ['common/extensions/browserDetect'],
      function (a) {
        return {
          enablePlaceholders: function () {
            this.hasPlaceholder() ||
              ($('.tmp-plc').remove(),
              $('input[placeholder], textarea[placeholder]').each(
                function (a, b) {
                  var c = $(b),
                    d = c.width(),
                    e = c.height(),
                    f = c.prop('tagName'),
                    g = $('<' + f + " class='tmp-plc'/>");
                  (g
                    .css({
                      position: 'absolute',
                      top:
                        c.position().top + 2 * parseInt(c.css('borderWidth')),
                      left:
                        c.position().left +
                        (parseInt(c.css('borderLeftWidth'), 10) || 0),
                      width: d,
                      height: e,
                      paddingLeft: c.css('paddingLeft'),
                      paddingTop: c.css('paddingTop'),
                      lineHeight: c.css('lineHeight'),
                      font: c.css('font'),
                      border: 'none',
                      borderRadius: c.css('borderRadius'),
                      color: '#ccc',
                      background: 'transparent',
                      boxSizing: 'content-box',
                      boxShadow: 'none',
                    })
                    .val(c.attr('placeholder'))
                    .mousedown(function () {
                      ($(this).focusout().hide(),
                        setTimeout(function () {
                          c.focus();
                        }, 10));
                    }),
                    c
                      .focus(function () {
                        g.hide();
                      })
                      .focusout(function () {
                        setTimeout(function () {
                          c.val() || g.show();
                        }, 100);
                      })
                      .after(g),
                    c.val() && g.hide());
                }
              ));
          },
          hasPlaceholder: function () {
            return 'placeholder' in document.createElement('input');
          },
        };
      }
    ),
    define(
      'view/departments',
      [
        'application/dispatcher',
        'common/extensions/jquery.plugins',
        'xmpp/departments',
        'application/session.objects',
        'config/lang',
        'common/constants/sender',
        'common/extensions/utils',
        'common/extensions/browserDetect',
        'application/parent',
      ],
      function (a, b, c, d, e, f, g, h, i) {
        function j(a) {
          if (a && a.name) b('.showDepartments .txt').html(a.name);
          else {
            for (
              var c = e.DEPARTMENTS_BUTTON, f = 0;
              f < d.departments.length;
              f++
            )
              d.departments[f].id === d.currentDepartment &&
                (c = d.departments[f].name);
            b('.showDepartments .txt').html(c);
          }
        }
        (a.addEventListener('templateProcessed', function () {
          if (d.departments.length < 2 || 'hide' == d.departmentsType)
            return void b('body').addClass('no-departments');
          (b('body').addClass('departments'),
            b('#departments').append(
              Array.prototype.reduce.call(
                d.departments,
                function (a, b) {
                  return (
                    a +
                    "<li class='" +
                    (b.online ? 'online' : 'offline') +
                    "' data-department='" +
                    b.id +
                    "' title='" +
                    e.CHOOSE_DEPARTMENT +
                    ' ' +
                    b.name +
                    "'><span></span></span><div class='name'>" +
                    b.name +
                    '</div><div class="description">' +
                    b.description +
                    '</div></li>'
                  );
                },
                ''
              )
            ),
            b('#chooseDepartment').disableTextSelect(),
            b('#departmentsContainer').trigger('sizeChange'),
            a.addEventListener('showDepartments', function () {
              b('body').addClass('departmentsShow');
            }),
            a.addEventListener('hideDepartments', function (c) {
              var e = $(window).width();
              if (b('body').hasClass('departmentsShow')) {
                var f = b('#online, #offline').css({
                  position: 'absolute',
                  left: 'material' == d.skin ? e : -e,
                });
                (b('#chooseDepartment').css({ position: 'absolute', left: 0 }),
                  b('body, li').attr('style', 'cursor: wait !important'));
                var i = function () {
                  b('body, li').css('cursor', '');
                  var c = b('#chooseDepartment'),
                    j = function () {
                      setTimeout(function () {
                        (b('#online, #chooseDepartment, #offline').css({
                          position: 'relative',
                          left: 0,
                        }),
                          b('body').removeClass('departmentsShow'),
                          b('body').removeClass('departmentsForce'),
                          a.fire('renderChat'),
                          g.enablePlaceholders());
                      }, 10);
                    };
                  'Explorer' === h.browser || h.browser;
                  (c.animate(
                    { left: 'material' == d.skin ? -e : e },
                    { duration: 200, useCSS3: !1, complete: j }
                  ),
                    f.animate(
                      { left: 0 },
                      { duration: 200, useCSS3: !1, complete: j }
                    ),
                    a.removeEventListener('changeState', i));
                };
                c.immediate ? i() : a.addEventListener('changeState', i);
              }
            }),
            b('#departments li').on('click', function () {
              (a.fire('hideDepartments'),
                a.fire('changeRealDepartment', {
                  id: b(this).data('department'),
                  name: b(this).find('.name').html(),
                }));
            }),
            'force' !== d.departmentsType ||
              d.currentDepartment ||
              !d.isPartiallyOnline ||
              d.currentOperator ||
              (d.departments.length > 1 &&
                (b('body').addClass('departmentsForce departmentsShow'),
                b('.chooseDepartmentText').height() > 20 &&
                  b('#departmentsWrapper').css('top', '9.7em'),
                b('#departmentsContainer').trigger('sizeChange'),
                'material' == d.skin && i.send('showCopy'))),
            b('.showDepartments').click(function () {
              a.fire('showDepartments');
            }),
            a.addEventListener('showDepartments', function () {
              b('#online, #offline').css({ position: 'absolute', left: '0%' });
              var a = b('#chooseDepartment').css({
                position: 'absolute',
                left: 'material' == d.skin ? '-100%' : '100%',
              });
              (b('.chooseDepartmentText').height() > 20 &&
                b('#departmentsWrapper').css('top', '9.7em'),
                b('body').addClass('departmentsShow'),
                b('#departmentsContainer').trigger('sizeChange'));
              var c = b('#online, #offline'),
                e = function () {
                  setTimeout(function () {
                    b('#online, #chooseDepartment, #offline').css({
                      position: 'relative',
                      left: 0,
                    });
                  }, 10);
                };
              (c.animate(
                { left: 'material' == d.skin ? c.width() : -c.width() },
                { duration: 200, useCSS3: !0, complete: e }
              ),
                a.animate(
                  { left: 0 },
                  { duration: 200, useCSS3: !0, complete: e }
                ));
            }),
            a.addEventListener('forceDepartments', function () {
              (b('body').addClass('departmentsForce'),
                b('body').hasClass('departmentsShow') ||
                  a.fire('showDepartments'));
            }),
            b('.hideDepartments').click(function () {
              a.fire('hideDepartments', { immediate: !0 });
            }));
          for (
            var c = e.DEPARTMENTS_BUTTON, f = 0;
            f < d.departments.length;
            f++
          )
            d.departments[f].id === d.currentDepartment &&
              (c = d.departments[f].name);
          (b('.showDepartments')
            .attr('title', e.MOVE_TO_DEPARTMENTS)
            .find('.txt')
            .html(c),
            b('.hideDepartments')
              .attr('title', e.BACK_TO_CONVERSATION)
              .find('.txt')
              .html(e.BACK_TO_CONVERSATION),
            b('.hideDepartments.offline, .offline .hideDepartments')
              .attr('title', e.BACK_TO_OFFLINE)
              .find('.txt')
              .html(e.BACK_TO_OFFLINE),
            b('#chooseDepartment .topText').html(
              d.free
                ? e.DEFAULT_FIRST_MESSAGE
                : d.currentTopText || d.defaultText
            ),
            b('.chooseDepartmentText').html(e.CHOOSE_DEPARTMENT));
        }),
          a.addEventListener('showDepartments', function () {
            (a.fire('requestOnlineOperators'),
              b('.hideDepartments')
                .attr('title', e.BACK_TO_CONVERSATION)
                .find('.txt')
                .html(e.BACK_TO_CONVERSATION),
              b('.hideDepartments.offline, .offline .hideDepartments')
                .attr('title', e.BACK_TO_OFFLINE)
                .find('.txt')
                .html(e.BACK_TO_OFFLINE));
          }),
          d.dispatcher.addEventListener(
            'onCurrentDepartmentChanged',
            function (a) {
              !1 === a.inCurrentTab && j();
            }
          ),
          a.addEventListener('changeDepartment', j),
          a.addEventListener('departmentsRefreshed', function () {
            for (var a in d.departments)
              b('li[data-department=' + d.departments[a].id + ']')
                .removeClass('online offline')
                .addClass(d.departments[a].online ? 'online' : 'offline');
            b('#departmentsContainer').trigger('sizeChange');
          }),
          a.addEventListener('departmentChosen', function () {
            for (
              var a = e.DEPARTMENTS_BUTTON, c = 0;
              c < d.departments.length;
              c++
            )
              d.departments[c].id === d.currentDepartment &&
                (a = d.departments[c].name);
            b('.showDepartments .txt').html(a);
          }),
          a.addEventListener('message.received', function () {
            a.fire('hideDepartments', { immediate: !0 });
          }));
      }
    ),
    define(
      'view/hints',
      [
        'common/extensions/jquery.plugins',
        'config/lang',
        'application/dispatcher',
      ],
      function (a, b, c) {
        (c.addEventListener('ready:fileFrame', function (a) {
          $(a.document).find('#file').attr('title', b.FILE_SEND_TITLE);
        }),
          c.addEventListener('templateProcessed', function () {
            (a('#chatSend').attr('title', b.CHAT_SEND_TITLE),
              a('#like, #dislike').attr('title', b.RATE_TITLE),
              a('.showDepartment').attr('title', b.CHOOSE_DEPARTMENT_TITLE),
              a('#operatorLabel').text(b.OPERATOR + ':'));
          }));
      }
    ),
    define(
      'view/holdMessage',
      [
        'application/session.objects',
        'application/dispatcher',
        'common/constants/sender',
        'config/lang',
      ],
      function (a, b, c, d) {
        b.addEventListener('sessionLoaded', function () {
          function c(c) {
            (i ? clearTimeout(i) : j && b.fire('hideLabel'),
              (a.showHoldMessage = !1),
              (j = !1),
              (i = 0));
          }
          function e() {
            ((a.showHoldMessage = !0),
              (j = !0),
              (i = 0),
              b.fire('showLabel', { text: d.HOLD_MESSAGE }));
          }
          function f() {
            return new Date().getTime() - a.lastOperatorChat < 108e5;
          }
          function g(b) {
            j || i || f() || (i = h(1e3 * a.holdMessage.timeout));
          }
          function h(a) {
            return ((a = a || 200), setTimeout(e, a));
          }
          if (a.holdMessage && a.holdMessage.enabled) {
            var i = 0,
              j = !1;
            (b.addEventListener('message.new.incoming', c),
              b.addEventListener('message.new.outcoming', g),
              a.showHoldMessage && b.addOneShotEventListener('operator', h));
          }
        });
      }
    ),
    define(
      'xmpp/leaveContacts',
      [
        'application/dispatcher',
        'config/setup',
        'common/extensions/jquery.plugins',
        'application/session.objects',
      ],
      function (a, b, c, d) {
        a.addEventListener('sendContacts', function (e) {
          var f = function () {
            c.ajax({
              url: b.NX_URL + 'contacts/' + b.CLIENT_NAME,
              data: {
                name: e.name,
                email: e.email,
                phone: e.phone,
                vid: d.vid,
                operName: d.currentOperator,
                page: (b.CURRENT_URL || '').substr(0, 256),
              },
              method: 'GET',
              dataType: 'jsonp',
              cache: !1,
              success: function () {
                a.fire('sendContactsSuccess');
              },
            });
          };
          if (d.vid) f();
          else {
            var g = function () {
              (f(),
                a.fire('disconnect'),
                a.removeEventListener('authenticated', g));
            };
            (a.addEventListener('authenticated', g),
              a.fire('xmppManagerStart'));
          }
        });
      }
    ),
    define(
      'view/leaveContacts',
      [
        'application/dispatcher',
        'application/session.objects',
        'common/constants/sender',
        'common/extensions/jquery.plugins',
        'config/lang',
        'xmpp/leaveContacts',
      ],
      function (a, b, c, d, e, f) {
        var g = 108e5;
        a.addEventListener('sessionLoaded', function () {
          a.addEventListener('templateProcessed', function () {
            var c = 0,
              f = !1;
            b.leaveContactsSuggestions &&
              b.leaveContactsSuggestions.enabled &&
              (b.hideLeaveContacts ||
                (a.addEventListener('message.new.incoming', function (b) {
                  (c && (clearTimeout(c), (f = !1)),
                    f && (a.fire('hideContactsForm'), (f = !1)));
                }),
                a.addEventListener('message.new.outcoming', function (d) {
                  !f &&
                    !c &&
                    new Date().getTime() - b.lastOperatorChat > g &&
                    (c = setTimeout(function () {
                      (a.fire('showContactsForm'), (f = !0), (c = 0));
                    }, 1e3 * b.leaveContactsSuggestions.timeout));
                }),
                a.addEventListener('showContactsForm', function () {
                  if (!b.contactsGot) {
                    f = !0;
                    var c = d(
                      "<form onsubmit='return false;'><div id='leaveContactsText'>" +
                        e.LEAVE_CONTACTS +
                        '</div></form>'
                    );
                    (b.leaveContactsSuggestions.fields.indexOf('name') > -1 &&
                      c.append(
                        "<div class='leaveContactsInput'><input tabindex='1' placeholder='" +
                          e.NAME +
                          "' id='leaveContactsName'></div>"
                      ),
                      b.leaveContactsSuggestions.fields.indexOf('email') > -1 &&
                        c.append(
                          "<div class='leaveContactsInput'><input tabindex='2' placeholder='" +
                            e.EMAIL +
                            "' id='leaveContactsEmail'></div>"
                        ),
                      b.leaveContactsSuggestions.fields.indexOf('phone') > -1 &&
                        c.append(
                          "<div class='leaveContactsInput'><input tabindex='3' placeholder='" +
                            e.PHONE +
                            "' id='leaveContactsPhone'></div>"
                        ),
                      c.append("<div class='leaveContactsError'></div>"),
                      c.append(
                        "<div class='leaveContactsInput'><button type='button' id='leaveContactsSubmit' class='blue-button'>" +
                          e.SEND_BUTTON +
                          '</button></div>'
                      ),
                      a.fire('appendMessage', {
                        html: d('<div></div>').append(c).html(),
                      }),
                      a.addEventListener('hideMessage', function () {
                        ((b.showLeaveContacts = !1), (f = !1));
                      }),
                      (b.showLeaveContacts = !0),
                      d('#leaveContactsPhone').mask('(999) 999-99-99'),
                      d('#leaveContactsPhone').placeholder(),
                      d('#leaveContactsEmail').placeholder(),
                      d('#leaveContactsName').placeholder());
                    var g = function () {
                      var c = !1;
                      return (
                        d('.leaveContactsInput input').removeClass('warning'),
                        d('#leaveContactsName').length &&
                          !d('#leaveContactsName').val() &&
                          ((c = !0),
                          d('#leaveContactsName').addClass('warning')),
                        d('#leaveContactsEmail').length &&
                          !d('#leaveContactsEmail')
                            .val()
                            .match(
                              /^[^@?&]+[@][a-zA-Z0-9\.\-]+[.][^@]{2,16}$/
                            ) &&
                          ((c = !0),
                          d('#leaveContactsEmail').addClass('warning')),
                        d('#leaveContactsPhone').length &&
                          !d('#leaveContactsPhone')
                            .val()
                            .match(/^\+?([\(\)\-]?\d[\(\)\-]?\s?){6,20}$/) &&
                          ((c = !0),
                          d('#leaveContactsPhone').addClass('warning')),
                        c
                          ? (d('.leaveContactsError')
                              .text(e.INCORRECT_CONTACTS)
                              .show(),
                            void a.fire('renderChat'))
                          : (d('.leaveContactsError').hide(),
                            a.fire('sendContacts', {
                              name: d('#leaveContactsName').val() || '',
                              email: d('#leaveContactsEmail').val() || '',
                              phone: d('#leaveContactsPhone').val() || '',
                            }),
                            (b.showLeaveContacts = !1),
                            (b.hideLeaveContacts = !0),
                            !1)
                      );
                    };
                    d('#leaveContactsSubmit').click(g);
                  }
                }),
                a.addEventListener('hideContactsForm', function () {
                  a.fire('hideMessage');
                }),
                a.addEventListener('sendContactsSuccess', function () {
                  ((b.contactsGot = !0),
                    a.fire('appendMessage', { html: e.CONTACTS_SUCCESS }));
                }),
                d('#chatItself').on(
                  'change',
                  '#leaveContactsName',
                  function () {
                    d('#leaveContactsName').val()
                      ? d('#leaveContactsName').css('border-color', '')
                      : d('#leaveContactsName').css('border-color', 'red');
                  }
                ),
                d('#chatItself').on(
                  'change',
                  '#leaveContactsEmail',
                  function () {
                    d('#leaveContactsEmail')
                      .val()
                      .match(/^[^@?&]+[@][a-zA-Z0-9\.\-]+[.][^@]{2,16}$/)
                      ? d('#leaveContactsEmail').css('border-color', '')
                      : d('#leaveContactsEmail').css('border-color', 'red');
                  }
                ),
                d('#chatItself').on(
                  'change',
                  '#leaveContactsPhone',
                  function () {
                    d('#leaveContactsPhone')
                      .val()
                      .match(/^\+?([\(\)\-]?\d[\(\)\-]?\s?){6,20}$/)
                      ? d('#leaveContactsPhone').css('border-color', '')
                      : d('#leaveContactsPhone').css('border-color', 'red');
                  }
                ),
                b.showLeaveContacts && a.fire('showContactsForm')));
          });
        });
      }
    ),
    define('common/extensions/color', [], function () {
      var a = {
        parseRGB: function (a) {
          var b = [];
          return (
            b.push(parseInt(a.substr(1, 2), 16)),
            b.push(parseInt(a.substr(3, 2), 16)),
            b.push(parseInt(a.substr(5, 2), 16)),
            b
          );
        },
        rgb2hsl: function (a) {
          var b = a[0] / 255,
            c = a[1] / 255,
            d = a[2] / 255,
            e = Math.max(b, c, d),
            f = Math.min(b, c, d),
            g = (e + f) / 2,
            h = 0,
            i = 0;
          return (
            e !== f &&
              ((h = g < 0.5 ? (e - f) / (e + f) : (e - f) / (2 - e - f)),
              (i =
                b === e
                  ? (c - d) / (e - f)
                  : c === e
                    ? 2 + (d - b) / (e - f)
                    : 4 + (b - c) / (e - f))),
            (g *= 100),
            (h *= 100),
            (i *= 60),
            i < 0 && (i += 360),
            [i, h, g]
          );
        },
        hsl2rgb: function (a) {
          var b,
            c,
            d,
            e = a[0],
            f = a[1] / 100,
            g = a[2] / 100,
            h = (1 - Math.abs(2 * g - 1)) * f,
            i = e / 60,
            j = h * (1 - Math.abs((i % 2) - 1));
          void 0 === e || isNaN(e) || null === e
            ? (b = c = d = 0)
            : i >= 0 && i < 1
              ? ((b = h), (c = j), (d = 0))
              : i >= 1 && i < 2
                ? ((b = j), (c = h), (d = 0))
                : i >= 2 && i < 3
                  ? ((b = 0), (c = h), (d = j))
                  : i >= 3 && i < 4
                    ? ((b = 0), (c = j), (d = h))
                    : i >= 4 && i < 5
                      ? ((b = j), (c = 0), (d = h))
                      : i >= 5 && i < 6 && ((b = h), (c = 0), (d = j));
          var k,
            l,
            m,
            n = g - h / 2;
          return (
            (k = 255 * (b + n)),
            (l = 255 * (c + n)),
            (m = 255 * (d + n)),
            (k = Math.round(k)),
            (l = Math.round(l)),
            (m = Math.round(m)),
            [k, l, m]
          );
        },
        blend: function (a, b, c) {
          return (
            (a = this.parseRGB(a)),
            (b = this.parseRGB(b)),
            [
              Math.floor(a[0] * c + b[0] * (1 - c)),
              Math.floor(a[1] * c + b[1] * (1 - c)),
              Math.floor(a[2] * c + b[2] * (1 - c)),
            ]
          );
        },
        rgb2string: function (a) {
          return (
            '#' + a[0].toString(16) + a[1].toString(16) + a[2].toString(16)
          );
        },
        toRGB: function (a) {
          return (
            (a = a.replace('#', '')),
            3 == a.length && (a = a.replace(/(.)/g, '$1$1')),
            (a = parseInt(a, 16)),
            [a >> 16, (65280 & a) >> 8, 255 & a]
          );
        },
        toRGBA: function (b, c) {
          return (
            'string' == typeof b && (b = a.toRGB(b)),
            (c = c || 1),
            'rgba(' + b[0] + ',' + b[1] + ',' + b[2] + ',' + c + ')'
          );
        },
      };
      return a;
    }),
    define(
      'cloudpayments/cloudpayments',
      ['common/extensions/jquery.plugins', 'application/parent', 'view/chat'],
      function (a, b, c) {
        function d() {
          var a = h.createCryptogramPacket();
          if (a.success) g(a.packet);
          else for (var b in a.messages) alert(a.messages[b]);
        }
        function e() {
          (m.hide(), o.show());
        }
        function f(a) {
          (m.hide(), p.find('.paymentFailureMsg').text(a), p.show());
        }
        function g(b) {
          var c = location.protocol + '//';
          c +=
            'development' === location.host
              ? 'development/'
              : 0 === location.host.indexOf('test')
                ? 'test.web.redhelper.ru/'
                : 'web.redhelper.ru/';
          var d =
            c +
            'nx/cp/payment?c=' +
            i +
            '&packet=' +
            encodeURIComponent(b) +
            '&amount=' +
            encodeURIComponent(j) +
            '&description=' +
            encodeURIComponent(k) +
            '&name=' +
            encodeURIComponent(l);
          a.getJSON(d, function (b) {
            switch (b.status) {
              case 'REQUIRED_3DS':
                var d = c + 'nx/cp/term/' + i;
                a.postMessage(window.parent, {
                  open3dSecureFrame: {
                    url:
                      c +
                      'nx/cp/show3ds?acsUrl=' +
                      encodeURIComponent(b.acsUrl) +
                      '&MD=' +
                      b.transactionId +
                      '&PaReq=' +
                      encodeURIComponent(b.paReq) +
                      '&TermUrl=' +
                      encodeURIComponent(d),
                  },
                });
                break;
              case 'COMPLETED':
                e();
                break;
              case 'DECLINED':
                f(b.message);
                break;
              default:
                alert(b.message);
            }
          });
        }
        var h, i, j, k, l, m, n, o, p;
        return (
          a.receiveMessage(function (a) {
            if (a.data.terminatePayment) {
              var b = a.data.terminatePayment;
              switch (b.status) {
                case 'COMPLETED':
                  e();
                  break;
                case 'DECLINED':
                  f(b.message);
                  break;
                default:
                  alert(b.message);
              }
            }
          }),
          {
            initCheckout: function (b, e, f, g) {
              function q() {
                var b = a('#chatContainer'),
                  f = b.find('.cpFormContainer:last');
                ((m = f.find('.cpForm:last')),
                  (n = f.find('.openCpFormButton:last')),
                  (o = f.find('.paymentSuccess:last')),
                  (p = f.find('.paymentFailure:last')),
                  n.prop('disabled', !1),
                  b
                    .find('.openCpFormButton:not(:last)')
                    .show()
                    .prop('disabled', !0),
                  b.find('.cpForm').hide(),
                  n.click(function () {
                    (n.hide(), m.show(), c.scrollBottom());
                  }),
                  (h = new cp.Checkout(e, m[0])),
                  m.find('button[type="submit"]').click(function (a) {
                    (a.preventDefault(),
                      (l = m.find('input[data-cp="name"]').val()),
                      d());
                  }));
              }
              ((i = b),
                (j = f),
                (k = g),
                h
                  ? q()
                  : a.getScript(
                      'https://widget.cloudpayments.ru/bundles/checkout',
                      q
                    ));
            },
          }
        );
      }
    ),
    define(
      'view/view',
      [
        'application/session.objects',
        'config/lang',
        'config/setup',
        'common/extensions/jquery.plugins',
        'view/chat',
        'common/constants/sender',
        'common/constants/chatWindowStage',
        'application/dispatcher',
        'config/api',
        'view/template',
        'view/minbox',
        'view/operatorRates',
        'view/sendFile',
        'view/standalone',
        'view/androidFix',
        'view/departments',
        'view/hints',
        'view/holdMessage',
        'view/leaveContacts',
        'common/extensions/utils',
        'common/extensions/browserDetect',
        'common/extensions/color',
        'application/parent',
        'cloudpayments/cloudpayments',
      ],
      function (
        Session,
        Lang,
        Setup,
        jQuery,
        Chat,
        Sender,
        ChatWindowStage,
        Dispatcher,
        API,
        Template,
        rqMinbox,
        operatorRates,
        sendFile,
        rqStandalone,
        rqAndroidFix,
        departments,
        rqHints,
        rqHold,
        rqLeaveContacts,
        Utils,
        BrowserDetect,
        Color,
        Parent,
        Cloudpayments
      ) {
        var templateLoadedHandlers = [],
          templateLoaded = !1;
        API.replaceCSS &&
          jQuery(function () {
            jQuery('#rh-css').attr('href', API.replaceCSS);
          });
        var redirectOkListener = function (a) {
            Chat.hideLabel();
            var b = Lang.OPERATOR_REDIRECT_OK + ' ' + a.displayName;
            (Chat.hideTyping(), Dispatcher.fire('showLabel', { text: b }));
          },
          View = {
            _firstMessageAppended: !1,
            _shown: !1,
            initLanguage: function () {
              if (!Session.locale)
                return void setTimeout(function () {
                  View.initLanguage();
                }, 100);
              if (
                (Lang.initLanguage(),
                jQuery('#offline .header').html(Lang.OFFLINE_HEADER),
                jQuery('#offline .description').html(Lang.OFFLINE_TEXT),
                'material' == Session.skin
                  ? (jQuery('#name_title').text(Lang.NAME_LABEL),
                    jQuery('#email_title').text(Lang.EMAIL_LABEL),
                    jQuery('#message_title').text(Lang.MESSAGE_LABEL),
                    jQuery('#phone_title').text(Lang.PHONE_LABEL),
                    jQuery('#offlineHint').text(Lang.OFFLINE_HINT))
                  : (jQuery('#name').attr('placeholder', Lang.NAME_LABEL),
                    jQuery('#email').attr('placeholder', Lang.EMAIL_LABEL),
                    jQuery('#message').attr('placeholder', Lang.MESSAGE_LABEL),
                    jQuery('#phone').attr('placeholder', Lang.PHONE_LABEL)),
                jQuery('#sendButton').text(Lang.SEND_BUTTON),
                jQuery('#throbber').text(Lang.THROBBER),
                jQuery('#offlineSuccess div').text(Lang.MAIL_SUCCESS),
                jQuery('#footer a').attr('href', Lang.WEBSITE),
                jQuery('#typingLabel .text').html(Lang.TYPING_LABEL),
                !jQuery('#online textarea').is(':focus'))
              ) {
                var a = Session.currentTypedText;
                a &&
                  (jQuery('#online textarea').val(a),
                  'material' == Session.skin &&
                    Dispatcher.fire('textareaHeightChange'));
              }
              (jQuery('#rh-copy .rh-textWrapper').text(Lang.COPYRIGHT),
                jQuery('#rh-copy a').html(Lang.COPYRIGHT_NAME));
            },
            show: function () {
              if (
                !Setup.empty(Session.skin) &&
                !Setup.empty(Session.isOnline)
              ) {
                (this.initLanguage(),
                  Session.free
                    ? (jQuery('body').addClass('free'),
                      jQuery('#rh-copy')
                        .find('a')
                        .attr('href', Lang.WEBSITE + '/?copy=limited'))
                    : jQuery('#rh-copy')
                        .find('a')
                        .attr('href', Lang.WEBSITE + '/?copy=pale'));
                (!(function () {
                  var a = 0,
                    b = jQuery('#offline'),
                    c = 2.6,
                    d = 0.357;
                  ('material' == Session.skin &&
                    ((a = 0.55), (c = 3.4), (d = 0.15)),
                    b.find('.inputField').hide(),
                    Session.offlineFields.indexOf('name') > -1 &&
                      ((a += c),
                      (c += d),
                      b.find('.name').css('display', 'block')),
                    Session.offlineFields.indexOf('email') > -1 &&
                      ((a += c), b.find('.email').css('display', 'block')),
                    Session.offlineFields.indexOf('phone') > -1 &&
                      ((c += d),
                      (a += c),
                      a >= 8.8 &&
                        'Presto' !== BrowserDetect.browser &&
                        (a = 'material' == Session.skin ? 11.1 : 8.6),
                      b.find('.phone').css('display', 'block')));
                  var e = jQuery('#offline').css('display');
                  ('none' === e && jQuery('#offline').show(),
                    'none' === e && jQuery('#offline').hide(),
                    Session.offlineFields.indexOf('message') > -1 &&
                      b
                        .find('.message')
                        .css('top', a + 'em')
                        .show(),
                    Session.offlineFields &&
                      0 === Session.offlineFields.length &&
                      (b.find('#actionPanel').hide(),
                      b.find('.topPanel').css('height', 'auto')));
                })(),
                  (document.title = Lang.PAGE_TITLE),
                  (Session.currentOfflineText || Session.offlineText) &&
                    jQuery('#offline .description').html(
                      Session.currentOfflineText || Session.offlineText
                    ),
                  Session.offlineHeader &&
                    jQuery('#offline .header').html(
                      Session.currentOfflineHeader || Session.offlineHeader
                    ),
                  Dispatcher.fire('refreshOfflineForm'),
                  Session.currentHeader
                    ? jQuery('#topHeader, .topHeader').html(
                        Session.currentHeader
                      )
                    : jQuery('#topHeader, .topHeader').html(
                        Session.defaultHeader
                      ));
                var a = function () {
                  var a = jQuery('#topText'),
                    b = jQuery('#topHeader'),
                    c = a.minBox(30),
                    d = b.minBox(28),
                    e = jQuery('#online').css('display');
                  'none' === e && jQuery('#online').show();
                  var f =
                    jQuery(window).width() -
                    (d > c ? b.width() : a.width()) +
                    Math.max(d, c) +
                    5;
                  ('none' === e && jQuery('#online').hide(),
                    Dispatcher.fire('sendResize', { width: f }));
                };
                ('material' == Session.skin
                  ? jQuery('#online .topText').html(
                      Session.currentTopText || Session.defaultText
                    )
                  : jQuery('.topText, #topText').html(
                      Session.currentTopText || Session.defaultText
                    ),
                  a(),
                  Dispatcher.addEventListener('chatOpened', function () {
                    (jQuery('#departmentsContainer')[0].innerWidth,
                      jQuery('#departmentsContainer')[0].innerHeight,
                      Dispatcher.fire('departmentsRefreshed'),
                      a(),
                      Dispatcher.fire('refreshOfflineForm'));
                  }),
                  jQuery('#topText').height() > 0 &&
                    Dispatcher.fire('refreshOfflineForm'));
                var b = jQuery('#face'),
                  c = $('#onlinePanel').find('.topPanel'),
                  d = function () {};
                if (Session.free) {
                  if ('material' == Session.skin) {
                    var e = Color.toRGB('#b3282d'),
                      f = 'rgba(' + e[0] + ',' + e[1] + ',' + e[2] + ',0.97)';
                    (c.css({ background: f }),
                      $('.chooseDepartmentTextWrapper').css({ background: f }),
                      jQuery('#container')
                        .css('z-index', '20000')
                        .addClass('lightText'),
                      b
                        .attr('src', Setup.getImageUrl('Ava_default.svg'))
                        .attr('title', Session.operDisplayName || ''));
                  }
                  d = function () {
                    Session.operAvatar &&
                      jQuery('#operatorName').text(
                        Session.operDisplayName || ''
                      );
                  };
                } else {
                  if ('mac' == Session.skin)
                    (Session.chatColor &&
                      jQuery('.colorifier').css(
                        'background',
                        '#' + Session.chatColor
                      ),
                      Session.dispatcher.addEventListener(
                        'onChatColorChanged',
                        function () {
                          Session.chatColor
                            ? jQuery('.colorifier').css(
                                'background',
                                '#' + Session.chatColor
                              )
                            : jQuery('.colorifier').css('background', 'none');
                        }
                      ),
                      Session.chatIntensity &&
                        jQuery('.colorifier').css({
                          opacity: Session.chatIntensity / 600,
                        }),
                      Session.dispatcher.addEventListener(
                        'onChatIntensityChanged',
                        function () {
                          Session.chatIntensity
                            ? jQuery('.colorifier').css({
                                opacity: Session.chatIntensity / 600,
                              })
                            : jQuery('.colorifier').css({ opacity: 0.6 });
                        }
                      ));
                  else {
                    if (
                      ('material' == Session.skin &&
                        BrowserDetect.isMobile &&
                        jQuery('#container').addClass('mobile'),
                      Session.chatColor)
                    ) {
                      var g = Color.toRGB(Session.chatColor),
                        h = 0.2126 * g[0] + 0.7152 * g[1] + 0.0722 * g[2];
                      if (
                        ('material' != Session.skin &&
                          jQuery('html, body').css(
                            'background-color',
                            '#' + Session.chatColor
                          ),
                        jQuery('#container')
                          .css('z-index', '20000')
                          .addClass(h > 170 ? 'darkText' : 'lightText'),
                        jQuery('.colorifier').css(
                          'background',
                          '#' + Session.chatColor
                        ),
                        'material' != Session.skin)
                      )
                        h >= 221
                          ? jQuery(
                              '#offline input, #offline textarea, #departmentsWrapper, #online #chatInput, #chatContainer'
                            ).css('background-color', '#fff')
                          : jQuery(
                              '#offline input, #offline textarea, #departmentsWrapper, #online #chatInput, #chatContainer'
                            ).css('background-color', '#f2f2f2');
                      else {
                        $('.pi-quarter, #pi-curtain').css(
                          'background',
                          '#' + Session.chatColor
                        );
                        var i =
                          'rgba(' + g[0] + ',' + g[1] + ',' + g[2] + ',0.97)';
                        (c.css({ background: i }),
                          $('.chooseDepartmentTextWrapper').css({
                            background: i,
                          }),
                          jQuery('#chatLeftGrad').css({
                            boxShadow:
                              'inset 11px -1px 11px 0px #' + Session.chatColor,
                          }),
                          jQuery('#chatRightGrad').css({
                            boxShadow:
                              'inset -11px -1px 11px 0px #' + Session.chatColor,
                          }));
                      }
                    }
                    Session.dispatcher.addEventListener(
                      'onChatColorChanged',
                      function () {
                        if (Session.chatColor) {
                          (jQuery('html, body').css(
                            'background-color',
                            '#' + Session.chatColor
                          ),
                            jQuery('#container').css('z-index', '20000'),
                            jQuery('.colorifier').css(
                              'background',
                              '#' + Session.chatColor
                            ));
                          var a = Color.toRGB(Session.chatColor),
                            b = 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
                          (b > 170
                            ? jQuery('.colorText').css('color', '#333')
                            : jQuery('.colorText').css('color', '#f5f5f5'),
                            b >= 221
                              ? jQuery(
                                  '#offline input, #offline textarea, #departmentsWrapper, #online #chatInput, #chatContainer'
                                ).css('background-color', '#fff')
                              : jQuery(
                                  '#offline input, #offline textarea, #departmentsWrapper, #online #chatInput, #chatContainer'
                                ).css('background-color', '#f2f2f2'));
                        } else
                          (jQuery('html, body').css('background-color', '#fff'),
                            jQuery('.colorifier').css('background', 'none'),
                            jQuery('#container').css(
                              'background-color',
                              '#e5e5e5'
                            ),
                            jQuery('.colorText').css('color', 'none'),
                            jQuery('#offline input, #offline textarea').css(
                              'background-color',
                              '#f2f2f2'
                            ));
                      }
                    );
                  }
                  d = function () {
                    if (Session.defaultFace || Session.operAvatar) {
                      var a =
                        Session.currentOperAvatar ||
                        Setup.getImageUrl(
                          Session.operAvatar || Session.defaultFace
                        );
                      if (a != b.attr('src')) {
                        var c = jQuery('#online');
                        (c.addClass('waiting-operator'),
                          b
                            .hide()
                            .attr('src', a)
                            .attr('title', Session.operDisplayName || ''),
                          setTimeout(function () {
                            (b.show(),
                              setTimeout(function () {
                                c.removeClass('waiting-operator');
                              }, 300));
                          }, 0));
                      }
                      jQuery('#operatorName').text(
                        Session.operDisplayName || ''
                      );
                    }
                  };
                }
                if (
                  (d(),
                  Session.dispatcher.addEventListener(
                    'onCurrentOperAvatarChanged',
                    d
                  ),
                  Session.dispatcher.addEventListener(
                    'onOperDisplayNameChanged',
                    d
                  ),
                  Session.dispatcher.addEventListener('onOperAvatarChanged', d),
                  Session.dispatcher.addEventListener('onFaceChanged', d),
                  jQuery(
                    '.topPanel, #footer, #sendButton, label'
                  ).disableTextSelect(),
                  jQuery('.topPanel').mousedown(function (a) {
                    a.stopPropagation();
                  }),
                  jQuery(
                    Session.chatWindowStage === ChatWindowStage.ONLINE
                      ? '#offline'
                      : '#online'
                  ).hide(),
                  jQuery(
                    Session.chatWindowStage === ChatWindowStage.ONLINE
                      ? '#online'
                      : '#offline'
                  ).show(),
                  Session.dispatcher.addEventListener(
                    'onIsOnlineChanged',
                    function (a) {
                      !1 === a.inCurrentTab && Dispatcher.fire('changeState');
                    }
                  ),
                  Session.dispatcher.addEventListener(
                    'onChatWindowStageChanged',
                    function (a) {
                      !1 === a.inCurrentTab && Dispatcher.fire('changeState');
                    }
                  ),
                  Dispatcher.addEventListener('changeState', function (a) {
                    (void 0 !== a.online &&
                      (Session.chatWindowStage = a.online
                        ? ChatWindowStage.ONLINE
                        : ChatWindowStage.OFFLINE_FORM),
                      Session.chatWindowStage === ChatWindowStage.ONLINE
                        ? (jQuery('#offline').hide(),
                          jQuery('#online').show(),
                          Dispatcher.fire('enableChat'),
                          Dispatcher.fire('renderChat'))
                        : Session.chatStarted
                          ? Dispatcher.fire('disableChat', {
                              reason:
                                Lang.ALL_OFFLINE +
                                (Session.offlineEnabled
                                  ? "<br><a href='#offline'>" +
                                    Lang.LEAVE_MESSAGE +
                                    '</a>'
                                  : ''),
                            })
                          : (jQuery('#online').hide(),
                            jQuery('#offline').show(),
                            Utils.enablePlaceholders()),
                      jQuery('body')
                        .removeClass('online offline')
                        .addClass(
                          Session.chatWindowStage === ChatWindowStage.ONLINE
                            ? 'online'
                            : 'offline'
                        ));
                  }),
                  Dispatcher.addEventListener('typing', function () {
                    (Chat.showTyping(), Chat.hideLabel());
                  }),
                  Dispatcher.addEventListener('typingStop', function () {
                    Chat.hideTyping();
                  }),
                  Dispatcher.addEventListener('message.received', function (a) {
                    a.sender === Sender.OPERATOR && Chat.hideTyping();
                  }),
                  Dispatcher.addEventListener('operatorRedirect', function () {
                    Dispatcher.fire('showLabel', {
                      text: Lang.OPERATOR_REDIRECT,
                    });
                  }),
                  Dispatcher.removeEventListener(
                    'operatorRedirectOk',
                    redirectOkListener
                  ),
                  Dispatcher.addEventListener(
                    'operatorRedirectOk',
                    redirectOkListener
                  ),
                  Dispatcher.addEventListener(
                    'operatorRedirectFail',
                    function () {
                      Chat.hideLabel();
                    }
                  ),
                  Dispatcher.removeAllEventListeners('openPaymentForm'),
                  Dispatcher.addEventListener('openPaymentForm', function (a) {
                    (Dispatcher.fire('message.received', {
                      type: 'message',
                      time: a.time,
                      text: 'paymentForm',
                      purpose: 'paymentForm',
                      description: a.description,
                      amount: a.amount,
                      sender: Sender.OPERATOR,
                      displayName: a.displayName,
                      guid: a.guid,
                      id: new Date().getTime(),
                      unixTime: new Date().getTime(),
                    }),
                      Cloudpayments.initCheckout(
                        Setup.CLIENT_NAME,
                        Session.cpPublicId,
                        a.amount,
                        a.description
                      ));
                  }),
                  Session.rateEnabled &&
                    jQuery('body').addClass('operatorRates'),
                  Session.showEula)
                ) {
                  jQuery('body').addClass('showEula');
                  var j =
                    Setup.APP_URL +
                    'nx/eula?c=' +
                    Setup.CLIENT_NAME +
                    '&site=' +
                    encodeURIComponent(Setup.PARENT_URL);
                  (jQuery('#eula_link').attr('href', j),
                    jQuery('#eula').show());
                }
                Utils.enablePlaceholders();
              }
            },
            hide: function () {
              jQuery('#online, #offline').hide();
            },
            setTemplate: function (template) {
              var scriptQueue = [];
              ((template = template.replace(/<template/i, '<div')),
                (template = template.replace(/\/template/i, '/div')),
                jQuery(template).each(function (a) {
                  0 !== a &&
                    (jQuery(this).attr('src')
                      ? scriptQueue.push({ src: jQuery(this).attr('src') })
                      : scriptQueue.push({ code: jQuery(this).html() }));
                }));
              var templateJQ = jQuery(template),
                noProcess = templateJQ
                  .find(
                    '#fromOperator, #fromOperatorHeader, #fromVisitor, #fromVisitorHeader, #promptContainer'
                  )
                  .detach();
              if (
                ((template = Template.processTemplate(templateJQ)),
                jQuery('#container').html(
                  jQuery(template).html() +
                    jQuery('<div/>').append(noProcess).html()
                ),
                scriptQueue.length)
              ) {
                var currentScript = -1,
                  scriptLoader = function () {
                    (currentScript++,
                      scriptQueue[currentScript].src
                        ? jQuery.getScript(
                            scriptQueue[currentScript].src,
                            scriptLoader
                          )
                        : (eval(scriptQueue[currentScript].code),
                          scriptLoader()));
                  };
                Dispatcher.addEventListener('ready', function () {
                  scriptLoader();
                });
              }
              if (
                (Dispatcher.fire('templateProcessed'),
                operatorRates.init(),
                jQuery('#chatContainer').length &&
                  (jQuery('#chatItself').addClass('scroller'),
                  jQuery('#chatContainer').addClass('scroller-parent'),
                  (Chat._baron = jQuery('#chatItself').baron({
                    bar: '#chat_bar',
                    freeze: !1,
                    barOnCls: 'baron',
                  }))),
                jQuery('#departmentsWrapper').length &&
                  (jQuery('#departmentsContainer').addClass('scroller'),
                  jQuery('#departmentsWrapper').addClass('scroller-parent'),
                  (Chat._baron = jQuery('#departmentsContainer').baron({
                    bar: '#departments_bar',
                    freeze: !1,
                    barOnCls: 'baron',
                  })),
                  jQuery('#departmentsContainer').trigger('sizeChange')),
                'material' == Session.skin)
              )
                if (
                  (0 == Session.audioEnabled &&
                    jQuery('.rh-sound').addClass('rh-soundOff'),
                  BrowserDetect.isMobile)
                )
                  jQuery('.rh-close').click(function (a) {
                    window.parent.close();
                  });
                else {
                  var isPressed = !1;
                  jQuery('.topPanel, .chooseDepartmentTextWrapper')
                    .bind('mousedown touchstart', function (a) {
                      'A' == a.target.nodeName ||
                        $(a.target).closest('a').length ||
                        $(a.target).closest('.hideDepartments').length ||
                        ((isPressed = !0),
                        Parent.send('dragTrigger', {
                          x: a.clientX,
                          y: a.clientY,
                        }));
                    })
                    .bind('mouseup', function (a) {
                      'A' == a.target.nodeName ||
                        $(a.target).closest('a').length ||
                        $(a.target).closest('.hideDepartments').length ||
                        (isPressed = !1);
                    })
                    .bind('mousemove', function (a) {
                      'A' == a.target.nodeName ||
                        $(a.target).closest('a').length ||
                        $(a.target).closest('.hideDepartments').length ||
                        (isPressed &&
                          Parent.send('dragMove', {
                            x: a.clientX,
                            y: a.clientY,
                          }));
                    })
                    .bind('mouseleave', function (a) {
                      isPressed = !1;
                    });
                }
            },
          },
          receivedHandler = function (a) {
            (Dispatcher.removeEventListener(receivedHandler),
              View.setTemplate(a.template),
              jQuery('body').addClass(
                a.isDefault ? 'rh-defaultTemplate' : 'rh-customTemplate'
              ),
              'Explorer' === BrowserDetect.browser &&
                parseInt(BrowserDetect.version, 10) < 9 &&
                jQuery('body').addClass('ie8'));
          };
        return (
          Dispatcher.addEventListener('templateReceived', receivedHandler),
          View
        );
      }
    ),
    define(
      'common/application/basicActivity',
      ['application/dispatcher'],
      function (a) {
        function b(a, b) {
          ((this._prefix = b || ''),
            (this._dispatcher = null),
            (this._CHECK_INTERVAL = a),
            (this._intervalId = null),
            (this._isUserAway = !1),
            (this._flag = !1),
            (this._children = []));
        }
        b.prototype = {
          check: function () {
            if (!this._flag && !this._isUserAway)
              return (
                this._dispatcher.fire(this._prefix + 'userAway'),
                void (this._isUserAway = !0)
              );
            this._flag = !1;
          },
          isActive: function () {
            return !this._isUserAway;
          },
          update: function () {
            var a;
            for (
              this._flag = !0,
                this._isUserAway &&
                  (this._dispatcher.fire(this._prefix + 'userBack'),
                  (this._isUserAway = !1)),
                a = 0;
              a < this._children.length;
              a++
            )
              this._children[a].update();
          },
          start: function () {
            if (!this._intervalId) {
              var a = this;
              this._intervalId = setInterval(function () {
                a.check();
              }, this._CHECK_INTERVAL);
            }
          },
          stop: function () {
            this._intervalId &&
              (clearInterval(this._intervalId), (this._intervalId = null));
          },
          init: function (a, b) {
            (b && (this._CHECK_INTERVAL = b), (this._dispatcher = a));
          },
          changeInterval: function (a) {
            this._CHECK_INTERVAL !== a &&
              ((this._CHECK_INTERVAL = a),
              this._intervalId && (this.stop(), this.start()));
          },
          getChild: function (a, c) {
            var d = new b(a, c);
            return (d.init(this._dispatcher), this._children.push(d), d);
          },
        };
        var c = window.redhlpSettings
            ? window.redhlpSettings.activityInterval || 3e5
            : 3e5,
          d = new b(c);
        return (d.init(a), d);
      }
    ),
    define(
      'application/timer',
      ['application/session.objects', 'common/application/basicActivity'],
      function (a, b) {
        var c = (function () {
          var c = null,
            d = 0,
            e = b.getChild(3e4, 'timer_');
          return (
            e.start(),
            {
              start: function () {
                c ||
                  (c = setInterval(function () {
                    (a.time++, d++);
                  }, 1e3));
              },
              stop: function () {
                (clearInterval(c), (c = null));
              },
              getActivity: function () {
                return e;
              },
              flush: function () {
                var a = d;
                return ((d = 0), a);
              },
            }
          );
        })();
        return (c.start(), c);
      }
    ),
    define('xmpp/xmppException', [], function () {}),
    define(
      'xmpp/update',
      [
        'application/session.objects',
        'xmpp/connection',
        'config/setup',
        'application/timer',
        'xmpp/xmppException',
        'common/extensions/strophe',
      ],
      function (a, b, c, d, e, f) {
        var g = {
          _firstUpdateSent: !1,
          simple: function () {
            if (a.vid) {
              var e = $iq({ type: 'set' })
                .c('query', { xmlns: 'consultant:update' })
                .c('vid')
                .t(a.vid.toString())
                .up()
                .c('clientName')
                .t(c.CLIENT_NAME.toString())
                .up()
                .c('time')
                .t(d.flush().toString())
                .up();
              (g._firstUpdateSent || (g._firstUpdateSent = !0),
                b.isConnected() && b._connection.sendIQ(e, null, null, 5e3));
            }
          },
          state: function (d) {
            if (a.vid) {
              var e = $iq({ type: 'set' })
                .c('query', { xmlns: 'consultant:update' })
                .c('vid')
                .t(a.vid.toString())
                .up()
                .c('clientName')
                .t(c.CLIENT_NAME.toString())
                .up();
              (void 0 === d && (d = 'browse'),
                e.c('chatState').t(d),
                b.isConnected() && b._connection.sendIQ(e, null, null, 5e3));
            }
          },
          invite: function (d, e, f) {
            if (a.vid && b._isConnected) {
              ((a.inviteState = e),
                void 0 === f && (f = a.trigger || ''),
                (a.trigger = f),
                (a.stringChatState = d));
              var h = $iq({ type: 'set' })
                .c('query', { xmlns: 'consultant:update' })
                .c('vid')
                .t(a.vid.toString())
                .up()
                .c('clientName')
                .t(c.CLIENT_NAME.toString())
                .up();
              (h
                .c('trigger')
                .t(f)
                .up()
                .c('inviteState')
                .t(e)
                .up()
                .c('chatState')
                .t(d)
                .up(),
                b._connection.sendIQ(h, null, null, 5e3));
            } else
              setTimeout(function () {
                g.invite(d, e, f);
              }, 400);
          },
          currentOperator: function () {
            if (!a.vid || !a.currentOperator)
              throw new e('currentOperator or vid not specified');
            var d = $iq({ type: 'set' })
              .c('query', { xmlns: 'consultant:update' })
              .c('vid')
              .t(a.vid.toString())
              .up()
              .c('currentOperator')
              .t(a.currentOperator)
              .up()
              .c('departmentId')
              .t(a.currentDepartment)
              .up()
              .c('clientName')
              .t(c.CLIENT_NAME.toString())
              .up();
            b._connection.sendIQ(d, null, null, 5e3);
          },
          inviteSniff: function (d, e) {
            if (a.vid && b._isConnected) {
              var f = $iq({ type: 'set' })
                .c('query', { xmlns: 'consultant:update' })
                .c('vid')
                .t(a.vid.toString())
                .up()
                .c('clientName')
                .t(c.CLIENT_NAME.toString())
                .up();
              if (void 0 === d || '' === d) return;
              (void 0 === e && (e = ''),
                f.c('trigger').t(d).up().c('operator').t(e).up(),
                b._connection.sendIQ(f, null, null, 2e3));
            }
          },
          customFields: function (c) {
            if (!a.free && b.isConnected()) {
              if (!a.vid)
                return void setTimeout(function () {
                  g.customFields(c);
                }, 2e3);
              var d = $iq({ type: 'set' })
                .c('query', { xmlns: 'consultant:update' })
                .c('vid')
                .t(a.vid.toString())
                .up()
                .c('keys');
              for (var e in c)
                c.hasOwnProperty(e) &&
                  d
                    .c('key')
                    .c('name')
                    .t(c[e].name)
                    .up()
                    .c('value')
                    .t(c[e].value)
                    .up()
                    .up();
              (d.up(), b._connection.sendIQ(d, null, null, 5e3));
            }
          },
        };
        return g;
      }
    ),
    define(
      'xmpp/requestOnline',
      [
        'application/dispatcher',
        'config/setup',
        'common/extensions/jquery.plugins',
        'application/session.objects',
      ],
      function (a, b, c, d) {
        var e = function () {
          var e = b.PARENT_URI;
          (-1 != location.search.indexOf('page=') &&
            (e = location.search.split('page=').pop().split('&').shift()),
            c.ajax({
              url:
                b.APP_URL +
                'nx/presence/' +
                b.CLIENT_NAME +
                '?page=' +
                encodeURI(e),
              dataType: 'jsonp',
              success: function (b) {
                ((d.onlineOperators = b.operators),
                  a.fire('operatorsRefreshed'));
              },
              error: function () {
                a.fire('operatorsRefreshed');
              },
            }));
        };
        (a.addEventListener('requestOnlineOperators', e),
          a.addEventListener('operatorsRefreshed', function () {
            if (!d.isPartiallyOnline)
              for (var b in d.onlineOperators)
                d.onlineOperators.hasOwnProperty(b) &&
                  (d.isPartiallyOnline ||
                    (void 0 !== d.onlineOperators[b].onPage &&
                      !d.onlineOperators[b].onPage) ||
                    'offline' === d.onlineOperators[b].status ||
                    ((d.isPartiallyOnline = !0), a.fire('xmppManagerStart')));
          }));
      }
    ),
    define(
      'xmpp/currentOperator',
      [
        'application/session.objects',
        'application/dispatcher',
        'common/constants/sender',
      ],
      function (a, b, c) {
        (b.addEventListener('message.received', function (b) {
          a.chatStarted = a.currentOperator;
        }),
          b.addEventListener('invitation', function (b) {
            b.from && ((a.chatStarted = b.from), (a.currentOperator = b.from));
          }),
          b.addEventListener('message.new', function () {
            a.lastChat = new Date().getTime();
          }),
          a.lastChat &&
            new Date().getTime() - a.lastChat > 864e5 &&
            ((a.chatStarted = ''),
            (a.currentOperator = ''),
            (a.currentDepartment = 0),
            (a.realDepartment = 0)));
      }
    ),
    define('common/extensions/mozvisibility', [], function () {
      ((MozVisibility = {
        _MAX_TRIES: 10,
        _date: new Date(),
        _tries: 0,
        _timer: null,
        _isVisible: void 0,
        _proxy: function (a, b) {
          return (
            (b = b || window),
            function () {
              a.apply(b, arguments);
            }
          );
        },
        _getEvent: function () {
          return (
            this._event ||
              ((this._event = document.createEvent('HTMLEvents')),
              this._event.initEvent('mozvisibilitychange', !0, !0),
              (this._event.eventName = 'mozvisibilitychange')),
            this._event
          );
        },
        _setVisibilityState: function (a) {
          ((this._isVisible = 'visible' === a),
            (document.mozVisibilityState = a),
            (document.mozHidden = !this._isVisible),
            document.dispatchEvent(this._getEvent()));
        },
        _visibilityCheck: function () {
          ((this._date = new Date()),
            (this._tries = 0),
            (this._timer = setTimeout(this._invisibilityCheckTimeout, 0)));
        },
        _invisibilityCheckTimeoutTemplate: function () {
          var a = new Date(),
            b = a - this._date;
          ((this._date = a),
            this._tries++,
            b > 1e3
              ? this._setVisibilityState('hidden')
              : this._tries < this._MAX_TRIES &&
                (this._timer = setTimeout(this._invisibilityCheckTimeout, 0)));
        },
        _onFocus: function () {
          (clearTimeout(this._timer),
            this._isVisible || this._setVisibilityState('visible'));
        },
        _onBlur: function () {
          this._isVisible && this._visibilityCheck();
        },
        canBeEmulated: function () {
          var a = /(mozilla)(?:.*? rv:([\w.]+))?/,
            b = navigator.userAgent.toLowerCase(),
            c = (b.indexOf('compatible') < 0 && a.exec(b)) || [];
          return (
            window.top === window &&
            c[2] &&
            parseInt(c[2]) >= 5 &&
            !document.visibilityState &&
            !document.MozVisibilityState
          );
        },
        emulate: function () {
          return (
            !!this.canBeEmulated() &&
            ((this._invisibilityCheckTimeout = this._proxy(
              this._invisibilityCheckTimeoutTemplate,
              this
            )),
            window.addEventListener(
              'focus',
              this._proxy(this._onFocus, this),
              !1
            ),
            window.addEventListener(
              'blur',
              this._proxy(this._onBlur, this),
              !1
            ),
            this._visibilityCheck(),
            !0)
          );
        },
      }),
        MozVisibility.emulate());
    }),
    define(
      'common/extensions/visibility.fallback',
      ['common/extensions/mozvisibility'],
      function () {
        if (
          !(
            document.visibilityState ||
            document.webkitVisibilityState ||
            document.msVisibilityState ||
            document.mozVisibilityState ||
            document.oVisibilityState
          )
        ) {
          ((document.hidden = !1), (document.visibilityState = 'visible'));
          var a = null,
            b = function () {
              document.createEvent
                ? (a ||
                    ((a = document.createEvent('HTMLEvents')),
                    a.initEvent('visibilitychange', !0, !0)),
                  document.dispatchEvent(a))
                : 'object' == typeof Visibility &&
                  Visibility._onChange.call(Visibility, {});
            },
            c = function () {
              ((document.hidden = !1),
                (document.visibilityState = 'visible'),
                b());
            },
            d = function () {
              ((document.hidden = !0),
                (document.visibilityState = 'hidden'),
                b());
            };
          document.addEventListener
            ? (window.addEventListener('focus', c, !0),
              window.addEventListener('blur', d, !0))
            : (document.attachEvent('onfocusin', c),
              document.attachEvent('onfocusout', d));
        }
      }
    ),
    define(
      'common/extensions/visibility.core',
      ['common/extensions/visibility.fallback'],
      function () {
        var a = function (a) {
            return void 0 !== a;
          },
          b = {
            onVisible: function (a) {
              if (!this.isSupported() || !this.hidden())
                return (a(), this.isSupported());
              var c = this.change(function (d, e) {
                b.hidden() || (b.unbind(c), a());
              });
              return c;
            },
            change: function (a) {
              if (!this.isSupported()) return !1;
              this._lastCallback += 1;
              var b = this._lastCallback;
              return ((this._callbacks[b] = a), this._setListener(), b);
            },
            unbind: function (a) {
              delete this._callbacks[a];
            },
            afterPrerendering: function (a) {
              if (!this.isSupported() || 'prerender' != this.state())
                return (a(), this.isSupported());
              var c = this.change(function (d, e) {
                'prerender' != e && (b.unbind(c), a());
              });
              return c;
            },
            hidden: function () {
              return this._prop('hidden', !1);
            },
            state: function () {
              return this._prop('visibilityState', 'visible');
            },
            isSupported: function () {
              return a(this._prefix());
            },
            _doc: window.document,
            _prefixes: ['webkit', 'moz', 'o', 'ms'],
            _chechedPrefix: null,
            _listening: !1,
            _lastCallback: -1,
            _callbacks: {},
            _hiddenBefore: !1,
            _init: function () {
              this._hiddenBefore = this.hidden();
            },
            _prefix: function () {
              if (null !== this._chechedPrefix) return this._chechedPrefix;
              if (a(this._doc.visibilityState))
                return (this._chechedPrefix = '');
              for (var b, c = 0; c < this._prefixes.length; c++)
                if (
                  ((b = this._prefixes[c] + 'VisibilityState'), a(this._doc[b]))
                )
                  return (this._chechedPrefix = this._prefixes[c]);
            },
            _name: function (a) {
              var b = this._prefix();
              return '' == b
                ? a
                : b + a.substr(0, 1).toUpperCase() + a.substr(1);
            },
            _prop: function (a, b) {
              return this.isSupported() ? this._doc[this._name(a)] : b;
            },
            _onChange: function (a) {
              var b = this.state();
              for (var c in this._callbacks)
                this._callbacks[c].call(this._doc, a, b);
              this._hiddenBefore = this.hidden();
            },
            _setListener: function () {
              if (!this._listening) {
                var a = this._prefix() + 'visibilitychange',
                  c = function () {
                    b._onChange.apply(b, arguments);
                  };
                (this._doc.addEventListener
                  ? this._doc.addEventListener(a, c, !1)
                  : this._doc.attachEvent(a, c),
                  (this._listening = !0),
                  (this._hiddenBefore = this.hidden()));
              }
            },
          };
        return (b._init(), b);
      }
    ),
    define(
      'application/command',
      [
        'application/parent',
        'application/dispatcher',
        'jquery',
        'xmpp/connection',
        'application/session.objects',
      ],
      function (a, b, c, d, e) {
        function f(a) {
          (a.length > m && a.splice(0, a.length - m),
            window.localStorage.setItem(l, JSON.stringify(a)));
        }
        function g() {
          var a = window.localStorage.getItem(l);
          (void 0 !== a && null !== a) || (a = '');
          try {
            var b = JSON.parse(a);
            return void 0 === b ? [] : b;
          } catch (a) {
            return [];
          }
        }
        function h(b) {
          try {
            (b.command in j && j[b.command](b.args),
              a.send('command.received', b));
          } catch (a) {}
        }
        function i() {
          for (
            var a = g(), b = {}, c = new Date().getTime(), d = 0;
            d < a.length;
            d++
          ) {
            var e = a[d];
            (!(e.id in k) && c - e.time <= e.ignoreAfter && h(e),
              (b[e.id] = !0));
          }
          k = b;
        }
        var j = {},
          k = [],
          l = 'rhlp.commandQueue',
          m = 5,
          n = function (a) {
            ('key' in a ? a.key : '') === l && i();
          };
        (window.addEventListener
          ? (window.addEventListener('storage', n, !1),
            window.addEventListener('onstorage', n, !1))
          : (window.attachEvent('onstorage', n),
            document.attachEvent('onstorage', n)),
          setInterval(i, 1e3));
        var o = {
          execute: function (a, b, c) {
            var d = g();
            (d.push({
              id: new Date().getTime(),
              command: a,
              args: b,
              time: new Date().getTime(),
              ignoreAfter: c || 1e3,
            }),
              f(d));
          },
          setHandler: function (a, b) {
            j[a] = b;
          },
          clearHandler: function (a) {
            delete j[a];
          },
        };
        return (
          a.addHandler('command.send', function (a) {
            o.execute(a.command, a.arguments, a.ignoreAfter);
          }),
          o
        );
      }
    ),
    define(
      'common/extensions/tabs',
      [
        'common/extensions/compatibility',
        'config/setup',
        'common/extensions/visibility.core',
        'common/extensions/browserDetect',
        'application/command',
      ],
      function (a, b, c, d, e) {
        var f = 'rhlp.tabs.' + b.CLIENT_NAME + '.',
          g = f + 'i',
          h = f + 'leader',
          i = f + 'state',
          j = 1200,
          k = function () {},
          l = function () {},
          m = function () {},
          n = function () {},
          o = {
            id: new Date().getTime(),
            setId: function (a) {
              var b = s();
              ((o.id = a), b && r());
            },
          },
          p = function () {
            return (
              localStorage.getItem(i) || localStorage.setItem(i, 'election'),
              localStorage.getItem(i)
            );
          },
          q = function () {
            return parseInt(localStorage.getItem(h) || '0', 10);
          },
          r = function () {
            (localStorage.setItem(h, o.id), v());
          },
          s = function () {
            return q() === o.id;
          },
          t = function () {
            (localStorage.setItem(i, 'election'),
              r(),
              setTimeout(function () {
                u();
              }, j));
          },
          u = function () {
            s() && localStorage.setItem(i, 'elected');
          },
          v = function () {
            localStorage.setItem(g, new Date().getTime());
          },
          w = function () {
            return (
              new Date().getTime() - parseInt(localStorage.getItem(g), 10) <
              1500
            );
          },
          x = p();
        s();
        return (
          setInterval(
            function () {
              ('election' === p() &&
                (q() < o.id || !w()) &&
                (r(),
                setTimeout(function () {
                  u();
                }, j)),
                s() && v(),
                w() || t(),
                p() !== x &&
                  ((x = p()),
                  'election' === p() ? m() : (n(), s() ? k() : l())));
            },
            'Explorer' === d.browser ? 500 : 300
          ),
          {
            active: function (a) {
              ((k = a), 'elected' === p() && s() && a());
            },
            inactive: function (a) {
              ((l = a), 'elected' !== p() || s() || a());
            },
            election: function (a) {
              ((m = a), 'election' === p() && a());
            },
            electionEnd: function (a) {
              ((n = a), 'elected' === p() && a());
            },
            forceElection: function () {
              t();
            },
            isLeader: function () {
              return s();
            },
            isLeaderElected: function () {
              return 'elected' === p() && w();
            },
            actualize: function () {
              (o.setId(new Date().getTime()), s() ? k() : t());
            },
          }
        );
      }
    ),
    define(
      'xmpp/queue',
      [
        'xmpp/connection',
        'application/session.objects',
        'config/setup',
        'common/extensions/jquery.plugins',
        'xmpp/update',
        'application/dispatcher',
        'common/extensions/strophe',
        'common/constants/sender',
        'common/constants/chatWindowStage',
        'config/lang',
        'xmpp/requestOnline',
        'xmpp/currentOperator',
        'xmpp/departments',
        'common/extensions/tabs',
      ],
      function (a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        var o = {
          getOperator: function () {
            try {
              if (!n.isLeaderElected())
                return void setTimeout(o.getOperator, 100);
              if (!n.isLeader()) return;
              if (null === a._connection || !b.vid)
                return void setTimeout(o.getOperator, 100);
              var d = b.currentOperator,
                e = b.chatStarted,
                g = b.realDepartment;
              ((d = e || d),
                (!b.lastChat || new Date().getTime() - b.lastChat > 864e5) &&
                  ((e = ''), (d = '')));
              var h = [],
                i = $iq({ type: 'get' })
                  .c('query', { xmlns: 'consultant:queue' })
                  .c('client')
                  .t(c.CLIENT_NAME)
                  .up()
                  .c('vid')
                  .t(b.vid.toString())
                  .up();
              'string' == typeof c.REQUIRE_OPERATOR &&
                '' !== c.REQUIRE_OPERATOR &&
                i.c('require').t(c.REQUIRE_OPERATOR).up();
              var j = b.onlineOperators;
              for (var k in j)
                j.hasOwnProperty(k) &&
                  void 0 === j[k].onPage &&
                  (j[k].onPage = 1);
              if (b.requiredOperator) {
                var l = b.requiredOperator.toLowerCase().split(',');
                for (k in j)
                  j.hasOwnProperty(k) &&
                    -1 === l.indexOf(j[k].name.toLowerCase()) &&
                    (j[k].onPage = 0);
              }
              var p = [];
              for (k in j)
                j.hasOwnProperty(k) && j[k].onPage && p.push(j[k].name);
              var q = {};
              if (d && '-' !== d)
                for (k in j)
                  j.hasOwnProperty(k) &&
                    j[k].name.toLowerCase() === (e || d).toLowerCase() &&
                    (q = j[k]);
              if (d && '-' !== d)
                h =
                  g && q.departments && q.departments.indexOf(g) > -1
                    ? m.getResponsible(g)
                    : 'force' !== b.departmentsType ||
                        1 === b.departments.length
                      ? p
                      : [e || d];
              else if (g) {
                var r = !1;
                for (k in b.departments)
                  b.departments.hasOwnProperty(k) &&
                    b.departments[k].id === g &&
                    ((r = !0), (h = m.getResponsible(g)));
                if (!r) {
                  if (
                    ((b.realDepartment = 0),
                    (b.currentDepartment = 0),
                    'force' === b.departmentsType && b.departments.length > 1)
                  )
                    return void f.fire('forceDepartments');
                  h = p;
                }
              } else if (p.length > 0) {
                if ('force' === b.departmentsType && b.departments.length > 1)
                  return void f.fire('forceDepartments');
                h = p;
              }
              (d && '-' !== d && i.c('operator').t(d).up(),
                i
                  .c('responsible')
                  .t("'" + h.join("','") + "'")
                  .up(),
                a._connection.sendIQ(
                  i,
                  o.onGetOperator,
                  o.onGetOperatorFail,
                  5e3
                ));
            } catch (a) {}
          },
          checkOperator: function () {
            function e(a) {
              ((b.chatWindowStage === i.ONLINE && !d('operator', a).text()) ||
                (b.chatWindowStage === i.OFFLINE_FORM &&
                  d('operator', a).text())) &&
                f.fire('changeState', { online: !!d('operator', a).text() });
              var c = d('operator', a).text().toLowerCase();
              if (c) {
                if (
                  (b.chatStarted &&
                    b.currentOperator &&
                    b.currentOperator !== c &&
                    f.fire('showLabel', {
                      text: j.OPERATOR_REDIRECT_OK + b.operDisplayName,
                      loading: !1,
                    }),
                  (b.currentOperator = c),
                  !b.currentDepartment)
                ) {
                  for (var e in b.onlineOperators)
                    b.onlineOperators.hasOwnProperty(e) &&
                      b.onlineOperators[e].name.toLowerCase() ===
                        c.toLowerCase() &&
                      b.onlineOperators[e].departments &&
                      ((b.currentDepartment =
                        b.onlineOperators[e].departments[0]),
                      'force' === b.departmentsType &&
                        (b.realDepartment = b.currentDepartment));
                  (f.fire('departmentChosen'),
                    'force' === b.departmentsType &&
                      f.fire('hideDepartments', { immediate: !0 }));
                }
                f.fire('operator');
              }
            }
            var g = $iq({ type: 'get' })
              .c('query', { xmlns: 'consultant:queue' })
              .c('client')
              .t(c.CLIENT_NAME)
              .up()
              .c('vid')
              .t(b.vid.toString())
              .up();
            ('string' == typeof c.REQUIRE_OPERATOR &&
              '' !== c.REQUIRE_OPERATOR &&
              g.c('require').t(c.REQUIRE_OPERATOR).up(),
              b.currentOperator &&
                '-' !== b.currentOperator &&
                b.chatStarted === b.currentOperator &&
                g.c('operator').t(b.currentOperator),
              a._connection.sendIQ(g, e, e, 1e4));
          },
          onGetOperator: function (c) {
            try {
              if (d('operator', c).text()) {
                var g = b.currentOperator;
                if (
                  b.currentOperator &&
                  b.currentOperator !== d('operator', c).text()
                ) {
                  f.fire('showLabel', {
                    text:
                      j.OPERATOR_REDIRECT_OK + ' ' + d('displayName', c).text(),
                  });
                  var i = function (a) {
                    a.sender === h.OPERATOR &&
                      (f.fire('hideLabel'),
                      f.removeEventListener('message.received', i));
                  };
                  f.addEventListener('message.received', i);
                }
                var k = d('operator', c).text().toLowerCase(),
                  l =
                    b.chatStarted &&
                    b.currentOperator &&
                    b.currentOperator !== k;
                if (
                  ((b.currentOperator = k),
                  (b.operDisplayName = d('displayName', c).text()),
                  (b.operAvatar = d('avatar', c).text()),
                  !b.currentDepartment)
                ) {
                  for (var m in b.onlineOperators)
                    b.onlineOperators.hasOwnProperty(m) &&
                      b.onlineOperators[m].name.toLowerCase() ===
                        b.currentOperator.toLowerCase() &&
                      b.onlineOperators[m].departments &&
                      (b.currentDepartment =
                        b.onlineOperators[m].departments[0]);
                  f.fire('departmentChosen');
                }
                if (
                  (e.currentOperator(),
                  f.fire('operator'),
                  f.fire('changeState', { online: !0 }),
                  l &&
                    f.fire('showLabel', {
                      text: j.OPERATOR_REDIRECT_OK + ' ' + b.operDisplayName,
                      loading: !1,
                    }),
                  b.realDepartment)
                ) {
                  if (b.previousOperator) {
                    var n = $msg({
                      type: 'chat',
                      content: 'notify-department-change',
                      to: b.previousOperator.toOperatorJid(),
                      jid: b.vid.toVisitorJid(),
                    });
                    (n
                      .c('body')
                      .up()
                      .c('department')
                      .t(b.currentDepartment)
                      .up()
                      .c('operator')
                      .t(k)
                      .up(),
                      a._connection.send(n.tree()),
                      (b.previousOperator = ''),
                      (n = $msg({
                        type: 'chat',
                        content: 'notify-department-change',
                        to: k.toOperatorJid(),
                        jid: b.vid.toVisitorJid(),
                      })),
                      n
                        .c('body')
                        .up()
                        .c('department')
                        .t(b.currentDepartment)
                        .up()
                        .c('operator')
                        .t(k)
                        .up(),
                      a._connection.send(n.tree()));
                  } else if (
                    (!g || g.length < 2) &&
                    'force' === b.departmentsType
                  ) {
                    var n = $msg({
                      type: 'chat',
                      content: 'notify-department-change',
                      to: k.toOperatorJid(),
                      jid: b.vid.toVisitorJid(),
                    });
                    (n
                      .c('body')
                      .up()
                      .c('department')
                      .t(b.currentDepartment)
                      .up()
                      .c('operator')
                      .t(k)
                      .up(),
                      a._connection.send(n.tree()));
                  }
                }
                b.preferredOperator &&
                  b.currentOperator !== b.preferredOperator &&
                  (f.fire('showLabel', {
                    text: b.preferredOperatorError || j.NO_PREFERRED_OPERATOR,
                    loading: !1,
                  }),
                  f.addOneShotEventListener('message.new', function () {
                    f.fire('hideLabel');
                  }));
              } else if (
                b.departments &&
                b.departments.length > 1 &&
                'force' === b.departmentsType &&
                !b.realDepartment
              ) {
                var o = b.onlineOperators;
                for (var p in o)
                  if (
                    o.hasOwnProperty(p) &&
                    'online' === o[p].status &&
                    ((void 0 !== o[p].onPage && o.onPage) ||
                      void 0 === o[p].onPage)
                  )
                    return void f.fire('forceDepartments');
              } else
                ((b.isOnline = !1),
                  f.fire('changeState', { online: !1 }),
                  b.free && f.fire('disconnect'));
            } catch (a) {}
          },
          onGetOperatorFail: function () {
            ((b.isOnline = !1),
              f.fire('changeState', { online: !1 }),
              c.QUEUE_DELAY_COUNT++,
              setTimeout(function () {
                o.getOperator();
              }, 3e3));
          },
        };
        return o;
      }
    ),
    define(
      'common/extensions/mouse',
      ['common/extensions/jquery.plugins'],
      function (a) {
        function b(a) {
          return {
            x: a.x || 0,
            y: a.y || 0,
            width: a.width,
            height: a.height,
            scrollX: a.scrollX,
            scrollY: a.scrollY,
            windowHeight: a.windowHeight,
            windowWidth: a.windowWidth,
          };
        }
        function c() {
          if (s) {
            var a = 0;
            for (a = 0; a < j.length; a += 1) j[a].send('getMouse');
            for (a = 0; a < k.length; a += 1) k[a].send('getMouse');
            n();
          }
        }
        var d = 'unknown',
          e = {},
          f = {},
          g = !1,
          h = !1,
          i = 0,
          j = [],
          k = [],
          l = {},
          m = {},
          n = function () {},
          o = function (a) {},
          p = !1,
          q = !1,
          r = !1,
          s = !1,
          t = function () {
            return 'innerHeight' in window
              ? window.innerHeight
              : a(window).height();
          };
        return {
          init: function () {
            return (
              a('body')
                .hover(
                  function () {
                    g = !0;
                  },
                  function () {
                    g = !1;
                  }
                )
                .mouseleave(function () {
                  ((g = !1), (h = !1), (i = 0));
                })
                .mouseenter(function () {
                  ((g = !0), (h = !0));
                }),
              (e.width = Math.max(a('html').width(), a(window).width())),
              (e.height = Math.max(a('html').height(), a(window).height())),
              (e.windowHeight = t()),
              (e.windowWidth = a(window).width()),
              (e.scrollX = a('body').scrollLeft()),
              (e.scrollY = a('body').scrollTop()),
              (e.x = 0),
              (e.y = 0),
              a('body').bind('scroll', function () {
                ((e.scrollX = a('body').scrollLeft()),
                  (e.scrollY = a('body').scrollTop()));
              }),
              a(window).mousemove(function (b) {
                ((i += 1),
                  (!h && i <= 1) ||
                    ((g = !0),
                    (e = {
                      x: b.pageX - a('body').scrollLeft(),
                      y: b.pageY - a('body').scrollTop(),
                      width: Math.max(a(document).width(), a(window).width()),
                      height: Math.max(
                        a(document).height(),
                        a(window).height()
                      ),
                      windowHeight: t(),
                      windowWidth: a(window).width(),
                      scrollX: a('body').scrollLeft(),
                      scrollY: a('body').scrollTop(),
                    })));
              }),
              a(window).bind('scroll', function () {
                ((e.scrollX = a('body').scrollLeft()),
                  (e.scrollY = a('body').scrollTop()),
                  (g = !0));
              }),
              a('html').bind('click', function (b) {
                ((p = !0),
                  (q = !1),
                  (r = !1),
                  (g = !0),
                  (e = {
                    x: b.pageX - a('body').scrollLeft(),
                    y: b.pageY - a('body').scrollTop(),
                    width: Math.max(a(document).width(), a(window).width()),
                    height: Math.max(a(document).height(), a(window).height()),
                    windowHeight: t(),
                    windowWidth: a(window).width(),
                    scrollX: a('body').scrollLeft(),
                    scrollY: a('body').scrollTop(),
                  }));
              }),
              a('html').bind('mouseup', function (b) {
                ((r = !0),
                  (q = !1),
                  (e = {
                    x: b.pageX - a('body').scrollLeft(),
                    y: b.pageY - a('body').scrollTop(),
                    width: Math.max(a('html').width(), a(window).width()),
                    height: Math.max(a(document).height(), a(window).height()),
                    windowHeight: t(),
                    windowWidth: a(window).width(),
                    scrollX: a('body').scrollLeft(),
                    scrollY: a('body').scrollTop(),
                  }));
              }),
              a('html').bind('mousedown', function (b) {
                ((q = !0),
                  (r = !1),
                  (e = {
                    x: b.pageX - a('body').scrollLeft(),
                    y: b.pageY - a('body').scrollTop(),
                    width: Math.max(a('html').width(), a(window).width()),
                    height: Math.max(
                      a(document).height(),
                      a(document).height()
                    ),
                    windowHeight: t(),
                    windowWidth: a(window).width(),
                    scrollX: a('body').scrollLeft(),
                    scrollY: a('body').scrollTop(),
                  }));
              }),
              this
            );
          },
          enable: function () {
            s = !0;
          },
          disable: function () {
            s = !1;
          },
          setAsSlave: function (c) {
            ((d = 'slave'),
              c.addHandler('getMouse', function () {
                var a = b(e);
                ((a.isInside = g),
                  (a.clicked = p),
                  (a.mouseDown = q),
                  (a.mouseUp = r),
                  (p = !1),
                  (q = !1),
                  (r = !1),
                  'function' == typeof o && o(a),
                  c.send('mouseData', a));
              }));
            var f = function () {
              (c.send('forceLeave'),
                a('html').unbind('mousemove', f),
                setTimeout(function () {
                  a('html').mousemove(f);
                }, 1500));
            };
            return (a('html').mousemove(f), this);
          },
          setAsMaster: function () {
            return ((d = 'master'), setInterval(c, 50), this);
          },
          addParentSlave: function (a) {
            return (
              'function' == typeof a.send &&
                (j.push(a),
                a.addHandler('mouseData', function (a) {
                  l = a;
                }),
                a.addHandler('forceLeave', function () {
                  g = !1;
                })),
              this
            );
          },
          addChildSlave: function (a) {
            return (
              'function' == typeof a.send &&
                (k.push(a),
                a.addHandler('mouseData', function (a) {
                  a.isInside && (m = a);
                })),
              this
            );
          },
          setHandler: function (a) {
            return ((n = a), this);
          },
          force: function () {
            return (n(), this);
          },
          setOffsetFunction: function (a) {
            return ((o = a), this);
          },
          getMouseData: function () {
            var a = b(e);
            return (
              (a.isInside = g),
              (a.clicked = p),
              (a.mouseDown = q),
              (a.mouseUp = r),
              (p = !1),
              (q = !1),
              (r = !1),
              'function' == typeof o && o(a),
              m.isInside
                ? ((m.mouseUp |= a.mouseUp), (f = b(m)), m)
                : (l.windowHeight &&
                    ((a.scrollX = l.scrollX),
                    (a.scrollY = l.scrollY),
                    (a.width = l.width),
                    (a.height = l.height),
                    (a.windowHeight = l.windowHeight),
                    (a.windowWidth = l.windowWidth)),
                  !a.isInside && l.isInside
                    ? ((l.mouseUp |= a.mouseUp), (f = b(l)), l)
                    : ((l.x = a.x), (l.y = a.y), (f = b(a)), a))
            );
          },
          getParentMouseData: function () {
            return l;
          },
          getChildMouseData: function () {
            return m;
          },
        };
      }
    ),
    define('common/communication/cobrowseEncoder', [], function () {
      return {
        encode: function (a) {
          var b = a.id + ',';
          ((b += a.width + ',' + a.height + ',' + a.chatWidth + ','),
            (b +=
              a.chatHeight +
              ',' +
              a.chatX +
              ',' +
              a.chatY +
              ',' +
              a.chatState +
              ','),
            (b += a.windowHeight + ',' + a.windowWidth));
          var c;
          for (c = 0; c < a.xArr.length; c += 1)
            ((b += ';'),
              a.insideArr[c]
                ? (a.clickedArr[c]
                    ? (b += 'c,')
                    : a.downArr[c]
                      ? (b += 'd,')
                      : a.upArr[c]
                        ? (b += 'u,')
                        : (b += 'i,'),
                  (b += a.xArr[c] + ',' + a.yArr[c]),
                  a.scrollYArr[c] ? (b += ',' + a.scrollYArr[c]) : (b += ',0'),
                  a.scrollXArr[c] ? (b += ',' + a.scrollXArr[c]) : (b += ',0'))
                : (b += '>'));
          return b;
        },
        decode: function (a) {
          if ('[object Object]' === Object.prototype.toString.call(a)) return a;
          try {
            if (a.indexOf('{') > -1) return JSON.parse(a);
          } catch (a) {
            return;
          }
          try {
            var b = a.split(';'),
              c = {},
              d = b[0].split(',');
            ((c.id = d[0]),
              (c.width = d[1]),
              (c.height = d[2]),
              (c.chatWidth = parseInt(d[3], 10)),
              (c.chatHeight = parseInt(d[4], 10)),
              (c.chatX = parseInt(d[5], 10)),
              (c.chatY = parseInt(d[6], 10)),
              (c.chatState = parseInt(d[7], 10)),
              (c.windowHeight = parseInt(d[8], 10)),
              (c.windowWidth = parseInt(d[9], 10)),
              (c.xArr = []),
              (c.yArr = []),
              (c.scrollXArr = []),
              (c.scrollYArr = []),
              (c.clickedArr = []),
              (c.upArr = []),
              (c.downArr = []),
              (c.insideArr = []));
            var e,
              f = 0,
              g = 0,
              h = 0,
              i = 0;
            for (e = 1; e < b.length; e += 1) {
              var j = b[e].split(',');
              ('c' === j[0] ? c.clickedArr.push(1) : c.clickedArr.push(0),
                'u' === j[0] ? c.upArr.push(1) : c.upArr.push(0),
                'd' === j[0] ? c.downArr.push(1) : c.downArr.push(0),
                '>' === j[0]
                  ? (c.xArr.push(h), c.yArr.push(i), c.insideArr.push(0))
                  : ((h = parseInt(j[1], 10)),
                    (i = parseInt(j[2], 10)),
                    c.xArr.push(h),
                    c.yArr.push(i),
                    c.insideArr.push(1)),
                j[3] && (g = parseInt(j[3], 10)),
                j[4] && (f = parseInt(j[4], 10)),
                c.scrollXArr.push(f),
                c.scrollYArr.push(g));
            }
            return c;
          } catch (a) {
            return;
          }
        },
      };
    }),
    define(
      'application/connectionQueue',
      [
        'application/parent',
        'application/dispatcher',
        'jquery',
        'xmpp/connection',
        'application/session.objects',
      ],
      function (a, b, c, d, e) {
        function f(a) {
          (a.length > j && a.splice(0, a.length - j),
            window.localStorage.setItem(i, JSON.stringify(a)));
        }
        function g() {
          var a = window.localStorage.getItem(i);
          (void 0 !== a && null !== a) || (a = '');
          try {
            var b = JSON.parse(a);
            return void 0 === b ? [] : b;
          } catch (a) {
            return [];
          }
        }
        function h() {
          if (d.isConnected() && e.vid) {
            var a = g();
            if (0 !== a.length) {
              f([]);
              for (var b = 0; b < a.length; b++)
                if (a.hasOwnProperty(b)) {
                  var h = a[b].value,
                    i = c.parseXML(h);
                  d._connection.send(i.documentElement);
                }
            }
          }
        }
        var i = 'rhlp.connection.packetQueue',
          j = 15,
          k = function (a) {
            ('key' in a ? a.key : '') === i && h();
          };
        return (
          window.addEventListener
            ? (window.addEventListener('storage', k, !1),
              window.addEventListener('onstorage', k, !1))
            : (window.attachEvent('onstorage', k),
              document.attachEvent('onstorage', k)),
          setInterval(h, 1e3),
          {
            send: function (a, b) {
              var c = g();
              (b &&
                (c = c.filter(function (a) {
                  return a.type !== b;
                })),
                c.push({ type: b, value: a.toString() }),
                f(c),
                h());
            },
            clear: function (a) {
              var b = g();
              ((b = b.filter(function (b) {
                return b.type !== a;
              })),
                f(b),
                h());
            },
          }
        );
      }
    ),
    define(
      'xmpp/desktopCommands',
      [
        'application/dispatcher',
        'application/session.objects',
        'xmpp/connection',
      ],
      function (a, b, c) {
        function d(a) {
          var b = a.indexOf('@');
          return -1 === b ? a : a.substring(0, b);
        }
        function e(a, c) {
          var e,
            g = d(a);
          c.type === k.subscribe
            ? ((e = JSON.parse(b.watchingOperators)),
              (e[g] = +new Date()),
              (b.watchingOperators = JSON.stringify(e)))
            : c.type === k.unsubscribe
              ? ((e = JSON.parse(b.watchingOperators)),
                delete e[g],
                (b.watchingOperators = JSON.stringify(e)))
              : c.type === k.getInvitationHistory &&
                ((e = JSON.parse(b.invitationHistory)),
                f(g, k.getInvitationHistory, e));
        }
        function f(a, b, c) {
          g(a, {
            type: b,
            value: 'string' == typeof c ? c : JSON.stringify(c),
          });
        }
        function g(a, d) {
          if (c.isConnected()) i(a, d);
          else {
            var e = JSON.parse(b.commandQueue);
            (e.push({ to: a, obj: d }), (b.commandQueue = JSON.stringify(e)));
          }
        }
        function h() {
          for (var a = JSON.parse(b.commandQueue), c = 0; c < a.length; c++)
            i(a[c].to, a[c].obj);
          b.commandQueue = '[]';
        }
        function i(a, d) {
          try {
            var e = $msg({
              to: a.toOperatorJid(),
              jid: b.vid.toVisitorJid(),
              type: 'chat',
              content: 'desktopcommand',
            })
              .c('body')
              .t(JSON.stringify(d))
              .up();
            (c._connection.send(e.tree()),
              c._connection.flush(),
              c._connection.sendIQ(
                $iq({ type: 'get' }).c('query', { xmlns: 'consultant:ping' })
              ));
          } catch (a) {}
        }
        function j(a, c) {
          var d = JSON.parse(b.watchingOperators);
          for (var e in d) d.hasOwnProperty(e) && f(e, a, c);
        }
        var k = {
          subscribe: 'Subscribe',
          unsubscribe: 'Unsubscribe',
          getInvitationHistory: 'GetInvitationHistory',
        };
        return (
          setInterval(function () {
            c.isConnected() && h();
          }, 1e3),
          a.addEventListener('connected', h),
          { received: e, send: f, sendToAll: j }
        );
      }
    ),
    define('common/extensions/guid', [], function () {
      return {
        generate: function () {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (a) {
              var b = (16 * Math.random()) | 0;
              return ('x' == a ? b : (3 & b) | 8).toString(16);
            }
          );
        },
      };
    }),
    define(
      'xmpp/messages',
      [
        'application/session.objects',
        'xmpp/connection',
        'xmpp/queue',
        'application/dispatcher',
        'common/constants/sender',
        'common/extensions/jquery.plugins',
        'common/application/time',
        'common/extensions/mouse',
        'common/extensions/strophe',
        'common/communication/cobrowseEncoder',
        'application/parent',
        'common/constants/chatState',
        'common/constants/chatWindowStage',
        'xmpp/departments',
        'application/connectionQueue',
        'xmpp/desktopCommands',
        'common/extensions/guid',
      ],
      function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
        d.addEventListener('message.new.outcoming', function () {
          o.clear('partial');
        });
        var r = {
          _isTypedTextChanged: '',
          _firstMessageSent: !1,
          _isTyping: !1,
          _lockOperatorTyping: !1,
          _notTypingCount: 0,
          _mouseOperators: {},
          _isMouseSniffed: !1,
          _immediateMouse: !1,
          _receivedMessage: {},
          _typingTimer: null,
          sniff: function () {
            if (a.vid && a.currentOperator) {
              var b = a.currentTypedText.replace(/[\n]+$/g, ' '),
                c = $msg({
                  to: a.currentOperator.toOperatorJid(),
                  jid: a.vid.toVisitorJid(),
                  type: 'chat',
                  content: 'partial',
                })
                  .c('body')
                  .t(b)
                  .up();
              this._isTypedTextChanged && b
                ? ((this._isTypedTextChanged = !1),
                  this._isTyping ||
                    (c
                      .c('composing', {
                        xmlns: 'http://jabber.org/protocol/chatstates',
                      })
                      .up(),
                    (this._isTyping = !0),
                    (this._lockOperatorTyping = !0)),
                  o.send(c, 'partial'))
                : r._isTyping &&
                  (this._notTypingCount < 3
                    ? this._notTypingCount++
                    : ((this._notTypingCount = 0),
                      c
                        .c('paused', {
                          xmlns: 'http://jabber.org/protocol/chatstates',
                        })
                        .up(),
                      o.send(c, 'partial'),
                      (r._isTyping = !1)));
            }
          },
          touchOperator: function () {
            var b = $msg({
              to: a.currentOperator.toOperatorJid(),
              jid: a.vid.toVisitorJid(),
              type: 'chat',
              content: 'partial',
            })
              .c('body')
              .t('')
              .up();
            (b
              .c('composing', {
                xmlns: 'http://jabber.org/protocol/chatstates',
              })
              .up(),
              o.send(b, 'partial'),
              (b = $msg({
                to: a.currentOperator.toOperatorJid(),
                jid: a.vid.toVisitorJid(),
                type: 'chat',
                content: 'partial',
              })
                .c('body')
                .t('')
                .up()),
              b
                .c('paused', { xmlns: 'http://jabber.org/protocol/chatstates' })
                .up(),
              o.send(b, 'partial'));
          },
          typedTextChanged: function () {
            this._isTypedTextChanged = !0;
          },
          onMessageReceived: function (b) {
            var c;
            try {
              if (b.getElementsByTagName('error').length > 0) return;
              var h = b.getAttribute('to');
              if (null === h) return;
              var i = h.split('@');
              (i[0].toLowerCase(), (h = i.join('@')));
              var j = b.getAttribute('from'),
                l = j.split('@');
              (l[0].toLowerCase(), (j = l.join('@')));
              var o = b.getAttribute('displayName'),
                q = b.getAttribute('type');
              if (b.getElementsByTagName('result').length) {
                'consultant:queue' ===
                  b.getElementsByTagName('result')[0].getAttribute('xmlns') &&
                  setTimeout(function () {
                    d.fire('refreshOperator');
                  }, 5e3);
              }
              if ('invitation' === b.getAttribute('content')) {
                var s = f('body', b).text(),
                  t = b.getAttribute('id');
                return (
                  j.extractNode() === a.currentOperator
                    ? d.fire('invitation', {
                        type: 'invitation',
                        message: s,
                        id: t,
                      })
                    : (d.fire('invitation', {
                        type: 'invitation',
                        message: s,
                        id: t,
                        from: j.extractNode(),
                      }),
                      d.fire('updateServerInfo')),
                  !0
                );
              }
              if ('mouse' === b.getAttribute('content'))
                'on' === f('state', b).text()
                  ? d.fire('sniffMouse', { operator: j.extractNode() })
                  : d.fire('stopSniffMouse', { operator: j.extractNode() });
              else if ('session' === b.getAttribute('content'))
                if ('on' === f('state', b).text()) {
                  var u = a.sessionViewers;
                  (u.push(j.extractNode()),
                    (a.sessionViewers = u),
                    k.send('cloneSession'),
                    (a.isCloneSessionActive = !0));
                } else a.isCloneSessionActive = !1;
              else if ('typing' === b.getAttribute('content')) {
                if (!f('body', b).text() || 'start' === f('body', b).text()) {
                  if (
                    (!r._firstMessageSent &&
                      a.currentOperator !== a.chatStarted) ||
                    r._lockOperatorTyping
                  ) {
                    var v = function (a) {
                      if (a.sender === e.VISITOR) {
                        var b = setTimeout(function () {
                            d.fire('typing');
                          }, 2500),
                          c = function (a) {
                            a.sender === e.OPERATOR &&
                              (clearTimeout(b),
                              d.removeEventListener('message.received', c));
                          };
                        d.addEventListener('message.received', c);
                      }
                      d.removeEventListener('message.received', v);
                    };
                    d.addEventListener('message.received', v);
                  } else d.fire('typing');
                  (clearTimeout(r._typingTimer),
                    (r._typingTimer = setTimeout(function () {
                      d.fire('typingStop');
                    }, 1500)));
                }
              } else if ('desktopcommand' === b.getAttribute('content')) {
                try {
                  c = JSON.parse(f('body', b).text());
                } catch (a) {}
                p.received(j, c);
              } else if ('command' === b.getAttribute('content')) {
                try {
                  c = JSON.parse(f('body', b).text());
                } catch (a) {}
                ('highlight' === c.type && d.fire(c),
                  'redirect' === c.type && d.fire(c),
                  'html' === c.type &&
                    ((a.compress = void 0 !== c.compress && c.compress),
                    d.fire('sniffMouse', {
                      operator: j.extractNode(),
                      html: !0,
                      time: 0,
                      force: !0,
                    })),
                  'mouse' === c.type &&
                    ('on' === c.state
                      ? d.fire('sniffMouse', { operator: j.extractNode() })
                      : d.fire('stopSniffMouse', {
                          operator: j.extractNode(),
                        })),
                  'forms' === c.type && k.send('sniffFormData'),
                  'url' === c.type && d.fire('retrieveURL', { to: j }));
              } else if ('rename' === b.getAttribute('content')) {
                var w = Strophe.getText(b.getElementsByTagName('body')[0]);
                w && d.fire('setCustomName', { name: w });
              } else if (
                !b.getAttribute('content') ||
                'normal' === b.getAttribute('content')
              ) {
                var x,
                  y = Strophe.getText(b.getElementsByTagName('body')[0]);
                if (y) {
                  if (
                    (x = b
                      .getElementsByTagName('body')[0]
                      .getAttribute('mid')) &&
                    r._receivedMessage[x]
                  )
                    return !0;
                  x && (r._receivedMessage[x] = !0);
                }
                if (
                  (a.chatWindowStage === m.OFFLINE_FORM &&
                    ((a.currentOperator = j.extractNode() || a.currentOperator),
                    '-' == a.currentOperator && (a.currentOperator = ''),
                    d.fire('refreshOperator')),
                  f('replace', b).length)
                )
                  return (
                    d.fire('replaceMessage', {
                      type: 'replaceMessage',
                      guid: f('replace', b).attr('id'),
                      text: y,
                    }),
                    !0
                  );
                if (y && (0 === y.indexOf(':g') || 0 === y.indexOf(':г'))) {
                  var z = y.substr(3);
                  return (d.fire('redirect', { link: z }), !0);
                }
                if (y && 0 === y.indexOf(':sv'))
                  return (
                    k.send('startSessionView', { from: j.extractNode() }),
                    !0
                  );
                if (y && 0 === y.indexOf(':ssv'))
                  return (
                    k.send('stopSessionView', { from: j.extractNode() }),
                    !0
                  );
                if (y && 0 === y.indexOf(':r'))
                  return (d.fire('operatorRedirect'), !0);
                if (y && y.indexOf(':ok redirect') > -1)
                  return (
                    d.fire('operatorRedirectOk', {
                      operator: j,
                      displayName: o,
                    }),
                    !0
                  );
                if (y && 0 === y.indexOf(':seize'))
                  return (
                    (a.lastChat = new Date().getTime()),
                    d.fire('operatorRedirectOk', {
                      operator: j,
                      displayName: o,
                    }),
                    !0
                  );
                if (y && 0 === y.indexOf(':fail redirect'))
                  return (d.fire('operatorRedirectFail'), !0);
                if (y && 0 === y.indexOf(':ban'))
                  return (
                    d.fire('disconnect'),
                    d.fire('changeState', { online: !1 }),
                    !1
                  );
                if (y && 0 === y.indexOf(':tag')) return !0;
                if (y && 0 === y.indexOf(':pay')) {
                  var A = /\:pay\s+(\d+)\s+(.+)/g,
                    B = A.exec(y);
                  if (B) {
                    var C = +B[1],
                      D = B[2];
                    d.fire('openPaymentForm', {
                      amount: C,
                      description: D,
                      displayName: o,
                      guid: f('body', b).attr('mid'),
                      time: g.now().toString(),
                    });
                  }
                  return !0;
                }
                if ('chat' === q && y) {
                  var E = g.now().toString();
                  (d.fire('message.received', {
                    type: 'message',
                    time: E,
                    text: y,
                    sender: e.OPERATOR,
                    displayName: o,
                    guid: f('body', b).attr('mid'),
                    id: new Date().getTime(),
                    unixTime: new Date().getTime(),
                  }),
                    a.currentOperator ||
                      ((a.currentOperator = j.extractNode()),
                      (a.operDisplayName = o),
                      (a.currentDepartment = n.getDepartment(j)),
                      'force' === a.departmentsType &&
                        (a.realDepartment = a.currentDepartment),
                      d.fire('refreshOperator'),
                      'force' === a.departmentsType &&
                        d.fire('hideDepartments', { immediate: !0 })),
                    k.send('message.displayed'));
                }
              }
              return !0;
            } catch (a) {
              return !0;
            }
          },
          onMessageSent: function (c) {
            if (c.raw) return void b._connection.send(f(c.text));
            if ('-' !== a.currentOperator && '' !== a.currentOperator) {
              if (!c.sent)
                return void (
                  c.sender === e.VISITOR && (r._firstMessageSent = !0)
                );
              if (
                (c.sender === e.VISITOR &&
                  'chat' !== a.stringChatState &&
                  ((a.stringChatState = 'chat'),
                  d.fire('updateChatState', { state: 'chat' })),
                c.sender === e.VISITOR)
              ) {
                r._lockOperatorTyping = !1;
                var g = $msg({
                  to: a.currentOperator.toOperatorJid(),
                  jid: a.vid.toVisitorJid(),
                  id: c.guid,
                  type: 'chat',
                  st: c.st,
                })
                  .c('body')
                  .attrs({ mid: c.guid })
                  .t(c.text)
                  .up();
                if (c.invitations && c.invitations.length > 0) {
                  g.c('invitations');
                  for (var h = 0; h < c.invitations.length; h++) {
                    var i = c.invitations[h];
                    g.c('invitation', {
                      id: i.id,
                      accepted: i.accepted,
                      time: i.time,
                    })
                      .t(i.text)
                      .up();
                  }
                  g.up();
                }
                (c.firstMessage &&
                  g
                    .c('firstMessage', { id: q.generate() })
                    .t(c.firstMessage)
                    .up(),
                  r._firstMessageSent ||
                    g
                      .c('active', {
                        xmlns: 'http://jabber.org/protocol/chatstates',
                      })
                      .up(),
                  b._connection.receipts.sendMessage(g, c.guid),
                  b._connection.sendIQ(
                    $iq({ type: 'get' }).c('query', {
                      xmlns: 'consultant:ping',
                    })
                  ),
                  c.sender === e.VISITOR && (r._firstMessageSent = !0));
              }
            }
          },
        };
        return r;
      }
    ),
    define(
      'view/cssChecker',
      ['common/extensions/jquery.plugins', 'application/dispatcher'],
      function (a, b) {
        var c = {
          _defaultCssLoadSelector: 'rh-loadCss',
          _checkLoadInterval: 50,
          check: function (a, b) {
            (void 0 === a && (a = this._defaultCssLoadSelector),
              this._listenCssLoad(a, b));
          },
          _listenCssLoad: function (d, e) {
            '1' === a('#' + d).css('z-index')
              ? void 0 !== e
                ? b.fire(e)
                : setTimeout(function () {
                    b.fire('cssLoaded');
                  }, 200)
              : setTimeout(function () {
                  c._listenCssLoad(d, e);
                }, c._checkLoadInterval);
          },
        };
        return c;
      }
    ),
    define(
      'application/statistics',
      ['application/session.objects'],
      function (a) {
        var b = !1,
          c = !1;
        return {
          checkNewVisit: function () {
            var c = new Date(a.lastVisit),
              d = new Date();
            return (
              (a.lastVisit = new Date().toString()),
              (b = d.getTime() - c.getTime() > 12e5)
            );
          },
          checkNewDay: function () {
            var b = new Date(a.previousDay),
              d = new Date();
            return (
              (c = d.getTime() - b.getTime() > 864e5),
              c && (a.previousDay = new Date().toString()),
              c
            );
          },
        };
      }
    ),
    define('common/extensions/punycode', [], function () {
      var a = {};
      return (
        (function (a) {
          function b(a) {
            throw RangeError(z[a]);
          }
          function c(a, b) {
            for (var c = a.length; c--; ) a[c] = b(a[c]);
            return a;
          }
          function d(a, b) {
            var d = '.';
            return c(a.split(d), b).join(d);
          }
          function e(a) {
            for (var b, c, d = [], e = 0, f = a.length; e < f; )
              ((b = a.charCodeAt(e++)),
                55296 == (63488 & b) && e < f
                  ? ((c = a.charCodeAt(e++)),
                    56320 == (64512 & c)
                      ? d.push(((1023 & b) << 10) + (1023 & c) + 65536)
                      : d.push(b, c))
                  : d.push(b));
            return d;
          }
          function f(a) {
            return c(a, function (a) {
              var b = '';
              return (
                a > 65535 &&
                  ((a -= 65536),
                  (b += C(((a >>> 10) & 1023) | 55296)),
                  (a = 56320 | (1023 & a))),
                (b += C(a))
              );
            }).join('');
          }
          function g(a) {
            return a - 48 < 10
              ? a - 22
              : a - 65 < 26
                ? a - 65
                : a - 97 < 26
                  ? a - 97
                  : p;
          }
          function h(a, b) {
            return a + 22 + 75 * (a < 26) - ((0 != b) << 5);
          }
          function i(a, b, c) {
            var d = 0;
            for (
              a = c ? B(a / t) : a >> 1, a += B(a / b);
              a > (A * r) >> 1;
              d += p
            )
              a = B(a / A);
            return B(d + ((A + 1) * a) / (a + s));
          }
          function j(a) {
            var c,
              d,
              e,
              h,
              j,
              k,
              l,
              m,
              n,
              s,
              t = [],
              x = a.length,
              y = 0,
              z = v,
              A = u;
            for (d = a.lastIndexOf(w), d < 0 && (d = 0), e = 0; e < d; ++e)
              (a.charCodeAt(e) >= 128 && b('not-basic'),
                t.push(a.charCodeAt(e)));
            for (h = d > 0 ? d + 1 : 0; h < x; ) {
              for (
                j = y, k = 1, l = p;
                h >= x && b('invalid-input'),
                  (m = g(a.charCodeAt(h++))),
                  (m >= p || m > B((o - y) / k)) && b('overflow'),
                  (y += m * k),
                  (n = l <= A ? q : l >= A + r ? r : l - A),
                  !(m < n);
                l += p
              )
                ((s = p - n), k > B(o / s) && b('overflow'), (k *= s));
              ((c = t.length + 1),
                (A = i(y - j, c, 0 == j)),
                B(y / c) > o - z && b('overflow'),
                (z += B(y / c)),
                (y %= c),
                t.splice(y++, 0, z));
            }
            return f(t);
          }
          function k(a) {
            var c,
              d,
              f,
              g,
              j,
              k,
              l,
              m,
              n,
              s,
              t,
              x,
              y,
              z,
              A,
              D = [];
            for (a = e(a), x = a.length, c = v, d = 0, j = u, k = 0; k < x; ++k)
              (t = a[k]) < 128 && D.push(C(t));
            for (f = g = D.length, g && D.push(w); f < x; ) {
              for (l = o, k = 0; k < x; ++k)
                (t = a[k]) >= c && t < l && (l = t);
              for (
                y = f + 1,
                  l - c > B((o - d) / y) && b('overflow'),
                  d += (l - c) * y,
                  c = l,
                  k = 0;
                k < x;
                ++k
              )
                if (((t = a[k]), t < c && ++d > o && b('overflow'), t == c)) {
                  for (
                    m = d, n = p;
                    (s = n <= j ? q : n >= j + r ? r : n - j), !(m < s);
                    n += p
                  )
                    ((A = m - s),
                      (z = p - s),
                      D.push(C(h(s + (A % z), 0))),
                      (m = B(A / z)));
                  (D.push(C(h(m, 0))), (j = i(d, y, f == g)), (d = 0), ++f);
                }
              (++d, ++c);
            }
            return D.join('');
          }
          function l(a) {
            return d(a, function (a) {
              return y.test(a) ? j(a.slice(4).toLowerCase()) : a;
            });
          }
          function m(a) {
            return d(a, function (a) {
              return x.test(a) ? 'xn--' + k(a) : a;
            });
          }
          var n,
            o = 2147483647,
            p = 36,
            q = 1,
            r = 26,
            s = 38,
            t = 700,
            u = 72,
            v = 128,
            w = '-',
            x = /[^ -~]/,
            y = /^xn--/,
            z = {
              overflow: 'Overflow: input needs wider integers to process.',
              'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
              'invalid-input': 'Invalid input',
            },
            A = p - q,
            B = Math.floor,
            C = String.fromCharCode;
          ((n = {
            version: '1.1.1',
            ucs2: { decode: e, encode: f },
            decode: j,
            encode: k,
            toASCII: m,
            toUnicode: l,
            decodeUri: function (a) {
              var b = a.split('//').pop().split('/')[0],
                c = l(b);
              return a.replace(b, c);
            },
            encodeUri: function (a) {
              var b = a.split('//').pop().split('/')[0],
                c = m(b);
              return a.replace(b, c);
            },
          }),
            (a.punycode = n));
        })(a),
        a.punycode
      );
    }),
    define(
      'xmpp/authentication',
      [
        'xmpp/connection',
        'application/dispatcher',
        'application/session.objects',
        'common/constants/sender',
        'common/extensions/jquery.plugins',
        'common/application/time',
        'application/statistics',
        'config/setup',
        'common/extensions/browserDetect',
        'common/extensions/strophe',
        'common/communication/encoder',
        'common/extensions/debug',
        'common/extensions/punycode',
      ],
      function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
        var n = {
          resendAuth: function () {
            c.viewedPages !== c.viewedPages && (c.viewedPages = 0);
            try {
              a._connection.send($pres().tree());
              try {
                var b = h.CURRENT_URL.split('//')[0],
                  d = h.CURRENT_URL.split('//')[1],
                  e = d.split('/'),
                  f = m.toUnicode(e.shift()),
                  j = decodeURIComponent(e.join('/'));
                d = b + '//' + f + '/' + j;
              } catch (a) {
                d = h.CURRENT_URL;
              }
              try {
                var p = c.referrer.split('//')[0],
                  q = c.referrer.split('//')[1],
                  r = q.split('/'),
                  s = m.toUnicode(r.shift()),
                  t = decodeURIComponent(r.join('/'));
                q = p + '//' + s + '/' + t;
              } catch (a) {
                q = c.referrer;
              }
              var u = $iq({ type: 'set' })
                .c('query', { xmlns: 'consultant:auth' })
                .c('client')
                .t(h.CLIENT_NAME)
                .up()
                .c('clientName')
                .t(h.CLIENT_NAME)
                .up()
                .c('os')
                .t(i.OS)
                .up()
                .c('browserName')
                .t(i.browser + ' ' + i.version)
                .up()
                .c('ip')
                .t(c.ip)
                .up()
                .c('currentUrl')
                .t(d)
                .up()
                .c('currentPageTitle')
                .t(h.CURRENT_TITLE)
                .up()
                .c('referrer')
                .t(q)
                .up()
                .c('visits')
                .t(c.visits.toString())
                .up()
                .c('timeOnSite')
                .t(c.time.toString())
                .up()
                .c('currentOperator')
                .t('-' == c.currentOperator ? '' : c.currentOperator)
                .up()
                .c('departmentId')
                .t(c.currentDepartment)
                .up()
                .c('viewedPages')
                .t(c.viewedPages.toString())
                .up()
                .c('inviteState')
                .t(c.inviteState ? c.inviteState.toString() : 'none')
                .up()
                .c('chatState')
                .t(c.stringChatState || 'browse')
                .up()
                .c('trigger')
                .t(c.trigger)
                .up()
                .c('country')
                .t(c.country)
                .up()
                .c('region')
                .t(c.region)
                .up()
                .c('city')
                .t(c.city)
                .up()
                .c('companyId')
                .t(c.companyId)
                .up();
              c.customName && u.c('customName').t(c.customName).up();
              try {
                if (!c.free && c.customFields) {
                  var v = k.parse(c.customFields);
                  ('string' == typeof v && (v = k.parse(v)), u.c('keys'));
                  for (o in v)
                    v.hasOwnProperty(o) &&
                      u
                        .c('key')
                        .c('name')
                        .t(v[o].name)
                        .up()
                        .c('value')
                        .t(v[o].value)
                        .up()
                        .up();
                  u.up();
                }
              } catch (a) {
                l.log(a);
              }
              try {
                if (c.extraAuth) {
                  var w,
                    x = k.parse(c.extraAuth);
                  for (w in x) x.hasOwnProperty(w) && u.c(w).t(x[w]).up();
                }
              } catch (a) {
                l.log(a);
              }
              (g.checkNewVisit() && u.c('newVisit').t('1').up(),
                g.checkNewDay() && u.c('newDay').t('1').up(),
                c.vid > 0 && u.c('vid').t(c.vid.toString()),
                a._connection.sendIQ(u.tree(), n.onReauth, null, 7e3));
            } catch (a) {
              l.log(a);
            }
          },
          onReauth: function (a) {
            (e('vid', a).text() && (c.vid = e('vid', a).text()),
              e('time', a).text() && f.setTimeDifference(e('time', a).text()));
          },
          init: function () {
            var b;
            c.viewedPages !== c.viewedPages && (c.viewedPages = 0);
            try {
              a._connection.send($pres().tree());
              try {
                var d = h.CURRENT_URL.split('//')[0],
                  e = h.CURRENT_URL.split('//')[1],
                  f = e.split('/'),
                  j = m.toUnicode(f.shift()),
                  o = decodeURIComponent(f.join('/'));
                e = d + '//' + j + '/' + o;
              } catch (a) {
                e = h.CURRENT_URL;
              }
              try {
                var p = c.referrer.split('//')[0],
                  q = c.referrer.split('//')[1],
                  r = q.split('/'),
                  s = m.toUnicode(r.shift()),
                  t = decodeURIComponent(r.join('/'));
                q = p + '//' + s + '/' + t;
              } catch (a) {
                q = c.referrer;
              }
              var u = $iq({ type: 'set' })
                .c('query', { xmlns: 'consultant:auth' })
                .c('client')
                .t(h.CLIENT_NAME)
                .up()
                .c('clientName')
                .t(h.CLIENT_NAME)
                .up()
                .c('os')
                .t(i.OS)
                .up()
                .c('browserName')
                .t(i.browser + ' ' + i.version)
                .up()
                .c('ip')
                .t(c.ip)
                .up()
                .c('currentUrl')
                .t(e)
                .up()
                .c('currentPageTitle')
                .t(h.CURRENT_TITLE)
                .up()
                .c('referrer')
                .t(q)
                .up()
                .c('visits')
                .t(c.visits.toString())
                .up()
                .c('timeOnSite')
                .t(c.time.toString())
                .up()
                .c('currentOperator')
                .t('-' == c.currentOperator ? '' : c.currentOperator)
                .up()
                .c('departmentId')
                .t(c.currentDepartment)
                .up()
                .c('viewedPages')
                .t(c.viewedPages.toString())
                .up()
                .c('inviteState')
                .t(c.inviteState ? c.inviteState.toString() : 'none')
                .up()
                .c('chatState')
                .t(c.stringChatState || 'browse')
                .up()
                .c('trigger')
                .t(c.trigger)
                .up()
                .c('country')
                .t(c.country)
                .up()
                .c('region')
                .t(c.region)
                .up()
                .c('city')
                .t(c.city)
                .up();
              c.customName && u.c('customName').t(c.customName).up();
              try {
                if (!c.free && c.customFields) {
                  var v = k.parse(c.customFields);
                  ('string' == typeof v && (v = k.parse(v)), u.c('keys'));
                  for (b in v)
                    v.hasOwnProperty(b) &&
                      u
                        .c('key')
                        .c('name')
                        .t(v[b].name)
                        .up()
                        .c('value')
                        .t(v[b].value)
                        .up()
                        .up();
                  u.up();
                }
              } catch (a) {
                l.log(a);
              }
              try {
                if (c.extraAuth) {
                  var w,
                    x = k.parse(c.extraAuth);
                  for (w in x) x.hasOwnProperty(w) && u.c(w).t(x[w]).up();
                }
              } catch (a) {
                l.log(a);
              }
              (g.checkNewVisit() && u.c('newVisit').t('1').up(),
                g.checkNewDay() && u.c('newDay').t('1').up(),
                c.vid > 0 && u.c('vid').t(c.vid.toString()),
                a._connection.sendIQ(u.tree(), n.onAuthenticate, null, 1e4));
            } catch (a) {
              l.log(a);
            }
          },
          onAuthenticate: function (a) {
            (e('vid', a).text() && (c.vid = e('vid', a).text()),
              e('time', a).text() && f.setTimeDifference(e('time', a).text()),
              b.fire('authenticated'));
          },
          onHistory: function (a) {
            b.fire('historyReceived');
            var g,
              h = e('message', a);
            for (g = 0; g < h.length; g++) {
              var i = e(h[g]),
                j = i.attr('from') === c.vid.toVisitorJid(),
                k = j ? d.VISITOR : d.OPERATOR,
                l = f.parse(i.attr('time')).toString(),
                m = i.children('body').text(),
                n = i.attr('displayName') || '';
              b.fire('message.history', {
                type: 'message',
                time: l,
                id: f.parse(i.attr('time')).getTime(),
                text: m,
                sender: k,
                displayName: n,
              });
            }
          },
        };
        return n;
      }
    ),
    define(
      'common/extensions/lzjb',
      ['common/extensions/base64'],
      function (a) {
        return (
          (Iuppiter = {}),
          (function () {
            ((NBBY = 8),
              (MATCH_BITS = 6),
              (MATCH_MIN = 3),
              (MATCH_MAX = (1 << MATCH_BITS) + (MATCH_MIN - 1)),
              (OFFSET_MASK = (1 << (16 - MATCH_BITS)) - 1),
              (LEMPEL_SIZE = 256),
              (Iuppiter.compress = function (b) {
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k = [],
                  l = 0,
                  m = 0,
                  n = 1 << (NBBY - 1),
                  o = new Array(LEMPEL_SIZE);
                for (j = 0; j < LEMPEL_SIZE; j++) o[j] = 3435973836;
                for (
                  b.constructor == Array
                    ? ((c = b), !0)
                    : ((c = a.toByteArray(b)), !1),
                    d = c.length;
                  l < d;

                ) {
                  if ((n <<= 1) == 1 << NBBY) {
                    if (m >= d - 1 - 2 * NBBY) {
                      for (g = d, l = 0, m = 0; g; g--) k[m++] = c[l++];
                      return k;
                    }
                    ((n = 1), (f = m), (k[m++] = 0));
                  }
                  if (l > d - MATCH_MAX) k[m++] = c[l++];
                  else if (
                    ((i =
                      ((c[l] + 13) ^ (c[l + 1] - 13) ^ c[l + 2]) &
                      (LEMPEL_SIZE - 1)),
                    (h = (l - o[i]) & OFFSET_MASK),
                    (o[i] = l),
                    (e = l - h) >= 0 &&
                      e != l &&
                      c[l] == c[e] &&
                      c[l + 1] == c[e + 1] &&
                      c[l + 2] == c[e + 2])
                  ) {
                    for (
                      k[f] |= n, g = MATCH_MIN;
                      g < MATCH_MAX && c[l + g] == c[e + g];
                      g++
                    );
                    ((k[m++] =
                      ((g - MATCH_MIN) << (NBBY - MATCH_BITS)) | (h >> NBBY)),
                      (k[m++] = h),
                      (l += g));
                  } else k[m++] = c[l++];
                }
                return k;
              }),
              (Iuppiter.decompress = function (b, c) {
                var d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l = [],
                  m = 0,
                  n = 0,
                  o = 1 << (NBBY - 1);
                for (
                  b.constructor == Array
                    ? ((d = b), (j = !0))
                    : ((d = a.toByteArray(b)), (j = !1)),
                    j = void 0 !== c && c,
                    e = d.length,
                    k = function () {
                      return j ? l : a.fromByteArray(l);
                    };
                  m < e;

                )
                  if (
                    ((o <<= 1) == 1 << NBBY && ((o = 1), (g = d[m++])), g & o)
                  ) {
                    if (
                      ((h = (d[m] >> (NBBY - MATCH_BITS)) + MATCH_MIN),
                      (i = ((d[m] << NBBY) | d[m + 1]) & OFFSET_MASK),
                      (m += 2),
                      !((f = n - i) >= 0))
                    )
                      return k();
                    for (; --h >= 0; ) l[n++] = l[f++];
                  } else l[n++] = d[m++];
                return k();
              }));
          })(),
          Iuppiter
        );
      }
    ),
    define(
      'xmpp/cobrowseMessage',
      [
        'xmpp/connection',
        'application/session.objects',
        'application/dispatcher',
        'common/extensions/lzjb',
        'common/extensions/base64',
      ],
      function (a, b, c, d, e) {
        try {
          var f = [],
            g = !1;
          (c.addEventListener('connection.canStormPackets', function (a) {
            g = a.canStormPackets;
          }),
            c.addEventListener('cobrowseMessage', function (g) {
              if (!a.isAuthenticated())
                return void setTimeout(function () {
                  c.fire(g);
                }, 500);
              var h = JSON.stringify({
                action: g.action,
                data: g.data,
                target: g.target,
              });
              isUtf8 = e.isUtf8(h);
              var i = void 0 !== b.compress && b.compress,
                j = i && h.length > 1e3;
              if (j) {
                var k = h;
                try {
                  ((j = !0),
                    (h = e.toByteArray(h, isUtf8)),
                    (h = d.compress(h)),
                    (h = e.encode(h, !0)));
                } catch (a) {
                  h = k;
                }
              }
              var l,
                m = j ? 4e4 : 15e3,
                n = new Date().getTime(),
                o = function (a, c, d, h) {
                  var i = {
                      chunked: !0,
                      id: n,
                      compressed: j,
                      utf8: isUtf8,
                      index: c,
                      body: a.slice(c * d, (c + 1) * d),
                      chunks: Math.ceil(a.length / d),
                    },
                    k = b.currentOperator;
                  '' == k && (k = b.lastMouseOperator || '');
                  var l = JSON.stringify(i);
                  l = e.encodeOld(l);
                  var m = $msg({
                    to: k.toOperatorJid(),
                    jid: b.vid.toVisitorJid(),
                    type: 'chat',
                    content: 'cobrowse',
                    action: g.action,
                    size: l.length,
                  });
                  ((m = m.c('body').t(l).up()),
                    f.push({
                      request: { message: m, to: g.to },
                      notification: h,
                    }));
                },
                p = Math.ceil(h.length / m);
              for (l = 0; l < p; l++)
                o(
                  h,
                  l,
                  m,
                  l == p - 1 && {
                    action: g.action,
                    data: g.data,
                    target: g.target,
                  }
                );
            }));
          var h = function () {
            var b = f.shift();
            if (b)
              try {
                var d = b.request,
                  e = d.message;
                if (d.to)
                  for (var i in d.to)
                    d.to.hasOwnProperty(i) &&
                      (e.node.setAttribute('to', d.to[i].toOperatorJid()),
                      a._connection.send(e.tree()),
                      a._connection.sendIQ(
                        $iq({ type: 'get' }).c('query', {
                          xmlns: 'consultant:ping',
                        })
                      ),
                      a._connection.flush());
                else
                  (a._connection.send(e.tree()),
                    a._connection.flush(),
                    a._connection.sendIQ(
                      $iq({ type: 'get' }).c('query', {
                        xmlns: 'consultant:ping',
                      })
                    ));
                b.notification && c.fire('cobrowseMessageSent', b.notification);
              } catch (d) {}
            g || Math.random();
            setTimeout(h, g);
          };
          setTimeout(h, 400);
        } catch (a) {}
      }
    ),
    define(
      'xmpp/cobrowse',
      [
        'application/dispatcher',
        'common/extensions/mouse',
        'application/session.objects',
        'common/communication/cobrowseEncoder',
        'xmpp/connection',
        'application/parent',
      ],
      function (a, b, c, d, e, f) {
        function g(a) {
          if (!a) return !0;
          value = a[0];
          for (var b in a) if (a[b] != value) return !1;
          return !0;
        }
        var h = {
          _mouseOperators: {},
          _immediateMouse: !1,
          sniffMouse: function (f, i, j, k) {
            var l = [],
              m = [],
              n = [],
              o = [],
              p = [],
              q = [],
              r = [],
              s = [],
              t = 0,
              u = new Date();
            ((i = i || u.getTime()),
              (f = f.extractNode()),
              (f = (f || c.currentOperator).toOperatorJid()));
            var v = !1;
            if (
              (this._mouseOperators[f] &&
                (j = this._mouseOperators[f].html || j),
              this._mouseOperators[f] && !k && (v = !0),
              (this._mouseOperators[f] = { jid: f, start: i, html: !!j }),
              (c.mouseOperators = JSON.stringify(this._mouseOperators)),
              (c.lastMouseOperator = f),
              (c.isSendMouseActive = !0),
              c.disableCobrowse)
            )
              return void a.fire('cobrowseMessage', { action: 'nocobrowse' });
            ((this._immediateMouse = !0),
              this._isMouseSniffed ||
                b.setHandler(function () {
                  if (c.isSendMouseActive && !c.disableCobrowse) {
                    var a = b.getMouseData(),
                      f = new Date(),
                      i = a.width,
                      j = a.height,
                      k = a.windowHeight,
                      u = a.windowWidth;
                    (l.push(a.x),
                      m.push(a.y),
                      n.push(+a.clicked),
                      p.push(+a.mouseUp),
                      o.push(+a.mouseDown),
                      q.push(a.scrollX),
                      r.push(a.scrollY),
                      s.push(a.isInside),
                      (t += 1),
                      t >= 20 &&
                        (function () {
                          if (
                            !(
                              !c.IsFocused &&
                              g(l) &&
                              g(m) &&
                              g(n) &&
                              g(p) &&
                              g(o) &&
                              g(q) &&
                              g(r) &&
                              g(s)
                            )
                          ) {
                            var a,
                              b = {};
                            ((b.chatX = c.chatX),
                              (b.chatY = c.chatY),
                              (b.chatWidth = c.chatWidth || c.currentChatWidth),
                              (b.chatHeight =
                                c.chatHeight || c.currentChatHeight),
                              (b.chatState = c.chatState),
                              (b.xArr = l),
                              (b.yArr = m),
                              (b.clickedArr = n),
                              (b.upArr = p),
                              (b.downArr = o),
                              (b.scrollXArr = q),
                              (b.scrollYArr = r),
                              (b.insideArr = s),
                              (b.width = i),
                              (b.height = j),
                              (b.windowHeight = k),
                              (b.windowWidth = u),
                              (b.id = f.getTime()));
                            for (a in h._mouseOperators)
                              if (h._mouseOperators.hasOwnProperty(a))
                                if (
                                  f.getTime() - h._mouseOperators[a].start >
                                  3e5
                                )
                                  h.stopSniffMouse(a);
                                else {
                                  var v = $msg({
                                    to: h._mouseOperators[a].jid,
                                    jid: c.vid.toVisitorJid(),
                                    type: 'chat',
                                    content: 'mouse',
                                  })
                                    .c('body')
                                    .t("'" + d.encode(b) + "'")
                                    .up()
                                    .up();
                                  e.isAuthenticated() &&
                                    (e._connection.send(v.tree()),
                                    e._connection.sendIQ(
                                      $iq({ type: 'get' }).c('query', {
                                        xmlns: 'consultant:ping',
                                      })
                                    ),
                                    h._immediateMouse && e._connection.flush());
                                }
                            ((t = 0),
                              (l = []),
                              (m = []),
                              (n = []),
                              (p = []),
                              (o = []),
                              (q = []),
                              (r = []),
                              (s = []),
                              (b = null),
                              (h._immediateMouse = !1));
                          }
                        })());
                  }
                }),
              (this._isMouseSniffed = !0),
              b.enable(),
              setTimeout(function () {
                b.force();
              }, 300),
              j && !v && a.fire('retrieveHTML', { to: f.extractNode() }),
              (c.cloneSession || c.isCloneSessionActive) &&
                a.fire('cloneSession'));
          },
          stopSniffMouse: function (a) {
            delete this._mouseOperators[a.extractNode().toOperatorJid()];
            var d,
              e = !1;
            for (d in this._mouseOperators)
              if (this._mouseOperators.hasOwnProperty(d)) {
                e = !0;
                break;
              }
            ((c.mouseOperators = JSON.stringify(this._mouseOperators)),
              (c.isSendMouseActive = '{}' !== c.mouseOperators),
              e ? b.enable() : b.disable());
          },
        };
        (a.addEventListener('sniffMouse', function (a) {
          (h.sniffMouse(a.operator, a.start, a.html, a.force),
            f.send('sniffMouse'));
        }),
          a.addEventListener('stopSniffMouse', function (a) {
            (h.stopSniffMouse(a.operator),
              c.isSendMouseActive || f.send('stopSniffMouse'));
          }),
          a.addEventListener('sessionLoaded', function () {
            if (c.mouseOperators && '{}' !== c.mouseOperators) {
              var b = JSON.parse(c.mouseOperators || '{}');
              for (var d in b)
                b.hasOwnProperty(d) &&
                  a.fire('sniffMouse', {
                    operator: b[d].jid,
                    start: b[d].start,
                    html: b[d].html,
                  });
            }
          }));
      }
    ),
    requirejs.config({ baseUrl: 'js', paths: { common: '../../common/js' } }),
    define(
      'xmpp/xmppManager',
      [
        'application/dispatcher',
        'xmpp/update',
        'xmpp/xmppException',
        'xmpp/queue',
        'xmpp/authentication',
        'application/session.objects',
        'xmpp/connection',
        'xmpp/messages',
        'common/extensions/strophe',
        'common/constants/sender',
        'common/constants/chatWindowStage',
        'config/lang',
        'common/extensions/guid',
        'common/application/time',
        'application/parent',
        'xmpp/cobrowseMessage',
        'xmpp/cobrowse',
        'common/constants/chatState',
        'common/extensions/tabs',
        'common/extensions/browserDetect',
        'application/command',
        'config/setup',
      ],
      function (
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v
      ) {
        function w(a) {
          return (
            a.clientName === v.CLIENT_NAME &&
            (!a.companyId || a.companyId === v.COMPANY_ID)
          );
        }
        var x = 20;
        (u.setHandler('ensureWeHaveOperator', function (a) {
          f.currentOperator || d.getOperator();
        }),
          a.addEventListener('message.send', function (a) {
            var b = f.messageQueue;
            (b.length > x && b.splice(0, b.length - x),
              (a.clientName = v.CLIENT_NAME),
              (a.companyId = v.COMPANY_ID),
              b.push(a),
              (f.messageQueue = b));
          }),
          f.dispatcher.addEventListener('onMessageQueueChanged', function () {
            a.fire('messageQueueChanged');
          }),
          a.addEventListener('operator', function () {
            a.fire('messageQueueChanged');
          }),
          a.addEventListener('connected', function () {
            a.fire('messageQueueChanged');
          }),
          'Explorer' === t.browser &&
            setInterval(function () {
              a.fire('messageQueueChanged');
            }, 300));
        (a.addEventListener('messageQueueChanged', function () {
          if (
            g.isConnected() &&
            f.vid &&
            '-' !== f.currentOperator &&
            '' !== f.currentOperator
          ) {
            var b = f.messageQueue.filter(function (a) {
              return w(a);
            });
            if (0 !== b.length)
              if (f.currentOperator) {
                f.messageQueue = f.messageQueue.filter(function (a) {
                  return !w(a);
                });
                for (var c = 0; c < b.length; c++) h.onMessageSent(b[c]);
              } else
                setTimeout(function () {
                  a.fire('messageQueueChanged');
                }, 300);
          }
        }),
          a.fire('messageQueueChanged'),
          setInterval(function () {
            h.sniff();
          }, 1e3));
        var y = {
          _updateId: null,
          _sniffId: null,
          _isAuthenticated: !1,
          _isConnected: !1,
          _getOperatorId: null,
          _UPDATE_TIME: 35e3,
          _started: !1,
          _messagesLogged: !1,
          flushQueue: function () {
            s.isLeader() && (f.messageQueue = []);
          },
          runOnConnect: function () {
            (a.removeAllEventListeners('refreshOperator'),
              a.addEventListener('refreshOperator', function () {
                g.isConnected() ? d.getOperator() : s.actualize();
              }));
          },
          runOnce: function () {
            (a.addEventListener('authenticated', function () {
              y.routines();
              var b = function () {
                d.getOperator();
                var a = 2e4,
                  b = function () {
                    (f.isOnline || (d.getOperator(), (a += 2e4)),
                      (y._getOperatorId = setTimeout(b, a)));
                  };
                f.free || (y._getOperatorId = setTimeout(b, a));
              };
              f.chatStarted ||
              f.chatState === r.MAXIMIZED ||
              f.chatState === r.WINDOW
                ? b()
                : a.addEventListener('chatOpened', b);
            }),
              a.addEventListener('operator', function () {
                (a.fire('messageQueueChanged'), (f.isOnline = !0));
              }),
              a.addEventListener('connected', function () {
                ((y._isConnected = !0), e.init());
              }),
              a.addEventListener('global:userBack', function () {
                y._userAway = !1;
              }),
              a.addEventListener('global:userAway', function () {
                y._userAway = !0;
              }),
              a.addEventListener('updateServerInfo', function () {
                d.checkOperator();
              }),
              a.addEventListener('sniffMouse', function () {
                f.isSendMouseActive = !0;
              }),
              a.addEventListener('cloneSession', function () {
                o.send('cloneSession');
              }),
              o.addHandler('sendSession', function (b) {
                var c = [],
                  d = JSON.parse(f.mouseOperators);
                for (var e in d)
                  d.hasOwnProperty(e) && c.push(d[e].jid.extractNode());
                a.fire('cobrowseMessage', {
                  action: 'session',
                  data: b.data,
                  to: c,
                });
              }),
              a.addEventListener('operatorRedirectOk', function (a) {
                ((f.currentOperator = a.operator.extractNode().toLowerCase()),
                  (f.operDisplayName = a.displayName),
                  (f.chatStarted = f.currentOperator),
                  d.getOperator());
              }),
              a.addEventListener('stropheDisconnected', function () {
                g.disconnecting ||
                  ((f.reconnects += 1),
                  (g._isAuthenticated = !1),
                  a.fire('disconnected'));
              }),
              a.addEventListener('reconnect', g.reconnect),
              a.addEventListener('pause:connection', function () {
                g.pause();
              }),
              a.addEventListener('resume:connection', function () {
                g.resume();
              }),
              a.addEventListener('disconnect', function () {
                (clearInterval(y._updateId),
                  a.removeEventListener('message.send', h.onMessageSent),
                  a.removeEventListener('rawMessage', h.onMessageSent),
                  g.disconnect());
              }),
              f.dispatcher.addEventListener(
                'onCustomFieldsChanged',
                function () {
                  b.customFields(JSON.parse(f.customFields));
                }
              ),
              a.addEventListener('xmppGotOperator', function (a) {
                (d.onGetOperator(a.stanza),
                  f.lastMessageFrom === j.VISITOR &&
                    f.lastMessageTime > new Date().getTime() - 3e5 &&
                    h.touchOperator());
              }),
              a.addEventListener('urlChanged', function () {
                e.resendAuth();
              }),
              a.addEventListener('fileAppended', function (b) {
                a.fire('message.' + (b.from === j.VISITOR ? 'send' : 'new'), {
                  type: 'message',
                  text: b.link,
                  id: new Date().getTime(),
                  time: n.now().toString(),
                  sender: b.from,
                  displayName:
                    b.from === j.VISITOR ? l.YOU_LABEL : f.operDisplayName,
                  sent: b.from === j.VISITOR,
                  unixTime: new Date().getTime(),
                  guid: m.generate(),
                });
              }),
              a.addEventListener('setCustomName', function (a) {
                ((f.customName = a.name), e.resendAuth());
              }),
              a.addEventListener('message.received', function (a) {
                f.lastOperatorChat = new Date().getTime();
              }));
          },
          optimizeConnections: function () {
            return 'string' == typeof f.optimizeConnections
              ? 'true' === f.optimizeConnections
              : 'boolean' == typeof f.optimizeConnections
                ? f.optimizeConnections
                : !!f.optimizeConnections;
          },
          waitForActivityAndThenConnect: function () {
            var b,
              c = !1,
              d = function () {
                c ||
                  b ||
                  (setTimeout(function () {
                    s.actualize();
                  }, 200),
                  (c = !0));
              };
            (a.addOneShotEventListener('invitation.accepted', d),
              a.addOneShotEventListener('chatOpened', d));
          },
          noRecentActivity: function () {
            return new Date().getTime() - f.lastChat > 3e8;
          },
          start: function (b) {
            if (!b && !f.isPartiallyOnline && !f.isOnline)
              return void (!f.vid && f.visIdFromNx && (f.vid = f.visIdFromNx));
            if (
              !b &&
              y.optimizeConnections() &&
              y.noRecentActivity() &&
              f.chatState != r.MAXIMIZED &&
              f.chatState != r.WINDOW
            )
              return void y.waitForActivityAndThenConnect();
            if (g.paused && g.isConnected()) return void this.resume();
            var c = !1;
            for (var d in f.onlineOperators)
              c =
                c ||
                'online' === f.onlineOperators[d].status ||
                (f.onlineOperators[d].name === f.chatStarted &&
                  'offline' !== f.onlineOperators[d].status);
            if (!c && f.free && !b) return void a.fire('disconnect');
            (this._started || this.runOnce(),
              (this._started = !0),
              g.isConnected() ||
                g.isConnecting() ||
                (this.runOnConnect(),
                a.fire('xmppConnecting'),
                g.setMessageHandler(h.onMessageReceived),
                g.removeErrorHandlers(),
                g.init(),
                a.fire('xmppStart')));
          },
          counter: function (a) {
            ((f.lastMessageTime = a.unixTime),
              (f.lastMessageFrom = a.sender),
              !1 === a.isIncoming && (f.lastVisitorMessageTime = a.unixTime));
          },
          routines: function () {
            (y._updateId && clearInterval(y._updateId),
              y._sniffId && clearInterval(y._sniffId),
              y._getOperatorId && clearInterval(y._getOperatorId),
              (y._updateId = setInterval(function () {
                b.simple();
              }, this._UPDATE_TIME)),
              a.removeEventListener('rawMessage', h.onMessageSent),
              a.removeEventListener('message.new', y.counter),
              a.addEventListener('rawMessage', h.onMessageSent),
              a.addEventListener('message.new', y.counter),
              (g._isAuthenticated = !0));
          },
          stop: function () {
            a.fire('disconnect');
          },
          pause: function () {
            a.fire('pause:connection');
          },
          resume: function () {
            a.fire('resume:connection');
          },
        };
        return (
          a.addEventListener('xmppManagerStart', function () {
            y.start(!0);
          }),
          f.isPartiallyOnline ||
            f.isOnline ||
            (!f.vid && f.visIdFromNx && (f.vid = f.visIdFromNx)),
          y
        );
      }
    ),
    define('common/constants/offlineError', {
      UNDEFINED: 0,
      INCORRECT_EMAIL: 1,
    }),
    define(
      'view/uiEvents',
      [
        'common/extensions/jquery.plugins',
        'application/session.objects',
        'config/lang',
        'config/setup',
        'application/dispatcher',
        'common/constants/sender',
        'common/constants/offlineError',
        'common/application/basicActivity',
        'common/application/time',
        'common/extensions/guid',
        'common/extensions/browserDetect',
        'common/constants/chatState',
        'common/extensions/utils',
      ],
      function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
        var n = 8e3,
          o = !1,
          p = {
            _isSendingOffline: !1,
            bind: function () {
              function g(a) {
                if (G > 1) {
                  var b = 0;
                  (a.wheelDelta
                    ? (b = a.wheelDelta / 120)
                    : a.detail && (b = -a.detail / 3),
                    2 == G && q(b),
                    a.preventDefault && a.preventDefault(),
                    (a.returnValue = !1));
                }
              }
              function q(a) {
                ((A = u.children('span')),
                  (B = Math.floor(A.height()) - 16),
                  B > 0 && x.scrollTop(x.scrollTop() - 20 * a));
              }
              var r = function (a) {
                return (
                  h.update(),
                  a || (b.lastActivity = new Date().getTime()),
                  !0
                );
              };
              (a(window).click(r),
                a(window).mousemove(r),
                a(window).keydown(r));
              var s = b.lastActivity;
              (rhlpSetInterval(function () {
                s !== b.lastActivity && (r(!0), (s = b.lastActivity));
              }, 2e4),
                a(window).resize(function () {
                  var c = a('#chatItself')[0];
                  ((c.scrollTop = c.scrollHeight),
                    'material' == b.skin && p.processLongFileNames());
                }));
              var t = function () {};
              if (k.isMobile)
                a('#chatTextarea')
                  .val('')
                  .css('color', '#000')
                  .keypress(function (b) {
                    13 === b.keyCode && a('#chatSend').click();
                  });
              else {
                if (
                  ('material' != b.skin &&
                    (a('#textAreaWrapper').append(
                      '<div id="textAreaPlaceholder">' + c.CHAT_LABEL + '</div>'
                    ),
                    a('#textAreaPlaceholder').click(function () {
                      a('#chatTextarea').trigger('focus');
                    })),
                  'material' == b.skin)
                ) {
                  a('#chatTextarea').attr('placeholder', c.CHAT_LABEL);
                  var u = a('#chatTextTemp'),
                    v = a('#onlinePanel'),
                    w = a('#chatItself')[0],
                    x = a('#textAreaScrollWrapper'),
                    y = $('.text__track');
                  (x.baron({ bar: '#text_bar' }),
                    (function (a, b) {
                      a.fn.getCursorPosition = function () {
                        var b = a(this).get(0),
                          c = 0;
                        if ('selectionStart' in b) c = b.selectionStart;
                        else if ('selection' in document) {
                          b.focus();
                          var d = document.selection.createRange(),
                            e = document.selection.createRange().text.length;
                          (d.moveStart('character', -b.value.length),
                            (c = d.text.length - e));
                        }
                        return c;
                      };
                    })(a));
                  var z = function () {
                    var b,
                      c,
                      d,
                      e,
                      f,
                      g,
                      h = a('#chatTextarea'),
                      i = h.width(),
                      j = h.val(),
                      k = j.split('\n').join('<br />.');
                    (u.width(i).html(k),
                      (b = u.height() / 17),
                      v
                        .removeClass('extended4')
                        .removeClass('extended3')
                        .removeClass('extended2'),
                      (w.scrollTop = w.scrollHeight),
                      b < 5 && (u.html(''), y.hide(), h.css('height', '')),
                      b > 2 && b < 5
                        ? v.addClass('extended' + Math.floor(b))
                        : b >= 5 &&
                          (v.addClass('extended4'),
                          y.show(),
                          (c = h.getCursorPosition()),
                          (j =
                            '<span>' +
                            j.substr(0, c) +
                            '</span>' +
                            j.substr(c)),
                          (j = j.replace(/\n/g, '<br />.')),
                          u.html(j + '<br />'),
                          h.css('height', Math.floor(u.height()) + 3),
                          (d = u.children('span')),
                          (e = Math.floor(d.height()) - 16),
                          (f = 0),
                          ((g = Math.round(e - h.position().top)) > f ||
                            g < 0) &&
                            (e > 0 ? x.scrollTop(e) : x.scrollTop(0))));
                  };
                  e.addEventListener('textareaHeightChange', z);
                }
                (b.currentTypedText || a('#textAreaPlaceholder').show(),
                  a('#chatTextarea')
                    .focus(function () {
                      ('' === a(this).val() && a('#textAreaPlaceholder').show(),
                        a(this).css('color', '#000'));
                    })
                    .blur(function () {
                      ('' === a(this).val().trim() &&
                        a('#textAreaPlaceholder').show(),
                        a(this).css('color', '#bbb'));
                    })
                    .keydown(function (c) {
                      if (o) return !1;
                      if (
                        (a('#textAreaPlaceholder').hide(),
                        t(),
                        13 === c.keyCode)
                      ) {
                        if (c.ctrlKey || c.shiftKey) {
                          var f = this.value;
                          if (
                            'number' == typeof this.selectionStart &&
                            'number' == typeof this.selectionEnd
                          ) {
                            var g = this.selectionStart;
                            ((this.value =
                              f.slice(0, g) +
                              '\n' +
                              f.slice(this.selectionEnd)),
                              (this.selectionStart = this.selectionEnd =
                                g + 1));
                          } else if (
                            document.selection &&
                            document.selection.createRange
                          ) {
                            this.focus();
                            var h = document.selection.createRange();
                            ((h.text = '\r\n'), h.collapse(!1), h.select());
                          }
                        } else {
                          if (d.DEBUG && c.shiftKey)
                            return (
                              e.fire('rawMessage', {
                                type: 'rawMessage',
                                text: a('#chatTextarea').val(),
                                raw: !0,
                              }),
                              !1
                            );
                          ((b.byEnter = !0), a('#chatSend').click());
                        }
                        return !1;
                      }
                      return ((b.currentTypedText = a(this).val()), !0);
                    })
                    .keyup(function (d) {
                      var f = a(this).val();
                      ('material' == b.skin && z(),
                        f.length > n &&
                          (e.fire('showLabel', { text: c.TOO_LONG }),
                          (t = function () {
                            a('#chatTextarea').val().length <= n &&
                              (e.fire('hideLabel'), (t = function () {}));
                          })),
                        (b.currentTypedText = a(this).val()),
                        f || a('#textAreaPlaceholder').show());
                    }));
              }
              if (
                (e.addEventListener('disableChat', function (b) {
                  (b.reason && e.fire('showLabel', { text: b.reason }),
                    (o = !0),
                    a('#chatTextarea').attr('disabled', 'disabled'),
                    a('#chatSend, #chatTextarea').addClass('disabled'));
                }),
                e.addEventListener('enableChat', function () {
                  o &&
                    ((o = !1),
                    a('#chatTextarea').removeAttr('disabled'),
                    e.fire('hideLabel'),
                    a('#chatSend, #chatTextarea').removeClass('disabled'));
                }),
                a('#chatSend').click(function () {
                  if (!o) {
                    var d = a('#chatTextarea').val();
                    if (d.length > n)
                      return (
                        e.fire('showLabel', { text: c.TOO_LONG }),
                        void (t = function () {
                          a('#chatTextarea').val().length <= n &&
                            (e.fire('hideLabel'), (t = function () {}));
                        })
                      );
                    if (
                      ((b.currentTypedText = ''),
                      '' !== d.replace(/\n+/g, '\n').trim() &&
                        d.replace(/\n+/g, '') !== c.CHAT_LABEL)
                    ) {
                      var g = i.now().toString(),
                        h = !!b.firstMessageShown;
                      b.firstMessageShown || (b.firstMessageShown = !0);
                      var k = h ? [] : JSON.parse(b.invitationHistory),
                        l = b.free
                          ? c.DEFAULT_FIRST_MESSAGE
                          : b.currentFirstMessage || b.firstMessage;
                      (e.fire('message.send', {
                        type: 'message',
                        text: d,
                        id: new Date().getTime(),
                        time: g,
                        sender: f.VISITOR,
                        displayName: c.YOU_LABEL,
                        sent: !0,
                        unixTime: new Date().getTime(),
                        guid: j.generate(),
                        st: b.byEnter ? 'e' : 'b',
                        invitations: k,
                        firstMessage: h ? void 0 : l,
                      }),
                        (b.byEnter = !1));
                    }
                    (a('#chatTextarea').val(''),
                      'material' == b.skin &&
                        (a('#onlinePanel')
                          .removeClass('extended4')
                          .removeClass('extended3')
                          .removeClass('extended2'),
                        a('#chatTextarea').css('height', ''),
                        a('.text__track').hide()));
                    try {
                      a('#chatTextarea').focus();
                    } catch (a) {}
                  }
                }),
                a(document).keydown(function (a) {
                  if (
                    (a.ctrlKey &&
                      a.altKey &&
                      69 === a.keyCode &&
                      e.fire('refreshHistory'),
                    a.ctrlKey && a.altKey && 68 === a.keyCode)
                  )
                    return (
                      (d.DEBUG = !d.DEBUG),
                      localStorage.setItem('rhlp.debug', d.DEBUG ? 'true' : ''),
                      !1
                    );
                }),
                a('#chatLabel').on('click', "[href='#offline']", function () {
                  (a('#online').hide(), a('#offline').show());
                }),
                'material' == b.skin)
              ) {
                (a('#chatSend')
                  .mousedown(function () {
                    a(this).addClass('pressed');
                  })
                  .mouseup(function () {
                    a(this).removeClass('pressed');
                  })
                  .mouseout(function () {
                    a(this).removeClass('pressed');
                  }),
                  a('#fileSend')
                    .mouseenter(function () {
                      a(this).addClass('hover');
                    })
                    .mouseleave(function () {
                      a(this).removeClass('hover');
                    }),
                  p.processLongFileNames());
                var A,
                  B,
                  C = a('#blured-chat-wrap'),
                  D = 0,
                  E = a('#chatItself'),
                  F = a('#chatTextarea'),
                  u = a('#chatTextTemp'),
                  G = 0;
                (E.scroll(function () {
                  ((D = a(this).scrollTop()),
                    D > 0
                      ? C.html(a(this).html()).css({ top: -D })
                      : C.html(''));
                }),
                  E.mouseover(function (a) {
                    G = 1;
                  }).mouseout(function (a) {
                    G = 0;
                  }),
                  F.mouseover(function (a) {
                    G = 2;
                  }).mouseout(function (a) {
                    G = 0;
                  }),
                  window.addEventListener &&
                    window.addEventListener('DOMMouseScroll', g, !1),
                  (window.onmousewheel = document.onmousewheel = g));
              }
              (a('#sendButton')
                .click(function () {})
                .mousedown(function () {
                  a(this).addClass('pressed');
                })
                .mouseup(function () {
                  a(this).removeClass('pressed');
                })
                .mouseout(function () {
                  a(this).removeClass('pressed');
                })
                .click(function () {
                  if (p._isSendingOffline) return !1;
                  var d = a('#offline');
                  (a('#mailSuccess').text(''),
                    d.removeClass('warning'),
                    a('.inputField input,.inputField textarea').removeClass(
                      'warning'
                    ));
                  var f = a('#email'),
                    g = a('#phone'),
                    h = a('#name'),
                    i = a('#message');
                  (f.val(a.trim(f.val())),
                    g.val(a.trim(g.val())),
                    h.val(a.trim(h.val())),
                    i.val(a.trim(i.val())));
                  var j = b.offlineFields.indexOf('phone') > -1,
                    k = b.offlineFields.indexOf('email') > -1,
                    l = b.offlineFields.indexOf('message') > -1,
                    m = b.offlineFields.indexOf('name') > -1;
                  (!f.val() && k) ||
                  (!h.val() && m) ||
                  (!i.val() && l) ||
                  (!g.val() && j)
                    ? (a('#offlineError .txt').text(c.NOT_ALL_FIELDS),
                      a(
                        '.inputField:visible input, .inputField:visible textarea'
                      ).each(function () {
                        $(this).val() ||
                          ($(this).addClass('warning'), d.addClass('warning'));
                      }))
                    : k &&
                        !f
                          .val()
                          .match(/^[^@?&]+[@][a-zA-Z0-9\.\-]+[.][^@]{2,16}$/)
                      ? (a('#offlineError .txt').text(c.INCORRECT_EMAIL),
                        f.addClass('warning'),
                        d.addClass('warning'))
                      : j &&
                          !g.val().match(/^\+?([\(\)\-]?\d[\(\)\-]?\s?){6,20}$/)
                        ? (a('#offlineError .txt').text(c.INCORRECT_PHONE),
                          g.addClass('warning'),
                          d.addClass('warning'))
                        : ((p._isSendingOffline = !0),
                          a('#email, #name, #message, #phone').attr(
                            'disabled',
                            'disabled'
                          ),
                          a('#throbber').show(),
                          a('#sendButton').hide(),
                          e.fire('sendOffline', {
                            name: m ? h.val() : '',
                            email: k ? f.val() : '',
                            message: l ? i.val() : '',
                            phone: j ? g.val() : '',
                          }));
                }),
                a('input, textarea').keyup(function () {
                  a('#mailSuccess').hide();
                }),
                e.addEventListener('offlineSuccess', function () {
                  p.showSuccess();
                }),
                e.addEventListener('offlineFailure', function (a) {
                  p.showFailure(a);
                }));
              var H = function (b) {
                var c, d;
                a('body').hasClass('departmentsShow') ||
                  (a('#online').is(':visible')
                    ? ((d = a('#chatInput textarea')),
                      (c = d.val()),
                      d.focus().val('').val(c))
                    : ((d = a('#offline input:visible:eq(0)')),
                      (c = d.val()),
                      m.enablePlaceholders(),
                      d.val('').val(c),
                      'Explorer' === k.browser || window.opera || d.focus()));
              };
              ((b.chatStarted ||
                b.chatState === l.MAXIMIZED ||
                b.chatState === l.WINDOW) &&
                H(),
                e.addEventListener('chatOpened', H),
                e.addEventListener('closeChat', function () {
                  a('input, textarea').blur();
                }),
                e.addEventListener('renderChat', H));
            },
            initPlaceHolder: function () {
              var a = [
                  8, 9, 13, 16, 17, 18, 19, 20, 27, 32, 33, 34, 35, 36, 37, 38,
                  39, 40, 44, 45, 46, 91, 144, 145,
                ],
                b = function (b) {
                  if (
                    'focusin' !== b.type &&
                    ('keydown' !== b.type || 16 !== b.keyCode)
                  ) {
                    var d = b.type,
                      e = b.keyCode,
                      f = $(b.currentTarget),
                      g = f.val().trim(),
                      h = f.closest('.redhelper-form-row'),
                      i = h.find('.redhelper-form-row-field'),
                      j = !!f.data('mask'),
                      k = function () {
                        ('keydown' === d && -1 !== $.inArray(e, a)) ||
                          (i.removeClass(
                            'redhelper-form-row-field-focus-ready'
                          ),
                          h.addClass('redhelper-form-row-field-input-onfocus'),
                          j && h.addClass('redhelper-form-row-mask-field'),
                          setTimeout(function () {
                            h.is('.redhelper-form-row-field-input-onfocus') &&
                              i.addClass(
                                'redhelper-form-row-field-focus-ready'
                              );
                          }, 10));
                      },
                      l = function () {
                        (h.removeClass('redhelper-form-row-field-input-fill'),
                          i.removeClass(
                            'redhelper-form-row-field-input-label-focus-ready'
                          ),
                          h.removeClass(
                            'redhelper-form-row-field-input-onfocus'
                          ));
                      },
                      m = h.is(
                        '.redhelper-form-row-field-input-fill, .redhelper-form-row-field-input-onfocus'
                      );
                    if (
                      ('keydown' === d && 8 === e && g.length - 1 == 0 && l(),
                      'keydown' === d &&
                        -1 === $.inArray(e, a) &&
                        h.addClass('redhelper-form-row-active'),
                      m)
                    )
                      h.addClass('redhelper-form-row-focused');
                    else if ('focus' === d || 'click' === d)
                      j ? k() : h.addClass('redhelper-form-row-focused');
                    else {
                      if ('change' === d && 0 === g.length) return;
                      k();
                    }
                    'selectField' === d && c(b);
                  }
                },
                c = function (a) {
                  var b = $(a.currentTarget),
                    c = b.val().trim(),
                    d = b.parents('.redhelper-form-row'),
                    e = d.find('.redhelper-form-row-field');
                  (c.length
                    ? (d.addClass('redhelper-form-row-field-input-fill'),
                      e.addClass(
                        'redhelper-form-row-field-input-label-focus-ready redhelper-form-row-field-focus-ready'
                      ))
                    : 0 === c.length &&
                      (d.removeClass('redhelper-form-row-field-input-fill'),
                      e.removeClass(
                        'redhelper-form-row-field-input-label-focus-ready'
                      )),
                    d
                      .removeClass('redhelper-form-row-focused')
                      .removeClass('redhelper-form-row-field-input-onfocus')
                      .removeClass('redhelper-form-row-active'));
                },
                d = function (a) {
                  var d = $(a.target);
                  d.data('superPlaceholder') ||
                    (d.data('superPlaceholder', !0),
                    b(a),
                    d.on('click focus keydown change', b).on('blur', c));
                },
                e = function (a) {
                  return (
                    $(a.currentTarget)
                      .parents('.redhelper-form-row-select')
                      .find('.redhelper-plugin-select2')
                      .trigger('click'),
                    !1
                  );
                },
                f = $('.redhelper-input-type-text, .input-textarea'),
                g = $('textarea');
              (f.trigger('selectField'),
                $(window).on('blur', function () {
                  f.trigger('blur');
                }),
                $(document).on(
                  'click',
                  '.redhelper-form-row-select .redhelper-form-row-field',
                  e
                ),
                'function' == typeof $.fn.autosize && g.autosize(),
                $(document).on(
                  'selectField',
                  '.redhelper-input-type-text, .input-textarea',
                  b
                ),
                $(document).on(
                  'click focus keydown change',
                  '.redhelper-input-type-text, .input-textarea',
                  d
                ));
            },
            showSuccess: function () {
              ((p._isSendingOffline = !1),
                a('#offlineError .txt').text(''),
                a('#throbber').hide(),
                a('#sendButton').show(),
                a('#offlineSuccess').show(),
                a('#offline').hide(),
                setTimeout(function () {
                  (a('#offlineSuccess').hide(),
                    a('#offline').show(),
                    a('#email, #name, #message, #phone')
                      .removeAttr('disabled')
                      .val(''),
                    a('#mailSuccess').text(c.MAIL_SENT).show(),
                    e.fire('offlineDone'));
                }, 1200));
            },
            showFailure: function (b) {
              ((p._isSendingOffline = !1),
                a('#offlineError .txt')
                  .text(
                    b.errorCode === g.INCORRECT_EMAIL
                      ? c.EMAIL_INCORRECT
                      : c.FAILED_TO_SEND
                  )
                  .show(),
                a('#offlineSuccess').hide(),
                a('#email, #name, #message, #phone').removeAttr('disabled'),
                a('#throbber').hide(),
                a('#sendButton').show());
            },
            processLongFileNames: function (b) {
              var c = a('#chatItself .file-header:eq(0)').outerWidth(!0);
              a('#chatItself .file a').each(function () {
                var b,
                  d = a(this).closest('.file'),
                  e = a(this).data('file'),
                  f = d.outerWidth(!0) - c,
                  g = a('.file-name-wrap', d).text(e).width(),
                  h = '';
                g > f
                  ? ((b = Math.floor(e.length / 2)),
                    (h =
                      '<div>' +
                      e.substr(0, b) +
                      '</div><div><span>' +
                      e.substr(b) +
                      '</span></div>'),
                    a(this).addClass('border').html(h))
                  : a(this).removeClass('border').text(e);
              });
            },
          };
        return p;
      }
    ),
    define('common/extensions/swfobject', [], function () {
      try {
        if (document.createElement('audio').canPlayType) return {};
      } catch (a) {}
      var a = (function () {
        function b() {
          if (!S) {
            try {
              var a = L.getElementsByTagName('body')[0].appendChild(r('span'));
              a.parentNode.removeChild(a);
            } catch (a) {
              return;
            }
            S = !0;
            for (var b = O.length, c = 0; c < b; c++) O[c]();
          }
        }
        function c(a) {
          S ? a() : (O[O.length] = a);
        }
        function d(a) {
          if (typeof K.addEventListener != D) K.addEventListener('load', a, !1);
          else if (typeof L.addEventListener != D)
            L.addEventListener('load', a, !1);
          else if (typeof K.attachEvent != D) s(K, 'onload', a);
          else if ('function' == typeof K.onload) {
            var b = K.onload;
            K.onload = function () {
              (b(), a());
            };
          } else K.onload = a;
        }
        function e() {
          N ? f() : g();
        }
        function f() {
          var a = L.getElementsByTagName('body')[0],
            b = r(E);
          b.setAttribute('type', H);
          var c = a.appendChild(b);
          if (c) {
            var d = 0;
            !(function () {
              if (typeof c.GetVariable != D) {
                var e = c.GetVariable('$version');
                e &&
                  ((e = e.split(' ')[1].split(',')),
                  (V.pv = [
                    parseInt(e[0], 10),
                    parseInt(e[1], 10),
                    parseInt(e[2], 10),
                  ]));
              } else if (d < 10)
                return (d++, void setTimeout(arguments.callee, 10));
              (a.removeChild(b), (c = null), g());
            })();
          } else g();
        }
        function g() {
          var a = P.length;
          if (a > 0)
            for (var b = 0; b < a; b++) {
              var c = P[b].id,
                d = P[b].callbackFn,
                e = { success: !1, id: c };
              if (V.pv[0] > 0) {
                var f = q(c);
                if (f)
                  if (!t(P[b].swfVersion) || (V.wk && V.wk < 312))
                    if (P[b].expressInstall && i()) {
                      var g = {};
                      ((g.data = P[b].expressInstall),
                        (g.width = f.getAttribute('width') || '0'),
                        (g.height = f.getAttribute('height') || '0'),
                        f.getAttribute('class') &&
                          (g.styleclass = f.getAttribute('class')),
                        f.getAttribute('align') &&
                          (g.align = f.getAttribute('align')));
                      for (
                        var l = {},
                          m = f.getElementsByTagName('param'),
                          n = m.length,
                          o = 0;
                        o < n;
                        o++
                      )
                        'movie' != m[o].getAttribute('name').toLowerCase() &&
                          (l[m[o].getAttribute('name')] =
                            m[o].getAttribute('value'));
                      j(g, l, c, d);
                    } else (k(f), d && d(e));
                  else
                    (v(c, !0), d && ((e.success = !0), (e.ref = h(c)), d(e)));
              } else if ((v(c, !0), d)) {
                var p = h(c);
                (p &&
                  typeof p.SetVariable != D &&
                  ((e.success = !0), (e.ref = p)),
                  d(e));
              }
            }
        }
        function h(a) {
          var b = null,
            c = q(a);
          if (c && 'OBJECT' == c.nodeName)
            if (typeof c.SetVariable != D) b = c;
            else {
              var d = c.getElementsByTagName(E)[0];
              d && (b = d);
            }
          return b;
        }
        function i() {
          return !T && t('6.0.65') && (V.win || V.mac) && !(V.wk && V.wk < 312);
        }
        function j(a, b, c, d) {
          ((T = !0), (z = d || null), (A = { success: !1, id: c }));
          var e = q(c);
          if (e) {
            ('OBJECT' == e.nodeName
              ? ((x = l(e)), (y = null))
              : ((x = e), (y = c)),
              (a.id = I),
              (typeof a.width == D ||
                (!/%$/.test(a.width) && parseInt(a.width, 10) < 310)) &&
                (a.width = '310'),
              (typeof a.height == D ||
                (!/%$/.test(a.height) && parseInt(a.height, 10) < 137)) &&
                (a.height = '137'),
              (L.title =
                L.title.slice(0, 47) + ' - Flash Player Installation'));
            var f = V.ie && V.win ? 'ActiveX' : 'PlugIn',
              g =
                'MMredirectURL=' +
                K.location.toString().replace(/&/g, '%26') +
                '&MMplayerType=' +
                f +
                '&MMdoctitle=' +
                L.title;
            if (
              (typeof b.flashvars != D
                ? (b.flashvars += '&' + g)
                : (b.flashvars = g),
              V.ie && V.win && 4 != e.readyState)
            ) {
              var h = r('div');
              ((c += 'SWFObjectNew'),
                h.setAttribute('id', c),
                e.parentNode.insertBefore(h, e),
                (e.style.display = 'none'),
                (function () {
                  4 == e.readyState
                    ? e.parentNode.removeChild(e)
                    : setTimeout(arguments.callee, 10);
                })());
            }
            m(a, b, c);
          }
        }
        function k(a) {
          if (V.ie && V.win && 4 != a.readyState) {
            var b = r('div');
            (a.parentNode.insertBefore(b, a),
              b.parentNode.replaceChild(l(a), b),
              (a.style.display = 'none'),
              (function () {
                4 == a.readyState
                  ? a.parentNode.removeChild(a)
                  : setTimeout(arguments.callee, 10);
              })());
          } else a.parentNode.replaceChild(l(a), a);
        }
        function l(a) {
          var b = r('div');
          if (V.win && V.ie) b.innerHTML = a.innerHTML;
          else {
            var c = a.getElementsByTagName(E)[0];
            if (c) {
              var d = c.childNodes;
              if (d)
                for (var e = d.length, f = 0; f < e; f++)
                  (1 == d[f].nodeType && 'PARAM' == d[f].nodeName) ||
                    8 == d[f].nodeType ||
                    b.appendChild(d[f].cloneNode(!0));
            }
          }
          return b;
        }
        function m(a, b, c) {
          var d,
            e = q(c);
          if (V.wk && V.wk < 312) return d;
          if (e)
            if ((typeof a.id == D && (a.id = c), V.ie && V.win)) {
              var f = '';
              for (var g in a)
                a[g] != Object.prototype[g] &&
                  ('data' == g.toLowerCase()
                    ? (b.movie = a[g])
                    : 'styleclass' == g.toLowerCase()
                      ? (f += ' class="' + a[g] + '"')
                      : 'classid' != g.toLowerCase() &&
                        (f += ' ' + g + '="' + a[g] + '"'));
              var h = '';
              for (var i in b)
                b[i] != Object.prototype[i] &&
                  (h += '<param name="' + i + '" value="' + b[i] + '" />');
              ((e.outerHTML =
                '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
                f +
                '>' +
                h +
                '</object>'),
                (Q[Q.length] = a.id),
                (d = q(a.id)));
            } else {
              var j = r(E);
              j.setAttribute('type', H);
              for (var k in a)
                a[k] != Object.prototype[k] &&
                  ('styleclass' == k.toLowerCase()
                    ? j.setAttribute('class', a[k])
                    : 'classid' != k.toLowerCase() && j.setAttribute(k, a[k]));
              for (var l in b)
                b[l] != Object.prototype[l] &&
                  'movie' != l.toLowerCase() &&
                  n(j, l, b[l]);
              (e.parentNode.replaceChild(j, e), (d = j));
            }
          return d;
        }
        function n(a, b, c) {
          var d = r('param');
          (d.setAttribute('name', b),
            d.setAttribute('value', c),
            a.appendChild(d));
        }
        function o(a) {
          var b = q(a);
          b &&
            'OBJECT' == b.nodeName &&
            (V.ie && V.win
              ? ((b.style.display = 'none'),
                (function () {
                  4 == b.readyState ? p(a) : setTimeout(arguments.callee, 10);
                })())
              : b.parentNode.removeChild(b));
        }
        function p(a) {
          var b = q(a);
          if (b) {
            for (var c in b) 'function' == typeof b[c] && (b[c] = null);
            b.parentNode.removeChild(b);
          }
        }
        function q(a) {
          var b = null;
          try {
            b = L.getElementById(a);
          } catch (a) {}
          return b;
        }
        function r(a) {
          return L.createElement(a);
        }
        function s(a, b, c) {
          (a.attachEvent(b, c), (R[R.length] = [a, b, c]));
        }
        function t(a) {
          var b = V.pv,
            c = a.split('.');
          return (
            (c[0] = parseInt(c[0], 10)),
            (c[1] = parseInt(c[1], 10) || 0),
            (c[2] = parseInt(c[2], 10) || 0),
            b[0] > c[0] ||
              (b[0] == c[0] && b[1] > c[1]) ||
              (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])
          );
        }
        function u(a, b, c, d) {
          if (!V.ie || !V.mac) {
            var e = L.getElementsByTagName('head')[0];
            if (e) {
              var f = c && 'string' == typeof c ? c : 'screen';
              if ((d && ((B = null), (C = null)), !B || C != f)) {
                var g = r('style');
                (g.setAttribute('type', 'text/css'),
                  g.setAttribute('media', f),
                  (B = e.appendChild(g)),
                  V.ie &&
                    V.win &&
                    typeof L.styleSheets != D &&
                    L.styleSheets.length > 0 &&
                    (B = L.styleSheets[L.styleSheets.length - 1]),
                  (C = f));
              }
              V.ie && V.win
                ? B && typeof B.addRule == E && B.addRule(a, b)
                : B &&
                  typeof L.createTextNode != D &&
                  B.appendChild(L.createTextNode(a + ' {' + b + '}'));
            }
          }
        }
        function v(a, b) {
          if (U) {
            var c = b ? 'visible' : 'hidden';
            S && q(a)
              ? (q(a).style.visibility = c)
              : u('#' + a, 'visibility:' + c);
          }
        }
        function w(a) {
          return null != /[\\\"<>\.;]/.exec(a) && typeof encodeURIComponent != D
            ? encodeURIComponent(a)
            : a;
        }
        var x,
          y,
          z,
          A,
          B,
          C,
          D = 'undefined',
          E = 'object',
          F = 'Shockwave Flash',
          G = 'ShockwaveFlash.ShockwaveFlash',
          H = 'application/x-shockwave-flash',
          I = 'SWFObjectExprInst',
          J = 'onreadystatechange',
          K = window,
          L = document,
          M = navigator,
          N = !1,
          O = [e],
          P = [],
          Q = [],
          R = [],
          S = !1,
          T = !1,
          U = !0,
          V = (function () {
            var a =
                typeof L.getElementById != D &&
                typeof L.getElementsByTagName != D &&
                typeof L.createElement != D,
              b = M.userAgent.toLowerCase(),
              c = M.platform.toLowerCase(),
              d = /win/.test(c ? c : b),
              e = /mac/.test(c ? c : b),
              f =
                !!/webkit/.test(b) &&
                parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, '$1')),
              g = !1,
              h = [0, 0, 0],
              i = null;
            if (typeof M.plugins != D && typeof M.plugins[F] == E)
              !(i = M.plugins[F].description) ||
                (typeof M.mimeTypes != D &&
                  M.mimeTypes[H] &&
                  !M.mimeTypes[H].enabledPlugin) ||
                ((N = !0),
                (g = !1),
                (i = i.replace(/^.*\s+(\S+\s+\S+$)/, '$1')),
                (h[0] = parseInt(i.replace(/^(.*)\..*$/, '$1'), 10)),
                (h[1] = parseInt(i.replace(/^.*\.(.*)\s.*$/, '$1'), 10)),
                (h[2] = /[a-zA-Z]/.test(i)
                  ? parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/, '$1'), 10)
                  : 0));
            else if (typeof K.ActiveXObject != D)
              try {
                var j = new ActiveXObject(G);
                j &&
                  (i = j.GetVariable('$version')) &&
                  ((g = !0),
                  (i = i.split(' ')[1].split(',')),
                  (h = [
                    parseInt(i[0], 10),
                    parseInt(i[1], 10),
                    parseInt(i[2], 10),
                  ]));
              } catch (a) {}
            return { w3: a, pv: h, wk: f, ie: g, win: d, mac: e };
          })();
        ((function () {
          V.w3 &&
            (((typeof L.readyState != D && 'complete' == L.readyState) ||
              (typeof L.readyState == D &&
                (L.getElementsByTagName('body')[0] || L.body))) &&
              b(),
            S ||
              (typeof L.addEventListener != D &&
                L.addEventListener('DOMContentLoaded', b, !1),
              V.ie &&
                V.win &&
                (L.attachEvent(J, function () {
                  'complete' == L.readyState &&
                    (L.detachEvent(J, arguments.callee), b());
                }),
                K == top &&
                  (function () {
                    if (!S) {
                      try {
                        L.documentElement.doScroll('left');
                      } catch (a) {
                        return void setTimeout(arguments.callee, 0);
                      }
                      b();
                    }
                  })()),
              V.wk &&
                (function () {
                  if (!S)
                    /loaded|complete/.test(L.readyState)
                      ? b()
                      : setTimeout(arguments.callee, 0);
                })(),
              d(b)));
        })(),
          (function () {
            V.ie &&
              V.win &&
              window.attachEvent('onunload', function () {
                for (var b = R.length, c = 0; c < b; c++)
                  R[c][0].detachEvent(R[c][1], R[c][2]);
                for (var d = Q.length, e = 0; e < d; e++) o(Q[e]);
                for (var f in V) V[f] = null;
                V = null;
                for (var g in a) a[g] = null;
                a = null;
              });
          })());
        return {
          registerObject: function (a, b, c, d) {
            if (V.w3 && a && b) {
              var e = {};
              ((e.id = a),
                (e.swfVersion = b),
                (e.expressInstall = c),
                (e.callbackFn = d),
                (P[P.length] = e),
                v(a, !1));
            } else d && d({ success: !1, id: a });
          },
          getObjectById: function (a) {
            if (V.w3) return h(a);
          },
          embedSWF: function (a, b, d, e, f, g, h, k, l, n) {
            var o = { success: !1, id: b };
            V.w3 && !(V.wk && V.wk < 312) && a && b && d && e && f
              ? (v(b, !1),
                c(function () {
                  ((d += ''), (e += ''));
                  var c = {};
                  if (l && typeof l === E) for (var p in l) c[p] = l[p];
                  ((c.data = a), (c.width = d), (c.height = e));
                  var q = {};
                  if (k && typeof k === E) for (var r in k) q[r] = k[r];
                  if (h && typeof h === E)
                    for (var s in h)
                      typeof q.flashvars != D
                        ? (q.flashvars += '&' + s + '=' + h[s])
                        : (q.flashvars = s + '=' + h[s]);
                  if (t(f)) {
                    var u = m(c, q, b);
                    (c.id == b && v(b, !0), (o.success = !0), (o.ref = u));
                  } else {
                    if (g && i()) return ((c.data = g), void j(c, q, b, n));
                    v(b, !0);
                  }
                  n && n(o);
                }))
              : n && n(o);
          },
          switchOffAutoHideShow: function () {
            U = !1;
          },
          ua: V,
          getFlashPlayerVersion: function () {
            return { major: V.pv[0], minor: V.pv[1], release: V.pv[2] };
          },
          hasFlashPlayerVersion: t,
          createSWF: function (a, b, c) {
            return V.w3 ? m(a, b, c) : void 0;
          },
          showExpressInstall: function (a, b, c, d) {
            V.w3 && i() && j(a, b, c, d);
          },
          removeSWF: function (a) {
            V.w3 && o(a);
          },
          createCSS: function (a, b, c, d) {
            V.w3 && u(a, b, c, d);
          },
          addDomLoadEvent: c,
          addLoadEvent: d,
          getQueryParamValue: function (a) {
            var b = L.location.search || L.location.hash;
            if (b) {
              if ((/\?/.test(b) && (b = b.split('?')[1]), null == a))
                return w(b);
              for (var c = b.split('&'), d = 0; d < c.length; d++)
                if (c[d].substring(0, c[d].indexOf('=')) == a)
                  return w(c[d].substring(c[d].indexOf('=') + 1));
            }
            return '';
          },
          expressInstallCallback: function () {
            if (T) {
              var a = q(I);
              (a &&
                x &&
                (a.parentNode.replaceChild(x, a),
                y && (v(y, !0), V.ie && V.win && (x.style.display = 'block')),
                z && z(A)),
                (T = !1));
            }
          },
        };
      })();
      return a;
    }),
    define(
      'common/extensions/audio',
      [
        'common/extensions/swfobject',
        'config/setup',
        'common/extensions/browserDetect',
      ],
      function (a, b, c) {
        return (function () {
          var b,
            d,
            e,
            f = !0,
            g = !0;
          return {
            init: function (h) {
              if (
                (void 0 !== h && (f = !!h),
                c.isMobile || 'Android' === c.OS || 'iPhone' === c.OS)
              )
                return ((g = !1), void (e = function () {}));
              if (((b = document.createElement('audio')), b.canPlayType))
                (b.canPlayType('audio/mp3')
                  ? b.setAttribute('src', '/container/images/common/msg.mp3')
                  : b.setAttribute('src', '/container/images/common/msg.ogg'),
                  (b.volume = 0.4),
                  (e = function () {
                    b.play();
                  }));
              else {
                try {
                  if (!a.hasFlashPlayerVersion('1'))
                    return ((e = function () {}), void (g = !1));
                } catch (a) {
                  return ((e = function () {}), void (g = !1));
                }
                var i = { AllowScriptAccess: 'always' },
                  j = {
                    data: '/container/images/common/mp3player.swf',
                    width: '0',
                    height: '0',
                  };
                ((d = a.createSWF(j, i, 'audio')),
                  (e = function () {
                    try {
                      (d.SetVariable('method:setVolume', '40'),
                        d.SetVariable(
                          'method:setUrl',
                          '/container/images/common/msg.mp3'
                        ),
                        d.SetVariable('method:play', ''));
                    } catch (a) {}
                  }));
              }
            },
            play: function () {
              f && e();
            },
            turnOn: function () {
              f = !0;
            },
            turnOff: function () {
              f = !1;
            },
            soundCheck: function () {
              return g;
            },
          };
        })();
      }
    ),
    define(
      'xmpp/history.cache',
      [
        'application/dispatcher',
        'application/session.objects',
        'config/setup',
        'common/extensions/compatibility',
        'jquery',
        'common/extensions/browserDetect',
        'application/command',
      ],
      function (a, b, c, d, e, f, g) {
        function h() {
          (o.length > l &&
            (o.splice(0, m), g.execute('decreaseHistoryPointer')),
            window.localStorage.setItem(k, JSON.stringify(o)));
        }
        function i() {
          q && window.localStorage.setItem('pityIE', new Date().getTime());
          var a = window.localStorage.getItem(k) || '[]';
          a.length !== n && ((n = a.length), (o = JSON.parse(a)));
        }
        function j(a, b) {
          a.ignore ||
            !a.text ||
            a.hide ||
            (o.push({
              clientName: c.CLIENT_NAME,
              companyId: c.COMPANY_ID,
              time: a.time,
              id: a.id,
              text: a.text,
              purpose: a.purpose,
              description: a.description,
              amount: a.amount,
              sender: a.sender,
              displayName: a.displayName,
              guid: a.guid,
              isIncoming: b,
              unixTime: new Date().getTime(),
            }),
            h(),
            r());
        }
        if (window.localStorage) {
          var k = 'rhlp.global.history',
            l = 500,
            m = 100,
            n = -1,
            o = [];
          i();
          var p = o.length,
            q = 'Explorer' === f.browser;
          g.setHandler('decreaseHistoryPointer', function () {
            p -= m;
          });
          var r = function () {
            for (i(); p < o.length; p++) {
              var b = o[p];
              b.clientName !== c.CLIENT_NAME ||
                (b.companyId && b.companyId !== c.COMPANY_ID) ||
                (a.fire(
                  'message.new.' + (b.isIncoming ? 'incoming' : 'outcoming'),
                  b
                ),
                a.fire('message.new', b));
            }
          };
          setInterval(r, 1e3);
          var s = function (a) {
            'key' in a && -1 !== a.key.indexOf(k) && r();
          };
          (window.addEventListener
            ? (window.addEventListener('storage', s, !1),
              document.addEventListener('storage', s, !1),
              window.addEventListener('onstorage', s, !1),
              document.addEventListener('onstorage', s, !1))
            : (document.attachEvent('onstorage', s),
              window.attachEvent('onstorage', s)),
            a.addEventListener('message.clearHistory', function () {
              for (var a = [], b = 0, d = o.length; b < d; b++)
                (o[b].clientName !== c.CLIENT_NAME ||
                  (o[b].companyId && o[b].companyId !== c.COMPANY_ID)) &&
                  a.push(o[b]);
              ((o = a), h());
            }),
            a.addEventListener('message.received', function (a) {
              j(a, !0);
            }),
            a.addEventListener('message.send', function (a) {
              j(a, !1);
            }),
            a.addEventListener('replaceMessage', function (a) {
              for (var b = 0, c = o.length; b < c; b++)
                if (o[b].guid === a.guid) {
                  o[b].text = a.text;
                  break;
                }
              h();
            }),
            a.addEventListener('message.getHistory', function () {
              if (b.vid) {
                var d;
                i();
                var e = !1;
                for (d in o)
                  o.hasOwnProperty(d) &&
                    (o[d].clientName !== c.CLIENT_NAME ||
                      (o[d].companyId && o[d].companyId !== c.COMPANY_ID) ||
                      (o[d].companyId ||
                        ((o[d].companyId = c.COMPANY_ID), (e = !0)),
                      a.fire('message.history', o[d])));
                (e && h(), a.fire('historyShown'));
              }
            }),
            'Explorer' === f.browser && f.version);
        }
      }
    ),
    define(
      'xmpp/offline',
      [
        'common/extensions/jquery.plugins',
        'application/dispatcher',
        'common/extensions/browserDetect',
        'config/lang',
        'config/setup',
        'common/constants/offlineError',
        'application/session.objects',
        'common/communication/encoder',
      ],
      function (a, b, c, d, e, f, g, h) {
        var i = 'noreply@redhelper.ru',
          j = (function () {
            return {
              send: function (j, k, l, m) {
                var n,
                  o =
                    d.OFFLINE_FROM_VISITOR +
                    ' #{vid}\n---\n' +
                    d.PAGE +
                    ': ' +
                    e.CURRENT_URL +
                    (e.CURRENT_TITLE ? ' (' + e.CURRENT_TITLE + ')\n' : '\n') +
                    d.TIMEONSITE +
                    ': ' +
                    Math.floor(g.time / 60) +
                    ':' +
                    (g.time % 60) +
                    '\nIP: ' +
                    g.ip +
                    '\n' +
                    d.BROWSER +
                    ': ' +
                    c.browser +
                    ' ' +
                    c.version +
                    ' (' +
                    c.OS +
                    ')\n' +
                    d.REFERRER +
                    ': ' +
                    (g.referrer || d.NOREFERRER) +
                    '\n' +
                    (g.country
                      ? d.LOCATION +
                        ': ' +
                        ('ru' == g.locale
                          ? (g.city_ru || d.NOTDEFINED) + ', ' + g.country_ru
                          : (g.city || d.NOTDEFINED) + ', ' + g.country) +
                        '\n'
                      : '') +
                    '---\n' +
                    (j ? d.OFFLINE_VISITOR_NAME + ': ' + j + '\n' : '') +
                    (k
                      ? d.OFFLINE_BODY_HEADER1 +
                        ': ' +
                        k +
                        ' (' +
                        d.OFFLINE_BODY_HEADER2 +
                        ')\n'
                      : '\n');
                if (!g.free && g.customFields)
                  try {
                    var p = h.parse(g.customFields);
                    for (n in p)
                      p.hasOwnProperty(n) &&
                        void 0 !== p[n].name &&
                        void 0 !== p[n].value &&
                        (o += p[n].name + ': ' + p[n].value + '\n');
                  } catch (a) {}
                (m && (o += d.PHONE_MESSAGE + ': ' + m + '\n'),
                  (o += l ? '\n' + d.MESSAGE_LABEL + ':\n' : ''));
                var q = function () {
                  var c =
                    g.currentDepartment > 0
                      ? g.currentDepartment
                      : g.departments[0].id;
                  a.ajax({
                    url: e.NX_URL + 'offline/' + e.CLIENT_NAME,
                    data: {
                      message: o.replace('#{vid}', '#' + g.vid) + l,
                      name: j,
                      email: k || i,
                      domain: e.CURRENT_URL.split('//')
                        .pop()
                        .split('/')
                        .shift(),
                      vid: g.vid,
                      page:
                        window.redhlpSettings && window.redhlpSettings.page
                          ? window.redhlpSettings.page
                          : e.CURRENT_URL,
                      departmentId: c,
                    },
                    dataType: 'jsonp',
                    type: 'POST',
                    success: function (a) {
                      if ('OK' === a) b.fire('offlineSuccess');
                      else {
                        var c = f.INCORRECT_EMAIL;
                        b.fire('offlineFailure', { errorCode: c });
                      }
                    },
                  });
                };
                if (g.vid) q();
                else {
                  var r = function () {
                    (q(),
                      b.fire('disconnect'),
                      b.removeEventListener('authenticated', r));
                  };
                  (b.addEventListener('authenticated', r),
                    b.fire('xmppManagerStart'));
                }
              },
            };
          })();
        b.addEventListener('sendOffline', function (a) {
          j.send(a.name, a.email, a.message, a.phone);
        });
      }
    ),
    define('config/settings', ['common/communication/encoder'], function (a) {
      try {
        return a.decompress(location.hash.split('#')[1]);
      } catch (a) {
        return {};
      }
    }),
    define(
      'application/redhelper',
      [
        'application/dispatcher',
        'application/session.objects',
        'application/parent',
        'common/extensions/guid',
        'common/constants/sender',
      ],
      function (a, b, c, d, e) {
        var f, g;
        ((window.RedHelper = {
          execFunction: function (b, c) {
            a.fire('sendExecFunction', { name: b, args: c });
          },
        }),
          c.addHandler('execFunction', function (a) {
            try {
              window[a.name].apply(null, a.args);
            } catch (a) {}
          }),
          c.addHandler('sendMessage', function (c) {
            a.fire('message.send', {
              sent: !0,
              text: c.text,
              unixTime: new Date().getTime(),
              guid: d.generate(),
              hide: !c.show,
              st: 'b',
              displayName: b.operDisplayName,
              sender: e.VISITOR,
            });
          }),
          (window.RedHelper.session = {}));
        var h = function (a) {
          ((window.RedHelper.session[a] = b[a]),
            b.dispatcher.addEventListener(
              'on' + a.charAt(0).toUpperCase() + a.substr(1) + 'Changed',
              function () {
                window.RedHelper.session[a] = b[a];
              }
            ));
        };
        for (f = 0, g = b.fields.length; f < g; f++) h(b.fields[f]);
      }
    ),
    define('text', ['module'], function (a) {
      function b(a, b) {
        return void 0 === a || '' === a ? b : a;
      }
      function c(a, c, d, e) {
        if (c === e) return !0;
        if (a === d) {
          if ('http' === a) return b(c, '80') === b(e, '80');
          if ('https' === a) return b(c, '443') === b(e, '443');
        }
        return !1;
      }
      var d,
        e,
        f,
        g,
        h,
        i = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        j = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        k = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        l = 'undefined' != typeof location && location.href,
        m = l && location.protocol && location.protocol.replace(/\:/, ''),
        n = l && location.hostname,
        o = l && (location.port || void 0),
        p = {},
        q = (a.config && a.config()) || {};
      return (
        (d = {
          version: '2.0.16',
          strip: function (a) {
            if (a) {
              a = a.replace(j, '');
              var b = a.match(k);
              b && (a = b[1]);
            } else a = '';
            return a;
          },
          jsEscape: function (a) {
            return a
              .replace(/(['\\])/g, '\\$1')
              .replace(/[\f]/g, '\\f')
              .replace(/[\b]/g, '\\b')
              .replace(/[\n]/g, '\\n')
              .replace(/[\t]/g, '\\t')
              .replace(/[\r]/g, '\\r')
              .replace(/[\u2028]/g, '\\u2028')
              .replace(/[\u2029]/g, '\\u2029');
          },
          createXhr:
            q.createXhr ||
            function () {
              var a, b, c;
              if ('undefined' != typeof XMLHttpRequest)
                return new XMLHttpRequest();
              if ('undefined' != typeof ActiveXObject)
                for (b = 0; b < 3; b += 1) {
                  c = i[b];
                  try {
                    a = new ActiveXObject(c);
                  } catch (a) {}
                  if (a) {
                    i = [c];
                    break;
                  }
                }
              return a;
            },
          parseName: function (a) {
            var b,
              c,
              d,
              e = !1,
              f = a.lastIndexOf('.'),
              g = 0 === a.indexOf('./') || 0 === a.indexOf('../');
            return (
              -1 !== f && (!g || f > 1)
                ? ((b = a.substring(0, f)), (c = a.substring(f + 1)))
                : (b = a),
              (d = c || b),
              (f = d.indexOf('!')),
              -1 !== f &&
                ((e = 'strip' === d.substring(f + 1)),
                (d = d.substring(0, f)),
                c ? (c = d) : (b = d)),
              { moduleName: b, ext: c, strip: e }
            );
          },
          xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
          useXhr: function (a, b, e, f) {
            var g,
              h,
              i,
              j = d.xdRegExp.exec(a);
            return (
              !j ||
              ((g = j[2]),
              (h = j[3]),
              (h = h.split(':')),
              (i = h[1]),
              (h = h[0]),
              (!g || g === b) &&
                (!h || h.toLowerCase() === e.toLowerCase()) &&
                ((!i && !h) || c(g, i, b, f)))
            );
          },
          finishLoad: function (a, b, c, e) {
            ((c = b ? d.strip(c) : c), q.isBuild && (p[a] = c), e(c));
          },
          load: function (a, b, c, e) {
            if (e && e.isBuild && !e.inlineText) return void c();
            q.isBuild = e && e.isBuild;
            var f = d.parseName(a),
              g = f.moduleName + (f.ext ? '.' + f.ext : ''),
              h = b.toUrl(g),
              i = q.useXhr || d.useXhr;
            if (0 === h.indexOf('empty:')) return void c();
            !l || i(h, m, n, o)
              ? d.get(
                  h,
                  function (b) {
                    d.finishLoad(a, f.strip, b, c);
                  },
                  function (a) {
                    c.error && c.error(a);
                  }
                )
              : b(
                  [g],
                  function (a) {
                    d.finishLoad(f.moduleName + '.' + f.ext, f.strip, a, c);
                  },
                  function (a) {
                    c.error && c.error(a);
                  }
                );
          },
          write: function (a, b, c, e) {
            if (p.hasOwnProperty(b)) {
              var f = d.jsEscape(p[b]);
              c.asModule(
                a + '!' + b,
                "define(function () { return '" + f + "';});\n"
              );
            }
          },
          writeFile: function (a, b, c, e, f) {
            var g = d.parseName(b),
              h = g.ext ? '.' + g.ext : '',
              i = g.moduleName + h,
              j = c.toUrl(g.moduleName + h) + '.js';
            d.load(
              i,
              c,
              function (b) {
                var c = function (a) {
                  return e(j, a);
                };
                ((c.asModule = function (a, b) {
                  return e.asModule(a, j, b);
                }),
                  d.write(a, i, c, f));
              },
              f
            );
          },
        }),
        'node' === q.env ||
        (!q.env &&
          'undefined' != typeof process &&
          process.versions &&
          process.versions.node &&
          !process.versions['node-webkit'] &&
          !process.versions['atom-shell'])
          ? ((e = require.nodeRequire('fs')),
            (d.get = function (a, b, c) {
              try {
                var d = e.readFileSync(a, 'utf8');
                ('\ufeff' === d[0] && (d = d.substring(1)), b(d));
              } catch (a) {
                c && c(a);
              }
            }))
          : 'xhr' === q.env || (!q.env && d.createXhr())
            ? (d.get = function (a, b, c, e) {
                var f,
                  g = d.createXhr();
                if ((g.open('GET', a, !0), e))
                  for (f in e)
                    e.hasOwnProperty(f) &&
                      g.setRequestHeader(f.toLowerCase(), e[f]);
                (q.onXhr && q.onXhr(g, a),
                  (g.onreadystatechange = function (d) {
                    var e, f;
                    4 === g.readyState &&
                      ((e = g.status || 0),
                      e > 399 && e < 600
                        ? ((f = new Error(a + ' HTTP status: ' + e)),
                          (f.xhr = g),
                          c && c(f))
                        : b(g.responseText),
                      q.onXhrComplete && q.onXhrComplete(g, a));
                  }),
                  g.send(null));
              })
            : 'rhino' === q.env ||
                (!q.env &&
                  'undefined' != typeof Packages &&
                  'undefined' != typeof java)
              ? (d.get = function (a, b) {
                  var c,
                    d,
                    e = 'utf-8',
                    f = new java.io.File(a),
                    g = java.lang.System.getProperty('line.separator'),
                    h = new java.io.BufferedReader(
                      new java.io.InputStreamReader(
                        new java.io.FileInputStream(f),
                        e
                      )
                    ),
                    i = '';
                  try {
                    for (
                      c = new java.lang.StringBuffer(),
                        d = h.readLine(),
                        d &&
                          d.length() &&
                          65279 === d.charAt(0) &&
                          (d = d.substring(1)),
                        null !== d && c.append(d);
                      null !== (d = h.readLine());

                    )
                      (c.append(g), c.append(d));
                    i = String(c.toString());
                  } finally {
                    h.close();
                  }
                  b(i);
                })
              : ('xpconnect' === q.env ||
                  (!q.env &&
                    'undefined' != typeof Components &&
                    Components.classes &&
                    Components.interfaces)) &&
                ((f = Components.classes),
                (g = Components.interfaces),
                Components.utils.import('resource://gre/modules/FileUtils.jsm'),
                (h = '@mozilla.org/windows-registry-key;1' in f),
                (d.get = function (a, b) {
                  var c,
                    d,
                    e,
                    i = {};
                  (h && (a = a.replace(/\//g, '\\')),
                    (e = new FileUtils.File(a)));
                  try {
                    ((c = f[
                      '@mozilla.org/network/file-input-stream;1'
                    ].createInstance(g.nsIFileInputStream)),
                      c.init(e, 1, 0, !1),
                      (d = f[
                        '@mozilla.org/intl/converter-input-stream;1'
                      ].createInstance(g.nsIConverterInputStream)),
                      d.init(
                        c,
                        'utf-8',
                        c.available(),
                        g.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER
                      ),
                      d.readString(c.available(), i),
                      d.close(),
                      c.close(),
                      b(i.value));
                  } catch (a) {
                    throw new Error(((e && e.path) || '') + ': ' + a);
                  }
                })),
        d
      );
    }),
    define('text!common/../../container/template.html', [], function () {
      return '<template>\n    <div id="chooseDepartment" style="display: none">\n        <div class="colorifier"></div>\n        <div class="topPanel">\n            <div class="topHeader"></div>\n            <div class="topText"></div>\n        </div>\n        <div class="chooseDepartmentTextWrapper">\n            <div class="chooseDepartmentText"></div>\n            <span class="hideDepartments"><span class="icon"><div class="colorifier"></div><span></span></span><span class="txt"></span></span>\n        </div>\n        <div id="departmentsWrapper">\n            <div id="departmentsContainer">\n                <ul id="departments"></ul>\n                <div class="scroller__track">\n                    <div class="scroller__bar" id="departments_bar"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id="offline" style="display: none;">\n\t\t<div class="colorifier"></div>\n\t\t<div class="center">\n\t\t\t<div class="topPanel">\n                <span class="showDepartments"><span class="icon"><div class="colorifier"></div><span></span></span><span class="txt"></span></span>\n\t\t\t\t<div class="header"></div>\n\t\t\t\t<div class="description"></div>\n\t\t\t</div>\n\t\t\t<div id="offlineError">\n\t\t\t\t<span class="txt"></span>\n\t\t\t</div>\n\t\t\t<div id="mailSuccess"></div>\n\t\t\t<div id="feedbackForm">\n\t\t\t\t<div class="inputField name inputField_name">\n\t\t\t\t\t<input id="name" type="text" name="name"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="inputField email">\n\t\t\t\t\t<input id="email" type="email" name="email"/>\n\t\t\t\t</div>\n                <div class="inputField phone">\n                    <input id="phone" type="text" name="phone"/>\n                </div>\n\t\t\t\t<div class="inputField message">\n\t\t\t\t\t<textarea id="message" name="message"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div id="actionPanel">\n\t\t\t\t\t<div id="sendButton"></div>\n\t\t\t\t\t<div id="throbber" style="display: none;"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id="offlineSuccess" style="display: none;">\n\t\t<div></div>\n\t</div>\n\t<div id="online" style="display: none;">\n\t\t<div class="colorifier"></div>\n\t\t<div id="onlinePanel">\n\t\t\t<div class="center">\n\t\t\t\t<div class="wrapper">\n\t\t\t\t\t<div class="topPanel">\n\t\t\t\t\t\t<div id="faceWrapper">\n\t\t\t\t\t\t\t<div id="faceRate">\n                                <div id="faceImgWrapper"><img id="face" alt=""></div>\n                                <div id="rate">\n                                    <div class="colorifier"></div>\n                                    <a id="like">&nbsp;</a>\n                                    <a id="dislike">&nbsp;</a>\n                                </div>\n                            </div>\n\t\t\t\t\t\t\t<div id="topDescription">\n\t\t\t\t\t\t\t\t<div id="topHeader"></div>\n\t\t\t\t\t\t\t\t<div id="topText"></div>\n                                <div style="clear: both;"></div>\n                                <a class="showDepartments"><span class="icon"><div class="colorifier"></div><span></span></span><span class="txt"></span></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="scrollBarContainer">\n\t\t\t\t\t\t<div id="scrollBar"></div>\n\t\t\t\t\t</div>\n                    <div id="chatContainer">\n                        <div id="chatItself">\n                            <div id="invitation"></div>\n\n                            <div class="msg" id="typingLabel">\n                                <div class="textWrapper">\n                                    <div class="text">%text%</div>\n                                </div>\n                            </div>\n                            <div class="msg" id="chatLabel">\n                                <div class="textWrapper">\n                                    <div class="text">%text%</div>\n                                </div>\n                            </div>\n                            <div class="scroller__track">\n                                <div class="scroller__bar" id="chat_bar"></div>\n                            </div>\n                        </div>\n                    </div>\n\t\t\t\t\t<div id="chatInput">\n\t\t\t\t\t\t<div id="textAreaWrapper">\n\t\t\t\t\t\t\t<textarea id="chatTextarea" spellcheck="false"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a id="chatSend"><div class="colorifier"></div></a>\n                        <a id="fileSend"><div class="colorifier"></div></a>\n\t\t\t\t\t</div>\n                    <div id="fileUploadWrapper">\n                        <div class="text">\n                        </div>\n                        <input type="file" name="file" id="uploadedFile"/>\n                    </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n    <div id="fromOperatorHeader" class="msgHeader fromOperator">\n\t\t<span class="sender">%displayName%</span>\n\t</div>\n\n\t<div id="fromOperator" class="msg">\n\t\t<span class="time" title="%date%">%time%</span>\n\t\t<div class="textWrapper">\n\t\t\t<div class="text">%text%</div>\n\t\t</div>\n\t</div>\n\n\t<div id="fromVisitorHeader" class="msgHeader fromVisitor">\n\t\t<span class="sender">%displayName%</span>\n\t</div>\n\n\t<div id="fromVisitor" class="msg">\n\t\t<span class="time" title="%date%"><span class="delivery"></span>%time%</span>\n\t\t<div class="textWrapper">\n\t\t\t<div class="text">%text%</div>\n\t\t</div>\n\t</div>\n\t<div id="promptContainer" class="msg">\n\t\t<span class="time" title="%date%">%promptTime%</span>\n\t\t<div class="textWrapper">\n\t\t\t<div class="text">%text%</div>\n\t\t</div>\n\t</div>\n</template>';
    }),
    define('text!common/../../container/template-modern.html', [], function () {
      return '<template>\n\t<div id="chooseDepartment" style="display: none">\n\t\t<div class="center">\n\t\t\t<div class="topPanel">\n\t\t\t\t<div class="topHeader colorText"></div>\n\t\t\t\t<div class="topText colorText"></div>\n\t\t\t\t<div style="clear:both;"></div>\n\t\t\t</div>\n\t\t\t<div class="chooseDepartmentTextWrapper">\n\t\t\t\t<div class="chooseDepartmentText colorText"></div>\n\t\t\t\t<span class="hideDepartments"><span class="icon"><div class="colorifier"></div><span></span></span><span class="txt colorText"></span></span>\n\t\t\t</div>\n\t\t\t<div id="departmentsWrapper">\n\t\t\t\t<div id="departmentsContainer">\n\t\t\t\t\t<ul id="departments"></ul>\n\t\t\t\t\t<div class="scroller__track">\n\t\t\t\t\t\t<div class="scroller__bar" id="departments_bar"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id="offline" style="display: none;">\n\t\t<div class="center">\n\t\t\t<div class="topPanel">\n\t\t\t\t<div class="topHeader header colorText"></div>\n\t\t\t\t<div class="topText description colorText"></div>\n\t\t\t\t<span class="showDepartments"><span class="icon"><div class="colorifier"></div><span></span></span><span class="txt colorText"></span></span>\n\t\t\t\t<div style="clear: both;"></div>\n\t\t\t</div>\n\n\t\t\t<div id="offlineError"></div>\n\t\t\t<div id="mailSuccess"></div>\n\t\t\t<div id="feedbackForm">\n\t\t\t\t<div class="inputField name inputField_name">\n\t\t\t\t\t<input id="name" type="text" name="name"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="inputField email">\n\t\t\t\t\t<input id="email" type="email" name="email"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="inputField phone">\n\t\t\t\t\t<input id="phone" type="text" name="phone"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="inputField message">\n\t\t\t\t\t<textarea id="message" name="message"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div id="actionPanel">\n\t\t\t\t\t<div id="sendButton"></div>\n\t\t\t\t\t<div id="throbber" style="display: none;"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id="offlineSuccess" style="display: none;">\n\t\t<div></div>\n\t</div>\n\t<div id="online" style="display: none;">\n\t\t<div id="onlinePanel">\n\t\t\t<div class="center">\n\t\t\t\t<div class="wrapper">\n\t\t\t\t\t<div class="topPanel">\n\t\t\t\t\t\t<div id="faceWrapper">\n\t\t\t\t\t\t\t<div id="faceRate">\n\t\t\t\t\t\t\t\t<div id="faceImgWrapper"><img id="face" alt=""></div>\n\t\t\t\t\t\t\t\t<div id="rate">\n\t\t\t\t\t\t\t\t\t<a id="like">&nbsp;</a>\n\t\t\t\t\t\t\t\t\t<a id="dislike">&nbsp;</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id="topDescription">\n\t\t\t\t\t\t\t\t<div id="topHeader" class="topHeader colorText"></div>\n\t\t\t\t\t\t\t\t<div id="topText" class="topText colorText"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="clear: both;"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id="chatOperatorInfo">\n\t\t\t\t\t\t\t<a class="showDepartments"><span class="icon"><div class="colorifier"></div><span></span></span><span class="txt colorText"></span></a>\n\t\t\t\t\t\t\t<span id="operatorArrow" class="colorText">&raquo;</span>\n\t\t\t\t\t\t\t<span id="operatorLabel" class="colorText"></span>\n\t\t\t\t\t\t\t<span id="operatorName" class="colorText"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div id="scrollBarContainer">\n\t\t\t\t\t\t<div id="scrollBar"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="chatContainer">\n\t\t\t\t\t\t<div id="chatItself">\n\t\t\t\t\t\t\t<div id="invitation"></div>\n\n\t\t\t\t\t\t\t<div class="msg" id="typingLabel">\n\t\t\t\t\t\t\t\t<div class="textWrapper">\n\t\t\t\t\t\t\t\t\t<div class="text">%text%</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="msg" id="chatLabel">\n\t\t\t\t\t\t\t\t<div class="textWrapper">\n\t\t\t\t\t\t\t\t\t<div class="text">%text%</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="scroller__track">\n\t\t\t\t\t\t\t\t<div class="scroller__bar" id="chat_bar"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="chatResize"></div>\n\t\t\t\t\t<div id="chatInput">\n\t\t\t\t\t\t<div id="textAreaWrapper">\n\t\t\t\t\t\t\t<textarea id="chatTextarea" spellcheck="false"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a id="chatSend"></a>\n\t\t\t\t\t\t<a id="fileSend"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="fileUploadWrapper">\n\t\t\t\t\t\t<div class="text">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type="file" name="file" id="uploadedFile"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id="fromOperatorHeader" class="msgHeader fromOperator">\n\t\t<span class="time" title="%date%">%time%</span>\n\t\t<div class="msgHeaderFace">\n\t\t\t<div class="chatFace"><img class="face" width="21" alt=""/></div>\n\t\t\t<div class="speak"></div>\n\t\t</div>\n\t</div>\n\n\t<div id="fromOperator" class="msg">\n\t\t<div class="textWrapper">\n\t\t\t<div class="text">%text%</div>\n\t\t</div>\n\t\t<div style="clear: both;"></div>\n\t</div>\n\n\t<div id="fromVisitorHeader" class="msgHeader fromVisitor">\n\t\t<span class="time" title="%date%">%time%</span>\n\t\t<div class="msgHeaderFace">\n\t\t\t<div class="chatFace"><img src="../container/images/modern/visitor_small.png?v=2" alt=""/></div>\n\t\t\t<div class="speak"></div>\n\t\t</div>\n\t</div>\n\n\t<div id="fromVisitor" class="msg">\n\t\t<div class="textWrapper">\n\t\t\t<div class="text">%text%</div>\n\t\t</div>\n\t\t<div style="clear: both;"></div>\n\t</div>\n\t\n\t<div id="promptContainer" class="msg">\n\t\t<span class="time" title="%date%">%promptTime%</span>\n\t\t%text%\n\t</div>\t\n</template>';
    }),
    define(
      'text!common/../../container/template-material.html',
      [],
      function () {
        return '<template>\n\t<div id="chooseDepartment" style="display: none">\n\t\t<div class="center">\n\t\t\t<div class="chooseDepartmentTextWrapper">\n\t\t\t\t<div class="rh-sound"></div>\n\t\t\t\t<div class="rh-close"></div>\n\t\t\t\t<div class="topHeader colorText"></div>\n\t\t\t\t<div class="chooseDepartmentText colorText"></div>\n\t\t\t\t<span class="hideDepartments"><span class="icon"><span></span></span><span class="txt colorText"></span></span>\n\t\t\t</div>\n\t\t\t<div id="departmentsWrapper">\n\t\t\t\t<div id="departmentsContainer">\n\t\t\t\t\t<ul id="departments"></ul>\n\t\t\t\t\t<div class="scroller__track material__scroller">\n\t\t\t\t\t\t<div class="scroller__bar" id="departments_bar"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id="offline" style="display: none;">\n\t\t<div class="center">\n\t\t\t<div class="topPanel">\n\t\t\t\t<div class="rh-sound"></div>\n\t\t\t\t<div class="rh-close"></div>\n\t\t\t\t<div class="header colorText"></div>\n\t\t\t\t<div class="topText description colorText"></div>\n\t\t\t\t<a class="showDepartments">\n\t\t\t\t\t<span class="icon"><span></span></span>\x3c!--\n\t\t\t\t --\x3e<span class="txtWrapper"><span id="topHeader"></span><span class="separator"> &#x00BB; </span><span class="txt"></span></span>\n\t\t\t\t</a>\n\t\t\t\t<div style="clear: both;"></div>\n\t\t\t</div>\n\n\t\t\t<div id="offlineHint"></div>\n\t\t\t<div id="offlineError">\n\t\t\t\t<span class="icon"></span>\n\t\t\t\t<span class="txt"></span>\n\t\t\t</div>\n\t\t\t<div id="eula">Нажимая кнопку "Отправить", Вы принимаете условия <a id="eula_link" target="_blank">пользовательского соглашения</a>.</div>\n\t\t\t<div id="mailSuccess"></div>\n\t\t\t<div id="feedbackForm">\n\t\t\t\t<div class="inputField name inputField_name">\n\t\t\t\t\t<span id="name_title"></span>\n\t\t\t\t\t<input id="name" type="text" name="name" />\n\t\t\t\t</div>\n\t\t\t\t<div class="inputField email">\n\t\t\t\t\t<span id="email_title"></span>\n\t\t\t\t\t<input id="email" type="email" name="email" />\n\t\t\t\t</div>\n\t\t\t\t<div class="inputField phone">\n\t\t\t\t\t<span id="phone_title"></span>\n\t\t\t\t\t<input id="phone" type="text" name="phone" />\n\t\t\t\t</div>\n\t\t\t\t<div class="inputField message">\n\t\t\t\t\t<span id="message_title"></span>\n\t\t\t\t\t<textarea id="message" name="message"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div id="actionPanel">\n\t\t\t\t\t<div id="sendButton" class="blue-button"></div>\n\t\t\t\t\t<div id="throbber" style="display: none;"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id="offlineSuccess" style="display: none;">\n\t\t<div></div>\n\t</div>\n\t<div id="online" style="display: none;">\n\t\t<div id="onlinePanel">\n\t\t\t<div class="center">\n\t\t\t\t<div class="wrapper">\n\t\t\t\t\t<div class="topPanel">\n\t\t\t\t\t\t<div id="chat-loading"></div>\n\t\t\t\t\t\t<div class="rh-sound"></div>\n\t\t\t\t\t\t<div class="rh-close"></div>\n\t\t\t\t\t\t<div id="blured-chat">\n\t\t\t\t\t\t\t<div id="blured-chat-wrap"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id="faceWrapper">\n\t\t\t\t\t\t\t<div id="faceRate">\n\t\t\t\t\t\t\t\t<div id="pi-const-rotating">\n\t\t\t\t\t\t\t\t\t<div id="pi-shifts">\n\t\t\t\t\t\t\t\t\t\t<div id="quarter-1" class="pi-quarter-container">\n\t\t\t\t\t\t\t\t\t\t\t<div class="pi-quarter-window">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="pi-quarter-circle"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id="quarter-2" class="pi-quarter-container">\n\t\t\t\t\t\t\t\t\t\t\t<div class="pi-quarter-window">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="pi-quarter-circle"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id="quarter-3" class="pi-quarter-container">\n\t\t\t\t\t\t\t\t\t\t\t<div class="pi-quarter-window">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="pi-quarter-circle"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id="faceImgWrapper" class=""><img id="face" alt=""></div>\n\t\t\t\t\t\t\t\t<div id="rate">\n\t\t\t\t\t\t\t\t\t<a id="like">&nbsp;</a>\n\t\t\t\t\t\t\t\t\t<a id="dislike">&nbsp;</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id="topDescription">\n\t\t\t\t\t\t\t<div id="operatorName" class="topHeader colorText"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id="chatOperatorInfo">\n\t\t\t\t\t\t\t<a class="showDepartments">\n\t\t\t\t\t\t\t\t<span class="icon"><span></span></span>\x3c!--\n\t\t\t\t\t\t\t --\x3e<span class="txtWrapper colorText"><span id="topHeader" class="colorText"></span><span class="separator colorText"> &#x00BB; </span><span class="txt colorText"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="scrollBarContainer">\n\t\t\t\t\t\t<div id="scrollBar"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="chatContainer">\n\t\t\t\t\t\t<div id="chatItself">\n\t\t\t\t\t\t\t<div id="topText" class="topText"></div>\n\n\t\t\t\t\t\t\t<div id="invitation"></div>\n\n\t\t\t\t\t\t\t<div class="msg" id="typingLabel">\n\t\t\t\t\t\t\t\t<div class="textWrapper">\n\t\t\t\t\t\t\t\t\t<div class="text">%text%</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="msg" id="chatLabel">\n\t\t\t\t\t\t\t\t<div class="textWrapper">\n\t\t\t\t\t\t\t\t\t<div class="text">%text%</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="scroller__track material__scroller">\n\t\t\t\t\t\t\t\t<div class="scroller__bar" id="chat_bar"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="chatInput">\n                        <div id="fileSend"></div>\n\t\t\t\t\t\t<div id="textAreaWrapper">\n\t\t\t\t\t\t\t<div id="textAreaScrollWrapper">\x3c!--\n\t\t\t\t\t\t\t\t--\x3e<textarea id="chatTextarea" spellcheck="false"></textarea>\x3c!--\n\t\t\t\t\t\t\t\t--\x3e<div class="scroller__track material__scroller text__track">\n\t\t\t\t\t\t\t\t\t<div class="scroller__bar" id="text_bar"></div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<a id="chatSend"></a>\n\t\t\t\t\t\t\t<div id="chatTextTemp"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="fileUploadWrapper">\n\t\t\t\t\t\t<div class="text">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type="file" name="file" id="uploadedFile"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id="fromOperatorHeader" class="msgHeader fromOperator">\n\t\t<span class="time" title="%date%">%time%</span>\n\t</div>\n\n\t<div id="fromOperator" class="msg">\n\t\t<div class="textWrapper">\n\t\t\t<div class="text">%text%</div>\n\t\t</div>\n\t\t<div style="clear: both;"></div>\n\t</div>\n\n\t<div id="fromVisitorHeader" class="msgHeader fromVisitor">\n\t\t<span class="time" title="%date%">%time%</span>\n\t</div>\n\n\t<div id="fromVisitor" class="msg">\n\t\t<div class="textWrapper">\n\t\t\t<div class="text">%text%</div>\n\t\t</div>\n\t\t<div style="clear: both;"></div>\n\t</div>\n\t\n\t<div id="promptContainer" class="msg">\n\t\t<span class="time" title="%date%">%promptTime%</span>\n\t\t%text%\n\t</div>\n\n\t<div id="paymentForm" class="msg">\n\t\t<div class="text cpFormContainer">\n\t\t\t<div class="cpFormHeader">\n\t\t\t\t%description% - %amount% р.\n\t\t\t</div>\n\t\t\t<button class="openCpFormButton" disabled="disabled">Оплатить</button>\n\t\t\t<form class="cpForm" autocomplete="off" style="display: none;">\n\t\t\t\t<label>Номер карты</label>\n\t\t\t\t<input type="text" data-cp="cardNumber">\n\t\t\t\t<div class="cpCardExpiation">\n\t\t\t\t\t<label>Срок действия</label>\n\t\t\t\t\t<input type="text" data-cp="expDateMonth"> / <input type="text" data-cp="expDateYear">\n\t\t\t\t</div>\n\t\t\t\t<div class="cpCardCvv">\n\t\t\t\t\t<label>CVV</label>\n\t\t\t\t\t<input type="text" data-cp="cvv">\n\t\t\t\t</div>\n\t\t\t\t<label>Имя держателя карты</label>\n\t\t\t\t<input type="text" data-cp="name">\n\t\t\t\t<label></label>\n\t\t\t\t<button type="submit">Оплатить %amount% р.</button>\n\t\t\t</form>\n\t\t\t<div class="paymentSuccess" style="display: none;">Оплата успешно проведена.</div>\n\t\t\t<div class="paymentFailure" style="display: none;">Оплата отклонена: <span class="paymentFailureMsg"></span></div>\n\t\t</div>\n\t\t<div style="clear: both;"></div>\n\t</div>\n\n</template>';
      }
    ),
    define(
      'application/DOMObserver',
      [
        'application/parent',
        'application/dispatcher',
        'application/session.objects',
      ],
      function (a, b, c) {
        a.addHandler('sendMutations', function (a) {
          if (c.mouseOperators && '{}' !== c.mouseOperators) {
            var d = [],
              e = JSON.parse(c.mouseOperators);
            for (var f in e)
              e.hasOwnProperty(f) && d.push(e[f].jid.extractNode());
            b.fire('cobrowseMessage', {
              action: 'mutations',
              data: a.mutationsList,
              to: d,
            });
          }
        });
      }
    ),
    define('common/extensions/lzw', [], function () {
      return {
        compress: function (a) {
          var b,
            c,
            d,
            e = {},
            f = '',
            g = [],
            h = 256;
          for (b = 0; b < 256; b += 1) e[String.fromCharCode(b)] = b;
          for (b = 0; b < a.length; b += 1)
            ((c = a.charAt(b)),
              (d = f + c),
              e.hasOwnProperty(d)
                ? (f = d)
                : (g.push(e[f]), (e[d] = h++), (f = String(c))));
          return (
            '' !== f && g.push(e[f]),
            (g = String.fromCharCode.apply(String, g))
          );
        },
        decompress: function (a) {
          var b,
            c,
            d,
            e,
            f,
            g = [],
            h = '',
            i = 256,
            j = [];
          for (b = 0, c = a.length; b < c; b++) j.push(a.charCodeAt(b));
          for (b = 0; b < 256; b += 1) g[b] = String.fromCharCode(b);
          for (
            d = String.fromCharCode(j[0]), e = d, b = 1;
            b < j.length;
            b += 1
          ) {
            if (((f = j[b]), g[f])) h = g[f];
            else {
              if (f !== i) return null;
              h = d + d.charAt(0);
            }
            ((e += h), (g[i++] = d + h.charAt(0)), (d = h));
          }
          return e;
        },
      };
    }),
    define(
      'application/cobrowseContent',
      [
        'application/parent',
        'application/dispatcher',
        'common/extensions/lzw',
        'application/session.objects',
      ],
      function (a, b, c, d) {
        var e = function (a) {
          if (!d.disableCobrowse) {
            var c,
              e = JSON.parse(d.mouseOperators),
              f = [];
            if (a.to) f = a.to instanceof Array ? a.to : [a.to];
            else
              for (c in e)
                e.hasOwnProperty(c) &&
                  e[c].html &&
                  f.push(e[c].jid.extractNode());
            var g = {
              html: a.html,
              htmlId: a.htmlId || 'id',
              htmlClass: a.htmlClass || 'class',
              url: a.url,
              windowWidth: a.windowWidth,
              windowHeight: a.windowHeight,
              chatX: d.chatX,
              chatY: d.chatY,
              chatWidth: d.chatWidth || d.currentChatWidth,
              chatHeight: d.chatHeight || d.currentChatHeight,
              chatState: d.chatState,
              focus: d.IsFocused,
            };
            b.fire('cobrowseMessage', { action: 'html', data: g, to: f });
          }
        };
        (b.addEventListener('retrieveHTML', function (b) {
          a.send('retrieveHTML', { to: b.to });
        }),
          b.addEventListener('retrieveURL', function (b) {
            a.send('retrieveURL', { force: !0, to: b.to });
          }),
          a.addHandler('sendHTML', e),
          a.addHandler('sendURL', function (a) {
            var c = JSON.parse(d.mouseOperators || '{}'),
              e = [];
            a.to && (e = [a.to]);
            var f;
            for (f in c)
              c.hasOwnProperty(f) &&
                c[f].html &&
                e.push(c[f].jid.extractNode());
            b.fire('cobrowseMessage', { action: 'url', data: a.url, to: e });
          }),
          setInterval(function () {
            a.send('retrieveURL');
          }, 1e3));
      }
    ),
    define(
      'application/standalone',
      [
        'config/setup',
        'application/dispatcher',
        'config/lang',
        'xmpp/connection',
        'application/timer',
        'xmpp/update',
        'application/session.objects',
        'common/extensions/tabs',
      ],
      function (a, b, c, d, e, f, g, h) {
        b.addEventListener('sessionLoaded', function () {
          a.STANDALONE &&
            ((a.CURRENT_URL = 'standalone'),
            (a.CURRENT_TITLE = c.TITLE_NEW_TAB),
            location.search.indexOf('operator=') > -1 &&
              (g.requiredOperator = location.search
                .split('operator=')[1]
                .split('&')[0]),
            (document.title = c.PAGE_TITLE),
            b.fire('start'),
            b.addEventListener('operator', function () {
              f.state('chat');
            }),
            b.addEventListener('userBack', function () {
              (h.forceElection(), b.fire('refreshHistory'));
            }),
            b.addEventListener('userAway', function () {
              b.fire('disconnect');
            }),
            b.addEventListener('timer_userBack', function () {
              e.start();
            }),
            b.addEventListener('timer_userAway', function () {
              e.stop();
            }),
            b.fire('xmppStart'));
        });
      }
    ),
    define(
      'application/iframe',
      [
        'application/dispatcher',
        'application/parent',
        'application/session.objects',
        'xmpp/update',
        'xmpp/connection',
        'config/setup',
        'common/extensions/mouse',
        'application/timer',
        'common/application/basicActivity',
        'view/chat',
        'common/extensions/tabs',
      ],
      function (a, b, c, d, e, f, g, h, i, j, k) {
        a.addEventListener('sessionLoaded', function () {
          if (!f.STANDALONE) {
            (a.addEventListener('updateChatState', function (a) {
              d.state(a.state);
            }),
              b.addHandler('init', function () {
                b.send('ready');
              }),
              b.addHandler('echo', function () {
                b.send('echo');
              }));
            var j = function (a) {
              if (
                (b.removeHandler('start', j),
                (f.CURRENT_URL = a.url),
                (f.CURRENT_TITLE = a.title),
                (f.CURRENT_PAGE = a.page),
                b.setOrigin(a.url),
                k.forceElection(),
                'object' == typeof a.rhSettings)
              ) {
                window.redhlpSettings || (window.redhlpSettings = {});
                for (it in a.rhSettings)
                  a.rhSettings.hasOwnProperty(it) &&
                    (window.redhlpSettings[it] ||
                      (window.redhlpSettings[it] = a.rhSettings[it]));
              }
              window.redhlpSettings &&
                window.redhlpSettings.activityInterval &&
                i.changeInterval(window.redhlpSettings.activityInterval);
            };
            b.addHandler('start', j);
            var l = !0,
              m = !0;
            (b.addHandler('active', function () {
              ((l = !0),
                i.isActive() || (k.forceElection(), a.fire('global:userBack')));
            }),
              b.addHandler('inactive', function () {
                ((l = !1),
                  i.isActive() ||
                    (a.fire('global:userAway'), a.fire('disconnect')));
              }),
              a.addEventListener('userBack', function () {
                l ||
                  (a.fire('global:userBack'),
                  k.forceElection(),
                  a.fire('refreshHistory'),
                  a.fire('retrieveHTML'));
              }),
              a.addEventListener('userAway', function () {
                l || (a.fire('global:userAway'), a.fire('disconnect'));
              }),
              b.addHandler('timer_active', function () {
                ((m = !0), h.getActivity().isActive() || h.start());
              }),
              b.addHandler('timer_inactive', function () {
                ((m = !1), h.getActivity().isActive() || h.stop());
              }),
              a.addEventListener('timer_userBack', function () {
                m || h.start();
              }),
              a.addEventListener('timer_userAway', function () {
                m || h.stop();
              }),
              b.addHandler('message.invitation', function (b) {
                a.fire('message.new.incoming', b);
              }),
              b.addHandler('reconnect', function () {
                a.fire('reconnect');
              }),
              b.send('ready'),
              g.init().setAsMaster().addParentSlave(b),
              g.setOffsetFunction(function (a) {
                ((a.x = a.x + c.currentChatX),
                  (a.y = a.y + c.currentChatY + 20),
                  (a.width = g.getParentMouseData().width),
                  (a.height = g.getParentMouseData().height),
                  (a.scrollX = g.getParentMouseData().scrollX),
                  (a.scrollY = g.getParentMouseData().scrollY));
              }),
              b.addHandler('state', function (a) {
                a.inviteState
                  ? d.invite(a.chatState, a.inviteState, a.trigger)
                  : d.state(a.chatState);
              }),
              b.addHandler('invitationSniff', function (a) {
                d.inviteSniff(
                  a.trigger,
                  'manual' === a.trigger ? c.currentOperator : ''
                );
              }),
              b.addHandler('chOper', function (a) {
                f.REQUIRE_OPERATOR = a.value;
              }),
              b.addHandler('chatXChanged', function (a) {
                c.chatX = a.x;
              }),
              b.addHandler('chatYChanged', function (a) {
                c.chatY = a.y;
              }),
              b.addHandler('chatWidthChanged', function (a) {
                c.chatWidth !== a.width &&
                  ((c.chatWidth = a.width), (c.currentChatWidth = a.width));
              }),
              b.addHandler('chatHeightChanged', function (a) {
                c.chatHeight !== a.height &&
                  ((c.chatHeight = a.height), (c.currentChatHeight = a.height));
              }),
              b.addHandler('chatStateChanged', function (a) {
                c.chatState = a.chatState;
              }),
              b.addHandler('chatXChanged', function (a) {
                ((c.chatX = a.x), (c.currentChatX = a.x));
              }),
              b.addHandler('chatYChanged', function (a) {
                ((c.chatY = a.y), (c.currentChatY = a.y));
              }),
              b.addHandler('currentChatXChanged', function (a) {
                c.currentChatX = a.x;
              }),
              b.addHandler('currentChatYChanged', function (a) {
                c.currentChatY = a.y;
              }),
              b.addHandler('currentChatWidthChanged', function (a) {
                c.currentChatWidth = a.width;
              }),
              b.addHandler('currentChatHeightChanged', function (a) {
                c.currentChatHeight = a.height;
              }),
              b.addHandler('chatStateChanged', function (a) {
                c.chatState = a.chatState;
              }),
              a.addEventListener('invitation', function (a) {
                b.send('invitation', a);
              }),
              a.addEventListener('authenticated', function () {
                (b.send('authenticated'),
                  c.isOnline || c.offlineEnabled || b.send('hide'));
              }),
              a.addEventListener('changeState', function (a) {
                (a.online && b.send('show'),
                  a.online ||
                    c.offlineEnabled ||
                    c.chatStarted ||
                    b.send('hide'));
              }),
              a.addEventListener('disconnected', function () {
                (b.send('disconnected'), e.reconnect());
              }),
              b.addHandler('reload', function () {
                setTimeout(function () {
                  location.reload();
                }, 3e3);
              }),
              a.addEventListener('message.new', function (a) {
                b.send('message.displayed', a);
              }),
              a.addEventListener('offlineDone', function () {
                b.send('minimize');
              }),
              a.addEventListener('sendExecFunction', function (a) {
                b.send('execFunction', { name: a.name, args: a.args });
              }));
          }
        });
      }
    ),
    define(
      'application/offlinevid',
      [
        'application/dispatcher',
        'application/parent',
        'application/session.objects',
      ],
      function (a, b, c) {
        var d = function () {
            (a.fire('disconnect'),
              a.removeEventListener('authenticated', d),
              a.fire('gotVid'));
          },
          e = !1,
          f = function () {
            e = !0;
          };
        (b.addHandler('getOfflineVid', f),
          a.addEventListener('sessionLoaded', function () {
            (b.removeHandler('getOfflineVid', f),
              a.addEventListener('getOfflineVid', function () {
                c.isPartiallyOnline ||
                  (a.addEventListener('authenticated', d),
                  a.fire('xmppManagerStart'));
              }),
              b.addHandler('getOfflineVid', function () {
                a.fire('getOfflineVid');
              }),
              e && a.fire('getOfflineVid'));
          }));
      }
    ),
    define(
      'application/pageVisibilityTracker',
      ['application/dispatcher', 'jquery', 'application/session.objects'],
      function (a, b, c) {
        function d(a) {
          ((a = a || window.event),
            f(a.type in evtMap ? evtMap[a.type] : !this.hidden));
        }
        try {
          var e = !1;
          ((c.IsFocused = !0), (c.IsChatFocused = !1));
          var f = function (b) {
            if (
              e !== b &&
              ((e = b),
              (c.IsChatFocused = e),
              !c.IsPageFocused || !c.IsChatFocused)
            ) {
              var d = c.IsPageFocused || c.IsChatFocused;
              c.IsFocused !== d && ((c.IsFocused = d), a.fire('focus.changed'));
            }
          };
          ((evtMap = {
            focus: !0,
            focusin: !0,
            pageshow: !0,
            blur: !1,
            focusout: !1,
            pagehide: !1,
          }),
            'onfocusin' in document
              ? (window.onfocusin =
                  window.onfocusout =
                  document.onfocusin =
                  document.onfocusout =
                    d)
              : (b(window).blur(function () {
                  f(!1);
                }),
                b(window).focus(function () {
                  f(!0);
                })));
        } catch (a) {}
      }
    ),
    define('xmpp/strophe.patch', ['common/extensions/strophe'], function () {
      return;
    }),
    requirejs(
      [
        'common/extensions/compatibility',
        'common/extensions/browserDetect',
        'application/dispatcher',
        'application/distribution',
        'view/view',
        'view/chat',
        'application/session.objects',
        'common/extensions/jquery.plugins',
        'config/lang',
        'xmpp/messages',
        'view/cssChecker',
        'xmpp/xmppManager',
        'view/uiEvents',
        'common/extensions/audio',
        'common/extensions/punycode',
        'application/parent',
        'xmpp/connection',
        'common/constants/sender',
        'common/constants/chatWindowStage',
        'application/timer',
        'common/application/basicActivity',
        'common/extensions/debug',
        'config/setup',
        'xmpp/update',
        'common/extensions/mouse',
        'common/communication/messageTarget',
        'xmpp/history.cache',
        'xmpp/offline',
        'common/extensions/tabs',
        'config/settings',
        'config/api',
        'application/redhelper',
        'common/communication/encoder',
        'text!common/../../container/template.html',
        'text!common/../../container/template-modern.html',
        'text!common/../../container/template-material.html',
        'common/extensions/guid',
        'application/DOMObserver',
        'application/cobrowseContent',
        'application/standalone',
        'application/iframe',
        'common/constants/chatState',
        'application/offlinevid',
        'application/pageVisibilityTracker',
        'common/extensions/base64',
        'xmpp/strophe.patch',
        'xmpp/queue',
        'xmpp/desktopCommands',
      ],
      function (
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V
      ) {
        function W() {
          try {
            if (!g.currentOperator || !g.operDisplayName)
              return void setTimeout(W, 100);
            if (!g.firstMessage) return;
            f.showFirstMessage({
              sender: r.OPERATOR,
              time: '',
              text: g.free
                ? i.DEFAULT_FIRST_MESSAGE
                : g.currentFirstMessage || g.firstMessage,
              displayName: g.operDisplayName,
            });
          } catch (a) {}
        }
        var X = !1;
        'Explorer' === b.browser &&
          setInterval(function () {
            (localStorage.setItem('StupidIE', new Date().getTime()),
              sessionStorage.setItem('StupidIE', new Date().getTime()));
          }, 50);
        window.$ = window.jQuery = h;
        var Y = function (a) {
            var b = g.onlineOperators;
            try {
              b = JSON.parse(b);
            } catch (a) {}
            if (!g.isOnline && b.length)
              for (var c = b.length, d = 0; d < c; d++)
                if (
                  ('offline' !== b[d].status && (g.isPartiallyOnline = !0),
                  'offline' !== b[d].status &&
                    b[d].name.match(
                      new RegExp('^' + g.currentOperator + '$', 'i')
                    ))
                ) {
                  ((g.isOnline = !0), a && p.send('show'));
                  break;
                }
          },
          Z = function () {
            function a(a) {
              for (
                var b = a.substr(1).split('&'), c = {}, d = 0;
                d < b.length;
                d++
              ) {
                var e = b[d].split('=');
                c[e[0]] = e[1];
              }
              return c;
            }
            (c.removeEventListener('start', Z),
              i.initLanguage(),
              c.addEventListener('sendResize', function (a) {
                p.send('setMinSize', { width: a.width, height: a.height });
              }),
              c.addEventListener('message.send', function (a) {
                p.send('message.send', a);
              }),
              c.addEventListener('message.received', function (a) {
                p.send('message.received', a);
              }),
              c.addEventListener('rateOperator', function (a) {
                p.send('rateOperator', a);
              }),
              c.addEventListener('offlineSuccess', function (a) {
                p.send('offline.messageSent', a);
              }));
            var b = function () {
              g.isOnline || c.fire('refreshOperator');
            };
            if (
              (c.addEventListener('message.new', b),
              c.addEventListener('invitation', b),
              c.addEventListener('cssLoaded', function () {
                f.scrollBottom();
              }),
              c.addEventListener('historyShown', function () {
                f.scrollBottom();
              }),
              k.check(),
              g.isOnline || g.offlineEnabled || p.send('hide'),
              E.innerCSS &&
                ((E.innerCSS = E.innerCSS.replace('http:', location.protocol)),
                h("<link rel='stylesheet' href='" + E.innerCSS + "'>").appendTo(
                  'head'
                )),
              E.additionalJS)
            )
              for (var d = E.additionalJS.length - 1; d > -1; d--)
                ((E.additionalJS[d] = E.additionalJS[d].replace(
                  'http:',
                  location.protocol
                )),
                  h.getScript(E.additionalJS[d]));
            if (
              (p.addHandler('scrollMessages', function () {
                f.scrollBottom();
              }),
              p.addHandler('templateReceived', function (a) {
                c.fire('templateReceived', a);
              }),
              w.STANDALONE)
            ) {
              if (
                ((g.skin = window.redhlpSettings.skin || g.skin),
                ~location.href.indexOf('&tpl=') &&
                  ~location.href.indexOf('&standalone'))
              ) {
                var j = decodeURIComponent(
                  location.href.split('&tpl=')[1].split('&')[0]
                );
                ((h.support.cors = !0),
                  h.ajax({
                    url: j,
                    dataType: 'html',
                    success: function (a) {
                      c.fire('templateReceived', {
                        template: a,
                        isDefault: !1,
                      });
                    },
                  }));
              } else
                c.fire('templateReceived', {
                  template:
                    'modern' == g.skin ? I : 'material' == g.skin ? J : H,
                  isDefault: !0,
                });
              var l = a(location.search);
              ((g.customFields = decodeURIComponent(l.customFields)),
                (g.referrer = decodeURIComponent(l.referrer)),
                (w.CURRENT_URL = decodeURIComponent(l.currentUrl)),
                (w.CURRENT_TITLE = decodeURIComponent(l.currentTitle)),
                (g.visits = +l.visits),
                (g.viewedPages = +l.viewedPages),
                l.vid && (g.vid = +l.vid));
            }
            (p.send('templateRequest'),
              E.waitForTemplate(function () {
                if (
                  (e.show(),
                  'material' == g.skin &&
                    g.isOnline &&
                    (h('#faceImgWrapper').removeClass('fade'),
                    h('#online').addClass('progress').addClass('loading'),
                    p.send('hideCopy'),
                    h('#chatTextarea').prop('disabled', !0)),
                  f.setOutput('#chatItself'),
                  c.addEventListener('message.history', function (a) {
                    f.append(a);
                  }),
                  c.addEventListener('message.new', function (a) {
                    f.append(a);
                  }),
                  E.commands)
                )
                  for (var a = E.commands.length, b = 0; b < a; b++)
                    h(E.commands[b].applyTo)[E.commands[b].method].apply(
                      h(E.commands[b].applyTo),
                      E.commands[b].arguments
                    );
                (c.fire('message.getHistory'),
                  i.initLanguage(),
                  m.bind(),
                  f.scrollBottom(),
                  c.fire('ready'));
              }));
          };
        (c.addEventListener('xmppConnecting', function () {
          if (
            (c.fire('showLabel', { text: i.OPERATOR_CONNECTING, loading: !0 }),
            !i.OPERATOR_CONNECTING)
          ) {
            var a = !0,
              b = function () {
                if (a && i.OPERATOR_CONNECTING)
                  return void c.fire('showLabel', {
                    text: i.OPERATOR_CONNECTING,
                    loading: !0,
                  });
                a && setTimeout(b, 100);
              };
            setTimeout(b, 100);
          }
          var d = function () {
            (f.hideLabel(), c.removeEventListener('operator', d));
          };
          c.addEventListener('operator', d);
        }),
          c.addEventListener('showXmppConnection', function () {
            if (
              (c.fire('showLabel', {
                text: i.OPERATOR_CONNECTING,
                loading: !0,
              }),
              !i.OPERATOR_CONNECTING)
            ) {
              var a = !0,
                b = function () {
                  if (a && i.OPERATOR_CONNECTING)
                    return void c.fire('showLabel', {
                      text: i.OPERATOR_CONNECTING,
                      loading: !0,
                    });
                  a && setTimeout(b, 100);
                };
              setTimeout(b, 100);
            }
            var d = function () {
              (f.hideLabel(), c.removeEventListener('operator', d));
            };
            c.addEventListener('operator', d);
          }),
          c.addEventListener('start', Z),
          p.addHandler('invitation-history.shown', function (a) {
            ((g.invitation.text = a.text),
              (g.invitation.shown = !0),
              (g.invitation.shownTime = +new Date()));
            var b = JSON.parse(g.invitationHistory);
            (b.push({ id: a.id, text: a.text, kind: a.kind, time: a.time }),
              (g.invitationHistory = JSON.stringify(b)),
              V.sendToAll('invitationShown', {
                id: a.id,
                text: a.text,
                kind: a.kind,
                time: a.time,
              }));
          }),
          p.addHandler('invitation-history.accepted', function (a) {
            for (
              var b = a.id,
                c = JSON.parse(g.invitationHistory),
                d = c.length - 1;
              d >= 0;
              d--
            )
              if (c[d].id === b) {
                ((c[d].accepted = !0),
                  (g.invitationHistory = JSON.stringify(c)));
                break;
              }
            V.sendToAll('invitationAccepted', a.id);
          }),
          p.addHandler('invitation-history.declined', function (a) {
            for (
              var b = a.id,
                c = JSON.parse(g.invitationHistory),
                d = c.length - 1;
              d >= 0;
              d--
            )
              if (c[d].id === b) {
                ((c[d].accepted = !1),
                  (g.invitationHistory = JSON.stringify(c)));
                break;
              }
            V.sendToAll('invitationDeclined', a.id);
          }),
          p.addHandler('invitation.shown', function (a) {
            ((g.invitation.text = a.text),
              (g.invitation.shown = !0),
              (g.invitation.shownTime = +new Date()));
          }),
          p.addHandler('invitation.id', function (a) {
            g.invitation.id = a.id;
          }),
          p.addHandler('invitation.accepted', function () {
            ((g.invitation.accepted = !0),
              (g.invitation.reactionTime = +Date.now()));
          }),
          p.addHandler('invitation.declined', function () {
            ((g.invitation.accepted = !1),
              (g.invitation.reactionTime = +Date.now()));
          }),
          p.addHandler('closeChat', function () {
            c.fire('closeChat');
          }),
          c.addEventListener('operator.show', function () {
            h('#chatItself .invitation').length || W();
          }),
          c.addEventListener('operator', function () {
            if ((Y(!0), 'material' == g.skin && g.isOnline)) {
              var a = h('#online');
              (!(function b() {
                a.hasClass('waiting-operator')
                  ? setTimeout(b, 50)
                  : a.removeClass('loading').removeClass('progress');
              })(),
                h('#chatTextarea').prop('disabled', !1),
                setTimeout(function () {
                  p.send('showCopy');
                }, 0));
            }
            (c.fire('operator.show'), p.send('operator'));
          }),
          p.addHandler('page.focus', function (a) {
            if (
              ((g.IsPageFocused = a.focused),
              !g.IsPageFocused || !g.IsChatFocused)
            ) {
              var b = g.IsPageFocused || g.IsChatFocused;
              g.IsFocused !== b && ((g.IsFocused = b), c.fire('focus.send'));
            }
          }),
          p.addHandler('focus.force', function (a) {
            ((g.IsPageFocused = a.focused),
              (g.IsFocused = !0),
              c.fire('focus.send'));
          }));
        var $ = 0;
        (c.addEventListener('focus.send', function () {
          var a = function () {
            if (g.mouseOperators) {
              var a,
                b = [],
                d = JSON.parse(g.mouseOperators);
              for (a in d)
                d.hasOwnProperty(a) &&
                  d[a].html &&
                  b.push(d[a].jid.extractNode());
              c.fire('cobrowseMessage', {
                action: 'focus',
                data: { focused: g.IsFocused },
                to: b,
              });
            }
          };
          (clearTimeout($), ($ = setTimeout(a, 300)));
        }),
          g.dispatcher.addEventListener(
            'onCurrentTypedTextChanged',
            function () {
              j.typedTextChanged();
            }
          ),
          c.addEventListener('xmppStart', function () {
            if (
              (c.addEventListener('message.new', function () {
                u.update();
              }),
              c.addEventListener('authenticated', function () {
                (e.show(), v.timeEnd('Connection'));
              }),
              c.addEventListener('connected', function () {
                f.scrollBottom();
              }),
              c.addEventListener('highlight', function (a) {
                a.url === w.CURRENT_URL || o.decodeUri(a.url) === w.CURRENT_URL
                  ? (n.play(),
                    p.send('highlight', a),
                    c.fire('cobrowseMessage', {
                      action: 'confirm',
                      target: 'highlight',
                    }))
                  : ((g.cachedEvent = JSON.stringify(a)),
                    c.fire('redirect', {
                      type: 'redirect',
                      link: a.url,
                      noFeedback: !0,
                    }));
              }),
              c.addEventListener('redirect', function (a) {
                g.hideRedHelper
                  ? c.fire('redirectOK', a)
                  : (n.play(), f.showRedirectPrompt(a.link, a.noFeedback));
              }),
              c.addEventListener('redirectCancel', function (a) {
                ((g.cachedEvent = ''),
                  c.fire('cobrowseMessage', {
                    action: 'reject',
                    target: 'redirect',
                  }));
              }),
              c.addEventListener('redirectOK', function (a) {
                var b = function (d) {
                  ('confirm' === d.action &&
                    'redirect' === d.target &&
                    p.send('redirect', a),
                    c.removeEventListener('cobrowseMessageSent', b));
                };
                (c.addEventListener('cobrowseMessageSent', b),
                  c.fire('cobrowseMessage', {
                    action: 'confirm',
                    target: 'redirect',
                    data: { url: a.link },
                  }));
              }),
              g.cachedEvent)
            ) {
              var a = JSON.parse(g.cachedEvent);
              ((g.cachedEvent = ''),
                Array.isArray(a)
                  ? h.each(a, function (a, b) {
                      ((b.isCached = !0), c.fire(b));
                    })
                  : ((a.isCached = !0), c.fire(a)));
            }
            c.removeAllEventListeners('xmppStart');
          }),
          g.onLoad(function () {
            function a() {
              g.currentOperator &&
                (X
                  ? c.fire('operator.show')
                  : c.addEventListener('ready', function () {
                      c.fire('operator.show');
                    }));
            }
            var b = function () {
              (d.initializeChatWindowStage(),
                v.time('Connection'),
                Y(!0),
                p.addHandler('urlChanged', function (a) {
                  ((w.CURRENT_TITLE = a.title),
                    (w.CURRENT_URL = a.url),
                    c.fire('urlChanged'));
                }),
                p.addHandler('clearUser', function () {
                  c.fire('message.clearHistory', function () {
                    g.clear(!0);
                  });
                }),
                p.addHandler('hideOldMessages', function () {
                  c.fire('message.clearHistory');
                }),
                p.addHandler('refreshOperator', function () {
                  (c.fire('refreshOperator'), c.fire('hideDepartments'));
                }),
                u.start(),
                c.fire('sessionLoaded'),
                n.init(g.audioEnabled),
                n.soundCheck() || p.send('hideSoundButton'),
                c.addEventListener('message.received', function () {
                  n.play();
                }),
                p.addHandler('soundOn', function () {
                  ((g.audioEnabled = !0),
                    n.turnOn(),
                    'material' == g.skin &&
                      h('.rh-sound').removeClass('rh-soundOff'));
                }),
                p.addHandler('soundOff', function () {
                  ((g.audioEnabled = !1),
                    n.turnOff(),
                    'material' == g.skin &&
                      h('.rh-sound').addClass('rh-soundOff'));
                }),
                'material' == g.skin &&
                  (p.addHandler('iconHover', function (a) {
                    h('.rh-' + a.type)
                      .toggleClass('hover')
                      .removeClass('active');
                  }),
                  p.addHandler('iconActive', function (a) {
                    h('.rh-' + a.type).toggleClass('active');
                  }),
                  g.isOnline || p.send('showCopy')),
                c.fire('start'));
            };
            if (w.STANDALONE) {
              var e = w.PARENT_URI;
              (-1 != location.search.indexOf('page=') &&
                ((e = location.search.split('page=').pop().split('&').shift()),
                (e = decodeURIComponent(e))),
                (g.chatState = P.WINDOW));
              var f = location.protocol + '//';
              ((f +=
                'development' === location.host
                  ? 'development'
                  : 0 === location.host.indexOf('test')
                    ? 'test.nx.redhelper.ru'
                    : 'nx.redhelper.ru'),
                (f +=
                  '/nx/presence/' +
                  w.CLIENT_NAME +
                  '?page=' +
                  encodeURIComponent(e)),
                g.vid > 0 && (f += '&vid=' + encodeURIComponent(g.vid)),
                h.ajax({
                  dataType: 'jsonp',
                  async: !0,
                  url: f,
                  success: function (a) {
                    for (var c in a)
                      if (a.hasOwnProperty(c)) {
                        if ('extra' === c) continue;
                        if (
                          ((a[c] = JSON.parse(
                            h('<div></div>').text(JSON.stringify(a[c])).html()
                          )),
                          'true' === a[c] && (a[c] = !0),
                          'false' === a[c] && (a[c] = !1),
                          'operators' !== c)
                        )
                          'offlineMode' === c
                            ? (g.offlineEnabled =
                                'yes' === a[c] || 'limited' === a.clientType)
                            : 'clientType' === c
                              ? (g.free = !(
                                  'limited' !== a[c] ||
                                  (a.openApi &&
                                    parseInt(a.openApi, 10) &&
                                    'false' !== a.openApi)
                                ))
                              : 'vid' === c ||
                                ('status' !== c && (g[c] = a[c]));
                        else if (a.operators.length)
                          for (var d = a.operators.length, e = 0; e < d; e++)
                            ((('online' === a.operators[e].status &&
                              (void 0 === a.operators[e].onPage ||
                                a.operators[e].onPage)) ||
                              ('offline' !== a.operators[e].status &&
                                a.operators[e].name.match(
                                  new RegExp('^' + g.currentOperator + '$', 'i')
                                ))) &&
                              (!g.realDepartment ||
                                (a.operators[e].departments &&
                                  a.operators[e].departments.indexOf(
                                    g.realDepartment
                                  ) > -1)) &&
                              (g.isOnline = !0),
                              'offline' === a.operators[e].status ||
                                (void 0 !== a.operators[e].onPage &&
                                  !a.operators[e].onPage) ||
                                (g.isPartiallyOnline = !0));
                      }
                    if (a.extra) {
                      var f;
                      for (f in a.extra)
                        if (a.extra.hasOwnProperty(f))
                          try {
                            ((a.extra[f] = h('<div></div>')
                              .text(a.extra[f])
                              .html()),
                              (g[f] = a.extra[f]));
                          } catch (a) {}
                      g.extraAuth = G.serialize(a.extra);
                    }
                    if ('string' == typeof a.operators)
                      try {
                        a.operators = G.parse(a.operators);
                      } catch (a) {}
                    ((g.onlineOperators = a.operators || []), h(b));
                  },
                }));
            } else h(b);
            (c.addEventListener('ready', function () {
              X = !0;
            }),
              C.active(function () {
                g.isOnline || g.isPartiallyOnline
                  ? l.start()
                  : (c.fire('changeState'),
                    c.removeAllEventListeners('refreshOperator'),
                    c.addEventListener('refreshOperator', function () {
                      C.actualize();
                    }));
              }),
              C.inactive(function () {
                (l.stop(), a());
              }),
              g.dispatcher.addEventListener(
                'onCurrentOperatorChanged',
                function (b) {
                  a();
                }
              ));
            var j = function () {};
            (C.election(function () {
              if (
                (l.stop(),
                c.fire('hideLabel'),
                c.fire('showLabel', {
                  text: i.OPERATOR_CONNECTING,
                  loading: !0,
                }),
                (j = function () {
                  c.fire('hideLabel');
                }),
                c.addEventListener('showLabel', function () {
                  j = function () {};
                }),
                !i.OPERATOR_CONNECTING)
              ) {
                var a = !0,
                  b = function () {
                    if (a && i.OPERATOR_CONNECTING)
                      return void c.fire('showLabel', {
                        text: i.OPERATOR_CONNECTING,
                        loading: !0,
                      });
                    a && setTimeout(b, 100);
                  };
                setTimeout(b, 100);
              }
            }),
              C.electionEnd(function () {
                (C.isLeader() || l.flushQueue(), j());
              }),
              C.forceElection());
          }),
          (window.onbeforeunload = function (a) {
            try {
              if (!g.mouseOperators) return;
              var b,
                c = [],
                d = JSON.parse(g.mouseOperators);
              for (b in d) d.hasOwnProperty(b) && d[b].html && c.push(d[b].jid);
              window.can_leave = !1;
              var e = {
                  chunked: !0,
                  id: new Date().getTime(),
                  compressed: !1,
                  utf8: !1,
                  index: 0,
                  body: JSON.stringify({
                    action: 'unload',
                    data: { unloaded: !0 },
                  }),
                  chunks: 1,
                },
                f = JSON.stringify(e);
              f = S.encodeOld(f);
              for (var b in c) {
                var h = $msg({
                  to: c,
                  jid: g.vid.toVisitorJid(),
                  type: 'chat',
                  unload: 'unload',
                  content: 'cobrowse',
                })
                  .c('body')
                  .t(f)
                  .up();
                (q._connection.send(h), q._connection.flush());
              }
            } catch (a) {}
          }));
      }
    ),
    define('application/main', function () {}));
  var rhLocal = {
    define: define,
    require: require,
    requirejs: requirejs,
    protocol: rhGlobal.protocol || 'http:',
    host: rhGlobal.host || 'web.redhelper.ru',
    name: rhLocalName,
  };
  try {
    var tag = document.getElementById('rhlpscrtg'),
      src = tag ? tag.src : location.href;
    rhLocal.protocol = src.split('//')[0] || 'http:';
    var host;
    ((host =
      src.split('?')[0].indexOf('/development/') > -1
        ? 'development'
        : src.indexOf('/dev/') > -1
          ? 'dev'
          : src.indexOf('/test.web.redhelper.ru/') > -1
            ? 'test.web.redhelper.ru'
            : 'web.redhelper.ru'),
      (rhLocal.host = host));
  } catch (a) {
    ((rhLocal.host = 'web.redhelper.ru'), (rhLocal.protocol = 'https:'));
  }
  ((window[rhLocal.name] = rhLocal),
    require.config({
      waitSeconds: 200,
      paths: {
        jquery:
          rhLocal.protocol + '//' + rhLocal.host + '/vendor/jquery-new.min',
      },
      map: {
        '*': { jquery: 'jquery-private' },
        'jquery-private': { jquery: 'jquery' },
      },
    }),
    define('../../../build/requirejs-production-config', function () {}));
  for (var i = 0; i < rhGlobal.modules.length; i++) {
    var m = rhGlobal.modules[i];
    define(m.a, m.b, m.c);
  }
})();
