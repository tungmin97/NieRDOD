$(window).scroll(function() {
    $(".index .post-outer,.archive .post-outer").each(function() {
        $(this).find(".block-image .thumb a").attr("style", function(e, t) {
            return t.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("style", function(e, t) {
            return t.replace("s72-c", "s640")
        })
    })
}), $(document).ready(function() {
    var e = $("#sidetabs #left-tab .widget h2").text();
    $(".menu-tab .item-1 a").text(e);
    var t = $("#sidetabs #right-tab .widget h2").text();
    $(".menu-tab .item-2 a").text(t), $("#left-tab .widget h2,#right-tab .widget h2,#left-tab .widget-title,#right-tab .widget-title").remove(), $(this).find(".menu-tab li").addClass("hide-tab"), $(".sidetabs").tabslet({
        mouseevent: "click",
        attribute: "href",
        animation: !0
    }), 0 === $(".sidetabs .widget").length && $(".sidetabs").remove()
}), $(document).ready(function(e) {
    var t = e("a.newer-link"),
        a = e("a.older-link");
    e.get(t.attr("href"), function(a) {
        t.html("<strong>" + pagenav_next + "</strong><span>" + e(a).find(".post h1.post-title").text() + "</span>")
    }, "html"), e.get(a.attr("href"), function(t) {
        a.html("<strong>" + pagenav_prev + "</strong><span>" + e(t).find(".post h1.post-title").text() + "</span>")
    }, "html")
}), $(".ready-widget .HTML .widget-content span.labelpost").each(function() {
    var e = $(this).attr("data-label"),
        t = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + t,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var a = "", r = '<ul class="custom-widget">', n = 0; n < t.feed.entry.length; n++) {
                for (var s = 0; s < t.feed.entry[n].link.length; s++)
                    if ("alternate" == t.feed.entry[n].link[s].rel) {
                        a = t.feed.entry[n].link[s].href;
                        break
                    } var i = t.feed.entry[n].title.$t,
                    l = (t.feed.entry[n].category[0].term, t.feed.entry[n].author[0].name.$t),
                    c = t.feed.entry[n].published.$t,
                    d = c.substring(0, 4),
                    o = c.substring(5, 7),
                    f = c.substring(8, 10),
                    h = month_format[parseInt(o, 10)] + " " + f + ", " + d,
                    u = t.feed.entry[n].content.$t,
                    p = $("<div>").html(u);
                if (u.indexOf("//www.youtube.com/embed/") > -1) var m = t.feed.entry[n].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
                else m = u.indexOf("<img") > -1 ? p.find("img:first").attr("src").replace("s72-c", "s640") : no_image;
                r += '<li><a class="rcthumb" href="' + a + '" style="background:url(' + m + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="featured-title"><a href="' + a + '">' + i + '</a></h3><span class="recent-author">' + l + '</span><span class="recent-date">' + h + "</span></div></li>"
            }
            r += "</ul>", $(".ready-widget .HTML .widget-content span.labelpost").each(function() {
                $(this).attr("data-label") == e && $(this).parent().html(r)
            })
        }
    })
}), $(".recent-boxes .HTML .widget-content").each(function() {
    var e = $(this).find("span").attr("data-label"),
        t = $(this).find("span").attr("data-no"),
        a = $(this).prev("h2").text(),
        r = $(this).parent().attr("id"),
        n = $(this).find("span").attr("data-type");
    n.match("feat") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var n = "", s = "<ul>", i = 0; i < t.feed.entry.length; i++) {
                for (var l = 0; l < t.feed.entry[i].link.length; l++)
                    if ("alternate" == t.feed.entry[i].link[l].rel) {
                        n = t.feed.entry[i].link[l].href;
                        break
                    } var c = t.feed.entry[i].title.$t,
                    d = t.feed.entry[i].category[0].term,
                    o = t.feed.entry[i].author[0].name.$t,
                    f = t.feed.entry[i].published.$t,
                    h = f.substring(0, 4),
                    u = f.substring(5, 7),
                    p = f.substring(8, 10),
                    m = month_format[parseInt(u, 10)] + " " + p + ", " + h,
                    g = t.feed.entry[i].content.$t,
                    b = $("<div>").html(g);
                if (g.indexOf("//www.youtube.com/embed/") > -1) var v = t.feed.entry[i].media$thumbnail.url;
                else v = g.indexOf("<img") > -1 ? b.find("img:first").attr("src") : no_image;
                s += 0 == i ? '<div class="bx-first"><div class="bx-item"><div class="box-thumbnail"><a class="bf-thumb" href="' + n + '" style="background:url(' + v + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + d + '" href="/search/label/' + d + '">' + d + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + o + '</span><span class="recent-date">' + m + "</span></div></div></div>" : '<li><div class="box-thumbnail"><a class="box-image" href="' + n + '" style="background:url(' + v + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + o + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
            }
            s += "</ul>", $(".recent-boxes .HTML .widget-content").each(function() {
                $(this).parent().attr("id") == r && ($(this).html(s), $(this).parent().addClass("feat"), $(this).parent().addClass("boxes"), $(this).prev("h2").html('<a href="/search/label/' + e + '">' + a + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a href="/search/label/' + e + '"><button class="more-link">' + more_text + "</button></a>"), $(this).find(".box-image,.bf-thumb").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s640")
                    })
                }))
            })
        }
    }), n.match("gallery") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=6",
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var n = "", s = "<ul>", i = 0; i < t.feed.entry.length; i++) {
                for (var l = 0; l < t.feed.entry[i].link.length; l++)
                    if ("alternate" == t.feed.entry[i].link[l].rel) {
                        n = t.feed.entry[i].link[l].href;
                        break
                    } var c = t.feed.entry[i].title.$t,
                    d = t.feed.entry[i].category[0].term,
                    o = (t.feed.entry[i].author[0].name.$t, t.feed.entry[i].content.$t),
                    f = $("<div>").html(o);
                if (o.indexOf("//www.youtube.com/embed/") > -1) var h = t.feed.entry[i].media$thumbnail.url;
                else h = o.indexOf("<img") > -1 ? f.find("img:first").attr("src") : no_image;
                s += '<li><a class="box-image" href="' + n + '" style="background:url(' + h + ') no-repeat center center;background-size: cover"><span class="gallery-overlay"/></a><div class="category-gallery"><a class="icon ' + d + '" href="/search/label/' + d + '"></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3></div><div class="clear"/></li>'
            }
            s += "</ul>", $(".recent-boxes .HTML .widget-content").each(function() {
                $(this).parent().attr("id") == r && ($(this).html(s), $(this).parent().addClass("gallery"), $(this).prev("h2").html('<a href="/search/label/' + e + '">' + a + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a href="/search/label/' + e + '"><button class="more-link">' + more_text + "</button></a>"), $(this).find(".box-image").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s640")
                    })
                }))
            })
        }
    }), n.match("carousel") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + t,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var n = "", s = '<div class="main-carousel">', i = 0; i < t.feed.entry.length; i++) {
                for (var l = 0; l < t.feed.entry[i].link.length; l++)
                    if ("alternate" == t.feed.entry[i].link[l].rel) {
                        n = t.feed.entry[i].link[l].href;
                        break
                    } var c = t.feed.entry[i].title.$t,
                    d = t.feed.entry[i].category[0].term,
                    o = t.feed.entry[i].author[0].name.$t,
                    f = t.feed.entry[i].published.$t,
                    h = f.substring(0, 4),
                    u = f.substring(5, 7),
                    p = f.substring(8, 10),
                    m = month_format[parseInt(u, 10)] + " " + p + ", " + h,
                    g = t.feed.entry[i].content.$t,
                    b = $("<div>").html(g);
                if (g.indexOf("//www.youtube.com/embed/") > -1) var v = t.feed.entry[i].media$thumbnail.url;
                else v = g.indexOf("<img") > -1 ? b.find("img:first").attr("src") : no_image;
                s += '<li class="carousel-item"><a class="box-image" href="' + n + '" style="background:url(' + v + ') no-repeat center center;background-size: cover"><span class="carousel-overlay"/></a><div class="carousel-content"><div class="carousel-tag"><a class="icon ' + d + '" href="/search/label/' + d + '">' + d + '</a></div><h3 class="recent-title"><a href="' + n + '">' + c + '</a></h3><span class="recent-author">' + o + '</span><span class="recent-date">' + m + '</span></div><div class="clear"/></li>'
            }
            s += "</div>", $(".recent-boxes .HTML .widget-content").each(function() {
                $(this).parent().attr("id") == r && ($(this).html(s), $(this).parent().addClass("carousel"), $(this).prev("h2").html('<a href="/search/label/' + e + '">' + a + "</a>"), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").append('<a href="/search/label/' + e + '"><button class="more-link">' + more_text + "</button></a>"), $(".main-carousel").owlCarousel({
                    items: 2,
                    smartSpeed: 550,
                    nav: !0,
                    navText: ["", ""],
                    loop: !0,
                    autoplay: !0,
                    autoplaySpeed: 800,
                    dots: !1,
                    responsive: {
                        0: {
                            items: 1,
                            nav: !0
                        },
                        601: {
                            items: 2,
                            nav: !0
                        }
                    }
                }), $(this).find(".box-image").each(function() {
                    $(this).attr("style", function(e, t) {
                        return t.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(e, t) {
                        return t.replace("s72-c", "s640")
                    })
                }))
            })
        }
    })
}), $("#related-posts").each(function() {
    var e = $(this).text();
    $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + related_number,
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", a = '<div class="related-wrap">', r = 0; r < e.feed.entry.length; r++) {
                for (var n = 0; n < e.feed.entry[r].link.length; n++)
                    if ("alternate" == e.feed.entry[r].link[n].rel) {
                        t = e.feed.entry[r].link[n].href;
                        break
                    } var s = e.feed.entry[r].title.$t,
                    i = e.feed.entry[r].category[0].term,
                    l = (e.feed.entry[r].author[0].name.$t, e.feed.entry[r].content.$t),
                    c = $("<div>").html(l);
                if (l.indexOf("//www.youtube.com/embed/") > -1) var d = e.feed.entry[r].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
                else d = l.indexOf("<img") > -1 ? c.find("img:first").attr("src").replace("s72-c", "s1600") : no_image;
                a += '<li><div class="related-thumb"><a class="related-img" href="' + t + '" style="background:url(' + d + ') no-repeat center center;background-size: cover"><span class="related-overlay"/></a></div><div class="related-content"><div class="related-tag"><a class="icon ' + i + '" href="/search/label/' + i + '">' + i + '</a></div><h3 class="related-title"><a href="' + t + '">' + s + "</a></h3></div></li>"
            }
            a += '</div><div class="clear"/>', $("#related-posts").html(a), $(this).find(".related-img").each(function() {
                $(this).attr("style", function(e, t) {
                    return t.replace("/default.jpg", "/mqdefault.jpg")
                }).attr("style", function(e, t) {
                    return t.replace("s72-c", "s640")
                })
            })
        }
    })
});
! function($, window, undefined) {
    $.fn.tabslet = function(options) {
        var defaults = {
                mouseevent: "click",
                attribute: "href",
                animation: !1,
                autorotate: !1,
                pauseonhover: !0,
                delay: 2e3,
                active: 1,
                controls: {
                    prev: ".prev",
                    next: ".next"
                }
            },
            options = $.extend(defaults, options);
        return this.each(function() {
            var $this = $(this);
            options.mouseevent = $this.data("mouseevent") || options.mouseevent, options.attribute = $this.data("attribute") || options.attribute, options.animation = $this.data("animation") || options.animation, options.autorotate = $this.data("autorotate") || options.autorotate, options.pauseonhover = $this.data("pauseonhover") || options.pauseonhover, options.delay = $this.data("delay") || options.delay, options.active = $this.data("active") || options.active, $this.find("> div").hide(), $this.find("> div").eq(options.active - 1).show(), $this.find("> ul li").eq(options.active - 1).addClass("active");
            var fn = eval(function() {
                    $(this).trigger("_before"), $this.find("> ul li").removeClass("active"), $(this).addClass("active"), $this.find("> div").hide();
                    var t = $(this).find("a").attr(options.attribute);
                    return options.animation ? $this.find(t).animate({
                        opacity: "show"
                    }, "slow", function() {
                        $(this).trigger("_after")
                    }) : ($this.find(t).show(), $(this).trigger("_after")), !1
                }),
                init = eval("$this.find('> ul li')." + options.mouseevent + "(fn)"),
                elements = $this.find("> ul li"),
                i = options.active - 1;

            function forward() {
                i = ++i % elements.length, "hover" == options.mouseevent ? elements.eq(i).trigger("mouseover") : elements.eq(i).click();
                var t = setTimeout(forward, options.delay);
                $this.mouseover(function() {
                    options.pauseonhover && clearTimeout(t)
                })
            }

            function move(t) {
                "forward" == t && (i = ++i % elements.length), "backward" == t && (i = --i % elements.length), elements.eq(i).click()
            }
            options.autorotate && (setTimeout(forward, 0), options.pauseonhover && $this.on("mouseleave", function() {
                setTimeout(forward, 1e3)
            })), $this.find(options.controls.next).click(function() {
                move("forward")
            }), $this.find(options.controls.prev).click(function() {
                move("backward")
            }), $this.on("destroy", function() {
                $(this).removeData()
            })
        })
    }, $(document).ready(function() {
        $('[data-toggle="tabslet"]').tabslet()
    })
}(jQuery);
if ($('#back-to-top').length) {
    var scrollTrigger = 250,
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
$(window).scroll(function() {
    $(".header-content").css({
        opacity: 1 - .03 * $(this).scrollTop() / 10
    }), $(".header-content").css({
        "margin-top": 80 + .1 * $(this).scrollTop() + "px"
    })
});
! function(e) {
    e.fn.lazyload = function(t) {
        var o = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window
        };
        t && e.extend(o, t);
        var n = this;
        return "scroll" == o.event && e(o.container).bind("scroll", function(t) {
            var r = 0;
            n.each(function() {
                if (e.abovethetop(this, o) || e.leftofbegin(this, o));
                else if (e.belowthefold(this, o) || e.rightoffold(this, o)) {
                    if (r++ > o.failurelimit) return !1
                } else e(this).trigger("appear")
            });
            var i = e.grep(n, function(e) {
                return !e.loaded
            });
            n = e(i)
        }), this.each(function() {
            var t = this;
            null == e(t).attr("original") && e(t).attr("original", e(t).attr("src")), "scroll" != o.event || null == e(t).attr("src") || o.placeholder == e(t).attr("src") || e.abovethetop(t, o) || e.leftofbegin(t, o) || e.belowthefold(t, o) || e.rightoffold(t, o) ? (o.placeholder ? e(t).attr("src", o.placeholder) : e(t).removeAttr("src"), t.loaded = !1) : t.loaded = !0, e(t).one("appear", function() {
                this.loaded || e("<img />").bind("load", function() {
                    e(t).hide().attr("src", e(t).attr("original"))[o.effect](o.effectspeed), t.loaded = !0
                }).attr("src", e(t).attr("original"))
            }), "scroll" != o.event && e(t).bind(o.event, function(o) {
                t.loaded || e(t).trigger("appear")
            })
        }), e(o.container).trigger(o.event), this
    }, e.belowthefold = function(t, o) {
        if (void 0 === o.container || o.container === window) var n = e(window).height() + e(window).scrollTop();
        else n = e(o.container).offset().top + e(o.container).height();
        return n <= e(t).offset().top - o.threshold
    }, e.rightoffold = function(t, o) {
        if (void 0 === o.container || o.container === window) var n = e(window).width() + e(window).scrollLeft();
        else n = e(o.container).offset().left + e(o.container).width();
        return n <= e(t).offset().left - o.threshold
    }, e.abovethetop = function(t, o) {
        if (void 0 === o.container || o.container === window) var n = e(window).scrollTop();
        else n = e(o.container).offset().top;
        return n >= e(t).offset().top + o.threshold + e(t).height()
    }, e.leftofbegin = function(t, o) {
        if (void 0 === o.container || o.container === window) var n = e(window).scrollLeft();
        else n = e(o.container).offset().left;
        return n >= e(t).offset().left + o.threshold + e(t).width()
    }, e.extend(e.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    })
}(jQuery);
var textToDisplay = $(".post-title").text(),
    onscreenString = "",
    glitchTimePerLetter = .035,
    timeSinceLastLetterGlitchStart = 0,
    currentLetterIndex = 0,
    lastUpdateTime = getCurrentTime(),
    textElement = document.querySelectorAll(".item .post-title, .static_page .post-title")[0];

function getCurrentTime() {
    return (new Date).getTime()
}

function getDeltaTime() {
    var t = getCurrentTime(),
        e = (t - lastUpdateTime) / 1e3;
    return lastUpdateTime = t, e
}

function randomChar() {
    var t = randomRange(0, 57);
    return String.fromCharCode(65 + t)
}

function randomRange(t, e) {
    return t + Math.floor(Math.random() * (e - t + 1))
}

function update() {
    var t = getDeltaTime();
    if ((timeSinceLastLetterGlitchStart += t) > glitchTimePerLetter && (++currentLetterIndex, timeSinceLastLetterGlitchStart = 0), currentLetterIndex < textToDisplay.length) {
        onscreenString = textToDisplay.substr(0, currentLetterIndex) + randomChar();
        requestAnimationFrame(update)
    } else onscreenString = textToDisplay;
    textElement.innerHTML = onscreenString
}
requestAnimationFrame(update);

(function($) {
    'use strict';
    Date.now = Date.now || function() {
        return +new Date()
    };
    $.ias = function(g) {
        var h = $.extend({}, $.ias.defaults, g);
        var i = new $.ias.util();
        var j = new $.ias.paging(h.scrollContainer);
        var k = (h.history ? new $.ias.history() : false);
        var l = this;

        function init() {
            var d;
            j.onChangePage(function(a, b, c) {
                if (k) {
                    k.setPage(a, c)
                }
                h.onPageChange.call(this, a, c, b)
            });
            reset();
            if (k && k.havePage()) {
                stop_scroll();
                d = k.getPage();
                i.forceScrollTop(function() {
                    var a;
                    if (d > 1) {
                        paginateToPage(d);
                        a = get_scroll_threshold(true);
                        $('html, body').scrollTop(a)
                    } else {
                        reset()
                    }
                })
            }
            return l
        }
        init();

        function reset() {
            hide_pagination();
            h.scrollContainer.scroll(scroll_handler)
        }

        function scroll_handler() {
            var a, scrThreshold;
            a = i.getCurrentScrollOffset(h.scrollContainer);
            scrThreshold = get_scroll_threshold();
            if (a >= scrThreshold) {
                if (get_current_page() >= h.triggerPageThreshold) {
                    stop_scroll();
                    show_trigger(function() {
                        paginate(a)
                    })
                } else {
                    paginate(a)
                }
            }
        }

        function stop_scroll() {
            h.scrollContainer.unbind('scroll', scroll_handler)
        }

        function hide_pagination() {
            $(h.pagination).hide()
        }

        function get_scroll_threshold(a) {
            var b, threshold;
            b = $(h.container).find(h.item).last();
            if (b.size() === 0) {
                return 0
            }
            threshold = b.offset().top + b.height();
            if (!a) {
                threshold += h.thresholdMargin
            }
            return threshold
        }

        function paginate(d, e) {
            var f;
            f = $(h.next).attr('href');
            if (!f) {
                if (h.noneleft) {
                    $(h.container).find(h.item).last().after(h.noneleft)
                }
                return stop_scroll()
            }
            if (h.beforePageChange && $.isFunction(h.beforePageChange)) {
                if (h.beforePageChange(d, f) === false) {
                    return
                }
            }
            j.pushPages(d, f);
            stop_scroll();
            show_loader();
            loadItems(f, function(a, b) {
                var c = h.onLoadItems.call(this, b),
                    curLastItem;
                if (c !== false) {
                    $(b).hide();
                    curLastItem = $(h.container).find(h.item).last();
                    curLastItem.after(b);
                    $(b).fadeIn()
                }
                f = $(h.next, a).attr('href');
                $(h.pagination).replaceWith($(h.pagination, a));
                remove_loader();
                hide_pagination();
                if (f) {
                    reset()
                } else {
                    stop_scroll()
                }
                h.onRenderComplete.call(this, b);
                if (e) {
                    e.call(this)
                }
            })
        }

        function loadItems(b, c, d) {
            var e = [],
                container, startTime = Date.now(),
                diffTime, self;
            d = d || h.loaderDelay;
            $.get(b, null, function(a) {
                container = $(h.container, a).eq(0);
                if (0 === container.length) {
                    container = $(a).filter(h.container).eq(0)
                }
                if (container) {
                    container.find(h.item).each(function() {
                        e.push(this)
                    })
                }
                if (c) {
                    self = this;
                    diffTime = Date.now() - startTime;
                    if (diffTime < d) {
                        setTimeout(function() {
                            c.call(self, a, e)
                        }, d - diffTime)
                    } else {
                        c.call(self, a, e)
                    }
                }
            }, 'html')
        }

        function paginateToPage(a) {
            var b = get_scroll_threshold(true);
            if (b > 0) {
                paginate(b, function() {
                    stop_scroll();
                    if ((j.getCurPageNum(b) + 1) < a) {
                        paginateToPage(a);
                        $('html,body').animate({
                            'scrollTop': b
                        }, 400, 'swing')
                    } else {
                        $('html,body').animate({
                            'scrollTop': b
                        }, 1000, 'swing');
                        reset()
                    }
                })
            }
        }

        function get_current_page() {
            var a = i.getCurrentScrollOffset(h.scrollContainer);
            return j.getCurPageNum(a)
        }

        function get_loader() {
            var a = $('.ias_loader');
            if (a.size() === 0) {
                a = $('<div class="ias_loader">' + h.loader + '</div>');
                a.hide()
            }
            return a
        }

        function show_loader() {
            var a = get_loader(),
                el;
            if (h.customLoaderProc !== false) {
                h.customLoaderProc(a)
            } else {
                el = $(h.container).find(h.item).last();
                el.after(a);
                a.fadeIn()
            }
        }

        function remove_loader() {
            var a = get_loader();
            a.remove()
        }

        function get_trigger(a) {
            var b = $('.ias_trigger');
            if (b.size() === 0) {
                b = $('<div class="ias_trigger"><a><button class="load-more">' + h.trigger + '</button></a></div>');
                b.hide()
            }
            $('a', b).off('click').on('click', function() {
                remove_trigger();
                a.call();
                return false
            });
            return b
        }

        function show_trigger(a) {
            var b = get_trigger(a),
                el;
            el = $(h.container).find(h.item).last();
            el.after(b);
            b.fadeIn()
        }

        function remove_trigger() {
            var a = get_trigger();
            a.remove()
        }
    };
    $.ias.defaults = {
        container: '.blog-posts',
        scrollContainer: $(window),
        item: '.post-outer',
        pagination: '#blog-pager',
        next: '#blog-pager-older-link a',
        loader: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==/>',
        loaderDelay: 600,
        triggerPageThreshold: 1,
        trigger: 'Load more Posts',
        thresholdMargin: -500,
        history: true,
        onPageChange: function() {},
        beforePageChange: function() {},
        onLoadItems: function() {},
        onRenderComplete: function() {
            FB.XFBML.parse();
            gapi.plusone.go();
            twttr.widgets.load();
            _gaq.push(['_trackPageview']);
        },
        customLoaderProc: false
    };
    $.ias.util = function() {
        var c = false;
        var d = false;
        var e = this;

        function init() {
            $(window).load(function() {
                c = true
            })
        }
        init();
        this.forceScrollTop = function(a) {
            $('html,body').scrollTop(0);
            if (!d) {
                if (!c) {
                    setTimeout(function() {
                        e.forceScrollTop(a)
                    }, 1)
                } else {
                    a.call();
                    d = true
                }
            }
        };
        this.getCurrentScrollOffset = function(a) {
            var b, wndHeight;
            if (a.get(0) === window) {
                b = a.scrollTop()
            } else {
                b = a.offset().top
            }
            wndHeight = a.height();
            return b + wndHeight
        }
    };
    $.ias.paging = function() {
        var c = [
            [0, document.location.toString()]
        ];
        var d = function() {};
        var e = 1;
        var f = new $.ias.util();

        function init() {
            $(window).scroll(scroll_handler)
        }
        init();

        function scroll_handler() {
            var a, curPageNum, curPagebreak, scrOffset, urlPage;
            a = f.getCurrentScrollOffset($(window));
            curPageNum = getCurPageNum(a);
            curPagebreak = getCurPagebreak(a);
            if (e !== curPageNum) {
                scrOffset = curPagebreak[0];
                urlPage = curPagebreak[1];
                d.call({}, curPageNum, scrOffset, urlPage)
            }
            e = curPageNum
        }

        function getCurPageNum(a) {
            for (var i = (c.length - 1); i > 0; i--) {
                if (a > c[i][0]) {
                    return i + 1
                }
            }
            return 1
        }
        this.getCurPageNum = function(a) {
            a = a || f.getCurrentScrollOffset($(window));
            return getCurPageNum(a)
        };

        function getCurPagebreak(a) {
            for (var i = (c.length - 1); i >= 0; i--) {
                if (a > c[i][0]) {
                    return c[i]
                }
            }
            return null
        }
        this.onChangePage = function(a) {
            d = a
        };
        this.pushPages = function(a, b) {
            c.push([a, b])
        }
    };
    $.ias.history = function() {
        var e = false;
        var f = false;

        function init() {
            f = !!(window.history && history.pushState && history.replaceState);
            f = false
        }
        init();
        this.setPage = function(a, b) {
            this.updateState({
                page: a
            }, '', b)
        };
        this.havePage = function() {
            return (this.getState() !== false)
        };
        this.getPage = function() {
            var a;
            if (this.havePage()) {
                a = this.getState();
                return a.page
            }
            return 1
        };
        this.getState = function() {
            var a, stateObj, pageNum;
            if (f) {
                stateObj = history.state;
                if (stateObj && stateObj.ias) {
                    return stateObj.ias
                }
            } else {
                a = (window.location.hash.substring(0, 7) === '/page/');
                if (a) {
                    pageNum = parseInt(window.location.hash.replace('/page/', ''), 10);
                    return {
                        page: pageNum
                    }
                }
            }
            return false
        };
        this.updateState = function(a, b, c) {
            if (e) {
                this.replaceState(a, b, c)
            } else {
                this.pushState(a, b, c)
            }
        };
        this.pushState = function(a, b, c) {
            var d;
            if (f) {
                history.pushState({
                    ias: a
                }, b, c)
            } else {
                d = (a.page > 0 ? '/page/' + a.page : '');
                window.location.hash = d
            }
            e = true
        };
        this.replaceState = function(a, b, c) {
            if (f) {
                history.replaceState({
                    ias: a
                }, b, c)
            } else {
                this.pushState(a, b, c)
            }
        }
    }
})(jQuery);
jQuery.ias();

const items = document.querySelectorAll(".accordion h3");

function toggleAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
}

items.forEach(item => item.addEventListener("click", toggleAccordion));

$(".mobile-menu .menu-dropdown > a").click(function(e) {
    $(".mobile-menu ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
        e.stopPropagation()
})