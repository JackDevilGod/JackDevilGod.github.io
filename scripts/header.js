function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};

fetch('/static_elements/nav_bar.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('navbar-container').innerHTML = data;
                });

fetch('/static_elements/nav_list.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementsByClassName('nav_content').innerHTML = data;
                });