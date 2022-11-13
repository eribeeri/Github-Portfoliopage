/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}


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

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent  = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent  = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/

/*Typing*/
var typed = new Typed(".typing",{
    strings:["Ich bin Eric Tang", "Klicke auf das Bild um mehr über mich zu erfahren!"],
    typeSpeed: 100,
    BackSpeed: 100,
    loop:true
})

/*Sending Email function*/
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Port: "2525",
        Username : "tangeric.eric@gmail.com",
        Password : "11D6D9A9562BD072D2F86F2DBE455D6302FC",
        To : 'tang.eric@hotmail.com',
        From : document.getElementById("email").value,
        Subject : "Kontaktanfrage Portfoliopage",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Telefonnummer: " + document.getElementById("tel").value
            + "<br> Nachricht: " + document.getElementById("nachricht").value
    }).then(
    message => alert("Nachricht wurde erfolgreich übermittelt! Ich melde mich schnellstmöglich bei Ihnen.")
    );
}
