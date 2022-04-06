
const btn = document.querySelector('button');
let number = Math.floor(Math.random() * 28) + 1;

const los = () => {

    const txt = document.querySelector('p');
    
    if (number == 10) {
        txt.textContent = 5;
    }
    if (number == 24) {
        txt.textContent = 5;
    }
    else {

        txt.textContent = number;
    }

    number = Math.floor(Math.random() * 28) + 1;

}

btn.addEventListener('click', los);