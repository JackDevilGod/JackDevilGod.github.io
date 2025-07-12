console.log("✅ mobile_menu.js loaded");

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};

fetch('/static_elements/nav_bar.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('navbar-container').innerHTML = data;
                });