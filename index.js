const headlineDV = document.querySelector("#darth-vader-name");
const headlineLS = document.querySelector("#luke-skywalker-name");

fetch("https://swapi.dev/api/people/4")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Kein Charakter gefunden");
    }
  })
  .then((result) => {
    headlineDV.innerText = result.name;
  });

const getCharacter = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/1");
    const result = await response.json();
    headlineLS.innerText = result.name;
  } catch (error) {
    console.log(error);
  }
};
getCharacter();





const postCharacter = async () => {
    const profile = { 
        name: "Lingning Man" 
    }
  try {
    const response = await fetch("https://my-json-server.typicode.com/22-D03-1/test-api",{
        method: "POST",
        body: JSON.stringify(profile),
      }
    );
    if (response.status !== 201) {
      throw new Error(`POST nicht erfolgreich.Wir haben Status ${response.status} bekommen.`);
    }
  } catch (error) {
    console.log(error);
  }
};

postCharacter();
