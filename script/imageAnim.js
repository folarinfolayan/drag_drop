(() => {
	console.log('fired');

	debugger;

	const theButton = document.querySelector("#buttonHolder img");

	//window.addEventListener("load", changeHeadLine);


	function changeHeadLine(){
		document.querySelector("h1").textContent = "Hey There from Js";
		document.querySelector('p').textContent = "this is the subheading";
	}
	// set up the puzzle pieces and boards
	//

	theButton.addEventListener("click", changeHeadLine);
	


})();
