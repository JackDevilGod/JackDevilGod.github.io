function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};

fetch('/components/nav_bar.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('navbar-container').innerHTML = data;
                });

fetch('/components/nav_list.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('desktop_menu').innerHTML = data;
                    document.getElementById('mobile_menu').innerHTML = data;
                });