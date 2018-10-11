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
	var c = document.createElement("script");
	c.textContent = "(" + function(a, c) {
		var b = JSON.parse(localStorage.getItem("enhancer-for-youtube") || '{"theme":"default","customtheme":"","polymer":false}');
		if ("custom" === b.theme) {
			var d = a.createElement("style");
			d.type = "text/css";
			d.id = "enhancer-for-youtube-theme";
			d.textContent = b.customtheme;
			var f = setInterval(function() {
				a.head && (clearInterval(f), a.head.appendChild(d))
			}, 25)
		} else if ("default" !== b.theme) {
			var e = a.createElement("link");
			e.id = "enhancer-for-youtube-theme";
			e.rel = "stylesheet";
			e.setAttribute("href", c + "/vendor/themes/" + (b.polymer ? b.theme.replace(".css", "-polymer.css") : b.theme));
			f = setInterval(function() {
				a.head && (clearInterval(f), a.head.appendChild(e))
			}, 25)
		}
	}.toString() + ')(document,"' + chrome.extension.getURL("resources") + '")';
	document.documentElement.appendChild(c);
	document.documentElement.setAttribute("enhancer-for-youtube", "")
})();