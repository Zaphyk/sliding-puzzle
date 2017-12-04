var sizeX = 4;
var sizeZ = 4;
var puzzleSize = sizeX*sizeZ;
var imageSizeX = 500;
var imageSizeZ = 500;


//Generate the pieces because doing 16 different styles is too much.
function generatePuzzlePieces(){
	var baseGroup = $(".puzzle-group");

	for(x = 0; x < sizeX; x++){
		for(z = 0; z < sizeZ; z++){
			baseGroup.append("<img id='piece"+ (x*sizeX + z)+"' class='puzzle-item' >");
		}
	}
}

function generatePuzzlePiecesStyle(){
	for(x = 0; x < sizeX; x++){
		for(z = 0; z < sizeZ; z++){
			$("#piece-"+i).attr("style", "background-position:"
				+ (-imageSizeX * .5 + imageSizeX / sizeX * x)+"px "
				+ (-imageSizeZ * .5 + imageSizeZ / sizeZ * z) +"px"); // Build the style according to their position on the table
		}
	}
}