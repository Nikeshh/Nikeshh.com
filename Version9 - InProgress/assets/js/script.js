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

let items = document.querySelectorAll('.carousel .carousel-item')
items.forEach(async (el) => {
    const minPerSlide = 1;
    let next = el.nextElementSibling;
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0];
      	}
        await new Promise(r => setTimeout(r, 2000));
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
});