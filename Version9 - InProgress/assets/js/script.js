const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseover', displayDropdown, false);
dropdown.addEventListener('mouseout', closeDropdown, false);

function displayDropdown() {
    const navItemDropdown = document.querySelector('.nav-item-dropdown');
    navItemDropdown.style.display = 'block';
    navItemDropdown.style.opacity = '100';
}

function closeDropdown() {
    const navItemDropdown = document.querySelector('.nav-item-dropdown');
    navItemDropdown.style.display = 'none';
    navItemDropdown.style.opacity = '0';
}