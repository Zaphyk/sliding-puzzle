var sizeX = 4;
var sizeZ = 4;
var puzzleSize = sizeX*sizeZ;
var imageSizeX = 500;
var imageSizeZ = 500;


//Generate the pieces because doing 16 different styles is too much.
function generatePuzzlePieces(){
	var baseGroup = $("#group");

	for(x = 0; x < sizeX; x++){
		for(z = 0; z < sizeZ; z++){
			if(x * 4 + z < puzzleSize-1)
			baseGroup.append("<img id='piece-"+ (x*sizeX + z)+"' class='puzzle-item' onclick='puzzleClick("+(x*sizeX + z)+");' >");

			setPuzzlePosition((x*sizeX + z), (x*sizeX + z));
		}
	}
}

function generatePuzzlePiecesStyle(){
	for(x = 0; x < sizeX; x++){
		for(z = 0; z < sizeZ; z++){

			// Build the style according to their position on the table
			$("#piece-"+(x*sizeX+z)).css("background-position-x", (imageSizeZ / sizeZ * (sizeZ-z))+"px ");
			$("#piece-"+(x*sizeX+z)).css("background-position-y", (imageSizeX / sizeX * (sizeX-x))+"px "); 
		}
	}
}

function shuffle(){
	var optionsArray;

	for(x = 0; x < sizeX; x++){
		for(z = 0; z < sizeZ; z++){
			
		}
	}
}

function setPuzzlePosition(cellIndex, indexPosition){

	$("#piece-"+cellIndex).animate({top: Math.floor(indexPosition / sizeX) * (imageSizeZ / sizeZ),
									left: (indexPosition % sizeZ) * (imageSizeX / sizeX) });

	$("#piece-"+cellIndex).attr("cell", indexPosition);

	console.log(isCompleted());
}

function cellOccupied(x, z){
	for(i = 0; i < puzzleSize; i++){
		if( $("#piece-"+i).attr("cell") == sizeX*x+z)
			return true;
	}
	return false;
}

function puzzleClick(index){
	
	//decompose the index
	var cell = $("#piece-"+index).attr("cell");

	var x = Math.floor(cell / sizeX);
	var z = Math.floor(cell % sizeZ);

	//check for empty neighbours, maybe do a for?

	if( x+1 < sizeX && !cellOccupied(x+1,z+0) ){
		setPuzzlePosition(index, (x+1) * sizeX + z+0);
		return;
	}

	if( z+1 < sizeZ && !cellOccupied(x+0,z+1) ){
		setPuzzlePosition(index, (x+0) * sizeX + z+1);
		return;
	}

	if( x-1 > 0 && !cellOccupied(x-1,z+0) ){
		setPuzzlePosition(index, (x-1) * sizeX + z+0);
		return;
	}

	if( z-1 > 0 && !cellOccupied(x+0,z-1) ){
		setPuzzlePosition(index, (x+0) * sizeX + z-1);
		return;
	}
}

function isCompleted(){
	for(i = 0; i < puzzleSize; i++){
		if( $("#piece-"+i).attr("cell") != i)
			return false;
	}
	return true;
}