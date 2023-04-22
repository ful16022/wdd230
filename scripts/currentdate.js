const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));
const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

// this sets the year for the copyright
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// this sets the file last modified date
let myDate = new Date(document.lastModified);
document.querySelector("#lastmod").textContent = new Intl.DateTimeFormat("en-US", options).format(date);
