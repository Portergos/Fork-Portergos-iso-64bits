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
(function() {
	chrome.storage.local.get({
		autopausevideos: !0,
		backgroundcolor: "#000000",
		backgroundopacity: 85,
		cinemamode: !1,
		cinemamodewideplayer: !0,
		controlvolume: !0,
		date: 0,
		defaultvolume: !1,
		disablepreloading: !1,
		enablefilters: !1,
		executescript: !1,
		expanddescription: !1,
		filter: "none",
		ignoreplaylists: !0,
		newestcomments: !1,
		overridespeeds: !0,
		pauseforegroundtab: !1,
		pausevideos: !0,
		pinnedplayer: !0,
		pinnedplayerposition: "left",
		pinnedplayersize: "_400x225",
		quality1: "hd1080",
		quality2: "hd720",
		quality3: "large",
		quality4: "medium",
		removeads: !1,
		removeannotations: !1,
		selectquality: !1,
		slideeffect: !1,
		speed: 1,
		speedvariation: .1,
		theme: "default",
		toolbarbuttons: "clean,cinema,resize,loop,speed,options",
		toolbarbackgroundcolor: "#ffffff",
		toolbarbordercolor: "#cccccc",
		toolbarcolor: "#000000",
		toolbaropacity: 30,
		toolbartooltips: !0,
		transparency: !1,
		visitor_info1_live: "",
		volume: 50,
		volumevariation: 5,
		whitelist: "Opera",
		wideplayer: !1
	}, function(a) {
		var b = chrome.extension.getURL("resources"),
			c = document.createElement("script");
		c.textContent = 'var EnhancerForYouTubeResources="' + b + '",EnhancerForYouTubePreferences=' + JSON.stringify(a) + ",EnhancerForYouTubeMessages=" + JSON.stringify({
			remove_ads: chrome.i18n.getMessage("remove_ads"),
			cinema_mode: chrome.i18n.getMessage("cinema_mode"),
			resize_player: chrome.i18n.getMessage("resize_player"),
			loop_video: chrome.i18n.getMessage("loop_video"),
			speed: chrome.i18n.getMessage("speed"),
			filters: chrome.i18n.getMessage("filters"),
			custom_script: chrome.i18n.getMessage("custom_script"),
			options: chrome.i18n.getMessage("options")
		}) + ';(function(){var s=document.createElement("script");s.src="' + b + '/"+(window.Polymer?"youtube-polymer.js":"youtube.js");document.head.appendChild(s)})()';
		document.head.appendChild(c);
		chrome.runtime.sendMessage({
			enhancerforyoutube: "check-cookie",
			url: document.location.href,
			current_value: a.visitor_info1_live
		})
	});
	chrome.runtime.onMessage.addListener(function(a, b, c) {
		if ("enhancerforyoutube:keyboard-shortcut" !== a.message || document.hidden) "enhancerforyoutube:pause-video" === a.message && document.hidden ? window.postMessage({
			enhancerforyoutube: "pause-video"
		}, "*") : "enhancerforyoutube:custom-theme" === a.message ? (b = document.createElement("style"), b.type = "text/css", b.id = "enhancer-for-youtube-theme", b.textContent = a.customtheme, document.head.appendChild(b)) : "enhancerforyoutube:custom-script" === a.message ? (b = document.createElement("script"), b.textContent = a.script, document.head.appendChild(b)) : "enhancerforyoutube:preference-changed" === a.message ? window.postMessage({
			enhancerforyoutube: "preference-changed",
			name: a.name,
			value: a.value
		}, "*") : "enhancerforyoutube:reload" === a.message && document.location.reload();
		else if (b = document.querySelector("#enhancer-for-youtube-toolbar")) switch (a.command) {
			case "remove-ads":
				b.querySelector(".clean").click();
				break;
			case "toggle-annotations":
				b.querySelector('li[data-name="clean"]').dispatchEvent(new CustomEvent("contextmenu"));
				break;
			case "cinema-mode":
				b.querySelector(".cinema").click();
				break;
			case "resize-player":
				b.querySelector(".resize").click()
		}
	});
	window.addEventListener("message", function(a) {
		a.data.enhancerforyoutube && chrome.runtime.sendMessage(a.data)
	})
})();