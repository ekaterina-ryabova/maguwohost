"use strict";
	var showMenu = document.getElementById('menu-show-button');
	var navigation = document.getElementById('mobile-navigation');

	showMenu.addEventListener('click', function() {
		navigation.classList.toggle('menu-panel--active');
	});