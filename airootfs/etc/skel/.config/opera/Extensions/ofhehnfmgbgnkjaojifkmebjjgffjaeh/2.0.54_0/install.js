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
(function(a) {
	var f = a.querySelector("main"),
		d = a.createElement("div"),
		e = a.createElement("div"),
		b = a.createElement("div"),
		g = a.createElement("strong"),
		c = a.createElement("img");
	d.className = "row";
	e.className = "col sm-12";
	b.className = "alert alert-success visible";
	g.appendChild(a.createTextNode("Enhancer for YouTube\u2122 has been successfully installed!"));
	b.appendChild(g);
	b.appendChild(a.createElement("br"));
	b.appendChild(a.createTextNode("Henceforth, when you will watch a video on YouTube.com, Enhancer for YouTube\u2122 will place a mini toolbar at the bottom of the screen. By default it looks like on the image below but you can fully customise it to your needs (visibility, buttons, colors, etc...)."));
	b.appendChild(a.createElement("br"));
	c.src = chrome.extension.getURL("resources/toolbar.png");
	c.alt = "toolbar";
	c.style = "margin:3px 0";
	b.appendChild(c);
	b.appendChild(a.createElement("br"));
	b.appendChild(a.createTextNode("Enhancer for YouTube\u2122 can be configured through its options page, which has just been automatically open for you, and below you can find all the infos/tips needed to get the most out of Enhancer for YouTube\u2122. Do not hesitate to play with settings!"));
	e.appendChild(b);
	d.appendChild(e);
	f.insertBefore(d, f.firstChild);
	window.scrollTo(0, 100);
	a.documentElement.dataset.reason = "install";
	a.documentElement.dataset.browser = "opera"
})(document);