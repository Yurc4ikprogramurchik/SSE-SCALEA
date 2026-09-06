let menuOpen = false;

document.querySelector(".menu_small_icon").addEventListener("click", function() {
    const menu = document.querySelector(".menu-small");
    
    if (!menuOpen) {
        menu.style.transform = "translateX(0)";
        menuOpen = true;
    } else {
        menu.style.transform = "translateX(-100%)";
        menuOpen = false;
    }
});