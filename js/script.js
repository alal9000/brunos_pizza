document.addEventListener('DOMContentLoaded', function () {
  // Get the current URL path
  console.log('hi');
  const currentPath = window.location.pathname.substring(1);
  console.log(currentPath);

  // Get all nav items
  const navItems = document.querySelectorAll('.navbar li');
  console.log(navItems);
  // Loop through each nav item
  navItems.forEach((item) => {
    const anchor = item.querySelector('a');
    console.log(anchor);
    console.log(anchor.getAttribute('href'));

    // If the link's href matches the current page's path, add the 'active' class
    if (anchor.getAttribute('href') === currentPath) {
      item.classList.add('active');
    }
  });
});
