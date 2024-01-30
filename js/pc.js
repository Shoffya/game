var date_time = document.querySelector('#datetime');
const email_App = document.querySelector('.email');
const emailApp = document.querySelector('.emailApp');
const imgEmailApp = document.querySelector('.email img');
const closeEmail = document.querySelector('.closeEmail');
const terminal_App = document.querySelector('.terminal');
const terminalApp = document.querySelector('.terminalApp');
const imgTerminalApp = document.querySelector('.terminal img');
const closeTerminal = document.querySelector('.closeTerminal');

function generateDate() {
    var date = new Date().toLocaleDateString("pt-BR",
        {
            weekday: "short",
            hour: "numeric",
            minute: "numeric"
        })

    date_time.innerHTML = date

    setTimeout(generateDate, 1000)
}

generateDate()

function fullScreenEmail(id) {

    if (imgEmailApp.classList.contains('active') == false) {
        if (emailApp.style.display = "none") {
            imgEmailApp.classList.add('active');
            emailApp.style.display = "block";
            emailApp.style.zIndex = 4;
            terminal_App.style.zIndex = 3;
        }
    }
    else if (imgEmailApp.classList.contains('active') == true) {
        if (imgEmailApp.classList.contains('active') && emailApp.style.display == "none") {
            if (emailApp.style.display = "none") {
                emailApp.style.display = "block";
                emailApp.style.zIndex = 4;
                terminal_App.style.zIndex = 3;
            }
        }
        else if (imgEmailApp.classList.contains('active') && emailApp.style.display == "block") {
            if (emailApp.style.display = "block") {
                emailApp.style.display = "none";
            }
        }
    }
}

closeEmail.addEventListener('click', () => {
    emailApp.style.display = "none";
    imgEmailApp.classList.remove('active');
});

function fullScreenTerminal(id) {

    if (imgTerminalApp.classList.contains('active') == false) {
        if (terminalApp.style.display = "none") {
            imgTerminalApp.classList.add('active');
            terminalApp.style.display = "block";
            terminalApp.style.zIndex = 4;
            emailApp.style.zIndex = 3;
        }
    }
    else if (imgTerminalApp.classList.contains('active') == true) {
        if (imgTerminalApp.classList.contains('active') && terminalApp.style.display == "none") {
            if (terminalApp.style.display = "none") {
                terminalApp.style.display = "block";
                terminalApp.style.zIndex = 4;
                emailApp.style.zIndex = 3;
            }
        }
        else if (imgTerminalApp.classList.contains('active') && terminalApp.style.display == "block") {
            if (terminalApp.style.display = "block") {
                terminalApp.style.display = "none";
            }
        }
    }
}

closeTerminal.addEventListener('click', () => {
    terminalApp.style.display = "none";
    imgTerminalApp.classList.remove('active');
});

// Email:

function onDragE({ movementX, movementY }) {
    let getStyleE = window.getComputedStyle(emailApp);
    let leftE = parseInt(getStyleE.left);
    let topE = parseInt(getStyleE.top);

    emailApp.style.left = `${leftE + movementX}px`;
    emailApp.style.top = `${topE + movementY}px`;
}

emailApp.addEventListener("mousedown", () => {
    emailApp.addEventListener("mousemove", onDragE);
    emailApp.style.zIndex = 4;
    terminalApp.style.zIndex = 3;
});

emailApp.addEventListener("mouseup", () => {
    emailApp.removeEventListener("mousemove", onDragE);
});

// Terminal:

function onDragT({ movementX, movementY }) {
    let getStyleT = window.getComputedStyle(terminalApp);
    let leftT = parseInt(getStyleT.left);
    let topT = parseInt(getStyleT.top);

    terminalApp.style.left = `${leftT + movementX}px`;
    terminalApp.style.top = `${topT + movementY}px`;
}

terminalApp.addEventListener("mousedown", () => {
    terminalApp.addEventListener("mousemove", onDragT);
    terminalApp.style.xIndex = 4;
    emailApp.style.xIndex = 3;
});

terminalApp.addEventListener("mouseup", () => {
    terminalApp.removeEventListener("mousemove", onDragT);
});