/*
Pickle = 0.0154324 lbs.
Big Mary = 0.405651 lbs.
Taters = 0.476198 lbs.
Gravy = 0.308647 lbs.
*/

const bigMaryWeight = 0.405651;

function change(num) {
  return (num / bigMaryWeight).toFixed(1);
}
const inputElement = document.querySelector("#amount");
const resultElement = document.querySelector("#result");

let personsWeight = null;
let withPickle = false;
function updateResult() {
  let value = null;

  if (withPickle) {
    value = addPickle(personsWeight);
    resultElement.textContent = `You Weigh ${value} Big Marys With Pickles`;
  } else {
    value = change(personsWeight);
    resultElement.textContent = `You Weigh ${value} Big Marys`;
  }
  displayNumberOfBigMarys(value);
}

inputElement.addEventListener("keyup", (event) => {
  personsWeight = parseInt(event.target.value);
  updateResult();
});

const pickleCheck = 0.4210834;
function addPickle(num) {
  return (num / pickleCheck).toFixed(1);
}
const pickleElement = document.querySelector("#pickleYes");

pickleElement.addEventListener("click", () => {
  withPickle = !withPickle;
  updateResult();
});

function displayNumberOfBigMarys(amount) {
  const bm = document.createElement("img");
  bm.src = "./images/bigmarypic1.png";
  bm.width = 16;
  bm.height = 16;

  const listOfMyFood = [];
  for (let i = 0; i <= amount; i++) {
    listOfMyFood.push(bm.cloneNode());
  }
  document.getElementById("bigMaryContainer").replaceChildren(...listOfMyFood);
}
