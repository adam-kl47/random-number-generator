
const btn = document.querySelector('button');
let number = Math.floor(Math.random() * 28) + 1;

const los = () => {

    const txt = document.querySelector('p');
    
    
    if (number == 26 || number == 10) {
        txt.textContent = 1;
    }
    else {

        txt.textContent = number;
    }

    number = Math.floor(Math.random() * 28) + 1;

}

btn.addEventListener('click', los);
