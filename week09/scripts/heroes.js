

/**
 * The function fetches data from a JSON file and populates the header and heroes section of a webpage.
 */
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}


/**
 * The function populates a header element with the name of a squad and its hometown and formation
 * date.
 * @param obj - The parameter "obj" is an object that contains information about a superhero squad,
 * including the squad name, hometown, and formation date. The function "populateHeader" uses this
 * object to create and populate a header element with the squad name, hometown, and formation date.
 */
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

/**
 * The function populates a section of a webpage with articles containing information about
 * superheroes.
 * @param obj - An object containing information about a group of heroes, including an array of hero
 * members with their names, secret identities, ages, and superpowers.
 */
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}


/* `populate();` is calling the `populate()` function, which is responsible for fetching data from a
JSON file, populating the header and section elements of a webpage with information about a
superhero squad and its members. */
populate();
