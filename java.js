var myDivs = document.getElementsByClassName("cities");

function show(city) {
  removed();
  document.getElementById(city).style.display = "block";
}

function removeCity() {
  removed();
}

function removed() {
  for (var x = 0; x < myDivs.length; x++) {
    myDivs[x].style.display = "none";
  }
}
