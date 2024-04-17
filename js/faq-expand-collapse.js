document.querySelectorAll('.expandable-view').forEach(function(view) {
    view.addEventListener('click', function() {
        var card = view.closest('.expandable-card');
        card.classList.toggle('expanded');
        var icon = view.querySelector('.toggle-icon img');
        if (card.classList.contains('expanded')) {
            icon.src = '../img/assets/ic-collapse.svg';
        } else {
            icon.src = '../img/assets/ic-expand.svg';
        }
    });
});
