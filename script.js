// JavaScript for dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown buttons
    var dropdownBtns = document.querySelectorAll('.dropdown-btn');

    // Add event listener to each dropdown button
    dropdownBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Toggle the display of dropdown content when the button is clicked
            var dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});
