// Get the button:
let mybutton = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
  updateButtonColor();
  fadeSectionOnScroll();
};

function scrollFunction() {
  if (document.body.scrollTop > 60|| document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function updateButtonColor() {
    const sections = [
        {id: "cover", color: "white"},
        {id: "quote", color: "white"},
        {id: "contacts", color: "white"},
        {id: "about-me", color: "white"},
    ];

    const icon = document.getElementById("svg-button");

    for (let section of sections) {
    let element = document.getElementById(section.id);
    let rect = element.getBoundingClientRect();
    
    // Check if the top of the section is within the viewport
    if (rect.top < 800 && rect.bottom > 800) {
      icon.style.fill = section.color;
      break;
    }
  }
}

function fadeSectionOnScroll() {
  // Fade cover section as you already have
  const cover = document.getElementById("cover");
  const coverRect = cover.getBoundingClientRect();

  if (coverRect.top >= 0) {
    cover.style.opacity = 1;
  } else if (coverRect.bottom > 0) {
    const scrollDistance = Math.min(window.innerHeight, -coverRect.top);
    const fadeDistance = window.innerHeight / 2 + 20;
    const opacity = Math.max(1 - scrollDistance / fadeDistance, 0);
    cover.style.opacity = opacity;
  } else {
    cover.style.opacity = 0;
  }

  const quote = document.getElementById("quote");
  const quoteRect = quote.getBoundingClientRect();

  // We'll fade it in when it enters viewport and fade out after it leaves (top or bottom)
  if (quoteRect.top < window.innerHeight && quoteRect.bottom > 0) {
    // Calculate how far into the viewport it is (0 to 1)
    let visibleRatio = Math.min(1, Math.max(0, (window.innerHeight - quoteRect.top) / (window.innerHeight / 2) - 0.5));
    quote.style.opacity = visibleRatio;
  } else {
    quote.style.opacity = 0;
  }

  // Fade contacts section based on scroll position
  const contacts = document.getElementById("contacts");
  const contactsRect = contacts.getBoundingClientRect();

  // We'll fade it in when it enters viewport and fade out after it leaves (top or bottom)
  if (contactsRect.top < window.innerHeight && contactsRect.bottom > 0) {
    // Calculate how far into the viewport it is (0 to 1)
    let visibleRatio = Math.min(1, Math.max(0, (window.innerHeight - contactsRect.top) / (window.innerHeight / 2) - 0.5));
    contacts.style.opacity = visibleRatio;
  } else {
    contacts.style.opacity = 0;
  }

  // Fade about-me section similarly
  const about = document.getElementById("about-me");
  const aboutRect = about.getBoundingClientRect();

  if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
    let visibleRatio = Math.min(1, Math.max(0, (window.innerHeight - aboutRect.top) / (window.innerHeight / 2) - 0.5));
    about.style.opacity = visibleRatio;
  } else {
    about.style.opacity = 0;
  }
}

// Call fadeSectionOnScroll on scroll event
window.addEventListener("scroll", fadeSectionOnScroll);

// Also call once on page load to set initial opacity states
window.addEventListener("load", fadeSectionOnScroll);