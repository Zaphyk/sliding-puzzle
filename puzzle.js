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
			if(x * 4 + z < puzzleSize-1)
			baseGroup.append("<img id='piece-"+ (x*sizeX + z)+"' class='puzzle-item' onclick='puzzleClick();' >");
		}
	}
}

function generatePuzzlePiecesStyle(){
	for(x = 0; x < sizeX; x++){
		for(z = 0; z < sizeZ; z++){

			// Build the style according to their position on the table
			$("#piece-"+(x*sizeX+z)).css("background-position-x", (-imageSizeX * 0 + imageSizeX / sizeX * x)+"px ");
			$("#piece-"+(x*sizeX+z)).css("background-position-y", (-imageSizeZ * 0 + imageSizeZ / sizeZ * z)+"px "); 
		}
	}
}

function puzzleClick(){

}