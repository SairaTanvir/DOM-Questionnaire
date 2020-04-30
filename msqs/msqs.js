const addBtn = document.getElementById("add");
const ul = document.getElementById("option-list");
const item = document.getElementsByTagName("li");
const question = document.getElementById("question");
const submit = document.getElementById("submit");
const addToForm = document.getElementById("form");

let num = 1;

const createQuestion = function (e) {
  //create elements that need to be added
  const li = document.createElement("li");
  const p = document.createElement("p");
  const input = document.createElement("input");
  const check = document.createElement("input");
  const deleteIcon = document.createElement("i");

  // append the child
  li.appendChild(p);
  li.appendChild(input);
  li.appendChild(check);
  li.appendChild(deleteIcon);
  ul.appendChild(li);

  // add text content and classes
  li.classList.add("target");
  p.textContent = num; //the two needs to be a variable
  deleteIcon.classList.add("fas");
  deleteIcon.classList.add("fa-times");
  deleteIcon.setAttribute("id", "delete");
  input.classList.add("s-option");
  input.setAttribute("value", "");
  input.type = "text";
  input.name = "msqs";
  input.placeholder = "Option";
  check.type = "checkbox";

  const myNodeList = document.getElementsByTagName("p");

  // delete function
  const delQuestion = function () {
    ul.removeChild(li);
  };

  deleteIcon.addEventListener("click", function (e) {
    e.preventDefault();
    delQuestion();
    for (var i = 0; i < myNodeList.length; i++) {
      num = i + 1;
      const number = (myNodeList[i].innerHTML = num);
      console.log(number);
      num++;
    }
  });
  num++;
};

createQuestion();
createQuestion();
createQuestion();
createQuestion();

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (ul.childElementCount === 0) {
    num = 1;
  }
  createQuestion();
});

addToForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
