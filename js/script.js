// function to highlight the current page in the navigation
function highlightMenu() {
  // Get the current URL path
  const currentPath = window.location.pathname.substring(1);

  // Get all nav items
  const navItems = document.querySelectorAll('.navbar li');

  // Loop through each nav item
  navItems.forEach((item) => {
    const anchor = item.querySelector('a');

    // If the link's href matches the current page's path, add the 'active' class
    if (anchor.getAttribute('href') === currentPath) {
      item.classList.add('active');
    }
  });
}

function init() {
  highlightMenu();
}

window.onload = init;
