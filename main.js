// ----------------------------------------------------------------
// Fetch for dad joke generator 
// ----------------------------------------------------------------

const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");


document.addEventListener("DOMContentLoaded", getJoke);

button.addEventListener("click", getJoke);

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}


// ----------------------------------------------------------------
// Array: Dad meme slideshow
// ----------------------------------------------------------------

// create an array of image sources;
let images = [
  'dadmeme11.jpg', 'dadmeme1.jpg', 'dadmeme2.jpg', 'dadmeme3.jpg', 
  'dadmeme4.jpg', 'dadmeme5.jpg','dadmeme6.jpg', 'dadmeme7.jpg', 
  'dadmeme8.jpg', 'dadmeme9.jpg', 'dadmeme10.jpg', 'dadmeme12.jpg' 
]
let i = 0;

//add initial image to canvas
let canvas = document.getElementById('canvas');
canvas.style.backgroundImage = `url(./images/${images[0]})`

//add eventListeners to arrows
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow){
  arrow.addEventListener('click', function(e){
              if (e.target.id === "left"){
          //check to see if at beginning of array
          i--;
          if (i < 0){
              i = images.length -1;
          }
          canvas.style.backgroundImage = `url(./images/${images[i]})`;
      } else if (e.target.id === "right") {
          i++;
          if (i >= images.length ){
              i = 0;
          }
          canvas.style.backgroundImage = `url(./images/${images[i]})`;
      }
  })
});

// --------------------------------------------------------------------
// POST & Save: Ask a dad feature / saves to CSV file stored on server
// --------------------------------------------------------------------

 
 