/* const body = document.querySelector("body");
const buttonSpeichern = document.querySelector("#speichern");
const buttonZurucksetzen = document.querySelector("#zurücksetzen");
const div = document.querySelector("#container");

buttonSpeichern.addEventListener("click", () => {
  const inputValue = document.querySelector("#aufgabe").value;
  const list = document.createElement("div");
  list.style.display = "flex";
  const el = document.createElement("p");
  const check = document.createElement("input");
  check.type = "checkbox";
  div.append(list);
  list.append(check);
  list.append(el);
  el.innerText = inputValue;

  buttonZurucksetzen.addEventListener("click", () => {
    if (check.checked) {
      list.remove();
    }
  });
});
 */

localStorage.setItem("todoApp", "aufgabe");

const body = document.querySelector("body");
const buttonSpeichern = document.querySelector("#speichern");
const buttonZurucksetzen = document.querySelector("#zurücksetzen");
const div = document.querySelector("#container");
const del = document.querySelector("#del");






buttonSpeichern.addEventListener("click", () => {
  const inputValue = document.querySelector("#aufgabe").value;
  const list = document.createElement("div");
  list.style.display = "flex";
  const el = document.createElement("p");
  const check = document.createElement("input");
  check.type = "checkbox";
  div.append(list);
  list.append(check);
  list.append(el);
  el.innerText = inputValue;

  buttonZurucksetzen.addEventListener("click", () => {
    if (check.checked) {
      const p = document.createElement("p");
      del.append(p);
      p.innerText=inputValue;
      list.remove();
    }
  });


});




