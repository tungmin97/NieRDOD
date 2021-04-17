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
                else d = l.indexOf("<img") > -1 ? c.find("img:first").attr("src").replace("s72-c", "s640") : no_image;
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
//Scroll To Top
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
//Logo Parallax
$(window).scroll(function() {
    $(".header-content").css({
        opacity: 1 - .03 * $(this).scrollTop() / 10
    }), $(".header-content").css({
        "margin-top": 80 + .1 * $(this).scrollTop() + "px"
    })
});
//Lazy Load
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
//Lazy Load Place Holder
$(function() {
    $("img").lazyload({
        placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        effect: "fadeIn"
    });
});
//Type Effect
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
//FAQ
const items = document.querySelectorAll(".accordion h3");
function toggleAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
}
items.forEach(item => item.addEventListener("click", toggleAccordion));

//Panel
$('.menu-button').click(function(event){
    event.preventDefault();
    $('.mobile-panel').toggleClass("toggle-open");
});
$('.panel-close').click(function(event){
    event.preventDefault();
$('.mobile-panel').removeClass("toggle-open");
});
//Mobile Nav
var prev = 0;
var $window = $(window);
var nav = $('.mobile-nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('nav-up', scrollTop > prev);
  prev = scrollTop;
});
//Sticky Nav
window.onscroll = function() {mainNav()};

var header = document.getElementById("main-nav");

var sticky = header.offsetTop;

function mainNav() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
}
//Search Button
$(function() {
	$('#search-menu').removeClass('toggled');

	$('#search-icon').click(function(e) {
		e.stopPropagation();
		$('#search-menu').toggleClass('toggled');
		$("#popup-search").focus();
	});

	$('#search-menu input').click(function(e) {
		e.stopPropagation();
	});

	$('#search-menu, body').click(function() {
		$('#search-menu').removeClass('toggled');
	});
});
//Disqus
function load_disqus(nierdod) {
    var is_disqus_empty = document.getElementById('disqus_empty'),
        disqus_target   = document.getElementById('disqus_thread'),
        disqus_embed    = document.createElement('script'),
        disqus_hook     = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);

    if( disqus_target && is_disqus_empty ) {
      disqus_embed.type = 'text/javascript';
      disqus_embed.async = true;
      disqus_embed.src = '//' + nierdod + '.disqus.com/embed.js';
      disqus_hook.appendChild(disqus_embed);
      is_disqus_empty.remove();
    }
  }

  window.addEventListener('scroll', function(e) {
    var currentScroll = document.scrollingElement.scrollTop;
    var disqus_target = document.getElementById('disqus_thread');

    if( disqus_target && (currentScroll > disqus_target.getBoundingClientRect().top - 150) ) {
      load_disqus('nierdod');
      console.log('Disqus loaded.');
    }
  }, false);
