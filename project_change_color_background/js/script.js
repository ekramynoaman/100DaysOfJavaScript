//Choose a random color
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
body.style.backgroundColor = 'violet';


button.addEventListener('click', changeBackground);

// Change bg-color
function changeBackground(){
    // // Combine random number with index of colors array
    // ParseInt to convert any float number to integar
    let colorIndex= parseInt(Math.random()*colors.length)
    console.log(colorIndex); // For test
    console.log(colors[colorIndex]); // For test
    
    // Check if its the same previous color
    if (body.style.backgroundColor == colors[colorIndex]) {
        console.log(colorIndex); // For test
        body.style.backgroundColor = colors[colorIndex+1] 
        console.log('Changed to ' + body.style.backgroundColor  + ' index is ' + (colorIndex+1)); // For test
        // Check if colorIndex >= array length
        if (colorIndex+1 >= colors.length) {
            body.style.backgroundColor = colors[colorIndex-1]
            console.log(body.style.backgroundColor +' fix over'); // For test
            
        }

    }
    else 
    {
        body.style.backgroundColor = colors[colorIndex]

    }

}

