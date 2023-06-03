
// initialize display elements
const daysLastVisit = document.querySelector(".dayslastvisit");
const visitsDisplay = document.querySelector(".visits");
const todayDate = Date.now();
const msToDays = 86400000;
//const msToDays = 60000;


// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("lastvisit-ls")) || 0;

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
	let daysFromLast = (todayDate - lastVisit) / msToDays;
	if (daysFromLast < 1) {
		// if last visit is the same day display 0
		daysLastVisit.textContent = 0 + " Days";
	} else {
		// if the last visit is 1 or more days display the number of days
		daysLastVisit.textContent = Math.ceil(daysFromLast) + " Days";
	}
} else {
	// if this is the first visit display first visit
	visitsDisplay.textContent = `This is your first visit!`;
	daysLastVisit.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits
localStorage.setItem("visits-ls", numVisits);
// store the date of today as the last visit day
localStorage.setItem("lastvisit-ls", todayDate);
