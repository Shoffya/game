const contentBxT = document.getElementsByClassName('contentBxT');
const labelT = document.querySelector('.labelT');

for (i = 0; i < contentBxT.length; i++) {
    contentBxT[i].addEventListener('click', function () {
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            labelT.style.height = "50px";
        } else {
            labelT.style.height = "150px";
        }

    })
}