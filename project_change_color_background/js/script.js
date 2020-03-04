//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
// Combine random number with index of colors array
const colorIndex= parseInt(Math.random()*colors.length+1) // parseInt to convert any float number to integar
// Change bg-color
body.style.backgroundColor = colors[colorIndex]
}
