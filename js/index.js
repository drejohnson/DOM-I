const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
logo.setAttribute("alt", "Great Idea! Company logo");

// Nav
const nav = document.querySelector('nav')
const navLinks = document.querySelectorAll('nav a')
const homeLink = document.createElement('a')
const blogLink = document.createElement('a')
homeLink.href = '#'
homeLink.textContent = 'Home'
homeLink.style.color = 'green'
blogLink.href = '#'
blogLink.textContent = 'Blog'
blogLink.style.color = 'green'
const linkText = Object.values(siteContent["nav"]).map(element => element)
const linkClass = Object.keys(siteContent["nav"]).map(element => element)

Array.from(navLinks).map((link, i) => {
  link.classList.add(linkClass[i])
  link.textContent = linkText[i]
  link.style.color = 'green'
})

nav.prepend(homeLink)
nav.appendChild(blogLink)

// CTA
const ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = siteContent["cta"]["h1"]

const h1BR = ctaH1.textContent.split(" ");
ctaH1.innerHTML = h1BR.join("</BR>");

const ctaBTN = document.querySelector('.cta-text button')
ctaBTN.textContent = siteContent["cta"]["button"]

const ctaIMG = document.querySelector('#cta-img')
ctaIMG.src = siteContent["cta"]["img-src"];

// Top Content
const topContent = document.querySelector('.top-content')
const featuresH4 = topContent.querySelectorAll('.text-content h4')[0]
const aboutH4 = topContent.querySelectorAll('.text-content h4')[1]
featuresH4.textContent = siteContent["main-content"]["features-h4"]
aboutH4.textContent = siteContent["main-content"]["about-h4"]

const featuresContent = topContent.querySelectorAll('.text-content p')[0]
const aboutContent = topContent.querySelectorAll('.text-content p')[1]

featuresContent.textContent = siteContent["main-content"]["features-content"]
aboutContent.textContent = siteContent["main-content"]["about-content"]

// Middle Img
const middleIMG = document.querySelector('.middle-img')
middleIMG.src = siteContent["main-content"]["middle-img-src"]

// Bottom Content
const bottomContent = document.querySelector('.bottom-content')
const servicesH4 = bottomContent.querySelectorAll('.text-content h4')[0]
const productH4 = bottomContent.querySelectorAll('.text-content h4')[1]
const visionH4 = bottomContent.querySelectorAll('.text-content h4')[2]
servicesH4.textContent = siteContent["main-content"]["services-h4"]
productH4.textContent = siteContent["main-content"]["product-h4"]
visionH4.textContent = siteContent["main-content"]["vision-h4"]

const servicesContent = bottomContent.querySelectorAll('.text-content p')[0]
const productContent = bottomContent.querySelectorAll('.text-content p')[1]
const visionContent = bottomContent.querySelectorAll('.text-content p')[2]

servicesContent.textContent = siteContent["main-content"]["services-content"]
productContent.textContent = siteContent["main-content"]["product-content"]
visionContent.textContent = siteContent["main-content"]["vision-content"]

// Contact
const contact = document.querySelector('.contact')
const contactH4 = contact.querySelector('h4')
contactH4.textContent = siteContent["contact"]["contact-h4"]

const address = contact.querySelectorAll('p')[0]
const phone = contact.querySelectorAll('p')[1]
const email = contact.querySelectorAll('p')[2]
address.textContent = siteContent["contact"]["address"]
phone.textContent = siteContent["contact"]["phone"]
email.textContent = siteContent["contact"]["email"]

const addressBR = address.textContent.split("Street");
address.innerHTML = addressBR.join("Street </BR>");

// Footer
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent["footer"]["copyright"];

// Stretch
const body = document.querySelector('body')
body.style.backgroundColor = '#eee'
const h1Style = document.querySelectorAll('h1')
h1Style.forEach(heading => {
  heading.style.color = 'indianred'
})

const h4Style = document.querySelectorAll('h4')
h4Style.forEach(heading => {
  heading.style.fontSize = '2.5rem'
  heading.style.color = 'teal'
})

ctaBTN.addEventListener('click', event => {
  ctaH1.textContent = 'Hello from Lambda School'
  const hello = ctaH1.textContent.split(" ");
  ctaH1.innerHTML = hello.join("</BR>");

  setTimeout(() => {
    ctaH1.textContent = siteContent["cta"]["h1"]
    const h1 = ctaH1.textContent.split(" ");
    ctaH1.innerHTML = h1.join("</BR>");
  }, 2000);
})

ctaBTN.addEventListener("mouseenter", event => {   
  event.target.style.color = "indianred";

  setTimeout(function() {
    event.target.style.color = '';
  }, 500);
});