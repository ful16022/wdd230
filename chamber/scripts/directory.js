const URL = "data.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("cards");

function displayDirectory(directory, type) {
  let data = directory.directory;
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

    if (type == "grid") {
      let img = document.createElement("img");
      img.setAttribute("src", `${business.imageurl}`);
      img.setAttribute("alt", `${business.name}`);
      img.setAttribute("loading", "lazy");
      card.append(img);
    } else {
      let h2 = document.createElement("h2");
      h2.innerHTML = `${business.name}`;
      card.append(h2);
    }

    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(a);

    display.classList.add(type);
    display.append(card);
  });
}

async function getDirectoryData(type) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    displayDirectory(data, type);
  } else {
    throw Error(response.statusText);
  }
}

function deleteItems() {
  for (let i = 0; i < 9; i++) {
    const element = document.getElementById("member");
    element.remove();
  }
}

getDirectoryData("grid");

gridbutton.addEventListener("click", () => {
  if (display.classList.value == "cards list") {
    deleteItems();
    display.classList.remove("list");
    getDirectoryData("grid");
  }
});

listbutton.addEventListener("click", () => {
  if (display.classList.value == "cards grid") {
    deleteItems();
    display.classList.remove("grid");
    getDirectoryData("list");
  }
});
