function Deck(){
  this.cards =["recycle1.jpg","recycle3.jpg"];
  this.cards= shuffle(this.cards);
  this.shown=this.cards.pop();
}
function displayShown(card){
  var x = document.createElement("IMG");
  x.setAttribute("class", "card-image");
  x.setAttribute("src", "Images/"+ card);
  x.setAttribute("alt", card);
  document.getElementById("card-cell").appendChild(x);
}
function removeShown(){
  var parent = document.getElementById("card-cell");
  parent.removeChild(parent.firstChild());
}
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // while there remain elements to shuffle...
  while (0 !== currentIndex) {
    // pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // and swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function checkGuess(num){
  var card = document.getElementsByClassName("card-image")[0];
  if(num==0 && card.getAttribute("alt").indexOf("non") == -1){
    alert("RECYCLED");
  }else if(num==1 && card.getAttribute("alt").indexOf("non") > -1){
    alert("NO");
  }
}
var d = new Deck();
displayShown(d.shown);
