/*=============== Sidebar anzeigen bei Mobilen Ansicht ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== Sidebar anzeigen bei Mobilen Ansicht =====*/
/* Validieren wenn Konstant vorhanden ist */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== Sidebar ausblenden mit Schliesskreuz =====*/
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== Skills (Section Fähigkeiten und Sprachen) Tabs auswählen ===============*/
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

/*=============== Projekt öffnen beim Klick auf "mehr erfahren" ===============*/
/*===== Tabwahl zwischen All, Web und Design mit mixitupjs =====*/
/* Quelle: https://www.kunkalabs.com/mixitup/docs/get-started/ */
let mixerPortfolio = mixitup('.project__container', {
    selectors: {
        target: '.project__card'
    },
    animation: {
        duration: 500
    }
});

/*===== Aktive Link =====*/
const linkProject = document.querySelectorAll('.project__item')

function activeProject(){
    linkProject.forEach(l=> l.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(l=> l.addEventListener("click", activeProject))

/*===== Projekt öffnen =====*/
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

/*==== Kontaktformular bei Klick auf Input --> Animation der Kontaktobjekt zb Name ====*/
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

/*=============== Navbar Scroll -->Anzeigen der richtigen Section im Navbar ===============*/
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

/*Typing beim Home Section --> Animation Titel*/
/* Quelle: https://github.com/mattboldt/typed.js */
var typed = new Typed(".typing",{
    strings:["Ich bin Eric Tang", "Klicke auf das Bild um mehr über mich zu erfahren!"],
    typeSpeed: 50,
    BackSpeed: 50,
    loop:true
})

/*Email senden mit einen Hostserver*/
/* Quelle: https://smtpjs.com/ */
function sendEmail(){
    Email.send({
        secureToken: "1d9f29bd-9e04-4162-9b28-970c12201874",
        Host : "smtp.elasticemail.com",
        Port: "2525",
        Username : "tang.eric@hotmail.com",
        Password : "7CF2C58A1486C4851A7820563747D3BC3106",
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

/*=============== Scroll Effekt ===============*/
/* Quelle: https://michalsnik.github.io/aos/  */    
AOS.init();


/*=============== Karte von der Leafletjs bei Section Über mich ===============*/ 
/* Quelle: https://leafletjs.com/examples/quick-start/  */ 
var map = L.map('map').setView([46.96847906493365, 7.382256182742379], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([46.968247745633164, 7.391682412187457]).addTo(map);
marker.bindPopup("<b>Hallo!</b><br>Da wohne ich 🤓 ").openPopup();