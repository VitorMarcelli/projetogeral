class MobileNavbar {
    constructor(menuMobile, navList, navLinks){
        this.menuMobile = document.querySelector(menuMobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s')
        });
    }
    
    handleClick(){
        
        this.navList.classList.toggle(this.activeClass);
        this.menuMobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.menuMobile.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.menuMobile){
            this.addClickEvent();
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".menu-mobile",
    ".navbar",
    ".navbar a",
)
mobileNavbar.init()