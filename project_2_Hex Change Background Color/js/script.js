//Choose a random color
const button = document.querySelector('button');
const body = document.querySelector('body');
let colorText = document.querySelector('#colorText');
// Reset bg
body.style.backgroundColor = '#000000';
colorText.textContent = '#000000';
// Array For Hexa code numbers and letters
let hexaCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

// Onclick event to change bg randomly
button.addEventListener('click', changeBackground);

// Change bg-color func
function changeBackground(){

    // Variable to combien
    let hash = '#';

    // Looping throw Array 6 time as hexa code letters count
    for(let i = 0; i < 6; i++) {
        // Get random number to use as index of array
        let randomIndex = Math.floor(Math.random()*hexaCode.length);

        // Increasing the hash string
        hash+= hexaCode[randomIndex];

    }

    // Change color text every time
    colorText.textContent = hash; 
    // Change bg 
    body.style.backgroundColor = hash;

}

