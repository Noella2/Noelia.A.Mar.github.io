
/* finding all the element with card and making each individual button be a variable in the array of rand */
let rand = Array.from(document.getElementsByClassName("card"));
for (randElement of rand) {
  randElement.addEventListener("click", colourChange);
}

/* setting up the color switch when each button is clicked, using e as the value of the buttons id, thus able to calculate anything that isn't e 
for later on*/
function colourChange(e) {
/*   setting up the function to apply to all buttons but the button clicked */
  for (let randElement of rand) {
    if (randElement != e.target) {
/* setting up for the actions for when the button is orange to switch to coral and apply transform translation */
      if (randElement.style.backgroundColor === "orange") {
        randElement.style.backgroundColor = "coral";
        randElement.style.transform = "rotateY(180deg)";
        randElement.style.transition = "transform 2s";
/* defining what to do if the button is coral to turn orange and apply transform translation */
      } else {
        randElement.style.backgroundColor = "orange";
        randElement.style.transform = "rotateY(360deg)";
        randElement.style.transition = "transform 2s";
      }
    }
  }
}

/* find the modal and set to be open as web page is loaded */
let modal = document.getElementById("modalDialog");
modal.showModal();
/* find the button and add an eventlistener */
let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
  modal.showModal();
});
/* setting the close button to close the modal */
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});


