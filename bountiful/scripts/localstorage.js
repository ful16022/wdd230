// initialize display elements
const totalDrinks = document.querySelector("#order-drinks");


// get the stored value in localStorage
let numDrinks = Number(window.localStorage.getItem("drinks-ls"));


// determine if this is the first visit or display the number of visits.
if (numDrinks !== 0) {
	totalDrinks.textContent = numDrinks;
} else {
	// if this is the first visit display first visit
	totalDrinks.textContent = `No drinks have been ordered`;
}

// increment the number of visits.
//numDrinks++;
// store the new number of visits
//localStorage.setItem("drinks-ls", numDrinks);
