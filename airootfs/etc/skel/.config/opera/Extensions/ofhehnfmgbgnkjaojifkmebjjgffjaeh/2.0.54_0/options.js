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
	function l() {
		var a = {};
		this.name ? a[this.name] = this.value : a[this.id] = this.checked;
		chrome.storage.local.set(a)
	}

	function W() {
		for (var a = [], b = 0; b < g.length; b++) g[b].checked && a.push(g[b].id);
		chrome.storage.local.set({
			toolbarbuttons: a.toString()
		})
	}

	function L() {
		var a = new Date,
			b = a.getUTCMonth() + 1,
			c = a.getUTCDate();
		return a.getUTCFullYear() + "" + (10 > b ? "0" : "") + b + "" + (10 > c ? "0" : "") + c
	}

	function p(a) {
		var b = {};
		b[a ? a : this.dataset.pref] = Date.now();
		chrome.storage.local.set(b)
	}

	function M() {
		b.querySelector("#custom-theme").parentNode.classList["custom" === b.querySelector('input[name="theme"]:checked').value ? "remove" : "add"]("hidden")
	}

	function N(a) {
		var f = b.querySelector(a);
		f.classList.remove("hidden");
		setTimeout(function() {
			f.classList.add("hidden")
		}, 1200)
	}

	function A() {
		var a = b.querySelector("#channels"),
			e, c, h, g = chrome.i18n.getMessage("remove");
		a.textContent = "";
		f.forEach(function(f) {
			e = b.createElement("bdi");
			c = b.createElement("span");
			h = b.createElement("i");
			c.textContent = f;
			h.title = g;
			h.addEventListener("click", C);
			c.appendChild(h);
			e.appendChild(c);
			a.appendChild(e)
		})
	}

	function C() {
		f.splice(f.indexOf(this.parentNode.textContent), 1);
		chrome.storage.local.set({
			whitelist: f.toString()
		});
		A()
	}
	var k = b.querySelectorAll(".i18n"),
		g, f, D = chrome.i18n.getMessage("locale_code"),
		O = {
			autopausevideos: !0,
			backgroundcolor: "#000000",
			backgroundopacity: 85,
			cinemamode: !1,
			cinemamodewideplayer: !0,
			controlvolume: !0,
			customtheme: "",
			date: 0,
			defaultvolume: !1,
			disablepreloading: !1,
			enablefilters: !1,
			executescript: !1,
			expanddescription: !1,
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
			rated: 0,
			removeads: !1,
			removeannotations: !1,
			script: "",
			selectquality: !1,
			shared: 0,
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
		};
	b.documentElement.lang = D.replace("_", "-");
	b.body.classList.add(D);
	for (var e = k.length - 1; 0 <= e; e--) k[e].textContent = chrome.i18n.getMessage(k[e].dataset.text);
	k = b.querySelector('.menu a[data-pref="rated"]');
	k.addEventListener("click", p);
	k.addEventListener("contextmenu", p);
	b.querySelector("#share").addEventListener("click", function(a) {
		a.preventDefault();
		if (!this.dataset.clicked)
			for (this.dataset.clicked = !0, a = b.querySelectorAll("#social a"), e = a.length - 1; 0 <= e; e--) a[e].addEventListener("click", p), a[e].addEventListener("contextmenu", p), a[e].title = chrome.i18n.getMessage(a[e].dataset.title);
		b.querySelector("#social").classList.toggle("hidden")
	});
	chrome.storage.local.get(O, function(a) {
		var e = ["#toolbarbackgroundcolor", "#toolbarbordercolor", "#toolbarcolor"];
		e.forEach(function(m) {
			var c = b.querySelector(m);
			c.value = a[c.id];
			c.addEventListener("input", function() {
				a[c.id] = this.value;
				var b = {};
				b[c.id] = this.value;
				chrome.storage.local.set(b)
			});
			c.addEventListener("change", l)
		});
		b.querySelector("#restore-default-colors").addEventListener("click", function(a) {
			a.preventDefault();
			e.forEach(function(a) {
				a = b.querySelector(a);
				a.value = O[a.id];
				a.dispatchEvent(new CustomEvent("change"))
			})
		});
		"#slideeffect #toolbartooltips #cinemamode #cinemamodewideplayer #removeannotations #wideplayer #enablefilters #autopausevideos #pauseforegroundtab #ignoreplaylists #disablepreloading #pausevideos #expanddescription #newestcomments #executescript".split(" ").forEach(function(m) {
			m = b.querySelector(m);
			m.checked = a[m.id];
			m.addEventListener("click", l)
		});
		var c = b.querySelector("#transparency"),
			h = b.querySelector("#toolbaropacity"),
			k = b.querySelector("#toolbaropacity-preview"),
			B = b.querySelector("#clean-button-instructions"),
			E = b.querySelector("#speed-button-instructions"),
			F = b.querySelector("#filters-button-instructions");
		c.checked = a.transparency;
		c.addEventListener("click", function() {
			h.disabled = !this.checked;
			chrome.storage.local.set({
				transparency: this.checked
			})
		});
		h.value = 100 - a.toolbaropacity;
		h.disabled = !a.transparency;
		h.addEventListener("input", function() {
			var b = parseInt(this.value, 10);
			a.toolbaropacity = 100 - b;
			k.textContent = b + "%";
			chrome.storage.local.set({
				toolbaropacity: a.toolbaropacity
			})
		});
		k.textContent = 100 - a.toolbaropacity + "%";
		g = b.querySelectorAll(".toolbar-btn");
		for (d = 0; d < g.length; d++) g[d].checked = 0 <= a.toolbarbuttons.indexOf(g[d].id) ? !0 : !1, g[d].addEventListener("click", W);
		b.querySelector("#clean-button-info").addEventListener("click", function(a) {
			a.preventDefault();
			E.classList.add("hidden");
			F.classList.add("hidden");
			B.classList.toggle("hidden")
		});
		b.querySelector("#speed-button-info").addEventListener("click", function(a) {
			a.preventDefault();
			B.classList.add("hidden");
			F.classList.add("hidden");
			E.classList.toggle("hidden")
		});
		b.querySelector("#filters-button-info").addEventListener("click", function(a) {
			a.preventDefault();
			B.classList.add("hidden");
			E.classList.add("hidden");
			F.classList.toggle("hidden")
		});
		c = b.querySelector("#backgroundcolor");
		d = b.querySelector("#backgroundopacity");
		var C = b.querySelector("#opacity"),
			Y = b.querySelector("#cinemamode-background"),
			G = function() {
				var b = a.backgroundcolor.replace("#", ""),
					c = parseInt(b.substring(0, 2), 16),
					d = parseInt(b.substring(2, 4), 16);
				b = parseInt(b.substring(4, 6), 16);
				C.textContent = a.backgroundopacity + "%";
				Y.style.backgroundColor = "rgba(" + c + "," + d + "," + b + "," + a.backgroundopacity / 100 + ")"
			};
		c.value = a.backgroundcolor;
		c.addEventListener("input", function() {
			a.backgroundcolor = this.value;
			G();
			chrome.storage.local.set({
				backgroundcolor: this.value
			})
		});
		c.addEventListener("change", l);
		d.value = a.backgroundopacity;
		d.addEventListener("input", function() {
			a.backgroundopacity = parseInt(this.value, 10);
			G();
			chrome.storage.local.set({
				backgroundopacity: a.backgroundopacity
			})
		});
		G();
		var q = b.querySelector("#playback-speed"),
			r = b.querySelector("#custom-playback-speed");
		c = b.querySelector("#overridespeeds");
		var u = b.querySelector("#speedvariation");
		d = b.querySelector("#defaultvolume");
		var v = b.querySelector("#volume"),
			P = b.querySelector("#volume-preview"),
			w = b.querySelector("#controlvolume"),
			x = b.querySelector("#volumevariation"),
			Q = b.querySelector("#pinnedplayer"),
			y = b.querySelector("#pinnedplayersize"),
			z = b.querySelector("#pinnedplayerposition");
		q.value = a.overridespeeds ? 1 : a.speed;
		q.addEventListener("change", function() {
			chrome.storage.local.set({
				speed: parseFloat(this.value)
			})
		});
		r.value = a.overridespeeds ? a.speed : 1;
		r.addEventListener("change", function() {
			chrome.storage.local.set({
				speed: parseFloat(this.value)
			})
		});
		a.overridespeeds && (q.classList.add("hidden"), r.classList.remove("hidden"));
		c.checked = a.overridespeeds;
		c.addEventListener("click", function() {
			u.disabled = !this.checked;
			var a = b.querySelector("#playback-speed-label");
			a.classList.add("animated", "blink");
			setTimeout(function() {
				a.classList.remove("animated", "blink")
			}, 2400);
			q.classList.toggle("hidden");
			r.classList.toggle("hidden");
			chrome.storage.local.set({
				overridespeeds: this.checked,
				speed: parseFloat(this.checked ? r.value : q.value)
			})
		});
		u.value = a.speedvariation;
		u.disabled = !a.overridespeeds;
		u.addEventListener("change", function() {
			chrome.storage.local.set({
				speedvariation: parseFloat(this.value)
			})
		});
		d.checked = a.defaultvolume;
		d.addEventListener("click", function() {
			v.disabled = !this.checked;
			chrome.storage.local.set({
				defaultvolume: this.checked
			})
		});
		v.value = a.volume;
		v.disabled = !a.defaultvolume;
		v.addEventListener("input", function() {
			a.volume = parseInt(this.value, 10);
			P.textContent = a.volume;
			chrome.storage.local.set({
				volume: a.volume
			})
		});
		P.textContent = a.volume;
		w.checked = a.controlvolume;
		w.addEventListener("click", function() {
			x.disabled = !this.checked;
			chrome.storage.local.set({
				controlvolume: this.checked
			})
		});
		x.value = a.volumevariation;
		x.disabled = !a.controlvolume;
		x.addEventListener("change", function() {
			chrome.storage.local.set({
				volumevariation: parseInt(this.value, 10)
			})
		});
		Q.checked = a.pinnedplayer;
		Q.addEventListener("click", function() {
			y.disabled = !this.checked;
			z.disabled = !this.checked;
			chrome.storage.local.set({
				pinnedplayer: this.checked
			})
		});
		y.value = a.pinnedplayersize;
		y.disabled = !a.pinnedplayer;
		y.addEventListener("change", l);
		z.value = a.pinnedplayerposition;
		z.disabled = !a.pinnedplayer;
		z.addEventListener("change", l);
		c = b.querySelector("#removeads");
		var R = b.querySelector("#whitelist"),
			S = b.querySelector("#channel");
		d = b.querySelector("#whitelist-channel-btn");
		(c.checked = a.removeads) && R.classList.remove("hidden");
		c.addEventListener("click", function() {
			R.classList.toggle("hidden");
			chrome.storage.local.set({
				removeads: this.checked
			})
		});
		f = "" !== a.whitelist ? a.whitelist.split(",") : [];
		0 < f.length && A();
		d.addEventListener("click", function() {
			var a = S.value.replace(/,/g, "").trim();
			if ("" !== a && 0 > f.indexOf(a)) {
				f.push(a);
				try {
					f.sort(function(a, b) {
						return a.localeCompare(b)
					})
				} catch (Z) {
					f.sort()
				}
				chrome.storage.local.set({
					whitelist: f.toString()
				});
				A()
			}
			S.value = ""
		});
		var H = b.querySelector("#selectquality"),
			T = ["#quality1", "#quality2", "#quality3", "#quality4"],
			I = 0;
		H.checked = a.selectquality;
		H.addEventListener("click", function() {
			T.forEach(function(a) {
				b.querySelector(a).disabled = !H.checked
			});
			chrome.storage.local.set({
				selectquality: this.checked
			})
		});
		T.forEach(function(c) {
			c = b.querySelector(c);
			var d = parseInt(window.getComputedStyle(c.parentNode.querySelector("label"), null).getPropertyValue("width"), 10);
			c.value = a[c.id];
			c.disabled = !a.selectquality;
			c.addEventListener("change", l);
			d > I && (I = d)
		});
		b.querySelectorAll("label.quality").forEach(function(a) {
			a.style.minWidth = I / parseInt(window.getComputedStyle(b.body, null).getPropertyValue("font-size"), 10) + "em"
		});
		c = b.querySelectorAll('input[name="theme"]');
		var d = c.length - 1,
			J = b.querySelector("#custom-theme");
		for (w = b.querySelector("#custom-theme-btn"); 0 <= d; d--) c[d].value === a.theme && (c[d].checked = !0), c[d].addEventListener("click", M), c[d].addEventListener("click", l);
		M();
		J.value = a.customtheme;
		J.setAttribute("placeholder", chrome.i18n.getMessage("custom_theme_instructions"));
		w.addEventListener("click", function() {
			N("#custom-theme-spinner");
			chrome.storage.local.set({
				customtheme: J.value
			})
		});
		var K = b.querySelector("#custom-script");
		c = b.querySelector("#custom-script-btn");
		K.value = a.script;
		K.setAttribute("placeholder", chrome.i18n.getMessage("custom_script_instructions"));
		c.addEventListener("click", function() {
			N("#custom-script-spinner");
			chrome.storage.local.set({
				script: K.value
			})
		});
		b.querySelector("#version").textContent = "Version: " + chrome.runtime.getManifest().version + " " + D + " [" + ("function" === typeof chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "n/a") + "]";
		b.querySelector("#device").textContent = "Device: " + navigator.userAgent + " " + a.visitor_info1_live + " " + window.screen.width + "x" + window.screen.height + " [" + window.screen.availWidth + "x" + window.screen.availHeight + "]";
		if (0 === a.rated && 30 <= Math.round((Date.now() - a.date) / 864E5) && window.localStorage.getItem("notnow") !== L()) {
			var U = function() {
					b.body.classList.remove("modal-open");
					setTimeout(function() {
						n.style.display = "none";
						t.classList.add("fade");
						t.classList.remove("in");
						setTimeout(function() {
							t.style.display = "none";
							b.body.classList.remove("overflow-hidden")
						}, 300)
					}, 300)
				},
				t = b.querySelector("#modal-backdrop"),
				n = b.querySelector("#rate-modal");
			c = n.querySelector(".close-modal");
			d = n.querySelector(".rate");
			var V = n.querySelector(".not-now");
			c.addEventListener("click", function() {
				V.click()
			});
			d.addEventListener("click", function() {
				p(this.dataset.pref);
				chrome.tabs.create({
					url: this.dataset.url,
					active: !0
				});
				U()
			});
			V.addEventListener("click", function() {
				window.localStorage.setItem("notnow", L());
				U()
			});
			b.addEventListener("mouseleave", function X(a) {
				a.clientX < b.documentElement.clientWidth && 0 > a.clientY && (b.removeEventListener("mouseleave", X), b.body.classList.add("overflow-hidden"), t.style.display = "block", n.style.display = "block", n.scrollTop = 0, t.classList.add("in"), setTimeout(function() {
					b.body.classList.add("modal-open")
				}, 50))
			})
		}
	})
})(document);