var colors = [];

$.getJSON("http://adikku.com/memory/games/colors.json").done(function (data) {
	colors = data;
});

function createColorGame(){

	var header = document.createElement('h2');
		header.innerHTML = 'The Color Game';
		container.insertBefore(header,container.firstChild);
	
	colors.shuffle();

	for (var i = 0; i < numTiles; i++) {
		var el = document.createElement("div");
			el.id = i;
			el.style.background = tile.background;
			el.addEventListener("click", function(){tile.verify(this,colors[i]);});
			el.className = tile.className;
			el.setAttribute("name",colors[i]);

			document.querySelector("body").className = "colorGame";

			board.appendChild(el);
			board.style.display = "flex";
	}
}