var canvas, ctx, gridsize;


window.onload = function() {
	var gridsize_string = prompt("What size do you want you want?  Enter your input in the form CxR, where C is the number of columns and R is the number of rows.");
	gridsize = gridsize_string.split("x").map(Number);
	canvas = document.getElementById("canvas");
	canvas.width = gridsize[0]*16+gridsize[0];
	canvas.height = gridsize[1]*16+gridsize[1];
	ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = 1;
	for(var i = 0; i<gridsize[0]; ++i) {
		ctx.moveTo(i*16+i, 0);
		ctx.lineTo(i*16+i, canvas.height);
	}
	for(var i = 0; i<gridsize[1]; ++i) {
		ctx.moveTo(0, i*16+i);
		ctx.lineTo(canvas.height, i*16+i);
	}
	ctx.stroke();
};
