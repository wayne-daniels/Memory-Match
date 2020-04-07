var firstCardClicked = null;
var firstCardClasses = '';
var secondCardClicked = null;
var secondCardClasses = '';

var maxMatches = 9;
var matches = 0;

var attempts = 0;
var gamesPlayed = 0;

var cardsArray = [
  " landing",
  " limo",
  " palazzo",
  " paris",
  " private_jet",
  " sports_book",
  " windows",
  " wynn_casino",
  " wynn_night",
  " landing",
  " limo",
  " palazzo",
  " paris",
  " private_jet",
  " sports_book",
  " windows",
  " wynn_casino",
  " wynn_night",
];
var fronts = document.getElementsByClassName("card-front");

function shuffle(cardsArray) {
  var i = 0;
  var j = 0;
  var temp = null;
  for (i = cardsArray.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cardsArray[i];
    cardsArray[i] = cardsArray[j];
    cardsArray[j] = temp;
  }
}
shuffle(cardsArray);
for (var i = 0; i < fronts.length; i++) {
  fronts[i].className += ' ' + cardsArray[i];
}

function resetCards() {
  var hiddenCards = document.querySelectorAll(".card-back");
  for (var i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].classList.remove("hidden");
  }
}

function resetGame() {
  matches = 0;
  attempts = 0;
  displayStats();
  resetCards();
  shuffle(cardsArray);
  document.getElementById("modal").classList.add("hidden");
}

var clickReset = document.getElementById("reset");
clickReset.addEventListener('click', resetGame);

function displayStats() {
  document.getElementById("play").textContent = gamesPlayed;
  document.getElementById("trys").textContent = attempts;
  document.getElementById("skill").textContent = calculateAccuracy(attempts, matches);
}
function calculateAccuracy(attempts, matches) {
  if (attempts === 0) {
    return "0%"
  }
  return ((Math.trunc((matches / attempts) * 100)) + "%");
}

var clickCard = document.getElementById("gameCards");
clickCard.addEventListener('click', handleClick);
function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  event.target.className += " hidden";
  if (!firstCardClicked) {
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
      setTimeout(function () {
        firstCardClicked.classList.remove("hidden");
        firstCardClicked = null;
        secondCardClicked.classList.remove("hidden");
        secondCardClicked = null;
        clickCard.addEventListener('click', handleClick);
      }, 1500);
    }
  }
}
