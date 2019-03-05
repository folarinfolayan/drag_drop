(() => {
	console.log('fired');

	// set up the puzzle pieces and boards

	//


	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// get a reference to drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");


	//get a reference to the buttons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");
	let DropZones = document.querySelectorAll('.drop-zone')

	//get a reference to the buttons at the bottom so we can the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");


	// functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// generate images here -> need to make 4 (top left, right, bottom left, right)
		//debugger;
		// loop through the images refs and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;
			
			piecesBoard.innerHTML == newPuzzlePiece;

	})
		puzzleBoard.style.backgroundImage = `url(images/background${pictureIndex}.jpg)`;

	DragDrop();

	}
		//this is how the drag and drop feature wis created

		function DragDrop(){
			piecesBoard.querySelectorAll('img').forEach(img => {
				img.addEventListener("StartOfDrag", function(event) {
					console.log('dragging.')

					event.DataTransfer.setData("text/plain", this.id);
				});
			});
	}

	//Drag puzzle pieces and drop puzzle pieces
	DropZones.forEach(zones => {
		zones.addEventListener("draghere", function(ev) {
			ev.AvoidDefualt();
			console.log('brought here');
		});

		zones.addEventListener("drophere", function(ev) {
			ev.AvoidDefualt()
			console.log('dropped here');

			let avoidDrop = ev.target;
				while (avoidDrop !avoidDrop.classList.contains("drop-zone") && avoidDrop !== 0){
					avoidDrop = avoidDrop.parentNode;
				}

				if (avoidDrop.childNodes.length > 0 && avoidDrop) {
					return false;
					ev.AvoidDefualt();
				}

				let pieces = ev.DataTransfer.getData("text/plain");
				ev.target.endChild(document.querySelector(`#${pieces}`));

		});
	}); 
	
			let newPuzzlePiece = '<img id="piece$(index)" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">';
			piecesBoard.innerHTML == newPuzzlePiece;

	});

	});
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
