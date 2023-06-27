import './style.scss';

const
    // DOM elements
    menuEl = document.querySelector(".hamburger"),
    navigationEl = document.querySelector(".navigation"),
    hamburger = document.querySelector("#menu_icon"),


    // menu toggle function
    toggleMenu = () => {
        let menuState = navigationEl.classList.value;

        switch (menuState) {
            case "navigation":
                navigationEl.classList.add("active");
                hamburger.src = "icon-close.svg";
                break;

            case "navigation active":
                navigationEl.classList.remove("active");
                hamburger.src = "icon-hamburger.svg";
                break;
        }
    };

menuEl.addEventListener("click", (event) => {
    toggleMenu();
});