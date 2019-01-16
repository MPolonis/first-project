'use strict';

var sidenavHam = function(event){
    this.classList.toggle('sidebar-smaller-screens');
    //this.classList.toggle('sidebar-mobile');
};

var hamburger = document.querySelector('#hamburger-menu');

hamburger.addEventListener('click', sidenavHam);
