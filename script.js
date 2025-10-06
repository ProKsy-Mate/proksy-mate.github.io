function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Update active state in navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // There isn't a nav link for every page, so we handle them separately
    const activeNavLink = document.getElementById('nav-' + pageId);
    if (activeNavLink) {
         activeNavLink.classList.add('active');
    } else if (pageId === 'marketing' || pageId === 'analytics') {
        // If on a service page, highlight the 'Solutions' nav item
        const solutionsLink = document.getElementById('nav-solutions');
        if(solutionsLink) solutionsLink.classList.add('active');
    }


    // Scroll to the top of the page
    window.scrollTo(0, 0);
}

// Handle initial page load based on URL hash if present
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showPage(hash);
    } else {
        showPage('home');
    }
});