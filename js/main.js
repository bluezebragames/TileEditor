var canvas, ctx, gridSize;
var tileSize = 32;
var borderThickness = 1;
var currentTile = 0;

var images = [];
var loadImages = function() {
	images.push(new Image);
	images[0].src = "static/dirt.png"
	images[0].draw = drawImageActualSize;
	images.push(new Image);
	images[1].src = "static/grass.png"
	images[1].draw = drawImageActualSize;

	function drawImageActualSize(x, y) {
		ctx.drawImage(this, parseInt(x/(tileSize+borderThickness))*(tileSize+borderThickness), parseInt(y/(tileSize+borderThickness))*(tileSize+borderThickness));
	}
}


window.onload = function() {
	loadImages();
	var gridSize_string = prompt("What size do you want you want?  Enter your input in the form CxR, where C is the number of columns and R is the number of rows.");
	gridSize = gridSize_string.split("x").map(Number);
	canvas = document.getElementById("canvas");
	canvas.addEventListener('click', function(event) {
		var Left = canvas.offsetLeft;
		var Top = canvas.offsetTop;
		var x = event.pageX - Left;
        var y = event.pageY - Top;
		images[currentTile].draw(x, y);
	});
	canvas.width = gridSize[0]*tileSize+gridSize[0]+1;
	canvas.height = gridSize[1]*tileSize+gridSize[1]+1;
	ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = borderThickness;
	for(var i = 0; i<gridSize[0]+1; ++i) {
		ctx.moveTo(i*tileSize+i, 0);
		ctx.lineTo(i*tileSize+i, canvas.height);
	}
	for(var i = 0; i<gridSize[1]+1; ++i) {
		ctx.moveTo(0, i*tileSize+i);
		ctx.lineTo(canvas.height, i*tileSize+i);
	}
	ctx.stroke();
};
