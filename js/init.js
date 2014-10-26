var board = document.querySelector("#playfield"),
container = document.querySelector("#container")
hit = document.querySelector('#hit'),
loose = document.querySelector('#loose'),
match = document.querySelector('#match'),
win = document.querySelector('#win');

var startColor = document.createElement("button");
startColor.id = 'colorGame';
startColor.innerHTML = "Color match";
startColor.className = "newGame";
startColor.addEventListener("click",function(){
	createColorGame();
	$(this).remove();
	$(startDino).remove();
});
var startDino = document.createElement("button");
startDino.id = 'dinoGame';
startDino.innerHTML = "Dino match";
startDino.className = "newGame";
startDino.addEventListener("click",function(){
	createDinoGame();
	$(this).remove();
	$(startColor).remove();
});
container.appendChild(startDino);
container.appendChild(startColor);