/*
Pickle = 0.0154324 lbs.
Big Mary = 0.405651 lbs.
Taters = 0.476198 lbs.
Gravy = 0.308647 lbs.
*/

const bigMaryWeight = 0.405651;
function change(num) {
  return (num / bigMaryWeight).toFixed(2);
}
const inputElement = document.querySelector("#amount");
const resultElement = document.querySelector("#result");

inputElement.addEventListener("keyup", (event) => {
  const result = change(parseInt(event.target.value));
  resultElement.textContent = `You weigh ${result} Big Marys`;
});

const pickleCheck = 0.4210834;
function addPickle(num) {
  return (num / pickleCheck).toFixed(2);
}
const pickleElement = document.querySelector("#pickleYes");
const resultPickleElement = document.querySelector("#resultPickle");

pickleElement.addEventListener("click", (event) => {
  const resultPickle = addPickle(parseInt(event.target.value));
  resultPickleElement.textContent = `You weigh ${resultPickle} Big Marys' With Pickle`;
});
/*
document.ready(function () {
  var image = document.getElementById('bigMary').outerHTML;
  ('#bigMary').hide();

  function showInput(number) {
    ('#result').html('');
      for (var index = 0; index < number; index++) {
        $('#bigMary').append(image);
      }
  }
  ("#amount").keyup(function () {
    var number = parseInt('#result').val();
    if (isNaN(number) || (number < 1 || number > 1000)) {
      return false;
    }  
    showInput(number);
    ("#number").attr();
});
});
*/
