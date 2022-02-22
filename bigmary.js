/*
Pickle = 0.0154324 lbs.
Big Mary = 0.405651 lbs.
Taters = 0.476198 lbs.
Gravy = 0.308647 lbs.
*/

// big mary weight //
const bigMaryWeight = 0;

function change (num) {
  return (num / 0.405651);
}
const inputElement = document.querySelector('#amount');
const resultElement = document.querySelector('#result');
inputElement.addEventListener('change', (event) => {
   const result = change(parseInt(event.target.value));
resultElement.textContent = `You weigh ${result} Big Marys`;
});

/*
function pickleWeight (result) {
    return (result + (result * 0.0154));
}

*/