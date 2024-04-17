$(document).ready(function() {
    // Toggle the dropdown items when the link is clicked
    $('.product-dropdown').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.dropdown-items').slideToggle();
    });
});
