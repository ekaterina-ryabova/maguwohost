"use strict";
	var showMenu = document.getElementById('menu-show-button');
	var hideMenu = document.getElementById('menu-close-button');
	var navigation = document.getElementById('mobile-navigation');

	showMenu.addEventListener('click', function() {
		navigation.classList.toggle('menu-panel--active');
	});
	
	hideMenu.addEventListener('click', function() {
		navigation.classList.remove('menu-panel--active');
	});