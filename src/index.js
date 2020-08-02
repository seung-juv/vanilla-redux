import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "Add") {
    count++;
  } else if (action.type === "Minus") {
    count--;
  }
  return count;
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerHTML = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "Add" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "Minus" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
