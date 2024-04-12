
    // this script will allow user to get that scrolling effect on click of the button make sure id name should be same
    const mainContainer = document.getElementById('testimony');
    const scrollLeftButton = document.getElementById('leftArrow');
    const scrollRightButton = document.getElementById('rightArrow');

    scrollLeftButton.addEventListener('click', () => {
        mainContainer.scrollBy({ left: -110, behavior: 'smooth' });
    });

    scrollRightButton.addEventListener('click', () => {
        mainContainer.scrollBy({ left: 110, behavior: 'smooth' });
    });
