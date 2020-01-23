var firstCardClicked = null;
var firstCardClasses = '';
var secondCardClicked = null;
var secondCardClasses = '';

var maxMatches = 9;
var matches = 0;

var attempts = 0;
var gamesPlayed = 0;

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
        clickCard.addEventListener('click', handleClick);
        matches++;
        attempts++;
        displayStats();
        if (matches === maxMatches) {
          document.getElementById("modal").classList.remove("hidden");
          gamesPlayed++;
          displayStats();
        }
      } else {
        attempts++;
        clickCard.removeEventListener('click', handleClick);
        setTimeout (function() {firstCardClicked.classList.remove("hidden");
        firstCardClicked = null;
        secondCardClicked.classList.remove("hidden");
        secondCardClicked = null;
        clickCard.addEventListener('click', handleClick);}, 1500);
      }
  }
  function displayStats() {
    document.getElementById("play").textContent = gamesPlayed;
    document.getElementById("trys").textContent = attempts;
    document.getElementById("skill").textContent = parseFloat((matches/attempts)*100).toFixed(2) + "%";
  }
  function calculateAccuracy(attempts, matches) {
    return ((matches / attempts) * 100).toFixed(1) + "%";
  }
}
