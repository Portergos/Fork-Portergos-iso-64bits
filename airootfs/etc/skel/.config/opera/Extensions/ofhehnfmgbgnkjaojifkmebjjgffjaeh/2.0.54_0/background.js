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
	function d(a) {
		chrome.windows.getAll({
			populate: !0
		}, function(b) {
			b.forEach(function(b) {
				b.tabs.forEach(function(b) {
					"init" === a ? chrome.tabs.executeScript(b.id, {
						file: "init.js"
					}, function(a) {
						chrome.runtime.lastError && (document.documentElement.dataset.e = 1)
					}) : chrome.tabs.sendMessage(b.id, a)
				})
			})
		})
	}
	chrome.runtime.onInstalled.addListener(function(a) {
		"install" === a.reason ? (chrome.tabs.create({
			url: "options.html",
			active: !1
		}), chrome.tabs.create({
			url: "https://www.mrfdev.com/how-to-use-enhancer-for-youtube",
			active: !0
		}, function(a) {
			chrome.tabs.executeScript(a.id, {
				file: "install.js",
				runAt: "document_end"
			})
		}), chrome.storage.local.set({
			date: Date.now()
		})) : "update" === a.reason && /2\.0\.3[0-4]/.test(a.previousVersion) && chrome.storage.local.get({
			backgroundtabsonly: !0,
			disableautoplay: !0
		}, function(a) {
			chrome.storage.local.set({
				autopausevideos: a.disableautoplay,
				pauseforegroundtab: !a.backgroundtabsonly
			});
			chrome.storage.local.remove(["backgroundtabsonly", "disableautoplay"])
		})
	});
	chrome.runtime.setUninstallURL("https://www.mrfdev.com/survey?b=opera&e=enhancer-for-youtube", function() {
		d({
			message: "enhancerforyoutube:reload"
		})
	});
	chrome.runtime.onSuspend.addListener(function() {
		d({
			message: "enhancerforyoutube:reload"
		})
	});
	chrome.runtime.onMessage.addListener(function(a, b, c) {
		c = a.enhancerforyoutube;
		"pause-videos" === c ? d({
			message: "enhancerforyoutube:pause-video"
		}) : "check-cookie" === c ? chrome.cookies.get({
			url: a.url,
			name: "VISITOR_INFO1_LIVE"
		}, function(b) {
			b && b.value !== a.current_value && chrome.storage.local.set({
				visitor_info1_live: b.value
			})
		}) : "set-cookie" === c ? chrome.cookies.set({
			url: a.url,
			name: a.name,
			value: a.value,
			domain: ".youtube.com",
			path: "/"
		}) : "custom-theme" === c ? chrome.storage.local.get({
			customtheme: ""
		}, function(a) {
			chrome.tabs.sendMessage(b.tab.id, {
				message: "enhancerforyoutube:custom-theme",
				customtheme: a.customtheme
			})
		}) : "custom-script" === c ? chrome.storage.local.get({
			script: ""
		}, function(a) {
			chrome.tabs.sendMessage(b.tab.id, {
				message: "enhancerforyoutube:custom-script",
				script: a.script
			})
		}) : "show-options" === c ? chrome.tabs.create({
			index: b.tab.index + 1,
			url: "options.html",
			active: !0
		}) : "content.js" === c ? chrome.tabs.executeScript(b.tab.id, {
			file: "content.js"
		}) : "filters" === c && chrome.tabs.executeScript(b.tab.id, {
			file: "filters.js"
		})
	});
	chrome.storage.onChanged.addListener(function(a, b) {
		for (key in a) "script" !== key && d({
			message: "enhancerforyoutube:preference-changed",
			name: key,
			value: a[key].newValue
		})
	});
	chrome.commands.onCommand.addListener(function(a) {
		d({
			message: "enhancerforyoutube:keyboard-shortcut",
			command: a
		})
	});
	chrome.browserAction.onClicked.addListener(function(a) {
		chrome.tabs.create({
			url: "options.html",
			active: !1
		})
	});
	d("init")
})();