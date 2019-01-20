'use strict';

var toggleSidebar = function(){
  
    var sidebarMobile = document.querySelector('#toggle-menu')
    var cos = document.querySelector('#sidebar-mobile')

    sidebarMobile.classList.toggle('active');
    cos.classList.toggle('hidden');
};

var hamburgerMobile = document.querySelector('#hamburger-menu-mobile');
var hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerMobile.addEventListener('click', toggleSidebar);
hamburgerToggle.addEventListener('click', toggleSidebar);

