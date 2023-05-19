// this sets the year for the copyright
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// sets the last modified date on the page
document.querySelector("#lastmod").textContent = document.lastModified;

// sets the current date
const date = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
const currentdate = date.toLocaleString("en-UK", options);
document.querySelector("#currentdate").textContent = currentdate;

// This is the banner at the top of the page
// it is only displayed on Mondays and Tuesdays
const bannerText =
  "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
const banner = document.querySelector("#banner-content");
banner.textContent = bannerText;
//document.querySelector("#banner").style.display = "none";
if (date.getDay() === 1 || date.getDay() === 2) {
  document.querySelector("#banner").style.display = "flex";
}

// banner close button
const closeBtn = document.querySelector(".closebtn");
closeBtn.addEventListener("click", function () {
  document.querySelector("#banner").style.display = "none";
});
