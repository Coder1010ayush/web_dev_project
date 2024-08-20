function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    var menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(function(menuItem) {
        menuItem.classList.remove('active');
    });

    var activeMenuItem = document.querySelector(`.menu a[onclick="showSection('${sectionId}')"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
}
