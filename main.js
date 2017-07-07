! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        ! function(a, d) {
            "object" == typeof c && "undefined" != typeof b ? b.exports = d() : "function" == typeof define && define.amd ? define(d) : a.moment = d()
        }(this, function() {
            "use strict";

            function a() {
                return nd.apply(null, arguments)
            }

            function c(a) {
                nd = a
            }

            function d(a) {
                return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
            }

            function e(a) {
                return null != a && "[object Object]" === Object.prototype.toString.call(a)
            }

            function f(a) {
                var b;
                for (b in a) return !1;
                return !0
            }

            function g(a) {
                return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
            }

            function h(a, b) {
                var c, d = [];
                for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
                return d
            }

            function i(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function j(a, b) {
                for (var c in b) i(b, c) && (a[c] = b[c]);
                return i(b, "toString") && (a.toString = b.toString), i(b, "valueOf") && (a.valueOf = b.valueOf), a
            }

            function k(a, b, c, d) {
                return rb(a, b, c, d, !0).utc()
            }

            function l() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }

            function m(a) {
                return null == a._pf && (a._pf = l()), a._pf
            }

            function n(a) {
                if (null == a._isValid) {
                    var b = m(a),
                        c = od.call(b.parsedDateParts, function(a) {
                            return null != a
                        }),
                        d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
                    if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
                    a._isValid = d
                }
                return a._isValid
            }

            function o(a) {
                var b = k(NaN);
                return null != a ? j(m(b), a) : m(b).userInvalidated = !0, b
            }

            function p(a) {
                return void 0 === a
            }

            function q(a, b) {
                var c, d, e;
                if (p(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), p(b._i) || (a._i = b._i), p(b._f) || (a._f = b._f), p(b._l) || (a._l = b._l), p(b._strict) || (a._strict = b._strict), p(b._tzm) || (a._tzm = b._tzm), p(b._isUTC) || (a._isUTC = b._isUTC), p(b._offset) || (a._offset = b._offset), p(b._pf) || (a._pf = m(b)), p(b._locale) || (a._locale = b._locale), pd.length > 0)
                    for (c in pd) d = pd[c], e = b[d], p(e) || (a[d] = e);
                return a
            }

            function r(b) {
                q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), qd === !1 && (qd = !0, a.updateOffset(this), qd = !1)
            }

            function s(a) {
                return a instanceof r || null != a && null != a._isAMomentObject
            }

            function t(a) {
                return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
            }

            function u(a) {
                var b = +a,
                    c = 0;
                return 0 !== b && isFinite(b) && (c = t(b)), c
            }

            function v(a, b, c) {
                var d, e = Math.min(a.length, b.length),
                    f = Math.abs(a.length - b.length),
                    g = 0;
                for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
                return g + f
            }

            function w(b) {
                a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
            }

            function x(b, c) {
                var d = !0;
                return j(function() {
                    if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
                        for (var e, f = [], g = 0; g < arguments.length; g++) {
                            if (e = "", "object" == typeof arguments[g]) {
                                e += "\n[" + g + "] ";
                                for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
                                e = e.slice(0, -2)
                            } else e = arguments[g];
                            f.push(e)
                        }
                        w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
                    }
                    return c.apply(this, arguments)
                }, c)
            }

            function y(b, c) {
                null != a.deprecationHandler && a.deprecationHandler(b, c), rd[b] || (w(c), rd[b] = !0)
            }

            function z(a) {
                return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
            }

            function A(a) {
                var b, c;
                for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
                this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function B(a, b) {
                var c, d = j({}, a);
                for (c in b) i(b, c) && (e(a[c]) && e(b[c]) ? (d[c] = {}, j(d[c], a[c]), j(d[c], b[c])) : null != b[c] ? d[c] = b[c] : delete d[c]);
                for (c in a) i(a, c) && !i(b, c) && e(a[c]) && (d[c] = j({}, d[c]));
                return d
            }

            function C(a) {
                null != a && this.set(a)
            }

            function D(a, b, c) {
                var d = this._calendar[a] || this._calendar.sameElse;
                return z(d) ? d.call(b, c) : d
            }

            function E(a) {
                var b = this._longDateFormat[a],
                    c = this._longDateFormat[a.toUpperCase()];
                return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
                    return a.slice(1)
                }), this._longDateFormat[a])
            }

            function F() {
                return this._invalidDate
            }

            function G(a) {
                return this._ordinal.replace("%d", a)
            }

            function H(a, b, c, d) {
                var e = this._relativeTime[c];
                return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
            }

            function I(a, b) {
                var c = this._relativeTime[a > 0 ? "future" : "past"];
                return z(c) ? c(b) : c.replace(/%s/i, b)
            }

            function J(a, b) {
                var c = a.toLowerCase();
                Ad[c] = Ad[c + "s"] = Ad[b] = a
            }

            function K(a) {
                return "string" == typeof a ? Ad[a] || Ad[a.toLowerCase()] : void 0
            }

            function L(a) {
                var b, c, d = {};
                for (c in a) i(a, c) && (b = K(c), b && (d[b] = a[c]));
                return d
            }

            function M(a, b) {
                Bd[a] = b
            }

            function N(a) {
                var b = [];
                for (var c in a) b.push({
                    unit: c,
                    priority: Bd[c]
                });
                return b.sort(function(a, b) {
                    return a.priority - b.priority
                }), b
            }

            function O(b, c) {
                return function(d) {
                    return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
                }
            }

            function P(a, b) {
                return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
            }

            function Q(a, b, c) {
                a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
            }

            function R(a) {
                return a = K(a), z(this[a]) ? this[a]() : this
            }

            function S(a, b) {
                if ("object" == typeof a) {
                    a = L(a);
                    for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
                } else if (a = K(a), z(this[a])) return this[a](b);
                return this
            }

            function T(a, b, c) {
                var d = "" + Math.abs(a),
                    e = b - d.length,
                    f = a >= 0;
                return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
            }

            function U(a, b, c, d) {
                var e = d;
                "string" == typeof d && (e = function() {
                    return this[d]()
                }), a && (Fd[a] = e), b && (Fd[b[0]] = function() {
                    return T(e.apply(this, arguments), b[1], b[2])
                }), c && (Fd[c] = function() {
                    return this.localeData().ordinal(e.apply(this, arguments), a)
                })
            }

            function V(a) {
                return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
            }

            function W(a) {
                var b, c, d = a.match(Cd);
                for (b = 0, c = d.length; b < c; b++) Fd[d[b]] ? d[b] = Fd[d[b]] : d[b] = V(d[b]);
                return function(b) {
                    var e, f = "";
                    for (e = 0; e < c; e++) f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
                    return f
                }
            }

            function X(a, b) {
                return a.isValid() ? (b = Y(b, a.localeData()), Ed[b] = Ed[b] || W(b), Ed[b](a)) : a.localeData().invalidDate()
            }

            function Y(a, b) {
                function c(a) {
                    return b.longDateFormat(a) || a
                }
                var d = 5;
                for (Dd.lastIndex = 0; d >= 0 && Dd.test(a);) a = a.replace(Dd, c), Dd.lastIndex = 0, d -= 1;
                return a
            }

            function Z(a, b, c) {
                Xd[a] = z(b) ? b : function(a, d) {
                    return a && c ? c : b
                }
            }

            function $(a, b) {
                return i(Xd, a) ? Xd[a](b._strict, b._locale) : new RegExp(_(a))
            }

            function _(a) {
                return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
                    return b || c || d || e
                }))
            }

            function aa(a) {
                return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function ba(a, b) {
                var c, d = b;
                for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
                        c[b] = u(a)
                    }), c = 0; c < a.length; c++) Yd[a[c]] = d
            }

            function ca(a, b) {
                ba(a, function(a, c, d, e) {
                    d._w = d._w || {}, b(a, d._w, d, e)
                })
            }

            function da(a, b, c) {
                null != b && i(Yd, a) && Yd[a](b, c._a, c, a)
            }

            function ea(a, b) {
                return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
            }

            function fa(a, b) {
                return a ? d(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || ge).test(b) ? "format" : "standalone"][a.month()] : this._months
            }

            function ga(a, b) {
                return a ? d(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[ge.test(b) ? "format" : "standalone"][a.month()] : this._monthsShort
            }

            function ha(a, b, c) {
                var d, e, f, g = a.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = k([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
                return c ? "MMM" === b ? (e = td.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = td.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = td.call(this._shortMonthsParse, g), e !== -1 ? e : (e = td.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = td.call(this._longMonthsParse, g), e !== -1 ? e : (e = td.call(this._shortMonthsParse, g), e !== -1 ? e : null))
            }

            function ia(a, b, c) {
                var d, e, f;
                if (this._monthsParseExact) return ha.call(this, a, b, c);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
                    if (e = k([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                    if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                    if (!c && this._monthsParse[d].test(a)) return d
                }
            }

            function ja(a, b) {
                var c;
                if (!a.isValid()) return a;
                if ("string" == typeof b)
                    if (/^\d+$/.test(b)) b = u(b);
                    else if (b = a.localeData().monthsParse(b), "number" != typeof b) return a;
                return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
            }

            function ka(b) {
                return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
            }

            function la() {
                return ea(this.year(), this.month())
            }

            function ma(a) {
                return this._monthsParseExact ? (i(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (i(this, "_monthsShortRegex") || (this._monthsShortRegex = je), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function na(a) {
                return this._monthsParseExact ? (i(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (i(this, "_monthsRegex") || (this._monthsRegex = ke), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
            }

            function oa() {
                function a(a, b) {
                    return b.length - a.length
                }
                var b, c, d = [],
                    e = [],
                    f = [];
                for (b = 0; b < 12; b++) c = k([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
                for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
                for (b = 0; b < 24; b++) f[b] = aa(f[b]);
                this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
            }

            function pa(a) {
                return qa(a) ? 366 : 365
            }

            function qa(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            }

            function ra() {
                return qa(this.year())
            }

            function sa(a, b, c, d, e, f, g) {
                var h = new Date(a, b, c, d, e, f, g);
                return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
            }

            function ta(a) {
                var b = new Date(Date.UTC.apply(null, arguments));
                return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
            }

            function ua(a, b, c) {
                var d = 7 + b - c,
                    e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
                return -e + d - 1
            }

            function va(a, b, c, d, e) {
                var f, g, h = (7 + c - d) % 7,
                    i = ua(a, d, e),
                    j = 1 + 7 * (b - 1) + h + i;
                return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
                    year: f,
                    dayOfYear: g
                }
            }

            function wa(a, b, c) {
                var d, e, f = ua(a.year(), b, c),
                    g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
                return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
                    week: d,
                    year: e
                }
            }

            function xa(a, b, c) {
                var d = ua(a, b, c),
                    e = ua(a + 1, b, c);
                return (pa(a) - d + e) / 7
            }

            function ya(a) {
                return wa(a, this._week.dow, this._week.doy).week
            }

            function za() {
                return this._week.dow
            }

            function Aa() {
                return this._week.doy
            }

            function Ba(a) {
                var b = this.localeData().week(this);
                return null == a ? b : this.add(7 * (a - b), "d")
            }

            function Ca(a) {
                var b = wa(this, 1, 4).week;
                return null == a ? b : this.add(7 * (a - b), "d")
            }

            function Da(a, b) {
                return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
            }

            function Ea(a, b) {
                return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
            }

            function Fa(a, b) {
                return a ? d(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : this._weekdays
            }

            function Ga(a) {
                return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
            }

            function Ha(a) {
                return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
            }

            function Ia(a, b, c) {
                var d, e, f, g = a.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = k([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
                return c ? "dddd" === b ? (e = td.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = td.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = td.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = td.call(this._weekdaysParse, g), e !== -1 ? e : (e = td.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = td.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = td.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = td.call(this._weekdaysParse, g), e !== -1 ? e : (e = td.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = td.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = td.call(this._weekdaysParse, g), e !== -1 ? e : (e = td.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
            }

            function Ja(a, b, c) {
                var d, e, f;
                if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
                    if (e = k([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
                    if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
                    if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
                    if (!c && this._weekdaysParse[d].test(a)) return d
                }
            }

            function Ka(a) {
                if (!this.isValid()) return null != a ? this : NaN;
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
            }

            function La(a) {
                if (!this.isValid()) return null != a ? this : NaN;
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == a ? b : this.add(a - b, "d")
            }

            function Ma(a) {
                if (!this.isValid()) return null != a ? this : NaN;
                if (null != a) {
                    var b = Ea(a, this.localeData());
                    return this.day(this.day() % 7 ? b : b - 7)
                }
                return this.day() || 7
            }

            function Na(a) {
                return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (i(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function Oa(a) {
                return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (i(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = re), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function Pa(a) {
                return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (i(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = se), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function Qa() {
                function a(a, b) {
                    return b.length - a.length
                }
                var b, c, d, e, f, g = [],
                    h = [],
                    i = [],
                    j = [];
                for (b = 0; b < 7; b++) c = k([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
                for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
                this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
            }

            function Ra() {
                return this.hours() % 12 || 12
            }

            function Sa() {
                return this.hours() || 24
            }

            function Ta(a, b) {
                U(a, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), b)
                })
            }

            function Ua(a, b) {
                return b._meridiemParse
            }

            function Va(a) {
                return "p" === (a + "").toLowerCase().charAt(0)
            }

            function Wa(a, b, c) {
                return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
            }

            function Xa(a) {
                return a ? a.toLowerCase().replace("_", "-") : a
            }

            function Ya(a) {
                for (var b, c, d, e, f = 0; f < a.length;) {
                    for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                        if (d = Za(e.slice(0, b).join("-"))) return d;
                        if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
                        b--
                    }
                    f++
                }
                return null
            }

            function Za(a) {
                var c = null;
                if (!xe[a] && "undefined" != typeof b && b && b.require) try {
                    c = te._abbr, b.require("./locale/" + a), $a(c)
                } catch (d) {}
                return xe[a]
            }

            function $a(a, b) {
                var c;
                return a && (c = p(b) ? bb(a) : _a(a, b), c && (te = c)), te._abbr
            }

            function _a(a, b) {
                if (null !== b) {
                    var c = we;
                    return b.abbr = a, null != xe[a] ? (y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = xe[a]._config) : null != b.parentLocale && (null != xe[b.parentLocale] ? c = xe[b.parentLocale]._config : y("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), xe[a] = new C(B(c, b)), $a(a), xe[a]
                }
                return delete xe[a], null
            }

            function ab(a, b) {
                if (null != b) {
                    var c, d = we;
                    null != xe[a] && (d = xe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = xe[a], xe[a] = c, $a(a)
                } else null != xe[a] && (null != xe[a].parentLocale ? xe[a] = xe[a].parentLocale : null != xe[a] && delete xe[a]);
                return xe[a]
            }

            function bb(a) {
                var b;
                if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return te;
                if (!d(a)) {
                    if (b = Za(a)) return b;
                    a = [a]
                }
                return Ya(a)
            }

            function cb() {
                return sd(xe)
            }

            function db(a) {
                var b, c = a._a;
                return c && m(a).overflow === -2 && (b = c[$d] < 0 || c[$d] > 11 ? $d : c[_d] < 1 || c[_d] > ea(c[Zd], c[$d]) ? _d : c[ae] < 0 || c[ae] > 24 || 24 === c[ae] && (0 !== c[be] || 0 !== c[ce] || 0 !== c[de]) ? ae : c[be] < 0 || c[be] > 59 ? be : c[ce] < 0 || c[ce] > 59 ? ce : c[de] < 0 || c[de] > 999 ? de : -1, m(a)._overflowDayOfYear && (b < Zd || b > _d) && (b = _d), m(a)._overflowWeeks && b === -1 && (b = ee), m(a)._overflowWeekday && b === -1 && (b = fe), m(a).overflow = b), a
            }

            function eb(a) {
                var b, c, d, e, f, g, h = a._i,
                    i = ye.exec(h) || ze.exec(h);
                if (i) {
                    for (m(a).iso = !0, b = 0, c = Be.length; b < c; b++)
                        if (Be[b][1].exec(i[1])) {
                            e = Be[b][0], d = Be[b][2] !== !1;
                            break
                        }
                    if (null == e) return void(a._isValid = !1);
                    if (i[3]) {
                        for (b = 0, c = Ce.length; b < c; b++)
                            if (Ce[b][1].exec(i[3])) {
                                f = (i[2] || " ") + Ce[b][0];
                                break
                            }
                        if (null == f) return void(a._isValid = !1)
                    }
                    if (!d && null != f) return void(a._isValid = !1);
                    if (i[4]) {
                        if (!Ae.exec(i[4])) return void(a._isValid = !1);
                        g = "Z"
                    }
                    a._f = e + (f || "") + (g || ""), kb(a)
                } else a._isValid = !1
            }

            function fb(b) {
                var c = De.exec(b._i);
                return null !== c ? void(b._d = new Date((+c[1]))) : (eb(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
            }

            function gb(a, b, c) {
                return null != a ? a : null != b ? b : c
            }

            function hb(b) {
                var c = new Date(a.now());
                return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
            }

            function ib(a) {
                var b, c, d, e, f = [];
                if (!a._d) {
                    for (d = hb(a), a._w && null == a._a[_d] && null == a._a[$d] && jb(a), a._dayOfYear && (e = gb(a._a[Zd], d[Zd]), a._dayOfYear > pa(e) && (m(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[$d] = c.getUTCMonth(), a._a[_d] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
                    for (; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                    24 === a._a[ae] && 0 === a._a[be] && 0 === a._a[ce] && 0 === a._a[de] && (a._nextDay = !0, a._a[ae] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[ae] = 24)
                }
            }

            function jb(a) {
                var b, c, d, e, f, g, h, i;
                b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = gb(b.GG, a._a[Zd], wa(sb(), 1, 4).year), d = gb(b.W, 1), e = gb(b.E, 1), (e < 1 || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = gb(b.gg, a._a[Zd], wa(sb(), f, g).year), d = gb(b.w, 1), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), d < 1 || d > xa(c, f, g) ? m(a)._overflowWeeks = !0 : null != i ? m(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[Zd] = h.year, a._dayOfYear = h.dayOfYear)
            }

            function kb(b) {
                if (b._f === a.ISO_8601) return void eb(b);
                b._a = [], m(b).empty = !0;
                var c, d, e, f, g, h = "" + b._i,
                    i = h.length,
                    j = 0;
                for (e = Y(b._f, b._locale).match(Cd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && m(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Fd[f] ? (d ? m(b).empty = !1 : m(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && m(b).unusedTokens.push(f);
                m(b).charsLeftOver = i - j, h.length > 0 && m(b).unusedInput.push(h), b._a[ae] <= 12 && m(b).bigHour === !0 && b._a[ae] > 0 && (m(b).bigHour = void 0), m(b).parsedDateParts = b._a.slice(0), m(b).meridiem = b._meridiem, b._a[ae] = lb(b._locale, b._a[ae], b._meridiem), ib(b), db(b)
            }

            function lb(a, b, c) {
                var d;
                return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
            }

            function mb(a) {
                var b, c, d, e, f;
                if (0 === a._f.length) return m(a).invalidFormat = !0, void(a._d = new Date(NaN));
                for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], kb(b), n(b) && (f += m(b).charsLeftOver, f += 10 * m(b).unusedTokens.length, m(b).score = f, (null == d || f < d) && (d = f, c = b));
                j(a, c || b)
            }

            function nb(a) {
                if (!a._d) {
                    var b = L(a._i);
                    a._a = h([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                        return a && parseInt(a, 10)
                    }), ib(a)
                }
            }

            function ob(a) {
                var b = new r(db(pb(a)));
                return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
            }

            function pb(a) {
                var b = a._i,
                    c = a._f;
                return a._locale = a._locale || bb(a._l), null === b || void 0 === c && "" === b ? o({
                    nullInput: !0
                }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (d(c) ? mb(a) : g(b) ? a._d = b : c ? kb(a) : qb(a), n(a) || (a._d = null), a))
            }

            function qb(b) {
                var c = b._i;
                void 0 === c ? b._d = new Date(a.now()) : g(c) ? b._d = new Date(c.valueOf()) : "string" == typeof c ? fb(b) : d(c) ? (b._a = h(c.slice(0), function(a) {
                    return parseInt(a, 10)
                }), ib(b)) : "object" == typeof c ? nb(b) : "number" == typeof c ? b._d = new Date(c) : a.createFromInputFallback(b)
            }

            function rb(a, b, c, g, h) {
                var i = {};
                return "boolean" == typeof c && (g = c, c = void 0), (e(a) && f(a) || d(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = c, i._i = a, i._f = b, i._strict = g, ob(i)
            }

            function sb(a, b, c, d) {
                return rb(a, b, c, d, !1)
            }

            function tb(a, b) {
                var c, e;
                if (1 === b.length && d(b[0]) && (b = b[0]), !b.length) return sb();
                for (c = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](c) || (c = b[e]);
                return c
            }

            function ub() {
                var a = [].slice.call(arguments, 0);
                return tb("isBefore", a)
            }

            function vb() {
                var a = [].slice.call(arguments, 0);
                return tb("isAfter", a)
            }

            function wb(a) {
                var b = L(a),
                    c = b.year || 0,
                    d = b.quarter || 0,
                    e = b.month || 0,
                    f = b.week || 0,
                    g = b.day || 0,
                    h = b.hour || 0,
                    i = b.minute || 0,
                    j = b.second || 0,
                    k = b.millisecond || 0;
                this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
            }

            function xb(a) {
                return a instanceof wb
            }

            function yb(a) {
                return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
            }

            function zb(a, b) {
                U(a, 0, 0, function() {
                    var a = this.utcOffset(),
                        c = "+";
                    return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
                })
            }

            function Ab(a, b) {
                var c = (b || "").match(a) || [],
                    d = c[c.length - 1] || [],
                    e = (d + "").match(He) || ["-", 0, 0],
                    f = +(60 * e[1]) + u(e[2]);
                return "+" === e[0] ? f : -f
            }

            function Bb(b, c) {
                var d, e;
                return c._isUTC ? (d = c.clone(), e = (s(b) || g(b) ? b.valueOf() : sb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : sb(b).local()
            }

            function Cb(a) {
                return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
            }

            function Db(b, c) {
                var d, e = this._offset || 0;
                return this.isValid() ? null != b ? ("string" == typeof b ? b = Ab(Ud, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Cb(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? Tb(this, Ob(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Cb(this) : null != b ? this : NaN
            }

            function Eb(a, b) {
                return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
            }

            function Fb(a) {
                return this.utcOffset(0, a)
            }

            function Gb(a) {
                return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Cb(this), "m")), this
            }

            function Hb() {
                if (this._tzm) this.utcOffset(this._tzm);
                else if ("string" == typeof this._i) {
                    var a = Ab(Td, this._i);
                    0 === a ? this.utcOffset(0, !0) : this.utcOffset(Ab(Td, this._i))
                }
                return this
            }

            function Ib(a) {
                return !!this.isValid() && (a = a ? sb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
            }

            function Jb() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Kb() {
                if (!p(this._isDSTShifted)) return this._isDSTShifted;
                var a = {};
                if (q(a, this), a = pb(a), a._a) {
                    var b = a._isUTC ? k(a._a) : sb(a._a);
                    this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Lb() {
                return !!this.isValid() && !this._isUTC
            }

            function Mb() {
                return !!this.isValid() && this._isUTC
            }

            function Nb() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function Ob(a, b) {
                var c, d, e, f = a,
                    g = null;
                return xb(a) ? f = {
                    ms: a._milliseconds,
                    d: a._days,
                    M: a._months
                } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = Ie.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
                    y: 0,
                    d: u(g[_d]) * c,
                    h: u(g[ae]) * c,
                    m: u(g[be]) * c,
                    s: u(g[ce]) * c,
                    ms: u(yb(1e3 * g[de])) * c
                }) : (g = Je.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
                    y: Pb(g[2], c),
                    M: Pb(g[3], c),
                    w: Pb(g[4], c),
                    d: Pb(g[5], c),
                    h: Pb(g[6], c),
                    m: Pb(g[7], c),
                    s: Pb(g[8], c)
                }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Rb(sb(f.from), sb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new wb(f), xb(a) && i(a, "_locale") && (d._locale = a._locale), d
            }

            function Pb(a, b) {
                var c = a && parseFloat(a.replace(",", "."));
                return (isNaN(c) ? 0 : c) * b
            }

            function Qb(a, b) {
                var c = {
                    milliseconds: 0,
                    months: 0
                };
                return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
            }

            function Rb(a, b) {
                var c;
                return a.isValid() && b.isValid() ? (b = Bb(b, a), a.isBefore(b) ? c = Qb(a, b) : (c = Qb(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function Sb(a, b) {
                return function(c, d) {
                    var e, f;
                    return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ob(c, d), Tb(this, e, a), this
                }
            }

            function Tb(b, c, d, e) {
                var f = c._milliseconds,
                    g = yb(c._days),
                    h = yb(c._months);
                b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
            }

            function Ub(a, b) {
                var c = a.diff(b, "days", !0);
                return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
            }

            function Vb(b, c) {
                var d = b || sb(),
                    e = Bb(d, this).startOf("day"),
                    f = a.calendarFormat(this, e) || "sameElse",
                    g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
                return this.format(g || this.localeData().calendar(f, this, sb(d)))
            }

            function Wb() {
                return new r(this)
            }

            function Xb(a, b) {
                var c = s(a) ? a : sb(a);
                return !(!this.isValid() || !c.isValid()) && (b = K(p(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
            }

            function Yb(a, b) {
                var c = s(a) ? a : sb(a);
                return !(!this.isValid() || !c.isValid()) && (b = K(p(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
            }

            function Zb(a, b, c, d) {
                return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
            }

            function $b(a, b) {
                var c, d = s(a) ? a : sb(a);
                return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
            }

            function _b(a, b) {
                return this.isSame(a, b) || this.isAfter(a, b)
            }

            function ac(a, b) {
                return this.isSame(a, b) || this.isBefore(a, b)
            }

            function bc(a, b, c) {
                var d, e, f, g;
                return this.isValid() ? (d = Bb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = cc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
            }

            function cc(a, b) {
                var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                    f = a.clone().add(e, "months");
                return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
            }

            function dc() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function ec() {
                var a = this.clone().utc();
                return 0 < a.year() && a.year() <= 9999 ? z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function fc(b) {
                b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
                var c = X(this, b);
                return this.localeData().postformat(c)
            }

            function gc(a, b) {
                return this.isValid() && (s(a) && a.isValid() || sb(a).isValid()) ? Ob({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }

            function hc(a) {
                return this.from(sb(), a)
            }

            function ic(a, b) {
                return this.isValid() && (s(a) && a.isValid() || sb(a).isValid()) ? Ob({
                    from: this,
                    to: a
                }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
            }

            function jc(a) {
                return this.to(sb(), a)
            }

            function kc(a) {
                var b;
                return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
            }

            function lc() {
                return this._locale
            }

            function mc(a) {
                switch (a = K(a)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function nc(a) {
                return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
            }

            function oc() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function pc() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function qc() {
                return new Date(this.valueOf())
            }

            function rc() {
                var a = this;
                return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
            }

            function sc() {
                var a = this;
                return {
                    years: a.year(),
                    months: a.month(),
                    date: a.date(),
                    hours: a.hours(),
                    minutes: a.minutes(),
                    seconds: a.seconds(),
                    milliseconds: a.milliseconds()
                }
            }

            function tc() {
                return this.isValid() ? this.toISOString() : null
            }

            function uc() {
                return n(this)
            }

            function vc() {
                return j({}, m(this))
            }

            function wc() {
                return m(this).overflow
            }

            function xc() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }

            function yc(a, b) {
                U(0, [a, a.length], 0, b)
            }

            function zc(a) {
                return Dc.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Ac(a) {
                return Dc.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function Bc() {
                return xa(this.year(), 1, 4)
            }

            function Cc() {
                var a = this.localeData()._week;
                return xa(this.year(), a.dow, a.doy)
            }

            function Dc(a, b, c, d, e) {
                var f;
                return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Ec.call(this, a, b, c, d, e))
            }

            function Ec(a, b, c, d, e) {
                var f = va(a, b, c, d, e),
                    g = ta(f.year, 0, f.dayOfYear);
                return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
            }

            function Fc(a) {
                return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
            }

            function Gc(a) {
                var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == a ? b : this.add(a - b, "d")
            }

            function Hc(a, b) {
                b[de] = u(1e3 * ("0." + a))
            }

            function Ic() {
                return this._isUTC ? "UTC" : ""
            }

            function Jc() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Kc(a) {
                return sb(1e3 * a)
            }

            function Lc() {
                return sb.apply(null, arguments).parseZone()
            }

            function Mc(a) {
                return a
            }

            function Nc(a, b, c, d) {
                var e = bb(),
                    f = k().set(d, b);
                return e[c](f, a)
            }

            function Oc(a, b, c) {
                if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return Nc(a, b, c, "month");
                var d, e = [];
                for (d = 0; d < 12; d++) e[d] = Nc(a, d, c, "month");
                return e
            }

            function Pc(a, b, c, d) {
                "boolean" == typeof a ? ("number" == typeof b && (c = b,
                    b = void 0), b = b || "") : (b = a, c = b, a = !1, "number" == typeof b && (c = b, b = void 0), b = b || "");
                var e = bb(),
                    f = a ? e._week.dow : 0;
                if (null != c) return Nc(b, (c + f) % 7, d, "day");
                var g, h = [];
                for (g = 0; g < 7; g++) h[g] = Nc(b, (g + f) % 7, d, "day");
                return h
            }

            function Qc(a, b) {
                return Oc(a, b, "months")
            }

            function Rc(a, b) {
                return Oc(a, b, "monthsShort")
            }

            function Sc(a, b, c) {
                return Pc(a, b, c, "weekdays")
            }

            function Tc(a, b, c) {
                return Pc(a, b, c, "weekdaysShort")
            }

            function Uc(a, b, c) {
                return Pc(a, b, c, "weekdaysMin")
            }

            function Vc() {
                var a = this._data;
                return this._milliseconds = Ve(this._milliseconds), this._days = Ve(this._days), this._months = Ve(this._months), a.milliseconds = Ve(a.milliseconds), a.seconds = Ve(a.seconds), a.minutes = Ve(a.minutes), a.hours = Ve(a.hours), a.months = Ve(a.months), a.years = Ve(a.years), this
            }

            function Wc(a, b, c, d) {
                var e = Ob(b, c);
                return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
            }

            function Xc(a, b) {
                return Wc(this, a, b, 1)
            }

            function Yc(a, b) {
                return Wc(this, a, b, -1)
            }

            function Zc(a) {
                return a < 0 ? Math.floor(a) : Math.ceil(a)
            }

            function $c() {
                var a, b, c, d, e, f = this._milliseconds,
                    g = this._days,
                    h = this._months,
                    i = this._data;
                return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * Zc(ad(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(_c(g)), h += e, g -= Zc(ad(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
            }

            function _c(a) {
                return 4800 * a / 146097
            }

            function ad(a) {
                return 146097 * a / 4800
            }

            function bd(a) {
                var b, c, d = this._milliseconds;
                if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + _c(b), "month" === a ? c : c / 12;
                switch (b = this._days + Math.round(ad(this._months)), a) {
                    case "week":
                        return b / 7 + d / 6048e5;
                    case "day":
                        return b + d / 864e5;
                    case "hour":
                        return 24 * b + d / 36e5;
                    case "minute":
                        return 1440 * b + d / 6e4;
                    case "second":
                        return 86400 * b + d / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * b) + d;
                    default:
                        throw new Error("Unknown unit " + a)
                }
            }

            function cd() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12)
            }

            function dd(a) {
                return function() {
                    return this.as(a)
                }
            }

            function ed(a) {
                return a = K(a), this[a + "s"]()
            }

            function fd(a) {
                return function() {
                    return this._data[a]
                }
            }

            function gd() {
                return t(this.days() / 7)
            }

            function hd(a, b, c, d, e) {
                return e.relativeTime(b || 1, !!c, a, d)
            }

            function id(a, b, c) {
                var d = Ob(a).abs(),
                    e = kf(d.as("s")),
                    f = kf(d.as("m")),
                    g = kf(d.as("h")),
                    h = kf(d.as("d")),
                    i = kf(d.as("M")),
                    j = kf(d.as("y")),
                    k = e < lf.s && ["s", e] || f <= 1 && ["m"] || f < lf.m && ["mm", f] || g <= 1 && ["h"] || g < lf.h && ["hh", g] || h <= 1 && ["d"] || h < lf.d && ["dd", h] || i <= 1 && ["M"] || i < lf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
                return k[2] = b, k[3] = +a > 0, k[4] = c, hd.apply(null, k)
            }

            function jd(a) {
                return void 0 === a ? kf : "function" == typeof a && (kf = a, !0)
            }

            function kd(a, b) {
                return void 0 !== lf[a] && (void 0 === b ? lf[a] : (lf[a] = b, !0))
            }

            function ld(a) {
                var b = this.localeData(),
                    c = id(this, !a, b);
                return a && (c = b.pastFuture(+this, c)), b.postformat(c)
            }

            function md() {
                var a, b, c, d = mf(this._milliseconds) / 1e3,
                    e = mf(this._days),
                    f = mf(this._months);
                a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
                var g = c,
                    h = f,
                    i = e,
                    j = b,
                    k = a,
                    l = d,
                    m = this.asSeconds();
                return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
            }
            var nd, od;
            od = Array.prototype.some ? Array.prototype.some : function(a) {
                for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
                    if (d in b && a.call(this, b[d], d, b)) return !0;
                return !1
            };
            var pd = a.momentProperties = [],
                qd = !1,
                rd = {};
            a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
            var sd;
            sd = Object.keys ? Object.keys : function(a) {
                var b, c = [];
                for (b in a) i(a, b) && c.push(b);
                return c
            };
            var td, ud = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                vd = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                wd = "Invalid date",
                xd = "%d",
                yd = /\d{1,2}/,
                zd = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Ad = {},
                Bd = {},
                Cd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                Dd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Ed = {},
                Fd = {},
                Gd = /\d/,
                Hd = /\d\d/,
                Id = /\d{3}/,
                Jd = /\d{4}/,
                Kd = /[+-]?\d{6}/,
                Ld = /\d\d?/,
                Md = /\d\d\d\d?/,
                Nd = /\d\d\d\d\d\d?/,
                Od = /\d{1,3}/,
                Pd = /\d{1,4}/,
                Qd = /[+-]?\d{1,6}/,
                Rd = /\d+/,
                Sd = /[+-]?\d+/,
                Td = /Z|[+-]\d\d:?\d\d/gi,
                Ud = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Vd = /[+-]?\d+(\.\d{1,3})?/,
                Wd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                Xd = {},
                Yd = {},
                Zd = 0,
                $d = 1,
                _d = 2,
                ae = 3,
                be = 4,
                ce = 5,
                de = 6,
                ee = 7,
                fe = 8;
            td = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
                var b;
                for (b = 0; b < this.length; ++b)
                    if (this[b] === a) return b;
                return -1
            }, U("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), U("MMM", 0, 0, function(a) {
                return this.localeData().monthsShort(this, a)
            }), U("MMMM", 0, 0, function(a) {
                return this.localeData().months(this, a)
            }), J("month", "M"), M("month", 8), Z("M", Ld), Z("MM", Ld, Hd), Z("MMM", function(a, b) {
                return b.monthsShortRegex(a)
            }), Z("MMMM", function(a, b) {
                return b.monthsRegex(a)
            }), ba(["M", "MM"], function(a, b) {
                b[$d] = u(a) - 1
            }), ba(["MMM", "MMMM"], function(a, b, c, d) {
                var e = c._locale.monthsParse(a, d, c._strict);
                null != e ? b[$d] = e : m(c).invalidMonth = a
            });
            var ge = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                he = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ie = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                je = Wd,
                ke = Wd;
            U("Y", 0, 0, function() {
                var a = this.year();
                return a <= 9999 ? "" + a : "+" + a
            }), U(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Sd), Z("YY", Ld, Hd), Z("YYYY", Pd, Jd), Z("YYYYY", Qd, Kd), Z("YYYYYY", Qd, Kd), ba(["YYYYY", "YYYYYY"], Zd), ba("YYYY", function(b, c) {
                c[Zd] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
            }), ba("YY", function(b, c) {
                c[Zd] = a.parseTwoDigitYear(b)
            }), ba("Y", function(a, b) {
                b[Zd] = parseInt(a, 10)
            }), a.parseTwoDigitYear = function(a) {
                return u(a) + (u(a) > 68 ? 1900 : 2e3)
            };
            var le = O("FullYear", !0);
            U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Ld), Z("ww", Ld, Hd), Z("W", Ld), Z("WW", Ld, Hd), ca(["w", "ww", "W", "WW"], function(a, b, c, d) {
                b[d.substr(0, 1)] = u(a)
            });
            var me = {
                dow: 0,
                doy: 6
            };
            U("d", 0, "do", "day"), U("dd", 0, 0, function(a) {
                return this.localeData().weekdaysMin(this, a)
            }), U("ddd", 0, 0, function(a) {
                return this.localeData().weekdaysShort(this, a)
            }), U("dddd", 0, 0, function(a) {
                return this.localeData().weekdays(this, a)
            }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Ld), Z("e", Ld), Z("E", Ld), Z("dd", function(a, b) {
                return b.weekdaysMinRegex(a)
            }), Z("ddd", function(a, b) {
                return b.weekdaysShortRegex(a)
            }), Z("dddd", function(a, b) {
                return b.weekdaysRegex(a)
            }), ca(["dd", "ddd", "dddd"], function(a, b, c, d) {
                var e = c._locale.weekdaysParse(a, d, c._strict);
                null != e ? b.d = e : m(c).invalidWeekday = a
            }), ca(["d", "e", "E"], function(a, b, c, d) {
                b[d] = u(a)
            });
            var ne = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                oe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                pe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                qe = Wd,
                re = Wd,
                se = Wd;
            U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function() {
                return "" + Ra.apply(this) + T(this.minutes(), 2)
            }), U("hmmss", 0, 0, function() {
                return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
            }), U("Hmm", 0, 0, function() {
                return "" + this.hours() + T(this.minutes(), 2)
            }), U("Hmmss", 0, 0, function() {
                return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
            }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Ld), Z("h", Ld), Z("HH", Ld, Hd), Z("hh", Ld, Hd), Z("hmm", Md), Z("hmmss", Nd), Z("Hmm", Md), Z("Hmmss", Nd), ba(["H", "HH"], ae), ba(["a", "A"], function(a, b, c) {
                c._isPm = c._locale.isPM(a), c._meridiem = a
            }), ba(["h", "hh"], function(a, b, c) {
                b[ae] = u(a), m(c).bigHour = !0
            }), ba("hmm", function(a, b, c) {
                var d = a.length - 2;
                b[ae] = u(a.substr(0, d)), b[be] = u(a.substr(d)), m(c).bigHour = !0
            }), ba("hmmss", function(a, b, c) {
                var d = a.length - 4,
                    e = a.length - 2;
                b[ae] = u(a.substr(0, d)), b[be] = u(a.substr(d, 2)), b[ce] = u(a.substr(e)), m(c).bigHour = !0
            }), ba("Hmm", function(a, b, c) {
                var d = a.length - 2;
                b[ae] = u(a.substr(0, d)), b[be] = u(a.substr(d))
            }), ba("Hmmss", function(a, b, c) {
                var d = a.length - 4,
                    e = a.length - 2;
                b[ae] = u(a.substr(0, d)), b[be] = u(a.substr(d, 2)), b[ce] = u(a.substr(e))
            });
            var te, ue = /[ap]\.?m?\.?/i,
                ve = O("Hours", !0),
                we = {
                    calendar: ud,
                    longDateFormat: vd,
                    invalidDate: wd,
                    ordinal: xd,
                    ordinalParse: yd,
                    relativeTime: zd,
                    months: he,
                    monthsShort: ie,
                    week: me,
                    weekdays: ne,
                    weekdaysMin: pe,
                    weekdaysShort: oe,
                    meridiemParse: ue
                },
                xe = {},
                ye = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                ze = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Ae = /Z|[+-]\d\d(?::?\d\d)?/,
                Be = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                Ce = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                De = /^\/?Date\((\-?\d+)/i;
            a.createFromInputFallback = x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
                a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
            }), a.ISO_8601 = function() {};
            var Ee = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var a = sb.apply(null, arguments);
                    return this.isValid() && a.isValid() ? a < this ? this : a : o()
                }),
                Fe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var a = sb.apply(null, arguments);
                    return this.isValid() && a.isValid() ? a > this ? this : a : o()
                }),
                Ge = function() {
                    return Date.now ? Date.now() : +new Date
                };
            zb("Z", ":"), zb("ZZ", ""), Z("Z", Ud), Z("ZZ", Ud), ba(["Z", "ZZ"], function(a, b, c) {
                c._useUTC = !0, c._tzm = Ab(Ud, a)
            });
            var He = /([\+\-]|\d\d)/gi;
            a.updateOffset = function() {};
            var Ie = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Je = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            Ob.fn = wb.prototype;
            var Ke = Sb(1, "add"),
                Le = Sb(-1, "subtract");
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Me = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
                return void 0 === a ? this.localeData() : this.locale(a)
            });
            U(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), U(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), yc("gggg", "weekYear"), yc("ggggg", "weekYear"), yc("GGGG", "isoWeekYear"), yc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Sd), Z("g", Sd), Z("GG", Ld, Hd), Z("gg", Ld, Hd), Z("GGGG", Pd, Jd), Z("gggg", Pd, Jd), Z("GGGGG", Qd, Kd), Z("ggggg", Qd, Kd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
                b[d.substr(0, 2)] = u(a)
            }), ca(["gg", "GG"], function(b, c, d, e) {
                c[e] = a.parseTwoDigitYear(b)
            }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Gd), ba("Q", function(a, b) {
                b[$d] = 3 * (u(a) - 1)
            }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Ld), Z("DD", Ld, Hd), Z("Do", function(a, b) {
                return a ? b._ordinalParse : b._ordinalParseLenient
            }), ba(["D", "DD"], _d), ba("Do", function(a, b) {
                b[_d] = u(a.match(Ld)[0], 10)
            });
            var Ne = O("Date", !0);
            U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Od), Z("DDDD", Id), ba(["DDD", "DDDD"], function(a, b, c) {
                c._dayOfYear = u(a)
            }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Ld), Z("mm", Ld, Hd), ba(["m", "mm"], be);
            var Oe = O("Minutes", !1);
            U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Ld), Z("ss", Ld, Hd), ba(["s", "ss"], ce);
            var Pe = O("Seconds", !1);
            U("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), U(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), U(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), U(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), U(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), U(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), U(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Od, Gd), Z("SS", Od, Hd), Z("SSS", Od, Id);
            var Qe;
            for (Qe = "SSSS"; Qe.length <= 9; Qe += "S") Z(Qe, Rd);
            for (Qe = "S"; Qe.length <= 9; Qe += "S") ba(Qe, Hc);
            var Re = O("Milliseconds", !1);
            U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
            var Se = r.prototype;
            Se.add = Ke, Se.calendar = Vb, Se.clone = Wb, Se.diff = bc, Se.endOf = nc, Se.format = fc, Se.from = gc, Se.fromNow = hc, Se.to = ic, Se.toNow = jc, Se.get = R, Se.invalidAt = wc, Se.isAfter = Xb, Se.isBefore = Yb, Se.isBetween = Zb, Se.isSame = $b, Se.isSameOrAfter = _b, Se.isSameOrBefore = ac, Se.isValid = uc, Se.lang = Me, Se.locale = kc, Se.localeData = lc, Se.max = Fe, Se.min = Ee, Se.parsingFlags = vc, Se.set = S, Se.startOf = mc, Se.subtract = Le, Se.toArray = rc, Se.toObject = sc, Se.toDate = qc, Se.toISOString = ec, Se.toJSON = tc, Se.toString = dc, Se.unix = pc, Se.valueOf = oc, Se.creationData = xc, Se.year = le, Se.isLeapYear = ra, Se.weekYear = zc, Se.isoWeekYear = Ac, Se.quarter = Se.quarters = Fc, Se.month = ka, Se.daysInMonth = la, Se.week = Se.weeks = Ba, Se.isoWeek = Se.isoWeeks = Ca, Se.weeksInYear = Cc, Se.isoWeeksInYear = Bc, Se.date = Ne, Se.day = Se.days = Ka, Se.weekday = La, Se.isoWeekday = Ma, Se.dayOfYear = Gc, Se.hour = Se.hours = ve, Se.minute = Se.minutes = Oe, Se.second = Se.seconds = Pe, Se.millisecond = Se.milliseconds = Re, Se.utcOffset = Db, Se.utc = Fb, Se.local = Gb, Se.parseZone = Hb, Se.hasAlignedHourOffset = Ib, Se.isDST = Jb, Se.isLocal = Lb, Se.isUtcOffset = Mb, Se.isUtc = Nb, Se.isUTC = Nb, Se.zoneAbbr = Ic, Se.zoneName = Jc, Se.dates = x("dates accessor is deprecated. Use date instead.", Ne), Se.months = x("months accessor is deprecated. Use month instead", ka), Se.years = x("years accessor is deprecated. Use year instead", le), Se.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Eb), Se.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Kb);
            var Te = Se,
                Ue = C.prototype;
            Ue.calendar = D, Ue.longDateFormat = E, Ue.invalidDate = F, Ue.ordinal = G, Ue.preparse = Mc, Ue.postformat = Mc, Ue.relativeTime = H, Ue.pastFuture = I, Ue.set = A, Ue.months = fa, Ue.monthsShort = ga, Ue.monthsParse = ia, Ue.monthsRegex = na, Ue.monthsShortRegex = ma, Ue.week = ya, Ue.firstDayOfYear = Aa, Ue.firstDayOfWeek = za, Ue.weekdays = Fa, Ue.weekdaysMin = Ha, Ue.weekdaysShort = Ga, Ue.weekdaysParse = Ja, Ue.weekdaysRegex = Na, Ue.weekdaysShortRegex = Oa, Ue.weekdaysMinRegex = Pa, Ue.isPM = Va, Ue.meridiem = Wa, $a("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(a) {
                    var b = a % 10,
                        c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                }
            }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
            var Ve = Math.abs,
                We = dd("ms"),
                Xe = dd("s"),
                Ye = dd("m"),
                Ze = dd("h"),
                $e = dd("d"),
                _e = dd("w"),
                af = dd("M"),
                bf = dd("y"),
                cf = fd("milliseconds"),
                df = fd("seconds"),
                ef = fd("minutes"),
                ff = fd("hours"),
                gf = fd("days"),
                hf = fd("months"),
                jf = fd("years"),
                kf = Math.round,
                lf = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                mf = Math.abs,
                nf = wb.prototype;
            nf.abs = Vc, nf.add = Xc, nf.subtract = Yc, nf.as = bd, nf.asMilliseconds = We, nf.asSeconds = Xe, nf.asMinutes = Ye, nf.asHours = Ze, nf.asDays = $e, nf.asWeeks = _e, nf.asMonths = af, nf.asYears = bf, nf.valueOf = cd, nf._bubble = $c, nf.get = ed, nf.milliseconds = cf, nf.seconds = df, nf.minutes = ef, nf.hours = ff, nf.days = gf, nf.weeks = gd, nf.months = hf, nf.years = jf, nf.humanize = ld, nf.toISOString = md, nf.toString = md, nf.toJSON = md, nf.locale = kc, nf.localeData = lc, nf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", md), nf.lang = Me, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Sd), Z("X", Vd), ba("X", function(a, b, c) {
                c._d = new Date(1e3 * parseFloat(a, 10))
            }), ba("x", function(a, b, c) {
                c._d = new Date(u(a))
            }), a.version = "2.15.0", c(sb), a.fn = Te, a.min = ub, a.max = vb, a.now = Ge, a.utc = k, a.unix = Kc, a.months = Qc, a.isDate = g, a.locale = $a, a.invalid = o, a.duration = Ob, a.isMoment = s, a.weekdays = Sc, a.parseZone = Lc, a.localeData = bb, a.isDuration = xb, a.monthsShort = Rc, a.weekdaysMin = Uc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Tc, a.normalizeUnits = K, a.relativeTimeRounding = jd, a.relativeTimeThreshold = kd, a.calendarFormat = Ub, a.prototype = Te;
            var of = a;
            return of
        })
    }, {}],
    2: [function(a, b, c) {
        b.exports = function(a, b) {
            function c() {
                y = D = z = A = B = C = K
            }

            function d(a, b) {
                for (key in b) b.hasOwnProperty(key) && (a[key] = b[key])
            }

            function e(a) {
                return parseFloat(a) || 0
            }

            function f() {
                F = {
                    top: b.pageYOffset,
                    left: b.pageXOffset
                }
            }

            function g() {
                return b.pageXOffset != F.left ? (f(), void z()) : void(b.pageYOffset != F.top && (f(), i()))
            }

            function h(a) {
                setTimeout(function() {
                    b.pageYOffset != F.top && (F.top = b.pageYOffset, i())
                }, 0)
            }

            function i() {
                for (var a = H.length - 1; a >= 0; a--) j(H[a])
            }

            function j(a) {
                if (a.inited) {
                    var b = F.top <= a.limit.start ? 0 : F.top >= a.limit.end ? 2 : 1;
                    a.mode != b && p(a, b)
                }
            }

            function k() {
                for (var a = H.length - 1; a >= 0; a--)
                    if (H[a].inited) {
                        var b = Math.abs(t(H[a].clone) - H[a].docOffsetTop),
                            c = Math.abs(H[a].parent.node.offsetHeight - H[a].parent.height);
                        if (b >= 2 || c >= 2) return !1
                    }
                return !0
            }

            function l(a) {
                isNaN(parseFloat(a.computed.top)) || a.isCell || (a.inited = !0, a.clone || q(a), "absolute" != a.parent.computed.position && "relative" != a.parent.computed.position && (a.parent.node.style.position = "relative"), j(a), a.parent.height = a.parent.node.offsetHeight, a.docOffsetTop = t(a.clone))
            }

            function m(a) {
                var b = !0;
                a.clone && r(a), d(a.node.style, a.css);
                for (var c = H.length - 1; c >= 0; c--)
                    if (H[c].node !== a.node && H[c].parent.node === a.parent.node) {
                        b = !1;
                        break
                    }
                b && (a.parent.node.style.position = a.parent.css.position), a.mode = -1
            }

            function n() {
                for (var a = H.length - 1; a >= 0; a--) l(H[a])
            }

            function o() {
                for (var a = H.length - 1; a >= 0; a--) m(H[a])
            }

            function p(a, b) {
                var c = a.node.style;
                switch (b) {
                    case 0:
                        c.position = "absolute", c.left = a.offset.left + "px", c.right = a.offset.right + "px", c.top = a.offset.top + "px", c.bottom = "auto", c.width = "auto", c.marginLeft = 0, c.marginRight = 0, c.marginTop = 0;
                        break;
                    case 1:
                        c.position = "fixed", c.left = a.box.left + "px", c.right = a.box.right + "px", c.top = a.css.top, c.bottom = "auto", c.width = "auto", c.marginLeft = 0, c.marginRight = 0, c.marginTop = 0;
                        break;
                    case 2:
                        c.position = "absolute", c.left = a.offset.left + "px", c.right = a.offset.right + "px", c.top = "auto", c.bottom = 0, c.width = "auto", c.marginLeft = 0, c.marginRight = 0
                }
                a.mode = b
            }

            function q(a) {
                a.clone = document.createElement("div");
                var b = a.node.nextSibling || a.node,
                    c = a.clone.style;
                c.height = a.height + "px", c.width = a.width + "px", c.marginTop = a.computed.marginTop, c.marginBottom = a.computed.marginBottom, c.marginLeft = a.computed.marginLeft, c.marginRight = a.computed.marginRight, c.padding = c.border = c.borderSpacing = 0, c.fontSize = "1em", c.position = "static", c.cssFloat = a.computed.cssFloat, a.node.parentNode.insertBefore(a.clone, b)
            }

            function r(a) {
                a.clone.parentNode.removeChild(a.clone), a.clone = void 0
            }

            function s(a) {
                var b = getComputedStyle(a),
                    c = a.parentNode,
                    d = getComputedStyle(c),
                    f = a.style.position;
                a.style.position = "relative";
                var g = {
                        top: b.top,
                        marginTop: b.marginTop,
                        marginBottom: b.marginBottom,
                        marginLeft: b.marginLeft,
                        marginRight: b.marginRight,
                        cssFloat: b.cssFloat
                    },
                    h = {
                        top: e(b.top),
                        marginBottom: e(b.marginBottom),
                        paddingLeft: e(b.paddingLeft),
                        paddingRight: e(b.paddingRight),
                        borderLeftWidth: e(b.borderLeftWidth),
                        borderRightWidth: e(b.borderRightWidth)
                    };
                a.style.position = f;
                var i = {
                        position: a.style.position,
                        top: a.style.top,
                        bottom: a.style.bottom,
                        left: a.style.left,
                        right: a.style.right,
                        width: a.style.width,
                        marginTop: a.style.marginTop,
                        marginLeft: a.style.marginLeft,
                        marginRight: a.style.marginRight
                    },
                    j = u(a),
                    k = u(c),
                    l = {
                        node: c,
                        css: {
                            position: c.style.position
                        },
                        computed: {
                            position: d.position
                        },
                        numeric: {
                            borderLeftWidth: e(d.borderLeftWidth),
                            borderRightWidth: e(d.borderRightWidth),
                            borderTopWidth: e(d.borderTopWidth),
                            borderBottomWidth: e(d.borderBottomWidth)
                        }
                    },
                    m = {
                        node: a,
                        box: {
                            left: j.win.left,
                            right: J.clientWidth - j.win.right
                        },
                        offset: {
                            top: j.win.top - k.win.top - l.numeric.borderTopWidth,
                            left: j.win.left - k.win.left - l.numeric.borderLeftWidth,
                            right: -j.win.right + k.win.right - l.numeric.borderRightWidth
                        },
                        css: i,
                        isCell: "table-cell" == b.display,
                        computed: g,
                        numeric: h,
                        width: j.win.right - j.win.left,
                        height: j.win.bottom - j.win.top,
                        mode: -1,
                        inited: !1,
                        parent: l,
                        limit: {
                            start: j.doc.top - h.top,
                            end: k.doc.top + c.offsetHeight - l.numeric.borderBottomWidth - a.offsetHeight - h.top - h.marginBottom
                        }
                    };
                return m
            }

            function t(a) {
                for (var b = 0; a;) b += a.offsetTop, a = a.offsetParent;
                return b
            }

            function u(a) {
                var c = a.getBoundingClientRect();
                return {
                    doc: {
                        top: c.top + b.pageYOffset,
                        left: c.left + b.pageXOffset
                    },
                    win: c
                }
            }

            function v() {
                G = setInterval(function() {
                    !k() && z()
                }, 500)
            }

            function w() {
                clearInterval(G)
            }

            function x() {
                I && (document[L] ? w() : v())
            }

            function y() {
                I || (f(), n(), b.addEventListener("scroll", g), b.addEventListener("wheel", h), b.addEventListener("resize", z), b.addEventListener("orientationchange", z), a.addEventListener(M, x), v(), I = !0)
            }

            function z() {
                if (I) {
                    o();
                    for (var a = H.length - 1; a >= 0; a--) H[a] = s(H[a].node);
                    n()
                }
            }

            function A() {
                b.removeEventListener("scroll", g), b.removeEventListener("wheel", h), b.removeEventListener("resize", z), b.removeEventListener("orientationchange", z), a.removeEventListener(M, x), w(), I = !1
            }

            function B() {
                A(), o()
            }

            function C() {
                for (B(); H.length;) H.pop()
            }

            function D(a) {
                for (var b = H.length - 1; b >= 0; b--)
                    if (H[b].node === a) return;
                var c = s(a);
                H.push(c), I ? l(c) : y()
            }

            function E(a) {
                for (var b = H.length - 1; b >= 0; b--) H[b].node === a && (m(H[b]), H.splice(b, 1))
            }
            a || (a = document), b || (b = window);
            var F, G, H = [],
                I = !1,
                J = a.documentElement,
                K = function() {},
                L = "hidden",
                M = "visibilitychange";
            void 0 !== a.webkitHidden && (L = "webkitHidden", M = "webkitvisibilitychange"), b.getComputedStyle || c();
            for (var N = ["", "-webkit-", "-moz-", "-ms-"], O = document.createElement("div"), P = N.length - 1; P >= 0; P--) {
                try {
                    O.style.position = N[P] + "sticky"
                } catch (Q) {}
                "" != O.style.position && c()
            }
            return f(), {
                stickies: H,
                add: D,
                remove: E,
                init: y,
                rebuild: z,
                pause: A,
                stop: B,
                kill: C
            }
        }
    }, {}],
    3: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var e = a("./utils/helpers"),
            f = d(e),
            g = a("./utils/events"),
            h = d(g),
            i = a("jquery"),
            j = a("handlebars"),
            k = (a("./templates/templates")(j), a("fg-loadcss")),
            l = a("moment");
        a("respimage"), a("lazysizes"), c["default"] = function() {
            var a = window,
                b = a.App = f["default"].extend(window.App || {}, {
                    Vent: i(document)
                });
            b.$ = i, b.document = document, b.root = document.documentElement, b.$root = i(document.documentElement), b.EVENTS = h["default"], b.sizes = b.sizes || {}, b.Handlebars = j, b.loadCSS = k.loadCSS, b.Moment = l, b.ooyalaPlayer = b.ooyalaPlayer || window.OO || {}, b.ooyalaPlayerInitialized = !1, b.googletag = b.googletag || window.googletag || {}, b.googletag.cmd = b.googletag.cmd || [], b.googletagInitialized = !1, b.cX = b.cX || window.cX || {}, b.cX.callQueue = b.cX.callQueue || [], b.cxenseInitialized = !1, b.support = b.support || {}, b.support.touch = f["default"].isTouch(), b.support.passiveEvents = f["default"].supportPassiveEvents(), b.clickHandler = f["default"].clickHandler(), b.blockScrollingEvents = !1, b.version = "0.0.1";
            var c = document.querySelectorAll("head");
            b.currentMedia = requestAnimationFrame(function() {
                window.getComputedStyle(c[0], null).getPropertyValue("font-family")
            }), b.screenSize = {
                width: a.innerWidth,
                height: a.innerHeight
            }, window.lazySizesConfig = window.lazySizesConfig || {}, lazySizesConfig.loadMode = 3, document.querySelectorAll("html")[0].className.indexOf("ie9") < 0 ? document.location.search.indexOf("devmode") < 0 ? console.log = console.warn = function() {} : b.devmode = !0 : window.console || (window.console = {}, console.log = console.warn = function() {}), i(window).on("resize", f["default"].throttle(function(a) {
                var c = window.innerWidth;
                c != b.screenSize.width && (b.screenSize.width = c, b.Vent.trigger(b.EVENTS.resize, a))
            }, 10)), b.mediaQuery = {
                mobile: "(max-width:767px)",
                tablet: "(min-width: 768px) and (max-width:991px)",
                desktop: "(min-width: 992px)"
            };
            var d = [window.matchMedia(b.mediaQuery.mobile), window.matchMedia(b.mediaQuery.tablet), window.matchMedia(b.mediaQuery.desktop)];
            b.currentMedia = "";
            for (var e = function(a) {
                    var c = b.currentMedia;
                    d[0].matches && (b.currentMedia = "mobile"), d[1].matches && (b.currentMedia = "tablet"), d[2].matches && (b.currentMedia = "desktop"), c != b.currentMedia && b.Vent.trigger(b.EVENTS.mediachange, {
                        type: b.EVENTS.mediachange,
                        currentMedia: b.currentMedia,
                        oldMedia: c
                    })
                }, g = 0; g < d.length; g++) e(d[g]), d[g].addListener(e);
            var m = i("body"),
                n = m.outerHeight(),
                o = n,
                p = document.body,
                q = new MutationObserver(function(a) {
                    a.forEach(function(a) {
                        o = m.outerHeight(), o !== n && (n = o, b.Vent.trigger(b.EVENTS.bodyHeightChanged))
                    })
                }),
                r = {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                };
            return q.observe(p, r), b
        }.call(void 0)
    }, {
        "./templates/templates": 38,
        "./utils/events": 39,
        "./utils/helpers": 44,
        "fg-loadcss": "fg-loadcss",
        handlebars: "handlebars",
        jquery: "jquery",
        lazysizes: "lazysizes",
        moment: 1,
        respimage: "respimage"
    }],
    4: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        var f = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            g = a("./app"),
            h = d(g),
            i = a("./utils/helpers"),
            j = d(i),
            k = a("./modules/test-module"),
            l = d(k),
            m = a("./vendor/smartbanner/smartbanner.js"),
            n = d(m),
            o = a("./modules/navigation/navigation-desktop"),
            p = d(o),
            q = a("./modules/navigation/navigation-mobile"),
            r = d(q),
            s = a("./modules/navigation/navigation-fixed-controller"),
            t = d(s),
            u = a("./modules/search-overlay/search-overlay"),
            v = d(u),
            w = a("./modules/teaser/teaser"),
            x = d(w),
            y = a("./modules/section/section"),
            z = d(y),
            A = a("./modules/filter/filter"),
            B = d(A),
            C = a("./modules/footer/footer"),
            D = d(C),
            E = a("./modules/search-form/search-form"),
            F = d(E),
            G = a("./modules/sharing/sharing"),
            H = d(G),
            I = a("./modules/article/article"),
            J = d(I),
            K = a("./modules/video/video"),
            L = d(K),
            M = a("./modules/slider/slider"),
            N = d(M),
            O = a("./modules/scroller/scroller"),
            P = d(O),
            Q = a("./modules/modal/modal-gallery"),
            R = d(Q),
            S = a("./modules/modal/modal-gallery-extension"),
            T = d(S),
            U = a("./modules/cta/cta"),
            V = d(U),
            W = a("./modules/news-alert/news-alert"),
            X = d(W),
            Y = a("./modules/cxense-include/cxense-include"),
            Z = d(Y),
            $ = a("./modules/cxense-include/cxense-testing"),
            _ = d($),
            aa = a("./modules/video-stage/video-stage"),
            ba = d(aa),
            ca = a("./modules/video/video-section"),
            da = d(ca),
            ea = a("./modules/twitter-include/twitter-include"),
            fa = d(ea),
            ga = a("./modules/pagination/pagination"),
            ha = d(ga),
            ia = a("./modules/tabtree/tabtree"),
            ja = d(ia),
            ka = a("./modules/newsletter/newsletter"),
            la = d(ka),
            ma = a("./modules/compact-layout/compact-layout"),
            na = d(ma),
            oa = a("./modules/subnav/subnav"),
            pa = d(oa),
            qa = a("./modules/endless-scroll/endless-scroll"),
            ra = d(qa),
            sa = a("./modules/docked-video/docked-video"),
            ta = d(sa),
            ua = a("stickyfill"),
            va = h["default"].$,
            wa = function() {
                function a() {
                    e(this, a), this.initialize()
                }
                return f(a, [{
                    key: "initialize",
                    value: function() {
                        console.log("App initialized with version: ", h["default"].version), va("html").removeClass("no-js").addClass("js"), h["default"].support.touch ? va("html").addClass("touch") : va("html").addClass("no-touch"), h["default"].Vent.on(h["default"].EVENTS.DOMredirect, function(a) {
                            if (!a && !a.url) throw new Error("Object is not defined. Please provide an url in your object!");
                            window.location.href = String(a.url)
                        })
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        j["default"].saveDOM()
                    }
                }, {
                    key: "render",
                    value: function(a) {
                        va(".sharing__link", a).on("click", function(a) {
                            a.preventDefault(), a.stopPropagation(), va(".pw-button", this.nextElementSibling).get(0).click()
                        }), j["default"].loadModule({
                            domName: "teaser",
                            module: x["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "modal-gallery",
                            module: R["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "modal-gallery-extension",
                            module: T["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "news-alert",
                            module: X["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "section",
                            module: z["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "footer",
                            module: D["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "sharing",
                            module: H["default"],
                            context: a,
                            render: !1
                        }), j["default"].loadModule({
                            domName: "article",
                            module: J["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "video",
                            module: L["default"],
                            context: a,
                            render: !1
                        }), j["default"].loadModule({
                            domName: "slider",
                            module: N["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "cxense-include",
                            module: Z["default"],
                            context: a,
                            render: !1
                        }), j["default"].loadModule({
                            domName: "cxense-testing",
                            module: _["default"],
                            context: a,
                            render: !1
                        }), j["default"].loadModule({
                            domName: "cta",
                            module: V["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "subnav",
                            module: pa["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "video-stage",
                            module: ba["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "twitter-include",
                            module: fa["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "scroller",
                            module: P["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "tabtree",
                            module: ja["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "pagination",
                            module: ha["default"],
                            context: a,
                            render: !1
                        }), j["default"].loadModule({
                            domName: "filter",
                            module: B["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "search-form",
                            module: F["default"],
                            context: a,
                            render: !1
                        }), j["default"].loadModule({
                            domName: "test-module",
                            module: l["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "navigation-fixed-controller",
                            module: t["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "navigation-desktop",
                            module: p["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "navigation-mobile",
                            module: r["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "search-overlay",
                            module: v["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "video-section",
                            module: da["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "newsletter",
                            module: la["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "compact-layout",
                            module: na["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "endless-scroll",
                            module: ra["default"],
                            context: a
                        }), j["default"].loadModule({
                            domName: "docked-video",
                            module: ta["default"],
                            context: a
                        })
                    }
                }]), a
            }();
        document.addEventListener("DOMContentLoaded", function() {
            if (h["default"].smartbanner = !1, /Android/i.test(window.navigator.userAgent)) {
                var a = new n["default"];
                0 !== Object.keys(a.options).length && a.publish()
            }
            var b = new wa;
            h["default"].Vent.on(h["default"].EVENTS.DOMchanged, function(a) {
                var c = a.target;
                b.preRender(), b.render(c), grunticon.svgLoadedCallback()
            }), b.preRender(), b.render(document);
            for (var c = ua(), d = document.getElementsByClassName("is-sticky-element"), e = d.length - 1; e >= 0; e--) c.add(d[e])
        })
    }, {
        "./app": 3,
        "./modules/article/article": 6,
        "./modules/compact-layout/compact-layout": 7,
        "./modules/cta/cta": 8,
        "./modules/cxense-include/cxense-include": 9,
        "./modules/cxense-include/cxense-testing": 10,
        "./modules/docked-video/docked-video": 11,
        "./modules/endless-scroll/endless-scroll": 12,
        "./modules/filter/filter": 13,
        "./modules/footer/footer": 14,
        "./modules/modal/modal-gallery": 16,
        "./modules/modal/modal-gallery-extension": 15,
        "./modules/navigation/navigation-desktop": 18,
        "./modules/navigation/navigation-fixed-controller": 19,
        "./modules/navigation/navigation-mobile": 20,
        "./modules/news-alert/news-alert": 21,
        "./modules/newsletter/newsletter": 22,
        "./modules/pagination/pagination": 23,
        "./modules/scroller/scroller": 24,
        "./modules/search-form/search-form": 25,
        "./modules/search-overlay/search-overlay": 26,
        "./modules/section/section": 27,
        "./modules/sharing/sharing": 28,
        "./modules/slider/slider": 29,
        "./modules/subnav/subnav": 30,
        "./modules/tabtree/tabtree": 31,
        "./modules/teaser/teaser": 32,
        "./modules/test-module": 33,
        "./modules/twitter-include/twitter-include": 34,
        "./modules/video-stage/video-stage": 35,
        "./modules/video/video": 37,
        "./modules/video/video-section": 36,
        "./utils/helpers": 44,
        "./vendor/smartbanner/smartbanner.js": 48,
        stickyfill: 2
    }],
    5: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var f = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            g = a("../../utils/helpers"),
            h = d(g),
            i = a("../../app"),
            j = d(i),
            k = j["default"].$,
            l = function() {
                function a() {
                    var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e(this, a), this.el = b.el, this.$el = k(b.el), this.options = c, this._options = b.options, this.initialize()
                }
                return f(a, [{
                    key: "initialize",
                    value: function() {
                        this.preRender(), this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {}
                }, {
                    key: "preRender",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {}
                }, {
                    key: "_options",
                    get: function() {
                        return this.options
                    },
                    set: function(a) {
                        this.options = h["default"].defaults(a || {}, this.options)
                    }
                }]), a
            }();
        l.classMixin = h["default"].classMixin, c["default"] = l
    }, {
        "../../app": 3,
        "../../utils/helpers": 44
    }],
    6: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function r(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : r(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = d(j),
            l = a("../../app"),
            m = d(l),
            n = a("../_global/module"),
            o = d(n),
            p = m["default"].$,
            q = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            scrollDirectionClasses: {
                                up: "is-scroll-up",
                                down: "is-scroll-down"
                            },
                            fixedPositionClass: "is-article-bar-visible",
                            metaInfoSelector: ".article__meta-info",
                            articleFooterSelector: ".article__footer",
                            headerSelector: ".header__perspective-wrapper",
                            stickyWrapper: ".article__meta-info-wrapper"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return m["default"].registerModule && m["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        console.log("init Article"), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this), this.isFixed = !1, this.currentScrollY = 0, this.lastScrollY = 0, this.currentScrollDirection = "", this.lastScrollDirection = "", this.$articleFooter = p(this.options.articleFooterSelector, this.el), this.$stickyWrapper = p(this.options.stickyWrapper, this.el), this.$html = m["default"].$root, this.setUnsetFix(), "desktop" === m["default"].currentMedia && this.setStickyWrapperHeight()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.onMediaChange.bind(this),
                            b = this.onBodyHeightChange.bind(this);
                        m["default"].Vent.on(m["default"].EVENTS.bodyHeightChanged, b), m["default"].Vent.on(m["default"].EVENTS.mediachange, a), p(window).on("scroll", k["default"].throttle(p.proxy(this.handleScrolling, this), 50))
                    }
                }, {
                    key: "onMediaChange",
                    value: function() {
                        "desktop" !== m["default"].currentMedia ? this.$stickyWrapper.css({
                            height: ""
                        }) : this.setStickyWrapperHeight()
                    }
                }, {
                    key: "onBodyHeightChange",
                    value: function() {
                        "desktop" === m["default"].currentMedia && this.setStickyWrapperHeight()
                    }
                }, {
                    key: "setStickyWrapperHeight",
                    value: function() {
                        var a = this.$articleFooter.offset().top,
                            b = this.$stickyWrapper.offset().top,
                            c = a - b;
                        this.$stickyWrapper.css({
                            height: c + "px"
                        })
                    }
                }, {
                    key: "handleScrolling",
                    value: function() {
                        m["default"].blockScrollingEvents || (this.updateScrollDirection(), this.setUnsetFix())
                    }
                }, {
                    key: "getScrollDirection",
                    value: function(a, b) {
                        var c = "";
                        return c = a > b ? "up" : "down"
                    }
                }, {
                    key: "updateScrollDirection",
                    value: function() {
                        var a = window.scrollY,
                            b = this.getScrollDirection(this.lastScrollY, a);
                        this.lastScrollDirection == b || m["default"].blockScrollingEvents || (this.$html.removeClass(this.options.scrollDirectionClasses[this.lastScrollDirection]), this.$html.addClass(this.options.scrollDirectionClasses[b])), this.lastScrollDirection = b, this.currentScrollDirection = this.lastScrollDirection
                    }
                }, {
                    key: "setUnsetFix",
                    value: function() {
                        var a = window.scrollY;
                        a >= m["default"].articleStartY && !this.isFixed && !m["default"].blockScrollingEvents ? (this.isFixed = !0, this.$html.addClass(this.options.fixedPositionClass)) : a < m["default"].articleStartY && this.isFixed && (this.isFixed = !1, this.$html.removeClass(this.options.fixedPositionClass)), this.lastScrollY = a, this.currentScrollY = this.lastScrollY
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Article",
                            version: "0.1.0"
                        }
                    }
                }]), b
            }(o["default"]);
        c["default"] = q
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    7: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers-cookie"),
            j = d(i),
            k = a("../../app"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {},
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(Pagination.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.$el.on("submit", function(a) {
                            a.preventDefault(), a.stopImmediatePropagation()
                        }), this.$toggle = o('input[type="checkbox"]', this.el), j["default"].hasCookie("compactlayout") && this.$toggle.prop("checked", !0), this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this,
                            b = function(b) {
                                b ? (a.writeCookie(), a.reloadPage()) : (a.deleteCookie(), a.reloadPage())
                            };
                        this.$toggle.on("change", function() {
                            b(o(this).prop("checked"))
                        })
                    }
                }, {
                    key: "writeCookie",
                    value: function() {
                        j["default"].setCookie("compactlayout", !0, 1 / 0, "/")
                    }
                }, {
                    key: "deleteCookie",
                    value: function() {
                        j["default"].setCookie("compactlayout", !0, -1, "/")
                    }
                }, {
                    key: "reloadPage",
                    value: function() {
                        setTimeout(function() {
                            window.location.reload(!0)
                        }, 1e3)
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "CompactLayout",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers-cookie": 40,
        "../_global/module": 5
    }],
    8: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function q(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : q(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = (d(j), a("../../app")),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            activeClass: "is-active",
                            closeLabel: null,
                            ctaContent: '[data-js-atom="cta-content"]',
                            globalEvent: "cta:click",
                            openLabel: null
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.$ctaContent = o(this.options.ctaContent, this.$el), this.$el.is("." + this.options.activeClass) && (this.active = !0), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.onClick.bind(this);
                        this.$el.on(l["default"].clickHandler, a)
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.options.closeLabel && this.$ctaContent.text(this.options.closeLabel), this.$el.removeClass(this.options.activeClass), this.active = !1
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.options.openLabel && this.$ctaContent.text(this.options.openLabel), this.$el.addClass(this.options.activeClass), this.active = !0
                    }
                }, {
                    key: "onClick",
                    value: function(a) {
                        a.preventDefault(), "function" == typeof this.clickHandler ? (this.active ? this.close() : this.open(), this.clickHandler.apply(this, arguments)) : console.log("You need to inherit from " + this + " and override the onClick method or pass a function to " + this + ".clickHandler !")
                    }
                }, {
                    key: "clickHandler",
                    value: function() {
                        l["default"].Vent.trigger(this.options.globalEvent, {
                            el: this.el,
                            isActive: this.active,
                            options: this.options
                        })
                    }
                }, {
                    key: "active",
                    get: function() {
                        return this._active
                    },
                    set: function(a) {
                        this._active = a
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "CTA",
                            version: "2.0.1",
                            vc: !0,
                            mod: !1
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    9: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function s(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : s(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = (d(j), a("../../utils/helpers-cxense")),
            l = d(k),
            m = a("../../app"),
            n = d(m),
            o = a("../_global/module"),
            p = d(o),
            q = n["default"].$,
            r = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            selectorContent: '[data-js-atom~="cxense-include-content"]',
                            selectorTimeElement: '[data-js-atom="time"]',
                            wrapWithSlider: !1
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return n["default"].registerModule && n["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        return this.options.widgetID ? this.options.cxenseTemplate ? (this.$content = this.$el.find(this.options.selectorContent), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this), window.cX = window.cX || {}, window.cX.callQueue = window.cX.callQueue || [], void(window.location.search.indexOf("cxense") < 0 ? this.getCxenseContent() : this.getLocalJSON())) : void console.warn("CxenseInclude: No cxenseTemplate provided.", this.$el) : void console.warn("CxenseInclude: No widgetID provided.", this.$el)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {}
                }, {
                    key: "initializeCxense",
                    value: function() {
                        this.getCxenseContent()
                    }
                }, {
                    key: "getCxenseContent",
                    value: function() {
                        var a = this;
                        window.cX.callQueue.push(["insertWidget", {
                            widgetId: this.options.widgetID,
                            renderFunction: function(b) {
                                console.log(b), a.render(b)
                            },
                            useSecureUrls: !0
                        }])
                    }
                }, {
                    key: "getLocalJSON",
                    value: function() {
                        var a = this,
                            b = "http://www.mocky.io/v2/58b05f781200004e18742461";
                        q.ajax({
                            url: b,
                            type: "GET",
                            dataType: "jsonp"
                        }).done(function(b) {
                            a.render(b)
                        }).fail(function() {
                            console.warn("Server Error")
                        })
                    }
                }, {
                    key: "render",
                    value: function(a) {
                        var b = void 0,
                            c = void 0,
                            d = void 0;
                        if (c = this, !a.response) return void console.warn("CxenseInclude: No response provided by cXense with widgetID: " + this.options.widgetID);
                        var e = l["default"].mappingDataToObject(a);
                        if (this.template = this.options.cxenseTemplate, "CXENSEINCLUDESECTION" === this.template)
                            for (var f = 0; f < e.items.length; f++) e.items[f] = l["default"].prepareImage(e.items[f], "default", "default");
                        if ("CXENSEINCLUDESECTIONMOSTREAD" === this.template || "CXENSEINCLUDESECTIONMOSTREADSMALL" === this.template) {
                            e.items[0] = l["default"].prepareImage(e.items[0], "large", "large"), e.items[0].shareToogleExtraClass = "is-color-light-mix", e.items[0].teaserClasses = "is-background-dark-mix", delete e.items[0].time;
                            for (var f = 1; f < e.items.length; f++) delete e.items[f].time, e.items[f] = l["default"].prepareImage(e.items[f], "small", "small")
                        }
                        if ("CXENSEINCLUDESCROLLERVIDEO" === this.template) {
                            for (var f = 0; f < e.items.length; f++) e.items[f] = l["default"].prepareImage(e.items[f], "default-scroller", "default", "is-no-margin is-without-category is-scroller");
                            e = l["default"].addScrollerOptionsToData(e, "video")
                        }
                        if ("CXENSEINCLUDESCROLLERVIDEORELATED" === this.template) {
                            for (var f = 0; f < e.items.length; f++) e.items[f] = l["default"].prepareImage(e.items[f], "default-scroller", "default", "is-no-margin is-on-dark-background is-scroller"), e.items[f].shareToogleExtraClass = "is-on-dark-background";
                            e = l["default"].addScrollerOptionsToData(e, "video-related")
                        }
                        if ("CXENSEINCLUDESECTIONWITHLARGETEASER" === this.template) {
                            delete e.items[0].time, e.items[0] = l["default"].prepareImage(e.items[0], "large-col-12", "large", "is-background-light-mix"), e.items[0].shareToogleExtraClass = "is-on-dark-background", e.pageUrl = window.location.href, e.isLiveEnvironment = e.pageUrl.indexOf("www.channelnewsasia.com") != -1;
                            for (var f = 1; f < e.items.length; f++) delete e.items[f].time, e.items[f] = l["default"].prepareImage(e.items[f], "default", "default");
                            this.options.sponsoredTeaser && e.items.splice(2, 0, this.options.sponsoredTeaser), console.log("largeTeaser", this.options.cxenseTemplate), console.log(e)
                        }
                        if ("CXENSEINCLUDESECTIONWITHOUTLARGETEASER" === this.template)
                            for (var f = 0; f < e.items.length; f++) {
                                var g = {};
                                g.src = e.items[f].image, e.items[f].image = g
                            }
                        if (d = window.App.Templates[this.options.cxenseTemplate], b = q.parseHTML(d(e)), this.$content.html(b), "CXENSEINCLUDESCROLLERVIDEO" === this.template) {
                            var h = this.$content.closest(".tabtree__tab-panel");
                            if (0 != h.length) {
                                var i = h.attr("aria-hidden");
                                i && (h.attr("aria-hidden", !1), setTimeout(function() {
                                    h.attr("aria-hidden", !0)
                                }, 1))
                            }
                        }
                        if (this.$content.trigger(n["default"].EVENTS.DOMchanged), n["default"].Vent.trigger(n["default"].EVENTS.cxenseInclude.contentUpdated), "CXENSEINCLUDESECTIONWITHLARGETEASER" === this.options.cxenseTemplate) {
                            var j = document.createElement("script");
                            j.type = "text/javascript", j.async = !0, j.src = "//widgets.outbrain.com/outbrain.js";
                            var k = document.getElementsByTagName("script")[0];
                            k.parentNode.insertBefore(j, k)
                        }
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "CxenseInclude",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(p["default"]);
        c["default"] = r
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../../utils/helpers-cxense": 41,
        "../_global/module": 5
    }],
    10: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers-cxense"),
            j = d(i),
            k = a("../../app"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {},
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(CxenseInclude.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        console.log("init cxense testing"), this.$content = o(".content-replace", this.el), this.template = this.$el.data("template"), this.getLocalJSON()
                    }
                }, {
                    key: "getLocalJSON",
                    value: function() {
                        var a = this,
                            b = "http://www.mocky.io/v2/58c28da011000054105abc31";
                        o.ajax({
                            url: b,
                            type: "GET",
                            dataType: "json"
                        }).done(function(b) {
                            a.renderCxenseContent(b)
                        }).fail(function() {
                            console.warn("Server Error")
                        })
                    }
                }, {
                    key: "renderCxenseContent",
                    value: function(a) {
                        var b = j["default"].mappingDataToObject(a);
                        if ("CXENSEINCLUDESECTION" === this.template)
                            for (var c = 0; c < b.items.length; c++) b.items[c] = j["default"].prepareImage(b.items[c], "default", "default");
                        if ("CXENSEINCLUDESECTIONMOSTREAD" === this.template || "CXENSEINCLUDESECTIONMOSTREADSMALL" === this.template) {
                            b.items[0] = j["default"].prepareImage(b.items[0], "large", "large"), b.items[0].shareToogleExtraClass = "is-color-light-mix", b.items[0].teaserClasses = "is-background-dark-mix", delete b.items[0].time;
                            for (var c = 1; c < b.items.length; c++) delete b.items[c].time, b.items[c] = j["default"].prepareImage(b.items[c], "small", "small")
                        }
                        if ("CXENSEINCLUDESCROLLERVIDEO" === this.template) {
                            for (var c = 0; c < b.items.length; c++) b.items[c] = j["default"].prepareImage(b.items[c], "default-scroller", "default", "is-no-margin is-without-category is-scroller");
                            b = j["default"].addScrollerOptionsToData(b, "video")
                        }
                        if ("CXENSEINCLUDESCROLLERVIDEORELATED" === this.template) {
                            for (var c = 0; c < b.items.length; c++) b.items[c] = j["default"].prepareImage(b.items[c], "default-scroller", "default", "is-no-margin is-without-category is-on-dark-background is-scroller"), b.items[c].shareToogleExtraClass = "is-on-dark-background";
                            b = j["default"].addScrollerOptionsToData(b, "video-related")
                        }
                        if ("CXENSEINCLUDESECTIONWITHLARGETEASER" === this.template) {
                            delete b.items[0].time, b.items[0] = j["default"].prepareImage(b.items[0], "large-col-12", "large", "is-background-light-mix"), b.items[0].shareToogleExtraClass = "is-on-dark-background", b.pageUrl = window.location.href;
                            for (var c = 1; c < b.items.length; c++) delete b.items[c].time, b.items[c] = j["default"].prepareImage(b.items[c], "default", "default")
                        }
                        var d = window.App.Templates[this.template],
                            e = o.parseHTML(d(b));
                        this.$content.html(e), this.$content.trigger(l["default"].EVENTS.DOMchanged)
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "CxenseTesting",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers-cxense": 41,
        "../_global/module": 5
    }],
    11: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function r(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : r(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = d(j),
            l = a("../../app"),
            m = d(l),
            n = a("../_global/module"),
            o = d(n),
            p = m["default"].$,
            q = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            reactOnMQChange: {
                                active: ["desktop"],
                                inactive: ["tablet", "mobile"]
                            },
                            videos: ".c-video--article",
                            isDocked: "is-docked",
                            isHidden: "is-hidden",
                            videoWrapper: ".video__wrapper",
                            videoContainer: ".video__container",
                            dockingDiv: '[data-js-atom="video-dock"]',
                            undockingDiv: '[data-js-atom="video-undock"]',
                            closeDock: '[data-js-atom="close-dock"]',
                            videoStickyWrapper: '[data-js-atom="video-sticky-wrapper"]'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return m["default"].registerModule && m["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this;
                        this.initComplete = !1, this.options.reactOnMQChange && 0 != Object.getOwnPropertyNames(this.options.reactOnMQChange).length ? (a.setModuleStateByMediaQuery(), m["default"].Vent.on(m["default"].EVENTS.mediachange, function(b, c) {
                            a.setModuleStateByMediaQuery()
                        })) : this.initModule()
                    }
                }, {
                    key: "initModule",
                    value: function() {
                        var a = this;
                        console.log("init DockedVideo"), this.playingVideoId = 0, this.dockedVideoId = 0, this.allVideos = {}, this.$videos = p(this.options.videos, this.$el), this.$videoContainer = p(this.options.videoContainer, this.$el), this.$dockingDiv = p(this.options.dockingDiv, this.$el), this.$undockingDiv = p(this.options.undockingDiv, this.$el), this.$closeDock = p(this.options.closeDock, this.$el), this.updateDimensions(), this.$videos.each(function(b, c) {
                            var d = p(c);
                            a.allVideos[p('[data-js-atom="video-container"]', d).attr("id")] = {
                                videoId: p('[data-js-atom="video-container"]', d).attr("id"),
                                $el: d,
                                isDocked: !1,
                                state: "is-paused"
                            }
                        }), this.$dockingDiv.css({
                            left: this.initOffsetleft + "px",
                            width: this.initWidth + "px",
                            height: this.initHeight + "px"
                        }), this.initComplete = !0, i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "destroyModule",
                    value: function() {
                        this.initComplete = !1
                    }
                }, {
                    key: "setModuleStateByMediaQuery",
                    value: function() {
                        if (k["default"].activateModule(this.options.reactOnMQChange)) {
                            if (this.initComplete) return;
                            this.initModule()
                        } else {
                            if (!this.initComplete) return;
                            this.destroyModule()
                        }
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this,
                            b = this.onResize.bind(this),
                            c = function(b, c) {
                                0 === a.playingVideoId ? a.playingVideoId = c.videoId : a.playingVideoId != c.videoId && (m["default"].Vent.trigger(m["default"].EVENTS.video.playerStop, {
                                    videoID: a.playingVideoId
                                }), a.playingVideoId = c.videoId)
                            },
                            d = function(b, c) {
                                a.playingVideoId = 0
                            },
                            e = function(b, c) {
                                console.log(c), a.addVideo(c)
                            };
                        m["default"].Vent.on(m["default"].EVENTS.resize, b), m["default"].Vent.on(m["default"].EVENTS.video.playerPlayed, c), m["default"].Vent.on(m["default"].EVENTS.video.playerPaused, d), m["default"].Vent.on(m["default"].EVENTS.endlessScroll.videoupdate, e), p(window).on("scroll", k["default"].throttle(p.proxy(this.onHandleScrollEvent, this), 10)), this.bindCloseBtns(this.$videos)
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {}
                }, {
                    key: "onResize",
                    value: function() {
                        this.updateDimensions()
                    }
                }, {
                    key: "updateDimensions",
                    value: function() {
                        this.initOffsetleft = this.$videos.offset().left, this.initWidth = this.$videos.width(), this.initHeight = this.$videos.height(), this.videoContainerHeight = this.$videoContainer.outerHeight(), this.windowHeight = p(window).height(), this.windowWidth = p(window).width(), this.availableSpace = this.windowWidth - (this.initOffsetleft + this.initWidth) - 80
                    }
                }, {
                    key: "addVideo",
                    value: function(a) {
                        p.extend(this.allVideos, a, this.allVideos)
                    }
                }, {
                    key: "onHandleScrollEvent",
                    value: function(a) {
                        var b = void 0,
                            c = void 0;
                        0 === this.playingVideoId && 0 === this.dockedVideoId || (b = this.playingVideoId ? this.playingVideoId : this.dockedVideoId, c = !this.checkIfVideoIsDockable(b), c ? (this.playingVideoId && 0 === this.dockedVideoId && this.dockVideo(this.playingVideoId), this.playingVideoId && this.dockedVideoId && this.dockedVideoId != this.playingVideoId && (this.undockVideo(this.dockedVideoId, !1), this.dockVideo(this.playingVideoId))) : this.dockedVideoId && this.dockedVideoId === this.playingVideoId && this.undockVideo(this.dockedVideoId))
                    }
                }, {
                    key: "bindCloseBtns",
                    value: function(a) {
                        var b = this,
                            c = function() {
                                0 != b.playingVideoId && m["default"].Vent.trigger(m["default"].EVENTS.video.playerStop, {
                                    videoID: b.playingVideoId
                                }), b.undockVideo(b.dockedVideoId)
                            };
                        a.each(function(a, d) {
                            var e = p(d),
                                f = p(b.options.closeDock, e);
                            f.on("click", c)
                        })
                    }
                }, {
                    key: "unbindCloseBtn",
                    value: function(a) {
                        var b = this.allVideos[a].$el,
                            c = p(this.options.closeDock, b);
                        c.off("click.btn")
                    }
                }, {
                    key: "checkIfVideoIsDockable",
                    value: function(a) {
                        var b = this.allVideos[a].$el,
                            c = b.get(0),
                            d = {
                                top: c.offsetHeight / 2 + 62,
                                right: 0,
                                bottom: c.offsetHeight / 2,
                                left: 0
                            },
                            e = c.getBoundingClientRect(),
                            f = e.top,
                            g = e.right,
                            h = e.bottom,
                            i = e.left,
                            j = {
                                t: h,
                                r: window.innerWidth - i,
                                b: window.innerHeight - f,
                                l: g
                            };
                        return j.t > d.top && j.r > d.right && j.b > d.bottom && j.l > d.left
                    }
                }, {
                    key: "getCurrentVideoPosition",
                    value: function(a) {
                        var b = this.allVideos[a].$el,
                            c = void 0;
                        return c = b.find(".video__container")[0].getBoundingClientRect()
                    }
                }, {
                    key: "dockVideo",
                    value: function(a) {
                        var b = this,
                            c = this.allVideos[a].$el,
                            d = void 0;
                        this.dockedVideoId = a, d = this.getCurrentVideoPosition(a), this.$dockingDiv.removeClass(this.options.isHidden), this.$dockingDiv.css({
                            top: d.top + "px",
                            left: d.left + "px",
                            width: d.width + "px",
                            height: d.height + "px"
                        }), c.find(".video__wrapper").addClass(this.options.isHidden), c.css("height", c.outerHeight() + "px"), c.addClass(this.options.isDocked), c.find(this.options.videoStickyWrapper).css("width", this.availableSpace + "px").css("height", this.$el.outerHeight() + "px").css("right", -this.availableSpace - 40 + "px"), setTimeout(function() {
                            d = b.getCurrentVideoPosition(a), b.$dockingDiv.css({
                                top: d.top + "px",
                                left: d.left + "px",
                                width: d.width + "px",
                                height: d.height + "px"
                            })
                        }, 100), p(".oo-small", c).removeClass("oo-small").addClass("oo-xsmall"), setTimeout(function() {
                            c.find(".video__wrapper").removeClass(b.options.isHidden)
                        }, 300), setTimeout(function() {
                            b.$dockingDiv.addClass(b.options.isHidden)
                        }, 400)
                    }
                }, {
                    key: "undockVideo",
                    value: function(a) {
                        var b = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            c = this,
                            d = this.allVideos[a].$el,
                            e = void 0;
                        this.dockedVideoId = 0, d.css("height", ""), d.find(".video__wrapper").addClass(this.options.isHidden), d.removeClass(this.options.isDocked), d.find(this.options.videoStickyWrapper).css("width", "").css("height", "").css("right", ""), b ? (this.$dockingDiv.removeClass(this.options.isHidden), setTimeout(function() {
                            e = c.getCurrentVideoPosition(a), c.$dockingDiv.css({
                                top: e.top + "px",
                                left: e.left + "px",
                                width: e.width + "px",
                                height: e.height + "px"
                            })
                        }, 100)) : c.$dockingDiv.addClass(c.options.isHidden).css({
                            top: "",
                            left: "",
                            width: "",
                            height: ""
                        }), p(".oo-xsmall", d).removeClass("oo-xsmall").addClass("oo-small"), setTimeout(function() {
                            d.find(".video__wrapper").removeClass(c.options.isHidden), c.$dockingDiv.addClass(c.options.isHidden)
                        }, 300)
                    }
                }, {
                    key: "updateAllVideos",
                    value: function(a, b) {
                        for (var c = b.videoId, d = b.playerState, e = this.allVideos.length, f = 0; f < e; f++) {
                            var g = this.allVideos[f];
                            g.videoId === c && (g.state = d)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {}
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "DockedVideo",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(o["default"]);
        c["default"] = q
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    12: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers"),
            j = (d(i), a("../../utils/helpers-scroll-events")),
            k = (d(j), a("../../app")),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = window.requestIdleCallback,
            q = window.requestAnimationFrame || setTimeout,
            r = function() {
                var a, b, c = [],
                    d = [],
                    e = c,
                    f = function() {
                        var f = e;
                        for (e = c.length ? d : c, a = !0, b = !1; f.length;) f.shift()();
                        a = !1
                    },
                    g = function(c, d) {
                        a && !d ? c.apply(this, arguments) : (e.push(c), b || (b = !0, (document.hidden ? setTimeout : q)(f)))
                    };
                return g._lsFlush = f, g
            }(),
            s = function(a, b) {
                return b ? function() {
                    r(a)
                } : function() {
                    var b = this,
                        c = arguments;
                    r(function() {
                        a.apply(b, c)
                    })
                }
            },
            t = function(a) {
                var b, c = 0,
                    d = 125,
                    e = 666,
                    f = e,
                    g = function() {
                        b = !1, c = Date.now(), a()
                    },
                    h = p ? function() {
                        p(g, {
                            timeout: f
                        }), f !== e && (f = e)
                    } : s(function() {
                        setTimeout(g)
                    }, !0);
                return function(a) {
                    var e;
                    (a = a === !0) && (f = 44), b || (b = !0, e = d - (Date.now() - c), e < 0 && (e = 0), a || e < 9 && p ? h() : setTimeout(h, e))
                }
            },
            u = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            offset: {
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0
                            },
                            offsetLoadNext: 20,
                            articleSelector: ".c-article--default",
                            articleBarTitleSelector: ".header__article-bar-title",
                            endlessScrollArticleContainerSelector: ".endless-scroll-container",
                            endlessScrollPreparationContainerSelector: ".endless-scroll-prep-container",
                            categoryLinkSelector: ".header__article-bar-category",
                            readyFullStoryHeights: {
                                desktop: 860,
                                tablet: 890,
                                mobile: 880
                            },
                            advertisementBannerHeight: 171
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        console.log("init EndlessScroll"), this.jsData = {
                            isInViewport: !1,
                            isLoadNextArticlePointReached: !1,
                            currentArticleIndex: 0
                        }, this.articles = [], this.currentScrollY = window.scrollY, this.$currentArticleWrapper = this.$el.closest(".u-grid"), this.currentArticle = this.el, this.currentArticleIndex = 0, this.nextArticleIsReady = !1, this.nextArticleIsLoading = !1, this.isSwitching = !1, this.windowHeight = 0, this.windowWidth = 0, this.$endlessScrollContainer = o(this.options.endlessScrollArticleContainerSelector), this.$endlessScrollPreparationContainer = o(this.options.endlessScrollPreparationContainerSelector), this.$articleTitleBar = o(this.options.articleBarTitleSelector);
                        var a = parseInt(this.currentArticle.getAttribute("data-id"));
                        this.allArticlesLoaded = !1, this.categoryLink = o(this.options.categoryLinkSelector), this.articleIDList = "" + a, this.nextArticleUrl = this.currentArticle.getAttribute("data-scroll-url");
                        var b = {
                            id: a,
                            url: window.location.pathname,
                            title: document.title,
                            article: this.$currentArticleWrapper.get(0),
                            hasNext: !0,
                            adSection: window.adSection || "",
                            category: this.categoryLink.text(),
                            categoryLink: this.categoryLink.attr("href"),
                            mcDataLayer: window.mcDataLayer
                        };
                        this.articles.push(b), this.updateWindowDimensions(), this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.onResize.bind(this);
                        l["default"].Vent.on(l["default"].EVENTS.resize, a), this.onHandleScroll = t(this.onHandleScroll.bind(this)), window.addEventListener("scroll", this.onHandleScroll, !!l["default"].support.passiveEvents && {
                            passive: !0
                        })
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        window.removeEventListener("scroll", this.onHandleScroll)
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.updateWindowDimensions()
                    }
                }, {
                    key: "onHandleScroll",
                    value: function() {
                        var a = this.articles[this.currentArticleIndex].article,
                            b = this.isArticleInViewport(a, this.options),
                            c = this.isArticleInViewport(this.$endlessScrollContainer.get(0), this.options);
                        if (this.jsData.isInViewport = b, this.isScrollDown())
                            if (0 === this.currentArticleIndex && (c = !0), this.allArticlesLoaded) !b && this.articles[this.currentArticleIndex].hasNext && !this.isSwitching && c && (this.isSwitching = !0, this.switchArticle(!0));
                            else {
                                var d = !this.isArticleInViewport(a, this.getNextArticleOptions());
                                !d || this.nextArticleIsLoading || this.nextArticleIsReady || (this.nextArticleIsLoading = !0, this.loadArticle(this.nextArticleUrl)), this.jsData.isLoadNextArticlePointReached = d, !b && this.nextArticleIsReady && !this.isSwitching && c && (this.isSwitching = !0, this.nextArticleIsReady = !1, this.switchArticle(!0))
                            } else 1 === this.currentArticleIndex && (c = !0), b || this.isSwitching || !c || (this.isSwitching = !0, this.switchArticle(!1));
                        this.updateLogLayer(this.jsData)
                    }
                }, {
                    key: "updateWindowDimensions",
                    value: function() {
                        this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth
                    }
                }, {
                    key: "switchArticle",
                    value: function() {
                        var a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            b = {};
                        return console.log("++++++++++ switch to " + (a ? "next" : "previous") + " Article ++++++++++"), a ? this.currentArticleIndex++ : this.currentArticleIndex--, this.currentArticleIndex === -1 ? void(this.currentArticleIndex = 0) : (b = this.articles[this.currentArticleIndex], this.currentArticle = b.article, this.updateTrackingLayer(b.mcDataLayer), this.updateAdSection(b.adSection), this.pushToHistory(b), this.updateArticleTitleBar(b.title), this.updateArticleCategory(b.category, b.categoryLink), this.isSwitching = !1, void(this.jsData.currentArticleIndex = this.currentArticleIndex))
                    }
                }, {
                    key: "getNextArticleOptions",
                    value: function() {
                        var a = 0,
                            b = {};
                        return 2 * this.currentArticle.offsetHeight > this.windowHeight && (a = 2 * this.windowHeight), b = {
                            offset: {
                                top: a,
                                left: 0,
                                bottom: 0,
                                right: 0
                            }
                        }
                    }
                }, {
                    key: "updateLogLayer",
                    value: function(a) {
                        var b = "",
                            c = "";
                        l["default"].devmode && (a.nextArticleIsReady = this.nextArticleIsReady, a.nextArticleIsLoading = this.nextArticleIsLoading, a.currentArticleIndex = this.currentArticleIndex, b = window.App.Templates.JSOUTPUTENDLESSSCROLL, c = o.parseHTML(b(a)), o(".js-log-layer").length ? o(".js-log-layer").html(c) : o("#main").append('<div class="js-log-layer"></div>').add(c))
                    }
                }, {
                    key: "updateArticleCategory",
                    value: function(a, b) {
                        this.categoryLink.attr("href", b).text(a)
                    }
                }, {
                    key: "updateArticleTitleBar",
                    value: function(a) {
                        this.$articleTitleBar.text(a)
                    }
                }, {
                    key: "isScrollDown",
                    value: function c() {
                        var c = !1;
                        return this.currentScrollY < window.scrollY && (c = !0), this.currentScrollY = window.scrollY, c
                    }
                }, {
                    key: "isArticleInViewport",
                    value: function(a, b) {
                        var c = a.getBoundingClientRect(),
                            d = c.top,
                            e = c.right,
                            f = c.bottom,
                            g = c.left,
                            h = {
                                t: f,
                                r: this.windowWidth - g,
                                b: this.windowHeight - d,
                                l: e
                            };
                        return h.t > b.offset.top && h.r > b.offset.right && h.b > b.offset.bottom && h.l > b.offset.left
                    }
                }, {
                    key: "loadArticle",
                    value: function(a) {
                        var b = this;
                        o.ajax({
                            url: a,
                            data: {
                                skip: b.articleIDList
                            },
                            dataType: "json"
                        }).done(function(a) {
                            b.nextArticleIsLoading = !1, a.hasNext || (b.allArticlesLoaded = !0), b.articleIDList += "," + a.id, b.handleNextArticleLoaded(a)
                        }).fail(function(a) {
                            console.warn("Server Error", a)
                        })
                    }
                }, {
                    key: "handleNextArticleLoaded",
                    value: function(a) {
                        var b = this.prepareArticle(a.html);
                        a.article = b.get(0), this.articles.push(a), this.appendArticle(b)
                    }
                }, {
                    key: "prepareArticle",
                    value: function(a) {
                        var b = this,
                            c = o("<div class='article-endless-scroll-wrapper'></div>");
                        c.appendTo(this.$endlessScrollPreparationContainer).append(a);
                        var d = o('[data-css="c-advertisement"]', this.$endlessScrollPreparationContainer);
                        o.each(d, function(a, c) {
                            var d = c.querySelector(".advertisement__container");
                            d.id = d.id + "-" + b.currentArticleIndex + "-" + a
                        });
                        var e = o(".c-video--article", this.$endlessScrollPreparationContainer),
                            f = {};
                        0 != e.length && o.each(e, function(a, b) {
                            var c = o(b);
                            f[o('[data-js-atom="video-container"]', c).attr("id")] = {
                                videoId: o('[data-js-atom="video-container"]', c).attr("id"),
                                $el: c,
                                isDocked: !1,
                                state: "is-paused"
                            }
                        }), l["default"].Vent.trigger(l["default"].EVENTS.endlessScroll.videoupdate, f), this.$endlessScrollPreparationContainer.trigger(l["default"].EVENTS.DOMchanged);
                        var g = o(this.options.articleSelector, this.$endlessScrollPreparationContainer),
                            h = g.outerHeight();
                        return h > 800 && (c.css({
                            height: this.options.readyFullStoryHeights[l["default"].currentMedia] + this.options.advertisementBannerHeight + "px",
                            overflow: "hidden"
                        }), this.appendReadFullStoryButton(), this.bindReadFullStoryEvent()), this.$endlessScrollPreparationContainer.find(".article-endless-scroll-wrapper")
                    }
                }, {
                    key: "appendReadFullStoryButton",
                    value: function() {
                        o('<div class="article__read-full-story-wrapper"><button class="article__read-full-story-button">Read Full Story</button></div>').appendTo(o(".article-endless-scroll-wrapper", this.$endlessScrollPreparationContainer))
                    }
                }, {
                    key: "bindReadFullStoryEvent",
                    value: function() {
                        var a = function(a) {
                                var b = o(a.currentTarget),
                                    c = b.closest(".article__read-full-story-wrapper");
                                b.closest(".article-endless-scroll-wrapper").css({
                                    height: "",
                                    overflow: ""
                                }), c.remove()
                            },
                            b = o(".article__read-full-story-button", this.$endlessScrollPreparationContainer);
                        b.on("click", a)
                    }
                }, {
                    key: "appendArticle",
                    value: function(a) {
                        console.log("appendArticle", a), this.$endlessScrollContainer.append(a), this.nextArticleIsReady = !0
                    }
                }, {
                    key: "updateAdSection",
                    value: function(a) {
                        window.adSection && (window.adSection = a)
                    }
                }, {
                    key: "updateTrackingLayer",
                    value: function(a) {
                        window.mcDataLayer && (window.mcDataLayer = a)
                    }
                }, {
                    key: "pushToHistory",
                    value: function(a) {
                        var b = {
                            name: "page-" + this.currentArticleIndex
                        };
                        history.pushState(b, a.title, a.url)
                        _satellite.track('pageview');
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "EndlessScroll",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = u
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../../utils/helpers-scroll-events": 43,
        "../_global/module": 5
    }],
    13: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function p(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : p(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = (d(j), a("../../app")),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = (l["default"].$, function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            classActive: "is-active",
                            classHidden: "is-hidden",
                            selectorContent: '[data-js-atom="filter-content"]',
                            selectorToggle: '[data-js-atom="filter-toggle"]',
                            selectorToggleTextExpanded: '[data-js-atom="filter-toggle-text-expanded"]',
                            selectorToggleTextHidden: '[data-js-atom="filter-toggle-text-hidden"]'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.contentHeight = 0, this.$content = this.$el.find(this.options.selectorContent), this.$toggle = this.$el.find(this.options.selectorToggle), this.$toggleTextExpanded = this.$el.find(this.options.selectorToggleTextExpanded), this.$toggleTextHidden = this.$el.find(this.options.selectorToggleTextHidden), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.onMediaChange.bind(this),
                            b = this.toggleContent.bind(this);
                        l["default"].Vent.on(l["default"].EVENTS.mediachange, a), this.$el.on("click", this.options.selectorToggle, b)
                    }
                }, {
                    key: "onMediaChange",
                    value: function() {
                        this.destroy(), this.render()
                    }
                }, {
                    key: "toggleContent",
                    value: function() {
                        var a = "true" === this.$toggle.attr("aria-expanded");
                        this.$toggle.attr("aria-expanded", !a), this.$toggleTextExpanded.toggleClass(this.options.classHidden), this.$toggleTextHidden.toggleClass(this.options.classHidden), this.$content.attr("aria-hidden", a).height(a ? 0 : this.contentHeight)
                    }
                }, {
                    key: "getContentHeight",
                    value: function() {
                        this.$content.height(""), this.contentHeight = this.$content.height()
                    }
                }, {
                    key: "setContentHeight",
                    value: function() {
                        this.$content.height(this.contentHeight)
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.getContentHeight(), this.setContentHeight()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$toggle.attr("aria-expanded", !0), this.$toggleTextExpanded.removeClass(this.options.classHidden), this.$toggleTextHidden.addClass(this.options.classHidden), this.$content.attr("aria-hidden", !1).height("")
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Filter",
                            version: "0.0.0"
                        }
                    }
                }]), b
            }(n["default"]));
        c["default"] = o
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    14: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function r(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : r(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers-focus"),
            k = d(j),
            l = a("../../app"),
            m = d(l),
            n = a("../_global/module"),
            o = d(n),
            p = m["default"].$,
            q = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            topTopBtn: '[data-js-atom="to-top-btn"]'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return m["default"].registerModule && m["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.goTop.bind(this);
                        this.$el.on("click", this.options.topTopBtn, a)
                    }
                }, {
                    key: "goTop",
                    value: function(a) {
                        a.stopPropagation(), a.preventDefault();
                        var b = a.currentTarget,
                            c = b.getBoundingClientRect(),
                            d = Math.min(1600, Math.max(99, .9 * Math.abs(c.top)));
                        return p("html, body").animate({
                            scrollTop: 0
                        }, d, function() {
                            var a = k["default"].getFocusableChildren(document.querySelector("header"));
                            a[0].focus()
                        }), !1
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Footer",
                            version: "0.0.0"
                        }
                    }
                }]), b
            }(o["default"]);
        c["default"] = q
    }, {
        "../../app": 3,
        "../../utils/helpers-focus": 42,
        "../_global/module": 5
    }],
    15: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers"),
            j = (d(i), a("../../app")),
            k = d(j),
            l = a("../_global/module"),
            m = d(l),
            n = k["default"].$,
            o = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            paginationCurrentCountSelector: ".gallery-extension__pagination-current-count",
                            paginationTotalCountSelector: ".gallery-extension__pagination-total-count",
                            descriptionListItemSelector: ".gallery-extension__description-list-item"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return k["default"].registerModule && k["default"].registerModule(Lightbox.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this.options;
                        this.$paginationTotalCount = n(a.paginationTotalCountSelector, this.el), this.$paginationCurrentCount = n(a.paginationCurrentCountSelector, this.el), this.$descritionItems = n(a.descriptionListItemSelector, this.el), this.totalSlides = 0, this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        k["default"].Vent.on(k["default"].EVENTS.slider.sliderInitialized, function(b, c) {
                            return a.onSliderInitEvent(b, c)
                        }), k["default"].Vent.on(k["default"].EVENTS.slider.sliderBeforeSlideChange, function(b, c) {
                            return a.onSliderBeforeChangeEvent(b, c)
                        })
                    }
                }, {
                    key: "onSliderInitEvent",
                    value: function(a, b) {
                        this.totalSlides = b.totalSlides, this.$paginationTotalCount.html(b.totalSlides), this.$paginationCurrentCount.html(b.currentIndex + 1), this.$descritionItems.not(this.$descritionItems.eq(b.currentIndex)).hide()
                    }
                }, {
                    key: "onSliderBeforeChangeEvent",
                    value: function(a, b) {
                        if (b.newIndex !== this.totalSlides && b.newIndex !== -1 && (this.updatePagination(b.newIndex + 1), this.updateDescriptionList(b.newIndex), this.checkIfVideoSlide(b.oldSlide))) {
                            var c = b.oldSlide.find(".video__video").attr("id");
                            this.stopVideo(c)
                        }
                    }
                }, {
                    key: "stopVideo",
                    value: function(a) {
                        k["default"].Vent.trigger(k["default"].EVENTS.video.playerStop, {
                            videoID: a
                        })
                    }
                }, {
                    key: "checkIfVideoSlide",
                    value: function(a) {
                        var b = 1 === a.find('[data-css="c-video"]').length;
                        return b
                    }
                }, {
                    key: "updatePagination",
                    value: function(a) {
                        this.$paginationCurrentCount.html(a)
                    }
                }, {
                    key: "updateDescriptionList",
                    value: function(a) {
                        this.$descritionItems.show(), this.$descritionItems.not(this.$descritionItems.eq(a)).hide()
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "LightboxGalleryExtension",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(m["default"]);
        c["default"] = o
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    16: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../app"),
            j = d(i),
            k = a("../_global/module"),
            l = d(k),
            m = a("./modal"),
            n = d(m),
            o = j["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            template: "MODALGALLERYTEMPLATE",
                            rootClass: "is-site-fixed"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return j["default"].registerModule && j["default"].registerModule(Lightbox.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.galleryID = this.el.id, this.bindEvents(), this.scrollPosition = 0
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        j["default"].Vent.on(j["default"].EVENTS.cta.showGallery, function(b, c) {
                            return a.onOpenerCtaClick(b, c)
                        })
                    }
                }, {
                    key: "bindModalEvents",
                    value: function() {
                        var a = this;
                        this.modalEl.addEventListener("modal:hide", function(b) {
                            return a.cleanup(b)
                        })
                    }
                }, {
                    key: "initModal",
                    value: function() {
                        this.modalEl = document.querySelector("[data-gallery-id=" + this.galleryID + "]"), this.modal = new n["default"](this.modalEl), this.$modalContent = o(".modal__content", this.modalEl)
                    }
                }, {
                    key: "onOpenerCtaClick",
                    value: function(a, b) {
                        if (this.galleryID === b.options.galleryID) {
                            var c = this.getContent();
                            this.appendModal(c), this.addInitForVideos(), this.initModal(), this.bindModalEvents(), this.showLightbox(), a.preventDefault()
                        }
                    }
                }, {
                    key: "getContent",
                    value: function() {
                        var a = this.options,
                            b = window.App.Templates[a.template],
                            c = window.App[this.galleryID],
                            d = b(c);
                        return d
                    }
                }, {
                    key: "showLightbox",
                    value: function() {
                        this.modal.show(), this.$modalContent.trigger(j["default"].EVENTS.DOMchanged), j["default"].blockScrollingEvents = !0, this.scrollPosition = o(window).scrollTop(), j["default"].$root.addClass(this.options.rootClass)
                    }
                }, {
                    key: "appendModal",
                    value: function(a) {
                        o("main").append(a), this.$gallery = o("[data-gallery-id=" + this.galleryID + "]")
                    }
                }, {
                    key: "addInitForVideos",
                    value: function() {
                        for (var a = o(".c-video--default", this.$gallery), b = 0; b < a.length; b++) a[b].setAttribute("data-js-module", "video"), a[b].querySelector(".video__video").id = "video-gallery-" + b
                    }
                }, {
                    key: "cleanup",
                    value: function() {
                        var a = this.$modalContent.find(".video__video");
                        a.each(function() {
                            j["default"].Vent.trigger(j["default"].EVENTS.video.playerDestroy, {
                                videoID: this.id
                            })
                        });
                        var b = this;
                        setTimeout(function() {
                            o("html, body").scrollTop(b.scrollPosition), j["default"].$root.css({
                                top: ""
                            }), j["default"].blockScrollingEvents = !1
                        }, 1), j["default"].$root.removeClass(b.options.rootClass), this.$gallery.remove()
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Lightbox",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(l["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../_global/module": 5,
        "./modal": 17
    }],
    17: [function(a, b, c) {
        (function(a) {
            "use strict";

            function b(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function d(b, c, d) {
                function e(a, b) {
                    b = b || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var c = document.createEvent("CustomEvent");
                    return c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail), c
                }
                e.prototype = a.Event.prototype;
                var f;
                f = a.CustomEvent && "function" == typeof a.CustomEvent ? new a.CustomEvent(c, {
                    detail: d
                }) : new e(c, {
                    bubbles: !1,
                    cancelable: !1,
                    detail: d
                }), f && b.dispatchEvent(f)
            }

            function e(a) {
                var b = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'];
                return f(b.join(","), a).filter(function(a) {
                    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
                })
            }

            function f(a, b) {
                return Array.prototype.slice.call((b || document).querySelectorAll(a))
            }

            function g(a, b) {
                var c = e(a),
                    d = c.indexOf(document.activeElement);
                b.shiftKey && 0 === d ? (c[c.length - 1].focus(), b.preventDefault()) : b.shiftKey || d !== c.length - 1 || (c[0].focus(), b.preventDefault())
            }

            function h(a) {
                var b = e(a);
                b.length && b[0].focus()
            }
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var i, j = function() {
                    function a(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                        }
                    }
                    return function(b, c, d) {
                        return c && a(b.prototype, c), d && a(b, d), b
                    }
                }(),
                k = function() {
                    function a(c) {
                        var d = this;
                        b(this, a), this.el = c, this.main = document.querySelector("#main"), c.hasAttribute("aria-hidden") && (this.shown = !JSON.parse(c.getAttribute("aria-hidden"))), this.closeBtn = this.el.querySelector("button[data-a11y-modal-hide]"), this.boundMaintainFocus = function(a) {
                            return d.maintainFocus(a)
                        }, this.boundKeypress = function(a) {
                            return d.bindKeypress(a)
                        }, this.boundHide = function(a) {
                            return d.hide(a)
                        }
                    }
                    return j(a, [{
                        key: "bindKeypress",
                        value: function(a) {
                            this.shown && 27 === a.which && (a.preventDefault(), this.hide()), this.shown && 9 === a.which && g(this.el, a)
                        }
                    }, {
                        key: "maintainFocus",
                        value: function(a) {
                            this.shown && !this.el.contains(a.target) && h(this.el)
                        }
                    }, {
                        key: "show",
                        value: function() {
                            this.shown = !0, this.el.removeAttribute("aria-hidden"), this.main.setAttribute("aria-hidden", "true"), i = document.activeElement, h(this.el), this.closeBtn.addEventListener("click", this.boundHide), document.body.addEventListener("focus", this.boundMaintainFocus, !0), document.addEventListener("keydown", this.boundKeypress), d(this.el, "dialog:show", this)
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            this.shown = !1, this.el.setAttribute("aria-hidden", "true"), this.main.removeAttribute("aria-hidden"), i && i.focus(), this.closeBtn.removeEventListener("click", this.boundHide), document.body.removeEventListener("focus", this.boundMaintainFocus, !0), document.removeEventListener("keydown", this.boundKeypress), d(this.el, "modal:hide", this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            hide(), this.closeBtn.removeEventListener("click", this.boundHide)
                        }
                    }]), a
                }();
            c["default"] = k
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    18: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers"),
            j = d(i),
            k = a("../../app"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            reactOnMQChange: {
                                active: ["desktop"],
                                inactive: ["tablet", "mobile"]
                            },
                            openButtonSelector: ".c-button-main-nav--default .button-main-nav__button",
                            closeButtonSelector: ".c-button-main-nav--close-desktop .button-main-nav__button",
                            openNavigationClass: "is-open-nav",
                            fixedPositionClass: "is-fixed"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this;
                        this.initComplete = !1, this.options.reactOnMQChange && 0 != Object.getOwnPropertyNames(this.options.reactOnMQChange).length ? (a.setModuleStateByMediaQuery(), l["default"].Vent.on(l["default"].EVENTS.mediachange, function(b, c) {
                            a.setModuleStateByMediaQuery()
                        })) : this.initModule()
                    }
                }, {
                    key: "initModule",
                    value: function() {
                        this.$openButton = o(this.options.openButtonSelector, this.el), this.$closeButton = o(this.options.closeButtonSelector, this.el), this.$openButton.attr("aria-expanded", !1), this.isFixed = !1, this.currentScrollY = 0, this.lastScrollY = 0, this.$html = l["default"].$root, this.bindEvents(), this.initComplete = !0
                    }
                }, {
                    key: "destroyModule",
                    value: function() {
                        this.initComplete = !1
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        this.$openButton.on("click.shownav", {
                            action: "open"
                        }, function(b) {
                            return a.onHandleClick(b)
                        }), this.$closeButton.on("click.hidenav", {
                            action: "close"
                        }, function(b) {
                            return a.onHandleClick(b)
                        })
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        this.$openButton.off("click.shownav"), this.$closeButton.off("click.hidenav")
                    }
                }, {
                    key: "onHandleClick",
                    value: function(a) {
                        a.preventDefault(), "open" === a.data.action ? this.showNavigation() : this.hideNavigation()
                    }
                }, {
                    key: "showNavigation",
                    value: function() {
                        this.$openButton.attr("aria-expanded", !0), this.$html.addClass(this.options.openNavigationClass)
                    }
                }, {
                    key: "hideNavigation",
                    value: function() {
                        this.$openButton.attr("aria-expanded", !1), this.$html.removeClass(this.options.openNavigationClass)
                    }
                }, {
                    key: "setModuleStateByMediaQuery",
                    value: function() {
                        if (j["default"].activateModule(this.options.reactOnMQChange)) {
                            if (this.initComplete) return;
                            this.initModule()
                        } else {
                            if (!this.initComplete) return;
                            this.destroyModule()
                        }
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "NavigationDesktop",
                            version: "0.1.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    19: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers"),
            j = d(i),
            k = a("../../app"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            fixedPositionClass: "is-fixed"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.isFixed = !1, this.currentScrollY = 0, this.lastScrollY = 0, this.$html = l["default"].$root, this.calculateFixedPoints(), this.setUnsetFix(), this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        l["default"].Vent.on(l["default"].EVENTS.mediachange, function(b, c) {
                            return a.onHandleMediaChangeEvent()
                        }), o(window).on("scroll", j["default"].throttle(o.proxy(this.onScrolling, this), 100))
                    }
                }, {
                    key: "onHandleMediaChangeEvent",
                    value: function() {
                        this.isFixed = !1, this.$html.removeClass(this.options.fixedPositionClass), this.calculateFixedPoints(), this.setUnsetFix()
                    }
                }, {
                    key: "calculateFixedPoints",
                    value: function() {
                        var a = document.querySelector("header"),
                            b = 0;
                        b = "desktop" === l["default"].currentMedia ? document.querySelector(".header__outer.is-region-02") : "tablet" === l["default"].currentMedia ? a : a;
                        var c = document.querySelector(".c-smartbanner"),
                            d = null != c ? c.offsetHeight : 0;
                        l["default"].headerFixedStartY = a.offsetHeight - b.offsetHeight + d;
                        var e = document.querySelector(".c-article--default");
                        l["default"].articleStartY = null != e ? e.getBoundingClientRect().top + document.body.scrollTop : 0
                    }
                }, {
                    key: "onScrolling",
                    value: function() {
                        this.setUnsetFix()
                    }
                }, {
                    key: "setUnsetFix",
                    value: function() {
                        var a = window.scrollY;
                        a >= l["default"].headerFixedStartY && !this.isFixed && !l["default"].blockScrollingEvents ? (this.isFixed = !0, this.$html.addClass(this.options.fixedPositionClass)) : a < l["default"].headerFixedStartY && this.isFixed && !l["default"].blockScrollingEvents && (this.isFixed = !1, this.$html.removeClass(this.options.fixedPositionClass), l["default"].Vent.trigger(l["default"].EVENTS.navigation.isFixed)), this.lastScrollY = a, this.currentScrollY = this.lastScrollY
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "NavigationFixed",
                            version: "0.1.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    20: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers"),
            j = d(i),
            k = a("../../app"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            reactOnMQChange: {
                                active: ["mobile", "tablet"],
                                inactive: ["desktop"]
                            },
                            componentSelector: ".c-button-main-nav--mobile",
                            openCloseButtonSelector: ".button-main-nav__button",
                            openButtonClass: "is-open",
                            openNavigationClass: "is-open-nav"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this;
                        this.initComplete = !1, this.options.reactOnMQChange && 0 != Object.getOwnPropertyNames(this.options.reactOnMQChange).length ? (a.setModuleStateByMediaQuery(), l["default"].Vent.on(l["default"].EVENTS.mediachange, function(b, c) {
                            a.setModuleStateByMediaQuery()
                        })) : this.initModule()
                    }
                }, {
                    key: "initModule",
                    value: function() {
                        this.$header = this.$el, this.$component = o(this.options.componentSelector), this.$openCloseButton = o(this.options.openCloseButtonSelector, this.$component), this.scrollPosition = 0, this.$html = l["default"].$root, this.isOpen = !1, this.bindEvents(), this.initComplete = !0
                    }
                }, {
                    key: "destroyModule",
                    value: function() {
                        this.unbindEvents(), this.initComplete = !1
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        this.$openCloseButton.on("click", function(b) {
                            return a.onClick(b)
                        })
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        this.$openCloseButton.off("click")
                    }
                }, {
                    key: "onClick",
                    value: function(a) {
                        a.preventDefault(), this.isNavOpen === !0 ? this.hideNavigation() : this.showNavigation()
                    }
                }, {
                    key: "showNavigation",
                    value: function() {
                        l["default"].blockScrollingEvents = !0, "mobile" === l["default"].currentMedia && (this.scrollPosition = o(window).scrollTop(), l["default"].smartbanner && this.scrollPosition < l["default"].smartbannerHeight && this.$html.addClass("smartbanner-in-viewport"), (!l["default"].smartbanner || l["default"].smartbanner && this.scrollPosition > l["default"].smartbannerHeight) && (this.$header.css({
                            transform: "translateY(" + this.scrollPosition + "px)",
                            transition: "none"
                        }), l["default"].$root.css({
                            transform: "translateY(-" + this.scrollPosition + "px)"
                        }))), this.$html.addClass(this.options.openNavigationClass), this.$component.addClass(this.options.openButtonClass), this.isNavOpen = !0
                    }
                }, {
                    key: "hideNavigation",
                    value: function() {
                        if ("mobile" === l["default"].currentMedia) {
                            this.$header.css({
                                transform: ""
                            }), l["default"].$root.css({
                                transform: "initial"
                            });
                            var a = this;
                            setTimeout(function() {
                                o("html, body").scrollTop(a.scrollPosition)
                            }, 1)
                        }
                        setTimeout(function() {
                            l["default"].blockScrollingEvents = !1
                        }, 501), this.$html.removeClass(this.options.openNavigationClass), this.$component.removeClass(this.options.openButtonClass), this.$html.removeClass("smartbanner-in-viewport"), this.isNavOpen = !1
                    }
                }, {
                    key: "showHideNavigation",
                    value: function() {
                        this.$html.toggleClass(this.options.openNavigationClass)
                    }
                }, {
                    key: "setModuleStateByMediaQuery",
                    value: function() {
                        if (j["default"].activateModule(this.options.reactOnMQChange)) {
                            if (this.initComplete) return;
                            this.initModule()
                        } else {
                            if (!this.initComplete) return;
                            this.destroyModule()
                        }
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "NavigationMobile",
                            version: "0.1.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    21: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers-cookie"),
            j = d(i),
            k = a("../../app"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            closeBtnSelector: ".news-alert__close-btn",
                            contentWrapperSelector: ".news-alert__content-wrapper",
                            cookiePrefix: "news-",
                            studioPreviewID: "is-studio-preview",
                            template: "NEWSALERT"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        return this.isFirstRender = !0, this.$closeBtn = o(this.options.closeBtnSelector, this.el), this.pollURL = this.$el.data("pollUrl"), this.timestamp = this.$el.data("timestamp"), this.contentWrapper = o(this.options.contentWrapperSelector, this.el), this.interval = this.$el.data("interval") || 1e4, this.isEmptyNews = this.$el.hasClass("is-empty"), this.isStudioPreview = o("#" + this.options.studioPreviewID).length, this.isStudioPreview ? void this.showNewsAlert() : (this.bindEvents(), void this.pollNews())
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        this.$closeBtn.on("click", function(b) {
                            return a.onHandleCloseBtnClick(b)
                        })
                    }
                }, {
                    key: "onHandleCloseBtnClick",
                    value: function(a) {
                        a.preventDefault(), j["default"].setCookie(this.options.cookiePrefix + "-" + this.timestamp, !0, "", "/"), this.hideNewsAlert()
                    }
                }, {
                    key: "hideNewsAlert",
                    value: function() {
                        this.isStudioPreview || this.$el.css("display", "none")
                    }
                }, {
                    key: "showNewsAlert",
                    value: function() {
                        this.$el.css("display", "block")
                    }
                }, {
                    key: "pollNews",
                    value: function() {
                        console.log("pollNews");
                        var a = this;
                        o.ajax({
                            url: this.pollURL,
                            dataType: "json"
                        }).done(function(b) {
                            if (0 != b.newsID) {
                                var c = j["default"].hasCookie(a.options.cookiePrefix + "-" + b.timestamp);
                                if (c) a.hideNewsAlert();
                                else {
                                    var d = a.compareTimestamps(a.timestamp, b.timestamp),
                                        e = new Date,
                                        f = parseInt(e.getTime() / 1e3),
                                        g = f - a.timestamp,
                                        h = 3600;
                                    !d && g > h ? a.hideNewsAlert() : !d && g < h ? (a.updateAlert(b), a.showNewsAlert()) : d && g < h ? (a.updateAlert(b), a.showNewsAlert()) : d && g > h && a.hideNewsAlert()
                                }
                                a.timestamp = b.timestamp
                            } else a.hideNewsAlert();
                            setTimeout(function() {
                                a.pollNews()
                            }, a.interval)
                        }).fail(function(a) {
                            console.warn("Server Error", a)
                        })
                    }
                }, {
                    key: "compareTimestamps",
                    value: function(a, b) {
                        return a === b
                    }
                }, {
                    key: "updateAlert",
                    value: function(a) {
                        var b = window.App.Templates[this.options.template],
                            c = o.parseHTML(b(a));
                        this.contentWrapper.html(c)
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "NewsAlert",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers-cookie": 40,
        "../_global/module": 5
    }],
    22: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers"),
            j = (d(i), a("../../app")),
            k = d(j),
            l = a("../_global/module"),
            m = d(l),
            n = k["default"].$,
            o = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                        formSelector: ".c-newsletter-form--default",
                        formResponseSelector: ".newsletter__response-inner",
                        backBtnSelector: ".newsletter__response-back-btn"
                    };
                    return f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c))
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.$form = n(this.options.formSelector, this.el), this.$formSubmitBtn = n('button[type="submit"]', this.el), this.$response = n(this.options.formResponseSelector, this.el), this.$backBtn = n(this.options.backBtnSelector, this.el), this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this,
                            b = this,
                            c = function() {
                                b.$form.get(0).reset(), b.$el.attr("data-newsletter-success", "")
                            };
                        this.$backBtn.on("click", function(a) {
                            a.preventDefault(), c()
                        }), this.$form.on("submit", function(c) {
                            b.$formSubmitBtn.prop("disabled", !0);
                            var d = a.el.querySelectorAll("input:invalid, select:invalid, textarea:invalid"),
                                e = (/constructor/i.test(window.HTMLElement), "WebkitAppearance" in document.documentElement.style),
                                f = !!window.chrome,
                                g = n("#email-address + .error", a.el);
                            if (d.length && e && !f) {
                                c.preventDefault();
                                for (var h = 0; h < d.length; h++) {
                                    var i = d[h].validity,
                                        j = d[h].type;
                                    i.valueMissing && "email" === j ? g.text("Please fill in the field.") : i.valueMissing && "checkbox" === j ? g.text("Please read and accept the conditions.") : i.typeMismatch && g.text("Please enter a correct email address.")
                                }
                                b.$formSubmitBtn.prop("disabled", !1)
                            }
                            d.length || (c.preventDefault(), c.stopImmediatePropagation(), b.registerUser())
                        })
                    }
                }, {
                    key: "registerUser",
                    value: function() {
                        var a = this;
                        n.ajax({
                            url: this.$form.attr("action"),
                            type: this.$form.attr("method"),
                            data: this.$form.serialize(),
                            dataType: "json"
                        }).done(function(b) {
                            a.$el.attr("data-newsletter-success", b.success), a.showMessage(b), a.$formSubmitBtn.prop("disabled", !1)
                        }).fail(function() {
                            console.warn("Server Error"), a.$formSubmitBtn.prop("disabled", !1)
                        })
                    }
                }, {
                    key: "showMessage",
                    value: function(a) {
                        this.$response.html(n('<h3 class="newsletter__title">' + a.title + '</h3><p class="newsletter__message">' + a.message + "</p>"))
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Newsletter",
                            version: "0.0.0"
                        }
                    }
                }]), b
            }(m["default"]);
        c["default"] = o
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    23: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function p(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : p(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = (d(j), a("../../app")),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = (l["default"].$, function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            classHidden: "is-hidden",
                            selectorButtonPrev: '[data-js-atom="pagination-button-prev"]',
                            selectorButtonNext: '[data-js-atom="pagination-button-next"]',
                            selectorPageCurrent: '[data-js-atom="pagination-page-current"]',
                            selectorPageTotal: '[data-js-atom="pagination-page-total"]'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.$prevButton = this.$el.find(this.options.selectorButtonPrev), this.$nextButton = this.$el.find(this.options.selectorButtonNext), this.$pageCurrent = this.$el.find(this.options.selectorPageCurrent), this.$pageTotal = this.$el.find(this.options.selectorPageTotal), this.nextButtonVisibility = !0, this.prevButtonVisibility = !0, this.paginationEnabled = !0, i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.disable.bind(this),
                            b = this.enable.bind(this),
                            c = this.handleClick.bind(this),
                            d = this.updateButtonVisibility.bind(this),
                            e = this.updatePageCount.bind(this);
                        l["default"].Vent.on(l["default"].EVENTS.pagination.disable, a), l["default"].Vent.on(l["default"].EVENTS.pagination.enable, b), l["default"].Vent.on(l["default"].EVENTS.pagination.updateButtonVisibility, d), l["default"].Vent.on(l["default"].EVENTS.pagination.updatePageCount, e), this.$el.on("click", this.options.selectorButtonPrev, c), this.$el.on("click", this.options.selectorButtonNext, c)
                    }
                }, {
                    key: "handleClick",
                    value: function(a) {
                        if (a.preventDefault(), this.paginationEnabled) switch (a.currentTarget) {
                            case this.$prevButton[0]:
                                l["default"].Vent.trigger(l["default"].EVENTS.searchForm.loadMore, {
                                    direction: !1
                                });
                                break;
                            case this.$nextButton[0]:
                                l["default"].Vent.trigger(l["default"].EVENTS.searchForm.loadMore, {
                                    direction: !0
                                });
                                break;
                            default:
                                console.warn("Pagination: click event has not function assigned.")
                        }
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.paginationEnabled = !1
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.paginationEnabled = !0
                    }
                }, {
                    key: "updatePageCount",
                    value: function(a, b) {
                        return isNaN(b.pageCurrent) ? void console.warn("Pagination: submitted data.pageCurrent is not a number.") : isNaN(b.pageTotal) ? void console.warn("Pagination: submitted data.pageTotal is not a number.") : (this.$pageCurrent.text(b.pageCurrent), void this.$pageTotal.text(b.pageTotal))
                    }
                }, {
                    key: "updateButtonVisibility",
                    value: function(a, b) {
                        this.$prevButton.toggleClass(this.options.classHidden, !b.prevButtonVisibility), this.$nextButton.toggleClass(this.options.classHidden, !b.nextButtonVisibility)
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Pagination",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(n["default"]));
        c["default"] = o
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    24: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../app"),
            j = d(i),
            k = a("../../utils/helpers"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = j["default"].$,
            p = l["default"].prefixed("transform"),
            q = l["default"].cssSupports("transform", "translate3d(0,0,0)"),
            r = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            reactOnMQChange: {
                                active: ["desktop", "tablet"],
                                inactive: ["mobile"]
                            },
                            activeClass: "is-active",
                            hiddenClass: "is-hidden",
                            prev: '[data-js-atom="scroller-prev"]',
                            next: '[data-js-atom="scroller-next"]',
                            items: '[data-js-atom="scroller-item"]',
                            ribbon: '[data-js-atom="scroller-ribbon"]',
                            wrapper: '[data-js-atom="scroller-wrapper"]',
                            selectedIndex: 0,
                            useTransform: !0,
                            switchByGroup: !0,
                            switchByItem: !1
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return j["default"].registerModule && j["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this.options,
                            b = this;
                        a.switchByGroup && a.switchByItem && console.warn("Options Error Scroller (switchByGroup, switchByItem): Please only set one of this options to true"), this.initComplete = !1, this.options.reactOnMQChange && 0 != Object.getOwnPropertyNames(this.options.reactOnMQChange).length ? (b.setModuleStateByMediaQuery(), j["default"].Vent.on(j["default"].EVENTS.mediachange, function(a, c) {
                            b.setModuleStateByMediaQuery()
                        })) : this.initModule()
                    }
                }, {
                    key: "initModule",
                    value: function() {
                        var a = this.options;
                        return this.$prevButton = o(a.prev, this.el), this.$nextButton = o(a.next, this.el), this.$viewport = o(a.wrapper, this.el), this.$scroller = o(a.ribbon, this.el), this.$items = o(a.items, this.el), this.selectedIndex = parseInt(a.selectedIndex, 10), this._calculateViewport(), 0 === this.maxIndex ? (this.$prevButton.addClass(a.hiddenClass), void this.$nextButton.addClass(a.hiddenClass)) : (this._gotoIndex(this.selectedIndex, !1), this._updateControls(), this.bindEvents(), void(this.initComplete = !0))
                    }
                }, {
                    key: "destroyModule",
                    value: function() {
                        this.options.useTransform ? this.$scroller.get(0).style[p] = "" : this.scroller.$scroller.get(0).style.left = "", this.unbindEvents(), this.initComplete = !1
                    }
                }, {
                    key: "setModuleStateByMediaQuery",
                    value: function() {
                        if (l["default"].activateModule(this.options.reactOnMQChange)) {
                            if (this.initComplete) return;
                            this.initModule()
                        } else {
                            if (!this.initComplete) return;
                            this.destroyModule()
                        }
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this,
                            b = function(b) {
                                b.preventDefault(), a._setSelectedIndex("previous"), a._gotoIndex(a.selectedIndex), a._updateControls()
                            },
                            c = function(b) {
                                b.preventDefault(), a._setSelectedIndex("next"), a._gotoIndex(a.selectedIndex), a._updateControls()
                            };
                        this.$prevButton.on("click.prev", b), this.$nextButton.on("click.next", c), j["default"].support.touch && (l["default"].detectSwipe(this.el, 75), this.$el.on(j["default"].EVENTS.swipe, function(a) {
                            var d = a.originalEvent.detail.direction;
                            "left" === d && c(a), "right" === d && b(a)
                        }), this.touchSwipeEnabled = !0)
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        this.$prevButton.off("click.prev"), this.$nextButton.off("click.next"), this.$el.off(j["default"].EVENTS.swipe)
                    }
                }, {
                    key: "_calculateViewport",
                    value: function() {
                        var a = this;
                        this.maxWidth = 0, this.viewportWidth = this.$scroller.outerWidth(), this.itemWidth = this.$items.outerWidth(!0), this.itemPrecentWidth = Math.round(100 / this.$scroller.get(0).clientWidth * this.itemWidth), this.itemsInViewport = Math.round(this.viewportWidth / this.itemWidth), this.restItems = this.$items.length % this.itemsInViewport, this.$items.each(function() {
                            a.maxWidth += o(this).outerWidth(!0)
                        }), this.$items.length - this.itemsInViewport <= 0 ? this.maxIndex = 0 : this.maxIndex = this.$items.length - this.itemsInViewport
                    }
                }, {
                    key: "_setSelectedIndex",
                    value: function(a) {
                        "next" === a && (this.options.switchByItem ? this.selectedIndex += 1 : this.selectedIndex += this.itemsInViewport), "previous" === a && (this.options.switchByItem ? this.selectedIndex -= 1 : this.selectedIndex -= this.itemsInViewport), this.selectedIndex < 0 && (this.selectedIndex = 0), this.selectedIndex > this.maxIndex && (this.selectedIndex = this.maxIndex)
                    }
                }, {
                    key: "_gotoIndex",
                    value: function(a) {
                        var b = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            c = a * this.itemPrecentWidth * -1 + "%";
                        b ? this.$scroller.css("transition", "") : this.$scroller.css("transition", "none"), this.options.useTransform ? this.$scroller.get(0).style[p] = q ? "translate3d(" + c + ", 0, 0)" : "translateX(" + c + ")" : this.scroller.$scroller.get(0).style.left = c
                    }
                }, {
                    key: "_updateControls",
                    value: function() {
                        var a = this.options;
                        this.$prevButton.removeClass(a.hiddenClass), this.$nextButton.removeClass(a.hiddenClass), 0 === this.selectedIndex ? this.$prevButton.addClass(a.hiddenClass) : this.selectedIndex === this.maxIndex && this.$nextButton.addClass(a.hiddenClass)
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Scroller",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = r
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    25: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
            },
            i = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            j = function s(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : s(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            k = a("../../utils/helpers-focus"),
            l = d(k),
            m = a("../../app"),
            n = d(m),
            o = a("../_global/module"),
            p = d(o),
            q = n["default"].$,
            r = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            pendingClass: "is-semi-transparent",
                            selectorSubmitForm: '[data-js-atom="search-form-form"]',
                            selectorSubmitTrigger: '[data-js-atom="search-form-trigger"]',
                            clearBtnSelector: "button.search-from__clear-btn",
                            searchInputSelector: 'input[type="search"]',
                            totalItems: "200",
                            paginationId: "paginationId"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return n["default"].registerModule && n["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), i(b, [{
                    key: "initialize",
                    value: function() {
                        this.$form = this.$el.find("form"), this.$resultContainer = this.$el.next(".u-grid"), this.$searchInput = q(this.options.searchInputSelector, this.el), this.$searchClearBtn = q(this.options.clearBtnSelector, this.el), this.pageIndex = 1, this.itemCount = {
                            desktop: 16,
                            tablet: 15,
                            mobile: 10
                        }, this.fixedHeaderSpace = {
                            desktop: 150,
                            tablet: 120,
                            mobile: 70
                        }, this.$pagination = q("#" + this.options.paginationId), this.itemTotal = parseInt(this.$pagination.data("totalItems")), this.triggerUpdatePagination(), j(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.handleChange.bind(this),
                            b = this.onMediaChange.bind(this),
                            c = this.handleLoadMore.bind(this),
                            d = this.onHandleClearBtnClick.bind(this),
                            e = this.onHandleKeydownInput.bind(this);
                        n["default"].Vent.on(n["default"].EVENTS.mediachange, b), n["default"].Vent.on(n["default"].EVENTS.searchForm.loadMore, c), this.$el.on("change", this.options.selectorSubmitTrigger, a), this.$searchClearBtn.on("click", d), this.$searchInput.on("keyup", e)
                    }
                }, {
                    key: "onHandleCloseBtnClick",
                    value: function(a) {
                        a.preventDefault(), this.hide()
                    }
                }, {
                    key: "onHandleKeydownInput",
                    value: function(a) {
                        if (9 !== a.which) return console.log(this.$searchInput.prop("value")), console.log(0 === this.$searchInput.prop("value").length), console.log(8 === a.which), 8 === a.which && 0 === this.$searchInput.prop("value").length ? void this.hideClearBtn() : void this.showClearBtn()
                    }
                }, {
                    key: "onHandleClearBtnClick",
                    value: function(a) {
                        a.preventDefault(), this.clearSearchfield(), this.hideClearBtn()
                    }
                }, {
                    key: "clearSearchfield",
                    value: function() {
                        this.$searchInput.prop("value", ""), this.$searchInput.focus()
                    }
                }, {
                    key: "hideClearBtn",
                    value: function() {
                        this.$searchClearBtn.addClass("is-hidden"), this.$searchClearBtn.attr("tabindex", -1)
                    }
                }, {
                    key: "showClearBtn",
                    value: function() {
                        this.$searchClearBtn.removeClass("is-hidden"), this.$searchClearBtn.attr("tabindex", 0)
                    }
                }, {
                    key: "handleChange",
                    value: function() {
                        this.options.controlForm ? (this.resetPageIndex(), this.getNewItems()) : this.submitForm()
                    }
                }, {
                    key: "handleLoadMore",
                    value: function(a, b) {
                        return void 0 === h(b.direction) ? void console.warn("SearchForm: no data.direction provided.") : (this.options.updatePagination && n["default"].Vent.trigger(n["default"].EVENTS.pagination.disable), this.updatePageIndex(b.direction), void this.getNewItems())
                    }
                }, {
                    key: "onMediaChange",
                    value: function() {
                        this.options.controlForm && (this.resetPageIndex(), this.getNewItems())
                    }
                }, {
                    key: "submitForm",
                    value: function() {
                        this.$el.find(this.options.selectorSubmitForm).submit()
                    }
                }, {
                    key: "resetPageIndex",
                    value: function() {
                        this.pageIndex = 1
                    }
                }, {
                    key: "updatePageIndex",
                    value: function(a) {
                        a ? this.pageIndex++ : this.pageIndex--
                    }
                }, {
                    key: "getNewItems",
                    value: function() {
                        var a = this,
                            b = this.$form[0].action,
                            c = this.$form.serialize() + "&pageIndex=" + this.pageIndex + "&itemCount=" + this.itemCount[n["default"].currentMedia],
                            d = window.App.Templates[this.options.template],
                            e = void 0;
                        this.$resultContainer.addClass(this.options.pendingClass), q.ajax({
                            url: b,
                            data: c
                        }).done(function(b) {
                            e = q.parseHTML(d(b)), a.itemTotal = b.itemTotal, a.render(e), a.scrollToElement()
                        }).fail(function(b) {
                            console.warn("Error: ajax call to get more items from the server" + b), a.$resultContainer.removeClass(a.options.pendingClass)
                        })
                    }
                }, {
                    key: "getPageTotal",
                    value: function(a) {
                        return Math.ceil(a / this.itemCount[n["default"].currentMedia])
                    }
                }, {
                    key: "scrollToElement",
                    value: function() {
                        var a = this.$resultContainer.get(0),
                            b = a.getBoundingClientRect(),
                            c = Math.min(1600, Math.max(99, .9 * Math.abs(b.top)));
                        return q("html, body").animate({
                            scrollTop: window.scrollY + b.top - this.fixedHeaderSpace[n["default"].currentMedia]
                        }, c, function() {
                            var b = l["default"].getFocusableChildren(a);
                            b[0].focus()
                        }), !1
                    }
                }, {
                    key: "triggerUpdatePagination",
                    value: function() {
                        this.options.updatePagination && (console.log(this.getPageTotal(this.itemTotal)), n["default"].Vent.trigger(n["default"].EVENTS.pagination.updatePageCount, {
                            pageCurrent: this.pageIndex,
                            pageTotal: this.getPageTotal(this.itemTotal)
                        }), n["default"].Vent.trigger(n["default"].EVENTS.pagination.updateButtonVisibility, {
                            prevButtonVisibility: 1 !== this.pageIndex && 1 != this.getPageTotal(this.itemTotal),
                            nextButtonVisibility: this.pageIndex !== this.getPageTotal(this.itemTotal)
                        }), n["default"].Vent.trigger(n["default"].EVENTS.pagination.enable))
                    }
                }, {
                    key: "render",
                    value: function(a) {
                        this.getPageTotal(this.itemTotal);
                        this.$resultContainer.html(a), this.$resultContainer.removeClass(this.options.pendingClass), this.$resultContainer.trigger(n["default"].EVENTS.DOMchanged), this.triggerUpdatePagination()
                    }
                }, {
                    key: "destroy",
                    value: function() {}
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "SearchForm",
                            version: "0.0.0"
                        }
                    }
                }]), b
            }(p["default"]);
        c["default"] = r
    }, {
        "../../app": 3,
        "../../utils/helpers-focus": 42,
        "../_global/module": 5
    }],
    26: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers-focus"),
            j = d(i),
            k = a("../../app"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            openBtnSelector: ".meta-navigation__main-list-link.is-search, .header__article-bar-search-link",
                            closeBtnSelector: "button.search-overlay__close-btn",
                            clearBtnSelector: "button.search-from__clear-btn",
                            overlaySelector: ".c-search-overlay--default",
                            searchInputSelector: 'input[type="search"]',
                            openClass: "is-open",
                            rootClass: "is-site-fixed",
                            headerBarSelector: ".header__outer.is-region-03"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this.options;
                        this.$openBtn = o(a.openBtnSelector, this.el), this.$closeBtn = o(a.closeBtnSelector, this.el), this.$searchOverlay = o(a.overlaySelector, this.el), this.$searchInput = o(a.searchInputSelector, this.$searchOverlay), this.$searchClearBtn = o(a.clearBtnSelector, this.$searchOverlay), this.$headerBar = o(a.headerBarSelector, this.el), this.scrollPosition = 0, this.searchIsOpen = !1, this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        this.$openBtn.on("click", function(b) {
                            return a.onHandleOpenBtnClick(b)
                        }), this.$closeBtn.on("click", function(b) {
                            return a.onHandleCloseBtnClick(b)
                        }), this.$searchClearBtn.on("click", function(b) {
                            return a.onHandleClearBtnClick(b)
                        }), this.$searchInput.on("keyup", function(b) {
                            return a.onHandleKeydownInput(b)
                        }), this.boundKeypress = function(b) {
                            return a.bindKeypress(b)
                        }
                    }
                }, {
                    key: "bindKeypress",
                    value: function(a) {
                        this.searchIsOpen && 27 === a.which && (a.preventDefault(), this.hide()), this.searchIsOpen && 9 === a.which && j["default"].trapTabKey(this.$searchOverlay.get(0), a)
                    }
                }, {
                    key: "onHandleOpenBtnClick",
                    value: function(a) {
                        a.preventDefault(), this.show()
                    }
                }, {
                    key: "onHandleCloseBtnClick",
                    value: function(a) {
                        a.preventDefault(), this.hide()
                    }
                }, {
                    key: "onHandleKeydownInput",
                    value: function(a) {
                        if (9 !== a.which) return console.log(this.$searchInput.prop("value")), 8 === a.which && 0 === this.$searchInput.prop("value").length ? void this.hideClearBtn() : void this.showClearBtn()
                    }
                }, {
                    key: "onHandleClearBtnClick",
                    value: function(a) {
                        a.preventDefault(), this.clearSearchfield(), this.hideClearBtn()
                    }
                }, {
                    key: "clearSearchfield",
                    value: function() {
                        this.$searchInput.prop("value", ""), this.$searchInput.focus()
                    }
                }, {
                    key: "hideClearBtn",
                    value: function() {
                        this.$searchClearBtn.addClass("is-hidden"), this.$searchClearBtn.attr("tabindex", -1)
                    }
                }, {
                    key: "showClearBtn",
                    value: function() {
                        this.$searchClearBtn.removeClass("is-hidden"), this.$searchClearBtn.attr("tabindex", 0)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        if (this.searchIsOpen) {
                            var a = this;
                            l["default"].$root.hasClass("is-article-bar-visible") && setTimeout(function() {
                                o("html, body").scrollTop(a.scrollPosition), l["default"].$root.css({
                                    top: ""
                                }), a.$searchOverlay.css({
                                    top: ""
                                }), l["default"].blockScrollingEvents = !1
                            }, 1), l["default"].$root.removeClass(this.options.rootClass), this.$searchOverlay.removeClass(this.options.openClass), document.removeEventListener("keydown", this.boundKeypress), this.focusElementBefore.focus(), this.searchIsOpen = !1
                        }
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.searchIsOpen || (this.focusElementBefore = document.activeElement, l["default"].$root.hasClass("is-article-bar-visible") && (l["default"].blockScrollingEvents = !0, this.scrollPosition = o(window).scrollTop(), l["default"].$root.css({
                            top: this.scrollPosition * -1 + "px"
                        }), this.$searchOverlay.css({
                            top: this.$headerBar.outerHeight(!0) + "px"
                        })), l["default"].$root.addClass(this.options.rootClass), this.$searchOverlay.addClass(this.options.openClass), this.$searchInput.focus(), document.addEventListener("keydown", this.boundKeypress), this.searchIsOpen = !0)
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "SearchOverlay",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers-focus": 42,
        "../_global/module": 5
    }],
    27: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function q(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : q(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = (d(j), a("../../app")),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            classActive: "is-active",
                            classHidden: "is-hidden",
                            classIdle: "is-idle",
                            selectorContent: '[data-js-atom~="section-content"]',
                            selectorCta: '[data-js-atom="section-cta"]',
                            selectorTeaser: '[data-js-module="teaser"]',
                            selectorTeaserWrapper: '[class*="grid__col"]',
                            selectorToggle: '[data-js-atom="section-toggle"]',
                            selectorToggleTextExpanded: '[data-js-atom="section-toggle-text-expanded"]',
                            selectorToggleTextHidden: '[data-js-atom="section-toggle-text-hidden"]'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.teasers = [], this.contentHeight = 0, this.ctaClicked = 0, this.ctaTextNew = !1, this.contentVisible = !0, this.$content = this.$el.find(this.options.selectorContent), this.$cta = this.$el.find(this.options.selectorCta), this.$toggle = this.$el.find(this.options.selectorToggle), this.$toggleTextExpanded = this.$el.find(this.options.selectorToggleTextExpanded), this.$toggleTextHidden = this.$el.find(this.options.selectorToggleTextHidden), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.onClick.bind(this),
                            b = this.onChange.bind(this),
                            c = this.toggleContent.bind(this),
                            d = this.markTransitionEnd.bind(this);
                        l["default"].Vent.on(l["default"].EVENTS.mediachange, b), l["default"].Vent.on(l["default"].EVENTS.cxenseInclude.contentUpdated, b), this.$el.on("click", this.options.selectorCta, a), this.$el.on("click", this.options.selectorToggle, c), this.$el.on("webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend", this.options.selectorContent, d)
                    }
                }, {
                    key: "checkUpdateElements",
                    value: function() {
                        this.updateTeaserElements(), this.updateCtaElement()
                    }
                }, {
                    key: "updateTeaserElements",
                    value: function() {
                        this.teasers = o('[data-js-module="teaser"], .OUTBRAIN', this.el);
                        for (var a = 0; a < this.teasers.length; a++) o(this.teasers[a]).closest(this.options.selectorTeaserWrapper).removeClass(this.options.classHidden);
                        if (this.options[l["default"].currentMedia] && this.options[l["default"].currentMedia].visibleTeasers && this.options[l["default"].currentMedia].visibleTeasers < this.teasers.length)
                            for (var b = this.options[l["default"].currentMedia].visibleTeasers; b < this.teasers.length; b++) o(this.teasers[b]).closest(this.options.selectorTeaserWrapper).addClass(this.options.classHidden)
                    }
                }, {
                    key: "updateCtaElement",
                    value: function() {
                        var a = !1;
                        this.options[l["default"].currentMedia] && this.options[l["default"].currentMedia].overrideCta && (a = parseInt(this.options[l["default"].currentMedia].overrideCta.hideCtaAfter), this.options[l["default"].currentMedia].overrideCta.hideCtaAfter && (a === this.ctaClicked ? this.$cta.addClass(this.options.classHidden) : this.$cta.removeClass(this.options.classHidden)), this.ctaTextNew && this.$cta.text(this.ctaTextNew))
                    }
                }, {
                    key: "onClick",
                    value: function(a) {
                        if (a.preventDefault(), this.ctaClicked++, this.options[l["default"].currentMedia] && this.options[l["default"].currentMedia].overrideCta && this.options[l["default"].currentMedia].overrideCta.action) switch (this.options[l["default"].currentMedia].overrideCta.action) {
                            case "showMore":
                                this.updateTeaserModal(), this.updateCtaModal(), this.render();
                                break;
                            case "loadMore":
                        } else window.location.href = a.currentTarget.href
                    }
                }, {
                    key: "onChange",
                    value: function() {
                        this.ctaClicked = 0, this.destroy(), this.render()
                    }
                }, {
                    key: "updateTeaserModal",
                    value: function() {
                        var a = parseInt(this.options[l["default"].currentMedia].visibleTeasers);
                        this.options[l["default"].currentMedia].overrideCta.actionSetting ? a += parseInt(this.options[l["default"].currentMedia].overrideCta.actionSetting) : a = this.teasers.length, a > this.teasers.length && (a = this.teasers.length), this.options[l["default"].currentMedia].visibleTeasers = a
                    }
                }, {
                    key: "updateCtaModal",
                    value: function() {
                        var a = parseInt(this.options[l["default"].currentMedia].overrideCta.removeActionAfter),
                            b = parseInt(this.options[l["default"].currentMedia].overrideCta.changeTextAfter);
                        this.options[l["default"].currentMedia].overrideCta.removeActionAfter && a === this.ctaClicked && (this.options[l["default"].currentMedia].overrideCta.action = !1), this.options[l["default"].currentMedia].overrideCta.changeTextAfter && b === this.ctaClicked && (this.ctaTextNew = this.options[l["default"].currentMedia].overrideCta.text)
                    }
                }, {
                    key: "toggleContent",
                    value: function() {
                        this.contentVisible = !("true" === this.$toggle.attr("aria-expanded")), this.contentVisible || (this.getContentHeight(), this.setContentHeight()), this.$toggle.attr("aria-expanded", this.contentVisible), this.$toggleTextExpanded.toggleClass(this.options.classHidden), this.$toggleTextHidden.toggleClass(this.options.classHidden), this.$content.attr("aria-hidden", !this.contentVisible).height(this.contentVisible ? this.contentHeight : 0).removeClass(this.options.classIdle)
                    }
                }, {
                    key: "getContentHeight",
                    value: function() {
                        this.$content.height(""), this.contentHeight = this.$content.height()
                    }
                }, {
                    key: "setContentHeight",
                    value: function() {
                        this.$content.height(this.contentHeight)
                    }
                }, {
                    key: "removeContentHeight",
                    value: function() {
                        this.$content.height("")
                    }
                }, {
                    key: "markTransitionEnd",
                    value: function() {
                        this.$content.addClass(this.options.classIdle), this.contentVisible && this.removeContentHeight()
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.checkUpdateElements()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$toggle.length && (this.$toggle.attr("aria-expanded", !0), this.$toggleTextExpanded.removeClass(this.options.classHidden), this.$toggleTextHidden.addClass(this.options.classHidden), this.$content.attr("aria-hidden", !1).height(""))
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Section",
                            version: "0.0.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    28: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function r(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : r(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = d(j),
            l = a("../../app"),
            m = d(l),
            n = a("../_global/module"),
            o = d(n),
            p = m["default"].$,
            q = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            shareCountPlaceholder: '[data-js-atom="share-count-placeholder"]',
                            minShareCount: 51,
                            selectorContent: '[data-js-atom="sharing-panel"]',
                            selectorToggle: '[data-js-atom="sharing-toggle"]',
                            selectorShareItem: '[data-js-atom="sharing-item-removable"]',
                            selectorSharingList: ".sharing__list",
                            template: "SHARECOUNT"
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return m["default"].registerModule && m["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this;
                        this.isOpen = !1, this.sharingID = k["default"].makeId(10), this.postWidgetInitialized = !1, this.$content = this.$el.find(this.options.selectorContent), this.$toggle = this.$el.find(this.options.selectorToggle), this.$sharingList = this.$el.find(this.options.selectorSharingList), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this), this.shareCount = 0, setTimeout(function() {
                            a.getShareCount()
                        }, 2e3)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this,
                            b = this.removeShareItems.bind(this),
                            c = function() {
                                window.postPlatform && !a.postWidgetInitialized && a.initPostWidget(), a.isOpen ? a.closeShare() : a.openShare()
                            };
                        m["default"].Vent.on(m["default"].EVENTS.sharing.close, function(b, c) {
                            a.sharingID != c.id && a.isOpen && a.closeShare()
                        }), this.$el.on("click", this.options.selectorToggle, c), this.$el.on("click", this.options.selectorToggle, b)
                    }
                }, {
                    key: "openShare",
                    value: function() {
                        m["default"].Vent.trigger(m["default"].EVENTS.sharing.close, {
                            id: this.sharingID
                        }), this.isOpen = !0, this.$toggle.attr("aria-expanded", !0), this.$content.attr("aria-hidden", !1)
                    }
                }, {
                    key: "closeShare",
                    value: function() {
                        this.isOpen = !1, this.$toggle.attr("aria-expanded", !1), this.$content.attr("aria-hidden", !0)
                    }
                }, {
                    key: "initPostWidget",
                    value: function() {
                        var a = p(".pw-widget-wrapper", this.el);
                        p.each(a, function() {
                            var a = p(this);
                            a.addClass("pw-widget");
                            var b = p("a", a),
                                c = b.attr("class");
                            b.addClass("pw-button-" + c), window.postPlatform.init()
                        }), this.postWidgetInitialized = !0
                    }
                }, {
                    key: "getShareCount",
                    value: function() {
                        var a = this,
                            b = p(".pw-button-counter__inner", this.el),
                            c = !1;
                        p.each(b, function() {
                            var b = this.innerHTML;
                            if ("" === b) c = !0;
                            else {
                                var d = b.replace(".", "");
                                d = d.replace("K", "000"), a.shareCount += parseInt(d, 10)
                            }
                        }), c ? setTimeout(function() {
                            a.getShareCount()
                        }, 2e3) : a.render()
                    }
                }, {
                    key: "removeShareItems",
                    value: function() {
                        "desktop" === m["default"].currentMedia ? p(".sharing__item.is-hidden-desktop", this.el).remove() : "tablet" === m["default"].currentMedia ? p(".sharing__item.is-hidden-tablet", this.el).remove() : p(".sharing__item.is-hidden-smartphone", this.el).remove()
                    }
                }, {
                    key: "formatShareCount",
                    value: function(a) {
                        var b = a.toString();
                        b = b.split(".")[0];
                        for (var c = []; b.length > 3;) c.unshift(b.slice(-3)), b = b.substring(0, b.length - 3);
                        return c.unshift(b), c.join(",")
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.shareCount >= this.options.minShareCount) {
                            var a = {
                                    shareCount: this.formatShareCount(this.shareCount)
                                },
                                b = window.App.Templates[this.options.template],
                                c = p.parseHTML(b(a));
                            this.$sharingList.before(c)
                        }
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Sharing",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(o["default"]);
        c["default"] = q
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    29: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function r(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : r(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../app"),
            k = d(j),
            l = a("../../utils/helpers"),
            m = d(l),
            n = a("../_global/module"),
            o = d(n),
            p = k["default"].$,
            q = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            unresolvedClass: "is-unresolved",
                            activeClass: "is-active",
                            hiddenClass: "is-hidden",
                            cloneClass: "is-cloned",
                            actions: '[data-js-atom="slider-actions"]',
                            prev: '[data-js-atom="slider-prev"]',
                            next: '[data-js-atom="slider-next"]',
                            items: '[data-js-atom="slider-item"]',
                            pagination: '[data-js-atom="slider-pagination"]',
                            paginationList: '[data-js-atom="slider-pagination-list"]',
                            paginationItemClass: ".slider__pagination-list-item",
                            ribbon: '[data-js-atom="slider-ribbon"]',
                            wrapper: '[data-js-atom="slider-wrapper"]',
                            autoPlay: !1,
                            autoPlayInterval: 3e3,
                            disablePagination: !1,
                            enableTouchSwipe: !0,
                            infinite: !1,
                            pauseOnHover: !0,
                            startAtIndex: 0,
                            visibleItems: {
                                desktop: 1,
                                tablet: 1,
                                mobile: 1
                            }
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return k["default"].registerModule && k["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        if (this.index = 0, this.$prev = this.$el.find(this.options.prev), this.$next = this.$el.find(this.options.next), this.$items = this.$el.find(this.options.items), this.$initialItems = this.$items, this.$wrapper = this.$el.find(this.options.wrapper), this.$ribbon = this.$el.find(this.options.ribbon), this.startAtIndex = ~~this.options.startAtIndex, this.$lastItem = this.$items.eq(this.$items.length - 1), this.$firstItem = this.$items.eq(0), this.transition = this.$ribbon.css("transition"), this.paginationDisabled = this.options.disablePagination || this.$items.length < 2, this.infinite = this.options.infinite && this.$items.length > 1, this.touchSwipeEnabled = !1, this.clickHandler = !0, this.autoPlay = this.options.autoPlay && this.infinite, this.paginationDisabled || (this.$paginationList = this.$el.find(this.options.paginationList)), this.options.autoPlay && !this.infinite && console.warn('Slider: Sorry - option "autoPlay" has no effect while option "infinite" is set to false!'), this.infinite)
                            for (var a in this.options.visibleItems)
                                if (this.options.visibleItems.hasOwnProperty(a) && this.options.visibleItems[a] > 1) {
                                    console.warn('Slider: Sorry - option "visibleItems" has no effect while option "infinite" is set to true!');
                                    break
                                }
                        i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.render.bind(this),
                            b = this.showPrevElement.bind(this),
                            c = this.showNextElement.bind(this),
                            d = this.navigateToElement.bind(this),
                            e = this.play.bind(this),
                            f = this.pause.bind(this);
                        return this.$el.on(k["default"].clickHandler, this.options.prev, b), this.$el.on(k["default"].clickHandler, this.options.next, c), this.$el.on(k["default"].clickHandler, this.options.paginationItemClass, d), k["default"].EVENTS || k["default"].EVENTS.resize ? (k["default"].Vent.on(k["default"].EVENTS.resize, a), void(this.autoPlay && this.options.pauseOnHover && (k["default"].EVENTS.mouseenter && k["default"].EVENTS.mouseleave ? (this.$el.on(k["default"].EVENTS.mouseenter, f), this.$el.on(k["default"].EVENTS.mouseleave, e)) : console.warn('Slider: App.EVENTS.mouseEnter and/or App.EVENTS.mouseLeave missing - option "pauseOnHover" will be ignored!')))) : void console.warn("Slider: App.EVENTS.resize is missing!")
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        k["default"].Vent.off(k["default"].EVENTS.resize), this.$el.off(k["default"].clickHandler)
                    }
                }, {
                    key: "bindTransitions",
                    value: function() {
                        var a = this.onRibbonTransitionEnd.bind(this),
                            b = this.onItemsTransitionEnd.bind(this);
                        this.$ribbon.on(m["default"].transitionEndEvent(), a), this.$items.on(m["default"].transitionEndEvent(), b)
                    }
                }, {
                    key: "onRibbonTransitionEnd",
                    value: function(a) {
                        a.stopPropagation(), this.autoPlay && this.paused && (this.options.pauseOnHover ? this.$el.is(":hover") || this.play() : this.play()), this.$clonedFirst && this.$clonedFirst.hasClass(this.options.activeClass) && (this.$clonedFirst.removeClass(this.options.activeClass), this.index = 1, this.animateSlide({
                            idx: this.index,
                            animate: !1
                        })), this.$clonedLast && this.$clonedLast.hasClass(this.options.activeClass) && (this.$clonedLast.removeClass(this.options.activeClass), this.index = this.$items.length - this.visibles - 1, this.animateSlide({
                            idx: this.index,
                            animate: !1
                        })), this.clickHandler = !0
                    }
                }, {
                    key: "onItemsTransitionEnd",
                    value: function(a) {
                        a.stopPropagation()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return k["default"].currentMedia ? (this.$clonedLast && this.$clonedFirst && (this.$clonedLast.remove(), this.$clonedFirst.remove(), this.$items = this.$initialItems), this.visibles = this.infinite ? 1 : this.options.visibleItems[k["default"].currentMedia], this.itemsLength = this.$items.length, this.handleVisibility(), this.paginationDisabled || (this.removePagination(), this.addPagination()), this.infinite && this.infiniteLoop(), this.bindTransitions(), this.getAndSetDimensions(), k["default"].support.touch && this.options.enableTouchSwipe && !this.touchSwipeEnabled && this.bindSwipes(), this.infinite ? this.goToItem(this.startAtIndex + this.visibles) : this.goToItem(this.startAtIndex), this.autoPlay && this.paused && this.play(), void k["default"].Vent.trigger(k["default"].EVENTS.slider.sliderInitialized, {
                            instance: this.el,
                            currentIndex: this.startAtIndex,
                            totalSlides: this.itemsLength
                        })) : void console.warn("Slider: App.currentMedia is necessary to support the slider module!")
                    }
                }, {
                    key: "infiniteLoop",
                    value: function() {
                        this.$clonedFirst = this.$firstItem.clone(!0).addClass(this.options.cloneClass), this.$clonedLast = this.$lastItem.clone(!0).addClass(this.options.cloneClass), this.$firstItem.before(this.$clonedLast), this.$lastItem.after(this.$clonedFirst), this.$items = p(this.options.items, this.$el)
                    }
                }, {
                    key: "animateSlide",
                    value: function(a) {
                        a.animate ? this.$ribbon.css("transition", this.transition) : this.$ribbon.css("transition", "none"), this.$ribbon.css("left", -a.idx * this.thumbWidth)
                    }
                }, {
                    key: "checkSlides",
                    value: function() {
                        this.$clonedFirst.hasClass(this.options.activeClass) && this.$firstItem.addClass(this.options.activeClass), this.$clonedLast.hasClass(this.options.activeClass) && this.$lastItem.addClass(this.options.activeClass)
                    }
                }, {
                    key: "handleVisibility",
                    value: function() {
                        0 === this.itemsLength && (this.$el.addClass(this.options.hiddenClass), console.warn("Slider: There is no item we can use in our slider :(")), this.$el.css("max-width", "none")
                    }
                }, {
                    key: "removePagination",
                    value: function() {
                        this.$paginationList.empty()
                    }
                }, {
                    key: "addPagination",
                    value: function() {
                        var a = 'data-js-atom="slider-pagination-item"',
                            b = "slider__pagination-list-item",
                            c = this.$items.map(function(c) {
                                return p('<li class="' + b + '" ' + a + "><strong>" + (c + 1) + "</strong></li>")[0]
                            });
                        this.$paginationList.append(c), this.$paginationItems = p("[" + a + "]", this.$el)
                    }
                }, {
                    key: "navigateToElement",
                    value: function(a) {
                        var b = p(a.currentTarget);
                        b.hasClass(this.options.activeClass) || (this.index = b.index(), this.infinite && this.index++, this.goToItem(this.index))
                    }
                }, {
                    key: "showNextElement",
                    value: function(a) {
                        a && "function" == typeof a.preventDefault && a.preventDefault(), p(a.currentTarget).prop("disabled") || this.clickHandler && (this.goToItem(this.index + this.visibles), this.clickHandler = !1)
                    }
                }, {
                    key: "showPrevElement",
                    value: function(a) {
                        a && "function" == typeof a.preventDefault && a.preventDefault(), p(a.currentTarget).prop("disabled") || this.clickHandler && (this.goToItem(this.index - this.visibles), this.clickHandler = !1)
                    }
                }, {
                    key: "getDirection",
                    value: function(a) {
                        return a > this.index ? "next" : "prev"
                    }
                }, {
                    key: "bindSwipes",
                    value: function() {
                        var a = this;
                        this.$items.length > this.visibles && (m["default"].detectSwipe(this.el, 75), this.$el.on(k["default"].EVENTS.swipe, function(b) {
                            var c = b.originalEvent.detail.direction;
                            "left" === c && a.goToItem(a.index + a.visibles), "right" === c && a.goToItem(a.index - a.visibles)
                        }), this.touchSwipeEnabled = !0)
                    }
                }, {
                    key: "enableBtn",
                    value: function(a) {
                        a.removeClass(this.options.hiddenClass), a.prop("disabled", !1), a.removeAttr("aria-disabled")
                    }
                }, {
                    key: "disableBtn",
                    value: function(a) {
                        a.addClass(this.options.hiddenClass), a.prop("disabled", !0), a.attr("aria-disabled", !0)
                    }
                }, {
                    key: "goToItem",
                    value: function(a) {
                        k["default"].Vent.trigger(k["default"].EVENTS.slider.sliderBeforeSlideChange, {
                            oldIndex: this.index,
                            newIndex: a,
                            oldSlide: this.$items.eq(this.index),
                            newSlide: this.$items.eq(a)
                        });
                        var b = this.$items.length - this.visibles;
                        if (b < 0 && (b = 0), this.paused || this.pause(), this.infinite ? a < 0 ? a = b : a > b && (a = 0) : (this.enableBtn(this.$prev), this.enableBtn(this.$next), a < 1 && (this.disableBtn(this.$prev), a < 0 && (a = 0)), a > b - 1 && (this.disableBtn(this.$next), a > b && (a = b))), this.animateSlide({
                                idx: a,
                                animate: !this.$el.hasClass(this.options.unresolvedClass)
                            }), this.$el.hasClass(this.options.unresolvedClass) && this.$el.removeClass(this.options.unresolvedClass), this.index = a, this.$items.removeClass(this.options.activeClass), !this.paginationDisabled && this.$paginationItems && this.$paginationItems.length && this.$paginationItems.removeClass(this.options.activeClass), this.infinite)
                            for (var c = this.index - 1; c < this.index - 1 + this.visibles; c++) {
                                var d = c;
                                this.$items.eq(d + 1).addClass(this.options.activeClass), this.paginationDisabled || (c >= this.$paginationItems.length && (d = 0), c < 0 && (d = this.$paginationItems.length - 1), this.$paginationItems.eq(d).addClass(this.options.activeClass))
                            } else
                                for (var e = this.index; e < this.index + this.visibles; e++) this.$items.eq(e).addClass(this.options.activeClass), this.paginationDisabled || this.$paginationItems.eq(e).addClass(this.options.activeClass);
                        this.infinite && this.checkSlides()
                    }
                }, {
                    key: "play",
                    value: function() {
                        var a = this;
                        clearInterval(this.autoPlayInterval), this.autoPlayInterval = setInterval(function() {
                            a.goToItem(a.index + a.visibles)
                        }, this.options.autoPlayInterval), this.paused = !1
                    }
                }, {
                    key: "pause",
                    value: function() {
                        clearInterval(this.autoPlayInterval), this.paused = !0
                    }
                }, {
                    key: "getAndSetDimensions",
                    value: function() {
                        this.width = this.$el.outerWidth(), this.thumbWidth = this.width / this.visibles, this.$wrapper.css("width", this.width), this.$items.css("width", this.thumbWidth), this.$ribbon.css({
                            width: this.getRibbonWidth()
                        })
                    }
                }, {
                    key: "getRibbonWidth",
                    value: function() {
                        var a = void 0;
                        return a = this.$items.length <= this.visibles ? this.$items.length * this.thumbWidth : this.$items.length * this.thumbWidth
                    }
                }, {
                    key: "visibles",
                    get: function() {
                        return this._numVisible
                    },
                    set: function(a) {
                        this._numVisible = a
                    }
                }, {
                    key: "itemsLength",
                    get: function() {
                        return this._itemLength
                    },
                    set: function(a) {
                        this._itemLength = a
                    }
                }, {
                    key: "index",
                    get: function() {
                        return this._index
                    },
                    set: function(a) {
                        this._index = a
                    }
                }, {
                    key: "paused",
                    get: function() {
                        return this._paused
                    },
                    set: function(a) {
                        this._paused = a
                    }
                }, {
                    key: "autoPlay",
                    get: function() {
                        return this._autoPlay
                    },
                    set: function(a) {
                        this._autoPlay = a
                    }
                }, {
                    key: "controlHeight",
                    get: function() {
                        return m["default"].getOuterHeight(this.$prev)
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Slider",
                            version: "1.3.3",
                            vc: !0,
                            mod: !1
                        }
                    }
                }]), b
            }(o["default"]);
        c["default"] = q
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    30: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers"),
            j = (d(i), a("../../utils/helpers-focus")),
            k = d(j),
            l = a("../../app"),
            m = d(l),
            n = a("../_global/module"),
            o = d(n),
            p = m["default"].$,
            q = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            selectorToggle: '[data-js-atom="subnav-toggle"]',
                            scrollContainer: '[data-js-atom="scroll-container"]'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return m["default"].registerModule && m["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.$subNavButtons = this.$el.find(this.options.selectorToggle), this.$scrollContainer = p(this.options.scrollContainer, this.el), this.$subNavList = p(".subnav__list", this.el), this.listWidth = this.$subNavList.outerWidth(), this.$listItems = p(".subnav__list-item", this.el), this.$subLists = p(".subnav__sublist", this.el), this.$subNavInner = p(".subnav__inner", this.el), this.isScrollable = !1, this.currentOpenIndex = -1, this.$subNavList.outerWidth() > this.$scrollContainer.outerWidth() && (this.isScrollable = !0), this.focusableElementsSubList = k["default"].getFocusableChildren(this.$subNavList.get(0)), this.currentX = 0, this.isScrollable && (this.calcMinMaxScrollX(), this.updateGradient()), this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this,
                            b = this,
                            c = function(a) {
                                a.preventDefault();
                                var c = p(a.currentTarget),
                                    d = c.closest("li"),
                                    e = b.$subNavButtons.index(c);
                                b.navIsOpen ? e === b.currentOpenIndex ? (b.navIsOpen = !1, b.closeSubNav(b.currentOpenIndex), b.updateMainNav(d, !1), b.updateButton(b.currentOpenIndex, !1), b.currentOpenIndex = -1) : (b.closeSubNav(b.currentOpenIndex), b.updateButton(b.currentOpenIndex, !1), b.updateMainNav(b.$subNavButtons.eq(b.currentOpenIndex).closest("li"), !1), b.currentOpenIndex = e, b.setNavPosition(d, b.$subLists.eq(e)), b.updateMainNav(d, !0), b.openSubNav(e), b.updateButton(e, !0)) : (b.updateMainNav(d, !0), b.setNavPosition(d, b.$subLists.eq(e)), b.openSubNav(e), b.updateButton(e, !0), b.navIsOpen = !0, b.currentOpenIndex = e)
                            };
                        this.$subNavButtons.on("click", c), this.boundKeypress = function(b) {
                            return a.bindKeypress(b)
                        }, this.isScrollable && this.$scrollContainer.on("touchstart", b.touchstart.bind(b)), this.handleFocus()
                    }
                }, {
                    key: "handleFocus",
                    value: function() {
                        this.$subNavButtons.on("keydown", this.boundKeypress)
                    }
                }, {
                    key: "bindKeypress",
                    value: function(a) {
                        if (this.navIsOpen && 9 === a.which) {
                            var b = k["default"].getFocusableChildren(this.$openSubNavList.get(0));
                            0 != b.length && (b[0].focus(), a.preventDefault())
                        }
                    }
                }, {
                    key: "handleFocusInSubNav",
                    value: function(a) {
                        var b = this,
                            c = k["default"].getFocusableChildren(a.get(0));
                        c.length > 1 && c[c.length - 1].addEventListener("keydown", function(a) {
                            if (9 === a.which && !a.shiftKey) {
                                b.closeAllSubNavs();
                                var c = b.focusableElementsSubList.indexOf(b.beforeOpenActiveElement);
                                c < b.focusableElementsSubList.length && (b.focusableElementsSubList[c + 1].focus(), a.preventDefault())
                            }
                        }), c[0].addEventListener("keydown", function(a) {
                            9 === a.which && a.shiftKey && (b.beforeOpenActiveElement.focus(), a.preventDefault())
                        })
                    }
                }, {
                    key: "calcMinMaxScrollX",
                    value: function() {
                        this.minScrollX = 0, this.maxScrollX = parseInt((this.listWidth - this.$scrollContainer.outerWidth()) * -1, 10)
                    }
                }, {
                    key: "toggleEvents",
                    value: function(a) {
                        var b = this;
                        this.$scrollContainer[a]("touchmove", b.touchmove.bind(b)), this.$scrollContainer[a]("touchend", b.touchend.bind(b))
                    }
                }, {
                    key: "getCurrentScrollPosition",
                    value: function() {
                        var a = this.$subNavList.css("transform");
                        return a.indexOf("matrix3d") ? this.$subNavList.css("transform").split(/,\s*/)[4] || 0 : this.$subNavList.css("transform").split(/,\s*/)[12] || 0
                    }
                }, {
                    key: "touchstart",
                    value: function(a) {
                        this.toggleEvents("on"), this.startX = a.originalEvent.touches[0].pageX;
                        var b = this.$subNavList.css("transform");
                        b.indexOf("matrix3d") ? this.currentX = +this.$subNavList.css("transform").split(/,\s*/)[4] || 0 : this.currentX = +this.$subNavList.css("transform").split(/,\s*/)[12] || 0
                    }
                }, {
                    key: "touchmove",
                    value: function(a) {
                        var b = this.startX - a.originalEvent.touches[0].pageX,
                            c = this.currentX - b;
                        this.closeAllSubNavs(), c > this.minScrollX && (c = 0), c < this.maxScrollX && (c = this.maxScrollX), this.$subNavList.css({
                            transform: "translate3d(" + c + "px, 0, 0)"
                        })
                    }
                }, {
                    key: "touchend",
                    value: function(a) {
                        this.toggleEvents("off"), this.updateGradient()
                    }
                }, {
                    key: "closeAllSubNavs",
                    value: function() {
                        if (0 != this.$subLists.length) {
                            this.$subLists.removeClass("show");
                            var a = k["default"].getFocusableChildren(this.$subLists.get(0));
                            p.each(a, function(a) {
                                return a.removeEventListener("keydown")
                            })
                        }
                        this.$subNavButtons.attr("aria-expanded", !1), this.$listItems.removeClass("open"), this.navIsOpen = !1
                    }
                }, {
                    key: "setNavPosition",
                    value: function(a, b) {
                        var c = (this.$subNavInner.outerWidth(!0) - this.$subNavInner.width()) / 2,
                            d = this.$el.offset().left,
                            e = a.outerWidth(),
                            f = b.outerWidth(!0);
                        f < e && b.css("width", a.outerWidth() + "px"), b.css("left", a.offset().left - c - d + "px")
                    }
                }, {
                    key: "updateGradient",
                    value: function() {
                        var a = parseInt(this.getCurrentScrollPosition(), 10);
                        this.$el.removeClass("scroll-l"), this.$el.removeClass("scroll-r"), 0 === a && this.$el.removeClass("scroll-l"), 0 === a && this.isScrollable && this.$el.addClass("scroll-r"), a < 0 && this.$el.addClass("scroll-l"), a < 0 && a > this.maxScrollX && this.$el.addClass("scroll-r"), this.maxScrollX === a && this.$el.removeClass("scroll-r")
                    }
                }, {
                    key: "updateMainNav",
                    value: function(a, b) {
                        a[b ? "addClass" : "removeClass"]("open")
                    }
                }, {
                    key: "openSubNav",
                    value: function(a) {
                        this.beforeOpenActiveElement = document.activeElement, this.$openSubNavList = this.$subLists.eq(a), this.$subLists.eq(a).addClass("show"), this.handleFocusInSubNav(this.$openSubNavList)
                    }
                }, {
                    key: "closeSubNav",
                    value: function(a) {
                        this.$subLists.eq(a).removeClass("show")
                    }
                }, {
                    key: "updateButton",
                    value: function(a, b) {
                        this.$subNavButtons.eq(a).attr("aria-expnded", b)
                    }
                }, {
                    key: "render",
                    value: function() {}
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "subNav",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(o["default"]);
        c["default"] = q
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../../utils/helpers-focus": 42,
        "../_global/module": 5
    }],
    31: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function q(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : q(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = (d(j), a("../../app")),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            selectorTabLink: '[data-js-atom="tab-link"]',
                            selectorTabActiveLink: '[data-js-atom="tab-link"][aria-selected="true"]',
                            selectorTabPanel: '[data-js-atom="tab-panel"]',
                            selectorTabActivePanel: '[data-js-atom="tab-panel"]:not([aria-hidden="true"])'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.$tabLink = this.$el.find(this.options.selectorTabLink), this.$tabActiveLink = this.$el.find(this.options.selectorTabActiveLink), this.$tabPanel = this.$el.find(this.options.selectorTabPanel), this.$tabLink.each(function() {
                            o(this).attr("aria-controls", o(this).attr("href").substring(1))
                        }), this.$activePanel = this.$tabPanel.eq(this.$tabLink.index(this.$tabActiveLink)), this.$tabPanel.not(this.$activePanel).attr("aria-hidden", !0), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this.tabClick.bind(this);
                        this.$el.on("click", this.options.selectorTabLink, a)
                    }
                }, {
                    key: "tabClick",
                    value: function(a) {
                        a.preventDefault(), this.$tabLink.attr({
                            "aria-selected": null
                        }), a.target.setAttribute("aria-selected", !0), this.$tabPanel.attr("aria-hidden", "true"), o("#" + a.target.getAttribute("href").substring(1)).attr("aria-hidden", null)
                    }
                }, {
                    key: "render",
                    value: function() {}
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Tabtree",
                            version: "0.0.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    32: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../app"),
            j = d(i),
            k = a("../_global/module"),
            l = d(k),
            m = j["default"].$,
            n = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            datetimeFormatCustom: "YYYY-MM-DDTHH:mm:ss.SSSZ",
                            datetimeFormatTimestamp: "X",
                            fromNow: !0,
                            time: '[data-js-atom="time"]'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return j["default"].registerModule && j["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.$time = this.$el.find(this.options.time), 0 === this.$time.length
                    }
                }, {
                    key: "render",
                    value: function() {
                        var a = this;
                        "string" == typeof this.options.fromNow && (this.options.fromNow = "true" == this.options.fromNow), this.options.fromNow ? m.each(this.$time, function(b, c) {
                            var d = m(c),
                                e = d.attr("datetime"),
                                f = e.match(/[0-9]{10}/i) ? a.options.datetimeFormatTimestamp : a.options.datetimeFormatCustom;
                            d.text(j["default"].Moment(e, f).fromNow())
                        }) : m.each(this.$time, function(b, c) {
                            var d = m(c),
                                e = d.attr("datetime"),
                                f = e.match(/[0-9]{10}/i) ? a.options.datetimeFormatTimestamp : a.options.datetimeFormatCustom;
                            d.text(j["default"].Moment(parseInt(e + "000", 10)).format(f))
                        })
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Teaser",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(l["default"]);
        c["default"] = n
    }, {
        "../../app": 3,
        "../_global/module": 5
    }],
    33: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b;
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../utils/helpers"),
            j = d(i),
            k = a("../app"),
            l = d(k),
            m = a("./_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                        reactOnMQChange: {
                            active: ["desktop", "mobile"],
                            inactive: ["tablet"]
                        }
                    };
                    return f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c))
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this;
                        this.initComplete = !1, this.options.reactOnMQChange && 0 != Object.getOwnPropertyNames(this.options.reactOnMQChange).length ? (a.setModuleStateByMediaQuery(), l["default"].Vent.on(l["default"].EVENTS.mediachange, function(b, c) {
                            a.setModuleStateByMediaQuery()
                        })) : this.initModule()
                    }
                }, {
                    key: "initModule",
                    value: function() {
                        console.log("initModule  "), o(".box").eq(2).hide(), this.initComplete = !0
                    }
                }, {
                    key: "destroyModule",
                    value: function() {
                        console.log("destroyModule"), o(".box").eq(2).show(), this.initComplete = !1
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        console.log("bindEvents")
                    }
                }, {
                    key: "setModuleStateByMediaQuery",
                    value: function() {
                        if (console.log("setModuleStateByMediaQuery"), j["default"].activateModule(this.options.reactOnMQChange)) {
                            if (console.log("i"), this.initComplete) return;
                            this.initModule()
                        } else {
                            if (console.log("d"), !this.initComplete) return;
                            this.destroyModule()
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../app": 3,
        "../utils/helpers": 44,
        "./_global/module": 5
    }],
    34: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function p(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : p(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = (d(j), a("../../app")),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = (l["default"].$, function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            selectorContent: '[data-js-atom="twitter-include-widget"]'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        this.$content = this.$el.find(this.options.selectorContent), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this), this.options.twitterScriptUrl = "http" + ("https:" === location.protocol ? "s://s" : "://") + "platform.twitter.com/widgets.js"
                    }
                }, {
                    key: "bindEvents",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {}
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "TwitterInclude",
                            version: "1.0.0"
                        }
                    }
                }]), b
            }(n["default"]));
        c["default"] = o
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    35: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function p(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : p(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../utils/helpers"),
            k = (d(j), a("../../app")),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = (l["default"].$, function(a) {
                function b(a) {
                    e(this, b);
                    var c = {},
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        console.log("init VideoStage"), i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {}
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "VideoStage",
                            version: "0.0.0"
                        }
                    }
                }]), b
            }(n["default"]));
        c["default"] = o
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    36: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = a("../../utils/helpers"),
            j = d(i),
            k = a("../../app"),
            l = d(k),
            m = a("../_global/module"),
            n = d(m),
            o = l["default"].$,
            p = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            videoTemplate: "VIDEO",
                            teaserActiveHTML: '<div class="teaser__video-watching-info"><p class="teaser__video-watching-info-text">now Watching</p> </div>'
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return l["default"].registerModule && l["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        var a = this;
                        l["default"].Vent.on(l["default"].EVENTS.cxenseInclude.contentUpdated, function() {
                            return a.onCxsenseReady()
                        })
                    }
                }, {
                    key: "onCxsenseReady",
                    value: function() {
                        var a = this.options;
                        this.$teasers = o(".c-teaser--default", this.el), this.videoTemplate = window.App.Templates[a.videoTemplate], this.currentVideoID = "", this.currentContainerID = "", this.updateTeasers(this.$teasers.eq(0)), this.updateVideoStage(this.$teasers.eq(0)), this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        this.$teasers.on("click", function(b) {
                            return a.handleTeaserClick(b)
                        })
                    }
                }, {
                    key: "handleTeaserClick",
                    value: function(a) {
                        a.preventDefault();
                        var b = o(a.currentTarget);
                        this.updateTeasers(b), this.updateVideoStage(b)
                    }
                }, {
                    key: "updateTeasers",
                    value: function(a) {
                        o(".teaser__video-watching-info", this.$teasers).remove(), this.$teasers.removeClass("is-active"), a.addClass("is-active"), a.prepend(this.options.teaserActiveHTML)
                    }
                }, {
                    key: "updateVideoStage",
                    value: function(a) {
                        var b = this.getVideoId(a);
                        if (this.currentVideoID != b) {
                            this.currentVideoID = b;
                            var c = this.getTemplateData(a),
                                d = c.containerId;
                            l["default"].Vent.trigger(l["default"].EVENTS.video.playerDestroy, {
                                videoID: this.currentContainerID
                            }), this.currentContainerID = d, this.addVideo(c)
                        }
                    }
                }, {
                    key: "getVideoId",
                    value: function(a) {
                        return a.data("video-id")
                    }
                }, {
                    key: "getTemplateData",
                    value: function(a) {
                        var b = {};
                        b.videoContextClass = "default", b.hasVideoLayer = !0, b.videoClasses = "is-video-section", b.title = o(".teaser__title", a).text(), b.time = o(".teaser__time", a).text(), b.url = o(".teaser__title", a).attr("href"), b.articleid = a.data("video-id"), b.duration = o(".teaser__duration-time", a).text().replace("minutes", ""), b.isPreview = a.data("isPreview");
                        var c = function(a) {
                                return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
                            },
                            d = a.data("title") || "";
                        d = c(d.replace(/(["])/g, "\\$1"));
                        var e = b.url || "";
                        e = c(e.replace(/(["])/g, "\\$1"));
                        var f = a.data("categoryTitle") || "";
                        return f = c(f.replace(/(["])/g, "\\$1")), console.log([d, e, f]), b.videoJsOptions = [{
                            optionsKey: "assetId",
                            optionsValue: a.data("video-id")
                        }, {
                            optionsKey: "title",
                            optionsValue: d
                        }, {
                            optionsKey: "duration",
                            optionsValue: a.data("duration")
                        }, {
                            optionsKey: "cp1",
                            optionsValue: a.data("cp1")
                        }, {
                            optionsKey: "pubDate",
                            optionsValue: a.data("pubDate")
                        }, {
                            optionsKey: "webExclusive",
                            optionsValue: a.data("webExclusive")
                        }, {
                            optionsKey: "categoryTitle",
                            optionsValue: f
                        }, {
                            optionsKey: "url",
                            optionsValue: e
                        }, {
                            optionsKey: "cmcontentid",
                            optionsValue: a.data("cmcontentid")
                        }, {
                            optionsKey: "contentId",
                            optionsValue: a.data("contentId")
                        }, {
                            optionsKey: "isPreview",
                            optionsValue: a.data("isPreview")
                        }], b.containerId = "id-" + a.data("video-id") + j["default"].makeId(), b
                    }
                }, {
                    key: "addVideo",
                    value: function(a) {
                        var b = this.videoTemplate(a);
                        o(".c-video--default", this.el).replaceWith(b);
                        var c = o(".c-video--default", this.el);
                        c.trigger(l["default"].EVENTS.DOMchanged)
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "VideoSection",
                            version: "0.1.0"
                        }
                    }
                }]), b
            }(n["default"]);
        c["default"] = p
    }, {
        "../../app": 3,
        "../../utils/helpers": 44,
        "../_global/module": 5
    }],
    37: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        }

        function g(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            i = function p(a, b, c) {
                null === a && (a = Function.prototype);
                var d = Object.getOwnPropertyDescriptor(a, b);
                if (void 0 === d) {
                    var e = Object.getPrototypeOf(a);
                    return null === e ? void 0 : p(e, b, c)
                }
                if ("value" in d) return d.value;
                var f = d.get;
                if (void 0 !== f) return f.call(c)
            },
            j = a("../../app"),
            k = d(j),
            l = a("../_global/module"),
            m = d(l),
            n = k["default"].$,
            o = function(a) {
                function b(a) {
                    e(this, b);
                    var c = {
                            selectorVideoContainer: '[data-js-atom="video-container"]',
                            selectorCustomVideoBtn: '[data-js-atom="video__custom-btn"]',
                            selectorCustomVideoLayer: '[data-js-atom="video__custom-layer"]',
                            videoDuration: '[data-js-atom="video-duration"]',
                            selectorVideoLayer: '[data-js-atom="video-layer"]',
                            ooyalaPCode: "hidm4xOtnoc0OwWaDZnM4-sJ0A0r",
                            ooyalaPlayerBrandingId: "9e62d5dcf073471ca9c378ce3cc61267",
                            isLiveStream: !1,
                            platform: "html5",
                            skin: {
                                startScreen: {
                                    showTitle: !1,
                                    showDescription: !1
                                },
                                responsive: {
                                    aspectRatio: "56.25"
                                },
                                controlBar: {
                                    logo: {
                                        imageResource: {
                                            url: ""
                                        }
                                    },
                                    scrubberBar: {
                                        backgroundColor: "#fff",
                                        bufferedColor: "#c52626",
                                        playedColor: "#ff0000",
                                        scrubberHandleColor: "#ff0000",
                                        scrubberHandleBorderColor: "#ff0000"
                                    }
                                },
                                icons: {
                                    share: {
                                        fontFamilyName: "aperto",
                                        fontString: "",
                                        fontStyleClass: "i-share"
                                    },
                                    quality: {
                                        fontFamilyName: "aperto",
                                        fontString: "",
                                        fontStyleClass: ""
                                    },
                                    expand: {
                                        fontFamilyName: "aperto",
                                        fontString: "",
                                        fontStyleClass: "i-expand"
                                    },
                                    compress: {
                                        fontFamilyName: "aperto",
                                        fontString: "",
                                        fontStyleClass: "i-fullscreen"
                                    }
                                }
                            }
                        },
                        d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
                    return k["default"].registerModule && k["default"].registerModule(b.info, d.el), d
                }
                return g(b, a), h(b, [{
                    key: "initialize",
                    value: function() {
                        i(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "initialize", this).call(this), console.log("init Video");
                        var a = "false";
                        this.ooyalaBasePath = "//player.ooyala.com/static/v4/production/", this.ooyalaPlayerCoreScript = this.ooyalaBasePath + "core.min.js", this.ooyalaPlayerMainVideoPluginScript = this.ooyalaBasePath + "video-plugin/main_html5.min.js", this.options.isLiveStream ? this.ooyalaPlayerOSMFVideoPluginScript = this.ooyalaBasePath + "video-plugin/akamaiHD_flash.min.js" : this.ooyalaPlayerOSMFVideoPluginScript = this.ooyalaBasePath + "video-plugin/osmf_flash.min.js", this.ooyalaPlayerBitDashVideoPluginScript = this.ooyalaBasePath + "video-plugin/bit_wrapper.min.js", this.ooyalaPlayerSkinScript = this.ooyalaBasePath + "skin-plugin/html5-skin.min.js", this.ooyalaPlayerSkinStyles = this.ooyalaBasePath + "skin-plugin/html5-skin.min.css", this.ooyalaPlayerSkin = this.ooyalaBasePath + "skin-plugin/skin.json", this.googleImaAdPluginScript = this.ooyalaBasePath + "ad-plugin/google_ima.min.js", this.ooyalaStreamingTagPluginScript = "//sb.scorecardresearch.com/c2/plugins/streamingtag_plugin_ooyalav4.js", window.ooyalaConfig && window.ooyalaConfig.call(this), this.$selectorVideoContainer = this.$el.find(this.options.selectorVideoContainer), this.videoContainerId = this.$selectorVideoContainer.attr("id"), a = this.$selectorVideoContainer.attr("is-preview"), this.isPreview = null != a && "true" === a, this.googleImaAdPluginScript = this.isPreview ? null : this.ooyalaBasePath + "ad-plugin/google_ima.min.js", console.info({
                            id: this.videoContainerId,
                            isPreview: this.isPreview,
                            attrIsPreview: a,
                            googleImaAdPluginScript: this.googleImaAdPluginScript
                        }), this.videoplayer = null, this.$selectorCustomVideoBtn = this.$el.find(this.options.selectorCustomVideoBtn), this.videoLayer = this.$el.find(this.options.selectorVideoLayer), this.videoDuration = this.$el.find(this.options.videoDuration), n.isEmptyObject(k["default"].ooyalaPlayer) ? k["default"].ooyalaPlayerInitialized || (k["default"].ooyalaPlayerInitialized = !0, this.initializeOoyalaPlayer()) : this.render(), this.options.hasCustomLayout && this.launchCustomVideo()
                    }
                }, {
                    key: "launchCustomVideo",
                    value: function() {
                        var a = this;
                        this.$selectorCustomVideoBtn.on("click", function() {
                            a.playCustomPlayer()
                        })
                    }
                }, {
                    key: "playCustomPlayer",
                    value: function() {
                        this.videoplayer.play()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var a = this;
                        this.boundRender = function(b) {
                            return a.render(b)
                        }, k["default"].Vent.on(k["default"].EVENTS.video.playerInitialized, this.boundRender)
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        k["default"].Vent.off(k["default"].EVENTS.video.playerInitialized, this.boundRender)
                    }
                }, {
                    key: "bindGlobalEvents",
                    value: function() {
                        var a = this,
                            b = this;
                        this.boundPlayerStop = function(b, c) {
                            return a.stopPlayer(b, c)
                        }, this.boundPlayerDestroy = function(b, c) {
                            return a.destroyPlayer(b, c)
                        }, this.boundPlayerChangeSize = function(b, c) {
                            return a.changeSizePlayer(b, c)
                        }, k["default"].Vent.on(k["default"].EVENTS.video.playerStop, this.boundPlayerStop), k["default"].Vent.on(k["default"].EVENTS.video.playerDestroy, this.boundPlayerDestroy), k["default"].Vent.on(k["default"].EVENTS.video.playerChangeSize, this.boundPlayerChangeSize), this.videoplayer.mb.subscribe(k["default"].ooyalaPlayer.EVENTS.WILL_PLAY_ADS, "willadsplay", function(a) {
                            b.$el.attr("data-player-state", "will-play-ads")
                        }), this.videoplayer.mb.subscribe(k["default"].ooyalaPlayer.EVENTS.ADS_PLAYED, "adsplayed", function(a) {
                            b.$el.attr("data-player-state", "ads-played")
                        }), this.videoplayer.mb.subscribe(k["default"].ooyalaPlayer.EVENTS.PLAYER_CREATED, "created", function(a) {
                            b.$el.attr("data-player-state", "is-created")
                        }), this.videoplayer.mb.subscribe(k["default"].ooyalaPlayer.EVENTS.PLAY, "play", function(a) {
                            b.$el.attr("data-player-state", "is-playing"), k["default"].Vent.trigger(k["default"].EVENTS.video.playerPlayed, {
                                el: b.$el,
                                playerState: "is-playing",
                                videoId: b.videoContainerId
                            })
                        }), this.videoplayer.mb.subscribe(k["default"].ooyalaPlayer.EVENTS.PAUSE, "pause", function(a) {
                            b.$el.attr("data-player-state", "is-pause")
                        }), this.videoplayer.mb.subscribe(k["default"].ooyalaPlayer.EVENTS.PAUSED, "paused", function(a) {
                            b.$el.attr("data-player-state", "is-paused"), k["default"].Vent.trigger(k["default"].EVENTS.video.playerPaused, {
                                el: b.$el,
                                playerState: "is-paused",
                                videoId: b.videoContainerId
                            })
                        })
                    }
                }, {
                    key: "unbindGlobalEvents",
                    value: function() {
                        k["default"].Vent.off(k["default"].EVENTS.video.playerStop, this.boundPlayerStop), k["default"].Vent.off(k["default"].EVENTS.video.playerDestroy, this.boundPlayerDestroy)
                    }
                }, {
                    key: "initializeOoyalaPlayer",
                    value: function() {
                        var a = this;
                        k["default"].loadCSS(this.ooyalaPlayerSkinStyles), n.when(n.getScript(this.ooyalaPlayerCoreScript), n.Deferred(function(a) {
                            n(a.resolve)
                        })).done(function() {
                            n.when(n.getScript(a.ooyalaPlayerMainVideoPluginScript), n.getScript(a.ooyalaPlayerOSMFVideoPluginScript), n.getScript(a.ooyalaPlayerBitDashVideoPluginScript), n.getScript(a.ooyalaPlayerSkinScript), n.getScript(a.googleImaAdPluginScript), n.getScript(a.ooyalaStreamingTagPluginScript), n.Deferred(function(a) {
                                n(a.resolve)
                            })).done(function() {
                                n.extend(window.OO, k["default"].ooyalaPlayer), k["default"].ooyalaPlayer = window.OO, k["default"].Vent.trigger(k["default"].EVENTS.video.playerInitialized)
                            })
                        })
                    }
                }, {
                    key: "stopPlayer",
                    value: function(a, b) {
                        console.log("ddddd"), b.videoID === this.videoContainerId && this.videoplayer.pause()
                    }
                }, {
                    key: "changeSizePlayer",
                    value: function(a, b) {
                        console.log("change size player"), b.videoID === this.videoContainerId && this.videoplayer.mb.publish(OO.EVENTS.SIZE_CHANGED, 320, 320)
                    }
                }, {
                    key: "destroyPlayer",
                    value: function(a, b) {
                        b.videoID === this.videoContainerId && (console.log("DESTROY"), this.videoplayer.destroy(), this.unbindEvents(), this.unbindGlobalEvents())
                    }
                }, {
                    key: "onCreatePlayer",
                    value: function(a) {
                        this.videoplayer = a, this.bindGlobalEvents(), window.initVideoTracking && window.initVideoTracking.call(this, a)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var a = this,
                            b = this,
                            c = !1,
                            d = !!this.options.autoplay && 100,
                            e = this.options.autoplay ? "p" : "r",
                            f = this.options.ComScoreOoyalaPlugin || {};
                        this.options.adsUrl && !this.isPreview && (c = {
                            all_ads: [{
                                position_type: e,
                                position: d,
                                tag_url: this.options.adsUrl
                            }]
                        }), window.ComScoreOoyalaPlugin && (f = window.ComScoreOoyalaPlugin), k["default"].ooyalaPlayer.ready(function() {
                            window.pp = k["default"].ooyalaPlayer.Player.create(a.videoContainerId, a.options.assetId, {
                                autoplay: a.options.autoplay,
                                "google-ima-ads-manager": c,
                                ComScoreOoyalaPlugin: f,
                                pcode: a.options.ooyalaPCode,
                                platform: a.options.platform,
                                playerBrandingId: a.options.ooyalaPlayerBrandingId,
                                initialTime: a.options.initialTime || 0,
                                skin: {
                                    config: a.ooyalaPlayerSkin,
                                    inline: a.options.skin
                                },
                                onCreate: function(a) {
                                    b.onCreatePlayer(a)
                                }
                            })
                        })
                    }
                }], [{
                    key: "info",
                    get: function() {
                        return {
                            name: "Video",
                            version: "0.1.0"
                        }
                    }
                }]), b
            }(m["default"]);
        c["default"] = o
    }, {
        "../../app": 3,
        "../_global/module": 5
    }],
    38: [function(a, b, c) {
        "use strict";
        var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
        };
        b.exports = function(a) {
            return window.App = window.App || {}, window.App.Templates = window.App.Templates || {}, a.registerPartial("cta", a.template({
                1: function(a, b, c, d, e) {
                    return "button"
                },
                3: function(a, b, c, d, e) {
                    return "a"
                },
                5: function(a, b, c, d, e) {
                    var f;
                    return "--" + a.escapeExpression((f = null != (f = c.ctaContextClass || (null != b ? b.ctaContextClass : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "ctaContextClass",
                        hash: {},
                        data: e
                    }) : f))
                },
                7: function(a, b, c, d, e) {
                    return "--default"
                },
                9: function(a, b, c, d, e) {
                    var f;
                    return " " + a.escapeExpression((f = null != (f = c.ctaClass || (null != b ? b.ctaClass : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "ctaClass",
                        hash: {},
                        data: e
                    }) : f))
                },
                11: function(a, b, c, d, e) {
                    var f;
                    return ' title="' + a.escapeExpression((f = null != (f = c.ctaContent || (null != b ? b.ctaContent : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "ctaContent",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                13: function(a, b, c, d, e) {
                    var f;
                    return ' href="' + a.escapeExpression((f = null != (f = c.ctaTarget || (null != b ? b.ctaTarget : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "ctaTarget",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                15: function(a, b, c, d, e) {
                    return ' target="_blank"'
                },
                17: function(a, b, c, d, e) {
                    var f;
                    return ' data-js-atom="' + a.escapeExpression((f = null != (f = c.ctaJsAtom || (null != b ? b.ctaJsAtom : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "ctaJsAtom",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                19: function(a, b, c, d, e) {
                    var f;
                    return ' data-js-module="cta" data-js-options=\'{\n\t' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.jsOptions : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(20, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\n\t}'"
                },
                20: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function";
                    return '"' + a.escapeExpression((h = null != (h = c.jsKey || (null != b ? b.jsKey : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "jsKey",
                        hash: {},
                        data: f
                    }) : h)) + '": ' + (null != (g = c.unless.call(i, null != b ? b.jsObject : b, {
                        name: "unless",
                        hash: {},
                        fn: a.program(21, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + (null != (h = null != (h = c.jsValue || (null != b ? b.jsValue : b)) ? h : j, g = ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "jsValue",
                        hash: {},
                        data: f
                    }) : h) ? g : "") + (null != (g = c.unless.call(i, null != b ? b.jsObject : b, {
                        name: "unless",
                        hash: {},
                        fn: a.program(21, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + (null != (g = c["if"].call(i, f && f.last, {
                        name: "if",
                        hash: {},
                        fn: a.program(23, f, 0),
                        inverse: a.program(25, f, 0),
                        data: f
                    })) ? g : "")
                },
                21: function(a, b, c, d, e) {
                    return '"'
                },
                23: function(a, b, c, d, e) {
                    return ""
                },
                25: function(a, b, c, d, e) {
                    return ", "
                },
                27: function(a, b, c, d, e) {
                    return '\t\t<span class="cta__icon"></span>\n'
                },
                29: function(a, b, c, d, e) {
                    var f;
                    return '\t\t<span class="cta__icon-count">\n\t\t\t<span class="i-gallery" data-grunticon-embed="true"></span>\n\t\t\t' + a.escapeExpression((f = null != (f = c.ctaCount || (null != b ? b.ctaCount : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "ctaCount",
                        hash: {},
                        data: e
                    }) : f)) + "\n\t\t</span>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f, g, h = null != b ? b : {};
                    return "<" + (null != (f = c["if"].call(h, null != b ? b.ctaButton : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.program(3, e, 0),
                        data: e
                    })) ? f : "") + '\n\t\tclass="c-cta' + (null != (f = c["if"].call(h, null != b ? b.ctaContextClass : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, e, 0),
                        inverse: a.program(7, e, 0),
                        data: e
                    })) ? f : "") + (null != (f = c["if"].call(h, null != b ? b.ctaClass : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(9, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '"\n\t\tdata-css="c-cta"\n\t' + (null != (f = c["if"].call(h, null != b ? b.ctaContent : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(11, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\n\t" + (null != (f = c["if"].call(h, null != b ? b.ctaTarget : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(13, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\n\t" + (null != (f = c["if"].call(h, null != b ? b.ctaDownload : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(15, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\n\t" + (null != (f = c["if"].call(h, null != b ? b.ctaJsAtom : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(17, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\n\t" + (null != (f = c["if"].call(h, null != b ? b.ctaJsModule : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(19, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + ">\n" + (null != (f = c["if"].call(h, null != b ? b.ctaIcon : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(27, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\n" + (null != (f = c["if"].call(h, null != b ? b.ctaCount : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(29, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '\n\t<span class="cta__content">' + a.escapeExpression((g = null != (g = c.ctaContent || (null != b ? b.ctaContent : b)) ? g : c.helperMissing, "function" == typeof g ? g.call(h, {
                        name: "ctaContent",
                        hash: {},
                        data: e
                    }) : g)) + "</span>\n</" + (null != (f = c["if"].call(h, null != b ? b.ctaButton : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.program(3, e, 0),
                        data: e
                    })) ? f : "") + ">"
                },
                useData: !0
            })), a.registerPartial("sharing", a.template({
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, e, f) {
                    var g, h = null != b ? b : {},
                        i = c.helperMissing,
                        j = "function",
                        k = a.escapeExpression;
                    return '<div class="sharing__panel" id="sharing-panel-' + k((g = null != (g = c.articleid || (null != b ? b.articleid : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "articleid",
                        hash: {},
                        data: f
                    }) : g)) + '" data-js-atom="sharing-panel">\n\t<ul class="sharing__list">\n\t\t<li class="sharing__item">\n\t\t\t<span class="sharing__link-wrapper">\n\t\t\t\t<button class="sharing__link i-facebook" data-grunticon-embed="true" title="Share on Facebook"></button>\n\t\t\t\t<div class="pw-widget-wrapper">\n\t\t\t\t\t<a class="facebook" aria-hidden="true" data-url="' + k((g = null != (g = c.url || (null != b ? b.url : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "url",
                        hash: {},
                        data: f
                    }) : g)) + '"></a>\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</li>\n\t\t<li class="sharing__item">\n\t\t\t<span class="sharing__link-wrapper">\n\t\t\t\t<button class="sharing__link i-twitter" data-grunticon-embed="true" title="Share on Twitter"></button>\n\t\t\t\t<div class="pw-widget-wrapper">\n\t\t\t\t\t<a class="twitter" aria-hidden="true" data-url="' + k((g = null != (g = c.url || (null != b ? b.url : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "url",
                        hash: {},
                        data: f
                    }) : g)) + '"></a>\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</li>\n\t\t<li class="sharing__item is-hidden-smartphone">\n\t\t\t<span class="sharing__link-wrapper">\n\t\t\t\t<button class="sharing__link i-linkedin" data-grunticon-embed="true" title="Share on LinkedIn"></button>\n\t\t\t\t<div class="pw-widget-wrapper">\n\t\t\t\t\t<a class="linkedin" aria-hidden="true" data-url="' + k((g = null != (g = c.url || (null != b ? b.url : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "url",
                        hash: {},
                        data: f
                    }) : g)) + '"></a>\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</li>\n\n\t\t<li class="sharing__item is-hidden-desktop is-hidden-tablet">\n\t\t\t<span class="sharing__link-wrapper">\n\t\t\t\t<button class="sharing__link i-whatsapp" data-grunticon-embed="true" href="whatsapp://send?text=Visit%20' + k((g = null != (g = c.url || (null != b ? b.url : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "url",
                        hash: {},
                        data: f
                    }) : g)) + '" title="Share via Whatsapp" target="_blank"></button>\n\t\t\t\t<div class="pw-widget-wrapper">\n\t\t\t\t\t<a class="whatsapp" aria-hidden="true" data-url="' + k((g = null != (g = c.url || (null != b ? b.url : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "url",
                        hash: {},
                        data: f
                    }) : g)) + '"></a>\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</li>\n\n\t\t<li class="sharing__item">\n\t\t\t<span class="sharing__link-wrapper">\n\t\t\t\t<button class="sharing__link i-email" data-grunticon-embed="true" title="Share via E-Mail"></button>\n\t\t\t\t<div class="pw-widget-wrapper">\n\t\t\t\t\t<a class="email" aria-hidden="true" data-url="' + k((g = null != (g = c.url || (null != b ? b.url : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "url",
                        hash: {},
                        data: f
                    }) : g)) + '"></a>\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</li>\n\t</ul>\n</div>'
                },
                useData: !0
            })), a.registerPartial("teaser", a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return "--" + a.escapeExpression((f = null != (f = c.teaserContextClass || (null != b ? b.teaserContextClass : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "teaserContextClass",
                        hash: {},
                        data: e
                    }) : f))
                },
                3: function(a, b, c, d, e) {
                    return "--default"
                },
                5: function(a, b, c, d, e) {
                    var f;
                    return " " + a.escapeExpression((f = null != (f = c.teaserClasses || (null != b ? b.teaserClasses : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "teaserClasses",
                        hash: {},
                        data: e
                    }) : f))
                },
                7: function(a, b, c, d, e) {
                    var f;
                    return 'data-video-id="' + a.escapeExpression((f = null != (f = c.videoid || (null != b ? b.videoid : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "videoid",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                9: function(a, b, c, d, e) {
                    var f;
                    return 'data-title="' + a.escapeExpression((f = null != (f = c.title || (null != b ? b.title : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "title",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                11: function(a, b, c, d, e) {
                    var f;
                    return 'data-duration="' + a.escapeExpression((f = null != (f = c.durationInSeconds || (null != b ? b.durationInSeconds : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "durationInSeconds",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                13: function(a, b, c, d, e) {
                    var f;
                    return 'data-cp1="' + a.escapeExpression((f = null != (f = c.cp1 || (null != b ? b.cp1 : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "cp1",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                15: function(a, b, c, d, e) {
                    var f;
                    return 'data-pubDate="' + a.escapeExpression((f = null != (f = c.publishTime || (null != b ? b.publishTime : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "publishTime",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                17: function(a, b, c, d, e) {
                    var f;
                    return 'data-url="' + a.escapeExpression((f = null != (f = c.url || (null != b ? b.url : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "url",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                19: function(a, b, c, d, e) {
                    var f;
                    return 'data-categoryTitle="' + a.escapeExpression(a.lambda(null != (f = null != b ? b.category : b) ? f.title : f, b)) + '"'
                },
                21: function(a, b, c, d, e) {
                    var f;
                    return 'data-cmcontentid="' + a.escapeExpression((f = null != (f = c.articleid || (null != b ? b.articleid : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "articleid",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                23: function(a, b, c, d, e) {
                    var f;
                    return 'data-contentId="' + a.escapeExpression((f = null != (f = c.contentId || (null != b ? b.contentId : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "contentId",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                25: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '\t\t<a class="teaser__picture-wrapper" href="' + (null != (f = c["if"].call(g, null != b ? b.clickUrl : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(26, e, 0),
                        inverse: a.program(28, e, 0),
                        data: e
                    })) ? f : "") + '">\n' + (null != (f = a.invokePartial(d.picture, null != b ? b.image : b, {
                        name: "picture",
                        data: e,
                        indent: "\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\n" + (null != (f = c["if"].call(g, null != b ? b.time : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(30, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\t\t</a>\n"
                },
                26: function(a, b, c, d, e) {
                    var f;
                    return a.escapeExpression((f = null != (f = c.clickUrl || (null != b ? b.clickUrl : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "clickUrl",
                        hash: {},
                        data: e
                    }) : f))
                },
                28: function(a, b, c, d, e) {
                    var f;
                    return a.escapeExpression((f = null != (f = c.url || (null != b ? b.url : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "url",
                        hash: {},
                        data: e
                    }) : f))
                },
                30: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t\t<dl class="teaser__duration">\n\t\t\t\t\t<dt class="teaser__duration-icon i-arrow-play" data-grunticon-embed="true">Media playtime</dt>\n\t\t\t\t\t<dd class="teaser__duration-time">' + a.escapeExpression((f = null != (f = c.time || (null != b ? b.time : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "time",
                        hash: {},
                        data: e
                    }) : f)) + '<em class="is-aural"> minutes</em></dd>\n\t\t\t\t</dl>\n'
                },
                32: function(a, b, c, d, e) {
                    var f, g, h = null != b ? b : {};
                    return '\t\t\t<div class="teaser__category-container">\n\t\t\t\t<a class="teaser__category" href="' + (null != (f = c["if"].call(h, null != b ? b.clickUrl : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(26, e, 0),
                        inverse: a.program(28, e, 0),
                        data: e
                    })) ? f : "") + '">' + a.escapeExpression((g = null != (g = c.title || (null != b ? b.title : b)) ? g : c.helperMissing, "function" == typeof g ? g.call(h, {
                        name: "title",
                        hash: {},
                        data: e
                    }) : g)) + "</a>\n\t\t\t</div>\n"
                },
                34: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t\t<em class="teaser__ep-index">' + a.escapeExpression((f = null != (f = c.episode || (null != b ? b.episode : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "episode",
                        hash: {},
                        data: e
                    }) : f)) + "</em>\n"
                },
                36: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t<p class="teaser__standfirst">' + a.escapeExpression((f = null != (f = c.standfirst || (null != b ? b.standfirst : b)) ? f : c.helperMissing,
                        "function" == typeof f ? f.call(null != b ? b : {}, {
                            name: "standfirst",
                            hash: {},
                            data: e
                        }) : f)) + "</p>\n"
                },
                38: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t\t<time class="teaser__time" data-js-atom="time" datetime="' + a.escapeExpression((f = null != (f = c.publishTime || (null != b ? b.publishTime : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "publishTime",
                        hash: {},
                        data: e
                    }) : f)) + '"></time>\n'
                },
                40: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, null != b ? b.recspublishTime : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(41, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                41: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t\t\t<time class="teaser__time" data-js-atom="time" datetime="' + a.escapeExpression((f = null != (f = c.recspublishTime || (null != b ? b.recspublishTime : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "recspublishTime",
                        hash: {},
                        data: e
                    }) : f)) + '"></time>\n'
                },
                43: function(a, b, c, e, f) {
                    var g, h = null != b ? b : {},
                        i = c.helperMissing,
                        j = "function",
                        k = a.escapeExpression;
                    return '\t\t\t\t<dl class="teaser__schedule-meta">\n\t\t\t\t\t<dt class="is-aural">Always shown on: </dt>\n\t\t\t\t\t<dd class="teaser__schedule-day">' + k((g = null != (g = c.day || (null != b ? b.day : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "day",
                        hash: {},
                        data: f
                    }) : g)) + '</dd>\n\t\t\t\t\t<dd class="teaser__schedule-time">' + k((g = null != (g = c.time || (null != b ? b.time : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "time",
                        hash: {},
                        data: f
                    }) : g)) + "</dd>\n\t\t\t\t</dl>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function",
                        l = a.escapeExpression;
                    return '<div class="c-teaser' + (null != (g = c["if"].call(i, null != b ? b.teaserContextClass : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, f, 0),
                        inverse: a.program(3, f, 0),
                        data: f
                    })) ? g : "") + (null != (g = c["if"].call(i, null != b ? b.teaserClasses : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '" data-css="c-teaser" data-js-module="teaser"\n    ' + (null != (g = c["if"].call(i, null != b ? b.videoid : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(7, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n    " + (null != (g = c["if"].call(i, null != b ? b.title : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(9, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n    " + (null != (g = c["if"].call(i, null != b ? b.durationInSeconds : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(11, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n    " + (null != (g = c["if"].call(i, null != b ? b.cp1 : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(13, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n    " + (null != (g = c["if"].call(i, null != b ? b.publishTime : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(15, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n    " + (null != (g = c["if"].call(i, null != b ? b.url : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(17, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n    " + (null != (g = c["if"].call(i, null != (g = null != b ? b.category : b) ? g.title : g, {
                        name: "if",
                        hash: {},
                        fn: a.program(19, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n    " + (null != (g = c["if"].call(i, null != b ? b.articleid : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(21, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n    " + (null != (g = c["if"].call(i, null != b ? b.contentId : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(23, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + ">\n" + (null != (g = c["if"].call(i, null != b ? b.image : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(25, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\n\t<div class="teaser__content-wrapper">\n' + (null != (g = c["with"].call(i, null != b ? b.category : b, {
                        name: "with",
                        hash: {},
                        fn: a.program(32, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\n\t\t<h3 class="teaser__heading">\n\t\t\t<a class="teaser__title" href="' + (null != (g = c["if"].call(i, null != b ? b.clickUrl : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(26, f, 0),
                        inverse: a.program(28, f, 0),
                        data: f
                    })) ? g : "") + '">' + l((h = null != (h = c.title || (null != b ? b.title : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "title",
                        hash: {},
                        data: f
                    }) : h)) + "</a>\n" + (null != (g = c["if"].call(i, null != b ? b.episode : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(34, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\t\t</h3>\n\n" + (null != (g = c["if"].call(i, null != b ? b.standfirst : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(36, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\n\t\t<div class="teaser__additional-info">\n' + (null != (g = c["if"].call(i, null != b ? b.publishTime : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(38, f, 0),
                        inverse: a.program(40, f, 0),
                        data: f
                    })) ? g : "") + "\n" + (null != (g = c["with"].call(i, null != b ? b.scheduleMeta : b, {
                        name: "with",
                        hash: {},
                        fn: a.program(43, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\n\t\t\t<div class="c-sharing--menu is-teaser-position" data-css="c-sharing" data-js-module="sharing">\n\t\t\t\t<button class="sharing__toggle-btn ' + l((h = null != (h = c.shareToogleExtraClass || (null != b ? b.shareToogleExtraClass : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "shareToogleExtraClass",
                        hash: {},
                        data: f
                    }) : h)) + '" data-js-atom="sharing-toggle" aria-controls="sharing-panel-' + l((h = null != (h = c.articleid || (null != b ? b.articleid : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "articleid",
                        hash: {},
                        data: f
                    }) : h)) + '">\n\t\t\t\t\t<span class="sharing__open i-share" data-grunticon-embed="true"></span>\n\t\t\t\t\t<span class="sharing__close"><span class="sharing__close-icon"></span></span>\n\t\t\t\t\tToggle share menu\n\t\t\t\t</button>\n\n' + (null != (g = a.invokePartial(e.sharing, b, {
                        name: "sharing",
                        data: f,
                        indent: "\t\t\t\t",
                        helpers: c,
                        partials: e,
                        decorators: a.decorators
                    })) ? g : "") + "\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t</div>\n\n</div>"
                },
                usePartial: !0,
                useData: !0
            })), a.registerPartial("picture", a.template({
                1: function(a, b, c, d, e) {
                    var f, g, h = null != b ? b : {};
                    return (null != (f = c.each.call(h, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(2, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '\n\t\t\t<img class="picture__image lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="' + a.escapeExpression((g = null != (g = c.alt || (null != b ? b.alt : b)) ? g : c.helperMissing, "function" == typeof g ? g.call(h, {
                        name: "alt",
                        hash: {},
                        data: e
                    }) : g)) + '"/>\n'
                },
                2: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '\t\t\t\t<source data-srcset="' + (null != (f = c.each.call(g, null != b ? b.srcset : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '"' + (null != (f = c["if"].call(g, null != b ? b.sizes : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(9, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + (null != (f = c["if"].call(g, null != b ? b.media : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(15, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + (null != (f = c["if"].call(g, null != b ? b.type : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(17, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + " />\n"
                },
                3: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, e && e.first, {
                        name: "if",
                        hash: {},
                        fn: a.program(4, e, 0),
                        inverse: a.program(7, e, 0),
                        data: e
                    })) ? f : ""
                },
                4: function(a, b, c, d, e) {
                    var f;
                    return a.escapeExpression(a.lambda(null != b ? b.src : b, b)) + (null != (f = c["if"].call(null != b ? b : {}, null != b ? b["image-width"] : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "")
                },
                5: function(a, b, c, d, e) {
                    return " " + a.escapeExpression(a.lambda(null != b ? b["image-width"] : b, b))
                },
                7: function(a, b, c, d, e) {
                    var f;
                    return ", " + a.escapeExpression(a.lambda(null != b ? b.src : b, b)) + (null != (f = c["if"].call(null != b ? b : {}, null != b ? b["image-width"] : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "")
                },
                9: function(a, b, c, d, e) {
                    var f;
                    return ' sizes="' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.sizes : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(10, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '"'
                },
                10: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, e && e.first, {
                        name: "if",
                        hash: {},
                        fn: a.program(11, e, 0),
                        inverse: a.program(13, e, 0),
                        data: e
                    })) ? f : ""
                },
                11: function(a, b, c, d, e) {
                    var f = a.lambda,
                        g = a.escapeExpression;
                    return g(f(null != b ? b["screen-width"] : b, b)) + " " + g(f(null != b ? b["image-width"] : b, b))
                },
                13: function(a, b, c, d, e) {
                    var f = a.lambda,
                        g = a.escapeExpression;
                    return "," + g(f(null != b ? b["screen-width"] : b, b)) + " " + g(f(null != b ? b["image-width"] : b, b))
                },
                15: function(a, b, c, d, e) {
                    var f;
                    return ' media="' + a.escapeExpression((f = null != (f = c.media || (null != b ? b.media : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "media",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                17: function(a, b, c, d, e) {
                    var f;
                    return ' type="' + a.escapeExpression((f = null != (f = c.type || (null != b ? b.type : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "type",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                19: function(a, b, c, e, f) {
                    var g, h = null != b ? b : {},
                        i = c.helperMissing,
                        j = "function",
                        k = a.escapeExpression;
                    return '\t\t\t<img class="picture__image lazyload" src="' + k((g = null != (g = c.src || (null != b ? b.src : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "src",
                        hash: {},
                        data: f
                    }) : g)) + '" alt="' + k((g = null != (g = c.alt || (null != b ? b.alt : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "alt",
                        hash: {},
                        data: f
                    }) : g)) + '"/>\n'
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f;
                    return '<div class="c-picture--default" data-css="c-picture">\n\t<figure class="picture__wrapper">\n\t\t<picture class="picture__container">\n' + (null != (f = c["if"].call(null != b ? b : {}, null != b ? b.items : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.program(19, e, 0),
                        data: e
                    })) ? f : "") + "\t\t</picture>\n\t</figure>\n</div>"
                },
                useData: !0
            })), window.App.Templates.JSOUTPUTENDLESSSCROLL = a.template({
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, e, f) {
                    var g, h = null != b ? b : {},
                        i = c.helperMissing,
                        j = "function",
                        k = a.escapeExpression;
                    return '<div class="c-js-output">\n\t<p>CurrentArticle in Viewport: ' + k((g = null != (g = c.isInViewport || (null != b ? b.isInViewport : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "isInViewport",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>Next Article Load Point Reached: " + k((g = null != (g = c.isLoadNextArticlePointReached || (null != b ? b.isLoadNextArticlePointReached : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "isLoadNextArticlePointReached",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>Current Article Index: " + k((g = null != (g = c.currentArticleIndex || (null != b ? b.currentArticleIndex : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "currentArticleIndex",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>NextArticleIsLoaded: " + k((g = null != (g = c.nextArticleIsLoading || (null != b ? b.nextArticleIsLoading : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "nextArticleIsLoading",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>NextArticleIsReady: " + k((g = null != (g = c.nextArticleIsReady || (null != b ? b.nextArticleIsReady : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "nextArticleIsReady",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n</div>"
                },
                useData: !0
            }), window.App.Templates.JSOUTPUT = a.template({
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, e, f) {
                    var g, h = null != b ? b : {},
                        i = c.helperMissing,
                        j = "function",
                        k = a.escapeExpression;
                    return '<div class="c-js-output">\n\t<p>CurrentSrollY: ' + k((g = null != (g = c.currentScrollY || (null != b ? b.currentScrollY : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "currentScrollY",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>metaInfoBoxTop: " + k((g = null != (g = c.metaInfoBoxTop || (null != b ? b.metaInfoBoxTop : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "metaInfoBoxTop",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>articleFooterBoxTop: " + k((g = null != (g = c.articleFooterBoxTop || (null != b ? b.articleFooterBoxTop : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "articleFooterBoxTop",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>metaInfoOffsetTop: " + k((g = null != (g = c.metaInfoOffsetTop || (null != b ? b.metaInfoOffsetTop : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "metaInfoOffsetTop",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>articleFooterOffsetTop: " + k((g = null != (g = c.articleFooterOffsetTop || (null != b ? b.articleFooterOffsetTop : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "articleFooterOffsetTop",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>dynamicTranslateYValue: " + k((g = null != (g = c.dynamicTranslateYValue || (null != b ? b.dynamicTranslateYValue : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "dynamicTranslateYValue",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>isAboveArea: " + k((g = null != (g = c.isAboveArea || (null != b ? b.isAboveArea : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "isAboveArea",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>isInArea: " + k((g = null != (g = c.isInArea || (null != b ? b.isInArea : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "isInArea",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\t<p>isBelowArea: " + k((g = null != (g = c.isBelowArea || (null != b ? b.isBelowArea : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "isBelowArea",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n\n\t<p>translateYValue: " + k((g = null != (g = c.translateYValue || (null != b ? b.translateYValue : b)) ? g : i, ("undefined" == typeof g ? "undefined" : d(g)) === j ? g.call(h, {
                        name: "translateYValue",
                        hash: {},
                        data: f
                    }) : g)) + "</p>\n</div>"
                },
                useData: !0
            }), window.App.Templates.CXENSEINCLUDELINKLIST = a.template({
                1: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function",
                        l = a.escapeExpression;
                    return '\t<li class="link-list__item">\n' + (null != (g = c["if"].call(i, null != b ? b.url : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(2, f, 0),
                        inverse: a.program(7, f, 0),
                        data: f
                    })) ? g : "") + '\n\t\t<div class="c-sharing--menu is-link-list-position" data-css="c-sharing" data-js-module="sharing">\n\t\t\t<button class="sharing__toggle-btn ' + l((h = null != (h = c.shareToogleExtraClass || (null != b ? b.shareToogleExtraClass : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "shareToogleExtraClass",
                        hash: {},
                        data: f
                    }) : h)) + '" data-js-atom="sharing-toggle" aria-controls="sharing-panel-' + l((h = null != (h = c.articleid || (null != b ? b.articleid : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "articleid",
                        hash: {},
                        data: f
                    }) : h)) + '">\n\t\t\t\t<span class="sharing__open i-share" data-grunticon-embed="true"></span>\n\t\t\t\t<span class="sharing__close"><span class="sharing__close-icon"></span></span>\n\t\t\t\tToggle share menu\n\t\t\t</button>\n\n' + (null != (g = a.invokePartial(e.sharing, b, {
                        name: "sharing",
                        data: f,
                        indent: "\t\t\t",
                        helpers: c,
                        partials: e,
                        decorators: a.decorators
                    })) ? g : "") + "\n\t\t</div>\n\t</li>\n"
                },
                2: function(a, b, c, d, e) {
                    var f, g, h = null != b ? b : {};
                    return '\t\t\t<a class="link-list__link" href="' + (null != (f = c["if"].call(h, null != b ? b.clickUrl : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.program(5, e, 0),
                        data: e
                    })) ? f : "") + '">' + a.escapeExpression((g = null != (g = c.title || (null != b ? b.title : b)) ? g : c.helperMissing, "function" == typeof g ? g.call(h, {
                        name: "title",
                        hash: {},
                        data: e
                    }) : g)) + "</a>\n"
                },
                3: function(a, b, c, d, e) {
                    var f;
                    return a.escapeExpression((f = null != (f = c.clickUrl || (null != b ? b.clickUrl : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "clickUrl",
                        hash: {},
                        data: e
                    }) : f))
                },
                5: function(a, b, c, d, e) {
                    var f;
                    return a.escapeExpression((f = null != (f = c.url || (null != b ? b.url : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "url",
                        hash: {},
                        data: e
                    }) : f))
                },
                7: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t<span class="link-list__text">' + a.escapeExpression((f = null != (f = c.title || (null != b ? b.title : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "title",
                        hash: {},
                        data: e
                    }) : f)) + "</span>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c.each.call(null != b ? b : {}, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.CXENSEINCLUDESCROLLERVIDEORELATED = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return "--" + a.escapeExpression(a.lambda(null != (f = null != b ? b.scrollerOptions : b) ? f.contextClass : f, b))
                },
                3: function(a, b, c, d, e) {
                    return "--default"
                },
                5: function(a, b, c, d, e) {
                    var f;
                    return " " + a.escapeExpression(a.lambda(null != (f = null != b ? b.scrollerOptions : b) ? f.classes : f, b))
                },
                7: function(a, b, c, d, e) {
                    var f;
                    return " data-js-options='{ " + (null != (f = c.each.call(null != b ? b : {}, null != (f = null != b ? b.scrollerOptions : b) ? f.jsOptions : f, {
                        name: "each",
                        hash: {},
                        fn: a.program(8, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + " }'"
                },
                8: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function";
                    return '"' + a.escapeExpression((h = null != (h = c.jsKey || (null != b ? b.jsKey : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "jsKey",
                        hash: {},
                        data: f
                    }) : h)) + '": ' + (null != (g = c.unless.call(i, null != b ? b.jsObject : b, {
                        name: "unless",
                        hash: {},
                        fn: a.program(9, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + (null != (h = null != (h = c.jsValue || (null != b ? b.jsValue : b)) ? h : j, g = ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "jsValue",
                        hash: {},
                        data: f
                    }) : h) ? g : "") + (null != (g = c.unless.call(i, null != b ? b.jsObject : b, {
                        name: "unless",
                        hash: {},
                        fn: a.program(9, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + (null != (g = c["if"].call(i, f && f.last, {
                        name: "if",
                        hash: {},
                        fn: a.program(11, f, 0),
                        inverse: a.program(13, f, 0),
                        data: f
                    })) ? g : "")
                },
                9: function(a, b, c, d, e) {
                    return '"'
                },
                11: function(a, b, c, d, e) {
                    return ""
                },
                13: function(a, b, c, d, e) {
                    return ", "
                },
                15: function(a, b, c, d, e) {
                    var f;
                    return null != (f = a.invokePartial(d.cta, b, {
                        name: "cta",
                        data: e,
                        indent: "\t\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : ""
                },
                17: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t\t<div class="size-20 scroller__item" data-js-atom="scroller-item">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t\t\t</div>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '<div class="c-scroller' + (null != (f = c["if"].call(g, null != (f = null != b ? b.scrollerOptions : b) ? f.contextClass : f, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.program(3, e, 0),
                        data: e
                    })) ? f : "") + (null != (f = c["if"].call(g, null != (f = null != b ? b.scrollerOptions : b) ? f.classes : f, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '" data-css="c-scroller" data-js-module="scroller"' + (null != (f = c["if"].call(g, null != (f = null != b ? b.scrollerOptions : b) ? f.jsOptions : f, {
                        name: "if",
                        hash: {},
                        fn: a.program(7, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '>\n\t<div class="scroller__list-wrapper" data-js-atom="scroller-wrapper">\n\t\t<div class="scroller__actions" data-js-atom="scroller-actions">\n' + (null != (f = c.each.call(g, null != b ? b.scrollerCta : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(15, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '\t\t</div>\n\t\t<div class="scroller__list" data-js-atom="scroller-ribbon">\n' + (null != (f = c.each.call(g, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(17, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\t\t</div>\n\t</div>\n</div>"
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.CXENSEINCLUDESCROLLERVIDEO = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return "--" + a.escapeExpression(a.lambda(null != (f = null != b ? b.scrollerOptions : b) ? f.contextClass : f, b))
                },
                3: function(a, b, c, d, e) {
                    return "--default"
                },
                5: function(a, b, c, d, e) {
                    var f;
                    return " " + a.escapeExpression(a.lambda(null != (f = null != b ? b.scrollerOptions : b) ? f.classes : f, b))
                },
                7: function(a, b, c, d, e) {
                    var f;
                    return " data-js-options='{ " + (null != (f = c.each.call(null != b ? b : {}, null != (f = null != b ? b.scrollerOptions : b) ? f.jsOptions : f, {
                        name: "each",
                        hash: {},
                        fn: a.program(8, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + " }'"
                },
                8: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function";
                    return '"' + a.escapeExpression((h = null != (h = c.jsKey || (null != b ? b.jsKey : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "jsKey",
                        hash: {},
                        data: f
                    }) : h)) + '": ' + (null != (g = c.unless.call(i, null != b ? b.jsObject : b, {
                        name: "unless",
                        hash: {},
                        fn: a.program(9, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + (null != (h = null != (h = c.jsValue || (null != b ? b.jsValue : b)) ? h : j, g = ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "jsValue",
                        hash: {},
                        data: f
                    }) : h) ? g : "") + (null != (g = c.unless.call(i, null != b ? b.jsObject : b, {
                        name: "unless",
                        hash: {},
                        fn: a.program(9, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + (null != (g = c["if"].call(i, f && f.last, {
                        name: "if",
                        hash: {},
                        fn: a.program(11, f, 0),
                        inverse: a.program(13, f, 0),
                        data: f
                    })) ? g : "")
                },
                9: function(a, b, c, d, e) {
                    return '"'
                },
                11: function(a, b, c, d, e) {
                    return ""
                },
                13: function(a, b, c, d, e) {
                    return ", "
                },
                15: function(a, b, c, d, e) {
                    var f;
                    return null != (f = a.invokePartial(d.cta, b, {
                        name: "cta",
                        data: e,
                        indent: "\t\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : ""
                },
                17: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t\t<div class="size-20 scroller__item" data-js-atom="scroller-item">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t\t\t</div>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '<div class="c-scroller' + (null != (f = c["if"].call(g, null != (f = null != b ? b.scrollerOptions : b) ? f.contextClass : f, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.program(3, e, 0),
                        data: e
                    })) ? f : "") + (null != (f = c["if"].call(g, null != (f = null != b ? b.scrollerOptions : b) ? f.classes : f, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '" data-css="c-scroller" data-js-module="scroller"' + (null != (f = c["if"].call(g, null != (f = null != b ? b.scrollerOptions : b) ? f.jsOptions : f, {
                        name: "if",
                        hash: {},
                        fn: a.program(7, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '>\n\n\t<div class="scroller__list-wrapper" data-js-atom="scroller-wrapper">\n\t\t<div class="scroller__actions" data-js-atom="scroller-actions">\n' + (null != (f = c.each.call(g, null != b ? b.scrollerCta : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(15, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '\t\t</div>\n\t\t<div class="scroller__list" data-js-atom="scroller-ribbon">\n' + (null != (f = c.each.call(g, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(17, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\t\t</div>\n\t</div>\n</div>"
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.CXENSEINCLUDESECTIONMOSTREADSMALL = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return '\t\t<div class="grid__col-12">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t</div>\n"
                },
                3: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, e && e.index, {
                        name: "if",
                        hash: {},
                        fn: a.program(4, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                4: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t<div class="grid__col-12 is-tablet-col-6">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t\t</div>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '<div class="u-grid">\n' + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[0] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '</div>\n\n<div class="u-grid">\n' + (null != (f = c.each.call(g, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "</div>"
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.CXENSEINCLUDESECTIONMOSTREAD = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return '\t\t<div class="grid__col-12">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t</div>\n"
                },
                3: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, e && e.index, {
                        name: "if",
                        hash: {},
                        fn: a.program(4, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                4: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t<div class="grid__col-6">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t\t</div>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '<div class="u-grid">\n' + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[0] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '</div>\n\n<div class="u-grid is-separated-by-line-mobile">\n' + (null != (f = c.each.call(g, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "</div>\n"
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.CXENSEINCLUDESECTIONWITHLARGETEASER = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return '\t\t<div class="grid__col-12">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t</div>\n"
                },
                3: function(a, b, c, d, e) {
                    var f;
                    return '\t\t<div class="grid__col-3 is-tablet-col-4">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t</div>\n"
                },
                5: function(a, b, c, d, e) {
                    return ""
                },
                7: function(a, b, c, d, e) {
                    return 'data-src="http://www.channelnewsasia.com"'
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '<div class="u-grid">\n' + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[0] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '</div>\n\n<div class="u-grid is-separated-by-line">\n' + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[1] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[2] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '\t<div class="grid__col-3 is-tablet-col-4">\n\t\t<div class="OUTBRAIN" ' + (null != (f = c["if"].call(g, null != b ? b.isLiveEnvironment : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, e, 0),
                        inverse: a.program(7, e, 0),
                        data: e
                    })) ? f : "") + ' data-widget-id="AR_3" data-ob-template="ChannelNewsAsia"></div>\n\t</div>\n\t<div class="grid__col-3 is-tablet-col-4">\n\t\t<div class="OUTBRAIN"  ' + (null != (f = c["if"].call(g, null != b ? b.isLiveEnvironment : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, e, 0),
                        inverse: a.program(7, e, 0),
                        data: e
                    })) ? f : "") + ' data-widget-id="AR_31" data-ob-template="ChannelNewsAsia"></div>\n\t</div>\n' + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[3] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[4] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[5] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + (null != (f = c["with"].call(g, null != (f = null != b ? b.items : b) ? f[6] : f, {
                        name: "with",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "</div>\n\n"
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.CXENSEINCLUDESECTIONWITHOUTLARGETEASER = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, e && e.index, {
                        name: "if",
                        hash: {},
                        fn: a.program(2, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                2: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t<div class="grid__col-3 is-tablet-col-4">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t\t</div>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f;
                    return '<div class="u-grid is-separated-by-line">\n' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "</div>"
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.CXENSEINCLUDESECTION = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return '\t\t<div class="grid__col-3 is-tablet-col-4">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t\t</div>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f;
                    return '<div class="u-grid is-separated-by-line">\n' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "</div>"
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.MODALGALLERYTEMPLATE = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t\t\t\t\t<div class="slider__item" data-js-atom="slider-item">\n' + (null != (f = c["if"].call(null != b ? b : {}, null != b ? b.image : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(2, e, 0),
                        inverse: a.program(27, e, 0),
                        data: e
                    })) ? f : "") + "\t\t\t\t\t\t\t</div>\n"
                },
                2: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["with"].call(null != b ? b : {}, null != b ? b.image : b, {
                        name: "with",
                        hash: {},
                        fn: a.program(3, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                3: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function",
                        l = a.escapeExpression;
                    return '\t\t\t\t\t\t\t\t\t\t<div class="c-picture' + (null != (g = c["if"].call(i, null != b ? b.pictureContextClass : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(4, f, 0),
                        inverse: a.program(6, f, 0),
                        data: f
                    })) ? g : "") + (null != (g = c["if"].call(i, null != b ? b.pictureClasses : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(8, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '" data-css="c-picture">\n\n\t\t\t\t\t\t\t\t\t\t\t<figure class="picture__wrapper">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<picture class="picture__container">\n\n' + (null != (g = c.each.call(i, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(10, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class="picture__image" src="' + l((h = null != (h = c.fallbackSrc || (null != b ? b.fallbackSrc : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "fallbackSrc",
                        hash: {},
                        data: f
                    }) : h)) + '" alt="' + l((h = null != (h = c.alt || (null != b ? b.alt : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "alt",
                        hash: {},
                        data: f
                    }) : h)) + '"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</picture>\n\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n'
                },
                4: function(a, b, c, d, e) {
                    var f;
                    return "--" + a.escapeExpression((f = null != (f = c.pictureContextClass || (null != b ? b.pictureContextClass : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "pictureContextClass",
                        hash: {},
                        data: e
                    }) : f))
                },
                6: function(a, b, c, d, e) {
                    return "--default"
                },
                8: function(a, b, c, d, e) {
                    var f;
                    return " " + a.escapeExpression((f = null != (f = c.pictureClasses || (null != b ? b.pictureClasses : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "pictureClasses",
                        hash: {},
                        data: e
                    }) : f))
                },
                10: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<source srcset="' + (null != (f = c.each.call(g, null != b ? b.srcset : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(11, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '"' + (null != (f = c["if"].call(g, null != b ? b.sizes : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(17, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + (null != (f = c["if"].call(g, null != b ? b.media : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(23, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + (null != (f = c["if"].call(g, null != b ? b.type : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(25, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + " />\n"
                },
                11: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, e && e.first, {
                        name: "if",
                        hash: {},
                        fn: a.program(12, e, 0),
                        inverse: a.program(15, e, 0),
                        data: e
                    })) ? f : ""
                },
                12: function(a, b, c, d, e) {
                    var f;
                    return a.escapeExpression(a.lambda(null != b ? b.src : b, b)) + (null != (f = c["if"].call(null != b ? b : {}, null != b ? b["image-width"] : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(13, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "")
                },
                13: function(a, b, c, d, e) {
                    return " " + a.escapeExpression(a.lambda(null != b ? b["image-width"] : b, b))
                },
                15: function(a, b, c, d, e) {
                    var f;
                    return ", " + a.escapeExpression(a.lambda(null != b ? b.src : b, b)) + (null != (f = c["if"].call(null != b ? b : {}, null != b ? b["image-width"] : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(13, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "")
                },
                17: function(a, b, c, d, e) {
                    var f;
                    return ' sizes="' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.sizes : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(18, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '"'
                },
                18: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, e && e.first, {
                        name: "if",
                        hash: {},
                        fn: a.program(19, e, 0),
                        inverse: a.program(21, e, 0),
                        data: e
                    })) ? f : ""
                },
                19: function(a, b, c, d, e) {
                    var f = a.lambda,
                        g = a.escapeExpression;
                    return g(f(null != b ? b["screen-width"] : b, b)) + " " + g(f(null != b ? b["image-width"] : b, b))
                },
                21: function(a, b, c, d, e) {
                    var f = a.lambda,
                        g = a.escapeExpression;
                    return "," + g(f(null != b ? b["screen-width"] : b, b)) + " " + g(f(null != b ? b["image-width"] : b, b))
                },
                23: function(a, b, c, d, e) {
                    var f;
                    return ' media="' + a.escapeExpression((f = null != (f = c.media || (null != b ? b.media : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "media",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                25: function(a, b, c, d, e) {
                    var f;
                    return ' type="' + a.escapeExpression((f = null != (f = c.type || (null != b ? b.type : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "type",
                        hash: {},
                        data: e
                    }) : f)) + '"'
                },
                27: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["if"].call(null != b ? b : {}, null != b ? b.video : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(28, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                28: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["with"].call(null != b ? b : {}, null != b ? b.video : b, {
                        name: "with",
                        hash: {},
                        fn: a.program(29, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                29: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function",
                        l = a.escapeExpression;
                    return '\t\t\t\t\t\t\t\t\t\t\t<div class="c-video' + (null != (g = c["if"].call(i, null != b ? b.videoContextClass : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(30, f, 0),
                        inverse: a.program(6, f, 0),
                        data: f
                    })) ? g : "") + (null != (g = c["if"].call(i, null != b ? b.videoClasses : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(32, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '"\n\t\t\t\t\t\t\t\t\t\t\t     data-css="c-video"\n' + (null != (g = c["if"].call(i, null != b ? b.videoJsOptions : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(34, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\t\t\t\t\t\t\t\t\t\t\t\t>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<figure class="video__wrapper">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video__container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video__video" data-js-atom="video-container" id="' + l((h = null != (h = c.containerId || (null != b ? b.containerId : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "containerId",
                        hash: {},
                        data: f
                    }) : h)) + '" is-preview="' + l((h = null != (h = c.isPreview || (null != b ? b.isPreview : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "isPreview",
                        hash: {},
                        data: f
                    }) : h)) + '"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n'
                },
                30: function(a, b, c, d, e) {
                    var f;
                    return "--" + a.escapeExpression((f = null != (f = c.videoContextClass || (null != b ? b.videoContextClass : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "videoContextClass",
                        hash: {},
                        data: e
                    }) : f))
                },
                32: function(a, b, c, d, e) {
                    var f;
                    return " " + a.escapeExpression((f = null != (f = c.videoClasses || (null != b ? b.videoClasses : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "videoClasses",
                        hash: {},
                        data: e
                    }) : f))
                },
                34: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c["with"].call(null != b ? b : {}, null != b ? b.videoJsOptions : b, {
                        name: "with",
                        hash: {},
                        fn: a.program(35, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                35: function(a, b, c, d, e) {
                    var f = a.lambda,
                        g = a.escapeExpression;
                    return "                                                 data-js-options='{\"" + g(f(null != b ? b.optionsKey : b, b)) + '": "' + g(f(null != b ? b.optionsValue : b, b)) + "\"}'\n"
                },
                37: function(a, b, c, d, e) {
                    var f, g = null != b ? b : {};
                    return '\t\t\t\t\t\t\t<li class="gallery-extension__description-list-item">\n\t\t\t\t\t\t\t\t<p>\n' + (null != (f = c["if"].call(g, null != b ? b.image : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(38, e, 0),
                        inverse: a.program(40, e, 0),
                        data: e
                    })) ? f : "") + "\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n" + (null != (f = c["if"].call(g, null != b ? b.caption : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(42, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "")
                },
                38: function(a, b, c, d, e) {
                    var f;
                    return "\t\t\t\t\t\t\t\t" + a.escapeExpression(a.lambda(null != (f = null != b ? b.image : b) ? f.caption : f, b)) + "\n"
                },
                40: function(a, b, c, d, e) {
                    var f;
                    return "\t\t\t\t\t\t\t\t" + a.escapeExpression(a.lambda(null != (f = null != b ? b.video : b) ? f.caption : f, b)) + "\n"
                },
                42: function(a, b, c, d, e) {
                    return "\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function",
                        l = a.escapeExpression;
                    return '<div class="c-modal--gallery" aria-hidden="true" id="' + l((h = null != (h = c.galleryID || (null != b ? b.galleryID : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "galleryID",
                        hash: {},
                        data: f
                    }) : h)) + '" data-css="c-modal" data-gallery-id="' + l((h = null != (h = c.galleryID || (null != b ? b.galleryID : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "galleryID",
                        hash: {},
                        data: f
                    }) : h)) + '">\n\t<div class="modal__overlay" tabindex="-1" data-a11y-modal-hide></div>\n\t<button data-a11y-modal-hide class="modal__close" title="close gallery">Close</button>\n\t<div class="modal__content" aria-labelledby="modalTitle" aria-describedby="modalDescription" role="modal">\n\t\t<div role="document">\n\t\t\t<div class="c-slider--gallery" data-css="c-slider" data-js-module="slider" data-js-options=\'{ "": "" }\'>\n\t\t\t\t<div class="slider__actions" data-js-atom="slider-actions">\n\t\t\t\t\t<button class="c-cta--slider is-previous" data-css="c-cta" title="Previous" data-js-atom="slider-prev">\n\t\t\t\t\t\t<span class="cta__icon"></span>\n\t\t\t\t\t\t<span class="cta__content">Previous</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class="c-cta--slider is-next" data-css="c-cta" title="Next" data-js-atom="slider-next">\n\t\t\t\t\t\t<span class="cta__icon"></span>\n\t\t\t\t\t\t<span class="cta__content">Next</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class="slider__list-wrapper" data-js-atom="slider-wrapper">\n\t\t\t\t\t<div class="slider__list" data-js-atom="slider-ribbon">\n' + (null != (g = c.each.call(i, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(1, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="c-gallery-extension" data-js-module="modal-gallery-extension">\n\t\t\t\t<div class="gallery-extension__wrapper">\n\t\t\t\t\t<ul class="gallery-extension__description-list">\n' + (null != (g = c.each.call(i, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(37, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\t\t\t\t\t</ul>\n\t\t\t\t\t<div class="gallery-extension__pagination">\n\t\t\t\t\t\t<span><em class="gallery-extension__pagination-current-count"></em>/<em class="gallery-extension__pagination-total-count"></em></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n'
                },
                useData: !0
            }), window.App.Templates.NEWSALERT = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return '<a href="' + a.escapeExpression((f = null != (f = c.linkTarget || (null != b ? b.linkTarget : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "linkTarget",
                        hash: {},
                        data: e
                    }) : f)) + '" class="news-alert__link">\n'
                },
                3: function(a, b, c, d, e) {
                    return "</a>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function",
                        l = a.escapeExpression;
                    return (null != (g = c["if"].call(i, null != b ? b.linked : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '\t<h2 class="news-alert__headline">' + l((h = null != (h = c.headline || (null != b ? b.headline : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "headline",
                        hash: {},
                        data: f
                    }) : h)) + '</h2>\n\t<p class="news-alert__text">' + l((h = null != (h = c.newsText || (null != b ? b.newsText : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "newsText",
                        hash: {},
                        data: f
                    }) : h)) + "</p>\n" + (null != (g = c["if"].call(i, null != b ? b.linked : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(3, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n"
                },
                useData: !0
            }), window.App.Templates.SEARCHFORMLISTTEASER = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return '\t<div class="grid__col-3 is-tablet-col-4">\n' + (null != (f = a.invokePartial(d.teaser, b, {
                        name: "teaser",
                        data: e,
                        indent: "\t\t",
                        helpers: c,
                        partials: d,
                        decorators: a.decorators
                    })) ? f : "") + "\t</div>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f;
                    return null != (f = c.each.call(null != b ? b : {}, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : ""
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates.SHARECOUNT = a.template({
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, d, e) {
                    var f;
                    return '<p class="sharing__text" data-js-atom="share-count-placeholder">' + a.escapeExpression((f = null != (f = c.shareCount || (null != b ? b.shareCount : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "shareCount",
                        hash: {},
                        data: e
                    }) : f)) + " shares</p>"
                },
                useData: !0
            }), window.App.Templates.VIDEO = a.template({
                1: function(a, b, c, d, e) {
                    var f;
                    return "--" + a.escapeExpression((f = null != (f = c.videoContextClass || (null != b ? b.videoContextClass : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "videoContextClass",
                        hash: {},
                        data: e
                    }) : f))
                },
                3: function(a, b, c, d, e) {
                    return "--default"
                },
                5: function(a, b, c, d, e) {
                    var f;
                    return " " + a.escapeExpression((f = null != (f = c.videoClasses || (null != b ? b.videoClasses : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "videoClasses",
                        hash: {},
                        data: e
                    }) : f))
                },
                7: function(a, b, c, d, e) {
                    var f;
                    return " data-js-options='{\n\t\t\t" + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.videoJsOptions : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(8, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "\n\t\t }'"
                },
                8: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function";
                    return '"' + a.escapeExpression((h = null != (h = c.optionsKey || (null != b ? b.optionsKey : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "optionsKey",
                        hash: {},
                        data: f
                    }) : h)) + '": ' + (null != (g = c.unless.call(i, null != b ? b.optionsObject : b, {
                        name: "unless",
                        hash: {},
                        fn: a.program(9, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + (null != (h = null != (h = c.optionsValue || (null != b ? b.optionsValue : b)) ? h : j, g = ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "optionsValue",
                        hash: {},
                        data: f
                    }) : h) ? g : "") + (null != (g = c.unless.call(i, null != b ? b.optionsObject : b, {
                        name: "unless",
                        hash: {},
                        fn: a.program(9, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + (null != (g = c["if"].call(i, f && f.last, {
                        name: "if",
                        hash: {},
                        fn: a.program(11, f, 0),
                        inverse: a.program(13, f, 0),
                        data: f
                    })) ? g : "")
                },
                9: function(a, b, c, d, e) {
                    return '"'
                },
                11: function(a, b, c, d, e) {
                    return ""
                },
                13: function(a, b, c, d, e) {
                    return ", "
                },
                15: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function",
                        l = a.escapeExpression;
                    return '\t\t\t<div class="video__layer" data-js-atom="video-layer">\n\t\t\t\t<p class="video__layer-title">' + l((h = null != (h = c.title || (null != b ? b.title : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "title",
                        hash: {},
                        data: f
                    }) : h)) + '</p>\n\t\t\t\t<time class="video__video-time">' + l((h = null != (h = c.time || (null != b ? b.time : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "time",
                        hash: {},
                        data: f
                    }) : h)) + '</time>\n\t\t\t\t<div class="c-sharing--menu is-video-layer-position" data-css="c-sharing" data-js-module="sharing">\n\t\t\t\t\t<button class="sharing__toggle-btn is-color-light-mix" data-js-atom="sharing-toggle" aria-controls="sharing-panel-' + l((h = null != (h = c.articleid || (null != b ? b.articleid : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "articleid",
                        hash: {},
                        data: f
                    }) : h)) + '">\n\t\t\t\t\t\t<span class="sharing__open i-share" data-grunticon-embed="true"></span>\n\t\t\t\t\t\t<span class="sharing__close"><span class="sharing__close-icon"></span></span>\n\t\t\t\t\t\tToggle share menu\n\t\t\t\t\t</button>\n\n' + (null != (g = a.invokePartial(e.sharing, b, {
                        name: "sharing",
                        data: f,
                        indent: "\t\t\t\t\t",
                        helpers: c,
                        partials: e,
                        decorators: a.decorators
                    })) ? g : "") + "\n\t\t\t\t</div>\n\t\t\t</div>\n"
                },
                17: function(a, b, c, d, e) {
                    var f;
                    return '\t\t\t<figcaption class="video__caption">' + a.escapeExpression((f = null != (f = c.caption || (null != b ? b.caption : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                        name: "caption",
                        hash: {},
                        data: e
                    }) : f)) + "</figcaption>\n"
                },
                compiler: [7, ">= 4.0.0"],
                main: function(a, b, c, e, f) {
                    var g, h, i = null != b ? b : {},
                        j = c.helperMissing,
                        k = "function",
                        l = a.escapeExpression;
                    return '<div class="c-video' + (null != (g = c["if"].call(i, null != b ? b.videoContextClass : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, f, 0),
                        inverse: a.program(3, f, 0),
                        data: f
                    })) ? g : "") + (null != (g = c["if"].call(i, null != b ? b.videoClasses : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(5, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '"\n     data-css="c-video"\n     data-js-module="video"\n\t' + (null != (g = c["if"].call(i, null != b ? b.videoJsOptions : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(7, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + '>\n\n\t<figure class="video__wrapper">\n\t\t<div class="video__container">\n\t\t\t<div class="video__video" data-js-atom="video-container" id="' + l((h = null != (h = c.containerId || (null != b ? b.containerId : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "containerId",
                        hash: {},
                        data: f
                    }) : h)) + '" is-preview="' + l((h = null != (h = c.isPreview || (null != b ? b.isPreview : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "isPreview",
                        hash: {},
                        data: f
                    }) : h)) + '"></div>\n\t\t\t<span class="video__duration-text" data-js-atom="video-duration">' + l((h = null != (h = c.duration || (null != b ? b.duration : b)) ? h : j, ("undefined" == typeof h ? "undefined" : d(h)) === k ? h.call(i, {
                        name: "duration",
                        hash: {},
                        data: f
                    }) : h)) + "</span>\n\t\t</div>\n\n" + (null != (g = c["if"].call(i, null != b ? b.hasVideoLayer : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(15, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n" + (null != (g = c["if"].call(i, null != b ? b.caption : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(17, f, 0),
                        inverse: a.noop,
                        data: f
                    })) ? g : "") + "\n\t</figure>\n</div>\n"
                },
                usePartial: !0,
                useData: !0
            }), window.App.Templates
        }
    }, {}],
    39: [function(a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var d = {
            bodyHeightChanged: "body:heightChanged",
            DOMchanged: "DOMchanged",
            DOMredirect: "dom:redirect",
            mediachange: "mediachange",
            resize: "resize",
            scroll: "scroll",
            swipe: "swipe"
        };
        d.video = {
            playerInitialized: "video:playerInitialized",
            playerStop: "video:stop",
            playerDestroy: "video:destroy",
            playerPlayed: "video:play",
            playerPaused: "video:pause",
            playerChangeSize: "video:playerChangeSize"
        }, d.navigation = {
            isFixed: "navigation:isFixed"
        }, d.advertisement = {
            eventName: "advertisement:eventName"
        }, d.cta = {
            showGallery: "cta:showGallery"
        }, d.cxenseInclude = {
            contentUpdated: "cxenseInclude:contentUpdated"
        }, d.slider = {
            sliderInitialized: "slider:sliderInitialized",
            sliderBeforeSlideChange: "slider:beforeSlideChange",
            sliderSlideChange: "slider:slideChange"
        }, d.searchForm = {
            loadMore: "searchForm:loadMore"
        }, d.pagination = {
            disable: "pagination:disable",
            enable: "pagination:enable",
            updateButtonVisibility: "pagination:updateButtonVisibility",
            updatePageCount: "pagination:updatePageCount"
        }, d.tabtree = {
            eventName: "tabtree:eventName"
        }, d.sharing = {
            close: "sharing:close"
        }, d.endlessScroll = {
            videoupdate: "video:update"
        }, c["default"] = d
    }, {}],
    40: [function(a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var d = {};
        d.setCookie = function(a, b, c, d, e, f) {
            if (!a || /^(?:expires|max\-age|path|domain|secure)$/i.test(a)) return !1;
            var g = "";
            if (c) switch (c.constructor) {
                case Number:
                    g = c === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + c;
                    break;
                case String:
                    g = "; expires=" + c;
                    break;
                case Date:
                    g = "; expires=" + c.toUTCString()
            }
            return document.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + g + (e ? "; domain=" + e : "") + (d ? "; path=" + d : "") + (f ? "; secure" : ""), !0
        }, d.getCookie = function(a) {
            return a ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
        }, d.hasCookie = function(a) {
            return !!a && new RegExp("(?:^|;\\s*)" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
        }, c["default"] = d
    }, {}],
    41: [function(a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var d = {},
            e = {
                p100: "picture100x57",
                p100w: "picture100x57_width",
                p237: "picture237x134",
                p237w: "picture237x134_width",
                p290: "picture290x163",
                p290w: "picture290x163_width",
                p330: "picture330x186",
                p330w: "picture330x186_width",
                p400: "picture400x225",
                p400w: "picture400x225_width",
                p470: "picture470x264",
                p470w: "picture470x264_width",
                p532: "picture532x300",
                p532w: "picture532x300_width",
                p670: "picture670x377",
                p670w: "picture670x377_width",
                p738: "picture738x415",
                p738w: "picture738x415_width",
                p770: "picture770x433",
                p770w: "picture770x433_width"
            };
        d.mappingDataToObject = function(a) {
            var b = void 0,
                c = {};
            c.items = [], console.log(a);
            for (var d = a.response.items, e = 0; e < d.length; e++) {
                b = {}, b = {
                    category: {
                        title: d[e]["mdc-context"],
                        url: d[e].url
                    },
                    recspublishTime: d[e]["recs-publishtime"],
                    title: d[e].title,
                    url: d[e].url,
                    clickUrl: d[e].click_url,
                    image: d[e].dominantthumbnail,
                    publishTime: d[e].publishtime,
                    time: d[e]["mdc-duration"],
                    durationInSeconds: d[e]["mdc-duration"],
                    contentId: "cxense",
                    articleid: d[e]["recs-articleid"],
                    videoid: d[e]["mdc-videoid"],
                    picture100x57: d[e]["recs-mdc-picture100-57"],
                    picture100x57_width: d[e]["recs-mdc-picture100-57-width"] + "w",
                    picture237x134: d[e]["recs-mdc-picture237-134"],
                    picture237x134_width: d[e]["recs-mdc-picture237-134-width"] + "w",
                    picture290x163: d[e]["recs-mdc-picture290-163"],
                    picture290x163_width: d[e]["recs-mdc-picture290-163-width"] + "w",
                    picture330x186: d[e]["recs-mdc-picture330-186"],
                    picture330x186_width: d[e]["recs-mdc-picture330-186-width"] + "w",
                    picture400x225: d[e]["recs-mdc-picture400-225"],
                    picture400x225_width: d[e]["recs-mdc-picture400-225-width"] + "w",
                    picture470x264: d[e]["recs-mdc-picture470-264"],
                    picture470x264_width: d[e]["recs-mdc-picture470-264-width"] + "w",
                    picture532x300: d[e]["recs-mdc-picture532-300"],
                    picture532x300_width: d[e]["recs-mdc-picture532-300-width"] + "w",
                    picture670x377: d[e]["recs-mdc-picture670-377"],
                    picture670x377_width: d[e]["recs-mdc-picture670-377-width"] + "w",
                    picture738x415: d[e]["recs-mdc-picture738-415"],
                    picture738x415_width: d[e]["recs-mdc-picture738-415-width"] + "w",
                    picture770x433: d[e]["recs-mdc-picture770-433"],
                    picture770x433_width: d[e]["recs-mdc-picture770-433-width"] + "w"
                };
                var f = function(a) {
                    var b = a;
                    console.log("seconds", b);
                    var c = Math.floor(b / 60),
                        d = b - 60 * c;
                    d ? d < 10 && (d = "0" + d) : d = "00";
                    var e = {
                        minutes: c,
                        seconds: d
                    };
                    return e.minutes + ":" + e.seconds
                };
                b.time && (b.time = f(b.time)), c.items.push(b)
            }
            return c
        }, d.addScrollerOptionsToData = function(a, b) {
            var c = {};
            c.contextClass = b, a.scrollerOptions = c;
            var d = [{
                ctaButton: !0,
                ctaContextClass: "scroller-video",
                ctaClass: "is-previous",
                ctaSpan: !0,
                ctaIcon: !0,
                ctaContent: "Previous",
                ctaJsAtom: "scroller-prev"
            }, {
                ctaButton: !0,
                ctaContextClass: "scroller-video",
                ctaClass: "is-next",
                ctaSpan: !0,
                ctaIcon: !0,
                ctaContent: "Next",
                ctaJsAtom: "scroller-next"
            }];
            return a.scrollerCta = d, a
        }, d.prepareImage = function(a, b, c, d) {
            return a.teaserContextClass = c || "default", a.teaserClasses = d || "", a.image = {}, "large" === b && (a.image.items = [{
                srcset: [{
                    src: a[e.p290],
                    "image-width": a[e.p290w]
                }, {
                    src: a[e.p330],
                    "image-width": a[e.p330w]
                }, {
                    src: a[e.p400],
                    "image-width": a[e.p400w]
                }, {
                    src: a[e.p470],
                    "image-width": a[e.p470w]
                }, {
                    src: a[e.p532],
                    "image-width": a[e.p532w]
                }, {
                    src: a[e.p670],
                    "image-width": a[e.p670w]
                }, {
                    src: a[e.p738],
                    "image-width": a[e.p738w]
                }],
                sizes: [{
                    "screen-width": "(min-width: 1235px)",
                    "image-width": "470px"
                }, {
                    "screen-width": "(min-width: 992px)",
                    "image-width": "calc( ( (100vw - 50px - 60px) / 3 * 2 + 30px - 60px ) / 3 * 2 )"
                }, {
                    "screen-width": "(min-width: 768px)",
                    "image-width": "calc( (100vw - 50px - 60px) / 3 * 2 + 30px )"
                }, {
                    "image-width": "calc( 100vw - 30px )"
                }]
            }]), "large-col-12" === b && (a.image.items = [{
                srcset: [{
                    src: a[e.p290],
                    "image-width": a[e.p290w]
                }, {
                    src: a[e.p330],
                    "image-width": a[e.p330w]
                }, {
                    src: a[e.p400],
                    "image-width": a[e.p400w]
                }, {
                    src: a[e.p532],
                    "image-width": a[e.p532w]
                }, {
                    src: a[e.p670],
                    "image-width": a[e.p670w]
                }, {
                    src: a[e.p738],
                    "image-width": a[e.p738w]
                }, {
                    src: a[e.p770],
                    "image-width": a[e.p770w]
                }],
                sizes: [{
                    "screen-width": "(min-width: 1235px)",
                    "image-width": "770px"
                }, {
                    "screen-width": "(min-width: 992px)",
                    "image-width": "calc( (100vw - 50px) / 3 * 2)"
                }, {
                    "screen-width": "(min-width: 768px)",
                    "image-width": "calc( (100vw - 50px - 60px) / 3 * 2 + 30px )"
                }, {
                    "image-width": "calc( 100vw - 30px )"
                }]
            }]), "small" === b && (a.image.items = [{
                srcset: [{
                    src: a[e.p100],
                    "image-width": a[e.p100w]
                }],
                sizes: [{
                    "image-width": "100w"
                }]
            }]), "default-scroller" === b && (a.image.items = [{
                srcset: [{
                    src: a[e.p100],
                    "image-width": a[e.p100w]
                }, {
                    src: a[e.p237],
                    "image-width": a[e.p237w]
                }, {
                    src: a[e.p290],
                    "image-width": a[e.p290w]
                }],
                sizes: [{
                    "screen-width": "(min-width: 1235px)",
                    "image-width": "237px"
                }, {
                    "screen-width": "(min-width: 992px)",
                    "image-width": "calc( ( (100vw - 50px - 80px) / 5 )"
                }, {
                    "screen-width": "(min-width: 768px)",
                    "image-width": "calc( (100vw - 50px - 60px) / 4)"
                }, {
                    "image-width": "100px"
                }]
            }]), "default" === b && (a.image.items = [{
                srcset: [{
                    src: a[e.p100],
                    "image-width": a[e.p100w]
                }, {
                    src: a[e.p237],
                    "image-width": a[e.p237w]
                }, {
                    src: a[e.p290],
                    "image-width": a[e.p290w]
                }],
                sizes: [{
                    "screen-width": "(min-width: 1235px)",
                    "image-width": "274px"
                }, {
                    "screen-width": "(min-width: 992px)",
                    "image-width": "calc( (100vw - 50px - 90px) / 4 )"
                }, {
                    "screen-width": "(min-width: 768px)",
                    "image-width": "calc( (100vw - 50px - 60px) / 3 )"
                }, {
                    "image-width": "100px"
                }]
            }]), a
        }, c["default"] = d
    }, {}],
    42: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            return Array.prototype.slice.call((b || document).querySelectorAll(a))
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var e = {};
        e.getFocusableChildren = function(a) {
            var b = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'];
            return d(b.join(","), a).filter(function(a) {
                return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
            })
        }, e.trapTabKey = function(a) {
            var b = e.getFocusableChildren(a),
                c = b.indexOf(document.activeElement);
            event.shiftKey && 0 === c ? (b[b.length - 1].focus(), event.preventDefault()) : event.shiftKey || c !== b.length - 1 || (b[0].focus(), event.preventDefault())
        }, c["default"] = e
    }, {}],
    43: [function(a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var d = {};
        d.throttle = function(a) {
            console.log("THROTTER");
            var b = window.requestIdleCallback,
                c = window.requestAnimationFrame || setTimeout,
                d = function() {
                    var a, b, d = [],
                        e = [],
                        f = d,
                        g = function() {
                            var c = f;
                            for (f = d.length ? e : d, a = !0, b = !1; c.length;) c.shift()();
                            a = !1
                        },
                        h = function(d, e) {
                            a && !e ? d.apply(this, arguments) : (f.push(d), b || (b = !0, (document.hidden ? setTimeout : c)(g)))
                        };
                    return h._lsFlush = g, h
                }(),
                e = function(a, b) {
                    return b ? function() {
                        d(a)
                    } : function() {
                        var b = this,
                            c = arguments;
                        d(function() {
                            a.apply(b, c)
                        })
                    }
                },
                f = function(a) {
                    console.log("YESSSSS", a);
                    var c, d = 0,
                        f = 125,
                        g = 666,
                        h = g,
                        i = function() {
                            c = !1, d = Date.now(), a()
                        },
                        j = b ? function() {
                            b(i, {
                                timeout: h
                            }), h !== g && (h = g)
                        } : e(function() {
                            setTimeout(i)
                        }, !0);
                    return function(a) {
                        var e;
                        (a = a === !0) && (h = 44), c || (c = !0, e = f - (Date.now() - d), e < 0 && (e = 0), a || e < 9 && b ? j() : setTimeout(j, e))
                    }
                };
            f(a)
        }, c["default"] = d
    }, {}],
    44: [function(a, b, c) {
        "use strict";
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var d = {},
            e = a("jquery");
        d.saveDOM = function() {
            d.dataJsModules = d.querySelectorArray("[data-js-module]")
        }, d.loadModule = function(a) {
            if (!a.domName) throw new Error("In order to work with loadModule you need to define the module name (defined in data-js-module attribute) as string! ");
            if (!a.module) throw new Error("In order to work with loadModule you need to define a Module!");
            var b = a.context || document.querySelector("html"),
                c = a.render !== !1;
            d.forEach(d.dataJsModules, function(e, f) {
                var g = f.getAttribute("data-js-module").split(" ");
                if (g.indexOf(a.domName) != -1 && d.checkElementInContext(f, b)) {
                    var h = f.getAttribute("data-js-options"),
                        i = JSON.parse(h),
                        j = new a.module({
                            el: f,
                            options: i
                        });
                    c && j.render(), a.cb && "function" == typeof a.cb && a.cb(j, i)
                }
            })
        }, d.extend = function(a) {
            return [].slice.call(arguments, 1).forEach(function(b) {
                for (var c in b) a[c] = b[c]
            }), a
        }, d.defaults = function(a) {
            return [].slice.call(arguments, 1).forEach(function(b) {
                for (var c in b) void 0 === a[c] && (a[c] = b[c])
            }), a
        }, d.classMixin = function(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["initialize", "render"],
                c = this.prototype;
            d.defaults(c, a), c.events && d.defaults(c.events, a.events), b.forEach(function(b) {
                d.extendMethod(c, a, b)
            })
        }, d.extendMethod = function(a, b, c) {
            function d(a) {
                return "undefined" == typeof a
            }
            if (!d(b[c])) {
                var e = a[c];
                a[c] = function() {
                    var a = e.apply(this, arguments);
                    return b[c].apply(this, arguments), a
                }
            }
        }, d.querySelectorArray = d.$ = function(a, b) {
            if (!a) throw new Error("In order to work with querySelectorArray you need to define an element as string!");
            var c = a,
                d = b || document;
            return Array.prototype.slice.call(d.querySelectorAll(c))
        }, d.forEach = function(a, b, c) {
            for (var d = 0; d < a.length; d++) b.call(c, d, a[d])
        }, d.indexOf = function(a, b) {
            if (null == a) return -1;
            var c = void 0,
                d = void 0;
            for (d = 0, c = a.length; d < c; d++)
                if (a[d] === b) return d;
            return -1
        }, d.regExp = function(a) {
            return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
        }, d.throttle = function(a, b, c) {
            var d, e, f, g = null,
                h = 0;
            c || (c = {});
            var i = function() {
                h = c.leading === !1 ? 0 : Date.now(), g = null, f = a.apply(d, e), g || (d = e = null)
            };
            return function() {
                var j = Date.now();
                h || c.leading !== !1 || (h = j);
                var k = b - (j - h);
                return d = this, e = arguments, k <= 0 || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
            }
        }, d.isTouch = function() {
            return "ontouchstart" in window
        }, d.transitionEndEvent = function() {
            var a = void 0,
                b = document.createElement("fakeelement"),
                c = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (a in c)
                if (void 0 !== b.style[a]) return c[a]
        }, d.animationEndEvent = function() {
            var a = void 0,
                b = document.createElement("fakeelement"),
                c = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    MozAnimation: "animationend",
                    WebkitAnimation: "webkitAnimationEnd"
                };
            for (a in c)
                if (void 0 !== b.style[a]) return c[a]
        }, d.requestAniFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1e3 / 60)
            }
        }, d.hasParent = function(a, b) {
            if (!a) return !1;
            for (var c = a.target || a.srcElement || a || !1; c && c != b;) c = c.parentNode || !1;
            return c !== !1
        }, d.checkElementInContext = function(a, b) {
            var c = a,
                e = b || b;
            if (d.checkNodeEquality(c, e)) return !0;
            for (; c.parentNode;)
                if (c = c.parentNode, d.checkNodeEquality(c, e)) return !0;
            return !1
        }, d.checkNodeEquality = function(a, b) {
            return a === b
        }, d.isInViewport = function(a, b) {
            for (var c = a, d = c.offsetTop, e = c.offsetLeft, f = c.offsetWidth, g = c.offsetHeight, h = !1; c.offsetParent;) c = c.offsetParent, d += c.offsetTop, e += c.offsetLeft;
            return h = b ? d >= window.pageYOffset && e >= window.pageXOffset && d + g <= window.pageYOffset + window.innerHeight && e + f <= window.pageXOffset + window.innerWidth : d < window.pageYOffset + window.innerHeight && e < window.pageXOffset + window.innerWidth && d + g > window.pageYOffset && e + f > window.pageXOffset
        }, d.getOuterHeight = function(a, b) {
            var c = a,
                d = c.offsetHeight;
            if (b) {
                var e = getComputedStyle(c);
                d += parseInt(e.paddingTop) + parseInt(e.paddingBottom)
            }
            return d
        }, d.templatizer = function(a) {
            if (!(!1 in document.createElement("template"))) {
                if (!a && !a.templateName) throw new Error("You need to pass a template namespace as string!");
                d.querySelectorArray(a.templateName).forEach(function(a) {
                    var b = a.parentNode,
                        c = a.content.children[0];
                    b.insertBefore(c, a)
                })
            }
        }, d.clickHandler = function() {
            return d.isTouch() ? "touchstart" : "click"
        }, d.checkScript = function(a) {
            for (var b = document.getElementsByTagName("script"), c = !1, d = 0; d < b.length; d++) b[d].src == a && (c = !0);
            return c
        }, d.activateModule = function(a) {
            var b = a.active,
                c = b.indexOf(App.currentMedia);
            return c !== -1
        }, d.loadScript = function(a, b, c) {
            var e = d.checkScript(a),
                f = void 0;
            return e === !1 && (f = document.createElement("script"), f.src = a, document.body.appendChild(f)), b && "function" == typeof b && (e === !0 ? b.apply(c) : (f.onreadystatechange = function() {
                "complete" == x.readyState && b.apply(c)
            }, f.onload = function() {
                b.apply(c)
            })), !1
        }, d.hasClass = function(a, b) {
            var c = a;
            return "classList" in document.documentElement ? c.classList.contains(b) : d.regExp(b).test(c.className)
        }, d.addClass = function(a, b) {
            var c = a;
            "classList" in document.documentElement ? c.classList.add(b) : d.hasClass(c, b) || (c.className = c.className + " " + b)
        }, d.removeClass = function(a, b) {
            var c = a;
            "classList" in document.documentElement ? c.classList.remove(b) : c.className = c.className.replace(d.regExp(b), " ")
        }, d.addParamToUrl = function(a, b, c) {
            var e = {};
            return e[b] = c, d.updateUrl(a, e)
        }, d.updateUrl = function(a, b) {
            var c = a.split("?"),
                d = [],
                e = [],
                f = [],
                g = "",
                h = "",
                i = !1,
                j = 0,
                k = 0;
            for (h in b) b.hasOwnProperty(h) && d.push([h, "=", b[h]].join(""));
            for (g = c[0], e = c.length > 1 ? c[1].split("&") : [], j; j < d.length; j++) {
                for (i = !1, k = 0; k < e.length; k++)
                    if (d[j] && e[k].split("=")[0] === d[j].split("=")[0]) {
                        e[k] = d[j], i = !0;
                        break
                    }
                i || f.push(d[j])
            }
            return [g, "?", e.concat(f).join("&")].join("")
        }, d.makeId = function(a) {
            for (var b = a || 5, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = 0, e = ""; d < b; d++) e += c.charAt(Math.floor(Math.random() * c.length));
            return e
        };
        var f = window.CSS;
        d.cssSupports = function(a) {
            return f.supports.apply(f, arguments)
        }, d.supportPassiveEvents = function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                return window.addEventListener("test", null, b), a
            } catch (c) {}
        }, d.prefixed = function(a, b) {
            b = b || document.createElement("b").style;
            var c = ["Webkit", "webkit", "Moz", "moz", "Ms", "ms", "O", "o"],
                d = void 0,
                f = void 0,
                g = void 0,
                h = "";
            if (a = e.camelCase(a), a in b && (h = a), !h)
                for (f = e.camelCase("-" + a), d = 0; d < c.length && !h; d++)
                    if (g = c[d] + f, g in b) {
                        h = g;
                        break
                    }
            return h
        }, d.detectSwipe = function(a, b) {
            function c() {
                var b = Math.abs(d - f),
                    c = Math.abs(e - g);
                b > h && (f < d && a.dispatchEvent(new CustomEvent("swipe", {
                    detail: {
                        direction: "left"
                    }
                })), f > d && a.dispatchEvent(new CustomEvent("swipe", {
                    detail: {
                        direction: "right"
                    }
                }))), c > h && (g < e && a.dispatchEvent(new CustomEvent("swipe", {
                    detail: {
                        direction: "up"
                    }
                })), g > e && a.dispatchEvent(new CustomEvent("swipe", {
                    detail: {
                        direction: "down"
                    }
                })))
            }
            var d = 0,
                e = 0,
                f = 0,
                g = 0,
                h = b || 0;
            a.addEventListener("touchstart", function(a) {
                d = a.touches[0].clientX, e = a.touches[0].clientY
            }, !1), a.addEventListener("touchend", function(a) {
                f = a.changedTouches[0].clientX, g = a.changedTouches[0].clientY, c()
            }, !1)
        }, c["default"] = d
    }, {
        jquery: "jquery"
    }],
    45: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var e = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            f = function() {
                function a() {
                    d(this, a)
                }
                return e(a, null, [{
                    key: "bake",
                    value: function() {
                        document.cookie = "smartbanner_exited=1"
                    }
                }, {
                    key: "unbake",
                    value: function() {
                        document.cookie = "smartbanner_exited=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    }
                }, {
                    key: "baked",
                    get: function() {
                        var a = document.cookie.replace(/(?:(?:^|.*;\s*)smartbanner_exited\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                        return "1" === a
                    }
                }]), a
            }();
        c["default"] = f
    }, {}],
    46: [function(a, b, c) {
        (function(a) {
            "use strict";

            function b(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var d = function() {
                    function a(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                        }
                    }
                    return function(b, c, d) {
                        return c && a(b.prototype, c), d && a(b, d), b
                    }
                }(),
                e = function() {
                    function c() {
                        b(this, c)
                    }
                    return d(c, null, [{
                        key: "platform",
                        value: function() {
                            return /iPhone|iPad|iPod/i.test(window.navigator.userAgent) ? "ios" : /Android/i.test(window.navigator.userAgent) ? "android" : void 0
                        }
                    }, {
                        key: "jQueryMobilePage",
                        value: function() {
                            return "undefined" != typeof a.$ && "undefined" !== a.$.mobile && null !== document.querySelector(".ui-page")
                        }
                    }, {
                        key: "wrapperElement",
                        value: function() {
                            var a = c.jQueryMobilePage() ? ".ui-page" : "html";
                            return document.querySelector(a)
                        }
                    }]), c
                }();
            c["default"] = e
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    47: [function(a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function e(a) {
            return a.indexOf("smartbanner:") !== -1 && a.split(":")[1].length > 0
        }

        function f(a) {
            var b = a.split("-");
            return b.map(function(a, c) {
                c > 0 && (b[c] = a.charAt(0).toUpperCase() + a.substring(1))
            }), b.join("")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var g = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            h = function() {
                function a() {
                    d(this, a)
                }
                return g(a, [{
                    key: "parse",
                    value: function() {
                        var a = document.getElementsByTagName("meta"),
                            b = {},
                            c = null;
                        return Array.from(a).forEach(function(a) {
                            var d = a.getAttribute("name"),
                                g = a.getAttribute("content");
                            d && g && e(d) && g.length > 0 && (c = d.split(":")[1], c.includes("-") && (c = f(c)), b[c] = g)
                        }), b
                    }
                }]), a
            }();
        c["default"] = h
    }, {}],
    48: [function(a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }

        function f(a, b) {
            b.exit(), a.preventDefault()
        }

        function g(a) {
            var b = document.querySelector(".js_smartbanner__exit");
            b.addEventListener("click", function() {
                return f(event, a)
            })
        }

        function h() {
            var a = o["default"].wrapperElement(),
                b = parseFloat(getComputedStyle(a).marginTop);
            return isNaN(b) ? 0 : b
        }

        function i() {
            var a = o["default"].wrapperElement(),
                b = parseFloat(getComputedStyle(a).top);
            return isNaN(b) ? 0 : b
        }

        function j(a) {
            o["default"].jQueryMobilePage ? o["default"].wrapperElement().classList.add("is-visible-smartbanner") : o["default"].wrapperElement().classList.add("is-visible-smartbanner"), App.smartbanner = !0, App.smartbannerHeight = a
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var k = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            l = a("./optionparser.js"),
            m = d(l),
            n = a("./detector.js"),
            o = d(n),
            p = a("./bakery.js"),
            q = d(p),
            r = function() {
                function a() {
                    e(this, a);
                    var b = new m["default"];
                    this.options = b.parse(), this.platform = o["default"].platform(), this.originalTopMargin = h(), this.originalTop = i()
                }
                return k(a, [{
                    key: "publish",
                    value: function() {
                        if (0 === Object.keys(this.options).length) throw new Error("No options detected. Please consult documentation.");
                        if (q["default"].baked) return !1;
                        document.querySelector("header").insertAdjacentHTML("beforebegin", this.html);
                        var a = o["default"].jQueryMobilePage ? this.originalTop : this.originalTopMargin;
                        j(a + this.height), g(this)
                    }
                }, {
                    key: "exit",
                    value: function() {
                        var a = document.querySelector(".js_smartbanner");
                        a.outerHTML = "", q["default"].bake(), o["default"].jQueryMobilePage ? o["default"].wrapperElement().classList.remove("is-visible-smartbanner") : o["default"].wrapperElement().classList.remove("is-visible-smartbanner"),
                            App.smartbanner = !1
                    }
                }, {
                    key: "priceSuffix",
                    get: function() {
                        return "ios" === this.platform ? this.options.priceSuffixApple : "android" === this.platform ? this.options.priceSuffixGoogle : ""
                    }
                }, {
                    key: "icon",
                    get: function() {
                        return "android" === this.platform ? this.options.iconGoogle : this.options.iconApple
                    }
                }, {
                    key: "buttonUrl",
                    get: function() {
                        return "android" === this.platform ? this.options.buttonUrlGoogle : "ios" === this.platform ? this.options.buttonUrlApple : "#"
                    }
                }, {
                    key: "html",
                    get: function() {
                        return '<div class="c-smartbanner smartbanner--' + this.platform + ' js_smartbanner" data-css="c-smartbanner">\n      <a href="javascript:void();" class="smartbanner__exit js_smartbanner__exit"></a>\n      <div class="smartbanner__icon" style="background-image: url(' + this.icon + ');"></div>\n      <div class="smartbanner__info">\n        <div>\n          <h3 class="smartbanner__info-title">' + this.options.title + '</h3>\n          <p class="smartbanner__info-author">' + this.options.author + '</p>\n          <p class="smartbanner__info-price">' + this.options.price + this.priceSuffix + '</p>\n        </div>\n      </div>\n      <a href="' + this.buttonUrl + '" class="smartbanner__button"><span class="smartbanner__button__label">' + this.options.button + "</span></a>\n    </div>"
                    }
                }, {
                    key: "height",
                    get: function() {
                        var a = document.querySelector(".js_smartbanner").offsetHeight;
                        return void 0 !== a ? a : 0
                    }
                }]), a
            }();
        c["default"] = r
    }, {
        "./bakery.js": 45,
        "./detector.js": 46,
        "./optionparser.js": 47
    }]
}, {}, [4]);