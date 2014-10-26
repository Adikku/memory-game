var flipped = 0,
		inMindItem = [],
		inMindId = [],
		numTiles = 16;
var tile = {
			className: "tile",
			background: "gray",
			verify: function (tile,name){

				var item = tile.getAttribute("name");

				if (tile.style.background === "gray" && inMindItem.length < 2){
					hit.play();
					tile.className += " isFlipped";
					function slow(){
						if(document.querySelector("body").className === "colorGame"){
							tile.style.background = item;
						}else{
							var folder = board.getAttribute("name");
							tile.style.background = "url(imgs/"+ folder + "/" + item + ".png)"
						}
					}setTimeout(slow,100);

					if (inMindItem.length === 0){
						inMindItem.push(item);
						inMindId.push(tile.id);

					} else if (inMindItem.length === 1){
						inMindItem.push(item);
						inMindId.push(tile.id);

						if (inMindItem[0] === inMindItem[1]){
							match.play();
							flipped += 2;
							inMindItem = [];
							inMindId = [];
							
							if (flipped === numTiles){
								function reset(){
									win.play();
									document.querySelector("#playfield").innerHTML = "";
								}
								setTimeout(reset,1500);
							}
						} else {
							function flipItBack(){
								loose.play();
								document.getElementById(inMindId[0]).style.background = "gray";
								document.getElementById(inMindId[1]).style.background = "gray";
								document.getElementById(inMindId[0]).className = "tile";
								document.getElementById(inMindId[1]).className = "tile";

								inMindItem = [];
								inMindId = [];
							}
							setTimeout(flipItBack, 1000);
						}
					}
				}
			}
	};

	Array.prototype.shuffle = function () {
		var i = this.length, j, temp;
		while (--i > 0) {
			j = Math.floor(Math.random() * (i + 1));
			temp = this[j];
			this[j] = this[i];
			this[i] = temp;
		}
	}