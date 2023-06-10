const localKey = "localstorage";
const add__input = document.querySelector(".add__input");
const add__btn = document.querySelector(".add__btn");
const items__cont = document.querySelector(".items__cont");

localSt = JSON.parse(localStorage.getItem(localKey)) || [];
function render() {
  items__cont.innerHTML = "";

  for (let i = 0; i < localSt.length; i++) {
    let pos = i;

    const item = document.createElement("div");
    item.classList.add("item");

    let item__text = document.createElement("div");
    item__text.classList.add("item__text");
    const message = document.createTextNode(localSt[i]);
    item__text.appendChild(message);
    item__text.setAttribute("onClick", `editItem(${pos})`);
    item__text.setAttribute("title", `Click here to edit...`);
    const button = document.createElement("button");

    button.classList.add("item__delBtn");
    const buttonName = document.createTextNode("del");
    button.appendChild(buttonName);
    button.setAttribute("onClick", "delItem(" + pos + ")");

    item.appendChild(item__text);
    item.appendChild(button);
    items__cont.appendChild(item);
  }
}

render();

function addItem() {
  console.log("🚀 ~ file: script.js:35 ~ addItem ~ addItem:");
  const item = add__input.value;
  localSt.push(item);
  add__input.value = "";
  render();
  saveInLocalSt();
}

add__btn.addEventListener("click", addItem);

function delItem(pos) {
  localSt.splice(pos, 1);
  render();
  saveInLocalSt();
}

function editItem(pos) {
  const newText = prompt("enter new text instead of ", localSt[pos]) || "";
  localSt[pos] = newText;
  render();
  saveInLocalSt();
  console.log("🚀 ~ file: script.js:56 ~ editItem ~ newText:", newText);
}

function saveInLocalSt() {
  localStorage.setItem(localKey, JSON.stringify(localSt));
}
