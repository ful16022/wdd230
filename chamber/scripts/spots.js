

// URL to the json data file
const URL = "data.json";

const display = document.getElementById("spots");


function displayDirectory(directory) {
  let data = directory.directory.filter((p) => p.membership == "Gold" || p.membership == "Silver");
  let counter = data.length - 4;
  for (let i = 0; i <= counter; i++) {
    data.splice(Math.floor(Math.random() * data.length), 1);
  };

  let count = 1;
  data.forEach((business) => {
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let a = document.createElement("a");

    card.setAttribute("id", "member");
    p.innerHTML = `${business.address}`;
    p2.innerHTML = `${business.phone}`;
    a.innerHTML = `${business.site}`;
    a.setAttribute("href", `${business.website}`);


    let img = document.createElement("img");
    img.setAttribute("src", `${business.imageurl}`);
    img.setAttribute("alt", `${business.name}`);
    img.setAttribute("loading", "lazy");
    card.append(img);


    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(a);

    display.append(card);
    count = count + 1;
  });

}

async function getDirectoryData() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    displayDirectory(data);
  } else {
    throw Error(response.statusText);
  }
}

getDirectoryData();