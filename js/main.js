var canvas, ctx, gridsize;


window.onload = function() {
	var gridsize_string = prompt("What size do you want you want?");
	gridsize = gridsize_string.split("x");
	canvas = document.getElementById("canvas");
	canvas.width = gridsize[0];
	canvas.height = gridsize[1];
	console.log(gridsize);
	ctx = canvas.getContext("2d");
	ctx.rect(20,20,150,100);
	ctx.stroke();
};
