/*
##
##	Enhancer for YouTube™ | Opera Extension
##	=======================================
##
##	Author: Maxime RF <https://www.mrfdev.com>
##
##	This file is protected by copyright laws and international copyright
##	treaties, as well as other intellectual property laws and treaties.
##
##	All rights not expressly granted to you are retained by the author.
##	Read the license.txt file for more details.
##
##	If it's not enough clear for you Baris Derin, you have no rights to use my work,
##	neither as-is nor modified! Improve your coding logic instead of using others work!
##
##	© MRFDEV.com - All Rights Reserved
##
*/
(function(b) {
	if (window.EnhancerForYouTube) b.hidden ? b.addEventListener("visibilitychange", function() {
		b.hidden || b.location.reload()
	}) : b.location.reload();
	else {
		var ra = function(e) {
				var b;
				"undefined" === typeof e && (b = JSON.parse(localStorage.getItem("enhancer-for-youtube") || '{"customtheme":""}'));
				localStorage.setItem("enhancer-for-youtube", JSON.stringify({
					customtheme: b ? b.customtheme : e,
					theme: a.theme,
					polymer: !0
				}))
			},
			ta = function() {
				if (h) {
					for (var e = h.querySelectorAll("li"), b = e.length - 1; 0 <= b; b--) e[b].classList[0 <= a.toolbarbuttons.indexOf(e[b].dataset.name) ? "remove" : "add"]("hidden");
					"" === a.toolbarbuttons ? u.classList.add("hidden") : (u.classList.remove("hidden"), sa())
				}
			},
			Ja = function() {
				Z();
				if (0 === B[0].children.length) {
					var a = l;
					B.slider({
						animate: "slow",
						range: !0,
						min: 0,
						max: F,
						values: [l, v],
						start: function(e, c) {
							a = l
						},
						slide: function(a, c) {
							l = c.values[0];
							v = c.values[1];
							Z()
						},
						stop: function(e, c) {
							l === F ? (l = F - 1, da(), Z()) : v === l && (v = l + 1, da(), Z());
							a !== l && d.seekTo(l)
						}
					})
				} else da();
				B.show();
				u.classList.add("extended")
			},
			da = function() {
				B.slider("values", [l, v])
			},
			Z = function() {
				ua[0].textContent = ea(l) + " / " + ea(v)
			},
			va = function(a) {
				if (a.classList.contains("active")) clearInterval(T), a.classList.remove("active"), B.hide(), u.classList.remove("extended");
				else {
					a.classList.add("active");
					0 === $("#enhancer-for-youtube-slider", h).length && (B = $("<div />").attr("id", "enhancer-for-youtube-slider").appendTo(h), ua = $("<div />").addClass("start-end").appendTo(h));
					F = l = v = !1;
					var e = 0,
						c = 0 < b.location.href.indexOf("list=");
					T = setInterval(function() {
						try {
							d && "function" === typeof d.getPlayerState ? F ? !c && d.getCurrentTime() >= v ? d.seekTo(l) : c || 0 !== d.getPlayerState() ? (c && F === v && 2 > F - d.getCurrentTime() || c && F !== v && d.getCurrentTime() >= v) && d.seekTo(l) : d.playVideo() : (F = v = parseInt(d.getDuration(), 10), l = 0, "undefined" !== typeof ytplayer && ytplayer.config && ytplayer.config.args && (l = ytplayer.config.args.start ? parseInt(ytplayer.config.args.start, 10) : 0, v = ytplayer.config.args.end ? parseInt(ytplayer.config.args.end, 10) : v), e = 0, Ja()) : (e++, L())
						} catch (f) {
							15 < e && clearInterval(T), d = !1
						}
					}, 1E3)
				}
			},
			ea = function(a) {
				a = Number(a);
				var b = Math.floor(a / 3600),
					c = Math.floor(a % 3600 / 60);
				a = Math.floor(a % 3600 % 60);
				return (0 < b ? b + ":" : "") + (0 < c ? (0 < b && 10 > c ? "0" : "") + c + ":" : "0:") + (10 > a ? "0" : "") + a
			},
			fa = function() {
				b.body.classList.remove("enhancer-for-youtube-pinned-player");
				window.scrollTo(0, 0);
				b.body.classList.add("enhancer-for-youtube-cinema-mode");
				a.cinemamodewideplayer && G("large")
			},
			ha = function() {
				b.body.classList.remove("enhancer-for-youtube-cinema-mode");
				!a.widescreen && a.cinemamodewideplayer && G("default")
			},
			wa = function(b) {
				if (!b.ctrlKey) {
					b.preventDefault();
					try {
						var e = d.getVolume();
						0 < b.deltaY ? (e -= a.volumevariation, 0 > e && (e = 0)) : (e += a.volumevariation, 100 < e && (e = 100), d.isMuted() && d.unMute());
						d.setVolume(e);
						I.textContent = e;
						ia();
						a.defaultvolume && (a.volume = e);
						var c = (new Date).getTime();
						b = 0 < e ? "false" : "true";
						localStorage["yt-player-volume"] = '{"data":"{\\"volume\\":' + e + ',\\"muted\\":' + b + '}","expiration":' + (c + 2592E6) + ',"creation":' + c + "}";
						sessionStorage["yt-player-volume"] = '{"data":"{\\"volume\\":' + e + ',\\"muted\\":' + b + '}","creation":' + c + "}"
					} catch (f) {}
				}
			},
			C = function() {
				var b = [a.quality1, a.quality2, a.quality3, a.quality4],
					k = setInterval(function() {
						try {
							if (d && "function" === typeof d.getPlayerState || ("video" === z ? L() : ja()), -1 !== d.getPlayerState()) {
								for (var a = 0, e = !1, g, h = d.getAvailableQualityLevels(); a < b.length && !e; a++)
									for (var m in h)
										if (b[a] === h[m]) {
											e = b[a];
											break
										}
								g = e ? e : "auto";
								g !== d.getPlaybackQuality() ? V || (V = !0, d.hasAttribute("flashvars") ? (d.pauseVideo(), d.setPlaybackQuality(g), d.playVideo()) : d.setPlaybackQuality(g)) : g === d.getPlaybackQuality() && (V = !0, clearInterval(k), clearTimeout(c))
							}
						} catch (Ua) {
							d = !1
						}
					}, 500),
					c = setTimeout(function() {
						clearInterval(k)
					}, 3E4)
			},
			X = function(e) {
				d || L();
				if (d && d.hasAttribute("flashvars")) {
					clearInterval(T);
					clearInterval(P);
					h && B && (h.querySelector("i.loop").parentNode.classList.remove("active"), B.hide());
					var k = "ad_module ad2_module ad3_module ad_channel_code_instream ad_channel_code_overlay ad_device ad_eurl ad_flags ad_host ad_host_tier ad_logging_flag ad_preroll ad_slots ad_tag ad_type ad_video_pub_id adsense_video_doc_id advideo aftv afv afv_ad_tag afv_ad_tag_restricted_to_instream afv_invideo_ad_tag afv_inslate_ad_tag afv_instream_max afv_video_min_cpm allow_html5_ads allowed_ads apply_fade_on_midrolls as_launched_in_country baseUrl cafe_experiment_id cc_asr enabled_engage_types excluded_ads dynamic_allocation_ad_tag max_dynamic_allocation_ad_tag_length max_ad_duration ppv_remarketing_url prefetch_ad_live_stream pyv_ad_channel remarketing_url rmktEnabled show_pyv_in_related use_meta_ad_player".split(" "),
						c = function(a) {
							for (var b = k.length - 1; 0 <= b; b--)
								if (a === k[b]) return !0;
							return !1
						},
						f = d.getAttribute("flashvars"),
						U = d.cloneNode(!0);
					f = f.split("&");
					for (var p = [], J, l, n = 0; n < f.length; n++) J = f[n].split("="), l = J[0], J = J[1], c(l) || p.push(l + "=" + J);
					c = p.join("&");
					0 > c.indexOf("enablejsapi") && (c += "&enablejsapi=1");
					0 > c.indexOf("iv_load_policy") && (c += "&iv_load_policy=1");
					0 > c.indexOf("autoplay") && (c += "&autoplay=1");
					a.removeannotations && (c = c.replace("iv_load_policy=1", "iv_load_policy=3"));
					U.setAttribute("flashvars", c);
					m.textContent = "";
					m.appendChild(U);
					ka(m);
					a.autopausevideos ? Q() : a.selectquality && C()
				} else if (d)
					if (e || "function" === typeof d.getAdState && 1 === d.getAdState() && "function" === typeof d.getDuration) try {
						Number.isFinite(g.duration) ? 3 < d.getDuration() - g.duration && (g.currentTime = g.duration, W(), a.overridespeeds ? g.playbackRate = a.speed : d.setPlaybackRate(a.speed), a.autopausevideos ? Q() : a.selectquality && C()) : setTimeout(function() {
							X(e)
						}, 50)
					} catch (xa) {
						!g || (0 < xa.message.indexOf("currentTime") || "IndexSizeError" === xa.message) && b.querySelector("video.html5-main-video")
					} else W();
					else setTimeout(function() {
						X(e)
					}, 100)
			},
			W = function() {
				d.classList.add("ads-removed")
			},
			la = function() {
				try {
					var b = d.getAvailableQualityLevels();
					0 <= b.indexOf(a.quality1) ? d.setPlaybackQuality(a.quality1) : 0 <= b.indexOf(a.quality2) ? d.setPlaybackQuality(a.quality2) : 0 <= b.indexOf(a.quality3) ? d.setPlaybackQuality(a.quality3) : 0 <= b.indexOf(a.quality4) && d.setPlaybackQuality(a.quality4)
				} catch (k) {}
			},
			G = function(a) {
				try {
					var e = b.body.classList.contains("enhancer-for-youtube-wide-player");
					q && !D && (D = q.classList.contains("watch-stage-mode") && !b.body.classList.contains("enhancer-for-youtube-wide-player"));
					if ("large" === a || !a && !e) {
						ma || Y();
						var c = b.querySelector('.ytp-right-controls path[d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z"]') || b.querySelector('.ytp-right-controls path[d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z"]');
						if (c) var d = c.parentNode.parentNode;
						if (D && d) {
							d.click();
							var g = setInterval(function() {
								!q.classList.contains("watch-non-stage-mode") || q.classList.contains("watch-wide") || q.classList.contains("watch-stage-mode") || (clearInterval(g), D = !0, ya(d, "1"))
							}, 20)
						} else ya(d, D ? "1" : "0")
					} else if ("default" === a || !a && e) {
						var p = b.querySelector('.ytp-right-controls path[d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z"]');
						if (p) var h = p.parentNode.parentNode;
						h ? h.click() : h || D || (q.classList.add("watch-non-stage-mode"), q.classList.remove("watch-wide"), q.classList.remove("watch-stage-mode"));
						D || h || setTimeout(function() {
							window.postMessage({
								enhancerforyoutube: "set-cookie",
								url: b.location.href,
								name: "wide",
								value: "0"
							}, "*")
						}, 250);
						b.body.classList.remove("enhancer-for-youtube-wide-player");
						h && D && (g = setInterval(function() {
							!q.classList.contains("watch-non-stage-mode") || q.classList.contains("watch-wide") || q.classList.contains("watch-stage-mode") || (clearInterval(g), D = !1, h.click())
						}, 20))
					}
				} catch (Ta) {}
			},
			ya = function(a, d) {
				a ? a.click() : (q.classList.add("watch-wide"), q.classList.add("watch-stage-mode"), q.classList.remove("watch-non-stage-mode"));
				b.body.classList.add("enhancer-for-youtube-wide-player");
				setTimeout(function() {
					window.postMessage({
						enhancerforyoutube: "set-cookie",
						url: b.location.href,
						name: "wide",
						value: d
					}, "*")
				}, 250)
			},
			Q = function() {
				if (a.ignoreplaylists && 0 < b.location.href.indexOf("list=") || !a.pauseforegroundtab && !na && !b.hidden) a.selectquality && (n ? C() : la()), b.hidden || (M = !0);
				else {
					b.hidden || (M = !0);
					clearInterval(P);
					try {
						a.disablepreloading ? (d.stopVideo(), d.addEventListener("onStateChange", function U(b) {
							if (1 === b) {
								d.removeEventListener("onStateChange", U);
								a.selectquality && (n ? C() : la());
								try {
									d[a.removeannotations ? "unloadModule" : "loadModule"]("annotations_module"), d.setAttribute("annotations-module-loaded", a.removeannotations ? 0 : 1), "undefined" !== typeof ytplayer && ytplayer.config && ytplayer.config.args && ytplayer.config.args.start && d.seekTo(parseInt(ytplayer.config.args.start, 10))
								} catch (p) {}
							}
						})) : d.pauseVideo()
					} catch (c) {
						var e, k = 0;
						P = setInterval(function() {
							try {
								d && "function" === typeof d.getPlayerState || (k++, "video" === z ? L() : ja()), e = d.getPlayerState(), b.hidden ? -1 !== e && a.disablepreloading ? d.stopVideo() : 2 === e || a.disablepreloading || d.pauseVideo() : -1 !== e && 5 !== e && a.pauseforegroundtab && a.disablepreloading ? d.stopVideo() : 2 !== e && a.pauseforegroundtab && !a.disablepreloading ? (-1 !== e && 5 !== e || d.playVideo(), 3 !== e && d.pauseVideo()) : clearInterval(P)
							} catch (f) {
								200 < k && clearInterval(P), d = !1
							}
						}, 50)
					}
					a.selectquality && (n ? C() : la());
					r()
				}
			},
			za = function(b) {
				if (b.ctrlKey && !b.shiftKey || "I" === b.target.nodeName) {
					b.preventDefault();
					try {
						var e = a.speed;
						a.overridespeeds ? g.playbackRate = e : d.setPlaybackRate(e);
						"I" === b.target.nodeName ? t.textContent = E.speed + " x" + e : (I.textContent = "x" + e, ia())
					} catch (c) {}
					r()
				}
			},
			ia = function() {
				try {
					var a = b.documentElement.querySelector(":scope > div[style]").shadowRoot.querySelector(".custom-button-wrapper #video-detach-button");
					a.setAttribute("style", "display:none!important")
				} catch (k) {}
				I.setAttribute("style", "display:block!important");
				clearTimeout(Aa);
				Aa = setTimeout(function() {
					I.setAttribute("style", "display:none!important");
					a && a.removeAttribute("style")
				}, 1500)
			},
			sa = function() {
				u.style.marginLeft = "-" + parseInt(window.getComputedStyle(h, null).getPropertyValue("width"), 10) / 2 + "px"
			},
			N = function(b, d) {
				b.addEventListener("mouseenter", function(b) {
					a.toolbartooltips && (t.textContent = d, t.style.left = 4 + Math.floor(b.target.getBoundingClientRect().left) - parseInt(window.getComputedStyle(t, null).getPropertyValue("width"), 10) / 2 + "px", t.classList.add("visible"))
				});
				b.addEventListener("mouseleave", function() {
					t.classList.remove("visible")
				})
			},
			Ka = function() {
				try {
					A.max = g.duration, A.value = g.currentTime
				} catch (e) {}
			},
			Ba = function(b) {
				if ("I" === b.target.nodeName || b.ctrlKey)
					if (b.preventDefault(), !n) try {
						if (a.overridespeeds) {
							var e = g.playbackRate;
							0 < b.deltaY ? (e = parseFloat((e - a.speedvariation).toFixed(2)), 0 >= e && (e = a.speedvariation), g.playbackRate = e) : 0 > b.deltaY && (e = parseFloat((e + a.speedvariation).toFixed(2)), g.playbackRate = e)
						} else {
							var c = d.getAvailablePlaybackRates();
							e = d.getPlaybackRate();
							var f = c.indexOf(e);
							0 < b.deltaY && 0 < f ? (e = c[f - 1], d.setPlaybackRate(e)) : 0 > b.deltaY && f < c.length - 1 && (e = c[f + 1], d.setPlaybackRate(e))
						}
						"I" === b.target.nodeName ? t.textContent = E.speed + " x" + e : (I.textContent = "x" + e, ia())
					} catch (U) {}
			},
			Ca = function(b) {
				if ("I" === b.target.nodeName || b.ctrlKey && b.shiftKey) {
					b.preventDefault();
					try {
						var e = "" === (g.style.filter ? g.style.filter : g.style["-webkit-filter"]) ? !1 : !0;
						g.style["-webkit-filter"] = e ? "" : a.filter;
						g.style.filter = e ? "" : a.filter;
						h.querySelector("i.filters").parentNode.classList[e ? "remove" : "add"]("active")
					} catch (c) {}
				}
				r()
			},
			ka = function(a) {
				a.querySelector("#enhancer-for-youtube-player-info") || (b.querySelector("#enhancer-for-youtube-player-info") || (I = b.createElement("div"), I.id = "enhancer-for-youtube-player-info"), a.appendChild(I))
			},
			La = function() {
				if (!u) {
					y = b.createElement("div");
					u = b.createElement("div");
					h = b.createElement("div");
					t = b.createElement("div");
					var e = b.createDocumentFragment(),
						k = b.createElement("ul"),
						c = b.createElement("li"),
						f = b.createElement("i");
					y.id = "enhancer-for-youtube-background";
					y.style.visibility = "hidden";
					y.addEventListener("click", function() {
						ha();
						r()
					});
					e.appendChild(y);
					u.id = "enhancer-for-youtube-toolbar-wrapper";
					h.id = "enhancer-for-youtube-toolbar";
					t.id = "enhancer-for-youtube-tooltip";
					e.appendChild(t);
					h.style.visibility = "hidden";
					a.transparency && h.classList.add("transparency");
					a.slideeffect && h.classList.add("slide-effect");
					c.dataset.name = f.className = "clean";
					c.appendChild(f);
					c.addEventListener("click", function() {
						oa = !0;
						X();
						r()
					});
					c.addEventListener("contextmenu", function(a) {
						a.preventDefault();
						d || L();
						try {
							var b = d.getAttribute("annotations-module-loaded");
							d["1" === b ? "unloadModule" : "loadModule"]("annotations_module");
							d.setAttribute("annotations-module-loaded", "1" === b ? 0 : 1);
							r()
						} catch (J) {}
						return !1
					});
					N(c, E.remove_ads);
					k.appendChild(c);
					c = b.createElement("li");
					f = b.createElement("i");
					c.dataset.name = f.className = "cinema";
					c.appendChild(f);
					c.addEventListener("click", function() {
						ma || Y();
						b.body.classList.contains("enhancer-for-youtube-cinema-mode") ? ha() : fa();
						r()
					});
					N(c, E.cinema_mode);
					k.appendChild(c);
					c = b.createElement("li");
					f = b.createElement("i");
					c.dataset.name = f.className = "resize";
					c.appendChild(f);
					c.addEventListener("click", function() {
						b.body.classList.contains("enhancer-for-youtube-wide-player") && b.body.classList.contains("enhancer-for-youtube-pinned-player") || (b.body.classList.contains("enhancer-for-youtube-pinned-player") && (b.body.classList.remove("enhancer-for-youtube-pinned-player"), window.scrollTo(0, 0)), G(), r())
					});
					N(c, E.resize_player);
					k.appendChild(c);
					c = b.createElement("li");
					f = b.createElement("i");
					c.dataset.name = f.className = "loop";
					c.appendChild(f);
					c.addEventListener("click", function() {
						if (Da) va(this);
						else {
							Da = !0;
							w = b.createElement("link");
							w.rel = "stylesheet";
							w.href = O + "/vendor/jquery/jquery-ui.min.css";
							b.head.appendChild(w);
							var a = this,
								c = b.createElement("script");
							c.src = O + "/vendor/jquery/jquery-2.2.4.min.js";
							c.onload = function() {
								c = b.createElement("script");
								c.src = O + "/vendor/jquery/jquery-ui.min.js";
								c.onload = function() {
									va(a)
								};
								b.head.appendChild(c)
							};
							b.head.appendChild(c)
						}
						r()
					});
					N(c, E.loop_video);
					k.appendChild(c);
					c = b.createElement("li");
					f = b.createElement("i");
					c.dataset.name = f.className = "speed";
					c.appendChild(f);
					n && c.classList.add("not-allowed");
					c.addEventListener("click", za);
					c.addEventListener("wheel", Ba);
					c.addEventListener("mouseenter", function(b) {
						if (a.toolbartooltips) {
							var c = "";
							try {
								c = " x" + g.playbackRate
							} catch (J) {}
							t.textContent = E.speed + c;
							t.style.left = 4 + Math.floor(b.target.getBoundingClientRect().left) - parseInt(window.getComputedStyle(t, null).getPropertyValue("width"), 10) / 2 + "px";
							t.classList.add("visible")
						}
						r()
					});
					c.addEventListener("mouseleave", function() {
						t.classList.remove("visible")
					});
					k.appendChild(c);
					c = b.createElement("li");
					f = b.createElement("i");
					c.dataset.name = f.className = "filters";
					c.appendChild(f);
					n && c.classList.add("not-allowed");
					c.addEventListener("click", Ca);
					c.addEventListener("contextmenu", function(a) {
						a.preventDefault();
						this.classList.contains("not-allowed") || (this.hasAttribute("ui") ? b.querySelector("#enhancer-for-youtube-filters").classList.toggle("hidden") : window.postMessage({
							enhancerforyoutube: "filters"
						}, "*"));
						return !1
					});
					N(c, E.filters);
					k.appendChild(c);
					c = b.createElement("li");
					f = b.createElement("i");
					c.dataset.name = f.className = "script";
					c.appendChild(f);
					c.addEventListener("click", function() {
						r();
						window.postMessage({
							enhancerforyoutube: "custom-script"
						}, "*")
					});
					N(c, E.custom_script);
					k.appendChild(c);
					c = b.createElement("li");
					f = b.createElement("i");
					c.dataset.name = f.className = "options";
					c.appendChild(f);
					c.addEventListener("click", function() {
						r();
						window.postMessage({
							enhancerforyoutube: "show-options"
						}, "*")
					});
					N(c, E.options);
					k.appendChild(c);
					h.appendChild(k);
					u.appendChild(h);
					e.appendChild(u);
					A = b.createElement("progress");
					A.id = "enhancer-for-youtube-progress";
					A.max = 1;
					A.value = 0;
					A.addEventListener("click", function(a) {
						g && (g.currentTime = Math.floor((a.pageX - this.offsetLeft) * this.max / this.offsetWidth));
						r()
					});
					A.addEventListener("mouseenter", function() {
						K.classList.add("visible")
					});
					A.addEventListener("mouseleave", function() {
						K.classList.remove("visible")
					});
					A.addEventListener("mousemove", function(a) {
						g && (K.textContent = ea(Math.floor((a.pageX - this.offsetLeft) * this.max / this.offsetWidth)), K.style.left = a.pageX - parseInt(window.getComputedStyle(K, null).getPropertyValue("width"), 10) / 2 - 6 + "px")
					});
					e.appendChild(A);
					K = b.createElement("div");
					K.id = "enhancer-for-youtube-progress-tooltip";
					e.appendChild(K);
					$unpin = b.createElement("div");
					$unpin.id = "enhancer-for-youtube-unpin-player";
					$unpin.addEventListener("click", function() {
						b.body.classList.remove("enhancer-for-youtube-pinned-player")
					});
					e.appendChild($unpin);
					b.body.appendChild(e);
					setTimeout(function() {
						ta();
						sa();
						y.style.visibility = "";
						h.style.visibility = ""
					}, 500);
					(new MutationObserver(function(a) {
						a.forEach(function(a) {
							try {
								!a.target.classList.contains("watch-non-stage-mode") || a.target.classList.contains("watch-wide") || a.target.classList.contains("watch-stage-mode") || (b.body.classList.remove("enhancer-for-youtube-wide-player"), D = !1)
							} catch (J) {}
						})
					})).observe(q, {
						attributes: !0,
						attributeFilter: ["class"]
					})
				}
			},
			Y = function() {
				var a = b.documentElement.clientWidth,
					d = b.documentElement.clientHeight,
					c = b.querySelector("#masthead-positioner"),
					f = c ? parseInt(window.getComputedStyle(c, null).getPropertyValue("height"), 10) : 50,
					g = h ? parseInt(window.getComputedStyle(h, null).getPropertyValue("height"), 10) + 1 : 30;
				c = 656 >= a ? 240 : 1720 <= a && 980 <= d ? 720 : 1294 <= a && 630 <= d ? 480 : 360;
				a -= 2;
				parseInt(16 / 9 * (d - f - g), 10) > a ? (d = parseInt(a / (16 / 9), 10), f = d - c, g = 240 === c ? 0 : c) : (d = parseInt(d - f - g, 10), a = parseInt(16 / 9 * d, 10), f = d - c + (480 === c ? 120 : 0), g = 240 === c ? 0 : 360);
				c = 240 === c ? 0 : c;
				var m = parseInt(a / 2, 10);
				var l = b.createElement("style");
				l.type = "text/css";
				l.textContent = "body.enhancer-for-youtube-wide-player .watch-stage-mode .player-height,body.enhancer-for-youtube-wide-player .watch-stage-mode embed#movie_player,body.enhancer-for-youtube-wide-player .watch-stage-mode #movie_player:not(.ytp-fullscreen) video.html5-main-video,body.enhancer-for-youtube-wide-player .watch-stage-mode #movie_player:not(.ytp-fullscreen) .ytp-iv-video-content{height:" + d + "px !important}body.enhancer-for-youtube-wide-player .watch-stage-mode .player-width,body.enhancer-for-youtube-wide-player .watch-stage-mode #movie_player:not(.ytp-fullscreen) video.html5-main-video,body.enhancer-for-youtube-wide-player .watch-stage-mode #movie_player:not(.ytp-fullscreen) .ytp-iv-video-content{width:" + a + "px !important}body.enhancer-for-youtube-wide-player .watch-stage-mode #movie_player:not(.ytp-fullscreen) .ytp-chrome-bottom{width:" + (a - 24) + "px !important}body.enhancer-for-youtube-wide-player .watch-stage-mode .player-width{left:-" + m + "px !important}body.enhancer-for-youtube-wide-player:not(.enhancer-for-youtube-cinema-mode) #player-playlist .watch-playlist{top:" + f + "px !important}body.enhancer-for-youtube-cinema-mode:not(.enhancer-for-youtube-wide-player) #player-playlist .watch-playlist{top:-" + c + "px !important}body.enhancer-for-youtube-cinema-mode:not(.enhancer-for-youtube-wide-player) .watch-stage-mode #player-playlist .watch-playlist{top:-360px !important}body.enhancer-for-youtube-wide-player.enhancer-for-youtube-cinema-mode #player-playlist .watch-playlist{top:-" + g + "px !important}";
				b.head.appendChild(l);
				ma = !0
			},
			Ea = function() {
				window.IntersectionObserver && !m.hasAttribute("io") && (m.setAttribute("io", 1), pa = new IntersectionObserver(function(a) {
					if ((0 === a[0].intersectionRatio && !b.body.classList.contains("enhancer-for-youtube-pinned-player") && 0 < window.scrollY || 0 < a[0].intersectionRatio && .12 > a[0].intersectionRatio) && window.scrollY > m.offsetHeight - 100 && R()) {
						b.body.classList.add("enhancer-for-youtube-pinned-player");
						try {
							g.style.top = ""
						} catch (k) {}
						r()
					} else 0 !== a[0].intersectionRatio && (b.body.classList.remove("enhancer-for-youtube-pinned-player"), n || Ma())
				}, {
					threshold: .12
				}), pa.observe(m))
			},
			Ma = function() {
				setTimeout(function() {
					try {
						if (!b.body.classList.contains("enhancer-for-youtube-pinned-player")) {
							var a = window.getComputedStyle(m).height,
								k = window.getComputedStyle(d).height,
								c = window.getComputedStyle(g).height;
							k !== a ? (d.style.width = window.getComputedStyle(m).width, d.style.height = a, d.style.width = "", d.style.height = "") : c !== a && (g.style.width = window.getComputedStyle(m).width, g.style.height = a, g.style.top = "")
						}
					} catch (f) {}
				}, 50)
			},
			Na = function() {
				qa = setInterval(function() {
					try {
						if ("function" !== typeof d.getPlayerState && L(), 0 === d.getPlayerState() && (clearInterval(qa), !h.querySelector("i.loop").parentNode.classList.contains("active"))) {
							var a = b.querySelector(".playlist-videos-container .playlist-videos-list li.currently-playing");
							if (a) {
								var g = a.nextElementSibling;
								g && (b.location.href = g.querySelector("a.playlist-video").href)
							}
						}
					} catch (c) {}
				}, 5E3)
			},
			r = function() {
				try {
					b.activeElement.blur(), d.focus()
				} catch (e) {}
			},
			ja = function() {
				d = b.querySelector("#c4-player")
			},
			L = function() {
				d = b.querySelector("#movie_player")
			},
			R = function() {
				return /^https:\/\/www\.youtube\.com\/watch\?(.*&)?v=/.test(b.location.href)
			},
			aa = function(a, b) {
				var c = parseInt(a.slice(1), 16),
					d = 0 > b ? 0 : 255,
					e = 0 > b ? -1 * b : b,
					g = c >> 16,
					k = c >> 8 & 255;
				c &= 255;
				return "#" + (16777216 + 65536 * (Math.round((d - g) * e) + g) + 256 * (Math.round((d - k) * e) + k) + (Math.round((d - c) * e) + c)).toString(16).slice(1)
			},
			Fa = function() {
				var d = b.createElement("style"),
					g = a.toolbarbackgroundcolor.replace("#", ""),
					c = parseInt(g.substring(0, 2), 16),
					f = parseInt(g.substring(2, 4), 16);
				g = parseInt(g.substring(4, 6), 16);
				d.type = "text/css";
				d.textContent = "#enhancer-for-youtube-toolbar,body.enhancer-for-youtube-cinema-mode #enhancer-for-youtube-toolbar-wrapper:hover #enhancer-for-youtube-toolbar{background-color:" + a.toolbarbackgroundcolor + ";border-top:0.077em solid " + a.toolbarbordercolor + ";border-right:0.077em solid " + a.toolbarbordercolor + ";border-left:0.077em solid " + a.toolbarbordercolor + ";color:" + a.toolbarcolor + "}#enhancer-for-youtube-toolbar i{color:" + a.toolbarcolor + " !important}#enhancer-for-youtube-toolbar.transparency{opacity:" + a.toolbaropacity / 100 + "}#enhancer-for-youtube-slider.ui-widget-content{background-image:none;background-color:" + a.toolbarbackgroundcolor + ";border:0.077em solid " + a.toolbarbordercolor + "}#enhancer-for-youtube-slider .ui-widget-header{background-image:none;background-color:" + aa(a.toolbarbackgroundcolor, -.1) + "}#enhancer-for-youtube-slider .ui-state-default{background-image:none;background-color:" + aa(a.toolbarbackgroundcolor, -.1) + ";border:0.077em solid " + a.toolbarbordercolor + "}#enhancer-for-youtube-slider .ui-state-hover,#enhancer-for-youtube-slider .ui-state-focus{background-image:none;background-color:" + aa(a.toolbarbackgroundcolor, -.15) + ";border:0.077em solid " + aa(a.toolbarbordercolor, -.15) + "}#enhancer-for-youtube-toolbar .start-end{background-color:rgba(" + c + "," + f + "," + g + ",0.85)}#enhancer-for-youtube-filters{background-color:" + a.toolbarbackgroundcolor + " !important;border:0.077em solid " + a.toolbarbordercolor + " !important;color:" + a.toolbarcolor + " !important}#enhancer-for-youtube-filters button.close{color:" + a.toolbarcolor + " !important}";
				b.head.appendChild(d)
			},
			Oa = function() {
				Ga = setInterval(function() {
					try {
						(b.activeElement.classList.contains("ytp-progress-bar") || b.activeElement.classList.contains("ytp-volume-panel")) && r()
					} catch (e) {}
				}, 3E3)
			},
			Pa = function() {
				clearInterval(Ga)
			},
			Qa = function(a) {
				try {
					100 <= a && setTimeout(function() {
						d.nextVideo()
					}, 2E3)
				} catch (k) {}
			},
			Ha = function(b) {
				1 === b && (d.removeEventListener("onStateChange", Ha), g && a.overridespeeds ? g.playbackRate = a.speed : d.setPlaybackRate(a.speed))
			},
			Ra = function(d) {
				try {
					a.pausevideos && !b.hidden && 1 === d && window.postMessage({
						enhancerforyoutube: "pause-videos"
					}, "*"), a.autopausevideos && !M && 1 === d && Q(), a.selectquality && !V && 1 === d && C()
				} catch (k) {}
			},
			Sa = function(e) {
				try {
					a.pausevideos && !b.hidden && 1 === e && window.postMessage({
						enhancerforyoutube: "pause-videos"
					}, "*");
					if (a.removeads && 1 === e && 0 > ba.indexOf(x) || oa && 1 === e) "video" === z ? X(e) : (g.currentTime = g.duration, a.autopausevideos ? Q() : a.selectquality && C(), W());
					0 === e && (d.addEventListener("onStateChange", Ha), W())
				} catch (k) {}
			},
			S = function() {
				w || (w = b.createElement("link"), w.rel = "stylesheet", w.href = O + "/youtube.css", b.head.appendChild(w), w = b.createElement("style"), w.type = "text/css", w.textContent = "#enhancer-for-youtube-background{background-color:" + a.backgroundcolor + "}body.enhancer-for-youtube-cinema-mode #enhancer-for-youtube-background{opacity:" + a.backgroundopacity / 100 + ";visibility:visible}", b.head.appendChild(w), Fa());
				z = d = m = g = oa = V = !1;
				if (R())
					if (z = "video", L(), d) try {
						x = d.getVideoData().author
					} catch (e) {
						(x = b.querySelector(".yt-user-info")) && (x = x.textContent.trim())
					} else x = "";
					else if (/^https:\/\/www\.youtube\.com\/channel\/[^\/]+/.test(b.location.href) || /^https:\/\/www\.youtube\.com\/channel\/[^\/]+\/featured/.test(b.location.href) || /^https:\/\/www\.youtube\.com\/user\/[^\/]+/.test(b.location.href) || /^https:\/\/www\.youtube\.com\/user\/[^\/]+\/featured/.test(b.location.href))
					if (z = "channel", ja(), d) try {
						x = d.getVideoData().author
					} catch (e) {
						(x = b.querySelector("h1.branded-page-header-title")) && (x = x.textContent.trim())
					} else x = "";
				if (z && d) {
					m = d.parentNode;
					"EMBED" === d.nodeName ? (n = !0, spf.dispose(), "video" === z && 0 < b.location.href.indexOf("list=") && Na(), b.body.classList.add("flash-player-loaded")) : ((g = d.querySelector("video.html5-main-video")) && g.addEventListener("timeupdate", Ka), d.addEventListener("onAdStateChange", Sa), d.addEventListener("onStateChange", Ra), d.addEventListener("onError", Qa), m.addEventListener("mouseleave", Pa), m.addEventListener("mouseenter", Oa), m.addEventListener("click", za), m.addEventListener("wheel", Ba), m.addEventListener("click", Ca), setTimeout(function() {
						try {
							g && a.overridespeeds ? (g.playbackRate = a.speed, g.defaultPlaybackRate = a.speed) : d.setPlaybackRate(a.speed)
						} catch (e) {}
					}, 500));
					if ("video" === z) {
						a.removeads && 0 > ba.indexOf(x) && (n || !n && 1 === d.getAdState()) ? X() : a.autopausevideos && (n || !n && 1 === d.getPlayerState()) ? Q() : a.selectquality && C();
						a.removeads && 0 > ba.indexOf(x) && W();
						a.cinemamode ? setTimeout(function() {
							fa();
							!a.cinemamodewideplayer && a.wideplayer && G("large")
						}, a.cinemamodewideplayer || a.wideplayer ? 1200 : 1) : a.wideplayer && setTimeout(function() {
							G("large")
						}, 1200);
						u ? (u.style.display = "", y.style.display = "") : La();
						a.pinnedplayer && (Ea(), b.body.classList.add(a.pinnedplayersize), b.body.classList["left" === a.pinnedplayerposition ? "add" : "remove"]("pinned-left-player"));
						if (a.expanddescription) {
							b.body.classList.add("expanded-description");
							try {
								b.querySelector("#action-panel-details button.yt-uix-expander-collapsed-body").addEventListener("click", function() {
									setTimeout(function() {
										b.body.classList.remove("expanded-description")
									}, 200)
								})
							} catch (e) {}
						}
						if (0 < b.location.href.indexOf("list=")) try {
							setTimeout(function() {
								"block" === window.getComputedStyle(b.querySelector("#player-unavailable"), null).getPropertyValue("display") && b.querySelector(".playlist-videos-container .playlist-videos-list li.currently-playing").nextElementSibling.querySelector("a.playlist-video").click()
							}, 2E3)
						} catch (e) {}
					} else "channel" === z && (a.autopausevideos ? Q() : a.selectquality && C());
					ka(n ? m : d);
					a.controlvolume && m.addEventListener("wheel", wa);
					a.enablefilters && g && (g.style["-webkit-filter"] = a.filter, g.style.filter = a.filter);
					try {
						a.defaultvolume && d.setVolume(a.volume), d[a.removeannotations ? "unloadModule" : "loadModule"]("annotations_module"), d.setAttribute("annotations-module-loaded", a.removeannotations ? 0 : 1)
					} catch (e) {}
					a.pausevideos && !b.hidden && window.postMessage({
						enhancerforyoutube: "pause-videos"
					}, "*")
				}
			};
		window.EnhancerForYouTube = !0;
		var O = EnhancerForYouTubeResources,
			a = EnhancerForYouTubePreferences,
			E = EnhancerForYouTubeMessages,
			na = b.hidden,
			q = b.querySelector("#page"),
			m, d, g, y, u, h, t, I, Aa, B, ua, A, K, M, pa, w, Da, n, ma, z, P, Ga, qa, T, Ia, F, l, v, D, oa, V, x, ba = "" !== a.whitelist ? a.whitelist.split(",") : [],
			ca;
		(new MutationObserver(function(e) {
			e.forEach(function(e) {
				if (null !== e.addedNodes)
					for (var c = e.addedNodes.length - 1; 0 <= c; c--)
						if (!n && e.addedNodes[c].id && ("movie_player" === e.addedNodes[c].id || "c4-player" === e.addedNodes[c].id)) {
							if ("EMBED" === e.addedNodes[c].nodeName) {
								try {
									d.stopVideo()
								} catch (f) {}
								m = e.addedNodes[c].parentNode;
								ka(m);
								h && (h.querySelector(".speed").classList.add("not-allowed"), h.querySelector(".filters").classList.add("not-allowed"))
							}
							S()
						} else if ("VIDEO" === e.addedNodes[c].nodeName && g && g != d.querySelector("video.html5-main-video")) g = e.addedNodes[c], setTimeout(function() {
					M = !1;
					S();
					try {
						g && a.overridespeeds ? (g.playbackRate = a.speed, g.defaultPlaybackRate = a.speed) : d.setPlaybackRate(a.speed)
					} catch (f) {}
				}, 650);
				else if (e.addedNodes[c].id && "comment-section-renderer" === e.addedNodes[c].id && a.newestcomments && !ca) setTimeout(function() {
					try {
						b.querySelector(".comment-section-sort-menu button.yt-uix-menu-trigger").click()
					} catch (f) {}
				}, 200);
				else if ("IFRAME" === e.addedNodes[c].nodeName && e.addedNodes[c].classList.contains("comment-section-sort-menu-mask") && a.newestcomments && !ca) try {
					b.querySelector('button.comment-section-sort-menu-item[data-menu_name="newest-first"]').click(), ca = !0
				} catch (f) {}
			})
		})).observe(b.body, {
			childList: !0,
			subtree: !0
		});
		window.addEventListener("spfrequest", function(a) {
			n && (a.preventDefault(), b.location.href = a.detail.url);
			clearInterval(qa);
			clearInterval(P);
			M = na = ca = !1;
			u && (u.style.display = "none", y.style.display = "none", B && (clearInterval(T), h.querySelector("i.loop").parentNode.classList.remove("active"), B.hide()));
			b.body.classList.remove("enhancer-for-youtube-pinned-player");
			try {
				d.classList.remove("ads-removed")
			} catch (k) {}
		});
		window.addEventListener("spfdone", function(a) {
			S()
		});
		(b.querySelector("#movie_player") || b.querySelector("#c4-player")) && S();
		b.addEventListener("visibilitychange", function k() {
			b.hidden || (M || S(), b.removeEventListener("visibilitychange", k), setTimeout(function() {
				M = !0;
				na = !1
			}, 1500))
		});
		window.addEventListener("load", function c() {
			window.removeEventListener("load", c);
			setTimeout(function() {
				w || S()
			}, 250)
		});
		a.executescript && window.postMessage({
			enhancerforyoutube: "custom-script"
		}, "*");
		if ("default" !== a.theme) {
			var H = b.head.querySelector("#enhancer-for-youtube-theme");
			H ? H.hasAttribute("href") && 0 > H.href.indexOf(a.theme) && H.setAttribute("href", O + "/vendor/themes/" + a.theme) : "custom" === a.theme ? window.postMessage({
				enhancerforyoutube: "custom-theme"
			}, "*") : (H = b.createElement("link"), H.id = "enhancer-for-youtube-theme", H.rel = "stylesheet", H.href = O + "/vendor/themes/" + a.theme, b.head.appendChild(H))
		}
		window.addEventListener("message", function(c) {
			if (c.data.enhancerforyoutube && "pause-video" === c.data.enhancerforyoutube) try {
				d.pauseVideo()
			} catch (p) {} else if (c.data.enhancerforyoutube && "preference-changed" === c.data.enhancerforyoutube) {
				var f = c.data.value;
				switch (c.data.name) {
					case "autopausevideos":
					case "disablepreloading":
					case "ignoreplaylists":
					case "newestcomments":
					case "overridespeeds":
					case "pauseforegroundtab":
					case "pausevideos":
					case "removeads":
					case "speedvariation":
					case "toolbartooltips":
					case "volumevariation":
						a[c.data.name] = f;
						break;
					case "backgroundcolor":
						a.backgroundcolor = f;
						y && (y.style.backgroundColor = f);
						break;
					case "backgroundopacity":
						a.backgroundopacity = f;
						y && (y.style.opacity = f / 100);
						break;
					case "cinemamode":
						a.cinemamode = f;
						R() && (f ? fa() : ha());
						break;
					case "cinemamodewideplayer":
						a.cinemamodewideplayer = f;
						R() && b.body.classList.contains("enhancer-for-youtube-cinema-mode") && (f ? G("large") : G("default"));
						break;
					case "controlvolume":
						a.controlvolume = f;
						if (m) m[f ? "addEventListener" : "removeEventListener"]("wheel", wa);
						break;
					case "customtheme":
						if ("default" !== a.theme) try {
							b.head.removeChild(b.head.querySelector("#enhancer-for-youtube-theme"))
						} catch (p) {}
						c = b.createElement("style");
						c.type = "text/css";
						c.id = "enhancer-for-youtube-theme";
						c.textContent = f;
						b.head.appendChild(c);
						ra(f);
						break;
					case "defaultvolume":
						a.defaultvolume = f;
						try {
							f && d.setVolume(a.volume)
						} catch (p) {}
						break;
					case "enablefilters":
						a.enablefilters = f;
						try {
							g.style["-webkit-filter"] = f ? a.filter : "", g.style.filter = f ? a.filter : ""
						} catch (p) {}
						break;
					case "executescript":
						a.executescript = f;
						a.executescript && window.postMessage({
							enhancerforyoutube: "custom-script"
						}, "*");
						break;
					case "expanddescription":
						a.expanddescription = f;
						try {
							b.querySelector("#action-panel-details button.yt-uix-expander" + (f ? "-collapsed" : "") + "-body").click()
						} catch (p) {}
						break;
					case "filter":
						a.filter = f;
						if (!b.hidden) try {
							g.style["-webkit-filter"] = f, g.style.filter = f, h.querySelector("i.filters").parentNode.classList.add("active")
						} catch (p) {}
						break;
					case "pinnedplayer":
						a.pinnedplayer = f;
						m && m.removeAttribute("io");
						if (f) b.body.classList.add(a.pinnedplayersize), R() && Ea();
						else try {
							b.body.classList.remove("enhancer-for-youtube-pinned-player", a.pinnedplayersize), pa.disconnect()
						} catch (p) {}
						break;
					case "pinnedplayerposition":
						a.pinnedplayerposition = f;
						b.body.classList["left" === f ? "add" : "remove"]("pinned-left-player");
						break;
					case "pinnedplayersize":
						b.body.classList.add(f);
						b.body.classList.remove(a.pinnedplayersize);
						a.pinnedplayersize = f;
						break;
					case "quality1":
					case "quality2":
					case "quality3":
					case "quality4":
					case "selectquality":
						a[c.data.name] = f;
						z && a.selectquality && C();
						break;
					case "removeannotations":
						a.removeannotations = f;
						try {
							d[f ? "unloadModule" : "loadModule"]("annotations_module"), d.setAttribute("annotations-module-loaded", f ? 0 : 1)
						} catch (p) {}
						break;
					case "slideeffect":
						a.slideeffect = f;
						if (h) h.classList[f ? "add" : "remove"]("slide-effect");
						Y();
						break;
					case "speed":
						a.speed = f;
						try {
							0 > [.25, .5, 1, 1.25, 1.5, 2].indexOf(f) ? (g.playbackRate = f, g.defaultPlaybackRate = f) : d.setPlaybackRate(f)
						} catch (p) {}
						break;
					case "theme":
						try {
							if ("default" !== a.theme && b.head.removeChild(b.head.querySelector("#enhancer-for-youtube-theme")), a.theme = f, "custom" === f) window.postMessage({
								enhancerforyoutube: "custom-theme"
							}, "*");
							else if ("default" !== f) {
								var l = b.createElement("link");
								l.id = "enhancer-for-youtube-theme";
								l.rel = "stylesheet";
								l.href = O + "/vendor/themes/" + a.theme;
								b.head.appendChild(l)
							}
						} catch (p) {}
						ra();
						break;
					case "toolbarbuttons":
						a.toolbarbuttons = f;
						h && ta();
						break;
					case "toolbarbackgroundcolor":
					case "toolbarbordercolor":
					case "toolbarcolor":
					case "toolbaropacity":
						a[c.data.name] = f;
						Fa();
						break;
					case "transparency":
						a.transparency = f;
						if (h) h.classList[f ? "add" : "remove"]("transparency");
						Y();
						break;
					case "volume":
						a.volume = f;
						try {
							d.setVolume(f)
						} catch (p) {}
						break;
					case "whitelist":
						ba = "" !== f ? f.split(",") : [];
						break;
					case "wideplayer":
						a.wideplayer = f, R() && (f ? G("large") : G("default"))
				}
			}
		});
		window.addEventListener("error", function(a) {
			setTimeout(function() {
				n || !d || d.querySelector("video") || b.location.reload()
			}, b.documentElement.hasAttribute("flash-player-for-youtube") || b.documentElement.hasAttribute("youtube-flash-player") ? 3E3 : 1)
		});
		window.addEventListener("resize", function(a) {
			clearTimeout(Ia);
			Ia = setTimeout(Y, 500)
		})
	}
})(document);