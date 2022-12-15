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

$(window).on('load', function() {
    if ($(window).width() >= 992) {
        /* Show sidebar offcanvas always */
        var sidebar = document.getElementById('sidebar');
        var sidebarOffCanvas = new bootstrap.Offcanvas(sidebar);
        sidebarOffCanvas.show();

        /* Hide modal backdrop */
        $('.modal-backdrop').remove();

        /* Show sidebar offcanvas even when clicked outside the sidebar */
        let offcanvasEl = $("#sidebar");
        let offcanvasAllowClose = false;
        offcanvasEl.find("button, a").on("click", () => offcanvasAllowClose = true);
        offcanvasEl.on("hide.bs.offcanvas", (ev) => {
            if (offcanvasAllowClose) return;
            ev.preventDefault();
        });
    }
});