const nothingHere = document.querySelector('.nothingHere');
const nothingHereH3 = document.querySelector('.nothingHere h3');
const email = document.querySelector('.email1');
const email2 = document.querySelector('.email2');
const email3 = document.querySelector('.email3');
const email1_full = document.querySelector('.email1_full');
const btnPrevious = document.querySelector('.btnPrevious');
const inbox = document.querySelector('.inbox');
const bookmark = document.querySelector('.bookmark');
const bookmarkEmpty = document.querySelector('.bookmarkEmpty');
const bookmarkFull = document.querySelector('.bookmarkFull');
const whileSend = document.querySelector('.send');
const envelope = document.querySelector('.envelope');
const trashMenu = document.querySelector('.trashMenu');

email.addEventListener('click', () => {
    email.style.display = "none";
    email1_full.style.display = "block";
});

btnPrevious.addEventListener('click', () => {
    email.style.display = "block";
    email1_full.style.display = "none";
});

inbox.addEventListener('click', () => {
    email.style.display = "block";
    email1_full.style.display = "none";
    email2.style.display = "block";
    email3.style.display = "block";
    nothingHere.style.display = "none";
});

bookmark.addEventListener('click', () => {
    email.style.display = "none";
    email2.style.display = "none";
    email3.style.display = "none";
    email1_full.style.display = "none";
    nothingHere.style.display = "flex";
    nothingHereH3.innerHTML = "Nothing Important!";

    if (bookmarkFull.classList.contains('active') == true) {
        email.style.display = "block";
        nothingHere.style.display = "none";
    }
});

bookmarkEmpty.addEventListener('click', () => {
    bookmarkFull.style.display = "flex";
    bookmarkEmpty.style.display = "none";

    if (bookmarkFull.style.display = "flex") {
        bookmarkFull.classList.add('active');
    }
});

bookmarkFull.addEventListener('click', () => {
    bookmarkEmpty.style.display = "flex";
    bookmarkFull.style.display = "none";

    if (bookmarkEmpty.style.display = "flex") {
        bookmarkFull.classList.remove('active');
    }
});

whileSend.addEventListener('click', () => {
    email.style.display = "none";
    email2.style.display = "none";
    email3.style.display = "none";
    email1_full.style.display = "none";
    nothingHere.style.display = "flex";
    nothingHereH3.innerHTML = "You didn't send anything!";
});

envelope.addEventListener('click', () => {
    email.style.display = "block";
    email2.style.display = "block";
    email3.style.display = "block";
    nothingHere.style.display = "none";
});

trashMenu.addEventListener('click', () => {
    email.style.display = "none";
    email2.style.display = "none";
    email3.style.display = "none";
    email1_full.style.display = "none";
    nothingHere.style.display = "flex";
    nothingHereH3.innerHTML = "Empty trash can!";

});
