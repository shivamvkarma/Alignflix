
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
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
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


function openModal1() {
    const modal1 = document.getElementById('modal1');
    modal1.style.display = 'block';
}

function openModal2() {
    const modal2 = document.getElementById('modal2');
    modal2.style.display = 'block';
}
function openModal3() {
    const modal3 = document.getElementById('modal3');
    modal3.style.display = 'block';
}
function openModal4() {
    const modal4 = document.getElementById('modal4');
    modal4.style.display = 'block';
}

// Function to close the modal
function closeModal1() {
    document.getElementById('modal1').style.display = 'none';
}

function closeModal2() {
    document.getElementById('modal2').style.display = 'none';
}
function closeModal3() {
    document.getElementById('modal3').style.display = 'none';
}
function closeModal4() {
    document.getElementById('modal4').style.display = 'none';
}


// Adding event listener to open the modal when the button is clicked
document.getElementById('openModalBtn1').addEventListener('click', openModal1);
document.getElementById('openModalBtn2').addEventListener('click', openModal2);
document.getElementById('openModalBtn3').addEventListener('click', openModal3);
document.getElementById('openModalBtn4').addEventListener('click', openModal4);

// Adding event listener to close the modal when the close button (×) is clicked
document.querySelector('.close1').addEventListener('click', closeModal1);
document.querySelector('.close2').addEventListener('click', closeModal2);
document.querySelector('.close3').addEventListener('click', closeModal3);
document.querySelector('.close4').addEventListener('click', closeModal4);