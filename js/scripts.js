
window.addEventListener('DOMContentLoaded', function() {

   

    // use userAgent to check if browser is IE or not
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var trident = ua.indexOf("Trident");
    var isIE = msie > 0 || trident > 0;

    // Navbar shrink function
    var navbarShrink = function () {
        var navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    var mainNav = document.body.querySelector('#mainNav');
    if (mainNav && !isIE) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    var navbarToggler = document.body.querySelector('.navbar-toggler');
    var responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    var menuBtn = document.querySelector('#navbarResponsive');

    navbarToggler.addEventListener('click', function() {

        if (menuBtn.style.display == 'none') {
            menuBtn.style.display = 'inline';
        } else {
            menuBtn.style.display = 'none';
        }
    })

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', function() {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});