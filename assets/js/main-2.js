var ht = Object.defineProperty;
var ct = (c, i, t) => i in c ? ht(c, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : c[i] = t;
var o = (c, i, t) => (ct(c, typeof i != "symbol" ? i + "" : i, t),
t);
import {S as f, g as n, a as I, G, b as v, M as R, O as dt, V as P, P as X, c as Y, Q as Z, W as ut, s as B, L as mt, d as Q, e as K, D as J, f as pt, B as tt, F as W, h as ft, R as $, A as gt, i as vt, j as yt, T as _t, k as bt, l as et, I as xt, m as wt, n as it, o as St, p as kt, q as S, r as E, t as st, u as q, C as A, v as U, U as Tt, w as nt, x as Et, H as Lt, y as Ct, z as Dt, E as At, J as k, K as It} from "./vendor.49818974.js";
(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        e(s);
    new MutationObserver(s => {
        for (const r of s)
            if (r.type === "childList")
                for (const a of r.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && e(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity),
        s.referrerpolicy && (r.referrerPolicy = s.referrerpolicy),
        s.crossorigin === "use-credentials" ? r.credentials = "include" : s.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function e(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const r = t(s);
        fetch(s.href, r)
    }
}
)();
class Pt extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "resize", () => {
            this.innerNavHeight = this.innerNav.getBoundingClientRect().height,
            this.viewport.medias.desktop ? (n.set(this.innerNav, {
                y: 0,
                display: "flex"
            }),
            n.set(this.innerSections.map(t => t.element), {
                opacity: 1,
                y: 0
            })) : (n.set(this.innerNav, {
                y: this.innerNavHeight
            }),
            n.set(this.innerSections.map(t => t.element), {
                opacity: 0,
                y: 0
            }),
            this.opened = !1),
            this.innerSections.forEach(t => {
                var e, s;
                if (this.current == t) {
                    const r = t.element.getBoundingClientRect().top - this.innerSectionsWrapper.getBoundingClientRect().top + t.element.offsetHeight / 2 - 2;
                    (s = (e = this.iconTl) == null ? void 0 : e.kill) == null || s.call(e),
                    n.set(this.fixedIcon, {
                        background: "#C38C5C",
                        scale: 1,
                        top: r + "px"
                    })
                }
            }
            )
        }
        );
        o(this, "windowClick", t => {
            if (this.animation != !0 && this.opened == !0) {
                let e = 0;
                this.elements.forEach(s => {
                    t.target !== s && e++,
                    e == this.elements.length && this.toggleWindow()
                }
                )
            }
        }
        );
        o(this, "toggleWindow", () => {
            this.animation || (this.opened ? this.close() : this.open())
        }
        );
        o(this, "onSectionChanged", t => {
            t == "Intro" ? this.element.classList.add("hidden") : this.element.classList.remove("hidden"),
            this.innerSections.forEach(e => {
                var s;
                if (e.element.classList.toggle("active", e.name == t),
                e.name == t) {
                    this.current = e;
                    const r = e.element.getBoundingClientRect().top - this.innerSectionsWrapper.getBoundingClientRect().top + e.element.offsetHeight / 2 - 2;
                    (s = this.iconTl) == null || s.kill(),
                    this.iconTl = n.timeline({}),
                    this.iconTl.to(this.fixedIcon, {
                        background: "white",
                        scale: 1.2,
                        duration: .6
                    }).to(this.fixedIcon, {
                        background: "#C38C5C",
                        scale: 1,
                        duration: .6
                    }).to(this.fixedIcon, {
                        top: r + "px",
                        opacity: 1,
                        ease: "power2.out",
                        duration: 1.5
                    }, "0")
                }
            }
            ),
            this.outerSections.forEach(e => {
                e.element.classList.toggle("active", e.name == t)
            }
            ),
            !this.viewport.medias.desktop && this.opened && this.toggleWindow()
        }
        );
        o(this, "footerOpened", () => {
            this.element.classList.add("hidden")
        }
        );
        o(this, "footerClosed", () => {
            this.element.classList.remove("hidden")
        }
        );
        this.screen = null,
        this.outerNav = this.element.querySelector(".outer-nav"),
        this.innerNav = this.element.querySelector(".inner-nav"),
        this.outerText = this.outerNav.querySelector(".actual-section-w"),
        this.outerIcon = this.outerNav.querySelector(".circle-diamond-icon"),
        this.innerSectionsWrapper = this.innerNav.querySelector(".nav-sections-w"),
        this.innerSections = Array.from(this.innerSectionsWrapper.querySelectorAll(".nav-item-w")).map( (s, r) => ({
            element: s,
            id: r,
            name: s.dataset.navName,
            onClick: null
        })),
        this.outerSections = Array.from(this.outerNav.querySelectorAll(".actual-section")).map( (s, r) => ({
            element: s,
            id: r,
            name: s.dataset.actualNav
        })),
        this.elements = this.element.querySelectorAll("*"),
        this.homepageElement = document.getElementById("homepage"),
        this.opened = !1,
        this.animation = !1,
        this.fixedIcon = this.element.querySelector(".fixed-diamond"),
        this.current = null
    }
    open() {
        var t;
        this.opened = !0,
        this.outerText.classList.add("hide"),
        this.outerIcon.classList.add("open"),
        (t = this._tl) == null || t.kill(),
        this._tl = n.timeline(),
        this._tl.set(this.innerNav, {
            display: "flex"
        }),
        this._tl.to(this.innerNav, {
            y: 0,
            duration: .7,
            ease: "power2.out"
        }),
        this._tl.to(this.innerSections.map(e => e.element), {
            opacity: 1,
            stagger: .08
        }, .1),
        this._tl.to(this.outerText, {
            opacity: 0,
            duration: .6,
            ease: "power2.out"
        }, 0)
    }
    close() {
        var t;
        this.opened = !1,
        this.outerText.classList.remove("hide"),
        this.outerIcon.classList.remove("open"),
        (t = this._tl) == null || t.kill(),
        this._tl = n.timeline(),
        this._tl.to(this.innerSections.map(e => e.element), {
            opacity: 0,
            stagger: {
                each: .05,
                from: "end"
            },
            duration: .3
        }, 0),
        this._tl.to(this.innerNav, {
            y: this.innerNavHeight,
            duration: .5,
            ease: "power2.in"
        }, 0),
        this._tl.set(this.innerNav, {
            display: "none"
        }),
        this._tl.to(this.outerText, {
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        })
    }
    navClick(t) {
        this.homepageComponent.setSectionFromName(t.name)
    }
    attach() {
        this.outerIcon.addEventListener("click", this.toggleWindow),
        window.addEventListener("click", this.windowClick),
        this.viewport.on("resize", this.resize),
        this.innerSections.forEach(t => {
            t.onClick = this.navClick.bind(this, t),
            t.element.addEventListener("click", t.onClick)
        }
        ),
        this.homepageComponent = this.components.get(this.homepageElement),
        this.homepageComponent.on("section-changed", this.onSectionChanged),
        this.homepageComponent.on("footer-opened", this.footerOpened),
        this.homepageComponent.on("footer-closed", this.footerClosed),
        this.resize()
    }
    detach() {
        this.outerIcon.removeEventListener("click", this.toggleWindow),
        window.removeEventListener("click", this.windowClick),
        this.viewport.off("resize", this.resize),
        this.innerSections.forEach(t => {
            t.element.removeEventListener("click", t.onClick)
        }
        ),
        this.homepageComponent.off("section-changed", this.onSectionChanged),
        this.homepageComponent.off("footer-opened", this.footerOpened),
        this.homepageComponent.off("footer-closed", this.footerClosed)
    }
}
class $t extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "init", () => {
            var t;
            this.element.hasAttribute("data-slideshow-no-translate") && (this.translate = !1),
            this.element.hasAttribute("data-slideshow-auto") && (this.autoSwitch = !0),
            this.element.hasAttribute("data-image-auto") && (this.autoSwitchImage = !0,
            I.create({
                trigger: this.element,
                start: "top bottom",
                onEnter: this.autoNextImage,
                toggleActions: "play none none none"
            })),
            this.translate == !0 ? (n.set(this.slides[0].element, {
                opacity: 1,
                left: 0
            }),
            this.slides[0].button && n.set(this.slides[0].button, {
                opacity: 1,
                left: 0
            })) : (this.slides.forEach( (e, s) => {
                n.set(e.element, {
                    opacity: 1,
                    left: "-10%",
                    zIndex: -s
                }),
                e.text && n.set(e.text, {
                    opacity: 0
                })
            }
            ),
            n.set(this.slides[0].element, {
                left: 0
            }),
            this.slides[0].text && n.set(this.slides[0].text, {
                opacity: 1
            })),
            (t = this.slides[0].goToButton) == null || t.classList.add("active"),
            this.counters.length && (this.counterTotal.innerText = this.slides.length < 10 ? "0" + this.slides.length : this.slides.length,
            this.counter = !0),
            this.progressBar && (this.progressBar.style.width = "0%"),
            this.element.hasAttribute("data-parallax") && (this.tl = n.timeline({
                scrollTrigger: {
                    trigger: this.element,
                    scrub: !0,
                    once: !1
                }
            }),
            this.tl.fromTo(this.element, {
                yPercent: 40
            }, {
                yPercent: -60
            }))
        }
        );
        o(this, "updateProgressBar", () => {
            const t = this.index / (this.slides.length - 1) * 100;
            this.progressBar && n.to(this.progressBar.style, {
                width: t + "%",
                duration: .9,
                ease: "circ.inOut"
            })
        }
        );
        o(this, "next", t => {
            var s, r, a, l, h;
            if (this.animated)
                return;
            if ((s = this._tl) == null || s.kill(),
            this.animated = !0,
            this.translate == !1) {
                this.nextNoTranslate();
                return
            }
            let e = this.index + 1;
            e >= this.slides.length && (e = 0),
            this._tl = n.timeline(),
            this._tl.fromTo(this.slides[this.index].element, {
                opacity: 1
            }, {
                opacity: 0,
                ease: this._outOpacityEase,
                duration: this._outOpacityDuration
            }, 0),
            this._tl.fromTo(this.slides[this.index].element, {
                left: 0
            }, {
                left: "-20%",
                ease: this._outLeftEase,
                duration: this._outLeftDuration
            }, 0),
            (r = this.slides[this.index]) != null && r.button && this._tl.fromTo(this.slides[this.index].button, {
                opacity: 1
            }, {
                opacity: 0,
                ease: this._outOpacityEase,
                duration: this._outOpacityDuration
            }, "<"),
            (a = this.slides[this.index]) != null && a.button && this._tl.fromTo(this.slides[this.index].button, {
                left: 0
            }, {
                left: "-20%",
                ease: this._outLeftEase,
                duration: this._outLeftDuration
            }, "<"),
            this._tl.fromTo(this.slides[e].element, {
                opacity: 0
            }, {
                opacity: 1,
                ease: this._inOpacityEase,
                duration: this._inOpacityDuration
            }),
            this._tl.fromTo(this.slides[e].element, {
                left: "20%"
            }, {
                left: 0,
                ease: this._inLeftEase,
                duration: this._inLeftDuration
            }, "<"),
            (l = this.slides[e]) != null && l.button && this._tl.fromTo(this.slides[e].button, {
                opacity: 0
            }, {
                opacity: 1,
                ease: this._inOpacityEase,
                duration: this._inOpacityDuration
            }, "<"),
            (h = this.slides[e]) != null && h.button && this._tl.fromTo(this.slides[e].button, {
                left: "20%"
            }, {
                left: 0,
                ease: this._inLeftEase,
                duration: this._inLeftDuration
            }, "<"),
            this._tl.set(this, {
                animated: !1
            }),
            this.updateCounter(this.index, e, "next"),
            this.index + 1 >= this.slides.length ? this.index = 0 : this.index++,
            this.updateProgressBar(),
            this.updateButtons()
        }
        );
        o(this, "onEnter", () => {
            var t, e;
            this.firstEnter ? (this.autoSwitch && this.autoNext(),
            this.firstEnter = !1) : (e = (t = this.autoTl) == null ? void 0 : t.resume) == null || e.call(t)
        }
        );
        o(this, "onLeave", () => {
            var t;
            (t = this.autoTl) == null || t.pause()
        }
        );
        o(this, "autoNext", () => {
            var e;
            const t = this.forwardButton.querySelector(".animated-circle circle");
            (e = this.autoTl) == null || e.kill(),
            this.autoTl = n.timeline(),
            this.autoTl.to(t, {
                strokeDashoffset: "800",
                ease: "none",
                duration: 10
            }, "<").add(this.next).to(t, {
                strokeDashoffset: "600",
                ease: "none",
                duration: 1
            }).add(this.autoNext)
        }
        );
        o(this, "autoNextImage", () => {
            var e;
            const t = this.forwardButton.querySelector(".animated-circle circle");
            (e = this.autoTl) == null || e.kill(),
            this.autoTl = n.timeline(),
            this.autoTl.to(t, {
                strokeDashoffset: "800",
                ease: "none",
                duration: 6
            }, "<").add(this.nextNoTranslate).to(t, {
                strokeDashoffset: "600",
                ease: "none",
                duration: 1
            }).add(this.autoNextImage)
        }
        );
        o(this, "resetAutoAnimation", () => {
            var s;
            const t = this.forwardButton.querySelector(".animated-circle")
              , e = this.forwardButton.querySelector(".animated-circle circle");
            (s = this.autoTl) == null || s.kill(),
            n.to(e, {
                strokeDashoffset: "600",
                ease: "none",
                duration: 1
            }),
            n.to(t, {
                rotate: "90deg",
                ease: "power4.inOut",
                duration: 6
            }, "<")
        }
        );
        o(this, "previous", t => {
            var s, r, a, l, h;
            if (this.animated)
                return;
            if ((s = this._tl) == null || s.kill(),
            this.animated = !0,
            this.translate == !1) {
                this.previousNoTranslate();
                return
            }
            let e = this.index - 1;
            e < 0 && (e = this.slides.length - 1),
            this._tl = n.timeline(),
            this._tl.fromTo(this.slides[this.index].element, {
                opacity: 1
            }, {
                opacity: 0,
                ease: this._outOpacityEase,
                duration: this._outLeftDuration
            }, 0),
            this._tl.fromTo(this.slides[this.index].element, {
                left: 0
            }, {
                left: "20%",
                ease: this._outLeftEase,
                duration: this._outLeftDuration
            }, 0),
            (r = this.slides[this.index]) != null && r.button && this._tl.fromTo(this.slides[this.index].button, {
                opacity: 1
            }, {
                opacity: 0,
                ease: this._outOpacityEase,
                duration: this._outLeftDuration
            }, "<"),
            (a = this.slides[this.index]) != null && a.button && this._tl.fromTo(this.slides[this.index].button, {
                left: 0
            }, {
                left: "20%",
                ease: this._outLeftEase,
                duration: this._outLeftDuration
            }, "<"),
            this._tl.fromTo(this.slides[e].element, {
                opacity: 0
            }, {
                opacity: 1,
                ease: this._inOpacityEase,
                duration: this._inOpacityDuration
            }),
            this._tl.fromTo(this.slides[e].element, {
                left: "-20%"
            }, {
                left: 0,
                ease: this._inLeftEase,
                duration: this._inLeftDuration
            }, "<"),
            (l = this.slides[e]) != null && l.button && this._tl.fromTo(this.slides[e].button, {
                opacity: 0
            }, {
                opacity: 1,
                ease: this._inOpacityEase,
                duration: this._inOpacityDuration
            }, "<"),
            (h = this.slides[e]) != null && h.button && this._tl.fromTo(this.slides[e].button, {
                left: "-20%"
            }, {
                left: 0,
                opacity: 1,
                ease: this._inLeftEase,
                duration: this._inLeftDuration
            }, "<"),
            this._tl.set(this, {
                animated: !1
            }),
            this.updateCounter(this.index, e, "previous"),
            this.index - 1 < 0 ? this.index = this.slides.length - 1 : this.index--,
            this.updateProgressBar(),
            this.updateButtons()
        }
        );
        o(this, "nextNoTranslate", () => {
            var e;
            (e = this._hoverTl) == null || e.kill(),
            this._tl = n.timeline();
            let t = this.index + 1;
            t >= this.slides.length && (t = 0),
            this.slides.forEach(s => {
                s !== this.slides[this.index] && this.slides[t] && this._tl.set(s.element, {
                    zIndex: -2
                }, 0)
            }
            ),
            this._tl.set(this.slides[this.index].element, {
                zIndex: -1
            }, 0),
            this._tl.set(this.slides[t].element, {
                zIndex: 0
            }, 0),
            this._tl.fromTo(this.slides[this.index].element, {
                left: 0
            }, {
                left: `${this.imgOutLeft}`,
                scale: 1,
                ease: this._outLeftImgEase,
                duration: this._outLeftImgDuration
            }, "<"),
            this.slides[this.index].text && this._tl.fromTo(this.slides[this.index].text, {
                opacity: 1
            }, {
                opacity: 0,
                ease: this._outLeftEase,
                duration: this._outLeftDuration
            }, "<"),
            this._tl.fromTo(this.slides[t].element, {
                left: "-100%",
                backgroundSize: "200% 200%"
            }, {
                left: 0,
                backgroundSize: "100% 100%",
                ease: this._inLeftImgEase,
                duration: this._inLeftImgDuration
            }, "<"),
            this.slides[t].insideImg && this._tl.fromTo(this.slides[t].insideImg, {
                scale: 1.2
            }, {
                scale: 1,
                ease: this._inLeftImgEase,
                duration: this._inLeftImgDuration
            }, "<"),
            this.slides[t].text && this._tl.fromTo(this.slides[t].text, {
                opacity: 0
            }, {
                opacity: 1,
                ease: this._inScaleImgEase,
                duration: this._inScaleImgDuration
            }, ">"),
            this._tl.set(this, {
                animated: !1
            }),
            this.index + 1 >= this.slides.length ? this.index = 0 : this.index++
        }
        );
        o(this, "previousNoTranslate", () => {
            var e;
            (e = this._hoverTl) == null || e.kill(),
            this._tl = n.timeline();
            let t = this.index - 1;
            t < 0 && (t = this.slides.length - 1),
            this.slides.forEach(s => {
                s !== this.slides[this.index] && this.slides[t] && this._tl.set(s.element, {
                    zIndex: -2
                }, 0)
            }
            ),
            this._tl.set(this.slides[this.index].element, {
                zIndex: -1
            }, 0),
            this._tl.set(this.slides[t].element, {
                zIndex: 0
            }, 0),
            this._tl.fromTo(this.slides[this.index].element, {
                left: 0
            }, {
                left: `-${this.imgOutLeft}`,
                scale: 1,
                ease: this._outLeftImgEase,
                duration: this._outLeftImgDuration
            }, "<"),
            this.slides[this.index].text && this._tl.fromTo(this.slides[this.index].text, {
                opacity: 1
            }, {
                opacity: 0,
                ease: this._outLeftEase,
                duration: this._outLeftDuration
            }, "<"),
            this._tl.fromTo(this.slides[t].element, {
                left: "100%"
            }, {
                left: 0,
                ease: this._inLeftImgEase,
                duration: this._inLeftImgDuration
            }, "<"),
            this.slides[t].insideImg && this._tl.fromTo(this.slides[t].insideImg, {
                scale: 1.2
            }, {
                scale: 1,
                ease: this._inLeftImgEase,
                duration: this._inLeftImgDuration
            }, "<"),
            this.slides[t].text && this._tl.fromTo(this.slides[t].text, {
                opacity: 0
            }, {
                opacity: 1,
                ease: this._inScaleImgEase,
                duration: this._inScaleImgDuration
            }, ">"),
            this._tl.set(this, {
                animated: !1
            }),
            this.index - 1 < 0 ? this.index = this.slides.length - 1 : this.index--
        }
        );
        o(this, "updateCounter", (t, e, s) => {
            if (this.counter == !1)
                return;
            let r, a;
            s == "next" ? (r = 30,
            a = -30) : (r = -30,
            a = 30);
            const l = n.timeline();
            l.fromTo(this.counters[t], {
                opacity: 1,
                yPercent: 0
            }, {
                opacity: 0,
                yPercent: r,
                ease: "power2.in",
                duration: .6
            }),
            l.fromTo(this.counters[e], {
                opacity: 0,
                yPercent: a
            }, {
                opacity: 1,
                yPercent: 0,
                ease: "power2.out",
                duration: .6
            })
        }
        );
        o(this, "onDrag", ({active: t, velocity: [e,s], direction: [r]}) => {
            t || this.animated || (this.translate == !0 ? (e > s && e > .1 && (r < 0 ? this.current++ : this.current--),
            this.resetAutoAnimation()) : (e > s && e > .1 && (r > 0 ? this.current++ : this.current--),
            this.resetAutoAnimation()))
        }
        );
        o(this, "onWheel", ({velocity: [t,e], direction: [s]}) => {
            this.locked || t > e && t > 3 && (s < 0 ? this.current-- : this.current++)
        }
        );
        o(this, "mouseOver", () => {
            var t;
            this.translate || ((t = this._hoverTl) == null || t.kill(),
            this._hoverTl = n.timeline())
        }
        );
        o(this, "mouseLeave", () => {
            var t;
            this.translate || ((t = this._hoverTl) == null || t.kill(),
            this._hoverTl = n.timeline())
        }
        );
        o(this, "goToSlide", t => {
            var a, l;
            if (this.animated)
                return;
            let e = null;
            for (let h = 0; h < this.slides.length; h++)
                this.slides[h].goToButton == t.currentTarget && (e = h);
            let s = ""
              , r = "-";
            if (this.index > e)
                s = "",
                r = "-",
                this.updateCounter(this.index, e, "next");
            else if (this.index < e)
                s = "-",
                r = "",
                this.updateCounter(this.index, e, "previous");
            else
                return;
            this._tl = n.timeline(),
            this._tl.set(this, {
                animated: !0
            }),
            this._tl.fromTo(this.slides[this.index].element, {
                left: 0
            }, {
                left: `${s}35%`,
                opacity: 0,
                ease: this._outLeftEase,
                duration: this._outLeftDuration
            }),
            (a = this.slides[this.index]) != null && a.button && this._tl.fromTo(this.slides[this.index].button, {
                left: 0
            }, {
                left: `${s}35%`,
                opacity: 0,
                ease: this._outLeftEase,
                duration: this._outLeftDuration
            }, "<"),
            this._tl.fromTo(this.slides[e].element, {
                left: `${r}35%`
            }, {
                left: 0,
                opacity: 1,
                ease: this._inLeftEase,
                duration: this._inLeftDuration
            }),
            (l = this.slides[e]) != null && l.button && this._tl.fromTo(this.slides[e].button, {
                left: `${r}35%`
            }, {
                left: 0,
                opacity: 1,
                ease: this._inLeftEase,
                duration: this._inLeftDuration
            }, "<"),
            this._tl.set(this, {
                animated: !1
            }),
            this.index = e,
            this.updateProgressBar(),
            this.updateButtons()
        }
        );
        o(this, "updateButtons", () => {
            this.slides.forEach(t => {
                var e, s;
                t.index == this.index ? (e = t.goToButton) == null || e.classList.add("active") : (s = t.goToButton) == null || s.classList.remove("active")
            }
            )
        }
        );
        o(this, "updateArrows", () => {}
        );
        o(this, "resize", () => {}
        );
        this.forwardButton = this.element.querySelector(".right-w"),
        this.backwardButton = this.element.querySelector(".left-w"),
        this.slides = Array.from(this.element.querySelectorAll("[data-slide]")).map( (s, r) => ({
            element: s,
            index: r,
            id: s.dataset.slide,
            button: this.element.querySelector(`[data-button-id="${s.dataset.slide}"]`),
            text: this.element.querySelector(`[data-slide-text="${r}"]`),
            insideImg: s.querySelector(".slide-picture-inside"),
            goToButton: this.element.querySelector(`[data-go-to="${s.dataset.slide}"]`)
        })),
        this.counters = this.element.querySelectorAll(".counter-value"),
        this.counterTotal = this.element.querySelector(".right-counter p .total"),
        this.index = 0,
        this.animated = !1,
        this.counter = !1,
        this.picturesWrapper = this.element.querySelector(".pictures-w"),
        this.progressBar = this.element.querySelector(".progress"),
        this.translate = !0,
        this.autoSwitch = !1,
        this.autoSwitchImage = !1,
        this.timeOut = null,
        this.firstEnter = !0,
        this._outOpacityDuration = .6,
        this._outOpacityEase = "power1.in",
        this._outLeftDuration = .6,
        this._outLeftEase = "power1.in",
        this._inLeftDuration = 2,
        this._inLeftEase = "expo.out",
        this._inOpacityDuration = 1.3,
        this._inOpacityEase = "none",
        this._inLeftImgEase = "power4.out",
        this._inLeftImgDuration = 1.9,
        this._inScaleImgEase = "power4.inOut",
        this._inScaleImgDuration = 1.2,
        this._outLeftImgEase = "power4.out",
        this._outLeftImgDuration = 1.9,
        this.imgOutLeft = "50%"
    }
    get current() {
        return this.index
    }
    set current(t) {
        t > this.slides.length - 1 ? this.next() : t < 0 ? this.previous() : t < this.index ? this.previous() : this.next()
    }
    attach() {
        this.forwardButton.addEventListener("click", this.next),
        this.backwardButton.addEventListener("click", this.previous),
        this.gesture = new G(this.element,{
            onDrag: this.onDrag,
            onWheel: this.onWheel
        },{
            drag: {
                filterTaps: !0
            },
            enabled: !0
        }),
        this.element.addEventListener("mouseover", this.mouseOver),
        this.element.addEventListener("mouseleave", this.mouseLeave),
        this.element.addEventListener("click", this.resetAutoAnimation),
        this.slides.forEach(t => {
            var e;
            (e = t.goToButton) == null || e.addEventListener("click", this.goToSlide)
        }
        )
    }
    detach() {
        this.forwardButton.removeEventListener("click", this.next),
        this.backwardButton.removeEventListener("click", this.previous),
        this.gesture.destroy(),
        this.element.removeEventListener("mouseover", this.mouseOver),
        this.element.removeEventListener("mouseleave", this.mouseLeave),
        this.element.removeEventListener("click", this.resetAutoAnimation),
        this.slides.forEach(t => {
            var e;
            (e = t.goToButton) == null || e.removeEventListener("click", this.goToSlide)
        }
        )
    }
}
class Mt extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "scrollToQuote", t => {
            const e = t.currentTarget.dataset.author
              , s = this.element.querySelector(`[data-quote='${e}']`);
            n.to(window, {
                duration: 1,
                ease: "power2.inOut",
                scrollTo: s
            })
        }
        );
        o(this, "resize", () => {}
        );
        this.element.tl = null,
        this.wrapper = this.element.querySelector(".testimonials-w"),
        this.quotesW = this.element.querySelector(".quotes"),
        this.authors = this.element.querySelectorAll(".author-w"),
        this.authorsW = this.element.querySelector(".authors-scd-w"),
        this.quotes = Array.from(this.element.querySelectorAll(".quote")).map( (s, r) => ({
            element: s,
            index: r,
            id: s.dataset.slide,
            author: this.element.querySelector(`[data-author="${r}"]`),
            split: new v(s,{
                type: "lines",
                linesClass: "line"
            }),
            authorDistTop: 0
        })),
        this.authorsMb = this.element.querySelector(".authors"),
        this.tl = null
    }
    init() {
        let t = n.matchMedia();
        t.add("(max-width: 1024px)", () => {
            this.mbTl = n.timeline({
                scrollTrigger: {
                    trigger: this.wrapper,
                    toggleActions: "play complete none reset",
                    scrub: 0,
                    start: "top top",
                    end: "bottom bottom",
                    toggleClass: {
                        targets: this.wrapper.querySelector(".authors"),
                        className: "active"
                    }
                }
            })
        }
        ),
        t.add("(min-width: 1024px)", () => {
            this.tl = n.timeline({
                scrollTrigger: {
                    trigger: this.wrapper.querySelector(".authors"),
                    toggleActions: "play complete none reset",
                    scrub: 0,
                    start: "top top",
                    end: "bottom bottom",
                    pin: !0
                }
            })
        }
        ),
        this.quotes.forEach( (e, s) => {
            e.authorDistTop = -e.author.getBoundingClientRect().top + this.quotesW.getBoundingClientRect().top + 100,
            window.innerWidth < 1024 && (e.authorDistTop = -e.author.getBoundingClientRect().top + window.innerHeight - 170),
            e.tl = n.timeline({
                scrollTrigger: {
                    trigger: e.element,
                    toggleActions: "play complete none reset",
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleClass: {
                        targets: [e.element, e.author],
                        className: "active"
                    },
                    onEnter: () => {
                        n.to(this.authorsW, {
                            y: e.authorDistTop,
                            duration: 2,
                            ease: "power3.out"
                        }),
                        s < this.quotes.length - 1 && this.quotes[s + 1].author.classList.add("semi-active"),
                        s < this.quotes.length - 2 && this.quotes[s + 2].author.classList.add("semi-active-m")
                    }
                    ,
                    onLeave: () => {
                        s < this.quotes.length - 1 && this.quotes[s + 1].author.classList.remove("semi-active"),
                        s < this.quotes.length - 2 && this.quotes[s + 2].author.classList.remove("semi-active-m")
                    }
                    ,
                    onEnterBack: () => {
                        n.to(this.authorsW, {
                            y: e.authorDistTop,
                            duration: 2,
                            ease: "power3.out"
                        }),
                        s < this.quotes.length - 1 && this.quotes[s + 1].author.classList.add("semi-active"),
                        s < this.quotes.length - 2 && this.quotes[s + 2].author.classList.add("semi-active-m")
                    }
                    ,
                    onLeaveBack: () => {
                        s < this.quotes.length - 1 && this.quotes[s + 1].author.classList.remove("semi-active"),
                        s < this.quotes.length - 2 && this.quotes[s + 2].author.classList.remove("semi-active-m")
                    }
                }
            }),
            e.split.lines.forEach(r => {
                r.tl = n.timeline({
                    scrollTrigger: {
                        trigger: r,
                        toggleActions: "play none none reset",
                        start: "top 90%",
                        end: "bottom 10%",
                        scrub: 1
                    }
                }),
                n.set(r, {
                    opacity: .15
                }),
                r.tl.to(r, {
                    opacity: 1
                }),
                r.tl.to(r, {
                    opacity: .15
                })
            }
            )
        }
        )
    }
    attach() {
        this.authors.forEach(t => {
            t.addEventListener("click", this.scrollToQuote)
        }
        ),
        this.authorsMb.classList.remove("active")
    }
    detach() {
        this.authors.forEach(t => {
            t.removeEventListener("click", this.scrollToQuote)
        }
        )
    }
}
class Nt extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "submitted", () => {
            this.tl && this.tl.kill(),
            this.tl = n.timeline(),
            this.tl.to(window, {
                duration: 1,
                ease: "power2.inOut",
                scrollTo: {
                    y: "form",
                    offsetY: 100
                }
            }).to(this.formAnim, {
                opacity: 0,
                duration: 1,
                pointerEvents: "none",
                ease: "none"
            }, "<=+0.2").to(this.confirmation.element, {
                opacity: 1,
                ease: "none",
                duration: 1.2,
                pointerEvents: "all"
            })
        }
        );
        o(this, "resetForm", () => {
            this.sendButton.style.pointerEvents = "all",
            this.isSubmitted = !1,
            this.tl && this.tl.kill(),
            this.tl = n.timeline(),
            this.tl.to(window, {
                duration: 1,
                ease: "power2.inOut",
                scrollTo: {
                    y: "form",
                    offsetY: 100
                }
            }).to(this.confirmation.element, {
                opacity: 0,
                ease: "none",
                duration: 1,
                pointerEvents: "none"
            }).to(this.formAnim, {
                opacity: 1,
                duration: 1,
                pointerEvents: "all",
                ease: "none"
            }),
            this.element.reset()
        }
        );
        o(this, "onSubmit", async t => {
            if (this.isSubmitted)
                return;
            t.preventDefault(),
            this.sendButton.style.pointerEvents = "none",
            this.isSubmitted = !0;
            const e = Object.fromEntries(this.inputs.map(a => [a.getAttribute("name"), a.value]))
              , s = `Hello, <br/><br/>
		You received a request for contact from Alireza website<br />
		The subject is :  <b>${e.subject}</b><br/>
		from : <b>${e.firstname} ${e.lastname}</b><br/>
		Mail : <b> ${e.email} </b><br/>
		Phone : <b>${e.phone}</b><br/>
		Profile : <b>${e.profile}</b><br/>
		Company : <b>${e.company}</b><br/>
		Message : <b>${e.message}</b><br/><br/>`;
            await this.call(ADMIN_AJAX_URL + "?action=send_mail", "text", "ata@60fps.fr", s, "New mail from Alireza website") == "sent" && this.submitted()
        }
        );
        this.action = t.dataset.action,
        this.sendButton = this.element.querySelector(".send-button"),
        this.inputs = Array.from(t.querySelectorAll("input, textarea, select")),
        this.sendAnotherButton = document.querySelector(".send-another-button"),
        this.tl = null,
        this.formAnim = this.element.querySelector(".submit-anim"),
        this.confirmation = {
            element: this.element.querySelector(".confirmation-w"),
            animatedElements: []
        }
    }
    attach() {
        this.element.addEventListener("submit", this.onSubmit),
        this.sendAnotherButton && this.sendAnotherButton.addEventListener("click", this.resetForm)
    }
    detach() {
        this.element.removeEventListener("submit", this.onSubmit),
        this.sendAnotherButton && this.sendAnotherButton.addEventListener("click", this.resetForm)
    }
    async call(t, e="json", s, r, a) {
        const l = {
            method: "POST",
            body: JSON.stringify({
                to: s,
                message: r,
                subject: a
            })
        }
          , h = await fetch(t, l);
        if (e == "json") {
            const d = await h.json();
            return d.success || alert(d.errors),
            d
        } else
            return await h.text()
    }
}
let M = 0
  , N = 0
  , b = 0
  , x = 0;
class Ot extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "startLoop", () => {
            this.loopTimeout = setTimeout( () => {
                this.autoLoop && (this.current++,
                this.startLoop())
            }
            , 5e3)
        }
        );
        o(this, "resize", () => {
            if (!this.active) {
                this.needResizeOnEnter = !0;
                return
            }
            this.circleBbox = this.$circle.getBoundingClientRect(),
            this.generateCircle(),
            this.current = this._current,
            this.$slides.forEach(t => {
                n.set(t.text, {
                    opacity: 0,
                    y: this.viewport.medias.desktop ? 0 : 100
                })
            }
            ),
            this.viewport.medias.desktop ? this.lastMediaIsMobile && this.active && this.backgroundComponent.showBackgroundImage() : this.lastMediaIsMobile || this.backgroundComponent.hideBackgroundImage(),
            this.lastMediaIsMobile = !this.viewport.medias.desktop,
            setTimeout( () => {
                this.circleBbox = this.$circle.getBoundingClientRect()
            }
            , 100)
        }
        );
        o(this, "closeSlide", t => {
            var e;
            (e = t.tl) == null || e.kill(),
            t.tl = n.timeline(),
            t.el.classList.remove("active"),
            this.viewport.medias.desktop && t.tl.to(t.text, {
                opacity: 0
            }, 0)
        }
        );
        o(this, "openSlide", t => {
            var e;
            (e = t.tl) == null || e.kill(),
            t.tl = n.timeline(),
            t.el.classList.add("active"),
            this.viewport.medias.desktop && t.tl.to(t.text, {
                opacity: 1,
                duration: 1
            }, .5)
        }
        );
        o(this, "previous", () => {
            this.autoLoop = !1,
            this.current--
        }
        );
        o(this, "next", () => {
            this.autoLoop = !1,
            this.current++
        }
        );
        o(this, "circleHover", t => {
            b = (t.clientX - this.circleBbox.left) / this.circleBbox.width * 2 - 1,
            x = (t.clientY - this.circleBbox.top) / this.circleBbox.height * 2 - 1,
            M = 1 - (Math.atan2(b, x) + Math.PI) / (Math.PI * 2),
            N = Math.sqrt(b * b + x * x),
            N > .6 ? this.setHovered(Math.round(M * this.$slides.length - 1)) : this.setHovered(null)
        }
        );
        o(this, "circleClick", t => {
            const e = this.$circle.getBoundingClientRect();
            b = (t.clientX - e.left) / e.width * 2 - 1,
            x = (t.clientY - e.top) / e.height * 2 - 1,
            M = 1 - (Math.atan2(b, x) + Math.PI) / (Math.PI * 2),
            N = Math.sqrt(b * b + x * x),
            this.autoLoop = !1,
            N > .6 ? this.current = Math.round(M * this.$slides.length - 1) : this.openCurrentSlidePopin()
        }
        );
        o(this, "openCurrentSlidePopin", (t, e=!1) => {
            var s, r;
            this.bootstrap.viewport.medias.desktop || this.slidePopinOpened || (this.autoLoop = !1,
            this.slidePopinOpened = !0,
            (s = this.$slide.stl) == null || s.kill(),
            this.$slide.stl = n.timeline(),
            this.$slide.stl.to([this.$slide.el, this.$slide.background, this.$close], {
                display: "block"
            }, 0),
            this.$slide.stl.to(this.$slide.background, {
                opacity: 1,
                duration: .6
            }, 0),
            this.$slide.stl.to(this.$slide.img, {
                opacity: 1,
                duration: .6
            }, 0),
            e ? this.$slide.stl.set(this.$slide.img, {
                y: 0
            }, 0) : this.$slide.stl.to(this.$slide.img, {
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, 0),
            this.$slide.stl.to(this.$slide.text, {
                opacity: 1,
                duration: .6
            }, .1),
            e ? this.$slide.stl.set(this.$slide.text, {
                y: 0
            }, .1) : this.$slide.stl.to(this.$slide.text, {
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, .1),
            e || ((r = this.ctl) == null || r.kill(),
            this.ctl = n.timeline(),
            this.ctl.set(this.$close, {
                display: "block"
            }, 0),
            this.ctl.to(this.$close, {
                opacity: 1,
                duration: .6
            }, .2),
            this.ctl.to(this.$close, {
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, .2)))
        }
        );
        o(this, "closeCurrentSlidePopin", (t, e=!1) => {
            var s, r;
            !this.slidePopinOpened || (this.slidePopinOpened = !1,
            (s = this.$slide.stl) == null || s.kill(),
            this.$slide.stl = n.timeline(),
            this.$slide.stl.to(this.$slide.background, {
                opacity: 0,
                duration: .5
            }, e ? .5 : 0),
            this.$slide.stl.to(this.$slide.img, {
                opacity: 0,
                duration: .4
            }, 0),
            e ? this.$slide.stl.set(this.$slide.img, {
                y: 0
            }, .4) : this.$slide.stl.to(this.$slide.img, {
                y: 100,
                duration: .4,
                ease: "power2.in"
            }, 0),
            this.$slide.stl.to(this.$slide.text, {
                opacity: 0,
                duration: .35
            }, 0),
            e ? this.$slide.stl.set(this.$slide.text, {
                y: 100
            }, .35) : this.$slide.stl.to(this.$slide.text, {
                y: 100,
                duration: .35,
                ease: "power2.in"
            }, 0),
            this.$slide.stl.to([this.$slide.el, this.$slide.background], {
                display: ""
            }),
            console.log("willBeReopen", e),
            e || ((r = this.ctl) == null || r.kill(),
            this.ctl = n.timeline(),
            this.ctl.to(this.$close, {
                opacity: 0,
                duration: .3
            }, 0),
            this.ctl.to(this.$close, {
                y: 100,
                duration: .3,
                ease: "power2.in"
            }, 0),
            this.ctl.set(this.$close, {
                display: "none"
            })))
        }
        );
        o(this, "setCurrent", t => {
            this.current = t
        }
        );
        o(this, "hideCursor", () => {
            n.to(this.cursor, {
                opacity: 0,
                ease: "power2.out",
                duration: .8
            })
        }
        );
        o(this, "showCursor", () => {
            n.to(this.cursor, {
                opacity: 1,
                ease: "power2.out",
                duration: .8
            })
        }
        );
        this.cursor = document.querySelector("#cursor-w"),
        this.autoLoop = !0,
        this.$controls = t.querySelector(".history-slideshow-controls"),
        this.$circle = this.$controls.querySelector(".circle"),
        this.$description = this.$circle.querySelector(".description"),
        this.$arrows = document.querySelector(".history-arrows"),
        this.$years = [...Array.from(t.querySelectorAll(".year")), this.$arrows.querySelector(".year")],
        this.$previous = this.$arrows.querySelector(".previous"),
        this.$next = this.$arrows.querySelector(".next"),
        this.$readMore = this.$controls.querySelector(".read-more"),
        this.$close = this.$controls.querySelector(".close"),
        this.$slidesWrapper = t.querySelector(".slides"),
        n.set([this.$controls, this.$circle, ...this.$years, this.$slidesWrapper, this.$previous, this.$next], {
            opacity: 0
        }),
        n.set(this.$arrows, {
            display: "none"
        }),
        n.set(this.$close, {
            opacity: 0,
            y: 100
        }),
        this.$slides = Array.from(t.querySelectorAll(".slides .slide")).map( (s, r) => {
            let a = 0
              , l = s.querySelector(".description").innerText.trim().split(" ")
              , h = [];
            l.forEach(L => {
                (a += L.length) < 60 && h.push(L)
            }
            ),
            h = "<span>" + h.join("</span> <span>") + "</span>";
            const d = s.querySelector(".opened-slide-background");
            n.set(d, {
                opacity: 0
            });
            const u = s.querySelector(".illustration-w");
            n.set(u, {
                opacity: 0,
                y: 100
            });
            const p = s.querySelector(".text-w");
            n.set(p, {
                opacity: 0,
                y: 100
            });
            const g = u.querySelector("img")
              , y = g.getAttribute("src");
            return {
                el: s,
                background: d,
                image: g,
                img: u,
                src: y,
                text: p,
                year: s.dataset.year,
                id: r,
                active: s.classList.contains("active"),
                tl: null,
                stl: null,
                description: h
            }
        }
        ),
        this.lastMediaIsMobile = !0,
        this.active = !1,
        this._last = -1,
        this._current = -1,
        this.ctl = null,
        this.ytl = null,
        this.slidePopinOpened = !1,
        this._year = 1845,
        this.backgroundElement = document.querySelector("[data-component=GlobalWebGLBackground]")
    }
    init() {}
    attach() {
        this.$previous.addEventListener("click", this.previous),
        this.$next.addEventListener("click", this.next),
        this.$circle.addEventListener("click", this.circleClick),
        this.$circle.addEventListener("mousemove", this.circleHover),
        this.$circle.addEventListener("mouseleave", this.showCursor),
        this.$circle.addEventListener("mouseenter", this.hideCursor),
        this.$readMore.addEventListener("click", this.openCurrentSlidePopin),
        this.$close.addEventListener("click", this.closeCurrentSlidePopin),
        this.viewport.on("resize", this.resize),
        this.backgroundComponent = this.components.get(this.backgroundElement),
        this.backgroundComponent.setBackgroundImages(this.$slides.map(t => t.src)),
        this.current = 0
    }
    detach() {
        this.$previous.removeEventListener("click", this.previous),
        this.$next.removeEventListener("click", this.next),
        this.$circle.removeEventListener("click", this.circleClick),
        this.$circle.removeEventListener("mousemove", this.circleHover),
        this.$circle.removeEventListener("mouseleave", this.showCursor),
        this.$circle.removeEventListener("mouseenter", this.hideCursor),
        this.$readMore.removeEventListener("click", this.openCurrentSlidePopin),
        this.$close.removeEventListener("click", this.closeCurrentSlidePopin),
        this.autoLoop = !1,
        this.viewport.off("resize", this.resize),
        this.backgroundComponent.hideBackgroundImage()
    }
    get current() {
        return this._current
    }
    set current(t) {
        var s;
        const e = this.slidePopinOpened;
        this.closeCurrentSlidePopin({}, !0),
        this._last = this._current,
        this._current = this.loop(t),
        this._last >= 0 && this._last != this._current && this.closeSlide(this.$slides[this._last]),
        this.openSlide(this.$slide),
        e && this.openCurrentSlidePopin({}, !0),
        (s = this.ytl) == null || s.kill(),
        this.ytl = n.timeline(),
        this.viewport.medias.desktop ? this.backgroundComponent.setBackgroundImage(this.$slide.src, Math.sign(t - this._last)) : (this.ytl.to(this.$description, {
            opacity: 0,
            duration: .3
        }),
        this.ytl.add( () => {
            this.$description.innerHTML = this.$slide.description;
            const r = this.$description.querySelectorAll("span");
            r.forEach( (a, l) => {
                a.style.opacity = 1 - l / r.length
            }
            )
        }
        ),
        this.ytl.to(this.$description, {
            opacity: 1,
            duration: .3
        })),
        this.backgroundComponent.setCameraOriginRotation(this._current),
        this.ytl.to(this, {
            year: this.$slide.year,
            ease: "power2.inOut",
            duration: .8
        }, 0),
        this.$slides.forEach( (r, a) => {
            var l, h, d;
            (l = r.svg) == null || l.g.classList.toggle("active", a == this._current),
            (h = r.svg) == null || h.g.classList.toggle("passed", a <= this._current),
            (d = r.svg) == null || d.g.classList.remove("hovered")
        }
        )
    }
    get $slide() {
        return this.$slides[this._current]
    }
    get year() {
        return this._year
    }
    set year(t) {
        this._year = Math.round(t),
        this.$years.forEach(e => {
            e.innerHTML = this.year
        }
        )
    }
    enter() {
        var t;
        this.active = !0,
        this.needResizeOnEnter && this.resize(),
        this.viewport.medias.desktop && this.backgroundComponent.showBackgroundImage(),
        (t = this.gtl) == null || t.kill(),
        this.gtl = n.timeline(),
        this.autoLoop = !0,
        this.startLoop(),
        this.current = 0,
        this.gtl.to(this.$arrows, {
            display: "",
            opacity: 1
        }, 0),
        this.gtl.to([this.$controls, this.$circle], {
            opacity: 1,
            duration: 1.2
        }, .3),
        this.$slides.forEach( (e, s) => {
            this.gtl.to(e.svg.path, {
                opacity: 1,
                duration: .3
            }, .3 + s * .15),
            this.gtl.to(e.svg.path, {
                strokeDashoffset: 0,
                duration: .3,
                ease: "expo.inOut"
            }, .3 + s * .15),
            this.gtl.to(e.svg.path, {
                opacity: 0,
                duration: .3
            }, 1 + s * .15),
            this.gtl.set(e.svg.path, {
                strokeDashoffset: "",
                opacity: ""
            }, 2 + this.$slides.length * .15 + s * .15)
        }
        ),
        this.gtl.set(this.$path, {
            opacity: 1
        }, 1),
        this.gtl.to([this.$slidesWrapper, ...this.$years, this.$previous, this.$next], {
            opacity: 1,
            duration: 1.2,
            stagger: .3
        }, 1.3)
    }
    leave() {
        var t;
        this.viewport.medias.desktop && this.backgroundComponent.hideBackgroundImage(),
        this.active = !1,
        this.autoLoop = !1,
        (t = this.gtl) == null || t.kill(),
        this.gtl = n.timeline(),
        this.gtl.to([this.$controls, this.$circle, ...this.$years, this.$slidesWrapper], {
            opacity: 0,
            duration: .5,
            stagger: .03
        }),
        this.gtl.to(this.$arrows, {
            opacity: 0
        }, 0),
        this.gtl.to(this.$arrows, {
            display: "none"
        })
    }
    generateCircle() {
        var L;
        this.$svg && ((L = this.$circle) == null || L.removeChild(this.$svg));
        const t = this.circleBbox.width
          , e = this.circleBbox.height;
        if (t == 0 || e == 0) {
            setTimeout(this.resize, 100);
            return
        }
        this.$svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        this.$svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        let s = 0
          , r = 0
          , a = 0
          , l = t * .5 - 30;
        this.$svg.setAttribute("viewBox", `${-t * .5} ${-t * .5} ${t} ${t}`),
        this.$svg.setAttribute("width", t),
        this.$svg.setAttribute("height", e),
        this.$points = [],
        this.$path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        let h = ""
          , d = ""
          , u = ""
          , p = ""
          , g = ""
          , y = "";
        for (let T = 0; T < this.$slides.length; T++) {
            s = (T / this.$slides.length - .25) * Math.PI * 2 + .06,
            r = Math.cos(s) * l,
            a = Math.sin(s) * l,
            d = `M ${r} ${a}`,
            s = ((T + .5) / this.$slides.length - .25) * Math.PI * 2,
            r = Math.cos(s) * l * 1.01,
            a = Math.sin(s) * l * 1.01,
            d += `Q ${r} ${a}`,
            s = ((T + 1) / this.$slides.length - .25) * Math.PI * 2 - .06,
            r = Math.cos(s) * l,
            a = Math.sin(s) * l,
            d += ` ${r} ${a}`,
            s = ((T + 1) / this.$slides.length - .25) * Math.PI * 2,
            r = Math.cos(s) * l,
            a = Math.sin(s) * l,
            y = document.createElementNS("http://www.w3.org/2000/svg", "g"),
            y.classList.add("g-point"),
            u = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
            u.setAttributeNS(null, "cx", r),
            u.setAttributeNS(null, "cy", a),
            u.setAttributeNS(null, "r", 1),
            u.setAttributeNS(null, "fill", "rgba(255,255,255, 1)"),
            u.setAttributeNS(null, "stroke", "none"),
            u.setAttributeNS(null, "class", "point-center"),
            u.setAttributeNS(null, "transform-origin", `${r} ${a}`),
            p = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
            p.setAttributeNS(null, "cx", r),
            p.setAttributeNS(null, "cy", a),
            p.setAttributeNS(null, "r", 30),
            p.setAttributeNS(null, "fill", "none"),
            p.setAttributeNS(null, "stroke", "white"),
            p.setAttributeNS(null, "opacity", "0"),
            p.setAttributeNS(null, "class", "point-border"),
            p.setAttributeNS(null, "transform-origin", `${r} ${a}`),
            h += d,
            g = document.createElementNS("http://www.w3.org/2000/svg", "path"),
            g.setAttributeNS(null, "d", d),
            g.setAttributeNS(null, "stroke", "white"),
            g.setAttributeNS(null, "fill", "none"),
            g.setAttributeNS(null, "stroke-width", "1px"),
            g.setAttributeNS(null, "opacity", "0");
            const F = g.getTotalLength();
            g.setAttributeNS(null, "stroke-dasharray", F),
            g.setAttributeNS(null, "stroke-dashoffset", F),
            g.setAttributeNS(null, "class", "progress-path"),
            y.appendChild(u),
            y.appendChild(p),
            y.appendChild(g),
            this.$svg.appendChild(y),
            this.$slides[T].svg = {
                g: y,
                center: u,
                border: p,
                path: g,
                pathLength: F
            }
        }
        this.$path.setAttributeNS(null, "d", h),
        this.$path.setAttributeNS(null, "stroke", "rgba(255,255,255,.15)"),
        this.$path.setAttributeNS(null, "fill", "none"),
        this.$path.setAttributeNS(null, "stroke-width", "1px"),
        this.active || n.set(this.$path, {
            opacity: 0
        }),
        this.$svg.appendChild(this.$path),
        this.$circle.appendChild(this.$svg)
    }
    setHovered(t) {
        var e, s;
        if (t == null && this._lastHovered != null) {
            this._lastHovered.svg.g.classList.remove("hovered"),
            this._lastHovered = null;
            return
        }
        if (this._lastHovered != this.$slides[t]) {
            if ((e = this._lastHovered) == null || e.svg.g.classList.remove("hovered"),
            t == this.current)
                return;
            (s = this.$slides[t]) == null || s.svg.g.classList.add("hovered"),
            this._lastHovered = this.$slides[t]
        }
    }
    loop(t) {
        return t >= 0 ? t % this.$slides.length : this.$slides.length - 1 + (t + 1) % this.$slides.length
    }
}
class Rt extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "mouseMove", t => {
            this.target.x = t.clientX - this.windowWidth / 2,
            this.target.y = t.clientY - this.windowHeight / 2,
            this.xTo(this.target.x / 25),
            this.yTo(this.target.y / 25)
        }
        );
        o(this, "resize", () => {
            this.windowWidth = window.innerWidth,
            this.windowHeight = window.innerHeight
        }
        );
        this.target = {
            x: 0,
            y: 0
        }
    }
    init() {
        this.xTo = n.quickTo(this.element, "x", {
            duration: 1,
            ease: "power4.out"
        }),
        this.yTo = n.quickTo(this.element, "y", {
            duration: 1,
            ease: "power4.out"
        }),
        this.windowWidth = window.innerWidth,
        this.windowHeight = window.innerHeight
    }
    attach() {
        window.addEventListener("mousemove", this.mouseMove),
        window.addEventListener("resize", this.resize)
    }
    detach() {
        window.removeEventListener("mousemove", this.mouseMove),
        window.removeEventListener("resize", this.resize)
    }
}
class qt extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "computeFooterHeight", () => {
            this.footer.height = this.footer.element.getBoundingClientRect().height
        }
        );
        o(this, "resize", () => {
            if (this.computeFooterHeight(),
            this.viewport.medias.tablet == this.tablet)
                return;
            this.tablet = this.viewport.medias.tablet,
            this.screenSwitch = !0;
            const t = this.sections[this.current];
            if (this.updateSections(),
            this.footerOpened)
                this._current = this.sections.length - 1;
            else {
                let e = !1;
                if (this.sections.forEach(s => {
                    s.localId == t.localId && s.name == t.name && (this.current = this.sections.indexOf(s),
                    e = !0)
                }
                ),
                !e) {
                    let s = [];
                    this.sections.forEach(r => {
                        r.name == t.name && s.push(r)
                    }
                    ),
                    this.current = this.sections.indexOf(s[s.length - 1])
                }
            }
            this.screenSwitch = !1
        }
        );
        o(this, "createGesture", () => {
            this.gesture = new G(window,{
                onDrag: this.onDrag,
                onWheel: this.onWheel
            },{
                drag: {
                    filterTaps: !0
                },
                enabled: !0
            })
        }
        );
        o(this, "logoClick", t => {
            t.preventDefault(),
            t.stopPropagation(),
            t.stopImmediatePropagation(),
            this.current !== 0 && (this.current = 0)
        }
        );
        o(this, "onLoad", () => {
            var t, e;
            console.log("loaded"),
            n.set(this.discoverCircle, {
                strokeDashoffset: 300
            }),
            this.discoverBars.forEach(s => {
                s.style.animation = ""
            }
            ),
            this.firstMove = !0,
            (e = (t = this.discoverTl) == null ? void 0 : t.revert) == null || e.call(t),
            setTimeout( () => {
                this.animateDiscover()
            }
            , 3e3),
            setTimeout( () => {
                this.scrollLocked = !1
            }
            , 3e3),
            this.updateSections(),
            this.createGesture(),
            this.url.has("jump") ? this.current = parseInt(this.url.get("jump")) : this.url.has("section") ? this.openSection() : this.current = 0
        }
        );
        o(this, "onBuild", () => {
            var t;
            this.updateSections(),
            this.createGesture(),
            this.scrollLocked = !1,
            (t = this.url) != null && t.has("section") ? this.openSection() : this.current = 0
        }
        );
        o(this, "onDrag", ({active: t, velocity: [e,s], direction: [,r], delta: [,a]}) => {
            if (!this.scrollLocked) {
                if (this.footerOpened) {
                    this.footerOffset += a,
                    !t && this.footerOffset >= 0 && s * r > .9 && this.current--;
                    return
                }
                t || this.locked || s > e && s > .1 && (r < 0 ? this.current++ : this.current--)
            }
        }
        );
        o(this, "onWheel", ({velocity: [t,e], direction: [,s], delta: [,r]}) => {
            if (!this.scrollLocked) {
                if (this.footerOpened) {
                    this.footerOffset += r,
                    this.footerOffset >= 0 && e * s < -3 && this.current--;
                    return
                }
                this.locked || e > t && e > 3 && (s < 0 ? this.current-- : this.current++)
            }
        }
        );
        o(this, "showCursorText", () => {
            n.to(this.cursorText, {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }),
            this.idle = !0
        }
        );
        o(this, "mouseMove", t => {
            if (this.idle && (n.to(this.cursorText, {
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }),
            this.idle = !1),
            this.firstMove) {
                this.firstMove = !1;
                const e = n.timeline({});
                e.from(this.cursor, {
                    scale: 0,
                    ease: "power3.out",
                    duration: 2
                }, 0),
                e.set(this.cursorCircleWrapper, {
                    x: t.clientX,
                    y: t.clientY,
                    display: "block"
                }, 0),
                e.to(this.cursor, {
                    opacity: 1,
                    duration: 1
                }, 0),
                e.fromTo(this.cursorTextSpan, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 2,
                    ease: "power2.out"
                }, 1.5),
                e.add( () => this.idle = !0);
                return
            }
            clearTimeout(this.cursorTimeOut),
            this.cursorTimeOut = setTimeout(this.showCursorText, 1500),
            this.xToCircle(t.clientX),
            this.yToCircle(t.clientY),
            this.xToSquare(t.clientX),
            this.yToSquare(t.clientY),
            this.xToText(t.clientX),
            this.yToText(t.clientY)
        }
        );
        o(this, "mouseDown", t => {
            var e, s;
            t.buttons === 1 && (this.holdTl == null && (this.holdTl = n.timeline({
                paused: !0
            }),
            this.holdTl.to(this.cursorTextSpan, {
                opacity: 0,
                duration: .5,
                ease: "power2.out"
            }, 0),
            this.holdTl.to(this.cursorCircleWrapper, {
                scale: 1.3,
                border: "1px solid rgba(255, 255, 255, 0.6)",
                duration: .8,
                ease: "power3.out"
            }, 0),
            this.holdTl.to(this.cursorSquare, {
                scale: 0,
                rotate: 135,
                duration: .8,
                ease: "power4.out"
            }, 0),
            this.holdTl.to(this.backgroundComponent, {
                longpress: 1,
                duration: 3,
                ease: "power2.inOut"
            }, 0),
            this.holdTl.to(this.element, {
                opacity: 0,
                duration: 1,
                ease: "none"
            }, 0)),
            (s = (e = this.holdTl) == null ? void 0 : e.play) == null || s.call(e))
        }
        );
        o(this, "mouseUp", () => {
            var t, e;
            (e = (t = this.holdTl) == null ? void 0 : t.reverse) == null || e.call(t)
        }
        );
        o(this, "animateDiscover", () => {
            this.discoverTl = n.timeline({}),
            this.discoverTl.to(this.discoverCircle, {
                strokeDashoffset: 0,
                ease: "none",
                duration: 1.2
            }, 0),
            this.discoverTl.to(this.discoverText, {
                opacity: 1,
                ease: "none",
                duration: .5
            }, 0),
            document.querySelector("#root").classList.contains("lang-ar") || this.discoverTl.fromTo(this.discoverSplit.chars, {
                opacity: 0,
                y: 15
            }, {
                opacity: 1,
                y: 0,
                ease: "power3.out",
                duration: 1,
                stagger: .007
            }, 0),
            this.discoverTl.add( () => {
                this.discoverBars.forEach( (t, e) => {
                    e == 0 ? t.style.animation = "barBackground 10s ease infinite" : t.style.animation = "barBackground 10s 5s ease infinite"
                }
                )
            }
            , .5)
        }
        );
        o(this, "hover", () => {
            n.to(this.cursor, {
                opacity: 0,
                ease: "power2.out",
                duration: .8
            })
        }
        );
        o(this, "leave", () => {
            n.to(this.cursor, {
                opacity: 1,
                ease: "power2.out",
                duration: .8
            })
        }
        );
        this.selector = null,
        this.sections = [],
        this._current = -1,
        this.locked = !1,
        this.backgroundElement = document.querySelector("[data-component=GlobalWebGLBackground]"),
        this.scrollDiscover = this.element.querySelector(".scroll-discover-container"),
        this.outerText = this.element.querySelector(".actual-section"),
        this.footer = {
            element: document.querySelector("#footer"),
            height: 1,
            animatedElements: []
        },
        this.footer.wrapper = this.footer.element.querySelector(".footer-w"),
        this._footerOffset = 0,
        this.screenSwitch = !1,
        this.cursor = document.querySelector("#cursor-w"),
        this.cursorCircleWrapper = this.cursor.querySelector(".circle"),
        this.cursorSquare = this.cursor.querySelector(".square"),
        this.cursorText = this.cursor.querySelector(".text"),
        this.cursorTextSpan = this.cursor.querySelector(".text span"),
        this.discoverCircle = this.element.querySelector(".scroll-discover-container .circle-svg"),
        this.discoverBars = this.element.querySelectorAll(".scroll-discover-container .bar"),
        this.discoverText = this.element.querySelector(".scroll-discover-container .scroll-discover-text"),
        this.hoverElements = document.querySelectorAll("[data-hide-cursor]"),
        this.headerLogo = document.querySelector("header .logo-w-header"),
        this.scrollLocked = !0
    }
    init() {
        this.tablet = this.viewport.medias.tablet,
        n.set(this.footer.element, {
            opacity: 0,
            y: 100,
            display: "none"
        }),
        n.set(this.scrollDiscover, {
            opacity: 0
        }),
        this.xToCircle = n.quickTo(this.cursorCircleWrapper, "x", {
            duration: .6,
            ease: "power3.out"
        }),
        this.yToCircle = n.quickTo(this.cursorCircleWrapper, "y", {
            duration: .6,
            ease: "power3.out"
        }),
        this.xToSquare = n.quickTo(this.cursorSquare, "x", {
            duration: .02,
            ease: "none"
        }),
        this.yToSquare = n.quickTo(this.cursorSquare, "y", {
            duration: .02,
            ease: "none"
        }),
        this.xToText = n.quickTo(this.cursorText, "x", {
            duration: .7,
            ease: "power3.out"
        }),
        this.yToText = n.quickTo(this.cursorText, "y", {
            duration: .7,
            ease: "power3.out"
        }),
        this.idle = !0,
        document.querySelector("#root").classList.contains("lang-ar") || (this.discoverSplit = new v(this.discoverText,{
            type: "chars",
            charsClass: "char char-++"
        })),
        n.set(this.discoverText, {
            opacity: 0
        })
    }
    updateSections() {
        this.viewport.medias.tablet ? (this.selector = "[data-section]",
        this.element.querySelectorAll("[data-section-mobile]").forEach(e => {
            n.set(e, {
                opacity: 1,
                display: "block",
                y: 0
            })
        }
        )) : (this.selector = "[data-section-mobile]",
        this.element.querySelectorAll("[data-section]").forEach(e => {
            -n.set(e, {
                opacity: 1,
                display: "block",
                y: 0,
                zIndex: 1
            })
        }
        )),
        this.sections = Array.from(this.element.querySelectorAll(this.selector)).map( (e, s) => ({
            element: e,
            id: s,
            name: this.viewport.medias.tablet ? e.dataset.section : e.dataset.sectionMobile,
            localId: 0,
            localLength: 1,
            animatedElements: [],
            mobileSection: !this.viewport.medias.tablet,
            slideshows: [],
            historySlideshow: null
        })),
        this.sections.forEach(e => {
            var h, d;
            e.localId = 0;
            let s = 0;
            for (; s < this.sections.length && e != this.sections[s]; )
                e.name == this.sections[s].name && e.localId++,
                s++;
            e.localLength = this.sections.filter(u => u.name == e.name).length,
            n.set(e.element, {
                opacity: 0,
                y: 100,
                display: "none"
            });
            const r = [...e.element.querySelectorAll("[data-animation]")];
            this.bootstrap.animator.targets.forEach(u => {
                r.includes(u.elem) && e.animatedElements.push(u)
            }
            );
            const a = [];
            ((h = e.element.dataset) == null ? void 0 : h.component) == "Slideshow" ? a.push(e.element) : a.push(...e.element.querySelectorAll('[data-component="Slideshow"]')),
            (d = this.bootstrap.components.elements) == null || d.forEach(u => {
                a.includes(u.element) && e.slideshows.push(u)
            }
            );
            const l = e.element.querySelector("[data-component=ValuesSlideshow]");
            l && (e.historySlideshow = this.components.get(l))
        }
        );
        const t = [...this.footer.element.querySelectorAll("[data-no-kill]")];
        this.bootstrap.animator.targets.forEach(e => {
            t.includes(e.elem) && this.footer.animatedElements.push(e)
        }
        )
    }
    get current() {
        return this._current
    }
    set current(t) {
        var l, h, d, u;
        if (this.locked || t < 0 || t >= this.sections.length + 1)
            return;
        if (t == this.sections.length) {
            this.openFooter(),
            this.backgroundComponent.setCamera("footer", 1, 0, 0),
            this._current = t;
            return
        }
        this.locked = !0;
        const e = this._current;
        this._current = t,
        (l = this._tl) == null || l.kill(),
        this._tl = n.timeline(),
        this.emit("section-changed", this.sections[this._current].name);
        let s = Math.sign(this._current - e);
        s !== 0 && this.backgroundComponent.setCamera(this.sections[this._current].name, s, this.sections[this._current].localId, this.sections[this._current].localLength - 1);
        let r = !1;
        ((h = this.sections[e]) == null ? void 0 : h.name) == this.sections[this._current].name && (r = !0),
        e >= 0 && (e == this.sections.length ? this._tl.add(this.closeFooter()) : this._tl.add(this.sectionLeave(this.sections[e], s, r))),
        this._tl.add(this.sectionEnter(this.sections[this._current], s)),
        this._tl.set(this, {
            locked: !1
        });
        const a = this.sections[this._current].id;
        a == 0 ? (this.scrollDiscover.classList.remove("hide-mb"),
        this.outerText.classList.add("hide")) : (this.scrollDiscover.classList.add("hide-mb"),
        this.outerText.classList.remove("hide")),
        a == this.sections.length - 1 ? this.scrollDiscover.classList.add("hide-dk") : this.scrollDiscover.classList.remove("hide-dk"),
        (d = this.sections[this._current]) != null && d.historySlideshow && this.sections[this._current].historySlideshow.enter(),
        (u = this.sections[e]) != null && u.historySlideshow && this.sections[e].historySlideshow.leave()
    }
    get footerOffset() {
        return this._footerOffset
    }
    set footerOffset(t) {
        !this.footerOpened || (this._footerOffset = R.clamp(t, -this.footer.height + this.viewport.height, 0),
        this.footer.wrapper.style.transform = `translate3d(0, ${this._footerOffset}px, 0)`)
    }
    setSectionFromName(t) {
        let e = 0;
        for (; this.sections[e] && this.sections[e].name != t && e < this.sections.length; )
            e++;
        this.current != e && (this.current = e)
    }
    openFooter() {
        var t;
        this.emit("footer-opened"),
        this.locked = !0,
        this.footerOpened = !0,
        (t = this._tl) == null || t.kill(),
        this._tl = n.timeline(),
        this.footer.element.style.display = "",
        this.computeFooterHeight(),
        this._tl.add(this.sectionLeave(this.sections[this._current], 1)),
        this._tl.add(this.sectionEnter(this.footer, 1)),
        this._tl.set(this, {
            locked: !1
        }),
        this.footerOffset = 0
    }
    closeFooter() {
        var t;
        this.emit("footer-closed"),
        this.locked = !0,
        this.footerOpened = !1,
        (t = this._tl) == null || t.kill(),
        this._tl = n.timeline(),
        this._tl.add(this.sectionLeave(this.footer, -1)),
        this._tl.add(this.sectionEnter(this.sections[this._current], -1)),
        this._tl.set(this, {
            locked: !1
        }),
        this._tl.set(this.footer.element, {
            display: "none"
        }),
        this.footerOffset = 0
    }
    openSection() {
        const t = this.url.get("section");
        for (let e = 0; e < this.sections.length; e++)
            if (this.sections[e].name.toLowerCase() == t) {
                this.current = e;
                return
            }
    }
    attach() {
        document.body.style.overflow = "hidden",
        this.backgroundComponent = this.components.get(this.backgroundElement),
        this.url = new URLSearchParams(window.location.search),
        this.bootstrap.loader.first ? this.bootstrap.loader.on("loaded", this.onLoad) : this.bootstrap.animator.on("built", this.onBuild),
        this.viewport.on("resize", this.resize),
        this.footer.element.style.position = "absolute",
        this.footer.element.style.touchAction = "none",
        window.addEventListener("mousemove", this.mouseMove),
        window.addEventListener("mousedown", this.mouseDown),
        window.addEventListener("mouseup", this.mouseUp),
        window.addEventListener("pointerdown", this.mouseDown),
        window.addEventListener("pointerup", this.mouseUp),
        this.cursor.style.display = "block",
        this.hoverElements.forEach(t => {
            t.addEventListener("mouseover", this.hover),
            t.addEventListener("mouseleave", this.leave)
        }
        ),
        n.to(this.scrollDiscover, {
            opacity: 1,
            duration: .7,
            delay: 3,
            ease: "none"
        }),
        this.animateDiscover(),
        this.headerLogo.addEventListener("click", this.logoClick),
        this.footer.element.querySelector(".contact-bar").dataset.animationDelay = "0.9"
    }
    detach() {
        var t;
        document.body.style.overflow = "hidden auto",
        this.gesture.destroy(),
        (t = this._tl) == null || t.kill(),
        this.footer.element.style.position = "",
        this.footer.element.style.display = "",
        this.footer.element.style.transform = "",
        this.footer.element.style.opacity = "",
        this.footer.element.style.touchAction = "",
        this.url = null,
        this.viewport.off("resize", this.resize),
        this.bootstrap.animator.off("loaded", this.onLoad),
        this.bootstrap.animator.off("built", this.onBuild),
        this.gesture && this.gesture.destroy(),
        window.removeEventListener("mousemove", this.mouseMove),
        window.removeEventListener("mousedown", this.mouseDown),
        window.removeEventListener("mouseup", this.mouseUp),
        window.removeEventListener("pointerdown", this.mouseDown),
        window.removeEventListener("pointerup", this.mouseUp),
        this.cursor.style.display = "none",
        this.hoverElements.forEach(e => {
            e.removeEventListener("mouseover", this.hover),
            e.removeEventListener("mouseleave", this.leave)
        }
        ),
        this.headerLogo.removeEventListener("click", this.logoClick),
        this.footer.element.querySelector(".contact-bar").dataset.animationDelay = "0"
    }
    sectionEnter(t, e) {
        var r, a;
        const s = n.timeline();
        return t.mobileSection && (t.element.closest("[data-section]").style.zIndex = "2"),
        t.element.style.display = "block",
        s.set(t.element, {
            y: 100 * e
        }),
        t.animatedElements.forEach(l => {
            var h, d, u, p;
            (d = (h = l.anim) == null ? void 0 : h.compute) == null || d.call(h),
            (p = (u = l.anim) == null ? void 0 : u.reset) == null || p.call(u)
        }
        ),
        (r = t.slideshows) == null || r.forEach(l => {
            var h;
            (h = l.onEnter) == null || h.call(l)
        }
        ),
        s.to(t.element, {
            opacity: 1,
            ease: "none",
            duration: .5
        }, 0),
        s.to(t.element, {
            y: 0,
            ease: "power2.out",
            duration: .5
        }, 0),
        (a = t.animatedElements) == null || a.forEach(l => {
            s.add( () => {
                var h, d;
                (d = (h = l.anim) == null ? void 0 : h.timeline) == null || d.call(h).play()
            }
            )
        }
        ),
        s
    }
    sectionLeave(t, e, s) {
        var a, l;
        if (this.screenSwitch == !0)
            return;
        (a = t.slideshows) == null || a.forEach(h => {
            var d;
            (d = h.onLeave) == null || d.call(h)
        }
        );
        const r = n.timeline();
        return r.to(t.element, {
            opacity: 0,
            ease: "none",
            duration: .5
        }, 0),
        r.to(t.element, {
            y: -50 * e,
            ease: "power2.in",
            duration: .5
        }, 0),
        r.set(t.element, {
            display: "none"
        }),
        t.mobileSection && !s && r.add( () => {
            t.element.closest("[data-section]").style.zIndex = "1"
        }
        ),
        (l = t.animatedElements) == null || l.forEach(h => {
            h.reset && typeof h.reset == "function" && r.add( () => {
                h.reset()
            }
            )
        }
        ),
        r
    }
}
class Ut extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "initTextAnimations", () => {}
        );
        o(this, "scrollToSection", t => {
            const e = parseInt(t.currentTarget.dataset.sectorNav)
              , s = this.sectorsWrapper.tl.scrollTrigger.labelToScroll(e)
              , r = 2 + .4 * Math.abs(this.actualIndex - e);
            n.to(window, {
                scrollTo: s,
                duration: r,
                ease: "power3.inOut",
                onComplete: this.setCurrentMobile
            })
        }
        );
        o(this, "toggleMobileNav", () => {
            this.opened ? this.closeMobileNav() : this.openMobileNav()
        }
        );
        o(this, "setCurrentMobile", () => {
            this.mobileNavSingle.forEach(t => {
                t.classList.toggle("active", t.dataset.sectorNav == this.actualIndex)
            }
            ),
            this.dkNavSingle.forEach(t => {
                t.classList.toggle("active", t.dataset.sectorNav == this.actualIndex)
            }
            )
        }
        );
        o(this, "windowClick", t => {
            this.opened == !0 && t.target !== this.mobileNavText && this.toggleMobileNav()
        }
        );
        o(this, "windowScroll", () => {
            this.opened == !0 && this.toggleMobileNav()
        }
        );
        o(this, "resize", () => {
            this.opened == !0 && this.toggleMobileNav()
        }
        );
        this.introSection = this.element.querySelector("section.intro"),
        this.sectorsWrapper = {
            element: this.element.querySelector(".sectors-w"),
            tl: null
        },
        this.sectors = Array.from(this.sectorsWrapper.element.querySelectorAll(".sector")).map( (s, r) => ({
            element: s,
            tl: null,
            id: r
        })),
        this.sectors.forEach(s => {
            const r = s.element;
            s.name = r.querySelector(".sector-name"),
            s.svg = r.querySelector(".image-bg .lozenge"),
            s.description = r.querySelector(".sector-description"),
            s.cardsW = r.querySelector(".activity-cards-w"),
            s.cards = r.querySelectorAll(".activity-card"),
            s.bgImg = r.querySelector(".image-bg"),
            s.gradientBg = r.querySelector(".gradient-bg")
        }
        ),
        this.buttons = Array.from(this.element.querySelectorAll(".sector-name-nav")).map(s => ({
            element: s,
            data: s.dataset.sectorNav
        })),
        this.body = document.querySelector("body"),
        this.footer = document.querySelector("#footer"),
        this.opened = !1,
        this.mobileNavText = this.element.querySelector(".mobile-nav-text"),
        this.mobileNav = this.element.querySelector(".mobile-nav-inside"),
        this.mobileNavSingle = this.mobileNav.querySelectorAll(".sector-name-nav"),
        this.actualIndex = 0,
        this.elements = this.element.querySelectorAll("*"),
        this.dkNav = this.element.querySelector(".dk-nav-fixed"),
        this.dkNavSingle = this.dkNav.querySelectorAll(".sector-name-nav")
    }
    init() {
        this.initScrollTrigger(),
        n.set(this.footer, {
            position: "fixed",
            opacity: 0,
            visibility: "hidden",
            zIndex: 0
        }),
        n.set(this.mobileNav, {
            yPercent: 100,
            display: "none"
        })
    }
    initScrollTrigger() {
        var t, e, s;
        (e = (t = this.sectorsWrapper.tl) == null ? void 0 : t.scrollTrigger) == null || e.kill(),
        (s = this.sectorsWrapper.tl) == null || s.kill(),
        this.sectorsWrapper.element.style.height = this.sectors.length * 420 + "vh",
        this.sectorsWrapper.tl = n.timeline({
            scrollTrigger: {
                trigger: this.sectorsWrapper.element,
                toggleActions: "play complete none reset",
                scrub: .1,
                start: "top bottom",
                end: "bottom bottom",
                pin: !0,
                pinSpacing: !1,
                type: "delayedKill"
            }
        }),
        this.sectors.forEach( (r, a) => {
            var h;
            (h = r.tl) == null || h.kill(),
            r.tl = n.timeline({});
            let l = 0;
            if (n.set(r.gradientBg, {
                height: "600%"
            }),
            r.tl.set(r.element, {
                visibility: "visible"
            }).add( () => this.setCurrentMobile()).add( () => this.actualIndex = a - 1).add( () => this.actualIndex = a).add( () => this.setCurrentMobile()).fromTo(r.element, {
                yPercent: 0
            }, {
                yPercent: -100
            }).fromTo(r.name, {
                y: 0
            }, {
                y: "-45vh"
            }, "<").fromTo(r.gradientBg, {
                scaleX: .95
            }, {
                scaleX: 1,
                duration: .2
            }, 0).fromTo(r.gradientBg, {
                yPercent: 0
            }, {
                yPercent: -20,
                duration: .8
            }, 0).fromTo(r.bgImg, {
                scale: .9,
                yPercent: 0
            }, {
                scale: 1,
                yPercent: -100,
                ease: "power1.out"
            }, l).fromTo(r.bgImg, {
                scale: 1
            }, {
                scale: 1.1
            }, ">").add( () => this.setCurrentMobile, "<").add( () => this.actualIndex = a, "<").fromTo(r.svg, {
                scale: 1
            }, {
                scale: .7
            }, "<"),
            a == this.sectors.length - 1 && r.tl.to(this.dkNav, {
                y: -150,
                duration: .25,
                ease: "power3.inOut"
            }, "<"),
            r.tl.fromTo(r.description, {
                y: "30vh"
            }, {
                y: `${r.cards.length == 1 ? -80 : -20 * r.cards.length - 80}vh`
            }, "0.3").fromTo(r.cardsW, {
                y: "100vh"
            }, {
                y: -r.cards.length * 650 - 750 + "px"
            }, `<${r.cards.length > 3 ? " + 1" : ""}`),
            a !== this.sectors.length - 1)
                r.tl.set(r.element, {
                    visibility: "hidden"
                });
            else {
                r.tl.fromTo(this.sectorsWrapper.element, {
                    y: 0
                }, {
                    y: "-120vh"
                }, ">=-0.2"),
                r.tl.from(".footer-w", {
                    yPercent: 60,
                    duration: 1,
                    ease: "power3.out"
                }, "<"),
                r.tl.set(r.gradientBg, {
                    visibility: "hidden"
                }, "<"),
                r.tl.set(this.sectorsWrapper.element, {
                    visibility: "hidden"
                }, "<");
                const d = window.innerHeight - this.footer.getBoundingClientRect().height - 180;
                r.tl.to(this.footer, {
                    visibility: "visible",
                    pointerEvents: "all",
                    opacity: 1,
                    duration: .6
                }, "<"),
                r.tl.to(this.footer, {
                    y: d,
                    duration: .5
                }, ">"),
                r.tl.set(this.sectorsWrapper.element, {
                    yPercent: -100
                }, "<-0.01")
            }
            this.sectorsWrapper.tl.addLabel(`${a}`, ">-0.02"),
            this.sectorsWrapper.tl.add(r.tl, ">-0.33")
        }
        ),
        this.navTl = n.timeline({
            scrollTrigger: {
                trigger: this.introSection,
                toggleActions: "play none none reverse",
                start: "bottom top",
                end: "200% top"
            }
        }),
        this.navTl.fromTo(this.dkNav, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .6,
            ease: "none"
        }, 0),
        this.navTl.fromTo(this.dkNav, {
            yPercent: -10
        }, {
            yPercent: 0,
            duration: 1,
            ease: "power2.out"
        }, 0)
    }
    openMobileNav() {
        var t;
        this.opened = !0,
        this.mobileNavText.classList.add("hide"),
        (t = this._tl) == null || t.kill(),
        this._tl = n.timeline(),
        this._tl.set(this.mobileNav, {
            display: "flex"
        }),
        this._tl.to(this.mobileNav, {
            yPercent: 0,
            duration: .7,
            ease: "power2.out"
        }),
        this._tl.to(this.mobileNavSingle, {
            opacity: 1,
            stagger: .08
        }, .1),
        this._tl.to(this.mobileNavText, {
            opacity: 0,
            duration: .6,
            ease: "power2.out"
        }, 0)
    }
    closeMobileNav() {
        var t;
        this.opened = !1,
        this.mobileNavText.classList.remove("hide"),
        (t = this._tl) == null || t.kill(),
        this._tl = n.timeline(),
        this._tl.to(this.mobileNavSingle, {
            opacity: 0,
            stagger: {
                each: .05,
                from: "end"
            },
            duration: .3
        }, 0),
        this._tl.to(this.mobileNav, {
            yPercent: 100,
            duration: .5,
            ease: "power2.in"
        }, 0),
        this._tl.set(this.mobileNav, {
            display: "none"
        }),
        this._tl.to(this.mobileNavText, {
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        })
    }
    attach() {
        this.buttons.forEach(t => {
            t.element.addEventListener("click", this.scrollToSection)
        }
        ),
        window.addEventListener("resize", this.resize),
        this.sectors.forEach(t => {
            n.set(t.element, {
                visibility: "hidden"
            })
        }
        ),
        this.body.style.overflowX = "hidden",
        this.mobileNavText.addEventListener("click", this.toggleMobileNav),
        window.addEventListener("click", this.windowClick),
        window.addEventListener("scroll", this.windowScroll),
        this.footer.classList.add("transform-mobile-only"),
        this.footer.querySelector(".collab").classList.add("visible")
    }
    detach() {
        var t, e;
        this.buttons.forEach(s => {
            s.element.removeEventListener("click", this.scrollToSection)
        }
        ),
        window.removeEventListener("resize", this.resize),
        this.mobileNavText.removeEventListener("click", this.toggleMobileNav),
        window.removeEventListener("click", this.windowClick),
        window.removeEventListener("scroll", this.windowScroll),
        this.footer.classList.remove("transform-mobile-only"),
        (t = this.sectorsWrapper.tl) == null || t.kill(),
        this.sectors.forEach(s => {
            var r;
            (r = s.tl) == null || r.kill()
        }
        ),
        (e = this._tl) == null || e.kill(),
        n.set(this.footer, {
            clearProps: "all"
        }),
        n.set(".footer-w", {
            clearProps: "all"
        }),
        n.set(this.footer, {
            visibility: "hidden"
        }),
        this.footer.querySelector(".collab").classList.remove("visible")
    }
}
class Ft extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "openPopin", () => {}
        );
        o(this, "closePopin", () => {
            var t;
            this.popinOpened = !1,
            this.element.removeEventListener("click", this.onClick),
            (t = this.ptl) == null || t.kill(),
            this.ptl = n.timeline(),
            this.ptl.to(this.popin, {
                xPercent: 100,
                ease: "power2.in"
            }),
            this.ptl.set(this.popin, {
                display: "block"
            })
        }
        );
        o(this, "onClick", t => {
            this.popinOpened && !t.path.includes(this.popin) && this.closePopin()
        }
        );
        this.popinBtns = Array.from(t.querySelectorAll(".open-popin-btn")).map(s => ({
            el: s
        })),
        this.popin = t.querySelector(".popin.offer-popin"),
        this.popinContent = this.popin.querySelector(".popin-content"),
        this.popinCloser = this.popin.querySelector(".popin-head .left"),
        n.set(this.popin, {
            xPercent: 100,
            display: "none"
        }),
        this.ptl = null,
        this.popinOpened = !1
    }
    get scroller() {
        return this.bootstrap.scroller
    }
    init() {}
    attach() {
        this.popinCloser.addEventListener("click", this.closePopin),
        this.popinBtns.forEach(t => {
            t.el.addEventListener("click", this.openPopin)
        }
        )
    }
    detach() {
        this.popinCloser.removeEventListener("click", this.closePopin),
        this.popinBtns.forEach(t => {
            t.el.removeEventListener("click", this.openPopin)
        }
        )
    }
}
class Bt extends f {
    constructor(i, t) {
        super(i, t),
        this.footer = document.querySelector("#footer")
    }
    init() {}
    attach() {
        n.set(this.footer, {
            display: "none"
        })
    }
    detach() {
        n.set(this.footer, {
            clearProps: "all"
        })
    }
}
class Wt extends f {
    constructor(i, t) {
        super(i, t)
    }
    init() {
        this.tl = n.timeline({
            scrollTrigger: {
                trigger: this.element,
                scrub: !0,
                once: !1
            }
        }),
        this.tl.fromTo(this.element, {
            yPercent: 40
        }, {
            yPercent: -40
        })
    }
}
class zt extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "toggleMenu", () => {
            this.playing || (this.playing = !0,
            this.opened ? this.closeMenu() : this.openMenu())
        }
        );
        o(this, "openMenu", () => {
            var t;
            (t = this.tl) == null || t.kill(),
            this.tl = n.timeline({}),
            this.bootstrap.scroller.main.stop(),
            this.components.get(document.querySelector("#homepage")) && (this.components.get(document.querySelector("#homepage")).locked = !0),
            this.tl.set(this.menu, {
                display: "block"
            }).add( () => this.element.classList.add("menu-open"), "<").to(this.menu, {
                backgroundPositionY: 0,
                pointerEvents: "all",
                ease: "expo.out",
                duration: 1.2
            }).to(this.menuItemsAnimate, {
                opacity: 1,
                ease: "none",
                duration: .9,
                stagger: .08
            }, "0").to(this.menuItemsAnimate, {
                yPercent: 0,
                ease: "power3.out",
                duration: 1.6,
                stagger: .08
            }, "0").to(this.bottomSection, {
                opacity: 1,
                duration: .8,
                ease: "power2.out"
            }, "<50%").set(this, {
                opened: !0
            }).set(this, {
                playing: !1
            })
        }
        );
        o(this, "closeMenu", () => {
            var t;
            (t = this.tl) == null || t.kill(),
            this.tl = n.timeline({}),
            this.bootstrap.scroller.main.start(),
            this.components.get(document.querySelector("#homepage")) && (this.components.get(document.querySelector("#homepage")).locked = !1),
            this.tl.set(this.menu, {
                pointerEvents: "none"
            }).to(this.menuItemsAnimate, {
                opacity: 0,
                yPercent: 30,
                ease: "power2.out",
                duration: .4,
                stagger: {
                    from: "end",
                    each: .02
                }
            }).to(this.bottomSection, {
                opacity: 0,
                duration: .8,
                ease: "power2.out"
            }, "0").to(this.menu, {
                backgroundPositionY: "200%",
                ease: "expo.out",
                duration: 1.2
            }, "<50%").add( () => this.element.classList.remove("menu-open"), "<").set(this.menu, {
                display: "none"
            }).set(this, {
                opened: !1
            }).set(this, {
                playing: !1
            })
        }
        );
        o(this, "closeMenuOnclick", t => {
            t.currentTarget.classList.contains("logo-w-header") && this.opened == !1 || this.closeMenu()
        }
        );
        o(this, "compute", () => {
            this.iconChildren = Array.from(this.element.querySelectorAll(".list-child-anim-icon")).map(t => ({
                element: t
            }))
        }
        );
        o(this, "reset", () => {
            this.iconChildren.forEach(t => {
                n.set(t.element, {
                    opacity: 0,
                    y: 0
                })
            }
            )
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk));
            const e = this.iconChildren.map(s => s.element);
            return this.t.to(e, {
                opacity: 1,
                ease: "none",
                duration: 1,
                stagger: .08
            }, t),
            this.t
        }
        );
        this.burger = this.element.querySelector(".burger"),
        this.menu = document.querySelector("#menu"),
        this.menuItemsAnimate = this.menu.querySelectorAll("[data-menu-anim]"),
        this.mainSection = this.menu.querySelector(".main-section-menu"),
        this.bottomSection = this.menu.querySelector(".bottom-w-menu"),
        this.sound = this.element.querySelector(".sound"),
        this.opened = !1,
        this.tl = null,
        this.playing = !1,
        this.closeMenuItems = document.querySelectorAll("[data-close-menu]")
    }
    init() {
        n.set(this.menu, {
            display: "none"
        }),
        n.set(this.menuItemsAnimate, {
            opacity: 0,
            yPercent: 30
        }),
        n.set(this.bottomSection, {
            opacity: 0
        }),
        this.compute(),
        this.reset()
    }
    attach() {
        this.burger.addEventListener("click", this.toggleMenu),
        this.closeMenuItems.forEach(t => {
            t.addEventListener("click", this.closeMenuOnclick)
        }
        ),
        this.bootstrap.loader.on("loaded", this.timeline)
    }
    detach() {
        this.burger.removeEventListener("click", this.toggleMenu),
        this.closeMenuItems.forEach(t => {
            t.removeEventListener("click", this.closeMenuOnclick)
        }
        ),
        this.bootstrap.loader.off("loaded", this.timeline)
    }
}
const rt = `precision highp float;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional

attribute vec2 uv;
attribute vec3 position;

varying vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`
  , Vt = `precision highp float;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional

uniform float time;

attribute vec3 position;

void main() {
	vec3 pos = position;
	float t = time * .00002;

	pos.x += cos(t + pos.y);
	pos.y += sin(t + pos.z);
	pos.z += sin(t + pos.x);

	vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

	gl_PointSize = (50.0 / -mvPosition.z);

	gl_Position = projectionMatrix * mvPosition;
}`
  , Ht = `precision highp float;

uniform sampler2D uMap;
varying vec2 vUv;
uniform float time;

#define GLOW_COLOR vec3(.18, .45, .47)

void main() {
	float l = length(gl_PointCoord - .5);
	float a = smoothstep(.3, .0, l) * .15 + smoothstep(.5, .0, l) * .1;

	if(a < .001) discard;

	gl_FragColor = vec4(a * GLOW_COLOR, 1.);
}
`
  , Gt = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif

uniform float time;
uniform float speed;
uniform float longpress;

varying vec3 vPos;
varying float vTime;
varying float vLongpress;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vTime = time;
	vPos = position;
	vLongpress = longpress;

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	
	transformed.y += sin((time + speed * 500. + longpress * 1000.) * .0005 + sin(atan(transformed.x, transformed.z) * PI) * 3. + transformed.z) * (.02 + speed * .01) * (1. - uv.x) * (1. + longpress);

	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>



#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , jt = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
uniform float glowIntensity;

uniform vec3 mainColor;

varying float tMove;
varying float vTime;
varying float vLongpress;

#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

#define GLOW_COLOR vec3(1., .35, 0)
#define LEAF_COLOR vec3(-.28, .15, .47)
varying vec3 vPos;

vec3 czm_saturation(vec3 rgb, float adjustment)
{
    return mix(vec3(dot(rgb, vec3(0.2125, 0.7154, 0.0721))), rgb, adjustment);
}

void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	roughnessFactor = .6;
	#include <metalnessmap_fragment>
	metalnessFactor = .1;
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

    // normal.r = (normal.r - .5) * 2. + .5;
    // normal.g = (normal.g - .5) * 2. + .5;

	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance + .02;
	
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

	float leafGlow = smoothstep(.7 , -.2, vPos.y - length(vPos.xz)) * (1. - vUv.x * 1.2);
	float glow = smoothstep(.5, 1.5, 1. - sin((.95 - leafGlow) + sin(vTime * .001) * .1)) * (glowIntensity + vLongpress);


	gl_FragColor.rgb *= (smoothstep(.0, .5, abs(.5 - vUv.y)) * .5 + .8);
	float len = length(texture2D(map, vUv).rgb);

	// Glow
	gl_FragColor.rgb += czm_saturation(glow * GLOW_COLOR * (1. + len * .2) + (1. - glow) * LEAF_COLOR * .2, 1.12);

	// AO
	gl_FragColor.rgb -= smoothstep(.3, 1., vUv.x) * .1;

	// Saturation
	gl_FragColor.rgb = czm_saturation(gl_FragColor.rgb, 1.2);

	// Contrast
	gl_FragColor.rgb = (gl_FragColor.rgb * 1.2) - .05;
	
	// Longpress
	gl_FragColor.rgb = mix(gl_FragColor.rgb, GLOW_COLOR * len * 3., vLongpress * sin(vUv.x * 6. + vTime * .001 + vUv.y + atan(vPos.x, vPos.z) * PI2 + vPos.y * 3. + vLongpress * 2.) * .5) * (1. + sin(vUv.x * 4. - vTime * .002) * vLongpress * .3);

	// gl_FragColor.rgb += (1. - vUv.y) * .2 - .05;
	// gl_FragColor.rgb *= .8;
}`
  , Xt = `precision highp float;

uniform sampler2D uMap;
varying vec2 vUv;
uniform float time;
uniform float longpress;

#define GLOW_COLOR vec3(1., .4, 0)

void main() {
	float ao = texture2D(uMap, vUv).r;

	gl_FragColor = vec4(ao * GLOW_COLOR * .9 + sin(time * .001 + longpress * 5. + vUv.x * 3. + vUv.y * 3.) * .1 * ao * (1. + longpress), 1.);
}
`
  , Yt = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif

uniform float time;

attribute vec2 uv2;
varying vec3 vPos;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vPos = (instanceMatrix * vec4(position,  1.)).xyz;

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>

	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , Zt = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
uniform float time;
uniform float longpress;

uniform sampler2D tTrunk;

varying vec3 vPos;

#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

#define GLOW_COLOR vec3(1., .28, 0)

void main() {
	#include <clipping_planes_fragment>

	vec2 tUv = vUv * 10. + vPos.y * 3.;
	
	float trunkTexture = texture2D(tTrunk, vUv * vec2(1., 2.) + vPos.y * 2.).r * (.2 + .8 * texture2D(tTrunk, vUv * vec2(4., 2.) + vPos.y * 2.).r);

	vec3 modifiedDiffuse = diffuse * GLOW_COLOR * (.6 * smoothstep(0., .4, trunkTexture) + .4) * 2.;
	vec4 diffuseColor = vec4( modifiedDiffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	roughnessFactor = .3 + trunkTexture * .2;
	#include <metalnessmap_fragment>
	metalnessFactor = .5;

	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	float customColorIntensity = texture2D(map, vUv).r;

    normal.r -= (texture2D(tTrunk, vec2(tUv.x + .0003, tUv.y)).r - texture2D(tTrunk, vec2(tUv.x - .0003, tUv.y)).r) * 30.;
    normal.g -= (texture2D(tTrunk, vec2(tUv.x, tUv.y + .0003)).r - texture2D(tTrunk, vec2(tUv.x, tUv.y - .0003)).r) * 30.;

	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

	// gl_FragColor.rgb *= smoothstep(10., 5., vPos.y * 10.) * .8 + .2;
	gl_FragColor.rgb = clamp(gl_FragColor.rgb, 0., 1.) * customColorIntensity * 1.2;

	gl_FragColor.rgb += sin(vPos.y * 10. - time * .001) * GLOW_COLOR * customColorIntensity * .3;
	gl_FragColor.rgb -= texture2D(tTrunk, tUv).r * .1;
	gl_FragColor.rgb = clamp(gl_FragColor.rgb, 0., 1.) - smoothstep(.8, 0., trunkTexture) * .01;

	gl_FragColor *=  1. + longpress * cos(vUv.x * 3. + time * .001 + vPos.y * 12.);
}`
  , Qt = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif

uniform float time;

varying vec3 vPos;
varying float vTime;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vTime = time;
	vPos = position;

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	
	transformed.y += sin(time * .0005 + sin(atan(transformed.x, transformed.z) * PI) * 3. + transformed.z) * .03 * (1. - uv.x);

	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>



#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , Kt = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
uniform float longpress;

varying float vTime;

uniform sampler2D tTrunk;

#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

#define GLOW_COLOR vec3(1., .53, 0)
#define GLOW_COLOR_2 vec3(.26, .72, .6)

vec3 czm_saturation(vec3 rgb, float adjustment) {
    return mix(vec3(dot(rgb, vec3(0.2125, 0.7154, 0.0721))), rgb, adjustment);
}

void main() {

	vec2 tUv = vec2(vUv.x * 100., vUv.y * 8.);

	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	roughnessFactor = .5;
	#include <metalnessmap_fragment>
	metalnessFactor = .5;
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

    normal.r -= (texture2D(tTrunk, vec2(tUv.x + .007, tUv.y)).r - texture2D(tTrunk, vec2(tUv.x - .007, tUv.y)).r) * .5;
    normal.g -= (texture2D(tTrunk, vec2(tUv.x, tUv.y + .007)).r - texture2D(tTrunk, vec2(tUv.x, tUv.y - .007)).r) * .5;

    normal.r -= (texture2D(tTrunk, vec2(tUv.x * 3. + .007, tUv.y * 3.)).r - texture2D(tTrunk, vec2(tUv.x * 3. - .007, tUv.y * 3.)).r) * 1.;
    normal.g -= (texture2D(tTrunk, vec2(tUv.x * 3., tUv.y * 3. + .007)).r - texture2D(tTrunk, vec2(tUv.x * 3., tUv.y * 3. - .007)).r) * 1.;

	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * (1.0 - material.clearcoat * Fcc) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

	gl_FragColor.rgb = czm_saturation(gl_FragColor.rgb, .5);
	// gl_FragColor.rgb += .01 + (1. - texture2D(tTrunk, tUv).r) * .02;
	// gl_FragColor.rgb *= 1.5 - .25;
	gl_FragColor.rgb += smoothstep(.2, 1.1, abs(normal.g)) * GLOW_COLOR * (1. + sin(vTime * .001 + vUv.x * 10.)) * .2;
	gl_FragColor.rgb += smoothstep(.2, 1.1, abs(normal.r)) * GLOW_COLOR_2 * (1. + sin(vTime * .001 + vUv.x * 10.)) * .2;

	gl_FragColor.rgb += longpress * smoothstep(.5, 1., sin(vUv.y * 18. * (.5 + vUv.x) + vTime * .002)) * GLOW_COLOR * .3;
	gl_FragColor.rgb += longpress * smoothstep(.95, 1., sin(vUv.y * 18. * (.5 + vUv.x) + vTime * .001)) * GLOW_COLOR_2 * .3;
	gl_FragColor.g += .01;
	// gl_FragColor.rgb += .02;

}`
  , Jt = `precision highp float;

uniform sampler2D uMap;
varying vec2 vUv;
uniform float time;


void main() {
	gl_FragColor = texture2D(uMap, vUv) * (1. + sin(vUv.y * 10. + time * .002) * .1) * (1. + sin(time * .001) * .05) * 1.1;
}
`
  , te = `precision highp float;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional

attribute vec2 uv;
attribute vec3 position;

varying vec2 vUv;


varying vec2 vRgbNW;
varying vec2 vRgbNE;
varying vec2 vRgbSW;
varying vec2 vRgbSE;
varying vec2 vRgbM;
varying vec2 vResolution;

uniform vec2 uResolution;

void texcoords(vec2 fragCoord, vec2 resolution, out vec2 v_rgbNW, out vec2 v_rgbNE, out vec2 v_rgbSW, out vec2 v_rgbSE, out vec2 v_rgbM) {
  vec2 inverseVP = 1.0 / resolution.xy;
  v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
  v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
  v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
  v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
  v_rgbM = vec2(fragCoord * inverseVP);
}

void main() {
	vResolution = uResolution;
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	
  	texcoords(vUv * uResolution, uResolution, vRgbNW, vRgbNE, vRgbSW, vRgbSE, vRgbM);
}`
  , ee = `precision highp float;

varying vec2 vUv;
varying vec2 vResolution;

varying vec2 vRgbNW;
varying vec2 vRgbNE;
varying vec2 vRgbSW;
varying vec2 vRgbSE;
varying vec2 vRgbM;

uniform sampler2D tDiffuse1;
uniform sampler2D tDepth1;
uniform sampler2D tDiffuse2;
uniform sampler2D tDepth2;

uniform sampler2D tGradient;
uniform sampler2D tDithering;

uniform vec2 mouse;

uniform float time;
uniform float transition;
uniform float transitionDirection;

uniform float backgroundIntensity1;
uniform float backgroundIntensity2;

uniform float sceneIntensity1;
uniform float sceneIntensity2;

uniform sampler2D tBackgroundImage;
uniform float backgroundImageVisibility;
uniform float backgroundImageRatio;
uniform float backgroundBlendFade;

uniform float whiteVersion;
uniform float arVersion;
uniform float longpress;

#define DARK_GREEN vec3(.051, .15, .15)

#define PI 3.141592
#define NEAR 1.
#define FAR 10.
#ifndef FXAA_REDUCE_MIN
    #define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
    #define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
    #define FXAA_SPAN_MAX     8.0
#endif

vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution, vec2 v_rgbNW, vec2 v_rgbNE, vec2 v_rgbSW, vec2 v_rgbSE, vec2 v_rgbM) {
	vec4 color;
	mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);
	vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
	vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
	vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
	vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
	vec4 texColor = texture2D(tex, v_rgbM);
	vec3 rgbM = texColor.xyz;
	vec3 luma = vec3(0.299, 0.587, 0.114);
	float lumaNW = dot(rgbNW, luma);
	float lumaNE = dot(rgbNE, luma);
	float lumaSW = dot(rgbSW, luma);
	float lumaSE = dot(rgbSE, luma);
	float lumaM = dot(rgbM, luma);
	float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
	float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

	mediump vec2 dir;
	dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
	dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));

	float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
		(0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

	float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
	dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin)) * inverseVP;

	vec3 rgbA = 0.5 * (texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
		texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
	vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
		texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

	float lumaB = dot(rgbB, luma);
	if((lumaB < lumaMin) || (lumaB > lumaMax))
		color = vec4(rgbA, texColor.a);
	else
		color = vec4(rgbB, texColor.a);
	return color;
}


vec3 hsv2rgb(vec3 c){
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    return c.z * mix(K.xxx, clamp(abs(fract(c.xxx + K.xyz) * 6.0 - K.www) - K.xxx, 0.0, 1.0), c.y);
}

vec3 czm_saturation(vec3 rgb, float adjustment)
{
    return mix(vec3(dot(rgb, vec3(0.2125, 0.7154, 0.0721))), rgb, adjustment);
}

float viewZToOrthographicDepth(const in float viewZ, const in float near, const in float far) {
	return (viewZ + near) / (near - far);
}
float perspectiveDepthToViewZ(const in float invClipZ, const in float near, const in float far) {
	return (near * far) / ((far - near) * invClipZ - far);
}
float readDepth(sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, NEAR, FAR);
	return viewZToOrthographicDepth(viewZ, NEAR, FAR);
}

float pow2(float x) {return x * x;}

void main() {
	vec2 dUv = (vUv - .5) * (1. - longpress * length(vUv - .5) * .15) + .5;
	// vec2 dUv = vUv + (smoothstep(.9, .2, length(vUv - .5))) * longpress * .1;
	vec2 rUv = dUv;
	vec2 cMouse = clamp(mouse, -1., 1.);

	float diag = (.5 - dUv.x) * smoothstep(0., .5, transition) * smoothstep(1., .5, transition) * .4 * transitionDirection;
	float sweep = smoothstep(transition * 1.2 - .1 + .001, transition * 1.2 - .1, max(-transitionDirection, 0.) + (dUv.y * transitionDirection) + diag);
	float backgroundMix = mix(backgroundIntensity1, backgroundIntensity2, sweep);
	float sceneMix = mix(sceneIntensity1, sceneIntensity2, sweep);
	sceneMix = mix(sceneMix, 2., whiteVersion);

	vec2 tr = texture2D(tDithering, dUv * 10.).rg;
	tr.x *= PI * 2.;
	vec2 tUv = dUv + (vec2(cos(tr.x * 10. + time), sin(tr.x * 10. + time))) * tr.y * .02;

	vec2 sUv = dUv * .8 + cMouse * .2;

	float depth1 = readDepth(tDepth1, rUv);
	vec3 base1 = fxaa(tDiffuse1, dUv * vResolution, vResolution, vRgbNW, vRgbNE, vRgbSW, vRgbSE, vRgbM).rgb * (depth1 * .4 + .8);
	// base1 += texture2D(tDiffuse1, tUv).rgb * smoothstep(2., 1., length(base1)) * .2;

	float depth2 = readDepth(tDepth2, rUv);
	vec3 base2 = fxaa(tDiffuse2, dUv * vResolution, vResolution, vRgbNW, vRgbNE, vRgbSW, vRgbSE, vRgbM).rgb * (depth2 * .4 + .8);
	// base2 += texture2D(tDiffuse2, tUv).rgb * smoothstep(2., 1., length(base2)) * .2;

	vec3 base = mix(base1, base2, sweep);
	float depth = mix(depth1, depth2, sweep);

	float t = time * .0001;
	float border = smoothstep(.7, .3, length(dUv - .5));
	float backgroundIntensity = 0.;

	float mouseDist = length(dUv - cMouse * .5 - .5);
	backgroundIntensity = (sin(sUv.x * 4. * sin(sUv.x * 4.) + t + sin(sUv.y * 4. + t * 1.3) + backgroundMix * 38.5) - sin(sUv.y + t + sin(sUv.x * 3. + t * .48) * 4. + backgroundMix * 148.8)) * .5 + mouseDist;

	backgroundIntensity *= border;
	// backgroundIntensity += smoothstep(.7, .3, length(dUv - 1.));
	backgroundIntensity = backgroundIntensity * .1 + .6;

	float grain = (texture2D(tDithering, vec2(dUv.x + cos(floor(time * .02)), dUv.y + sin(floor(time * .02))) * 10.).r - .5) * .005;

	vec3 background = texture2D(tGradient, vec2(backgroundIntensity, sin(backgroundIntensity + t))).rgb;
	background = mix(background, .9 - (background.brg - .1) * 2., whiteVersion);

	float ratio = vResolution.y / vResolution.x;
	background *= .5 + max(backgroundMix, whiteVersion) * .5;

	vec2 bUv = vec2(dUv.x * 2. - 1.15 + (backgroundImageVisibility - 1.) * .2 + 1.3 * arVersion, (dUv.y - ratio + .2 + (backgroundImageRatio - 1.4) * 1.5) * backgroundImageRatio * ratio * 1. + .2);
	float blend = length(texture2D(tBackgroundImage, bUv).rgb) * smoothstep(.0, .2, bUv.x) * smoothstep(1., .8, bUv.y) * .6 * (1. - abs(1. - backgroundImageVisibility));
	blend *= smoothstep(.5, .2, length(bUv - .5)) * .6;
	background = mix(background, (blend < 0.5) ? (2.0 * background * blend + background * background * (1.0 - 2.0 * blend)) : (sqrt(background) * (2.0 * blend - 1.0) + 2.0 * background * (1.0 - blend)), clamp(backgroundBlendFade - whiteVersion, 0., 1.));


	gl_FragColor = vec4(background * smoothstep(.98, 1., depth) + (base * 1.05 - .05) * smoothstep(0., .05, depth), 1.);

	gl_FragColor.rgb = mix(DARK_GREEN, clamp(gl_FragColor.rgb, 0., 1.), sceneMix) * sceneMix;
	gl_FragColor.rgb = mix(gl_FragColor.rgb, DARK_GREEN, smoothstep(.4, 0., dUv.y) * .7 * (1. - whiteVersion));
	gl_FragColor.rgb += vec3(grain * 5.) * (1. - whiteVersion * .6);
	gl_FragColor.rgb = czm_saturation(gl_FragColor.rgb, .95 + longpress * .1);
	gl_FragColor.rgb = gl_FragColor.rgb * (1. + longpress * .2) - longpress * .05;
	gl_FragColor.rgb *= vec3(.98, .98, 1.1);
	gl_FragColor.rgb -= smoothstep(.4, .9, length(dUv - .5)) * .05;
}
`
  , C = "static/assets"
  , O = new dt;
let ot = 0
  , D = 0
  , z = 0;
const w = {
    intro: {
        parallax: 3,
        backgroundIntensity: 2,
        sceneIntensity: 1,
        leafsGlowIntensity: .9
    },
    values: {
        parallax: .1,
        backgroundIntensity: .7,
        sceneIntensity: 1.3,
        leafsGlowIntensity: .9
    },
    history: {
        parallax: .05,
        backgroundIntensity: .8,
        sceneIntensity: .85,
        leafsGlowIntensity: .5
    },
    company: {
        parallax: .5,
        backgroundIntensity: 1.2,
        sceneIntensity: .8,
        leafsGlowIntensity: .4
    },
    contribution: {
        parallax: .5,
        backgroundIntensity: .8,
        sceneIntensity: .7,
        leafsGlowIntensity: .4
    },
    career: {
        parallax: 2,
        backgroundIntensity: 1,
        sceneIntensity: .7,
        leafsGlowIntensity: .6
    },
    footer: {
        parallax: 1,
        backgroundIntensity: .9,
        sceneIntensity: .7,
        leafsGlowIntensity: .4
    }
};
class ie {
    constructor(i) {
        o(this, "load", async () => {
            const [i,t,e,s,r] = await Promise.all([new Promise(a => this.gltfLoader.load(`${C}/models/scene.glb`, l => a(l))), new Promise(a => this.rgbeLoader.load(`${C}/models/envmap.hdr`, l => a(l))), new Promise(a => this.textureLoader.load(`${C}/models/trunk.jpg`, l => a(l))), new Promise(a => this.textureLoader.load(`${C}/models/gradient.jpg`, l => a(l))), new Promise(a => this.textureLoader.load(`${C}/models/dithering.png`, l => a(l)))]);
            this.model = i.scene,
            this.scene.environment = this.computeEnvmap(t),
            e.wrapS = e.wrapT = bt,
            this.trunkTexture = e,
            s.wrapS = s.wrapT = et,
            r.wrapS = r.wrapT = et,
            this.renderPlane.material.uniforms.tGradient.value = s,
            this.renderPlane.material.uniforms.tDithering.value = r,
            this.cameras = {},
            this.model.traverse(a => {
                if (a.name.split("-")[0] == "camera" && a.name.search("_Orientation") < 0) {
                    const l = a.name.split("-")[1];
                    a.rotateX(-Math.PI * .5),
                    this.cameras[l] = a,
                    this.cameras[l]._config = w[l]
                }
            }
            ),
            this._loadedCallbacks.forEach(a => a()),
            this.generate()
        }
        );
        o(this, "tick", i => {
            D = i - this.lastEt,
            this.glow1 && (this.transition < 1 && this.applyGlowTracking(this.glow1, this.camera1),
            this.transition > 0 && this.applyGlowTracking(this.glow2, this.camera2)),
            Number.isNaN(D) || (this.lerpedParallax.distanceTo(this.parallax) > 1e-4 && this.lerpedParallax.lerp(this.parallax, 5e-4 * D),
            this.lerpedParallax.x = R.clamp(this.lerpedParallax.x, -1, 1),
            this.lerpedParallax.y = R.clamp(this.lerpedParallax.y, -1, 1),
            this.transition < 1 && this.rotateCamera(this.camera1, D),
            this.transition > 0 && this.rotateCamera(this.camera2, D)),
            this.speed -= (this.speed - this.lerpedParallax.distanceTo(this.parallax)) * .1,
            this.renderPlane.material.uniforms.mouse.value.copy(this.lerpedParallax),
            this.backgroundVisibility > 0 && (this.leafShader && (this.leafShader.uniforms.time.value = i,
            this.leafShader.uniforms.speed.value = this.speed),
            this.trunkShader && (this.trunkShader.uniforms.time.value = i),
            this.rootsShader && (this.rootsShader.uniforms.time.value = i),
            this.glow && (this.glow.material.uniforms.time.value = i),
            this.particles && (this.particles.material.uniforms.time.value = i),
            this.fruits1 && (this.fruits1.material.uniforms.time.value = i),
            this.fruits2 && (this.fruits2.material.uniforms.time.value = i)),
            this.renderPlane.material.uniforms.time.value = i,
            this.render(),
            this.transition < 1 && this.applyParallax(this.camera1),
            this.transition > 0 && this.applyParallax(this.camera2),
            this.lastEt = i,
            this._ticking && requestAnimationFrame(this.tick)
        }
        );
        o(this, "resize", () => {
            this.screen.width = window.innerWidth,
            this.screen.height = this.$sizer.offsetHeight,
            this.camera1.aspect = this.screen.width / this.screen.height,
            this.camera1.updateProjectionMatrix(),
            this.camera2.aspect = this.screen.width / this.screen.height,
            this.camera2.updateProjectionMatrix();
            const i = 1.5;
            this.renderer.setPixelRatio(i),
            this.renderer.setSize(this.screen.width, this.screen.height),
            this.renderTarget1.setSize(this.screen.width * i, this.screen.height * i),
            this.renderTarget2.setSize(this.screen.width * i, this.screen.height * i),
            this.renderPlane.material.uniforms.uResolution.value.set(this.screen.width * i, this.screen.height * i),
            this.renderFromCamera(1),
            this.renderFromCamera(2)
        }
        );
        o(this, "render", () => {
            this.transition < 1 && this.renderFromCamera(1),
            this.transition > 0 && this.renderFromCamera(2),
            this.renderer.setRenderTarget(null),
            this.renderer.clear(),
            this.renderer.render(this.renderPlane, this.renderCamera)
        }
        );
        o(this, "computeEnvmap", i => {
            const t = new kt(this.renderer);
            t.compileEquirectangularShader();
            const e = t.fromEquirectangular(i).texture;
            return i.dispose(),
            t.dispose(),
            e
        }
        );
        this.$parent = i,
        this.$sizer = document.querySelector(".global-webgl-sizer"),
        this.screen = {
            width: window.innerWidth,
            height: this.$sizer.offsetHeight
        },
        this._loadedCallbacks = [],
        this.parallax = new P(0,0),
        this.lerpedParallax = new P(0,0),
        this.speed = 0,
        this.camera1 = new X(30,this.screen.width / this.screen.height,.1,10),
        this.camera2 = new X(30,this.screen.width / this.screen.height,.1,10),
        this.camera1._initialPosition = new Y(0,20,0),
        this.camera1._initialQuaternion = new Z,
        this.camera1._yDecay = 0,
        this.camera1.originRotation = 0,
        this.camera1.lerpedOriginRotation = 0,
        this.camera2._initialPosition = new Y(0,20,0),
        this.camera2._initialQuaternion = new Z,
        this.camera2._yDecay = 0,
        this.camera2.originRotation = 0,
        this.camera2.lerpedOriginRotation = 0,
        this.cameraInitial = null,
        this.cameraTarget = null,
        this.cameraTargetProgress = null,
        this.renderer = new ut({
            antialias: !1,
            stencil: !1,
            powerPreference: "high-performance",
            depth: !1
        });
        const t = this.screen.width >= 1024 ? 1 : 1.5;
        this.renderer.setPixelRatio(t),
        this.renderer.setClearColor(0),
        this.renderer.setSize(this.screen.width, this.screen.height),
        this.renderer.outputEncoding = B,
        this.renderer.toneMapping = mt,
        this.renderer.shadowMap.enabled = !1,
        this.$parent.appendChild(this.renderer.domElement),
        this.longpress = 0,
        this.scene = new Q,
        this.renderTarget1 = new K(this.screen.width * t,this.screen.height * t),
        this.renderTarget1.outputEncoding = B,
        this.renderTarget1.depthTexture = new J(this.screen.width * t,this.screen.height * t),
        this.renderTarget2 = new K(this.screen.width * t,this.screen.height * t),
        this.renderTarget2.depthTexture = new J(this.screen.width * t,this.screen.height * t),
        this.renderTarget2.outputEncoding = B,
        this._backgroundVisibility = 0,
        this.renderScene = new Q,
        this.renderCamera = new pt(-1,1,1,-1,0,1);
        const e = new tt().setAttribute("position", new W([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)).setAttribute("uv", new W([0, 2, 0, 0, 2, 0],2));
        this.renderPlane = new ft(e,new $({
            vertexShader: te,
            fragmentShader: ee,
            side: 2,
            uniforms: {
                tDiffuse1: {
                    value: this.renderTarget1.texture
                },
                tDepth1: {
                    value: this.renderTarget1.depthTexture
                },
                tDiffuse2: {
                    value: this.renderTarget2.texture
                },
                tDepth2: {
                    value: this.renderTarget2.depthTexture
                },
                mouse: {
                    value: new P(0,0)
                },
                uResolution: {
                    value: new P(380,700)
                },
                tGradient: {
                    value: null
                },
                tDithering: {
                    value: null
                },
                transition: {
                    value: 0
                },
                transitionDirection: {
                    value: 1
                },
                backgroundIntensity1: {
                    value: w.intro.backgroundIntensity
                },
                backgroundIntensity2: {
                    value: w.values.backgroundIntensity
                },
                sceneIntensity1: {
                    value: w.intro.sceneIntensity
                },
                sceneIntensity2: {
                    value: w.values.sceneIntensity
                },
                tBackgroundImage: {
                    value: null
                },
                backgroundImageVisibility: {
                    value: 0
                },
                backgroundImageRatio: {
                    value: 1
                },
                backgroundBlendFade: {
                    value: 0
                },
                longpress: {
                    value: 0
                },
                whiteVersion: {
                    value: 0
                },
                arVersion: {
                    value: document.getElementById("root").classList.contains("lang-ar") ? 1 : 0
                },
                time: {
                    value: null
                }
            }
        })),
        this.current = 1,
        this.ambient = new gt(16777215,1),
        this.scene.add(this.ambient),
        this._ticking = !1,
        this.introValue = 1,
        this.lastEt = 0,
        this.firstCameraSet = !1,
        this.gltfLoader = new vt,
        this.rgbeLoader = new yt,
        this.textureLoader = new _t,
        this.load()
    }
    attach() {
        this.startTick()
    }
    detach() {}
    startTick() {
        this._ticking || (this._ticking = !0,
        this.tick())
    }
    stopTick() {
        this._ticking = !1
    }
    generate() {
        this.leafs = this.initLeafs(this.model.getObjectByName("leafs")),
        this.fruits1 = this.initFruits(this.model.getObjectByName("fruits-1")),
        this.fruits2 = this.initFruits(this.model.getObjectByName("fruits-2")),
        this.trunk = this.initTrunk(this.model.getObjectByName("trunk")),
        this.roots1 = this.initRoots(this.model.getObjectByName("roots-1")),
        this.roots2 = this.initRoots(this.model.getObjectByName("roots-2")),
        this.glow1 = this.initGlow(this.model.getObjectByName("glow")),
        this.glow2 = this.glow1.clone(),
        this.particles = this.initParticles(),
        this.scene.add(this.leafs),
        this.scene.add(this.fruits1, this.fruits2),
        this.scene.add(this.trunk),
        this.scene.add(this.roots1, this.roots2),
        this.scene.add(this.glow1, this.glow2),
        this.scene.add(this.particles),
        this.renderer.compile(this.scene, this.camera1),
        this.render()
    }
    initLeafs(i) {
        return i.material.side = 2,
        i.material.normalScale.set(5, 5),
        i.material.envMapIntensity = 1,
        i.material.onBeforeCompile = t => {
            t.uniforms.time = {
                value: 0
            },
            t.uniforms.glowIntensity = {
                value: 1
            },
            t.uniforms.speed = {
                value: 1
            },
            t.uniforms.longpress = {
                value: 0
            },
            t.vertexShader = Gt,
            t.fragmentShader = jt,
            this.leafShader = t
        }
        ,
        i
    }
    initFruits(i) {
        return i.material = new $({
            vertexShader: rt,
            fragmentShader: Xt,
            uniforms: {
                uMap: {
                    value: i.material.map
                },
                time: {
                    value: 0
                },
                longpress: {
                    value: 0
                }
            }
        }),
        i
    }
    initTrunk(i) {
        const a = new xt(i.geometry,i.material,225);
        a.instanceMatrix.setUsage(wt),
        i.material.onBeforeCompile = d => {
            d.uniforms.tTrunk = {
                value: this.trunkTexture
            },
            d.uniforms.time = {
                value: 0
            },
            d.uniforms.longpress = {
                value: 0
            },
            d.vertexShader = Yt,
            d.fragmentShader = Zt,
            this.trunkShader = d
        }
        ;
        let l = 0
          , h = 0;
        for (let d = 0; d < 45; d++)
            for (let u = 0; u < 5; u++)
                l = (u + d % 2 * .5) / 5 * Math.PI * 2,
                O.position.set(0, d * .023, 0),
                O.rotation.y = l,
                O.updateMatrix(),
                a.setMatrixAt(h++, O.matrix);
        return a
    }
    initRoots(i) {
        return i.material.side = 0,
        i.material.envMapIntensity = 2,
        i.material.onBeforeCompile = t => {
            t.uniforms.tTrunk = {
                value: this.trunkTexture
            },
            t.uniforms.time = {
                value: 0
            },
            t.uniforms.longpress = {
                value: 0
            },
            t.defines.USE_UV = "",
            t.vertexShader = Qt,
            t.fragmentShader = Kt,
            this.rootsShader = t
        }
        ,
        i
    }
    initGlow(i) {
        return i.material = new $({
            vertexShader: rt,
            fragmentShader: Jt,
            uniforms: {
                uMap: {
                    value: i.material.map
                },
                time: {
                    value: 0
                }
            },
            depthTest: !1,
            depthWrite: !1,
            side: 2,
            blending: it
        }),
        i.visible = !1,
        i
    }
    initParticles() {
        const i = new tt
          , t = [];
        for (let s = 0; s < 350; s++)
            t.push(Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3);
        i.setAttribute("position", new W(t,3));
        const e = new $({
            fragmentShader: Ht,
            vertexShader: Vt,
            uniforms: {
                time: {
                    value: 0
                },
                longpress: {
                    value: 0
                }
            },
            blending: it,
            depthTest: !1,
            depthWrite: !1
        });
        return new St(i,e)
    }
    applyGlowTracking(i, t) {
        ot = -Math.atan(t.position.y / t.position.z) + (t.position.z < 0 ? Math.PI : 0),
        i.rotation.z = ot - t.lerpedOriginRotation
    }
    applyParallax(i) {
        i.position.copy(i._initialPosition),
        i.quaternion.copy(i._initialQuaternion),
        i._config && (i.translateX(-this.lerpedParallax.x * i._config.parallax * .2 * (1 + this.longpress) - i._yDecay * .5),
        i.translateY(this.lerpedParallax.y * i._config.parallax * .03 + i._yDecay),
        i.translateZ(-this.longpress * .1 * i._config.parallax),
        i.rotateY(-this.lerpedParallax.x * i._config.parallax * .1 * (1 + this.longpress) - i._yDecay * .25),
        i.rotateX(-this.lerpedParallax.y * i._config.parallax * .03 - i._yDecay * .25)),
        this.backgroundVisibility < 1 && i.translateZ((1 - this.backgroundVisibility) * 3).rotateY((1 - this.backgroundVisibility) * Math.PI),
        this.introValue > 0 && i.translateY(this.introValue * .3).translateZ(-this.introValue * 1.4).rotateX(-this.introValue * .2)
    }
    rotateCamera(i, t) {
        i.lerpedOriginRotation = R.damp(i.lerpedOriginRotation, i.originRotation, .003, t),
        z = Math.sqrt(i.position.x * i.position.x + i.position.z * i.position.z),
        i.translateZ(-z).rotateY(i.lerpedOriginRotation).translateZ(z),
        i.translateY(i.lerpedOriginRotation * .1)
    }
    setParallax(i, t) {
        this.parallax.set(i, t)
    }
    setCamera(i, t, e=0, s=1) {
        var r, a, l, h;
        if (i = i.toLowerCase(),
        typeof this.cameras > "u") {
            this._loadedCallbacks.push(this.setCamera.bind(this, i));
            return
        }
        if (this._currentCameraName == i) {
            if (e == this._currentCameraPositionId)
                return;
            (r = this.ptl) == null || r.kill(),
            this.ptl = n.timeline(),
            (a = this.cameraTarget) != null && a.position && this.ptl.to(this, {
                cameraTargetProgress: e / s,
                duration: 3,
                ease: "immg.posIn",
                onUpdate: () => this.updateCameraProgress(this[`camera${Math.round(this.transition) + 1}`])
            }),
            this._currentCameraPositionId = e;
            return
        }
        if ((l = this.ptl) == null || l.kill(),
        (h = this.tl) == null || h.kill(),
        this.tl = n.timeline(),
        this._currentCameraPositionId = e,
        this._currentCameraName = i,
        !(typeof this.cameras[i] > "u")) {
            if (this.cameraInitial = this.cameras[i],
            this.cameraTarget = this.cameras[`${i}Target`] ? this.cameras[`${i}Target`] : this.cameraInitial,
            this.cameraTargetProgress = s > 0 ? e / s : 0,
            !this.firstCameraSet) {
                this.camera1._initialPosition.copy(this.cameraInitial.position),
                this.camera1._initialQuaternion.copy(this.cameraInitial.quaternion),
                this.camera1._config = this.cameraInitial._config,
                this.firstCameraSet = !0;
                return
            }
            this.current = this.current ? 0 : 1,
            this[`camera${2 - this.current}`]._config = this.cameraInitial._config,
            this.tl.set(this.renderPlane.material.uniforms.transitionDirection, {
                value: -t * (this.current * 2 - 1)
            }),
            this.tl.add( () => {
                this.updateCameraProgress(this[`camera${2 - Math.round(this.transition)}`])
            }
            ),
            this.tl.set(this.renderPlane.material.uniforms[`backgroundIntensity${2 - this.current}`], {
                value: w[i].backgroundIntensity
            }, 0),
            this.tl.set(this.renderPlane.material.uniforms[`sceneIntensity${2 - this.current}`], {
                value: w[i].sceneIntensity
            }, 0),
            this.tl.to(this.camera1, {
                originRotation: 0,
                lerpedOriginRotation: 0,
                ease: "power2.inOut",
                duration: 0
            }, 1),
            this.tl.to(this.camera2, {
                originRotation: 0,
                lerpedOriginRotation: 0,
                ease: "power2.inOut",
                duration: 0
            }, 1),
            this.leafShader && this.tl.to(this.leafShader.uniforms.glowIntensity, {
                value: w[i].leafsGlowIntensity,
                duration: 1,
                ease: "power3.inOut"
            }, 0),
            this.tl.to(this, {
                transition: 1 - this.current,
                duration: 1,
                ease: "power3.inOut"
            }, .2),
            this.tl.to(this[`camera${1 + this.current}`], {
                _yDecay: -.7 * t,
                duration: .9,
                ease: "sine.in"
            }, 0),
            this.tl.fromTo(this[`camera${2 - this.current}`], {
                _yDecay: .5 * t
            }, {
                _yDecay: 0,
                duration: 4,
                ease: "power4.out"
            }, 0)
        }
    }
    updateCameraProgress(i) {
        var t;
        (t = this.cameraTarget) != null && t.position && (i._initialPosition.lerpVectors(this.cameraInitial.position, this.cameraTarget.position, this.cameraTargetProgress),
        i._initialQuaternion.slerpQuaternions(this.cameraInitial.quaternion, this.cameraTarget.quaternion, this.cameraTargetProgress))
    }
    renderFromCamera(i) {
        this[`glow${i}`] && (this[`glow${i}`].visible = !0),
        this.renderer.setRenderTarget(this[`renderTarget${i}`]),
        this.renderer.clear(),
        this.renderer.render(this.scene, this[`camera${i}`]),
        this[`glow${i}`] && (this[`glow${i}`].visible = !1)
    }
    setBackgroundImages(i) {
        this.backgroundImagesSrc = [...new Set(i)],
        this.loadBackgroundImages()
    }
    setBackgroundImage(i, t) {
        var e;
        if (typeof this.backgroundImages > "u") {
            this.setBackgroundImageWhenLoaded = {
                src: i,
                direction: t
            };
            return
        }
        i != this.lastSrc && (this.lastSrc = i,
        (e = this.bitl) == null || e.kill(),
        this.bitl = n.timeline(),
        this.bitl.to(this.renderPlane.material.uniforms.backgroundImageVisibility, {
            value: 1 + t,
            ease: "power2.in",
            duration: 1
        }),
        this.bitl.add( () => {
            this.renderPlane.material.uniforms.tBackgroundImage.value = this.backgroundImages[i],
            this.renderPlane.material.uniforms.backgroundImageRatio.value = this.backgroundImages[i].image.naturalHeight / this.backgroundImages[i].image.naturalWidth
        }
        , 1),
        this.bitl.set(this.renderPlane.material.uniforms.backgroundImageVisibility, {
            value: 1 - t
        }),
        this.bitl.to(this.renderPlane.material.uniforms.backgroundImageVisibility, {
            value: 1,
            ease: "power2.out",
            duration: 1.2
        }))
    }
    showBackgroundImage() {
        var i;
        (i = this.itl) == null || i.kill(),
        this.itl = n.timeline(),
        this.itl.fromTo(this.renderPlane.material.uniforms.backgroundImageVisibility, {
            value: 0
        }, {
            value: 1,
            ease: "power3.out",
            duration: 2
        }, .5),
        this.itl.to(this.renderPlane.material.uniforms.backgroundBlendFade, {
            value: 1,
            ease: "linear"
        }, 0)
    }
    hideBackgroundImage() {
        var i;
        (i = this.itl) == null || i.kill(),
        this.itl = n.timeline(),
        this.itl.to(this.renderPlane.material.uniforms.backgroundImageVisibility, {
            value: 2,
            ease: "power2.in",
            duration: 1
        }),
        this.itl.to(this.renderPlane.material.uniforms.backgroundBlendFade, {
            value: 0,
            ease: "linear",
            duration: 1
        }, 0)
    }
    setCameraOriginRotation(i) {
        this[`camera${2 - this.current}`].originRotation = i * .1
    }
    async loadBackgroundImages() {
        this.backgroundImages = Object.fromEntries(await Promise.all(this.backgroundImagesSrc.map(i => new Promise(t => this.textureLoader.load(i, e => t([i, e])))))),
        typeof this.setBackgroundImageWhenLoaded < "u" && this.setBackgroundImage(this.setBackgroundImageWhenLoaded.src, this.setBackgroundImageWhenLoaded.direction)
    }
    get transition() {
        return this.renderPlane.material.uniforms.transition.value
    }
    set transition(i) {
        this.renderPlane.material.uniforms.transition.value = i
    }
    get whiteVersion() {
        return this.renderPlane.material.uniforms.whiteVersion.value
    }
    set whiteVersion(i) {
        this.renderPlane.material.uniforms.whiteVersion.value = i
    }
    get backgroundVisibility() {
        return this._backgroundVisibility
    }
    set backgroundVisibility(i) {
        this._backgroundVisibility = i
    }
}
class se extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "open", () => {
            var t;
            (t = this.openTl) == null || t.kill(),
            this.openTl = n.timeline(),
            this.openTl.to(this.background, {
                introValue: 0,
                duration: 4,
                ease: "sixty.intro"
            })
        }
        );
        o(this, "onBlur", () => {}
        );
        o(this, "onFocus", () => {}
        );
        o(this, "onMove", ({xy: [t,e]}) => {
            this.background.setParallax(t / this.viewport.width * 2 - 1, e / this.viewport.height * 2 - 1)
        }
        );
        this.background = new ie(this.element),
        this._longpress = 0
    }
    attach() {
        this.viewport.on("resize", this.background.resize),
        this.bootstrap.loader.on("loaded", this.open),
        window.addEventListener("blur", this.onBlur),
        window.addEventListener("focus", this.onFocus),
        this.background.attach(),
        this.gesture = new G(window,{
            onDrag: this.onMove,
            onMove: this.onMove
        },{
            drag: {
                filterTaps: !0
            },
            enabled: !0
        })
    }
    detach() {
        this.viewport.off("resize", this.background.resize)
    }
    setCamera(t, e, s, r) {
        var a;
        t != "Intro" && ((a = this.openTl) == null || a.kill(),
        this.background.introValue = 0),
        this.background.setCamera(t, e, s, r)
    }
    setBackgroundImages(t) {
        this.background.setBackgroundImages(t)
    }
    setBackgroundImage(t, e) {
        this.background.setBackgroundImage(t, e == 0 ? 1 : e)
    }
    showBackgroundImage() {
        this.background.showBackgroundImage()
    }
    hideBackgroundImage() {
        this.background.hideBackgroundImage()
    }
    setCameraOriginRotation(t) {
        this.background.setCameraOriginRotation(t)
    }
    get whiteVersion() {
        return this.background.whiteVersion
    }
    set whiteVersion(t) {
        this.background.whiteVersion = t
    }
    get backgroundVisibility() {
        return this.background.backgroundVisibility
    }
    set backgroundVisibility(t) {
        this.background.backgroundVisibility = t
    }
    get longpress() {
        return this._longpress
    }
    set longpress(t) {
        this._longpress = t,
        this.background.longpress = t,
        this.background.renderPlane.material.uniforms.longpress.value = t,
        this.background.trunkShader.uniforms.longpress.value = t,
        this.background.leafShader.uniforms.longpress.value = t,
        this.background.rootsShader.uniforms.longpress.value = t,
        this.background.fruits1.material.uniforms.longpress.value = t,
        this.background.fruits2.material.uniforms.longpress.value = t,
        this.background.fruits2.material.uniforms.longpress.value = t
    }
}
class ne extends f {
    constructor(i, t) {
        super(i, t),
        this.filtersWrapper = i.querySelector(".filters"),
        this.filtersWrapper && (this.lines = Array.from(i.querySelectorAll(".line")).map( (e, s) => ({
            id: s,
            el: e,
            filter: e.dataset.filter
        })),
        this.filters = Array.from(this.filtersWrapper.querySelectorAll(".filter")).map( (e, s) => {
            const r = e.dataset.value;
            return {
                id: s,
                el: e,
                value: r
            }
        }
        ))
    }
    init() {}
    attach() {
        var i;
        (i = this.filters) == null || i.forEach(t => {
            t.onClick = this.filterClick.bind(this, t),
            t.el.addEventListener("click", t.onClick)
        }
        )
    }
    detach() {
        var i;
        (i = this.filters) == null || i.forEach(t => {
            t.el.removeEventListener("click", t.onClick)
        }
        )
    }
    filterClick(i) {
        if (i.el.classList.contains("active")) {
            i.id && this.filterClick(this.filters[0]);
            return
        }
        this.filters.forEach(t => {
            t.el.classList.toggle("active", t == i)
        }
        ),
        this.lines.forEach(t => {
            t.el.classList.toggle("disabled", i.id != 0 && t.filter != i.value)
        }
        )
    }
}
class re extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "hideText", () => {
            this.element.classList.add("hide")
        }
        )
    }
    init() {}
    attach() {
        window.addEventListener("scroll", this.hideText)
    }
    detach() {
        window.removeEventListener("scroll", this.hideText)
    }
}
const oe = "static/assets";
class ae extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "_onMouseClick", () => {
            window.removeEventListener("click", this._onMouseClick),
            this.muteChanged()
        }
        );
        o(this, "muteChanged", t => {
            t ? this.pauseMusic() : this.playMusic()
        }
        );
        o(this, "pauseMusic", (t=!0) => {
            var e;
            this.muteButton.classList.add("paused"),
            this._resumeMusic = t,
            this.muted = !0,
            (e = this._tl) == null || e.kill(),
            this._tl = n.timeline(),
            this._tl.to(this.music, {
                volume: 0,
                duration: 1,
                ease: "power1.inOut"
            }),
            this._tl.add( () => this.music.pause())
        }
        );
        o(this, "onToggleSound", () => {
            this.muted ? this.playMusic() : this.pauseMusic(!1)
        }
        );
        o(this, "_visibilityChange", () => {
            document.visibilityState === "hidden" && this.music && !this.muted ? (this._resumeAudio = !0,
            this.music.pause()) : this._resumeAudio && (this._resumeAudio = !1,
            this.playMusic())
        }
        );
        this.muted = !0,
        this.music = this.createAudio(),
        this._resumeAudio = !1,
        this._resumeMusic = !0,
        this._tl = null,
        this.muteButton = document.querySelector("#header .sound")
    }
    attach() {
        document.addEventListener("visibilitychange", this._visibilityChange),
        window.addEventListener("click", this._onMouseClick),
        this.muteButton.addEventListener("click", this.onToggleSound)
    }
    createAudio() {
        const t = new Audio(`${oe}/alireza-music.mp3`);
        return t.loop = !0,
        t.volume = .25,
        t
    }
    playMusic() {
        var t;
        this.muteButton.classList.remove("paused"),
        this._resumeMusic = !1,
        this.muted = !1,
        (t = this._tl) == null || t.kill(),
        this._tl = n.timeline(),
        this.music.play(),
        this._tl.to(this.music, {
            volume: .25,
            duration: 1,
            ease: "power1.inOut"
        })
    }
}
class le extends f {
    constructor(t, e) {
        super(t, e);
        o(this, "resize", () => {
            this.oldWidth !== window.innerWidth && (window.innerWidth < 1024 && this.root.style.setProperty("--full-height-mobile", window.innerHeight + "px"),
            this.oldWidth = window.innerWidth)
        }
        );
        this.root = document.querySelector(":root")
    }
    attach() {
        window.addEventListener("resize", this.resize)
    }
    detach() {
        window.removeEventListener("resize", this.resize)
    }
}
const he = Object.freeze(Object.defineProperty({
    __proto__: null,
    HomepageBreadcrumb: Pt,
    Slideshow: $t,
    Quotes: Mt,
    AjaxForm: Nt,
    ValuesSlideshow: Ot,
    CursorMoveBackground: Rt,
    Homepage: qt,
    SectorOfActivities: Ut,
    SingleOffer: Ft,
    QuatreCentQuatre: Bt,
    Parallax: Wt,
    Header: zt,
    GlobalWebGLBackground: se,
    JobsList: ne,
    ScrollToDiscover: re,
    Sound: ae,
    Body: le
}, Symbol.toStringTag, {
    value: "Module"
}));
class m {
    constructor(i, t=null, e=null) {
        this.element = i,
        this.props = t,
        this.bootstrap = e,
        this.t = null
    }
    timeline() {
        return this.t && this.t.clear(),
        n.timeline()
    }
}
class ce extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.splitText && this.splitText.revert(),
            this.splitText = new v(this.element,{
                type: "words"
            })
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.splitText.words, {
                color: "#C38C5C",
                y: 60,
                opacity: 0
            })
        }
        );
        o(this, "timeline", () => (this.t && this.t.clear(),
        this.t = n.timeline(),
        this.t.to(this.splitText.words, {
            color: "#FFFFFF",
            duration: .7,
            ease: "power2.inout",
            stagger: .1
        }, 0),
        this.t.to(this.splitText.words, {
            y: 0,
            duration: 2,
            ease: "power4.out",
            stagger: .1
        }, 0),
        this.t.to(this.splitText.words, {
            opacity: 1,
            duration: 1,
            ease: "none",
            stagger: .1
        }, 0),
        this.t));
        this.splitText = null
    }
}
class de extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {}
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.element, {
                y: 40,
                opacity: 0
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.element, {
                opacity: 1,
                duration: 1.3,
                ease: "none"
            }, t),
            this.t.to(this.element, {
                y: 0,
                duration: 2.2,
                ease: "power2.out"
            }, t),
            this.t
        }
        )
    }
}
class ue extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.splitText && this.splitText.revert(),
            this.splitText = new v(this.element.querySelectorAll("p"),{
                type: "words"
            })
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.splitText.words, {
                y: 40,
                opacity: 0
            })
        }
        );
        o(this, "timeline", () => (this.t && this.t.clear(),
        this.t = n.timeline(),
        this.t.to(this.splitText.words, {
            opacity: 1,
            duration: 1.4,
            ease: "none",
            stagger: .04
        }),
        this.t.to(this.splitText.words, {
            y: 0,
            duration: 1.8,
            ease: "power2.out",
            stagger: .04
        }, "0"),
        this.t));
        this.splitText = null
    }
}
class me extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.splitText && this.splitText.revert(),
            this.splitText = new v(this.element,{
                type: "chars"
            })
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.splitText.chars, {
                opacity: 0
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t = this.element.dataset.animationDelay),
            this.t.to(this.splitText.chars, {
                opacity: 1,
                duration: 2.6,
                ease: "power2.out",
                stagger: {
                    each: .03
                }
            }, t),
            this.t
        }
        );
        this.splitText = null
    }
}
class pe extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.splitText && this.splitText.revert(),
            this.splitText = new v(this.element,{
                type: "words"
            })
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.splitText.words, {
                y: 50,
                opacity: 0,
                rotate: 3
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk));
            const e = this.splitText.words.length > 10 ? .03 : .08;
            return this.t.to(this.splitText.words, {
                y: 0,
                rotate: 0,
                duration: 1.5,
                ease: "power2.out",
                stagger: e
            }, t),
            this.t.to(this.splitText.words, {
                opacity: 1,
                duration: 2,
                ease: "none",
                stagger: e
            }, t),
            this.t
        }
        );
        this.splitText = null
    }
}
class fe extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.splitText && this.splitText.revert(),
            this.splitText = new v(this.element,{
                type: "lines, chars"
            })
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.splitText.chars, {
                opacity: 0
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.splitText.chars, {
                opacity: 1,
                duration: 2,
                ease: "none",
                stagger: {
                    each: .085
                }
            }, t),
            this.t
        }
        );
        this.splitText = null
    }
}
class ge extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.mainSplit && this.mainSplit.revert(),
            this.animSplit && this.animSplit.revert(),
            this.mainSplit = new v(this.mainText,{
                type: "chars"
            }),
            this.animSplit = new v(this.animText,{
                type: "chars"
            }),
            n.set(this.animSplit.chars, {
                y: 20,
                opacity: 0
            }),
            n.set(this.mainSplit.chars, {
                y: 0,
                opacity: 1
            });
            let t = .015;
            this.mainSplit.chars.length > 15 && (t = .008),
            this.animTl = n.timeline({
                paused: !0
            }),
            this.animTl.to(this.animSplit.chars, {
                y: -40,
                duration: 1,
                ease: "power3.inOut",
                stagger: t
            }, 0),
            this.animTl.to(this.animSplit.chars, {
                opacity: 1,
                duration: 1,
                ease: "power3.inOut",
                stagger: t
            }, 0),
            this.animTl.to(this.circle, {
                y: "-70px",
                duration: 1,
                ease: "power3.inOut"
            }, 0),
            this.mainTl = n.timeline({
                paused: !0
            }),
            this.mainTl.to(this.mainSplit.chars, {
                y: -20,
                duration: 1,
                ease: "power3.inOut",
                stagger: t
            }, 0),
            this.mainTl.to(this.mainSplit.chars, {
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
                stagger: t
            }, 0)
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            this.element.hasAttribute("data-animation-no-intro") || (n.set(this.mainSplit.chars, {
                opacity: 0
            }),
            n.set(this.animSplit.chars, {
                opacity: 0
            }),
            this.element.classList.add("hide-border"),
            this.element.style.pointerEvents = "none")
        }
        );
        o(this, "timeline", () => {
            if (this.t && this.t.clear(),
            !this.element.hasAttribute("data-animation-no-intro")) {
                this.t = n.timeline({
                    onComplete: () => {
                        this.element.style.pointerEvents = "all"
                    }
                });
                let t = 0;
                this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
                this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
                this.t.to(this.mainSplit.chars, {
                    opacity: 1,
                    duration: .4,
                    ease: "none",
                    stagger: .03
                }, t),
                this.t.add( () => {
                    this.element.classList.remove("hide-border")
                }
                , "< 0.3" + t)
            }
            return this.t
        }
        );
        o(this, "mouseEnter", () => {
            this.animTl.play(),
            this.mainTl.play()
        }
        );
        o(this, "mouseLeave", () => {
            this.animTl.reverse(),
            this.mainTl.reverse()
        }
        );
        this.mainSplit = null,
        this.animSplit = null,
        this.mainText = this.element.querySelector(".main-text"),
        this.animText = this.element.querySelector(".anim-text"),
        this.circle = this.element.querySelector(".circle"),
        this.element.addEventListener("mouseenter", this.mouseEnter),
        this.element.addEventListener("mouseleave", this.mouseLeave)
    }
}
class ve extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            n.set(this.animText, {
                opacity: 0,
                y: 20
            }),
            this.animTl = n.timeline({
                paused: !0
            }),
            this.animTl.to(this.animText, {
                y: -40,
                duration: .8,
                ease: "power1.inOut"
            }, 0),
            this.animTl.to(this.animText, {
                opacity: 1,
                duration: .4,
                ease: "power1.inOut"
            }, 0),
            this.animTl.to(this.circle, {
                y: "-70px",
                duration: 1,
                ease: "power4.inOut"
            }, 0),
            this.mainTl = n.timeline({
                paused: !0
            }),
            this.mainTl.to(this.mainText, {
                y: -20,
                duration: 1,
                ease: "power1.inOut"
            }, 0),
            this.mainTl.to(this.mainText, {
                opacity: 0,
                duration: .6,
                ease: "power1.inOut"
            }, 0)
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            this.element.hasAttribute("data-animation-no-intro") || (n.set(this.mainText, {
                opacity: 0
            }),
            this.element.classList.add("hide-border"),
            this.element.style.pointerEvents = "none")
        }
        );
        o(this, "timeline", () => {
            if (this.t && this.t.clear(),
            !this.element.hasAttribute("data-animation-no-intro")) {
                this.t = n.timeline({
                    onComplete: () => {
                        this.element.style.pointerEvents = "all"
                    }
                });
                let t = 0;
                this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
                this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
                this.t.to(this.mainText, {
                    opacity: 1,
                    duration: .4,
                    ease: "none"
                }, t),
                this.t.add( () => {
                    this.element.classList.remove("hide-border")
                }
                , "< 0.3" + t)
            }
            return this.t
        }
        );
        o(this, "mouseEnter", () => {
            this.animTl.play(),
            this.mainTl.play()
        }
        );
        o(this, "mouseLeave", () => {
            this.animTl.reverse(),
            this.mainTl.reverse()
        }
        );
        this.mainText = this.element.querySelector(".main-text"),
        this.animText = this.element.querySelector(".anim-text"),
        this.circle = this.element.querySelector(".circle"),
        this.element.addEventListener("mouseenter", this.mouseEnter),
        this.element.addEventListener("mouseleave", this.mouseLeave)
    }
}
class ye extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {}
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.element, {
                opacity: 0,
                y: 10
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.element, {
                opacity: 1,
                duration: .7,
                ease: "none"
            }, t),
            this.t.to(this.element, {
                y: 0,
                duration: 1.6,
                ease: "power2.out"
            }, t),
            this.t
        }
        )
    }
}
class _e extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.splitText && this.splitText.revert(),
            this.splitText = new v(this.element,{
                type: "chars"
            })
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.splitText.chars, {
                opacity: 0
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.splitText.chars, {
                opacity: 1,
                duration: 3,
                ease: "power2.out",
                stagger: .001 * this.splitText.chars.length
            }, t),
            this.t
        }
        );
        this.splitText = null
    }
}
class be extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.textChildren.forEach(t => {
                t.splitText && t.splitText.revert()
            }
            ),
            this.textChildren = Array.from(this.element.querySelectorAll(".list-child-anim-text")).map(t => ({
                element: t,
                splitText: new v(t,{
                    type: "chars"
                }),
                border: !!t.hasAttribute("data-border")
            })),
            this.iconChildren = Array.from(this.element.querySelectorAll(".list-child-anim-icon")).map(t => ({
                element: t
            }))
        }
        );
        o(this, "reset", () => {
            this.textChildren.forEach(t => {
                n.set(t.splitText.chars, {
                    opacity: 0
                }),
                t.border && (n.set(t.element, {
                    borderBottomColor: "transparent"
                }),
                n.set(t.element, {
                    borderTopColor: "transparent"
                }))
            }
            ),
            this.iconChildren.forEach(t => {
                n.set(t.element, {
                    opacity: 0,
                    y: 0
                })
            }
            )
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.textChildren.forEach( (s, r) => {
                this.t.to(s.splitText.chars, {
                    opacity: 1,
                    ease: "none",
                    duration: 1.6,
                    stagger: .03
                }, r * .1 + t),
                s.border && this.t.to(s.element, {
                    borderBottomColor: "rgba(255, 255, 255, 0.07)",
                    borderTopColor: "rgba(255, 255, 255, 0.07)",
                    ease: "none",
                    duration: 1.6
                }, r * .1 + t)
            }
            );
            const e = this.iconChildren.map(s => s.element);
            return this.t.to(e, {
                opacity: 1,
                ease: "none",
                duration: 1,
                stagger: .025
            }, t),
            this.t
        }
        );
        this.splitText = null,
        this.textChildren = [],
        this.iconChildren = []
    }
}
class xe extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            this.children = this.element.querySelectorAll(".list-child-anim-icon, .list-child-anim-text")
        }
        );
        o(this, "reset", () => {
            n.set(this.children, {
                opacity: 0,
                y: 0
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.children, {
                opacity: 1,
                ease: "none",
                duration: 1.6,
                stagger: .08
            }, t),
            this.t
        }
        );
        this.children = []
    }
}
class we extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {}
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.element, {
                yPercent: 25,
                scale: 1
            })
        }
        );
        o(this, "timeline", () => (this.t && this.t.clear(),
        this.t = n.timeline(),
        this.t.to(this.element, {
            yPercent: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
        }, 0),
        this.t))
    }
}
class Se extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {}
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.element, {
                opacity: 0,
                y: 20
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.element, {
                opacity: 1,
                duration: 2,
                ease: "none"
            }, t),
            this.t.to(this.element, {
                y: 0,
                duration: 2.6,
                ease: "power2.out"
            }, t),
            this.t
        }
        )
    }
}
class ke extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {}
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.element, {
                opacity: 0
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.element, {
                opacity: 1,
                duration: 1.5,
                ease: "none"
            }, t),
            this.t
        }
        )
    }
}
class Te extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            n.set(this.element, {
                scale: 1.4,
                opacity: 0
            })
        }
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.element, {
                scale: 1.4,
                opacity: 0
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.element, {
                opacity: 1,
                duration: .6,
                ease: "none"
            }, t),
            this.t.to(this.element, {
                scale: 1.04,
                ease: "expo.out",
                duration: 4
            }, t),
            this.t
        }
        )
    }
}
class Ee extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {}
        );
        o(this, "reset", () => {
            this.t && this.t.kill(),
            n.set(this.element, {
                y: "20vh"
            })
        }
        );
        o(this, "timeline", () => {
            this.t && this.t.clear(),
            this.t = n.timeline();
            let t = 0;
            return this.element.dataset.animationDelay && (t += parseFloat(this.element.dataset.animationDelay)),
            this.element.dataset.animationDelayDk && window.innerWidth > 789 && (t += parseFloat(this.element.dataset.animationDelayDk)),
            this.t.to(this.element, {
                y: 0,
                duration: 2,
                ease: "power3.out"
            }, t),
            this.t
        }
        )
    }
}
class Le extends m {
    constructor(t, e) {
        super(t, e);
        o(this, "compute", () => {
            document.querySelector("#root").classList.contains("lang-ar") || (this.discoverSplit = new v(this.discoverText,{
                type: "chars",
                charsClass: "char char-++"
            }))
        }
        );
        o(this, "reset", () => {
            n.set(this.discoverText, {
                opacity: 0
            }),
            n.set(this.discoverCircle, {
                strokeDashoffset: 300
            }),
            this.discoverBars.forEach(t => {
                t.style.animation = ""
            }
            )
        }
        );
        o(this, "timeline", () => (this.t && this.t.clear(),
        this.t = n.timeline({}),
        this.t.to(this.element, {
            opacity: 1,
            ease: "none",
            duration: .5
        }, 1),
        this.t.to(this.discoverCircle, {
            strokeDashoffset: 0,
            ease: "none",
            duration: 1.2
        }, 1),
        this.t.to(this.discoverText, {
            opacity: 1,
            ease: "none",
            duration: .5
        }, 2.2),
        this.t.add( () => {
            this.discoverBars.forEach( (t, e) => {
                e == 0 ? t.style.animation = "barBackground 10s ease infinite" : t.style.animation = "barBackground 10s 5s ease infinite"
            }
            )
        }
        , 1),
        this.t));
        this.discoverCircle = this.element.querySelector(".circle-svg"),
        this.discoverBars = this.element.querySelectorAll(".bar"),
        this.discoverText = this.element.querySelector(".scroll-discover-text")
    }
}
const Ce = Object.freeze(Object.defineProperty({
    __proto__: null,
    MainTitle: ce,
    ParaText: de,
    ParaTextChildren: ue,
    Subtitle: me,
    LongTitle: pe,
    ShortTitle: fe,
    RoundedButton: ge,
    RoundedButtonArab: ve,
    Fade: ye,
    FadeText: _e,
    List: be,
    ListArab: xe,
    Image: we,
    SlideshowTitle: Se,
    Opacity: ke,
    ScaleDown: Te,
    FadeImage: Ee,
    ScrollDiscover: Le
}, Symbol.toStringTag, {
    value: "Module"
}));
class V extends S {
    constructor(t) {
        super(t);
        o(this, "handleRouterChange", () => {
            this.targets.forEach(t => {
                var e, s, r, a;
                if ((s = (e = t.anim) == null ? void 0 : e.reset) == null || s.call(e),
                t.elem.hasAttribute("data-no-kill") && t.elem.hasAttribute("data-animation")) {
                    this.fixedTargets.push(t),
                    t.elem.removeAttribute("data-animation");
                    return
                }
                (a = (r = t.tl) == null ? void 0 : r.kill) == null || a.call(r)
            }
            ),
            this.fillTargets(),
            this.build(),
            this.emit("built")
        }
        );
        this.dependencies.add(E),
        this.onResize = this.onResize.bind(this),
        this.targets = [],
        this.fixedTargets = [],
        this.animations = null,
        this.stagger = .08,
        this.acceptedArabAnimations = ["Fade", "Image", "Opacity", "ParaText", "SlideshowTitle", "ScrollDiscover"],
        this.customArabAnimations = ["RoundedButton", "List"],
        this.root = document.querySelector("#root")
    }
    register(t) {
        this.animations = t
    }
    async after() {}
    async before() {}
    onResize() {
        this.build(!0),
        this.targets.forEach(t => {
            var e, s;
            t.noScroll && ((s = (e = t.anim) == null ? void 0 : e.compute) == null || s.call(e))
        }
        )
    }
    build(t=!0) {
        for (let e = 0; e < this.targets.length; e++)
            this.targets[e].top = this.targets[e].elem.getBoundingClientRect().top,
            e && Math.abs(this.targets[e].top - this.targets[e - 1].top) < 10 && (this.targets[e].same = this.targets[e - 1].same + 1);
        this.targets.forEach(e => {
            if (!!e.active && !e.noScroll) {
                if (e.played && e.top > window.scrollY + this.bootstrap.viewport.height) {
                    e.anim.reset();
                    return
                }
                (t || e.buildAtResize) && (e.tl && e.tl.kill(),
                e.anim.repeat ? e.tl = n.timeline({
                    scrollTrigger: {
                        trigger: e.elem,
                        onLeaveBack: () => {
                            e.anim.reset()
                        }
                        ,
                        toggleActions: "play complete none reset"
                    }
                }) : e.tl = n.timeline({
                    scrollTrigger: {
                        trigger: e.elem,
                        once: !0,
                        toggleActions: "play complete none none"
                    }
                }),
                e.anim.hasLeaveAnim && (e.tlLeave = I.create({
                    trigger: e.elem,
                    start: "bottom 18%",
                    end: "60% top",
                    animation: e.anim.timelineLeave(),
                    toggleActions: "play none reverse reverse"
                })),
                e.tl.add(e.anim.timeline(), 0),
                e.tl.add( () => {
                    e.played = !0
                }
                ))
            }
        }
        )
    }
    fillTargets() {
        this.targets = Array.from(document.querySelectorAll("[data-animation]")).map(t => {
            var r;
            const e = {};
            let s = t.getAttribute("data-animation");
            return this.root.classList.contains("lang-ar") && (!this.acceptedArabAnimations.includes(s) && !this.customArabAnimations.includes(s) ? s = "Fade" : this.customArabAnimations.includes(s) && (s += "Arab")),
            (r = t.getAttribute("data-props")) == null || r.split(";").map(a => a.split(":")).forEach(a => {
                e[a[0]] = a[1]
            }
            ),
            {
                elem: t,
                anim: s,
                props: e,
                tl: null,
                player: !1,
                active: !1,
                delay: 0,
                top: 0,
                same: 0,
                noScroll: t.hasAttribute("data-no-scroll")
            }
        }
        ),
        this.fixedTargets.forEach(t => {
            var e, s, r, a, l, h;
            (s = (e = t.tl) == null ? void 0 : e.kill) == null || s.call(e),
            t.tl = n.timeline({
                scrollTrigger: {
                    trigger: t.elem,
                    once: !0,
                    toggleActions: "play none none none"
                }
            }),
            t.played = !1,
            t.tl.add(t.anim.timeline(), t.same * this.stagger),
            t.tl.add( () => {
                t.played = !0
            }
            ),
            (a = (r = t.anim) == null ? void 0 : r.compute) == null || a.call(r),
            (h = (l = t.anim) == null ? void 0 : l.reset) == null || h.call(l),
            this.targets.push(t)
        }
        ),
        this.targets.forEach(t => {
            !this.animations[t.anim] || (t.active = !0,
            t.anim = new this.animations[t.anim](t.elem,t.props,this.bootstrap),
            t.anim.compute(),
            t.anim.reset())
        }
        )
    }
    async run() {
        this.isAttached || (this.bootstrap.viewport.on("resize", this.onResize),
        this.bootstrap.loader.on("changed", this.handleRouterChange),
        this.isAttached = !0),
        this.bootstrap.loader.on("loaded", this.handleRouterChange)
    }
    get(t) {
        return this.targets.find(e => e.elem == t)
    }
}
const De = new URLSearchParams(window.location.search);
class H extends S {
    constructor(i) {
        super(i),
        this.dependencies.add(lt),
        this.dependencies.add(E),
        this.viewport = i.viewport,
        this.first = !0,
        this.root = document.querySelector("#root"),
        this.$loader = document.querySelector("#loader"),
        this.$logo = this.$loader.querySelector(".logo-img"),
        this.$circles = this.$loader.querySelectorAll(".loader-circle"),
        this.$whiteCircle = this.$loader.querySelector(".white-circle"),
        this.$animatedCircle = this.$loader.querySelector(".loader-animated-circle"),
        this.$text = this.$loader.querySelector(".loader-text"),
        this.$enter = this.$loader.querySelector(".enter"),
        this.$bgImg = this.$loader.querySelector(".bg-img"),
        this.$terms = this.$loader.querySelector(".terms"),
        this.$termsSpan1 = this.$loader.querySelector(".terms .span1"),
        this.$termsSpan2 = this.$loader.querySelector(".terms .span2"),
        this.entered = !1,
        this.arab = this.$loader.classList.contains("lang-ar")
    }
    async before() {
        if (document.dir = "",
        !this.first) {
            const i = n.timeline();
            i.set(this.$loader, {
                display: "block"
            }),
            i.to(this.$loader, {
                opacity: 1,
                duration: .6,
                ease: "none"
            }),
            i.fromTo(this.$logo, {
                opacity: 0,
                scale: 1
            }, {
                opacity: 1,
                scale: 1.2,
                duration: .4,
                ease: "power3.out"
            }, "<+0.4")
        }
        this.arab ? (n.set(this.$enter, {
            opacity: 0
        }),
        n.set(this.$terms, {
            opacity: 0
        })) : (this.enterSplit = new v(this.$enter,{
            type: "chars"
        }),
        n.set(this.enterSplit.chars, {
            opacity: 0,
            yPercent: 10
        }),
        this.termsSplit = new v(this.$terms,{
            type: "chars"
        }),
        n.set(this.termsSplit.chars, {
            opacity: 0,
            yPercent: 10
        }))
    }
    async after() {
        this.bootstrap.scroller.main.stop();
        const i = n.timeline();
        this.first ? (window.loaderTimeout && clearTimeout(window.loaderTimeout),
        De.has("skip") ? i.add( () => {
            this.emit("loaded"),
            this.bootstrap.scroller.main.start()
        }
        , "<") : (i.set(this.root, {
            opacity: 0
        }),
        n.set(this.$whiteCircle, {
            strokeDashoffset: "0"
        }, "<"),
        i.to(window, {
            loaderProgress: 100,
            duration: 1.4
        }, 0),
        i.set(this.$text, {
            animation: "none"
        }),
        i.to(this.$text, {
            opacity: 0,
            duration: .2,
            ease: "power2.inOut"
        }),
        i.add( () => {
            this.$logo.classList.add("scale-up-small"),
            this.$logo.classList.remove("flicker")
        }
        , "<"),
        i.add( () => this.$circles.forEach(t => t.classList.add("scale-up-small")), "<+=.5"),
        i.to(this.$whiteCircle, {
            strokeOpacity: 1,
            ease: "none",
            duration: 1
        }, "<"),
        i.add( () => this.$logo.style.animation = "none", "<"),
        i.set(this.$logo, {
            opacity: 0
        }, "<"),
        i.to(this.$circles[0], {
            opacity: .1
        }, "<"),
        i.add( () => {
            this.$enter.classList.add("enter-hover"),
            this.$loader.addEventListener("click", () => {
                this.entered || (i.set(this.$loader, {
                    pointerEvents: "none"
                }, "<"),
                i.to(this.$terms, {
                    opacity: 0,
                    duration: .6,
                    ease: "none"
                }, "<"),
                i.to(this.$enter, {
                    opacity: 0,
                    duration: .6,
                    ease: "none"
                }, "<"),
                i.to(this.$animatedCircle, {
                    opacity: 0,
                    ease: "none",
                    duration: .4
                }, "<"),
                i.to(this.$whiteCircle, {
                    strokeDashoffset: "290",
                    duration: .5,
                    ease: "power2.inOut"
                }, "<+=.4"),
                i.to(this.$loader, {
                    opacity: 0,
                    duration: 3.5,
                    ease: "none"
                }, "<+=0.3"),
                i.add( () => {
                    this.emit("loaded")
                }
                , "<"),
                i.set(this.root, {
                    opacity: 1
                }, "<"),
                i.set(this.$loader, {
                    display: "none",
                    background: ""
                }),
                i.set(this.$loader, {
                    pointerEvents: "all"
                }, "<"),
                i.set(this.$enter, {
                    display: "none"
                }),
                i.set(this.$bgImg, {
                    opacity: 1
                }),
                i.add( () => this.bootstrap.scroller.main.start(), ">"),
                this.first = !1,
                this.entered = !0)
            }
            )
        }
        , "<+0.6"),
        this.arab || (i.set(this.$enter, {
            opacity: 1
        }, ">"),
        i.set(this.$terms, {
            opacity: 1
        }, ">")),
        i.set(this.$termsSpan1, {
            opacity: .5
        }, ">"),
        i.set(this.$termsSpan2, {
            opacity: 1
        }, ">"),
        this.arab ? (i.to(this.$enter, {
            opacity: 1,
            duration: 1.4,
            ease: "none"
        }, "<"),
        i.to(this.$terms, {
            opacity: 1,
            duration: 1.4,
            ease: "none"
        }, "<")) : (i.to(this.enterSplit.chars, {
            opacity: 1,
            duration: .8,
            ease: "none",
            stagger: {
                each: .1
            }
        }, "<"),
        i.to(this.enterSplit.chars, {
            yPercent: 0,
            duration: .16,
            ease: "power2.out",
            stagger: {
                each: .1
            }
        }, "<"),
        i.to(this.termsSplit.chars, {
            opacity: 1,
            duration: .8,
            ease: "none",
            stagger: {
                each: .01
            }
        }, "<"),
        i.to(this.termsSplit.chars, {
            yPercent: 0,
            duration: .16,
            ease: "power2.out",
            stagger: {
                each: .01
            }
        }, "<")))) : (i.to(this.$logo, {
            opacity: 0,
            duration: .2,
            ease: "none"
        }, .5),
        i.to(this.$loader, {
            opacity: 0,
            duration: .5,
            ease: "none"
        }, 1),
        i.set(this.$loader, {
            display: "none"
        }, 1.5),
        i.add( () => {
            this.emit("changed")
        }
        , 1),
        i.add( () => this.bootstrap.scroller.main.start(), 3))
    }
}
class lt extends S {
    constructor(i) {
        super(i),
        this.dependencies.add(st),
        this.dependencies.add(q),
        this.dependencies.add(A),
        this.dependencies.add(E),
        this.header = document.querySelector("header"),
        this.root = document.querySelector("#root"),
        this.footer = document.querySelector("#footer"),
        this.$backgroundElement = document.querySelector("[data-component=GlobalWebGLBackground]"),
        this.timeline = null
    }
    get viewport() {
        return this.bootstrap.get(E).viewport
    }
    get pageModule() {
        return this.bootstrap.get(st)
    }
    get ajaxPageModule() {
        return this.bootstrap.get(q)
    }
    get components() {
        return this.bootstrap.get(A).components
    }
    get loaderModule() {
        return this.bootstrap.get(H)
    }
    get previousComponent() {
        return this.pageModule.previous ? this.components.get(this.pageModule.previous) : null
    }
    get currentComponent() {
        return this.pageModule.current ? this.components.get(this.pageModule.current) : null
    }
    async before() {
        return this.timeline && this.timeline.kill(),
        this.timeline = n.timeline(),
        this.pageModule.autoRemove = !1,
        new Promise(i => {
            this.pageModule.current ? (this.timeline.addLabel("close", 0),
            this.timeline.add( () => this.emit("close"), ">"),
            this.timeline.to(this.root, {
                opacity: 0,
                duration: .2
            }, 0),
            this.timeline.set(this.footer, {
                visibility: "hidden"
            }, 0),
            this.timeline.set(document.scrollingElement, {
                scrollTop: 0
            }),
            this.currentComponent && typeof this.currentComponent.close == "function" && this.timeline.add(this.currentComponent.close(), "close"),
            this.timeline.add( () => {
                this.pageModule.removeElement(this.pageModule.current),
                this.components.clean()
            }
            ),
            I.getAll().forEach(t => {
                t.vars.type && t.vars.type == "permanent" || (t.vars && t.vars.type == "delayedKill" ? this.timeline.add( () => t.kill()) : t.kill())
            }
            ),
            i()) : (this.timeline.set(document.scrollingElement, {
                scrollTop: 0
            }, .1),
            this.timeline.add(i))
        }
        )
    }
    async after() {
        let i = null;
        this.timeline && this.timeline.kill(),
        this.timeline = n.timeline(),
        this.timeline.set(document.scrollingElement, {
            scrollTop: 0
        }),
        this.timeline.set(this.footer, {
            visibility: "visible"
        }),
        this.pageModule.current && (i = this.pageModule.current.querySelectorAll("[data-fixed]"),
        document.body.prepend(...i)),
        this.pageModule.previous && (this.timeline.to(this.root, {
            opacity: 1,
            duration: .5
        }, 1),
        this.timeline.addLabel("open", "<")),
        this.timeline.set(document.body, {
            opacity: 1
        }, 0),
        this.currentComponent && typeof this.currentComponent.open == "function" && this.timeline.add(this.currentComponent.open(), 0),
        this.pageModule.current.dataset.theme == "light" ? (this.header.setAttribute("data-dark", ""),
        this.footer.setAttribute("data-dark", ""),
        this.timeline.to(this.components.get(this.$backgroundElement), {
            whiteVersion: 1,
            duration: 1
        }, 0)) : (this.header.removeAttribute("data-dark"),
        this.footer.removeAttribute("data-dark"),
        this.timeline.to(this.components.get(this.$backgroundElement), {
            whiteVersion: 0,
            duration: 1
        }, 0)),
        this.pageModule.current.id == "homepage" ? this.timeline.to(this.components.get(this.$backgroundElement), {
            backgroundVisibility: 1,
            duration: 2,
            ease: "expo.out"
        }, 1) : this.timeline.to(this.components.get(this.$backgroundElement), {
            backgroundVisibility: 0,
            duration: 1,
            ease: "expo.in"
        }, 0)
    }
    preventScroll(i) {
        i.stopPropagation(),
        i.preventDefault()
    }
}
class Ae extends S {
    constructor(t) {
        super(t);
        o(this, "update", () => {
            this.after()
        }
        );
        this.dependencies.add(U),
        this.selector = "[data-follow-link]",
        this.onClick = this.onClick.bind(this)
    }
    async after() {
        this.items && this.items.forEach(t => t.removeEventListener("click", this.onClick, !0)),
        this.items = document.querySelectorAll(this.selector),
        this.items.forEach(t => t.addEventListener("click", this.onClick, !0))
    }
    getParentAnchor(t) {
        return t && t.parentNode && t.tagName.toLowerCase() != "a" ? this.getParentAnchor(t.parentNode) : t == document ? null : t
    }
    getLink(t) {
        if (t.currentTarget.dataset.followLink)
            return {
                url: t.currentTarget.dataset.followLink,
                target: t.currentTarget.dataset.followLinkTarget ? t.currentTarget.dataset.followLinkTarget : "_self"
            };
        const e = [this.getParentAnchor(t.target), t.currentTarget.querySelector("a")];
        for (const s of e)
            if (s) {
                const r = s.getAttribute("href")
                  , a = s.getAttribute("target");
                if (r)
                    return {
                        url: r,
                        target: a || "_self"
                    }
            }
        return {
            url: t.currentTarget.dataset.followLink,
            target: t.currentTarget.dataset.followLinkTarget
        }
    }
    onClick(t) {
        if (t.target.tagName.toLowerCase() == "a")
            return;
        t.preventDefault(),
        t.stopPropagation(),
        t.stopImmediatePropagation();
        const e = this.getLink(t);
        if (e.target = t.metaKey || new Tt(e.url).external ? "_blank" : e.target,
        e.target == "_blank")
            return window.open(e.url);
        this.bootstrap._running ? window.location.href = e.url : this.bootstrap.router.set(e.url)
    }
}
class Ie extends S {
    constructor(i) {
        super(i),
        this.dependencies.add(U),
        this.selector = "[data-scrolltocustom]",
        this.onClick = this.onClick.bind(this)
    }
    async after() {
        this.items && this.items.forEach(i => i.removeEventListener("click", this.onClick, !0)),
        this.items = document.querySelectorAll(this.selector),
        this.items.forEach(i => i.addEventListener("click", this.onClick, !0))
    }
    onClick(i) {
        let t = 1;
        const e = i.currentTarget.dataset.scrolltocustom;
        i.currentTarget.dataset.scrolltoduration && (t = i.currentTarget.dataset.scrolltoduration);
        const s = document.querySelector('[data-scrolltotargetcustom="' + e + '"]');
        n.to(window, {
            scrollTo: s,
            duration: t,
            ease: "power2.inOut"
        })
    }
}
class Pe extends S {
    constructor(t) {
        super(t);
        o(this, "onEnter", t => {
            !this._isActive || (this.header.lightTheme = t.trigger.dataset.theme === "light")
        }
        );
        this.selector = "[data-theme]",
        this._isActive = !0,
        this.sts = []
    }
    get components() {
        return this.bootstrap.get(A).components
    }
    get header() {
        return this.components.get(document.querySelector("header"))
    }
    async after() {
        this.header.lightTheme = !1;
        const t = document.querySelectorAll(this.selector)
          , e = this.header.element.offsetHeight * .5;
        t == null || t.forEach(s => {
            this.sts.push(I.create({
                trigger: s,
                onEnter: this.onEnter,
                onEnterBack: this.onEnter,
                start: `-${e} top`,
                end: `+=100% - ${e}`
            }))
        }
        )
    }
    set isActive(t) {
        t && this.sts.forEach(e => e.refresh()),
        this._isActive = t
    }
}
class at extends S {
    constructor(t) {
        super(t);
        o(this, "tick", t => {
            this.instances.forEach(e => e.raf(t)),
            requestAnimationFrame(this.tick)
        }
        );
        this.instances = [],
        this.main = new nt(this.create()),
        this.add(this.main),
        this.tick()
    }
    add(t) {
        this.instances.push(t)
    }
    remove(t) {
        this.instances.remove(t)
    }
    create(t={}) {
        return t = Object.assign({
            duration: 1.2,
            easing: e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: !0,
            smoothTouch: !1
        }, t),
        new nt(t)
    }
}
class $e extends S {
    constructor(t) {
        super(t);
        o(this, "onClick", t => {
            t.preventDefault();
            let e = n.timeline();
            e.to([this.root, this.footer], {
                opacity: 0,
                duration: .8
            }, 0),
            e.call( () => {
                this.bootstrap.scroller.main.scrollTo(0, {
                    immediate: !0
                })
            }
            ),
            e.to([this.root, this.footer], {
                opacity: 1,
                duration: .8
            }, 1)
        }
        );
        this.root = document.querySelector("#root"),
        this.footer = document.querySelector("footer"),
        this.allLinks = document.querySelectorAll("a.pagelink")
    }
    async before() {
        this.allLinks.forEach(t => {
            t.removeEventListener("click", this.onClick)
        }
        )
    }
    async after() {
        this.allLinks = document.querySelectorAll("a.pagelink"),
        Array.from(this.allLinks).forEach(t => {
            window.location.href === t.href && t.addEventListener("click", this.onClick)
        }
        )
    }
}
class Me extends Et {
    constructor() {
        super(Lt, U, q, A, Ct, E, V, lt, Ae, H, Pe, Dt, at, Ie, $e),
        this.scrollerContent = document.querySelector("#smooth-content")
    }
    get components() {
        return this.get(A).components
    }
    get viewport() {
        return this.get(E).viewport
    }
    get router() {
        return this.get(U).router
    }
    get loader() {
        return this.get(H)
    }
    get animator() {
        return this.get(V)
    }
    get scroller() {
        return this.get(at)
    }
    preventScrolling(i) {
        i.stopPropagation(),
        i.preventDefault()
    }
}
n.registerPlugin(I);
n.registerPlugin(At);
n.registerPlugin(v);
n.registerPlugin(k);
n.config({
    force3D: !0
});
n.defaults({
    ease: "none",
    duration: .5
});
k.create("immg.zoomIn", "0.9, 0.0, 0.4, 1.0");
k.create("immg.zoomOut", "0.4, 0.0, 0.1, 1.0");
k.create("immg.posIn", "0.4, 0.0, 0.1, 1.0");
k.create("immg.posOut", "0.9, 0.0, 0.4, 1.0");
k.create("immg.expoOut", "0.14, 1.0, 0.34, 1.0");
k.create("immg.expoIn", "0.66, 0.0, 0.86, 0.0");
k.create("sixty.intro", "M0,0,C0.178,0.18,0.492,1,1,1");
const _ = new Me;
_.components.register(he);
const Ne = _.get(V);
Ne.register(Ce);
_.viewport.add({
    addClass: !1,
    name: "mobile"
});
_.viewport.add({
    addClass: !1,
    name: "tablet",
    minWidth: 768
});
_.viewport.add({
    addClass: !1,
    name: "desktop",
    minWidth: 1024,
    media: "(min-width: 1024px)"
});
_.viewport.add({
    addClass: !1,
    name: "large",
    minWidth: 1440
});
_.viewport.add({
    addClass: !1,
    name: "xlarge",
    minWidth: 1600
});
history.scrollRestoration && (history.scrollRestoration = "manual");
It.device.touch || document.querySelector("html").classList.add("notouch");
const j = _.get(q);
j.loader.options.params = {
    isAjax: 1
};
j.loader.options.cache = "force-cache";
j.loader.callback = async c => {
    try {
        const i = decodeURI(c.headers.get("X-Meta-Title"));
        i && (document.querySelector("head title").innerHTML = i)
    } catch (i) {
        console.error(i)
    }
}
;
(async function() {
    await _.run()
}
)();
