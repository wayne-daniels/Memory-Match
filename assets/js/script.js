var firstCardClicked = null;
var firstCardClasses = '';
var secondCardClicked = null;
var secondCardClasses = '';

var clickCard = document.getElementById("gameCards");
clickCard.addEventListener('click', handleClick);
function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  event.target.className += " hidden";
  if(!firstCardClicked) {
    firstCardClicked = event.target;
    firstCardClasses = firstCardClicked.previousElementSibling.className;
  } else {
    secondCardClicked = event.target;
    secondCardClasses = secondCardClicked.previousElementSibling.className;
      if (firstCardClasses === secondCardClasses) {
        firstCardClicked = null;
        secondCardClicked = null;
        gameCards.addEventListener('click', handleClick);
      } else {
        gameCards.removeEventListener('click', handleClick);
        setTimeout (function() {firstCardClicked.classList.remove("hidden");
        firstCardClicked = null;
        secondCardClicked.classList.remove("hidden");
        secondCardClicked = null;
        gameCards.addEventListener('click', handleClick);}, 1500);
      }
  }
}


