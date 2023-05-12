// get the date 
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// this sets the year for the copyright
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// sets the last modified date on the page
document.querySelector("#lastmod").textContent = document.lastModified;

// sets the current date 
document.querySelector("#currentdate").textContent = document.lastModified;
