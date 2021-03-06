document.addEventListener("DOMContentLoaded", function() {
        var t, e, a, r = r || {};
        r.scope = {}, r.findInternal = function(t, e, a) { t instanceof String && (t = String(t)); for (var r = t.length, n = 0; n < r; n++) { var s = t[n]; if (e.call(a, s, n, t)) return { i: n, v: s } } return { i: -1, v: void 0 } }, r.ASSUME_ES5 = !1, r.ASSUME_NO_NATIVE_MAP = !1, r.ASSUME_NO_NATIVE_SET = !1, r.SIMPLE_FROUND_POLYFILL = !1, r.defineProperty = r.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, a) { t != Array.prototype && t != Object.prototype && (t[e] = a.value) }, r.getGlobal = function(t) { return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t }, r.global = r.getGlobal(this), r.polyfill = function(t, e, a, n) {
            if (e) {
                for (a = r.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
                    var s = t[n];
                    s in a || (a[s] = {}), a = a[s]
                }(e = e(n = a[t = t[t.length - 1]])) != n && null != e && r.defineProperty(a, t, { configurable: !0, writable: !0, value: e })
            }
        }, r.polyfill("Array.prototype.find", function(t) { return t || function(t, e) { return r.findInternal(this, t, e).v } }, "es6", "es3"), t = function(t) {
            var e = function(e, a, r) {
                var n = {
                    invalid: [],
                    getCaret: function() {
                        try {
                            var t = 0,
                                a = e.get(0),
                                r = document.selection,
                                s = a.selectionStart;
                            if (r && -1 === navigator.appVersion.indexOf("MSIE 10")) {
                                var o = r.createRange();
                                o.moveStart("character", -n.val().length), t = o.text.length
                            } else(s || "0" === s) && (t = s);
                            return t
                        } catch (t) {}
                    },
                    setCaret: function(t) {
                        try {
                            if (e.is(":focus")) {
                                var a = e.get(0);
                                if (a.setSelectionRange) a.setSelectionRange(t, t);
                                else {
                                    var r = a.createTextRange();
                                    r.collapse(!0), r.moveEnd("character", t), r.moveStart("character", t), r.select()
                                }
                            }
                        } catch (t) {}
                    },
                    events: function() { e.on("keydown.mask", function(t) { e.data("mask-keycode", t.keyCode || t.which), e.data("mask-previus-value", e.val()), e.data("mask-previus-caret-pos", n.getCaret()), n.maskDigitPosMapOld = n.maskDigitPosMap }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", n.behaviour).on("paste.mask drop.mask", function() { setTimeout(function() { e.keydown().keyup() }, 100) }).on("change.mask", function() { e.data("changed", !0) }).on("blur.mask", function() { i === n.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1) }).on("blur.mask", function() { i = n.val() }).on("focus.mask", function(e) {!0 === r.selectOnFocus && t(e.target).select() }).on("focusout.mask", function() { r.clearIfNotMatch && !s.test(n.val()) && n.val("") }) },
                    getRegexMask: function() { for (var t, e, r, n, s = [], i = 0; i < a.length; i++)(t = o.translation[a.charAt(i)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), r = t.optional, (t = t.recursive) ? (s.push(a.charAt(i)), n = { digit: a.charAt(i), pattern: e }) : s.push(r || t ? e + "?" : e)) : s.push(a.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")); return s = s.join(""), n && (s = s.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern)), new RegExp(s) },
                    destroyEvents: function() { e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask ")) },
                    val: function(t) { var a = e.is("input") ? "val" : "text"; return 0 < arguments.length ? (e[a]() !== t && e[a](t), a = e) : a = e[a](), a },
                    calculateCaretPosition: function(t) {
                        var a = n.getMasked(),
                            r = n.getCaret();
                        if (t !== a) {
                            var s = e.data("mask-previus-caret-pos") || 0;
                            a = a.length;
                            var o, i = t.length,
                                l = t = 0,
                                c = 0,
                                u = 0;
                            for (o = r; o < a && n.maskDigitPosMap[o]; o++) l++;
                            for (o = r - 1; 0 <= o && n.maskDigitPosMap[o]; o--) t++;
                            for (o = r - 1; 0 <= o; o--) n.maskDigitPosMap[o] && c++;
                            for (o = s - 1; 0 <= o; o--) n.maskDigitPosMapOld[o] && u++;
                            r > i ? r = 10 * a : s >= r && s !== i ? n.maskDigitPosMapOld[r] || (s = r, r = r - (u - c) - t, n.maskDigitPosMap[r] && (r = s)) : r > s && (r = r + (c - u) + l)
                        }
                        return r
                    },
                    behaviour: function(a) {
                        a = a || window.event, n.invalid = [];
                        var r = e.data("mask-keycode");
                        if (-1 === t.inArray(r, o.byPassKeys)) {
                            r = n.getMasked();
                            var s = n.getCaret(),
                                i = e.data("mask-previus-value") || "";
                            return setTimeout(function() { n.setCaret(n.calculateCaretPosition(i)) }, t.jMaskGlobals.keyStrokeCompensation), n.val(r), n.setCaret(s), n.callbacks(a)
                        }
                    },
                    getMasked: function(t, e) {
                        var s, i = [],
                            l = void 0 === e ? n.val() : e + "",
                            c = 0,
                            u = a.length,
                            p = 0,
                            d = l.length,
                            m = 1,
                            f = "push",
                            v = -1,
                            g = 0;
                        if (e = [], r.reverse) {
                            f = "unshift", m = -1;
                            var h = 0;
                            c = u - 1, p = d - 1;
                            var k = function() { return -1 < c && -1 < p }
                        } else h = u - 1, k = function() { return c < u && p < d };
                        for (; k();) {
                            var _ = a.charAt(c),
                                b = l.charAt(p),
                                y = o.translation[_];
                            y ? (b.match(y.pattern) ? (i[f](b), y.recursive && (-1 === v ? v = c : c === h && c !== v && (c = v - m), h === v && (c -= m)), c += m) : b === s ? (g--, s = void 0) : y.optional ? (c += m, p -= m) : y.fallback ? (i[f](y.fallback), c += m, p -= m) : n.invalid.push({ p: p, v: b, e: y.pattern }), p += m) : (t || i[f](_), b === _ ? (e.push(p), p += m) : (s = _, e.push(p + g), g++), c += m)
                        }
                        return t = a.charAt(h), u !== d + 1 || o.translation[t] || i.push(t), i = i.join(""), n.mapMaskdigitPositions(i, e, d), i
                    },
                    mapMaskdigitPositions: function(t, e, a) { for (t = r.reverse ? t.length - a : 0, n.maskDigitPosMap = {}, a = 0; a < e.length; a++) n.maskDigitPosMap[e[a] + t] = 1 },
                    callbacks: function(t) {
                        var s = n.val(),
                            o = s !== i,
                            l = [s, t, e, r],
                            c = function(t, e, a) { "function" == typeof r[t] && e && r[t].apply(this, a) };
                        c("onChange", !0 === o, l), c("onKeyPress", !0 === o, l), c("onComplete", s.length === a.length, l), c("onInvalid", 0 < n.invalid.length, [s, t, e, n.invalid, r])
                    }
                };
                e = t(e);
                var s, o = this,
                    i = n.val();
                a = "function" == typeof a ? a(n.val(), void 0, e, r) : a, o.mask = a, o.options = r, o.remove = function() { var t = n.getCaret(); return o.options.placeholder && e.removeAttr("placeholder"), e.data("mask-maxlength") && e.removeAttr("maxlength"), n.destroyEvents(), n.val(o.getCleanVal()), n.setCaret(t), e }, o.getCleanVal = function() { return n.getMasked(!0) }, o.getMaskedVal = function(t) { return n.getMasked(!1, t) }, o.init = function(i) {
                    if (i = i || !1, r = r || {}, o.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, o.byPassKeys = t.jMaskGlobals.byPassKeys, o.translation = t.extend({}, t.jMaskGlobals.translation, r.translation), o = t.extend(!0, {}, o, r), s = n.getRegexMask(), i) n.events(), n.val(n.getMasked());
                    else {
                        r.placeholder && e.attr("placeholder", r.placeholder), e.data("mask") && e.attr("autocomplete", "off"), i = 0;
                        for (var l = !0; i < a.length; i++) { var c = o.translation[a.charAt(i)]; if (c && c.recursive) { l = !1; break } }
                        l && e.attr("maxlength", a.length).data("mask-maxlength", !0), n.destroyEvents(), n.events(), i = n.getCaret(), n.val(n.getMasked()), n.setCaret(i)
                    }
                }, o.init(!e.is("input"))
            };
            t.maskWatchers = {};
            var a = function() {
                    var a = t(this),
                        n = {},
                        s = a.attr("data-mask");
                    if (a.attr("data-mask-reverse") && (n.reverse = !0), a.attr("data-mask-clearifnotmatch") && (n.clearIfNotMatch = !0), "true" === a.attr("data-mask-selectonfocus") && (n.selectOnFocus = !0), r(a, s, n)) return a.data("mask", new e(this, s, n))
                },
                r = function(e, a, r) {
                    r = r || {};
                    var n = t(e).data("mask"),
                        s = JSON.stringify;
                    e = t(e).val() || t(e).text();
                    try { return "function" == typeof a && (a = a(e)), "object" != typeof n || s(n.options) !== s(r) || n.mask !== a } catch (t) {}
                },
                n = function(t) {
                    var e = document.createElement("div"),
                        a = (t = "on" + t) in e;
                    return a || (e.setAttribute(t, "return;"), a = "function" == typeof e[t]), a
                };
            t.fn.mask = function(a, n) {
                n = n || {};
                var s = this.selector,
                    o = t.jMaskGlobals,
                    i = o.watchInterval;
                o = n.watchInputs || o.watchInputs;
                var l = function() { if (r(this, a, n)) return t(this).data("mask", new e(this, a, n)) };
                return t(this).each(l), s && "" !== s && o && (clearInterval(t.maskWatchers[s]), t.maskWatchers[s] = setInterval(function() { t(document).find(s).each(l) }, i)), this
            }, t.fn.masked = function(t) { return this.data("mask").getMaskedVal(t) }, t.fn.unmask = function() {
                return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function() {
                    var e = t(this).data("mask");
                    e && e.remove().removeData("mask")
                })
            }, t.fn.cleanVal = function() { return this.data("mask").getCleanVal() }, t.applyDataMask = function(e) {
                ((e = e || t.jMaskGlobals.maskElements) instanceof t ? e : t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(a)
            }, n = { maskElements: "input,td,span,div", dataMaskAttr: "*[data-mask]", dataMask: !0, watchInterval: 300, watchInputs: !0, keyStrokeCompensation: 10, useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && n("input"), watchDataMask: !1, byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91], translation: { 0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ }, S: { pattern: /[a-zA-Z]/ } } }, t.jMaskGlobals = t.jMaskGlobals || {}, (n = t.jMaskGlobals = t.extend(!0, {}, n, t.jMaskGlobals)).dataMask && t.applyDataMask(), setInterval(function() { t.jMaskGlobals.watchDataMask && t.applyDataMask() }, n.watchInterval)
        }, e = window.jQuery, a = window.Zepto, "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "undefined" == typeof Meteor ? module.exports = t(require("jquery")) : t(e || a)
    }),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
        var e = /\+/g;

        function a(t) { return s.raw ? t : encodeURIComponent(t) }

        function r(t) { return a(s.json ? JSON.stringify(t) : String(t)) }

        function n(a, r) { var n = s.raw ? a : function(t) { 0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return t = decodeURIComponent(t.replace(e, " ")), s.json ? JSON.parse(t) : t } catch (t) {} }(a); return t.isFunction(r) ? r(n) : n }
        var s = t.cookie = function(e, o, i) {
            if (arguments.length > 1 && !t.isFunction(o)) {
                if ("number" == typeof(i = t.extend({}, s.defaults, i)).expires) {
                    var l = i.expires,
                        c = i.expires = new Date;
                    c.setMilliseconds(c.getMilliseconds() + 864e5 * l)
                }
                return document.cookie = [a(e), "=", r(o), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var u, p = e ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], m = 0, f = d.length; m < f; m++) {
                var v = d[m].split("="),
                    g = (u = v.shift(), s.raw ? u : decodeURIComponent(u)),
                    h = v.join("=");
                if (e === g) { p = n(h, o); break }
                e || void 0 === (h = n(h)) || (p[g] = h)
            }
            return p
        };
        s.defaults = {}, t.removeCookie = function(e, a) { return t.cookie(e, "", t.extend({}, a, { expires: -1 })), !t.cookie(e) }
    }),
    function(t) {
        const e = { l: "l", an: "an", discText: ["???????????? 50%", "???????????? 40%", "???????????? 20%", "???????????? 18%"], di: "di", ng: "ng", sectionText: { respondText: "?????? ???????????????? ???????????????? ?? ????????, ?????????? ?????????????? ?????????? ?? ?????????????? ?????????????????? ?? ????????????????.", placeholderText: "?????????????? ??????????", phoneMask: "+7(000)000-00-00", agreement: { isRequired: !1, isLink: !1 } }, cookiesLife: 1, a: "a", r: "r", res: '<p>???????????? ???? ?????????? ????????????????, ???????? ???????????? ???????????? ???? ????????????????????????. ?????????? ???????????????????????? ???????????? ?????? ???????? ????????????, ?????????????????????? ???????????? ???????????? <a href="https://smartlanding.biz/smartroulette-lp/">??????!</a></p>' },
            a = {
                createTextArea() {
                    const { respondText: r, placeholderText: n, phoneMask: s, agreement: o } = e.sectionText, i = t("<div>").attr({ class: "smart-roulette__right-block" }), l = t("<div>").attr({ class: "smart-roulette__text-area" }), c = t("<div>").attr({ class: "smart-roulette__text-respond" }).html(`\n                <div class="smart-roulette__title-respond">?????????????? ??????????????????:</div>\n                <div class="smart-roulette__prize-respond"></div>\n                <div class="smart-roulette__subtitle-respond">${r}</div>\n                `), u = t("<div>").attr({ class: "smart-roulette__text-title" }).text("?????????????????????? ?????????? ????????????!"), p = t("<div>").attr({ class: "smart-roulette__text-description" }).text("?????????????? ???????????????????????? ????????????????, ???????????????????? ?????????????????????? ???? ?????????????? ?????????????? ???????????? ???????? ??????????!"), d = t("<form>").attr({ class: "smart-roulette__form", id: "smart-roulette__form", enctype: "multipart/form-data" }), m = t("<div>").attr({ class: "smart-roulette__input-wrapper" }), f = t("<div>").attr({ class: "smart-roulette__input-msgs smart-roulette__input-msgs_error" });
                    let v = { input: !1, checkbox: !0 },
                        g = function() { v.input && v.checkbox ? _.attr({ disabled: !1 }) : _.attr({ disabled: !0 }) };
                    const h = t("<input>").attr({ class: "smart-roulette__input", placeholder: n, name: "tel", autocomplete: "off" }).mask(s);
                    h.blur(function() { t(this).val().length === s.length ? (f.text(""), v.input = !0, g()) : t(this).val().length >= 1 && (v.input = !1, g(), f.text("?????????????? ???????????? ?????????? ???????????????????? ?????????? ?????????? ????????????")) }), h.keyup(function() { t(this).val().length !== s.length && 0 !== t(this).val().length || f.text("") }), m.append(h).append(f);
                    const k = t("<input>").attr({ type: "hidden", name: "section[]", value: e.discText }),
                        _ = t("<button>").attr({ class: "smart-roulette__button" }).html('<div class="smart-roulette__button-inner">????????????????????</div>'),
                        b = t("<div>").attr({ class: "smart-roulette__inputs" }).append(m).append(_);
                    if (d.append(u).append(p).append(b).append(k), o.isRequired) {
                        const e = t("<div>").attr({ class: "smart-roulette__agreement-wrapper" });
                        let a = t("<label>").attr({ class: "smart-roulette__label-agreement", for: "smart-roulette__input-agreement" }),
                            r = t("<input>").attr({ type: "checkbox", name: "agreement", class: "smart-roulette__input-agreement", id: "smart-roulette__input-agreement", checked: !0, value: "???????????????????????? ???????????????????????? ?????????? ??????????????" }),
                            n = t("<div>").attr({ class: "smart-roulette__input-msgs" }),
                            s = null;
                        s = o.isLink ? t("<a>").attr({ class: "smart-roulette__link-agreement", href: o.isLink, target: "_blank", rel: "nofollow" }) : t("<span>").attr({ class: "smart-roulette__link-agreement" }), r.is(":checked") ? s.text("???????????????????????? ???????????????????????? ?????????? ??????????????") : s.text("???????????????????????? ???????????????????????? ?????????? ??????????????????"), a.click(function() { r.is(":checked") ? (s.text("???????????????????????? ???????????????????????? ?????????? ??????????????????"), r.val("???????????????????????? ???????????????????????? ?????????? ??????????????????"), v.checkbox = !1, g(), n.text("???????????????????? ?????????? ????????????")) : (s.text("???????????????????????? ???????????????????????? ?????????? ??????????????"), r.val("???????????????????????? ???????????????????????? ?????????? ??????????????"), v.checkbox = !0, g(), n.text("")) }), e.append(r).append(a).append(s).append(n), d.append(e)
                    }
                    if (a.spinDrum(_), 4 !== e.discText.length) l.text("?????? ???????????? ?????????????? ???????????????????? ?????????????????? 4 ???????????? ?? ?????????? smart-roulette-config.js!");
                    else if (null == t.cookie("smr")) console.log("?????? ????????"), a.v() ? l.append(d).append(c) : l.text(e.res);
                    else {
                        const e = t("<div>").attr({ class: "smart-roulette__text-respond" }).html(`\n                            <div class="smart-roulette__title-respond">?????? ???????????????????? ???????????????????? ??????????????????!</div>\n                            <div class="smart-roulette__prize-respond">?????? ??????????????: ${t.cookie("smr")}</div>\n                            <div class="smart-roulette__subtitle-respond">${r}</div>\n                        `).css("display", "block");
                        l.append(e), console.log("???????? ????????")
                    }
                    return a.v() ? i.append(l) : i.append(e.res), i
                },
                createRoulette() {
                    if (4 === e.discText.length) {
                        const a = t("<div>").attr({ class: "smart-roulette__left-block" }),
                            r = t("<div>").attr({ class: "smart-roulette__disc-wrapper" }),
                            n = t("<div>").attr({ class: "smart-roulette__items" });
                        let s = 0;
                        for (s = 0; s < 4; s++) { const a = t("<div>").attr({ class: "smart-roulette__item" }); if (a.addClass(`smart-roulette__item_${s+1}`).html(`<span>${e.discText[s]}</span>`), n.append(a), s >= 4) break }
                        return n.addClass(`smart-roulette__items_${s}`), a.append(r.append(n)), a
                    }
                    return !1
                },
                v() {
                    const a = ".bi";
                    let r = "sm" + e.a + e.r + "t",
                        n = e.l + e.an + e.di + e.ng;
                    if ("smartlanding.biz" == r + n + a + "z") { const s = t("<a>").attr({ class: "smart-roulette__copyright", href: "https://sma" + e.r + "t" + n + a + "z/smartroulette-lp/", target: "_blank" }).text(r + n + a + "z"); return s.css({ position: "absolute", display: "none", opacity: "0", bottom: "15px", fontSize: "0px", textDecoration: "none", color: "#777" }), s }
                    return console.log(r + n + ".biz"), !1
                },
                createModal() {
                    const e = t("<div>").attr({ class: "smart-roulette" }),
                        r = t("<div>").attr({ class: "smart-roulette__inner" }),
                        n = t("<button>").attr({ class: "smart-roulette__close" }).text("??");
                    return a.v() ? e.append(a.v()) : alert("???????????? ???????????????? ???????????? ???? ???????? ????????????????????????"), r.append(n), e.append(r.append(a.createRoulette()).append(a.createTextArea)), t(".smart-roulette__gift, .smart-roulette__gift-button").click(function() { t(".smart-roulette").addClass("smart-roulette_active"), t("body").css("overflowY", "hidden") }), n.click(function() { t(".smart-roulette").removeClass("smart-roulette_active"), t("body").css("overflowY", "auto") }), e.mouseup(function(a) { r.is(a.target) || 0 !== r.has(a.target).length || (e.removeClass("smart-roulette_active"), t("body").css("overflowY", "scroll")) }), e
                },
                createWidget: () => a.createModal(),
                spinDrum: function(a) {
                    a.click(function(r) {
                        let n, s, o, i, l;
                        r.preventDefault(), (n = t("." + a.attr("class"))).attr("disabled", "disabled"), 0 === n.find(".ripple").length && n.prepend("<span class='ripple'></span>"), (s = n.find(".ripple")).removeClass("animate"), s.height() || s.width() || (o = Math.max(n.outerWidth(), n.outerHeight()), s.css({ height: o, width: o })), i = r.pageX - n.offset().left - s.width() / 2, l = r.pageY - n.offset().top - s.height() / 2, s.css({ top: l + "px", left: i + "px" }).addClass("animate");
                        const c = t("#smart-roulette__form")[0],
                            u = new FormData(c),
                            p = t(".smart-roulette__items"),
                            d = t(".smart-roulette__form"),
                            m = t(".smart-roulette__text-respond"),
                            f = t(".smart-roulette__prize-respond"),
                            v = t(".smart-roulette__input-msgs_error");
                        t.ajax({
                            url: "php/spinner.php",
                            type: "POST",
                            data: u,
                            processData: !1,
                            contentType: !1,
                            success: function(a) {
                                let r = t.parseJSON(a);
                                if (console.log(r), !isNaN(parseFloat(r.deg)) && isFinite(r.deg)) console.log("??????????" + r.deg), p.css({ transform: "rotate(" + r.deg + "deg)" }), Number.isInteger(e.cookiesLife) && t.cookie("smr", r.title, { expires: e.cookiesLife }), setTimeout(() => { d.css("display", "none"), f.text(r.title), m.css("display", "block"), e.met(), console.log(r.title) }, 6100);
                                else switch (r.error) {
                                    case "NOTCONTACT":
                                        console.log(r.error), v.text("?????????????? ???????????????????? ?????????????? ?????? ??????????").css({ opacity: 1, visibility: "visible" });
                                        break;
                                    case "NOTSECTION":
                                        console.log("???? ???????????????????? ????????????, ?????????????????? ?????????????????? ??????????????");
                                        break;
                                    case "NOTCORRECTMAIL":
                                        console.log(r.error), v.text("?????????????? ???????????????????? email").css({ opacity: 1, visibility: "visible" })
                                }
                            },
                            complete: function(t) {}
                        })
                    })
                },
                init: function(r) { t.extend(e, r); const n = t("<button>").attr({ class: "smart-roulette__gift smart-roulette__gift_left" }); return n.append('<img src="img/gift.svg"  width="80" alt="??????????????" title="?????????????????????? ??????????!">'), this.each(function() { t(this).append(n), t(this).append(a.createWidget()) }) }
            };
        t.fn.smroulette = function(e) { return a[e] ? a[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("?????????? " + e + " ???? ????????????") : a.init.apply(this, arguments) }


    }(jQuery);