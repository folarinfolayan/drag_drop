(() => {
	console.log('fired');

	// set up the puzzle pieces and boards
	//

	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// get a reference to drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get a reference to the buttons at the bottom so we can the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	// functions go in the middle
	function createPuzzlePieces() {
		// generate images here -> need to make 4 (top left, right, bottom left, right)
		//debugger;
		// loop through the images refs and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = '<img id="piece$(index)" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">';
			piecesBoard.innerHTML == newPuzzlePiece;

	});

	}
	function resetPuzzlePieces(){
		// change the current puzzle, regenerate the pieces

		//close out the puzzle pieces div
		piecesBoard.innerHTML = "";

		//generate new pieces
		createPuzzlePieces()
		debugger;
	}

	// event handling goes here

	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	// call this function to set uo / generate the pieces on load
	createPuzzlePieces();

})();
