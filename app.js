// declare variables//

// array of colors//
const colors = ["green", "red", "blue", "yellow", "purple"];
// grab elements that will need JS functionality//
const btn= document.getElementById("btn");
const color= document.querySelector(".color");


//create an event listener-when btn is clicked//
btn.addEventListener('click', function () {
    // get random number from array, change bg color, and set color to another random number//
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}
);
// to get a random number, run the math random function for the complete contents of the array. Use floor to round it to the nearest whole integer//
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

