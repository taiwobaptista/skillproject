

    let toggleMenu = document.querySelector('.menubar');
    let myMenu = document.querySelector('.dashboard');
    toggleMenu.addEventListener('click', myToggle);
    function myToggle() {
        myMenu.classList.toggle('show');
    }
    