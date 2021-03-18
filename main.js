// ----------------------------------------------------------------
// Fetch: Dad joke generator 
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
let slideshow = document.getElementById('slideshow');
slideshow.style.backgroundImage = `url(./images/${images[0]})`

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
          slideshow.style.backgroundImage = `url(./images/${images[i]})`;
      } else if (e.target.id === "right") {
          i++;
          if (i >= images.length ){
              i = 0;
          }
          slideshow.style.backgroundImage = `url(./images/${images[i]})`;
      }
  })
});

// --------------------------------------------------------------------
// Validate contact form
// --------------------------------------------------------------------

document.querySelector("form").addEventListener("submit", validateForm);

function validateForm(event) {
  var fname = document.forms["contactForm"]["fname"].value;
  var lname = document.forms["contactForm"]["lname"].value;
  var email = document.forms["contactForm"]["email"].value;
  var validate = document.forms["contactForm"]["validate"].value;


  if (fname == null || fname == "") {
      alert("First name must be filled out"); // alert user if first name field is missing 
      event.preventDefault();
  } else if (lname == null || lname == "") { 
      alert("Last name must be filled out"); // alert user if last name field is missing 
      event.preventDefault();
  } else if (email == null || email == "") { 
      alert("Email must be filled out"); // alert user if last name field is missing 
      event.preventDefault();
  } else if (validate != 4) { 
      alert("Maybe ask a Cool Dad for help with your math, try again?"); // if user gives any answer other than 4 they give an alert message
      event.preventDefault();
  }
}
 

 