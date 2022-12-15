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
})

window.addEventListener("load", (event) => {
    if (window.innerWidth >= 992) {
        /* Show sidebar offcanvas always */
        var sidebar = document.getElementById('sidebar');
        var sidebarOffCanvas = new bootstrap.Offcanvas(sidebar);
        sidebarOffCanvas.show();

        /* Hide modal backdrop */
        const modalBackdrops = document.getElementsByClassName("modal-backdrop");
        for (let i = 0; i < modalBackdrops.length; i++) {
            modalBackdrops[i].remove();
        }

        /* Show sidebar offcanvas even when clicked outside the sidebar */
        let offcanvasEl = document.getElementById("sidebar");
        let offcanvasAllowClose = false;
        document.querySelector("#sidebar button").addEventListener("click", () => offcanvasAllowClose = true);
        document.querySelector("#sidebar a").addEventListener("click", () => offcanvasAllowClose = true);
        offcanvasEl.addEventListener("hide.bs.offcanvas", function(ev) {
            if (offcanvasAllowClose) return;
            ev.preventDefault();        
        });

        window.addEventListener("scroll", function(ev) {
            var scroll = window.pageYOffset;
            if(scroll > 56) {
                document.getElementById('top-navbar').classList.add("navbar-dark");
                document.getElementById('top-navbar').classList.add("bg-dark");
            } else {
                document.getElementById('top-navbar').classList.remove("navbar-dark");
                document.getElementById('top-navbar').classList.remove("bg-dark");
            }
        });
    }
});