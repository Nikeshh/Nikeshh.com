/*const dropdown = document.querySelector('.nav-item-dropdown');
dropdown.addEventListener('mouseover', displayDropdown, false);
dropdown.addEventListener('mouseout', closeDropdown, false);

function displayDropdown() {
    const navItemDropdown = document.querySelector('.dropdown-items');
    navItemDropdown.style.display = 'block';
    navItemDropdown.style.opacity = '100';
}

function closeDropdown() {
    const navItemDropdown = document.querySelector('.dropdown-items');
    navItemDropdown.style.display = 'none';
    navItemDropdown.style.opacity = '0';
}*/

let items = document.querySelectorAll('.carousel .carousel-item');
items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

window.addEventListener("load", (event) => {
    window.addEventListener("scroll", function(ev) {
        var scroll = window.pageYOffset;
        if(scroll > 56) {
            document.getElementById('top-navbar').classList.remove("navbar-light");
            document.getElementById('top-navbar').classList.add("navbar-dark");
            document.getElementById('top-navbar').classList.add("bg-dark");
        } else {
            document.getElementById('top-navbar').classList.remove("navbar-dark");
            document.getElementById('top-navbar').classList.remove("bg-dark");
            document.getElementById('top-navbar').classList.add("navbar-light");
        }
    });
});

/* global bootstrap: false */
(() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()
  