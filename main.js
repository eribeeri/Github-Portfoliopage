/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills__active")
            })

            target.classList.add('skills__active')


            tabs.forEach(tab => {
                tab.classList.remove("skills__active")
            })

            tab.classList.add('skills__active')
        })
      })


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.project__container', {
    selectors: {
        target: '.project__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkProject = document.querySelectorAll('.project__item')

function activeProject(){
    linkProject.forEach(l=> l.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(l=> l.addEventListener("click", activeProject))

/*===== Project Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".project__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".project__title").innerHTML
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML
}
/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
