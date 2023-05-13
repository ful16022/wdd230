
// this sets the year for the copyright
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// sets the last modified date on the page
document.querySelector("#lastmod").textContent = document.lastModified;

// sets the current date 
const date = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
const currentdate = date.toLocaleString("en-UK", options);
document.querySelector("#currentdate").textContent = currentdate;
