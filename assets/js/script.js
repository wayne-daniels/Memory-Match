var clickCard = document.getElementById("gameCards");
clickCard.addEventListener('click', handleClick);
function handleClick(event) {
  console.log(event);
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }
  event.target.className += "hidden";
}

// flip cards added //
