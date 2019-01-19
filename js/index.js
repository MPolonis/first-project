'use strict';

var toggleSidebar = function(){
   // var sidebarSmallerScreens = document.querySelector('#sidebar-smaller-screens');
    var sidebarMobile = document.querySelector('#sidebar-mobile')

   // sidebarSmallerScreens.classList.toggle('sidebar-mobile', 'sidebar-smaller-screens');
    sidebarMobile.classList.toggle('sidebar-smaller-screens');
};

var hamburgerMobile = document.querySelector('#hamburger-menu-mobile');
//var hamburgerDesktop = document.querySelector('#hamburger-menu-desktop');

hamburgerMobile.addEventListener('click', toggleSidebar);
//hamburgerDesktop.addEventListener('click', toggleSidebar);
