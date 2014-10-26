var dinos = [];

$.getJSON("http://adikku.com/memory/games/dino.json").done(function (data) {
	dinos = data;
});

function createDinoGame(){

	var header = document.createElement('h2');
		header.innerHTML = 'The Dino Game';
		container.insertBefore(header,container.firstChild);

	dinos.shuffle();

	for (var i = 0; i < numTiles; i++) {
		var el = document.createElement("div");
			el.id = i;
			el.style.background = tile.background;
			el.addEventListener("click", function(){tile.verify(this,dinos[i]);});
			el.className = tile.className;
			el.setAttribute("name",dinos[i]);

			document.querySelector("body").className = "dinoGame";
			board.setAttribute("name","dino");

			board.appendChild(el);
			board.style.display = "flex";
	}
}