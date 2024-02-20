letmapClicker = document.querySelector(".map");
let popover = document.querySelector(".popOver");

let body = document.querySelector("body");

function handleClicks(event) {


  console.log(event.target);

  body.classList.toggle("showme");


  if(event.target.matches("map")){
    event.preventDefault();
    body.classList.toggle("showme");
  }
}


document.addEventListner("click", handleClicks);