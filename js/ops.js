const contentBx = document.getElementsByClassName('contentBx');
const label = document.querySelector('.label');
const write = document.querySelector('.write');
const opc1 = document.querySelector('.opc1');
const opc2 = document.querySelector('.opc2');
const send = document.querySelector('.to_send');
const contentMessege = document.querySelector('.contentMessege');

for (i = 0; i < contentBx.length; i++) {
    contentBx[i].addEventListener('click', function () {
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            label.style.height = "50px";
        } else {
            label.style.height = "500px";
        }

    })
}

const opcOne = ["opcOne-B", "opcOne-C", "opcOne-D", "opcOne-E", "opcOne-F", "opcOne-G"];
const opcTwo = ["opcTwo-I", "opcTwo-J", "opcTwo-K", "opcTwo-L", "opcTwo-M", "opcTwo-N"];
let j = 0;

opc1.innerHTML = "opcOne-A";
opc2.innerHTML = "opcTwo-H";

opc1.addEventListener('click', () => {
    write.innerHTML = opc1.innerHTML;
});

opc2.addEventListener('click', () => {
    write.innerHTML = opc2.innerHTML;
});

send.addEventListener('click', () => {
    write.innerHTML = "Write a message...";

    if (j < opcOne.length) {
        opc1.innerHTML = opcOne[j];
        opc2.innerHTML = opcTwo[j];
        j++;
    }
});


