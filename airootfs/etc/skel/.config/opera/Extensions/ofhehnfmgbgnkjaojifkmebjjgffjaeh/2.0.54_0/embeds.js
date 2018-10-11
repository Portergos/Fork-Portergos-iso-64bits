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
chrome.storage.local.get({
	controlvolume: !0,
	defaultvolume: !1,
	quality1: "hd1080",
	overridespeeds: !0,
	removeads: !1,
	removeannotations: !1,
	selectquality: !1,
	speed: 1,
	speedvariation: .1,
	volume: 50,
	volumevariation: 5
}, function(n) {
	var g = document.createElement("script");
	g.textContent = "(" + function(b) {
		function g(a, c) {
			try {
				Number.isFinite(c.duration) && 3 < a.getDuration() - c.duration && (c.currentTime = c.duration, b.overridespeeds ? c.playbackRate = b.speed : a.setPlaybackRate(b.speed))
			} catch (e) {}
		}

		function l() {
			var a = document.querySelector(".html5-video-player") || document.querySelector("#player embed"),
				c = document.querySelector(".html5-main-video"),
				e;
			if (a) {
				"DIV" !== a.nodeName || a.hasAttribute("enhancer-for-youtube-listeners") || (a.addEventListener("onAdStateChange", function(f) {
					1 === f && b.removeads && c && g(a, c)
				}), a.addEventListener("onStateChange", function(c) {
					if ((1 === c || 3 === c) && b.selectquality && !e) try {
						0 <= a.getAvailableQualityLevels().indexOf(b.quality1) && (a.setPlaybackQuality(b.quality1), e = !0)
					} catch (d) {
						a.setPlaybackQuality(b.quality1), e = !0
					} else if (-1 === c || 0 === c) e = !1
				}), a.parentNode.addEventListener("wheel", function(f) {
					if (b.controlvolume || f.ctrlKey) {
						f.preventDefault();
						try {
							if (f.ctrlKey)
								if (b.overridespeeds) {
									var d = c.playbackRate;
									0 < f.deltaY ? (d = parseFloat((d - b.speedvariation).toFixed(2)), 0 >= d && (d = b.speedvariation), c.playbackRate = d) : 0 > f.deltaY && (d = parseFloat((d + b.speedvariation).toFixed(2)), c.playbackRate = d)
								} else {
									var e = a.getAvailablePlaybackRates();
									d = a.getPlaybackRate();
									var g = e.indexOf(d);
									0 < f.deltaY && 0 < g ? (d = e[g - 1], a.setPlaybackRate(d)) : 0 > f.deltaY && g < e.length - 1 && (d = e[g + 1], a.setPlaybackRate(d))
								}
							else {
								var h = a.getVolume();
								0 < f.deltaY ? (h -= b.volumevariation, 0 > h && (h = 0)) : (h += b.volumevariation, 100 < h && (h = 100), a.isMuted() && a.unMute());
								a.setVolume(h)
							}
						} catch (q) {}
					}
				}), a.parentNode.addEventListener("click", function(e) {
					if (e.ctrlKey && !e.shiftKey) {
						e.preventDefault();
						try {
							var d = b.speed;
							b.overridespeeds ? c.playbackRate = d : a.setPlaybackRate(d)
						} catch (p) {}
					}
				}), a.setAttribute("enhancer-for-youtube-listeners", ""));
				if (b.removeads && c) {
					var k = document.createElement("style");
					k.type = "text/css";
					k.textContent = ".video-ads,.ytp-ad-progress-list{display:none !important}";
					document.head.appendChild(k);
					"function" === typeof a.getAdState && 1 === a.getAdState() && g(a, c)
				}
				try {
					b.removeannotations && "function" === typeof a.unloadModule && a.unloadModule("annotations_module"), b.defaultvolume && a.setVolume(b.volume), c && b.overridespeeds ? (c.playbackRate = b.speed, c.defaultPlaybackRate = b.speed) : a.setPlaybackRate(b.speed), b.selectquality && a.setPlaybackQuality(b.quality1)
				} catch (f) {}
			}
		}
		if ("complete" === document.readyState) l();
		else {
			var m = new MutationObserver(function(a) {
				a.forEach(function(a) {
					if (null !== a.addedNodes)
						for (var b = a.addedNodes.length - 1; 0 <= b; b--)
							if ("VIDEO" === a.addedNodes[b].nodeName && a.addedNodes[b].hasAttribute("class") && a.addedNodes[b].classList.contains("html5-main-video") || "EMBED" === a.addedNodes[b].nodeName) m.disconnect(), l()
				})
			});
			m.observe(document.documentElement, {
				childList: !0,
				subtree: !0
			})
		}
	}.toString() + ")(" + JSON.stringify(n) + ")";
	document.documentElement.appendChild(g)
});