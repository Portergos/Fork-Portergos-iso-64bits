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
		var y = function(a) {
				p && "yt-navigate-start" === a.type && (b.location.href = a.detail.url);
				clearInterval(ba);
				clearInterval(N);
				I = ca = da = !1;
				t && (t.style.display = "none", x.style.display = "none", B && (clearInterval(T), h.querySelector("i.loop").parentNode.classList.remove("active"), B.hide()));
				b.body.classList.remove("enhancer-for-youtube-pinned-player");
				try {
					d.classList.remove("ads-removed")
				} catch (l) {}
			},
			qa = function(c) {
				var b;
				"undefined" === typeof c && (b = JSON.parse(localStorage.getItem("enhancer-for-youtube") || '{"customtheme":""}'));
				localStorage.setItem("enhancer-for-youtube", JSON.stringify({
					customtheme: b ? b.customtheme : c,
					theme: a.theme.replace("-polymer.css", ".css"),
					polymer: !0
				}))
			},
			sa = function() {
				if (h) {
					for (var c = h.querySelectorAll("li"), b = c.length - 1; 0 <= b; b--) c[b].classList[0 <= a.toolbarbuttons.indexOf(c[b].dataset.name) ? "remove" : "add"]("hidden");
					"" === a.toolbarbuttons ? t.classList.add("hidden") : (t.classList.remove("hidden"), ra())
				}
			},
			Ja = function() {
				X();
				if (0 === B[0].children.length) {
					var a = n;
					B.slider({
						animate: "slow",
						range: !0,
						min: 0,
						max: E,
						values: [n, u],
						start: function(c, b) {
							a = n
						},
						slide: function(a, c) {
							n = c.values[0];
							u = c.values[1];
							X()
						},
						stop: function(c, b) {
							n === E ? (n = E - 1, ea(), X()) : u === n && (u = n + 1, ea(), X());
							a !== n && d.seekTo(n)
						}
					})
				} else ea();
				B.show();
				t.classList.add("extended")
			},
			ea = function() {
				B.slider("values", [n, u])
			},
			X = function() {
				ta[0].textContent = fa(n) + " / " + fa(u)
			},
			ua = function(a) {
				if (a.classList.contains("active")) clearInterval(T), a.classList.remove("active"), B.hide(), t.classList.remove("extended");
				else {
					a.classList.add("active");
					0 === $("#enhancer-for-youtube-slider", h).length && (B = $("<div />").attr("id", "enhancer-for-youtube-slider").appendTo(h), ta = $("<div />").addClass("start-end").appendTo(h));
					E = n = u = !1;
					var c = 0,
						e = 0 < b.location.href.indexOf("list=");
					T = setInterval(function() {
						try {
							d && "function" === typeof d.getPlayerState ? E ? !e && d.getCurrentTime() >= u ? d.seekTo(n) : e || 0 !== d.getPlayerState() ? (e && E === u && 2 > E - d.getCurrentTime() || e && E !== u && d.getCurrentTime() >= u) && d.seekTo(n) : d.playVideo() : (E = u = parseInt(d.getDuration(), 10), n = 0, "undefined" !== typeof ytplayer && ytplayer.config && ytplayer.config.args && (n = ytplayer.config.args.start ? parseInt(ytplayer.config.args.start, 10) : 0, u = ytplayer.config.args.end ? parseInt(ytplayer.config.args.end, 10) : u), c = 0, Ja()) : (c++, J())
						} catch (f) {
							15 < c && clearInterval(T), d = !1
						}
					}, 1E3)
				}
			},
			fa = function(a) {
				a = Number(a);
				var b = Math.floor(a / 3600),
					c = Math.floor(a % 3600 / 60);
				a = Math.floor(a % 3600 % 60);
				return (0 < b ? b + ":" : "") + (0 < c ? (0 < b && 10 > c ? "0" : "") + c + ":" : "0:") + (10 > a ? "0" : "") + a
			},
			ha = function() {
				b.body.classList.remove("enhancer-for-youtube-pinned-player");
				window.scrollTo(0, 0);
				b.body.classList.add("enhancer-for-youtube-cinema-mode");
				a.cinemamodewideplayer && F("large")
			},
			ia = function() {
				b.body.classList.remove("enhancer-for-youtube-cinema-mode");
				!a.widescreen && a.cinemamodewideplayer && F("default")
			},
			va = function(b) {
				if (!b.ctrlKey) {
					b.preventDefault();
					try {
						var c = d.getVolume();
						0 < b.deltaY ? (c -= a.volumevariation, 0 > c && (c = 0)) : (c += a.volumevariation, 100 < c && (c = 100), d.isMuted() && d.unMute());
						d.setVolume(c);
						G.textContent = c;
						ja();
						a.defaultvolume && (a.volume = c);
						var e = (new Date).getTime();
						b = 0 < c ? "false" : "true";
						localStorage["yt-player-volume"] = '{"data":"{\\"volume\\":' + c + ',\\"muted\\":' + b + '}","expiration":' + (e + 2592E6) + ',"creation":' + e + "}";
						sessionStorage["yt-player-volume"] = '{"data":"{\\"volume\\":' + c + ',\\"muted\\":' + b + '}","creation":' + e + "}"
					} catch (f) {}
				}
			},
			C = function() {
				var b = [a.quality1, a.quality2, a.quality3, a.quality4],
					l = setInterval(function() {
						try {
							if (d && "function" === typeof d.getPlayerState || ("video" === z ? J() : ka()), -1 !== d.getPlayerState()) {
								for (var a = 0, c = !1, g, h = d.getAvailableQualityLevels(); a < b.length && !c; a++)
									for (var m in h)
										if (b[a] === h[m]) {
											c = b[a];
											break
										}
								g = c ? c : "auto";
								g !== d.getPlaybackQuality() ? U || (U = !0, d.hasAttribute("flashvars") ? (d.pauseVideo(), d.setPlaybackQuality(g), d.playVideo()) : d.setPlaybackQuality(g)) : g === d.getPlaybackQuality() && (U = !0, clearInterval(l), clearTimeout(e))
							}
						} catch (Ua) {
							d = !1
						}
					}, 500),
					e = setTimeout(function() {
						clearInterval(l)
					}, 3E4)
			},
			W = function(c) {
				d || J();
				if (d && d.hasAttribute("flashvars")) {
					clearInterval(T);
					clearInterval(N);
					h && B && (h.querySelector("i.loop").parentNode.classList.remove("active"), B.hide());
					var l = "ad_module ad2_module ad3_module ad_channel_code_instream ad_channel_code_overlay ad_device ad_eurl ad_flags ad_host ad_host_tier ad_logging_flag ad_preroll ad_slots ad_tag ad_type ad_video_pub_id adsense_video_doc_id advideo aftv afv afv_ad_tag afv_ad_tag_restricted_to_instream afv_invideo_ad_tag afv_inslate_ad_tag afv_instream_max afv_video_min_cpm allow_html5_ads allowed_ads apply_fade_on_midrolls as_launched_in_country baseUrl cafe_experiment_id cc_asr enabled_engage_types excluded_ads dynamic_allocation_ad_tag max_dynamic_allocation_ad_tag_length max_ad_duration ppv_remarketing_url prefetch_ad_live_stream pyv_ad_channel remarketing_url rmktEnabled show_pyv_in_related use_meta_ad_player".split(" "),
						e = function(a) {
							for (var b = l.length - 1; 0 <= b; b--)
								if (a === l[b]) return !0;
							return !1
						},
						f = d.getAttribute("flashvars"),
						O = d.cloneNode(!0);
					f = f.split("&");
					for (var v = [], k, n, p = 0; p < f.length; p++) k = f[p].split("="), n = k[0], k = k[1], e(n) || v.push(n + "=" + k);
					e = v.join("&");
					0 > e.indexOf("enablejsapi") && (e += "&enablejsapi=1");
					0 > e.indexOf("iv_load_policy") && (e += "&iv_load_policy=1");
					0 > e.indexOf("autoplay") && (e += "&autoplay=1");
					a.removeannotations && (e = e.replace("iv_load_policy=1", "iv_load_policy=3"));
					O.setAttribute("flashvars", e);
					m.textContent = "";
					m.appendChild(O);
					la(m);
					a.autopausevideos ? P() : a.selectquality && C()
				} else if (d)
					if (c || "function" === typeof d.getAdState && 1 === d.getAdState() && "function" === typeof d.getDuration) try {
						Number.isFinite(g.duration) ? 3 < d.getDuration() - g.duration && (g.currentTime = g.duration, V(), a.overridespeeds ? g.playbackRate = a.speed : d.setPlaybackRate(a.speed), a.autopausevideos ? P() : a.selectquality && C()) : setTimeout(function() {
							W(c)
						}, 50)
					} catch (wa) {
						!g || (0 < wa.message.indexOf("currentTime") || "IndexSizeError" === wa.message) && b.querySelector("video.html5-main-video")
					} else V();
					else setTimeout(function() {
						W(c)
					}, 100)
			},
			V = function() {
				d.classList.add("ads-removed")
			},
			ma = function() {
				try {
					var b = d.getAvailableQualityLevels();
					0 <= b.indexOf(a.quality1) ? d.setPlaybackQuality(a.quality1) : 0 <= b.indexOf(a.quality2) ? d.setPlaybackQuality(a.quality2) : 0 <= b.indexOf(a.quality3) ? d.setPlaybackQuality(a.quality3) : 0 <= b.indexOf(a.quality4) && d.setPlaybackQuality(a.quality4)
				} catch (l) {}
			},
			F = function(a) {
				try {
					var c = b.body.classList.contains("enhancer-for-youtube-wide-player");
					K && !Q && (Q = K.hasAttribute("theater") && !b.body.classList.contains("enhancer-for-youtube-wide-player"));
					if ("large" === a || !a && !c) {
						xa || Y();
						var e = b.querySelector('.ytp-right-controls path[d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z"]');
						e ? e.parentNode.parentNode.click() : K.setAttribute("theater-requested_", "");
						b.body.classList.add("enhancer-for-youtube-wide-player");
						!Q && setTimeout(function() {
							window.postMessage({
								enhancerforyoutube: "set-cookie",
								url: b.location.href,
								name: "wide",
								value: "0"
							}, "*")
						}, 250)
					} else if ("default" === a || !a && c) {
						if (!Q) {
							var f = b.querySelector('.ytp-right-controls path[d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z"]');
							f ? f.parentNode.parentNode.click() : K.removeAttribute("theater-requested_");
							!f && window.postMessage({
								enhancerforyoutube: "set-cookie",
								url: b.location.href,
								name: "wide",
								value: "0"
							}, "*")
						}
						b.body.classList.remove("enhancer-for-youtube-wide-player");
						Q = !1
					}
				} catch (O) {}
			},
			P = function() {
				if (a.ignoreplaylists && 0 < b.location.href.indexOf("list=") || !a.pauseforegroundtab && !ca && !b.hidden) a.selectquality && (p ? C() : ma()), b.hidden || (I = !0);
				else {
					b.hidden || (I = !0);
					clearInterval(N);
					try {
						a.disablepreloading ? (d.stopVideo(), d.addEventListener("onStateChange", function O(b) {
							if (1 === b) {
								d.removeEventListener("onStateChange", O);
								a.selectquality && (p ? C() : ma());
								try {
									d[a.removeannotations ? "unloadModule" : "loadModule"]("annotations_module"), d.setAttribute("annotations-module-loaded", a.removeannotations ? 0 : 1), "undefined" !== typeof ytplayer && ytplayer.config && ytplayer.config.args && ytplayer.config.args.start && d.seekTo(parseInt(ytplayer.config.args.start, 10))
								} catch (v) {}
							}
						})) : d.pauseVideo()
					} catch (e) {
						var c, l = 0;
						N = setInterval(function() {
							try {
								d && "function" === typeof d.getPlayerState || (l++, "video" === z ? J() : ka()), c = d.getPlayerState(), b.hidden ? -1 !== c && a.disablepreloading ? d.stopVideo() : 2 === c || a.disablepreloading || d.pauseVideo() : -1 !== c && 5 !== c && a.pauseforegroundtab && a.disablepreloading ? d.stopVideo() : 2 !== c && a.pauseforegroundtab && !a.disablepreloading ? (-1 !== c && 5 !== c || d.playVideo(), 3 !== c && d.pauseVideo()) : clearInterval(N)
							} catch (f) {
								200 < l && clearInterval(N), d = !1
							}
						}, 50)
					}
					a.selectquality && (p ? C() : ma());
					q()
				}
			},
			ya = function(b) {
				if (b.ctrlKey && !b.shiftKey || "I" === b.target.nodeName) {
					b.preventDefault();
					try {
						var c = a.speed;
						a.overridespeeds ? g.playbackRate = c : d.setPlaybackRate(c);
						"I" === b.target.nodeName ? r.textContent = D.speed + " x" + c : (G.textContent = "x" + c, ja())
					} catch (e) {}
					q()
				}
			},
			ja = function() {
				try {
					var a = b.documentElement.querySelector(":scope > div[style]").shadowRoot.querySelector(".custom-button-wrapper #video-detach-button");
					a.setAttribute("style", "display:none!important")
				} catch (l) {}
				G.setAttribute("style", "display:block!important");
				clearTimeout(za);
				za = setTimeout(function() {
					G.setAttribute("style", "display:none!important");
					a && a.removeAttribute("style")
				}, 1500)
			},
			ra = function() {
				t.style.marginLeft = "-" + parseInt(window.getComputedStyle(h, null).getPropertyValue("width"), 10) / 2 + "px"
			},
			L = function(b, d) {
				b.addEventListener("mouseenter", function(b) {
					a.toolbartooltips && (r.textContent = d, r.style.left = 4 + Math.floor(b.target.getBoundingClientRect().left) - parseInt(window.getComputedStyle(r, null).getPropertyValue("width"), 10) / 2 + "px", r.classList.add("visible"))
				});
				b.addEventListener("mouseleave", function() {
					r.classList.remove("visible")
				})
			},
			La = function() {
				try {
					A.max = g.duration, A.value = g.currentTime
				} catch (c) {}
			},
			Aa = function(b) {
				if ("I" === b.target.nodeName || b.ctrlKey)
					if (b.preventDefault(), !p) try {
						if (a.overridespeeds) {
							var c = g.playbackRate;
							0 < b.deltaY ? (c = parseFloat((c - a.speedvariation).toFixed(2)), 0 >= c && (c = a.speedvariation), g.playbackRate = c) : 0 > b.deltaY && (c = parseFloat((c + a.speedvariation).toFixed(2)), g.playbackRate = c)
						} else {
							var e = d.getAvailablePlaybackRates();
							c = d.getPlaybackRate();
							var f = e.indexOf(c);
							0 < b.deltaY && 0 < f ? (c = e[f - 1], d.setPlaybackRate(c)) : 0 > b.deltaY && f < e.length - 1 && (c = e[f + 1], d.setPlaybackRate(c))
						}
						"I" === b.target.nodeName ? r.textContent = D.speed + " x" + c : (G.textContent = "x" + c, ja())
					} catch (O) {}
			},
			Ba = function(b) {
				if ("I" === b.target.nodeName || b.ctrlKey && b.shiftKey) {
					b.preventDefault();
					try {
						var c = "" === (g.style.filter ? g.style.filter : g.style["-webkit-filter"]) ? !1 : !0;
						g.style["-webkit-filter"] = c ? "" : a.filter;
						g.style.filter = c ? "" : a.filter;
						h.querySelector("i.filters").parentNode.classList[c ? "remove" : "add"]("active")
					} catch (e) {}
				}
				q()
			},
			la = function(a) {
				a.querySelector("#enhancer-for-youtube-player-info") || (b.querySelector("#enhancer-for-youtube-player-info") || (G = b.createElement("div"), G.id = "enhancer-for-youtube-player-info"), a.appendChild(G))
			},
			Ma = function() {
				if (!t) {
					x = b.createElement("div");
					t = b.createElement("div");
					h = b.createElement("div");
					r = b.createElement("div");
					var c = b.createDocumentFragment(),
						l = b.createElement("ul"),
						e = b.createElement("li"),
						f = b.createElement("i");
					x.id = "enhancer-for-youtube-background";
					x.style.visibility = "hidden";
					x.addEventListener("click", function() {
						ia();
						q()
					});
					c.appendChild(x);
					t.id = "enhancer-for-youtube-toolbar-wrapper";
					h.id = "enhancer-for-youtube-toolbar";
					r.id = "enhancer-for-youtube-tooltip";
					c.appendChild(r);
					h.style.visibility = "hidden";
					a.transparency && h.classList.add("transparency");
					a.slideeffect && h.classList.add("slide-effect");
					e.dataset.name = f.className = "clean";
					e.appendChild(f);
					e.addEventListener("click", function() {
						na = !0;
						W();
						q()
					});
					e.addEventListener("contextmenu", function(a) {
						a.preventDefault();
						d || J();
						try {
							var b = d.getAttribute("annotations-module-loaded");
							d["1" === b ? "unloadModule" : "loadModule"]("annotations_module");
							d.setAttribute("annotations-module-loaded", "1" === b ? 0 : 1);
							q()
						} catch (Ka) {}
						return !1
					});
					L(e, D.remove_ads);
					l.appendChild(e);
					e = b.createElement("li");
					f = b.createElement("i");
					e.dataset.name = f.className = "cinema";
					e.appendChild(f);
					e.addEventListener("click", function() {
						b.body.classList.contains("enhancer-for-youtube-cinema-mode") ? ia() : ha();
						q()
					});
					L(e, D.cinema_mode);
					l.appendChild(e);
					e = b.createElement("li");
					f = b.createElement("i");
					e.dataset.name = f.className = "resize";
					e.appendChild(f);
					e.addEventListener("click", function() {
						b.body.classList.contains("enhancer-for-youtube-wide-player") && b.body.classList.contains("enhancer-for-youtube-pinned-player") || (b.body.classList.contains("enhancer-for-youtube-pinned-player") && (b.body.classList.remove("enhancer-for-youtube-pinned-player"), window.scrollTo(0, 0)), F(), q())
					});
					L(e, D.resize_player);
					l.appendChild(e);
					e = b.createElement("li");
					f = b.createElement("i");
					e.dataset.name = f.className = "loop";
					e.appendChild(f);
					e.addEventListener("click", function() {
						if (Ca) ua(this);
						else {
							Ca = !0;
							k = b.createElement("link");
							k.rel = "stylesheet";
							k.href = M + "/vendor/jquery/jquery-ui.min.css";
							b.head.appendChild(k);
							var a = this,
								c = b.createElement("script");
							c.src = M + "/vendor/jquery/jquery-2.2.4.min.js";
							c.onload = function() {
								c = b.createElement("script");
								c.src = M + "/vendor/jquery/jquery-ui.min.js";
								c.onload = function() {
									ua(a)
								};
								b.head.appendChild(c)
							};
							b.head.appendChild(c)
						}
						q()
					});
					L(e, D.loop_video);
					l.appendChild(e);
					e = b.createElement("li");
					f = b.createElement("i");
					e.dataset.name = f.className = "speed";
					e.appendChild(f);
					p && e.classList.add("not-allowed");
					e.addEventListener("click", ya);
					e.addEventListener("wheel", Aa);
					e.addEventListener("mouseenter", function(b) {
						if (a.toolbartooltips) {
							var c = "";
							try {
								c = " x" + g.playbackRate
							} catch (Ka) {}
							r.textContent = D.speed + c;
							r.style.left = 4 + Math.floor(b.target.getBoundingClientRect().left) - parseInt(window.getComputedStyle(r, null).getPropertyValue("width"), 10) / 2 + "px";
							r.classList.add("visible")
						}
						q()
					});
					e.addEventListener("mouseleave", function() {
						r.classList.remove("visible")
					});
					l.appendChild(e);
					e = b.createElement("li");
					f = b.createElement("i");
					e.dataset.name = f.className = "filters";
					e.appendChild(f);
					p && e.classList.add("not-allowed");
					e.addEventListener("click", Ba);
					e.addEventListener("contextmenu", function(a) {
						a.preventDefault();
						this.classList.contains("not-allowed") || (this.hasAttribute("ui") ? b.querySelector("#enhancer-for-youtube-filters").classList.toggle("hidden") : window.postMessage({
							enhancerforyoutube: "filters"
						}, "*"));
						return !1
					});
					L(e, D.filters);
					l.appendChild(e);
					e = b.createElement("li");
					f = b.createElement("i");
					e.dataset.name = f.className = "script";
					e.appendChild(f);
					e.addEventListener("click", function() {
						q();
						window.postMessage({
							enhancerforyoutube: "custom-script"
						}, "*")
					});
					L(e, D.custom_script);
					l.appendChild(e);
					e = b.createElement("li");
					f = b.createElement("i");
					e.dataset.name = f.className = "options";
					e.appendChild(f);
					e.addEventListener("click", function() {
						q();
						window.postMessage({
							enhancerforyoutube: "show-options"
						}, "*")
					});
					L(e, D.options);
					l.appendChild(e);
					h.appendChild(l);
					t.appendChild(h);
					c.appendChild(t);
					A = b.createElement("progress");
					A.id = "enhancer-for-youtube-progress";
					A.max = 1;
					A.value = 0;
					A.addEventListener("click", function(a) {
						g && (g.currentTime = Math.floor((a.pageX - this.offsetLeft) * this.max / this.offsetWidth));
						q()
					});
					A.addEventListener("mouseenter", function() {
						H.classList.add("visible")
					});
					A.addEventListener("mouseleave", function() {
						H.classList.remove("visible")
					});
					A.addEventListener("mousemove", function(a) {
						g && (H.textContent = fa(Math.floor((a.pageX - this.offsetLeft) * this.max / this.offsetWidth)), H.style.left = a.pageX - parseInt(window.getComputedStyle(H, null).getPropertyValue("width"), 10) / 2 - 6 + "px")
					});
					c.appendChild(A);
					H = b.createElement("div");
					H.id = "enhancer-for-youtube-progress-tooltip";
					c.appendChild(H);
					$unpin = b.createElement("div");
					$unpin.id = "enhancer-for-youtube-unpin-player";
					$unpin.addEventListener("click", function() {
						b.body.classList.remove("enhancer-for-youtube-pinned-player")
					});
					c.appendChild($unpin);
					b.body.appendChild(c);
					setTimeout(function() {
						sa();
						ra();
						x.style.visibility = "";
						h.style.visibility = ""
					}, 500)
				}
			},
			Y = function() {
				var a = b.documentElement.clientWidth,
					d = b.documentElement.clientHeight,
					e = window.innerWidth,
					f = b.querySelector("ytd-masthead");
				f = f ? parseInt(window.getComputedStyle(f, null).getPropertyValue("height"), 10) : 56;
				var g = h ? parseInt(window.getComputedStyle(h, null).getPropertyValue("height"), 10) + 1 : 30;
				parseInt(16 / 9 * (d - f - g), 10) > a ? d = parseInt(a / (16 / 9), 10) : (d = parseInt(d - f - g, 10), a = parseInt(16 / 9 * d, 10), e -= e - a);
				f = parseInt(e / (16 / 9), 10);
				g = parseInt(a / 2, 10);
				var m = parseInt(e / 2, 10);
				var k = b.createElement("style");
				k.type = "text/css";
				k.textContent = "body.enhancer-for-youtube-wide-player ytd-watch[theater] #player{height:" + d + "px!important}body.enhancer-for-youtube-wide-player ytd-watch[theater] embed#movie_player,body.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) video.html5-main-video,body.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) .ytp-iv-video-content{height:" + d + "px!important}body.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) video.html5-main-video,body.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) .ytp-iv-video-content{width:" + a + "px!important;margin-left:-" + g + "px!important}body.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch[theater] #player{height:" + f + "px!important}body.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch[theater] embed#movie_player,body.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) video.html5-main-video,body.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) .ytp-iv-video-content{height:" + d + "px!important}body.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) video.html5-main-video,body.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) .ytp-iv-video-content{width:" + a + "px!important;margin-left:-" + g + "px!important}\t\t\tbody.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) video.html5-main-video,body.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch[theater] #movie_player:not(.ytp-fullscreen) .ytp-iv-video-content{width:" + e + "px!important;margin-left:-" + m + "px!important}";
				b.head.appendChild(k);
				xa = !0
			},
			Da = function() {
				window.IntersectionObserver && !m.hasAttribute("io") && (m.setAttribute("io", 1), oa = new IntersectionObserver(function(a) {
					if ((0 === a[0].intersectionRatio && !b.body.classList.contains("enhancer-for-youtube-pinned-player") && 0 < window.scrollY || 0 < a[0].intersectionRatio && .12 > a[0].intersectionRatio) && window.scrollY > m.offsetHeight - 100 && R()) {
						b.body.classList.add("enhancer-for-youtube-pinned-player");
						try {
							g.style.top = ""
						} catch (l) {}
						q()
					} else 0 !== a[0].intersectionRatio && (b.body.classList.remove("enhancer-for-youtube-pinned-player"), p || Na())
				}, {
					threshold: .12
				}), oa.observe(m))
			},
			Na = function() {
				setTimeout(function() {
					try {
						if (!b.body.classList.contains("enhancer-for-youtube-pinned-player")) {
							var a = window.getComputedStyle(m).height,
								l = window.getComputedStyle(d).height,
								e = window.getComputedStyle(g).height;
							l !== a ? (d.style.width = window.getComputedStyle(m).width, d.style.height = a, d.style.width = "", d.style.height = "") : e !== a && (g.style.width = window.getComputedStyle(m).width, g.style.height = a, g.style.top = "")
						}
					} catch (f) {}
				}, 50)
			},
			Ea = function() {
				(new MutationObserver(function(a) {
					a.forEach(function(a) {
						try {
							a.target.hasAttribute("theater-requested_") || a.target.hasAttribute("theater") || (b.body.classList.remove("enhancer-for-youtube-wide-player"), Q = !1)
						} catch (e) {}
					})
				})).observe(K, {
					attributes: !0
				})
			},
			Oa = function() {
				ba = setInterval(function() {
					try {
						if ("function" !== typeof d.getPlayerState && J(), 0 === d.getPlayerState() && (clearInterval(ba), !h.querySelector("i.loop").parentNode.classList.contains("active"))) {
							var a = b.querySelector("ytd-watch ytd-playlist-panel-renderer ytd-playlist-panel-video-renderer[selected]");
							if (a) {
								var g = a.nextElementSibling;
								g && (b.location.href = g.querySelector("a").href)
							}
						}
					} catch (e) {}
				}, 5E3)
			},
			pa = function() {
				var c = a.backgroundcolor.replace("#", ""),
					d = parseInt(c.substring(0, 2), 16),
					e = parseInt(c.substring(2, 4), 16);
				c = parseInt(c.substring(4, 6), 16);
				k = b.createElement("style");
				k.type = "text/css";
				k.textContent = "body.enhancer-for-youtube-cinema-mode.enhancer-for-youtube-wide-player ytd-watch .html5-video-player{background-color:rgba(" + d + "," + e + "," + c + "," + a.backgroundopacity / 100 + ")}";
				b.head.appendChild(k)
			},
			q = function() {
				try {
					b.activeElement.blur(), d.focus()
				} catch (c) {}
			},
			ka = function() {
				d = b.querySelector("#c4-player")
			},
			J = function() {
				d = b.querySelector("#movie_player")
			},
			R = function() {
				return /^https:\/\/www\.youtube\.com\/watch\?(.*&)?v=/.test(b.location.href)
			},
			Z = function(a, b) {
				var e = parseInt(a.slice(1), 16),
					c = 0 > b ? 0 : 255,
					d = 0 > b ? -1 * b : b,
					g = e >> 16,
					l = e >> 8 & 255;
				e &= 255;
				return "#" + (16777216 + 65536 * (Math.round((c - g) * d) + g) + 256 * (Math.round((c - l) * d) + l) + (Math.round((c - e) * d) + e)).toString(16).slice(1)
			},
			Fa = function() {
				var c = b.createElement("style"),
					d = a.toolbarbackgroundcolor.replace("#", ""),
					e = parseInt(d.substring(0, 2), 16),
					f = parseInt(d.substring(2, 4), 16);
				d = parseInt(d.substring(4, 6), 16);
				c.type = "text/css";
				c.textContent = "#enhancer-for-youtube-toolbar,body.enhancer-for-youtube-cinema-mode #enhancer-for-youtube-toolbar-wrapper:hover #enhancer-for-youtube-toolbar{background-color:" + a.toolbarbackgroundcolor + ";border-top:0.1em solid " + a.toolbarbordercolor + ";border-right:0.1em solid " + a.toolbarbordercolor + ";border-left:0.1em solid " + a.toolbarbordercolor + ";color:" + a.toolbarcolor + "}#enhancer-for-youtube-toolbar i{color:" + a.toolbarcolor + " !important}#enhancer-for-youtube-toolbar.transparency{opacity:" + a.toolbaropacity / 100 + "}#enhancer-for-youtube-slider.ui-widget-content{background-image:none;background-color:" + a.toolbarbackgroundcolor + ";border:0.1em solid " + a.toolbarbordercolor + "}#enhancer-for-youtube-slider .ui-widget-header{background-image:none;background-color:" + Z(a.toolbarbackgroundcolor, -.1) + "}#enhancer-for-youtube-slider .ui-state-default{background-image:none;background-color:" + Z(a.toolbarbackgroundcolor, -.1) + ";border:0.1em solid " + a.toolbarbordercolor + "}#enhancer-for-youtube-slider .ui-state-hover,#enhancer-for-youtube-slider .ui-state-focus{background-image:none;background-color:" + Z(a.toolbarbackgroundcolor, -.15) + ";border:0.1em solid " + Z(a.toolbarbordercolor, -.15) + "}#enhancer-for-youtube-toolbar .start-end{background-color:rgba(" + e + "," + f + "," + d + ",0.85)}#enhancer-for-youtube-filters{background-color:" + a.toolbarbackgroundcolor + " !important;border:0.1em solid " + a.toolbarbordercolor + " !important;color:" + a.toolbarcolor + " !important}#enhancer-for-youtube-filters button.close{color:" + a.toolbarcolor + " !important}";
				b.head.appendChild(c)
			},
			Pa = function() {
				Ga = setInterval(function() {
					try {
						(b.activeElement.classList.contains("ytp-progress-bar") || b.activeElement.classList.contains("ytp-volume-panel")) && q()
					} catch (c) {}
				}, 3E3)
			},
			Qa = function() {
				clearInterval(Ga)
			},
			Ra = function(a) {
				try {
					100 <= a && setTimeout(function() {
						d.nextVideo()
					}, 2E3)
				} catch (l) {}
			},
			Ha = function(b) {
				1 === b && (d.removeEventListener("onStateChange", Ha), g && a.overridespeeds ? g.playbackRate = a.speed : d.setPlaybackRate(a.speed))
			},
			Sa = function(d) {
				try {
					a.pausevideos && !b.hidden && 1 === d && window.postMessage({
						enhancerforyoutube: "pause-videos"
					}, "*"), a.autopausevideos && !I && 1 === d && P(), a.selectquality && !U && 1 === d && C()
				} catch (l) {}
			},
			Ta = function(c) {
				try {
					a.pausevideos && !b.hidden && 1 === c && window.postMessage({
						enhancerforyoutube: "pause-videos"
					}, "*");
					if (a.removeads && 1 === c && 0 > aa.indexOf(w) || na && 1 === c) "video" === z ? W(c) : (g.currentTime = g.duration, a.autopausevideos ? P() : a.selectquality && C(), V());
					0 === c && (d.addEventListener("onStateChange", Ha), V())
				} catch (l) {}
			},
			S = function() {
				k || (k = b.createElement("link"), k.rel = "stylesheet", k.href = M + "/youtube-polymer.css", b.head.appendChild(k), k = b.createElement("style"), k.type = "text/css", k.textContent = "#enhancer-for-youtube-background{background-color:" + a.backgroundcolor + "}body.enhancer-for-youtube-cinema-mode #enhancer-for-youtube-background{opacity:" + a.backgroundopacity / 100 + ";visibility:visible}", b.head.appendChild(k), pa(), Fa());
				z = d = m = g = na = U = !1;
				if (R())
					if (z = "video", J(), d) try {
						w = d.getVideoData().author
					} catch (c) {
						(w = b.querySelector("#upload-info #owner-name")) && (w = w.textContent.trim())
					} else w = "";
					else if (/^https:\/\/www\.youtube\.com\/channel\/[^\/]+/.test(b.location.href) || /^https:\/\/www\.youtube\.com\/channel\/[^\/]+\/featured/.test(b.location.href) || /^https:\/\/www\.youtube\.com\/user\/[^\/]+/.test(b.location.href) || /^https:\/\/www\.youtube\.com\/user\/[^\/]+\/featured/.test(b.location.href))
					if (z = "channel", ka(), d) try {
						w = d.getVideoData().author
					} catch (c) {
						(w = b.querySelector("h1 #channel-title")) && (w = w.textContent.trim())
					} else w = "";
				if (z && d) {
					m = d.parentNode;
					"EMBED" === d.nodeName ? (p = !0, "video" === z && 0 < b.location.href.indexOf("list=") && Oa(), b.body.classList.add("flash-player-loaded")) : ((g = d.querySelector("video.html5-main-video")) && g.addEventListener("timeupdate", La), d.addEventListener("onAdStateChange", Ta), d.addEventListener("onStateChange", Sa), d.addEventListener("onError", Ra), m.addEventListener("mouseleave", Qa), m.addEventListener("mouseenter", Pa), m.addEventListener("click", ya), m.addEventListener("wheel", Aa), m.addEventListener("click", Ba), setTimeout(function() {
						try {
							g && a.overridespeeds ? (g.playbackRate = a.speed, g.defaultPlaybackRate = a.speed) : d.setPlaybackRate(a.speed)
						} catch (c) {}
					}, 500));
					if ("video" === z) {
						a.removeads && 0 > aa.indexOf(w) && (p || !p && 1 === d.getAdState()) ? W() : a.autopausevideos && (p || !p && 1 === d.getPlayerState()) ? P() : a.selectquality && C();
						a.removeads && 0 > aa.indexOf(w) && V();
						a.cinemamode ? setTimeout(function() {
							ha();
							!a.cinemamodewideplayer && a.wideplayer && F("large")
						}, a.cinemamodewideplayer || a.wideplayer ? 1200 : 1) : a.wideplayer && setTimeout(function() {
							F("large")
						}, 1200);
						t ? (t.style.display = "", x.style.display = "") : Ma();
						a.pinnedplayer && (Da(), b.body.classList.add(a.pinnedplayersize), b.body.classList["left" === a.pinnedplayerposition ? "add" : "remove"]("pinned-left-player"));
						if (a.expanddescription) try {
							b.querySelector("ytd-video-secondary-info-renderer.ytd-watch paper-button#more").click()
						} catch (c) {}
						if (0 < b.location.href.indexOf("list=")) try {
							setTimeout(function() {
								var a = b.querySelector("ytd-playability-error-supported-renderers");
								a && 240 <= parseInt(window.getComputedStyle(a, null).getPropertyValue("height"), 10) && b.querySelector("ytd-watch ytd-playlist-panel-renderer ytd-playlist-panel-video-renderer[selected]").nextElementSibling.querySelector("a").click()
							}, 2E3)
						} catch (c) {}
					} else "channel" === z && (a.autopausevideos ? P() : a.selectquality && C());
					la(p ? m : d);
					a.controlvolume && m.addEventListener("wheel", va);
					a.enablefilters && g && (g.style["-webkit-filter"] = a.filter, g.style.filter = a.filter);
					try {
						a.defaultvolume && d.setVolume(a.volume), d[a.removeannotations ? "unloadModule" : "loadModule"]("annotations_module"), d.setAttribute("annotations-module-loaded", a.removeannotations ? 0 : 1)
					} catch (c) {}
					a.pausevideos && !b.hidden && window.postMessage({
						enhancerforyoutube: "pause-videos"
					}, "*")
				}
			};
		window.EnhancerForYouTube = !0;
		var M = EnhancerForYouTubeResources,
			a = EnhancerForYouTubePreferences,
			D = EnhancerForYouTubeMessages,
			ca = b.hidden,
			K = b.querySelector("ytd-watch"),
			m, d, g, x, t, h, r, G, za, B, ta, A, H, I, oa, k, Ca, p, xa, z, N, Ga, ba, T, Ia, E, n, u, Q, na, U, w, aa = "" !== a.whitelist ? a.whitelist.split(",") : [],
			da;
		(new MutationObserver(function(c) {
			c.forEach(function(c) {
				if (null !== c.addedNodes)
					for (var e = c.addedNodes.length - 1; 0 <= e; e--)
						if (p || !c.addedNodes[e].id || "movie_player" !== c.addedNodes[e].id && "c4-player" !== c.addedNodes[e].id)
							if ("YTD-WATCH" === c.addedNodes[e].nodeName) K = c.addedNodes[e], Ea();
							else if ("VIDEO" === c.addedNodes[e].nodeName && g && g != d.querySelector("video.html5-main-video")) g = c.addedNodes[e], setTimeout(function() {
					I = !1;
					S();
					try {
						g && a.overridespeeds ? (g.playbackRate = a.speed, g.defaultPlaybackRate = a.speed) : d.setPlaybackRate(a.speed)
					} catch (f) {}
				}, 650);
				else if ("YTD-VIDEO-SECONDARY-INFO-RENDERER" === c.addedNodes[e].nodeName && a.expanddescription) try {
					c.addedNodes[e].querySelector("ytd-video-secondary-info-renderer.ytd-watch paper-button#more").click()
				} catch (f) {} else "YT-SORT-FILTER-SUB-MENU-RENDERER" === c.addedNodes[e].nodeName && a.newestcomments && !da && setTimeout(function() {
					try {
						b.querySelector("ytd-comments yt-sort-filter-sub-menu-renderer a.yt-dropdown-menu:last-of-type").click(), da = !0
					} catch (f) {}
				}, 500);
				else if ("EMBED" === c.addedNodes[e].nodeName) {
					try {
						d.stopVideo()
					} catch (f) {}
					m = c.addedNodes[e].parentNode;
					la(m);
					h && (h.querySelector(".speed").classList.add("not-allowed"), h.querySelector(".filters").classList.add("not-allowed"));
					"complete" === b.readyState && S()
				}
			})
		})).observe(b.body, {
			childList: !0,
			subtree: !0
		});
		K && Ea();
		window.addEventListener("yt-history-load", y);
		window.addEventListener("yt-navigate-start", y);
		window.addEventListener("yt-navigate-finish", function(a) {
			S()
		});
		(b.querySelector("video.html5-main-video") || b.querySelector("#movie_player") || b.querySelector("#c4-player")) && S();
		b.addEventListener("visibilitychange", function l() {
			b.hidden || (I || S(), b.removeEventListener("visibilitychange", l), setTimeout(function() {
				I = !0;
				ca = !1
			}, 1500))
		});
		window.addEventListener("load", function e() {
			window.removeEventListener("load", e);
			setTimeout(function() {
				k || S()
			}, 250)
		});
		a.executescript && window.postMessage({
			enhancerforyoutube: "custom-script"
		}, "*");
		a.theme = a.theme.replace(".css", "-polymer.css");
		"default" !== a.theme && ((y = b.head.querySelector("#enhancer-for-youtube-theme")) ? y.hasAttribute("href") && 0 > y.href.indexOf(a.theme) && y.setAttribute("href", M + "/vendor/themes/" + a.theme) : "custom" === a.theme ? window.postMessage({
			enhancerforyoutube: "custom-theme"
		}, "*") : (y = b.createElement("link"), y.id = "enhancer-for-youtube-theme", y.rel = "stylesheet", y.href = M + "/vendor/themes/" + a.theme, b.head.appendChild(y)));
		window.addEventListener("message", function(e) {
			if (e.data.enhancerforyoutube && "pause-video" === e.data.enhancerforyoutube) try {
				d.pauseVideo()
			} catch (v) {} else if (e.data.enhancerforyoutube && "preference-changed" === e.data.enhancerforyoutube) {
				var f = e.data.value;
				switch (e.data.name) {
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
						a[e.data.name] = f;
						break;
					case "backgroundcolor":
						a.backgroundcolor = f;
						x && (x.style.backgroundColor = f);
						pa();
						break;
					case "backgroundopacity":
						a.backgroundopacity = f;
						x && (x.style.opacity = f / 100);
						pa();
						break;
					case "cinemamode":
						a.cinemamode = f;
						R() && (f ? ha() : ia());
						break;
					case "cinemamodewideplayer":
						a.cinemamodewideplayer = f;
						R() && b.body.classList.contains("enhancer-for-youtube-cinema-mode") && (f ? F("large") : F("default"));
						break;
					case "controlvolume":
						a.controlvolume = f;
						if (m) m[f ? "addEventListener" : "removeEventListener"]("wheel", va);
						break;
					case "customtheme":
						if ("default" !== a.theme) try {
							b.head.removeChild(b.head.querySelector("#enhancer-for-youtube-theme"))
						} catch (v) {}
						e = b.createElement("style");
						e.type = "text/css";
						e.id = "enhancer-for-youtube-theme";
						e.textContent = f;
						b.head.appendChild(e);
						qa(f);
						break;
					case "defaultvolume":
						a.defaultvolume = f;
						try {
							f && d.setVolume(a.volume)
						} catch (v) {}
						break;
					case "enablefilters":
						a.enablefilters = f;
						try {
							g.style["-webkit-filter"] = f ? a.filter : "", g.style.filter = f ? a.filter : ""
						} catch (v) {}
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
							b.querySelector("ytd-video-secondary-info-renderer.ytd-watch paper-button#" + (f ? "more" : "less")).click()
						} catch (v) {}
						break;
					case "filter":
						a.filter = f;
						if (!b.hidden) try {
							g.style["-webkit-filter"] = f, g.style.filter = f, h.querySelector("i.filters").parentNode.classList.add("active")
						} catch (v) {}
						break;
					case "pinnedplayer":
						a.pinnedplayer = f;
						m && m.removeAttribute("io");
						if (f) b.body.classList.add(a.pinnedplayersize), R() && Da();
						else try {
							b.body.classList.remove("enhancer-for-youtube-pinned-player", a.pinnedplayersize), oa.disconnect()
						} catch (v) {}
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
						a[e.data.name] = f;
						z && a.selectquality && C();
						break;
					case "removeannotations":
						a.removeannotations = f;
						try {
							d[f ? "unloadModule" : "loadModule"]("annotations_module"), d.setAttribute("annotations-module-loaded", f ? 0 : 1)
						} catch (v) {}
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
						} catch (v) {}
						break;
					case "theme":
						try {
							if ("default" !== a.theme && b.head.removeChild(b.head.querySelector("#enhancer-for-youtube-theme")), a.theme = f.replace(".css", "-polymer.css"), "custom" === f) window.postMessage({
								enhancerforyoutube: "custom-theme"
							}, "*");
							else if ("default" !== f) {
								var k = b.createElement("link");
								k.id = "enhancer-for-youtube-theme";
								k.rel = "stylesheet";
								k.href = M + "/vendor/themes/" + a.theme;
								b.head.appendChild(k)
							}
						} catch (v) {}
						qa();
						break;
					case "toolbarbuttons":
						a.toolbarbuttons = f;
						h && sa();
						break;
					case "toolbarbackgroundcolor":
					case "toolbarbordercolor":
					case "toolbarcolor":
					case "toolbaropacity":
						a[e.data.name] = f;
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
						} catch (v) {}
						break;
					case "whitelist":
						aa = "" !== f ? f.split(",") : [];
						break;
					case "wideplayer":
						a.wideplayer = f, R() && (f ? F("large") : F("default"))
				}
			}
		});
		window.addEventListener("error", function(a) {
			setTimeout(function() {
				p || !d || d.querySelector("video") || b.location.reload()
			}, b.documentElement.hasAttribute("flash-player-for-youtube") || b.documentElement.hasAttribute("youtube-flash-player") ? 3E3 : 1)
		});
		window.addEventListener("resize", function(a) {
			clearTimeout(Ia);
			Ia = setTimeout(Y, 500)
		})
	}
})(document);