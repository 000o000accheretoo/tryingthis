!function(n) {
    "use strict";
    function r(n, r, t) {
        return t.a = n,
        t.f = r,
        t
    }
    function t(n) {
        return r(2, n, (function(r) {
            return function(t) {
                return n(r, t)
            }
        }
        ))
    }
    function e(n) {
        return r(3, n, (function(r) {
            return function(t) {
                return function(e) {
                    return n(r, t, e)
                }
            }
        }
        ))
    }
    function u(n) {
        return r(4, n, (function(r) {
            return function(t) {
                return function(e) {
                    return function(u) {
                        return n(r, t, e, u)
                    }
                }
            }
        }
        ))
    }
    function i(n) {
        return r(5, n, (function(r) {
            return function(t) {
                return function(e) {
                    return function(u) {
                        return function(i) {
                            return n(r, t, e, u, i)
                        }
                    }
                }
            }
        }
        ))
    }
    function o(n) {
        return r(6, n, (function(r) {
            return function(t) {
                return function(e) {
                    return function(u) {
                        return function(i) {
                            return function(o) {
                                return n(r, t, e, u, i, o)
                            }
                        }
                    }
                }
            }
        }
        ))
    }
    function f(n) {
        return r(7, n, (function(r) {
            return function(t) {
                return function(e) {
                    return function(u) {
                        return function(i) {
                            return function(o) {
                                return function(f) {
                                    return n(r, t, e, u, i, o, f)
                                }
                            }
                        }
                    }
                }
            }
        }
        ))
    }
    function a(n) {
        return r(8, n, (function(r) {
            return function(t) {
                return function(e) {
                    return function(u) {
                        return function(i) {
                            return function(o) {
                                return function(f) {
                                    return function(a) {
                                        return n(r, t, e, u, i, o, f, a)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ))
    }
    function c(n) {
        return r(9, n, (function(r) {
            return function(t) {
                return function(e) {
                    return function(u) {
                        return function(i) {
                            return function(o) {
                                return function(f) {
                                    return function(a) {
                                        return function(c) {
                                            return n(r, t, e, u, i, o, f, a, c)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ))
    }
    function v(n, r, t) {
        return 2 === n.a ? n.f(r, t) : n(r)(t)
    }
    function s(n, r, t, e) {
        return 3 === n.a ? n.f(r, t, e) : n(r)(t)(e)
    }
    function b(n, r, t, e, u) {
        return 4 === n.a ? n.f(r, t, e, u) : n(r)(t)(e)(u)
    }
    function l(n, r, t, e, u, i) {
        return 5 === n.a ? n.f(r, t, e, u, i) : n(r)(t)(e)(u)(i)
    }
    function d(n, r, t, e, u, i, o) {
        return 6 === n.a ? n.f(r, t, e, u, i, o) : n(r)(t)(e)(u)(i)(o)
    }
    function h(n, r) {
        for (var t, e = [], u = g(n, r, 0, e); u && (t = e.pop()); u = g(t.a, t.b, 0, e))
            ;
        return u
    }
    function g(n, r, t, e) {
        if (n === r)
            return !0;
        if ("object" != typeof n || null === n || null === r)
            return "function" == typeof n && D(5),
            !1;
        if (t > 100)
            return e.push(w(n, r)),
            !0;
        for (var u in n.$ < 0 && (n = Pr(n),
        r = Pr(r)),
        n)
            if (!g(n[u], r[u], t + 1, e))
                return !1;
        return !0
    }
    t(h),
    t((function(n, r) {
        return !h(n, r)
    }
    ));
    function $(n, r, t) {
        if ("object" != typeof n)
            return n === r ? 0 : n < r ? -1 : 1;
        if (void 0 === n.$)
            return (t = $(n.a, r.a)) || (t = $(n.b, r.b)) ? t : $(n.c, r.c);
        for (; n.b && r.b && !(t = $(n.a, r.a)); n = n.b,
        r = r.b)
            ;
        return t || (n.b ? 1 : r.b ? -1 : 0)
    }
    t((function(n, r) {
        return $(n, r) < 0
    }
    )),
    t((function(n, r) {
        return $(n, r) < 1
    }
    )),
    t((function(n, r) {
        return $(n, r) > 0
    }
    )),
    t((function(n, r) {
        return $(n, r) >= 0
    }
    ));
    var p = t((function(n, r) {
        var t = $(n, r);
        return t < 0 ? Lr : t ? xr : Tr
    }
    ))
      , m = 0;
    function w(n, r) {
        return {
            a: n,
            b: r
        }
    }
    function y(n, r, t) {
        return {
            a: n,
            b: r,
            c: t
        }
    }
    function A(n, r) {
        var t = {};
        for (var e in n)
            t[e] = n[e];
        for (var e in r)
            t[e] = r[e];
        return t
    }
    t(j);
    function j(n, r) {
        if ("string" == typeof n)
            return n + r;
        if (!n.b)
            return r;
        var t = N(n.a, r);
        n = n.b;
        for (var e = t; n.b; n = n.b)
            e = e.b = N(n.a, r);
        return t
    }
    var E = {
        $: 0
    };
    function N(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }
    var k = t(N);
    function _(n) {
        for (var r = E, t = n.length; t--; )
            r = N(n[t], r);
        return r
    }
    function C(n) {
        for (var r = []; n.b; n = n.b)
            r.push(n.a);
        return r
    }
    var O = e((function(n, r, t) {
        for (var e = []; r.b && t.b; r = r.b,
        t = t.b)
            e.push(v(n, r.a, t.a));
        return _(e)
    }
    ));
    u((function(n, r, t, e) {
        for (var u = []; r.b && t.b && e.b; r = r.b,
        t = t.b,
        e = e.b)
            u.push(s(n, r.a, t.a, e.a));
        return _(u)
    }
    )),
    i((function(n, r, t, e, u) {
        for (var i = []; r.b && t.b && e.b && u.b; r = r.b,
        t = t.b,
        e = e.b,
        u = u.b)
            i.push(b(n, r.a, t.a, e.a, u.a));
        return _(i)
    }
    )),
    o((function(n, r, t, e, u, i) {
        for (var o = []; r.b && t.b && e.b && u.b && i.b; r = r.b,
        t = t.b,
        e = e.b,
        u = u.b,
        i = i.b)
            o.push(l(n, r.a, t.a, e.a, u.a, i.a));
        return _(o)
    }
    )),
    t((function(n, r) {
        return _(C(r).sort((function(r, t) {
            return $(n(r), n(t))
        }
        )))
    }
    )),
    t((function(n, r) {
        return _(C(r).sort((function(r, t) {
            var e = v(n, r, t);
            return e === Tr ? 0 : e === Lr ? -1 : 1
        }
        )))
    }
    ));
    var M = e((function(n, r, t) {
        for (var e = new Array(n), u = 0; u < n; u++)
            e[u] = t(r + u);
        return e
    }
    ))
      , T = t((function(n, r) {
        for (var t = new Array(n), e = 0; e < n && r.b; e++)
            t[e] = r.a,
            r = r.b;
        return t.length = e,
        w(t, r)
    }
    ))
      , x = t((function(n, r) {
        return r[n]
    }
    ))
      , L = (e((function(n, r, t) {
        for (var e = t.length, u = new Array(e), i = 0; i < e; i++)
            u[i] = t[i];
        return u[n] = r,
        u
    }
    )),
    t((function(n, r) {
        for (var t = r.length, e = new Array(t + 1), u = 0; u < t; u++)
            e[u] = r[u];
        return e[t] = n,
        e
    }
    )),
    e((function(n, r, t) {
        for (var e = t.length, u = 0; u < e; u++)
            r = v(n, t[u], r);
        return r
    }
    )),
    e((function(n, r, t) {
        for (var e = t.length - 1; e >= 0; e--)
            r = v(n, t[e], r);
        return r
    }
    )));
    t((function(n, r) {
        for (var t = r.length, e = new Array(t), u = 0; u < t; u++)
            e[u] = n(r[u]);
        return e
    }
    )),
    e((function(n, r, t) {
        for (var e = t.length, u = new Array(e), i = 0; i < e; i++)
            u[i] = v(n, r + i, t[i]);
        return u
    }
    )),
    e((function(n, r, t) {
        return t.slice(n, r)
    }
    )),
    e((function(n, r, t) {
        var e = r.length
          , u = n - e;
        u > t.length && (u = t.length);
        for (var i = new Array(e + u), o = 0; o < e; o++)
            i[o] = r[o];
        for (o = 0; o < u; o++)
            i[o + e] = t[o];
        return i
    }
    )),
    t((function(n, r) {
        return r
    }
    )),
    t((function(n, r) {
        return console.log(n + ": <internals>"),
        r
    }
    ));
    function D(n) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + n + ".md")
    }
    t((function(n, r) {
        return n + r
    }
    )),
    t((function(n, r) {
        return n - r
    }
    )),
    t((function(n, r) {
        return n * r
    }
    )),
    t((function(n, r) {
        return n / r
    }
    )),
    t((function(n, r) {
        return n / r | 0
    }
    )),
    t(Math.pow),
    t((function(n, r) {
        return r % n
    }
    )),
    t((function(n, r) {
        var t = r % n;
        return 0 === n ? D(11) : t > 0 && n < 0 || t < 0 && n > 0 ? t + n : t
    }
    )),
    Math.PI,
    Math.E,
    Math.cos,
    Math.sin,
    Math.tan,
    Math.acos,
    Math.asin,
    Math.atan,
    t(Math.atan2);
    var J = Math.ceil
      , P = Math.floor
      , F = (Math.round,
    Math.sqrt,
    Math.log);
    isNaN;
    t((function(n, r) {
        return n && r
    }
    )),
    t((function(n, r) {
        return n || r
    }
    )),
    t((function(n, r) {
        return n !== r
    }
    )),
    t((function(n, r) {
        return n + r
    }
    ));
    t((function(n, r) {
        return n + r
    }
    ));
    t((function(n, r) {
        for (var t = r.length, e = new Array(t), u = 0; u < t; ) {
            var i = r.charCodeAt(u);
            55296 <= i && i <= 56319 ? (e[u] = n(r[u] + r[u + 1]),
            u += 2) : (e[u] = n(r[u]),
            u++)
        }
        return e.join("")
    }
    )),
    t((function(n, r) {
        for (var t = [], e = r.length, u = 0; u < e; ) {
            var i = r[u]
              , o = r.charCodeAt(u);
            u++,
            55296 <= o && o <= 56319 && (i += r[u],
            u++),
            n(i) && t.push(i)
        }
        return t.join("")
    }
    ));
    e((function(n, r, t) {
        for (var e = t.length, u = 0; u < e; ) {
            var i = t[u]
              , o = t.charCodeAt(u);
            u++,
            55296 <= o && o <= 56319 && (i += t[u],
            u++),
            r = v(n, i, r)
        }
        return r
    }
    )),
    e((function(n, r, t) {
        for (var e = t.length; e--; ) {
            var u = t[e]
              , i = t.charCodeAt(e);
            56320 <= i && i <= 57343 && (u = t[--e] + u),
            r = v(n, u, r)
        }
        return r
    }
    ));
    var S = t((function(n, r) {
        return r.split(n)
    }
    ))
      , B = t((function(n, r) {
        return r.join(n)
    }
    ))
      , q = e((function(n, r, t) {
        return t.slice(n, r)
    }
    ));
    t((function(n, r) {
        for (var t = r.length; t--; ) {
            var e = r[t]
              , u = r.charCodeAt(t);
            if (56320 <= u && u <= 57343 && (e = r[--t] + e),
            n(e))
                return !0
        }
        return !1
    }
    ));
    var I = t((function(n, r) {
        for (var t = r.length; t--; ) {
            var e = r[t]
              , u = r.charCodeAt(t);
            if (56320 <= u && u <= 57343 && (e = r[--t] + e),
            !n(e))
                return !1
        }
        return !0
    }
    ))
      , W = t((function(n, r) {
        return r.indexOf(n) > -1
    }
    ))
      , z = (t((function(n, r) {
        return 0 === r.indexOf(n)
    }
    )),
    t((function(n, r) {
        return r.length >= n.length && r.lastIndexOf(n) === r.length - n.length
    }
    )),
    t((function(n, r) {
        var t = n.length;
        if (t < 1)
            return E;
        for (var e = 0, u = []; (e = r.indexOf(n, e)) > -1; )
            u.push(e),
            e += t;
        return _(u)
    }
    )));
    function H(n) {
        return n + ""
    }
    function R(n) {
        return {
            $: 2,
            b: n
        }
    }
    var G = R((function(n) {
        return "number" != typeof n ? tn("an INT", n) : -2147483647 < n && n < 2147483647 && (0 | n) === n ? Wr(n) : !isFinite(n) || n % 1 ? tn("an INT", n) : Wr(n)
    }
    ));
    R((function(n) {
        return "boolean" == typeof n ? Wr(n) : tn("a BOOL", n)
    }
    )),
    R((function(n) {
        return "number" == typeof n ? Wr(n) : tn("a FLOAT", n)
    }
    )),
    R((function(n) {
        return Wr(n)
    }
    )),
    R((function(n) {
        return "string" == typeof n ? Wr(n) : n instanceof String ? Wr(n + "") : tn("a STRING", n)
    }
    ));
    var Q = t((function(n, r) {
        return {
            $: 6,
            d: n,
            b: r
        }
    }
    ));
    t((function(n, r) {
        return {
            $: 7,
            e: n,
            b: r
        }
    }
    ));
    function Y(n, r) {
        return {
            $: 9,
            f: n,
            g: r
        }
    }
    t((function(n, r) {
        return {
            $: 10,
            b: r,
            h: n
        }
    }
    ));
    var X = t((function(n, r) {
        return Y(n, [r])
    }
    ))
      , U = e((function(n, r, t) {
        return Y(n, [r, t])
    }
    ))
      , V = (u((function(n, r, t, e) {
        return Y(n, [r, t, e])
    }
    )),
    i((function(n, r, t, e, u) {
        return Y(n, [r, t, e, u])
    }
    )),
    o((function(n, r, t, e, u, i) {
        return Y(n, [r, t, e, u, i])
    }
    )),
    f((function(n, r, t, e, u, i, o) {
        return Y(n, [r, t, e, u, i, o])
    }
    )),
    a((function(n, r, t, e, u, i, o, f) {
        return Y(n, [r, t, e, u, i, o, f])
    }
    )),
    c((function(n, r, t, e, u, i, o, f, a) {
        return Y(n, [r, t, e, u, i, o, f, a])
    }
    )),
    t((function(n, r) {
        try {
            return K(n, JSON.parse(r))
        } catch (n) {
            return Sr(v(Br, "This is not valid JSON! " + n.message, r))
        }
    }
    )),
    t((function(n, r) {
        return K(n, r)
    }
    )));
    function K(n, r) {
        switch (n.$) {
        case 2:
            return n.b(r);
        case 5:
            return null === r ? Wr(n.c) : tn("null", r);
        case 3:
            return nn(r) ? Z(n.b, r, _) : tn("a LIST", r);
        case 4:
            return nn(r) ? Z(n.b, r, rn) : tn("an ARRAY", r);
        case 6:
            var t = n.d;
            if ("object" != typeof r || null === r || !(t in r))
                return tn("an OBJECT with a field named `" + t + "`", r);
            var e = K(n.b, r[t]);
            return xt(e) ? e : Sr(v(qr, t, e.a));
        case 7:
            var u = n.e;
            if (!nn(r))
                return tn("an ARRAY", r);
            if (u >= r.length)
                return tn("a LONGER array. Need index " + u + " but only see " + r.length + " entries", r);
            e = K(n.b, r[u]);
            return xt(e) ? e : Sr(v(Ir, u, e.a));
        case 8:
            if ("object" != typeof r || null === r || nn(r))
                return tn("an OBJECT", r);
            var i = E;
            for (var o in r)
                if (r.hasOwnProperty(o)) {
                    e = K(n.b, r[o]);
                    if (!xt(e))
                        return Sr(v(qr, o, e.a));
                    i = N(w(o, e.a), i)
                }
            return Wr(ct(i));
        case 9:
            for (var f = n.f, a = n.g, c = 0; c < a.length; c++) {
                e = K(a[c], r);
                if (!xt(e))
                    return e;
                f = f(e.a)
            }
            return Wr(f);
        case 10:
            e = K(n.b, r);
            return xt(e) ? K(n.h(e.a), r) : e;
        case 11:
            for (var s = E, b = n.g; b.b; b = b.b) {
                e = K(b.a, r);
                if (xt(e))
                    return e;
                s = N(e.a, s)
            }
            return Sr(zr(ct(s)));
        case 1:
            return Sr(v(Br, n.a, r));
        case 0:
            return Wr(n.a)
        }
    }
    function Z(n, r, t) {
        for (var e = r.length, u = new Array(e), i = 0; i < e; i++) {
            var o = K(n, r[i]);
            if (!xt(o))
                return Sr(v(Ir, i, o.a));
            u[i] = o.a
        }
        return Wr(t(u))
    }
    function nn(n) {
        return Array.isArray(n) || "undefined" != typeof FileList && n instanceof FileList
    }
    function rn(n) {
        return v(Tt, n.length, (function(r) {
            return n[r]
        }
        ))
    }
    function tn(n, r) {
        return Sr(v(Br, "Expecting " + n, r))
    }
    function en(n, r) {
        if (n === r)
            return !0;
        if (n.$ !== r.$)
            return !1;
        switch (n.$) {
        case 0:
        case 1:
            return n.a === r.a;
        case 2:
            return n.b === r.b;
        case 5:
            return n.c === r.c;
        case 3:
        case 4:
        case 8:
            return en(n.b, r.b);
        case 6:
            return n.d === r.d && en(n.b, r.b);
        case 7:
            return n.e === r.e && en(n.b, r.b);
        case 9:
            return n.f === r.f && un(n.g, r.g);
        case 10:
            return n.h === r.h && en(n.b, r.b);
        case 11:
            return un(n.g, r.g)
        }
    }
    function un(n, r) {
        var t = n.length;
        if (t !== r.length)
            return !1;
        for (var e = 0; e < t; e++)
            if (!en(n[e], r[e]))
                return !1;
        return !0
    }
    var on = t((function(n, r) {
        return JSON.stringify(r, null, n) + ""
    }
    ));
    function fn(n) {
        return n
    }
    e((function(n, r, t) {
        return t[n] = r,
        t
    }
    ));
    function an(n) {
        return {
            $: 0,
            a: n
        }
    }
    function cn(n) {
        return {
            $: 2,
            b: n,
            c: null
        }
    }
    var vn = t((function(n, r) {
        return {
            $: 3,
            b: n,
            d: r
        }
    }
    ));
    t((function(n, r) {
        return {
            $: 4,
            b: n,
            d: r
        }
    }
    ));
    var sn = 0;
    function bn(n) {
        var r = {
            $: 0,
            e: sn++,
            f: n,
            g: null,
            h: []
        };
        return pn(r),
        r
    }
    function ln(n) {
        return cn((function(r) {
            r(an(bn(n)))
        }
        ))
    }
    function dn(n, r) {
        n.h.push(r),
        pn(n)
    }
    var hn = t((function(n, r) {
        return cn((function(t) {
            dn(n, r),
            t(an(m))
        }
        ))
    }
    ));
    var gn = !1
      , $n = [];
    function pn(n) {
        if ($n.push(n),
        !gn) {
            for (gn = !0; n = $n.shift(); )
                mn(n);
            gn = !1
        }
    }
    function mn(n) {
        for (; n.f; ) {
            var r = n.f.$;
            if (0 === r || 1 === r) {
                for (; n.g && n.g.$ !== r; )
                    n.g = n.g.i;
                if (!n.g)
                    return;
                n.f = n.g.b(n.f.a),
                n.g = n.g.i
            } else {
                if (2 === r)
                    return void (n.f.c = n.f.b((function(r) {
                        n.f = r,
                        pn(n)
                    }
                    )));
                if (5 === r) {
                    if (0 === n.h.length)
                        return;
                    n.f = n.f.b(n.h.shift())
                } else
                    n.g = {
                        $: 3 === r ? 0 : 1,
                        b: n.f.b,
                        i: n.g
                    },
                    n.f = n.f.d
            }
        }
    }
    u((function(n, r, t, e) {
        return wn(r, e, n.aG, n.aO, n.aM, (function() {
            return function() {}
        }
        ))
    }
    ));
    function wn(n, r, t, e, u, i) {
        var o = v(V, n, r ? r.flags : void 0);
        xt(o) || D(2);
        var f = {}
          , a = t(o.a)
          , c = a.a
          , s = i(l, c)
          , b = function(n, r) {
            var t;
            for (var e in yn) {
                var u = yn[e];
                u.a && ((t = t || {})[e] = u.a(e, r)),
                n[e] = jn(u, r)
            }
            return t
        }(f, l);
        function l(n, r) {
            var t = v(e, n, c);
            s(c = t.a, r),
            Mn(f, t.b, u(c))
        }
        return Mn(f, a.b, u(c)),
        b ? {
            ports: b
        } : {}
    }
    var yn = {};
    function An(n, r, t, e, u) {
        return {
            b: n,
            c: r,
            d: t,
            e: e,
            f: u
        }
    }
    function jn(n, r) {
        var t = {
            g: r,
            h: void 0
        }
          , e = n.c
          , u = n.d
          , i = n.e
          , o = n.f;
        return t.h = bn(v(vn, (function n(r) {
            return v(vn, n, {
                $: 5,
                b: function(n) {
                    var f = n.a;
                    return 0 === n.$ ? s(u, t, f, r) : i && o ? b(e, t, f.i, f.j, r) : s(e, t, i ? f.i : f.j, r)
                }
            })
        }
        ), n.b))
    }
    var En = t((function(n, r) {
        return cn((function(t) {
            n.g(r),
            t(an(m))
        }
        ))
    }
    ))
      , Nn = t((function(n, r) {
        return v(hn, n.h, {
            $: 0,
            a: r
        })
    }
    ));
    function kn(n) {
        return function(r) {
            return {
                $: 1,
                k: n,
                l: r
            }
        }
    }
    function _n(n) {
        return {
            $: 2,
            m: n
        }
    }
    t((function(n, r) {
        return {
            $: 3,
            n: n,
            o: r
        }
    }
    ));
    var Cn = []
      , On = !1;
    function Mn(n, r, t) {
        if (Cn.push({
            p: n,
            q: r,
            r: t
        }),
        !On) {
            On = !0;
            for (var e; e = Cn.shift(); )
                Tn(e.p, e.q, e.r);
            On = !1
        }
    }
    function Tn(n, r, t) {
        var e = {};
        for (var u in xn(!0, r, e, null),
        xn(!1, t, e, null),
        n)
            dn(n[u], {
                $: "fx",
                a: e[u] || {
                    i: E,
                    j: E
                }
            })
    }
    function xn(n, r, t, e) {
        switch (r.$) {
        case 1:
            var u = r.k
              , i = function(n, r, t, e) {
                function u(n) {
                    for (var r = t; r; r = r.t)
                        n = r.s(n);
                    return n
                }
                var i = n ? yn[r].e : yn[r].f;
                return v(i, u, e)
            }(n, u, e, r.l);
            return void (t[u] = function(n, r, t) {
                return t = t || {
                    i: E,
                    j: E
                },
                n ? t.i = N(r, t.i) : t.j = N(r, t.j),
                t
            }(n, i, t[u]));
        case 2:
            for (var o = r.m; o.b; o = o.b)
                xn(n, o.a, t, e);
            return;
        case 3:
            return void xn(n, r.o, t, {
                s: r.n,
                t: e
            })
        }
    }
    t((function(n, r) {
        return r
    }
    ));
    var Ln;
    t((function(n, r) {
        return function(t) {
            return n(r(t))
        }
    }
    ));
    function Dn(n, r) {
        for (var t in r)
            t in n ? "init" == t ? D(6) : Dn(n[t], r[t]) : n[t] = r[t]
    }
    var Jn = "undefined" != typeof document ? document : {};
    function Pn(n, r) {
        n.appendChild(r)
    }
    u((function(n, r, t, e) {
        var u = e.node;
        return u.parentNode.replaceChild(Xn(n, (function() {}
        )), u),
        {}
    }
    ));
    function Fn(n) {
        return {
            $: 0,
            a: n
        }
    }
    var Sn = t((function(n, r) {
        return t((function(t, e) {
            for (var u = [], i = 0; e.b; e = e.b) {
                var o = e.a;
                i += o.b || 0,
                u.push(o)
            }
            return i += u.length,
            {
                $: 1,
                c: r,
                d: Qn(t),
                e: u,
                f: n,
                b: i
            }
        }
        ))
    }
    ))(void 0);
    t((function(n, r) {
        return t((function(t, e) {
            for (var u = [], i = 0; e.b; e = e.b) {
                var o = e.a;
                i += o.b.b || 0,
                u.push(o)
            }
            return i += u.length,
            {
                $: 2,
                c: r,
                d: Qn(t),
                e: u,
                f: n,
                b: i
            }
        }
        ))
    }
    ))(void 0);
    t((function(n, r) {
        return {
            $: 4,
            j: n,
            k: r,
            b: 1 + (r.b || 0)
        }
    }
    ));
    function Bn(n, r) {
        return {
            $: 5,
            l: n,
            m: r,
            k: void 0
        }
    }
    t((function(n, r) {
        return Bn([n, r], (function() {
            return n(r)
        }
        ))
    }
    )),
    e((function(n, r, t) {
        return Bn([n, r, t], (function() {
            return v(n, r, t)
        }
        ))
    }
    )),
    u((function(n, r, t, e) {
        return Bn([n, r, t, e], (function() {
            return s(n, r, t, e)
        }
        ))
    }
    )),
    i((function(n, r, t, e, u) {
        return Bn([n, r, t, e, u], (function() {
            return b(n, r, t, e, u)
        }
        ))
    }
    )),
    o((function(n, r, t, e, u, i) {
        return Bn([n, r, t, e, u, i], (function() {
            return l(n, r, t, e, u, i)
        }
        ))
    }
    )),
    f((function(n, r, t, e, u, i, o) {
        return Bn([n, r, t, e, u, i, o], (function() {
            return d(n, r, t, e, u, i, o)
        }
        ))
    }
    )),
    a((function(n, r, t, e, u, i, o, f) {
        return Bn([n, r, t, e, u, i, o, f], (function() {
            return function(n, r, t, e, u, i, o, f) {
                return 7 === n.a ? n.f(r, t, e, u, i, o, f) : n(r)(t)(e)(u)(i)(o)(f)
            }(n, r, t, e, u, i, o, f)
        }
        ))
    }
    )),
    c((function(n, r, t, e, u, i, o, f, a) {
        return Bn([n, r, t, e, u, i, o, f, a], (function() {
            return function(n, r, t, e, u, i, o, f, a) {
                return 8 === n.a ? n.f(r, t, e, u, i, o, f, a) : n(r)(t)(e)(u)(i)(o)(f)(a)
            }(n, r, t, e, u, i, o, f, a)
        }
        ))
    }
    ));
    var qn = t((function(n, r) {
        return {
            $: "a0",
            n: n,
            o: r
        }
    }
    ))
      , In = t((function(n, r) {
        return {
            $: "a1",
            n: n,
            o: r
        }
    }
    ))
      , Wn = t((function(n, r) {
        return {
            $: "a2",
            n: n,
            o: r
        }
    }
    ))
      , zn = t((function(n, r) {
        return {
            $: "a3",
            n: n,
            o: r
        }
    }
    ));
    e((function(n, r, t) {
        return {
            $: "a4",
            n: r,
            o: {
                f: n,
                o: t
            }
        }
    }
    ));
    t((function(n, r) {
        return "a0" === r.$ ? v(qn, r.n, function(n, r) {
            var t = Pt(r);
            return {
                $: r.$,
                a: t ? s(Dt, t < 3 ? Rn : Gn, Jt(n), r.a) : v(Lt, n, r.a)
            }
        }(n, r.o)) : r
    }
    ));
    var Hn, Rn = t((function(n, r) {
        return w(n(r.a), r.b)
    }
    )), Gn = t((function(n, r) {
        return {
            r: n(r.r),
            X: r.X,
            T: r.T
        }
    }
    ));
    function Qn(n) {
        for (var r = {}; n.b; n = n.b) {
            var t = n.a
              , e = t.$
              , u = t.n
              , i = t.o;
            if ("a2" !== e) {
                var o = r[e] || (r[e] = {});
                "a3" === e && "class" === u ? Yn(o, u, i) : o[u] = i
            } else
                "className" === u ? Yn(r, u, i) : r[u] = i
        }
        return r
    }
    function Yn(n, r, t) {
        var e = n[r];
        n[r] = e ? e + " " + t : t
    }
    function Xn(n, r) {
        var t = n.$;
        if (5 === t)
            return Xn(n.k || (n.k = n.m()), r);
        if (0 === t)
            return Jn.createTextNode(n.a);
        if (4 === t) {
            for (var e = n.k, u = n.j; 4 === e.$; )
                "object" != typeof u ? u = [u, e.j] : u.push(e.j),
                e = e.k;
            var i = {
                j: u,
                p: r
            };
            return (o = Xn(e, i)).elm_event_node_ref = i,
            o
        }
        if (3 === t)
            return Un(o = n.h(n.g), r, n.d),
            o;
        var o = n.f ? Jn.createElementNS(n.f, n.c) : Jn.createElement(n.c);
        Ln && "a" == n.c && o.addEventListener("click", Ln(o)),
        Un(o, r, n.d);
        for (var f = n.e, a = 0; a < f.length; a++)
            Pn(o, Xn(1 === t ? f[a] : f[a].b, r));
        return o
    }
    function Un(n, r, t) {
        for (var e in t) {
            var u = t[e];
            "a1" === e ? Vn(n, u) : "a0" === e ? nr(n, r, u) : "a3" === e ? Kn(n, u) : "a4" === e ? Zn(n, u) : ("value" !== e && "checked" !== e || n[e] !== u) && (n[e] = u)
        }
    }
    function Vn(n, r) {
        var t = n.style;
        for (var e in r)
            t[e] = r[e]
    }
    function Kn(n, r) {
        for (var t in r) {
            var e = r[t];
            void 0 !== e ? n.setAttribute(t, e) : n.removeAttribute(t)
        }
    }
    function Zn(n, r) {
        for (var t in r) {
            var e = r[t]
              , u = e.f
              , i = e.o;
            void 0 !== i ? n.setAttributeNS(u, t, i) : n.removeAttributeNS(u, t)
        }
    }
    function nr(n, r, t) {
        var e = n.elmFs || (n.elmFs = {});
        for (var u in t) {
            var i = t[u]
              , o = e[u];
            if (i) {
                if (o) {
                    if (o.q.$ === i.$) {
                        o.q = i;
                        continue
                    }
                    n.removeEventListener(u, o)
                }
                o = rr(r, i),
                n.addEventListener(u, o, Hn && {
                    passive: Pt(i) < 2
                }),
                e[u] = o
            } else
                n.removeEventListener(u, o),
                e[u] = void 0
        }
    }
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function() {
                Hn = !0
            }
        }))
    } catch (n) {}
    function rr(n, r) {
        function t(r) {
            var e = t.q
              , u = K(e.a, r);
            if (xt(u)) {
                for (var i, o = Pt(e), f = u.a, a = o ? o < 3 ? f.a : f.r : f, c = 1 == o ? f.b : 3 == o && f.X, v = (c && r.stopPropagation(),
                (2 == o ? f.b : 3 == o && f.T) && r.preventDefault(),
                n); i = v.j; ) {
                    if ("function" == typeof i)
                        a = i(a);
                    else
                        for (var s = i.length; s--; )
                            a = i[s](a);
                    v = v.p
                }
                v(a, c)
            }
        }
        return t.q = r,
        t
    }
    function tr(n, r) {
        return n.$ == r.$ && en(n.a, r.a)
    }
    function er(n, r) {
        var t = [];
        return ir(n, r, t, 0),
        t
    }
    function ur(n, r, t, e) {
        var u = {
            $: r,
            r: t,
            s: e,
            t: void 0,
            u: void 0
        };
        return n.push(u),
        u
    }
    function ir(n, r, t, e) {
        if (n !== r) {
            var u = n.$
              , i = r.$;
            if (u !== i) {
                if (1 !== u || 2 !== i)
                    return void ur(t, 0, e, r);
                r = function(n) {
                    for (var r = n.e, t = r.length, e = new Array(t), u = 0; u < t; u++)
                        e[u] = r[u].b;
                    return {
                        $: 1,
                        c: n.c,
                        d: n.d,
                        e: e,
                        f: n.f,
                        b: n.b
                    }
                }(r),
                i = 1
            }
            switch (i) {
            case 5:
                for (var o = n.l, f = r.l, a = o.length, c = a === f.length; c && a--; )
                    c = o[a] === f[a];
                if (c)
                    return void (r.k = n.k);
                r.k = r.m();
                var v = [];
                return ir(n.k, r.k, v, 0),
                void (v.length > 0 && ur(t, 1, e, v));
            case 4:
                for (var s = n.j, b = r.j, l = !1, d = n.k; 4 === d.$; )
                    l = !0,
                    "object" != typeof s ? s = [s, d.j] : s.push(d.j),
                    d = d.k;
                for (var h = r.k; 4 === h.$; )
                    l = !0,
                    "object" != typeof b ? b = [b, h.j] : b.push(h.j),
                    h = h.k;
                return l && s.length !== b.length ? void ur(t, 0, e, r) : ((l ? function(n, r) {
                    for (var t = 0; t < n.length; t++)
                        if (n[t] !== r[t])
                            return !1;
                    return !0
                }(s, b) : s === b) || ur(t, 2, e, b),
                void ir(d, h, t, e + 1));
            case 0:
                return void (n.a !== r.a && ur(t, 3, e, r.a));
            case 1:
                return void or(n, r, t, e, ar);
            case 2:
                return void or(n, r, t, e, cr);
            case 3:
                if (n.h !== r.h)
                    return void ur(t, 0, e, r);
                var g = fr(n.d, r.d);
                g && ur(t, 4, e, g);
                var $ = r.i(n.g, r.g);
                return void ($ && ur(t, 5, e, $))
            }
        }
    }
    function or(n, r, t, e, u) {
        if (n.c === r.c && n.f === r.f) {
            var i = fr(n.d, r.d);
            i && ur(t, 4, e, i),
            u(n, r, t, e)
        } else
            ur(t, 0, e, r)
    }
    function fr(n, r, t) {
        var e;
        for (var u in n)
            if ("a1" !== u && "a0" !== u && "a3" !== u && "a4" !== u)
                if (u in r) {
                    var i = n[u]
                      , o = r[u];
                    i === o && "value" !== u && "checked" !== u || "a0" === t && tr(i, o) || ((e = e || {})[u] = o)
                } else
                    (e = e || {})[u] = t ? "a1" === t ? "" : "a0" === t || "a3" === t ? void 0 : {
                        f: n[u].f,
                        o: void 0
                    } : "string" == typeof n[u] ? "" : null;
            else {
                var f = fr(n[u], r[u] || {}, u);
                f && ((e = e || {})[u] = f)
            }
        for (var a in r)
            a in n || ((e = e || {})[a] = r[a]);
        return e
    }
    function ar(n, r, t, e) {
        var u = n.e
          , i = r.e
          , o = u.length
          , f = i.length;
        o > f ? ur(t, 6, e, {
            v: f,
            i: o - f
        }) : o < f && ur(t, 7, e, {
            v: o,
            e: i
        });
        for (var a = o < f ? o : f, c = 0; c < a; c++) {
            var v = u[c];
            ir(v, i[c], t, ++e),
            e += v.b || 0
        }
    }
    function cr(n, r, t, e) {
        for (var u = [], i = {}, o = [], f = n.e, a = r.e, c = f.length, v = a.length, s = 0, b = 0, l = e; s < c && b < v; ) {
            var d = f[s]
              , h = a[b]
              , g = d.a
              , $ = h.a
              , p = d.b
              , m = h.b
              , w = void 0
              , y = void 0;
            if (g !== $) {
                var A = f[s + 1]
                  , j = a[b + 1];
                if (A) {
                    var E = A.a
                      , N = A.b;
                    y = $ === E
                }
                if (j) {
                    var k = j.a
                      , _ = j.b;
                    w = g === k
                }
                if (w && y)
                    ir(p, _, u, ++l),
                    sr(i, u, g, m, b, o),
                    l += p.b || 0,
                    br(i, u, g, N, ++l),
                    l += N.b || 0,
                    s += 2,
                    b += 2;
                else if (w)
                    l++,
                    sr(i, u, $, m, b, o),
                    ir(p, _, u, l),
                    l += p.b || 0,
                    s += 1,
                    b += 2;
                else if (y)
                    br(i, u, g, p, ++l),
                    l += p.b || 0,
                    ir(N, m, u, ++l),
                    l += N.b || 0,
                    s += 2,
                    b += 1;
                else {
                    if (!A || E !== k)
                        break;
                    br(i, u, g, p, ++l),
                    sr(i, u, $, m, b, o),
                    l += p.b || 0,
                    ir(N, _, u, ++l),
                    l += N.b || 0,
                    s += 2,
                    b += 2
                }
            } else
                ir(p, m, u, ++l),
                l += p.b || 0,
                s++,
                b++
        }
        for (; s < c; ) {
            l++;
            p = (d = f[s]).b;
            br(i, u, d.a, p, l),
            l += p.b || 0,
            s++
        }
        for (; b < v; ) {
            var C = C || [];
            sr(i, u, (h = a[b]).a, h.b, void 0, C),
            b++
        }
        (u.length > 0 || o.length > 0 || C) && ur(t, 8, e, {
            w: u,
            x: o,
            y: C
        })
    }
    var vr = "_elmW6BL";
    function sr(n, r, t, e, u, i) {
        var o = n[t];
        if (!o)
            return o = {
                c: 0,
                z: e,
                r: u,
                s: void 0
            },
            i.push({
                r: u,
                A: o
            }),
            void (n[t] = o);
        if (1 === o.c) {
            i.push({
                r: u,
                A: o
            }),
            o.c = 2;
            var f = [];
            return ir(o.z, e, f, o.r),
            o.r = u,
            void (o.s.s = {
                w: f,
                A: o
            })
        }
        sr(n, r, t + vr, e, u, i)
    }
    function br(n, r, t, e, u) {
        var i = n[t];
        if (i) {
            if (0 === i.c) {
                i.c = 2;
                var o = [];
                return ir(e, i.z, o, u),
                void ur(r, 9, u, {
                    w: o,
                    A: i
                })
            }
            br(n, r, t + vr, e, u)
        } else {
            var f = ur(r, 9, u, void 0);
            n[t] = {
                c: 1,
                z: e,
                r: u,
                s: f
            }
        }
    }
    function lr(n, r, t, e) {
        dr(n, r, t, 0, 0, r.b, e)
    }
    function dr(n, r, t, e, u, i, o) {
        for (var f = t[e], a = f.r; a === u; ) {
            var c = f.$;
            if (1 === c)
                lr(n, r.k, f.s, o);
            else if (8 === c) {
                f.t = n,
                f.u = o,
                (v = f.s.w).length > 0 && dr(n, r, v, 0, u, i, o)
            } else if (9 === c) {
                f.t = n,
                f.u = o;
                var v, s = f.s;
                if (s)
                    s.A.s = n,
                    (v = s.w).length > 0 && dr(n, r, v, 0, u, i, o)
            } else
                f.t = n,
                f.u = o;
            if (!(f = t[++e]) || (a = f.r) > i)
                return e
        }
        var b = r.$;
        if (4 === b) {
            for (var l = r.k; 4 === l.$; )
                l = l.k;
            return dr(n, l, t, e, u + 1, i, n.elm_event_node_ref)
        }
        for (var d = r.e, h = n.childNodes, g = 0; g < d.length; g++) {
            u++;
            var $ = 1 === b ? d[g] : d[g].b
              , p = u + ($.b || 0);
            if (u <= a && a <= p && (!(f = t[e = dr(h[g], $, t, e, u, p, o)]) || (a = f.r) > i))
                return e;
            u = p
        }
        return e
    }
    function hr(n, r, t, e) {
        return 0 === t.length ? n : (lr(n, r, t, e),
        gr(n, t))
    }
    function gr(n, r) {
        for (var t = 0; t < r.length; t++) {
            var e = r[t]
              , u = e.t
              , i = $r(u, e);
            u === n && (n = i)
        }
        return n
    }
    function $r(n, r) {
        switch (r.$) {
        case 0:
            return function(n, r, t) {
                var e = n.parentNode
                  , u = Xn(r, t);
                u.elm_event_node_ref || (u.elm_event_node_ref = n.elm_event_node_ref);
                e && u !== n && e.replaceChild(u, n);
                return u
            }(n, r.s, r.u);
        case 4:
            return Un(n, r.u, r.s),
            n;
        case 3:
            return n.replaceData(0, n.length, r.s),
            n;
        case 1:
            return gr(n, r.s);
        case 2:
            return n.elm_event_node_ref ? n.elm_event_node_ref.j = r.s : n.elm_event_node_ref = {
                j: r.s,
                p: r.u
            },
            n;
        case 6:
            for (var t = r.s, e = 0; e < t.i; e++)
                n.removeChild(n.childNodes[t.v]);
            return n;
        case 7:
            for (var u = (t = r.s).e, i = (e = t.v,
            n.childNodes[e]); e < u.length; e++)
                n.insertBefore(Xn(u[e], r.u), i);
            return n;
        case 9:
            if (!(t = r.s))
                return n.parentNode.removeChild(n),
                n;
            var o = t.A;
            return void 0 !== o.r && n.parentNode.removeChild(n),
            o.s = gr(n, t.w),
            n;
        case 8:
            return function(n, r) {
                var t = r.s
                  , e = function(n, r) {
                    if (!n)
                        return;
                    for (var t = Jn.createDocumentFragment(), e = 0; e < n.length; e++) {
                        var u = n[e].A;
                        Pn(t, 2 === u.c ? u.s : Xn(u.z, r.u))
                    }
                    return t
                }(t.y, r);
                n = gr(n, t.w);
                for (var u = t.x, i = 0; i < u.length; i++) {
                    var o = u[i]
                      , f = o.A
                      , a = 2 === f.c ? f.s : Xn(f.z, r.u);
                    n.insertBefore(a, n.childNodes[o.r])
                }
                e && Pn(n, e);
                return n
            }(n, r);
        case 5:
            return r.s(n);
        default:
            D(10)
        }
    }
    function pr(n) {
        if (3 === n.nodeType)
            return Fn(n.textContent);
        if (1 !== n.nodeType)
            return Fn("");
        for (var r = E, t = n.attributes, e = t.length; e--; ) {
            var u = t[e]
              , i = u.name
              , o = u.value;
            r = N(v(zn, i, o), r)
        }
        var f = n.tagName.toLowerCase()
          , a = E
          , c = n.childNodes;
        for (e = c.length; e--; )
            a = N(pr(c[e]), a);
        return s(Sn, f, r, a)
    }
    var mr = u((function(n, r, t, e) {
        return wn(r, e, n.aG, n.aO, n.aM, (function(r, t) {
            var u = n.aP
              , i = e.node
              , o = pr(i);
            return yr(t, (function(n) {
                var t = u(n)
                  , e = er(o, t);
                i = hr(i, o, e, r),
                o = t
            }
            ))
        }
        ))
    }
    ))
      , wr = (u((function(n, r, t, e) {
        return wn(r, e, n.aG, n.aO, n.aM, (function(r, t) {
            var e = n.U && n.U(r)
              , u = n.aP
              , i = Jn.title
              , o = Jn.body
              , f = pr(o);
            return yr(t, (function(n) {
                Ln = e;
                var t = u(n)
                  , a = Sn("body")(E)(t.ay)
                  , c = er(f, a);
                o = hr(o, f, c, r),
                f = a,
                Ln = 0,
                i !== t.aN && (Jn.title = i = t.aN)
            }
            ))
        }
        ))
    }
    )),
    "undefined" != typeof cancelAnimationFrame && cancelAnimationFrame,
    "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(n) {
        return setTimeout(n, 1e3 / 60)
    }
    );
    function yr(n, r) {
        r(n);
        var t = 0;
        function e() {
            t = 1 === t ? 0 : (wr(e),
            r(n),
            1)
        }
        return function(u, i) {
            n = u,
            i ? (r(n),
            2 === t && (t = 1)) : (0 === t && wr(e),
            t = 2)
        }
    }
    t((function(n, r) {
        return v(de, Vt, cn((function() {
            r && history.go(r),
            n()
        }
        )))
    }
    )),
    t((function(n, r) {
        return v(de, Vt, cn((function() {
            history.pushState({}, "", r),
            n()
        }
        )))
    }
    )),
    t((function(n, r) {
        return v(de, Vt, cn((function() {
            history.replaceState({}, "", r),
            n()
        }
        )))
    }
    ));
    var Ar = {
        addEventListener: function() {},
        removeEventListener: function() {}
    }
      , jr = "undefined" != typeof document ? document : Ar
      , Er = "undefined" != typeof window ? window : Ar
      , Nr = e((function(n, r, t) {
        return ln(cn((function(e) {
            function u(n) {
                bn(t(n))
            }
            return n.addEventListener(r, u, Hn && {
                passive: !0
            }),
            function() {
                n.removeEventListener(r, u)
            }
        }
        )))
    }
    ))
      , kr = t((function(n, r) {
        var t = K(n, r);
        return xt(t) ? Hr(t.a) : Rr
    }
    ));
    function _r(n, r) {
        return cn((function(t) {
            wr((function() {
                var e = document.getElementById(n);
                t(e ? an(r(e)) : {
                    $: 1,
                    a: St(n)
                })
            }
            ))
        }
        ))
    }
    function Cr(n) {
        return cn((function(r) {
            wr((function() {
                r(an(n()))
            }
            ))
        }
        ))
    }
    t((function(n, r) {
        return _r(r, (function(r) {
            return r[n](),
            m
        }
        ))
    }
    ));
    function Or() {
        var n = jr.body
          , r = jr.documentElement;
        return {
            aQ: Math.max(n.scrollWidth, n.offsetWidth, r.scrollWidth, r.offsetWidth, r.clientWidth),
            aD: Math.max(n.scrollHeight, n.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight)
        }
    }
    t((function(n, r) {
        return Cr((function() {
            return Er.scroll(n, r),
            m
        }
        ))
    }
    ));
    e((function(n, r, t) {
        return _r(n, (function(n) {
            return n.scrollLeft = r,
            n.scrollTop = t,
            m
        }
        ))
    }
    ));
    var Mr = t((function(n, r) {
        return cn((function(t) {
            var e = setInterval((function() {
                bn(r)
            }
            ), n);
            return function() {
                clearInterval(e)
            }
        }
        ))
    }
    ));
    t((function(n, r) {
        return n & r
    }
    )),
    t((function(n, r) {
        return n | r
    }
    )),
    t((function(n, r) {
        return n ^ r
    }
    ));
    t((function(n, r) {
        return r << n
    }
    )),
    t((function(n, r) {
        return r >> n
    }
    )),
    t((function(n, r) {
        return r >>> n
    }
    ));
    var Tr = 1
      , xr = 2
      , Lr = 0
      , Dr = k
      , Jr = e((function(n, r, t) {
        for (; ; ) {
            if (-2 === t.$)
                return r;
            var e = t.b
              , u = t.c
              , i = t.d
              , o = t.e
              , f = n
              , a = s(n, e, u, s(Jr, n, r, o));
            n = f,
            r = a,
            t = i
        }
    }
    ))
      , Pr = function(n) {
        return s(Jr, e((function(n, r, t) {
            return v(Dr, w(n, r), t)
        }
        )), E, n)
    }
      , Fr = L
      , Sr = (e((function(n, r, e) {
        var u = e.c
          , i = e.d
          , o = t((function(r, t) {
            if (r.$) {
                var e = r.a;
                return s(Fr, n, t, e)
            }
            var u = r.a;
            return s(Fr, o, t, u)
        }
        ));
        return s(Fr, o, s(Fr, n, r, i), u)
    }
    )),
    function(n) {
        return {
            $: 1,
            a: n
        }
    }
    )
      , Br = t((function(n, r) {
        return {
            $: 3,
            a: n,
            b: r
        }
    }
    ))
      , qr = t((function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }
    ))
      , Ir = t((function(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }
    ))
      , Wr = function(n) {
        return {
            $: 0,
            a: n
        }
    }
      , zr = function(n) {
        return {
            $: 2,
            a: n
        }
    }
      , Hr = function(n) {
        return {
            $: 0,
            a: n
        }
    }
      , Rr = {
        $: 1
    }
      , Gr = I
      , Qr = on
      , Yr = H
      , Xr = t((function(n, r) {
        return v(B, n, C(r))
    }
    ))
      , Ur = t((function(n, r) {
        return _(v(S, n, r))
    }
    ))
      , Vr = function(n) {
        return v(Xr, "\n    ", v(Ur, "\n", n))
    }
      , Kr = e((function(n, r, t) {
        for (; ; ) {
            if (!t.b)
                return r;
            var e = t.a
              , u = t.b
              , i = n
              , o = v(n, e, r);
            n = i,
            r = o,
            t = u
        }
    }
    ))
      , Zr = function(n) {
        return s(Kr, t((function(n, r) {
            return r + 1
        }
        )), 0, n)
    }
      , nt = O
      , rt = e((function(n, r, t) {
        for (; ; ) {
            if (!($(n, r) < 1))
                return t;
            var e = n
              , u = r - 1
              , i = v(Dr, r, t);
            n = e,
            r = u,
            t = i
        }
    }
    ))
      , tt = t((function(n, r) {
        return s(rt, n, r, E)
    }
    ))
      , et = t((function(n, r) {
        return s(nt, n, v(tt, 0, Zr(r) - 1), r)
    }
    ))
      , ut = function(n) {
        var r = n.charCodeAt(0);
        return 55296 <= r && r <= 56319 ? 1024 * (r - 55296) + n.charCodeAt(1) - 56320 + 65536 : r
    }
      , it = function(n) {
        var r = ut(n);
        return 97 <= r && r <= 122
    }
      , ot = function(n) {
        var r = ut(n);
        return r <= 90 && 65 <= r
    }
      , ft = function(n) {
        return it(n) || ot(n)
    }
      , at = function(n) {
        return it(n) || ot(n) || function(n) {
            var r = ut(n);
            return r <= 57 && 48 <= r
        }(n)
    }
      , ct = function(n) {
        return s(Kr, Dr, E, n)
    }
      , vt = function(n) {
        var r = n.charCodeAt(0);
        return isNaN(r) ? Rr : Hr(55296 <= r && r <= 56319 ? w(n[0] + n[1], n.slice(2)) : w(n[0], n.slice(1)))
    }
      , st = t((function(n, r) {
        return "\n\n(" + Yr(n + 1) + ") " + Vr(bt(r))
    }
    ))
      , bt = function(n) {
        return v(lt, n, E)
    }
      , lt = t((function(n, r) {
        n: for (; ; )
            switch (n.$) {
            case 0:
                var t = n.a
                  , e = n.b
                  , u = function() {
                    var n = vt(t);
                    if (1 === n.$)
                        return !1;
                    var r = n.a
                      , e = r.a
                      , u = r.b;
                    return ft(e) && v(Gr, at, u)
                }()
                  , i = e
                  , o = v(Dr, u ? "." + t : "['" + t + "']", r);
                n = i,
                r = o;
                continue n;
            case 1:
                var f = n.a
                  , a = (e = n.b,
                "[" + Yr(f) + "]");
                i = e,
                o = v(Dr, a, r);
                n = i,
                r = o;
                continue n;
            case 2:
                var c = n.a;
                if (c.b) {
                    if (c.b.b) {
                        var s = (r.b ? "The Json.Decode.oneOf at json" + v(Xr, "", ct(r)) : "Json.Decode.oneOf") + " failed in the following " + Yr(Zr(c)) + " ways:";
                        return v(Xr, "\n\n", v(Dr, s, v(et, st, c)))
                    }
                    n = i = e = c.a,
                    r = o = r;
                    continue n
                }
                return "Ran into a Json.Decode.oneOf with no possibilities" + (r.b ? " at json" + v(Xr, "", ct(r)) : "!");
            default:
                var b = n.a
                  , l = n.b;
                return (s = r.b ? "Problem with the value at json" + v(Xr, "", ct(r)) + ":\n\n    " : "Problem with the given value:\n\n") + (Vr(v(Qr, 4, l)) + "\n\n") + b
            }
    }
    ))
      , dt = 32
      , ht = u((function(n, r, t, e) {
        return {
            $: 0,
            a: n,
            b: r,
            c: t,
            d: e
        }
    }
    ))
      , gt = []
      , $t = J
      , pt = t((function(n, r) {
        return F(r) / F(n)
    }
    ))
      , mt = $t(v(pt, 2, dt))
      , wt = b(ht, 0, mt, gt, gt)
      , yt = M
      , At = function(n) {
        return {
            $: 1,
            a: n
        }
    }
      , jt = (t((function(n, r) {
        return n(r)
    }
    )),
    t((function(n, r) {
        return r(n)
    }
    )),
    P)
      , Et = function(n) {
        return n.length
    }
      , Nt = t((function(n, r) {
        return $(n, r) > 0 ? n : r
    }
    ))
      , kt = T
      , _t = t((function(n, r) {
        for (; ; ) {
            var t = v(kt, dt, n)
              , e = t.a
              , u = t.b
              , i = v(Dr, {
                $: 0,
                a: e
            }, r);
            if (!u.b)
                return ct(i);
            n = u,
            r = i
        }
    }
    ))
      , Ct = t((function(n, r) {
        for (; ; ) {
            var t = $t(r / dt);
            if (1 === t)
                return v(kt, dt, n).a;
            n = v(_t, n, E),
            r = t
        }
    }
    ))
      , Ot = t((function(n, r) {
        if (r.a) {
            var t = r.a * dt
              , e = jt(v(pt, dt, t - 1))
              , u = n ? ct(r.d) : r.d
              , i = v(Ct, u, r.a);
            return b(ht, Et(r.c) + t, v(Nt, 5, e * mt), i, r.c)
        }
        return b(ht, Et(r.c), mt, gt, r.c)
    }
    ))
      , Mt = i((function(n, r, t, e, u) {
        for (; ; ) {
            if (r < 0)
                return v(Ot, !1, {
                    d: e,
                    a: t / dt | 0,
                    c: u
                });
            var i = At(s(yt, dt, r, n));
            n = n,
            r = r - dt,
            t = t,
            e = v(Dr, i, e),
            u = u
        }
    }
    ))
      , Tt = t((function(n, r) {
        if (n <= 0)
            return wt;
        var t = n % dt
          , e = s(yt, t, n - t, r);
        return l(Mt, r, n - t - dt, n, E, e)
    }
    ))
      , xt = function(n) {
        return !n.$
    }
      , Lt = X
      , Dt = U
      , Jt = function(n) {
        return {
            $: 0,
            a: n
        }
    }
      , Pt = function(n) {
        switch (n.$) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return 3
        }
    }
      , Ft = function(n) {
        return n
    }
      , St = Ft
      , Bt = o((function(n, r, t, e, u, i) {
        return {
            ae: i,
            af: r,
            aj: e,
            al: t,
            ao: n,
            ap: u
        }
    }
    ))
      , qt = W
      , It = function(n) {
        return n.length
    }
      , Wt = q
      , zt = t((function(n, r) {
        return n < 1 ? r : s(Wt, n, It(r), r)
    }
    ))
      , Ht = z
      , Rt = function(n) {
        return "" === n
    }
      , Gt = t((function(n, r) {
        return n < 1 ? "" : s(Wt, 0, n, r)
    }
    ))
      , Qt = function(n) {
        for (var r = 0, t = n.charCodeAt(0), e = 43 == t || 45 == t ? 1 : 0, u = e; u < n.length; ++u) {
            var i = n.charCodeAt(u);
            if (i < 48 || 57 < i)
                return Rr;
            r = 10 * r + i - 48
        }
        return u == e ? Rr : Hr(45 == t ? -r : r)
    }
      , Yt = i((function(n, r, t, e, u) {
        if (Rt(u) || v(qt, "@", u))
            return Rr;
        var i = v(Ht, ":", u);
        if (i.b) {
            if (i.b.b)
                return Rr;
            var o = i.a
              , f = Qt(v(zt, o + 1, u));
            if (1 === f.$)
                return Rr;
            var a = f;
            return Hr(d(Bt, n, v(Gt, o, u), a, r, t, e))
        }
        return Hr(d(Bt, n, u, Rr, r, t, e))
    }
    ))
      , Xt = u((function(n, r, t, e) {
        if (Rt(e))
            return Rr;
        var u = v(Ht, "/", e);
        if (u.b) {
            var i = u.a;
            return l(Yt, n, v(zt, i, e), r, t, v(Gt, i, e))
        }
        return l(Yt, n, "/", r, t, e)
    }
    ))
      , Ut = e((function(n, r, t) {
        if (Rt(t))
            return Rr;
        var e = v(Ht, "?", t);
        if (e.b) {
            var u = e.a;
            return b(Xt, n, Hr(v(zt, u + 1, t)), r, v(Gt, u, t))
        }
        return b(Xt, n, Rr, r, t)
    }
    ))
      , Vt = (t((function(n, r) {
        if (Rt(r))
            return Rr;
        var t = v(Ht, "#", r);
        if (t.b) {
            var e = t.a;
            return s(Ut, n, Hr(v(zt, e + 1, r)), v(Gt, e, r))
        }
        return s(Ut, n, Rr, r)
    }
    )),
    function(n) {
        for (; ; ) {
            n = n
        }
    }
    )
      , Kt = an
      , Zt = Kt(0)
      , ne = u((function(n, r, t, e) {
        if (e.b) {
            var u = e.a
              , i = e.b;
            if (i.b) {
                var o = i.a
                  , f = i.b;
                if (f.b) {
                    var a = f.a
                      , c = f.b;
                    if (c.b) {
                        var l = c.a
                          , d = c.b;
                        return v(n, u, v(n, o, v(n, a, v(n, l, t > 500 ? s(Kr, n, r, ct(d)) : b(ne, n, r, t + 1, d)))))
                    }
                    return v(n, u, v(n, o, v(n, a, r)))
                }
                return v(n, u, v(n, o, r))
            }
            return v(n, u, r)
        }
        return r
    }
    ))
      , re = e((function(n, r, t) {
        return b(ne, n, r, 0, t)
    }
    ))
      , te = t((function(n, r) {
        return s(re, t((function(r, t) {
            return v(Dr, n(r), t)
        }
        )), E, r)
    }
    ))
      , ee = vn
      , ue = t((function(n, r) {
        return v(ee, (function(r) {
            return Kt(n(r))
        }
        ), r)
    }
    ))
      , ie = e((function(n, r, t) {
        return v(ee, (function(r) {
            return v(ee, (function(t) {
                return Kt(v(n, r, t))
            }
            ), t)
        }
        ), r)
    }
    ))
      , oe = function(n) {
        return s(re, ie(Dr), Kt(E), n)
    }
      , fe = En
      , ae = t((function(n, r) {
        var t = r;
        return ln(v(ee, fe(n), t))
    }
    ))
      , ce = e((function(n, r, t) {
        return v(ue, (function(n) {
            return 0
        }
        ), oe(v(te, ae(n), r)))
    }
    ))
      , ve = e((function(n, r, t) {
        return Kt(0)
    }
    ))
      , se = t((function(n, r) {
        return v(ue, n, r)
    }
    ));
    yn.Task = An(Zt, ce, ve, se);
    var be, le = kn("Task"), de = t((function(n, r) {
        return le(v(ue, n, r))
    }
    )), he = mr, ge = function(n) {
        return {
            $: 2,
            a: n
        }
    }, $e = e((function(n, r, t) {
        for (; ; ) {
            var e = v(kt, dt, n)
              , u = e.a
              , i = e.b;
            if ($(Et(u), dt) < 0)
                return v(Ot, !0, {
                    d: r,
                    a: t,
                    c: u
                });
            n = i,
            r = v(Dr, At(u), r),
            t = t + 1
        }
    }
    )), pe = Cr((function() {
        return {
            as: Or(),
            av: {
                v: Er.pageXOffset,
                w: Er.pageYOffset,
                aQ: jr.documentElement.clientWidth,
                aD: jr.documentElement.clientHeight
            }
        }
    }
    )), me = Ft, we = function(n) {
        return {
            $: 3,
            a: n
        }
    }, ye = t((function(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }
    )), Ae = _n, je = t((function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }
    )), Ee = t((function(n, r) {
        return {
            an: r,
            au: n
        }
    }
    )), Ne = {
        $: -2
    }, ke = Ne, _e = Kt(v(Ee, ke, ke)), Ce = p, Oe = t((function(n, r) {
        n: for (; ; ) {
            if (-2 === r.$)
                return Rr;
            var t = r.b
              , e = r.c
              , u = r.d
              , i = r.e;
            switch (v(Ce, n, t)) {
            case 0:
                n = n,
                r = u;
                continue n;
            case 1:
                return Hr(e);
            default:
                n = n,
                r = i;
                continue n
            }
        }
    }
    )), Me = i((function(n, r, t, e, u) {
        return {
            $: -1,
            a: n,
            b: r,
            c: t,
            d: e,
            e: u
        }
    }
    )), Te = i((function(n, r, t, e, u) {
        if (-1 !== u.$ || u.a) {
            if (-1 !== e.$ || e.a || -1 !== e.d.$ || e.d.a)
                return l(Me, n, r, t, e, u);
            e.a,
            h = e.b,
            g = e.c;
            var i = e.d
              , o = (i.a,
            i.b)
              , f = i.c
              , a = i.d
              , c = i.e;
            p = e.e;
            return l(Me, 0, h, g, l(Me, 1, o, f, a, c), l(Me, 1, r, t, p, u))
        }
        u.a;
        var v = u.b
          , s = u.c
          , b = u.d
          , d = u.e;
        if (-1 !== e.$ || e.a)
            return l(Me, n, v, s, l(Me, 0, r, t, e, b), d);
        e.a;
        var h = e.b
          , g = e.c
          , $ = e.d
          , p = e.e;
        return l(Me, 0, r, t, l(Me, 1, h, g, $, p), l(Me, 1, v, s, b, d))
    }
    )), xe = e((function(n, r, t) {
        if (-2 === t.$)
            return l(Me, 0, n, r, Ne, Ne);
        var e = t.a
          , u = t.b
          , i = t.c
          , o = t.d
          , f = t.e;
        switch (v(Ce, n, u)) {
        case 0:
            return l(Te, e, u, i, s(xe, n, r, o), f);
        case 1:
            return l(Me, e, u, r, o, f);
        default:
            return l(Te, e, u, i, o, s(xe, n, r, f))
        }
    }
    )), Le = e((function(n, r, t) {
        var e = s(xe, n, r, t);
        if (-1 !== e.$ || e.a)
            return e;
        e.a;
        var u = e.b
          , i = e.c
          , o = e.d
          , f = e.e;
        return l(Me, 1, u, i, o, f)
    }
    )), De = t((function(n, r) {
        var t = n.a
          , e = n.b
          , u = v(Oe, t, r);
        if (1 === u.$)
            return s(Le, t, _([e]), r);
        var i = u.a;
        return s(Le, t, v(Dr, e, i), r)
    }
    )), Je = function(n) {
        return cn((function(r) {
            var t = n.f;
            2 === t.$ && t.c && t.c(),
            n.f = null,
            r(an(m))
        }
        ))
    }, Pe = e((function(n, r, t) {
        for (; ; ) {
            if (-2 === t.$)
                return r;
            var e = t.b
              , u = t.c
              , i = t.d
              , o = t.e
              , f = n
              , a = s(n, e, u, s(Pe, n, r, i));
            n = f,
            r = a,
            t = o
        }
    }
    )), Fe = o((function(n, r, u, i, o, f) {
        var a = e((function(t, e, i) {
            n: for (; ; ) {
                var o = i.a
                  , f = i.b;
                if (o.b) {
                    var a = o.a
                      , c = a.a
                      , v = a.b
                      , l = o.b;
                    if ($(c, t) < 0) {
                        t = t,
                        e = e,
                        i = w(l, s(n, c, v, f));
                        continue n
                    }
                    return $(c, t) > 0 ? w(o, s(u, t, e, f)) : w(l, b(r, c, v, e, f))
                }
                return w(o, s(u, t, e, f))
            }
        }
        ))
          , c = s(Pe, a, w(Pr(i), f), o)
          , v = c.a
          , l = c.b;
        return s(Kr, t((function(r, t) {
            var e = r.a
              , u = r.b;
            return s(n, e, u, t)
        }
        )), l, v)
    }
    )), Se = Nn, Be = (t((function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }
    )),
    Mr), qe = ln, Ie = e((function(n, r, t) {
        if (r.b) {
            var e = r.a
              , u = r.b
              , i = qe(v(Be, e, v(Se, n, e)));
            return v(ee, (function(r) {
                return s(Ie, n, u, s(Le, e, r, t))
            }
            ), i)
        }
        return Kt(t)
    }
    )), We = e((function(n, r, t) {
        var i = t.an
          , o = e((function(n, r, t) {
            var e = t.a
              , u = t.b
              , i = t.c;
            return y(e, u, v(ee, (function(n) {
                return i
            }
            ), Je(r)))
        }
        ))
          , f = s(Kr, De, ke, r)
          , a = e((function(n, r, t) {
            var e = t.a
              , u = t.b
              , i = t.c;
            return y(v(Dr, n, e), u, i)
        }
        ))
          , c = u((function(n, r, t, e) {
            var u = e.a
              , i = e.b
              , o = e.c;
            return y(u, s(Le, n, t, i), o)
        }
        ))
          , b = d(Fe, a, c, o, f, i, y(E, ke, Kt(0)))
          , l = b.a
          , h = b.b
          , g = b.c;
        return v(ee, (function(n) {
            return Kt(v(Ee, f, n))
        }
        ), v(ee, (function(r) {
            return s(Ie, n, l, h)
        }
        ), g))
    }
    )), ze = (be = me,
    cn((function(n) {
        n(an(be(Date.now())))
    }
    ))), He = e((function(n, r, t) {
        var e = v(Oe, r, t.au);
        if (1 === e.$)
            return Kt(t);
        var u = e.a;
        return v(ee, (function(n) {
            return Kt(t)
        }
        ), v(ee, (function(r) {
            return oe(v(te, (function(t) {
                return v(fe, n, t(r))
            }
            ), u))
        }
        ), ze))
    }
    )), Re = e((function(n, r, t) {
        return n(r(t))
    }
    )), Ge = t((function(n, r) {
        var t = r.a
          , e = r.b;
        return v(je, t, v(Re, n, e))
    }
    ));
    yn.Time = An(_e, We, He, 0, Ge);
    var Qe = kn("Time")
      , Ye = t((function(n, r) {
        return Qe(v(je, n, r))
    }
    ))
      , Xe = Q
      , Ue = G
      , Ve = e((function(n, r, t) {
        return {
            $: 0,
            a: n,
            b: r,
            c: t
        }
    }
    ))
      , Ke = t((function(n, r) {
        return {
            ak: r,
            at: n
        }
    }
    ))
      , Ze = Kt(v(Ke, E, ke))
      , nu = function(n) {
        var r = n.a
          , t = n.b;
        return w(j(function(n) {
            return n ? "w_" : "d_"
        }(r), t), n)
    }
      , ru = function(n) {
        return s(Kr, t((function(n, r) {
            var t = n.a
              , e = n.b;
            return s(Le, t, e, r)
        }
        )), ke, n)
    }
      , tu = t((function(n, r) {
        return {
            ad: r,
            ag: n
        }
    }
    ))
      , eu = e((function(n, r, t) {
        var e = t.a
          , u = t.b;
        return v(ue, (function(n) {
            return w(r, n)
        }
        ), s(Nr, e ? Er : jr, u, (function(t) {
            return v(Se, n, v(tu, r, t))
        }
        )))
    }
    ))
      , uu = t((function(n, r) {
        return s(Pe, Le, r, n)
    }
    ))
      , iu = e((function(n, r, t) {
        var i = e((function(r, t, e) {
            var u = e.a
              , i = e.b
              , o = e.c;
            return y(u, i, v(Dr, s(eu, n, r, t), o))
        }
        ))
          , o = e((function(n, r, t) {
            var e = t.a
              , u = t.b
              , i = t.c;
            return y(v(Dr, r, e), u, i)
        }
        ))
          , f = u((function(n, r, t, e) {
            var u = e.a
              , i = e.b
              , o = e.c;
            return y(u, s(Le, n, r, i), o)
        }
        ))
          , a = v(te, nu, r)
          , c = d(Fe, o, f, i, t.ak, ru(a), y(E, ke, E))
          , b = c.a
          , l = c.b
          , h = c.c;
        return v(ee, (function(n) {
            return Kt(v(Ke, a, v(uu, l, ru(n))))
        }
        ), v(ee, (function(n) {
            return oe(h)
        }
        ), oe(v(te, Je, b))))
    }
    ))
      , ou = e((function(n, r, t) {
        var e = n(r);
        if (e.$)
            return t;
        var u = e.a;
        return v(Dr, u, t)
    }
    ))
      , fu = t((function(n, r) {
        return s(re, ou(n), E, r)
    }
    ))
      , au = e((function(n, r, t) {
        var e = r.ag
          , u = r.ad
          , i = v(fu, (function(n) {
            var r = n.a
              , t = n.b
              , i = (t.a,
            t.b,
            t.c);
            return h(r, e) ? v(kr, i, u) : Rr
        }
        ), t.at);
        return v(ee, (function(n) {
            return Kt(t)
        }
        ), oe(v(te, fe(n), i)))
    }
    ))
      , cu = t((function(n, r) {
        var t = r.a
          , e = r.b
          , u = r.c;
        return s(Ve, t, e, v(Lt, n, u))
    }
    ));
    yn["Browser.Events"] = An(Ze, iu, au, 0, cu);
    var vu, su = kn("Browser.Events"), bu = e((function(n, r, t) {
        return su(s(Ve, n, r, t))
    }
    )), lu = _n(E), du = e((function(n, r, t) {
        var e = n.E ? !($(n.w, r.j - n.j) > 0) : n.w - t < 0
          , u = e ? n.w + t : n.w - t
          , i = n.D ? !($(n.v, r.n - n.n) > 0) : n.v - t < 0;
        return A(n, {
            D: i,
            E: e,
            v: i ? n.v + t : n.v - t,
            w: u
        })
    }
    )), hu = function(n) {
        if (n.J) {
            var r = n
              , t = s(du, n.m, n.A, n.V)
              , e = h(r.m.D, t.D) && h(r.m.E, t.E) ? n.t : A(u = n.t, {
                C: $(u.C + 1, u.P.a - 1) > 0 ? 0 : u.C + 1
            });
            return A(n, {
                m: t,
                t: e
            })
        }
        return n;
        var u
    }, gu = t((function(n, r) {
        switch (n.$) {
        case 0:
            return w(A(r, {
                J: !r.J
            }), lu);
        case 1:
            var t = n.a;
            return w(A(r, {
                A: {
                    j: n.b,
                    n: t
                }
            }), lu);
        case 2:
            var e = n.a;
            return w(A(r, {
                A: {
                    j: e.av.aD,
                    n: e.av.aQ
                }
            }), lu);
        default:
            var u = n.a;
            return w(hu(A(r, {
                Y: u
            })), lu)
        }
    }
    )), $u = Sn("div"), pu = H, mu = 4294967295 >>> 32 - mt, wu = x, yu = e((function(n, r, t) {
        for (; ; ) {
            var e = v(wu, mu & r >>> n, t);
            if (e.$) {
                var u = e.a;
                return v(wu, mu & r, u)
            }
            var i = e.a;
            n = n - mt,
            r = r,
            t = i
        }
    }
    )), Au = t((function(n, r) {
        var t = r.a
          , e = r.b
          , u = r.c
          , i = r.d;
        return n < 0 || $(n, t) > -1 ? Rr : $(n, function(n) {
            return n >>> 5 << 5
        }(t)) > -1 ? Hr(v(wu, mu & n, i)) : Hr(s(yu, e, n, u))
    }
    )), ju = Sn("img"), Eu = fn, Nu = t((function(n, r) {
        return v(Wn, n, Eu(r))
    }
    )), ku = In, _u = t((function(n, r) {
        return r.$ ? n : r.a
    }
    )), Cu = he({
        aG: function(n) {
            return w({
                J: !0,
                m: {
                    D: !0,
                    E: !1,
                    j: 180,
                    n: 394,
                    v: 0,
                    w: 0
                },
                t: {
                    _: "#000000",
                    Q: "assets/img/",
                    C: 0,
                    P: (r = _(["allah.gif"]),
                    r.b ? s($e, r, E, 0) : wt)
                },
                A: {
                    j: 0,
                    n: 0
                },
                V: 2,
                Y: me(0)
            }, v(de, ge, pe));
            var r
        },
        aM: function(n) {
            return Ae(_([v(Ye, 10, we), (r = ye,
            s(bu, 1, "resize", v(Xe, "target", s(Dt, r, v(Xe, "innerWidth", Ue), v(Xe, "innerHeight", Ue)))))]));
            var r
        },
        aO: gu,
        aP: function(n) {
            var r, t, e = pu(n.m.w) + "px", u = pu(n.m.v) + "px", i = pu(n.A.n) + "px", o = pu(n.m.n) + "px", f = n.t.Q + "/" + v(_u, "", v(Au, n.t.C, n.t.P)), a = pu(n.A.j) + "px", c = pu(n.m.j) + "px";
            return v($u, _([v(ku, "position", "absolute"), v(ku, "width", i), v(ku, "height", a)]), _([v($u, _([v(ku, "position", "relative"), v(ku, "left", u), v(ku, "top", e), v(ku, "width", o), v(ku, "height", c)]), _([v(ju, _([(r = f,
            v(Nu, "src", /^\s*(javascript:|data:text\/html)/i.test(t = r) ? "" : t))]), E)]))]))
        }
    });
    vu = {
        Bouncingdvdlogo: {
            init: Cu(Jt(0))(0)
        }
    },
    n.Elm ? Dn(n.Elm, vu) : n.Elm = vu
}(this);
