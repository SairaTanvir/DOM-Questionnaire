const addBtn = document.getElementById("add");
const question = document.getElementById("question");
const submit = document.getElementById("submit");
const addToForm = document.getElementById("form");

let num = 1;
let r = 1;

//const createQuestion = function () {

const createQuestion = function () {
  //create elements that need to be added
  const questionDiv = document.createElement("div");
  const inputDiv = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  //const icon = document.createElement("i");
  const deleteIcon = document.createElement("i");

  const optionDiv = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const inOption1 = document.createElement("input");
  const inOption2 = document.createElement("input");
  const inOption3 = document.createElement("input");
  const inOption4 = document.createElement("input");
  let radio1 = document.createElement("input");
  const radio2 = document.createElement("input");
  const radio3 = document.createElement("input");
  const radio4 = document.createElement("input");

  // append the child
  inputDiv.appendChild(label);
  inputDiv.appendChild(input);
  //inputDiv.appendChild(icon);
  inputDiv.appendChild(deleteIcon);
  optionDiv.appendChild(li1);
  optionDiv.appendChild(li2);
  optionDiv.appendChild(li3);
  optionDiv.appendChild(li4);
  li1.appendChild(p1);
  li2.appendChild(p2);
  li3.appendChild(p3);
  li4.appendChild(p4);
  li1.appendChild(inOption1);
  li2.appendChild(inOption2);
  li3.appendChild(inOption3);
  li4.appendChild(inOption4);
  li1.appendChild(radio1);
  li2.appendChild(radio2);
  li3.appendChild(radio3);
  li4.appendChild(radio4);
  questionDiv.appendChild(inputDiv);
  questionDiv.appendChild(optionDiv);
  question.appendChild(questionDiv);

  // add text content and classes
  questionDiv.setAttribute("class", "mcq-question");
  inputDiv.classList.add("mcq-input");
  label.textContent = "Q # " + num; //+ p; //the two needs to be a variable
  label.for = "mcqs";
  input.classList.add("input");
  input.setAttribute("value", "");
  input.setAttribute("id", "mcqs");
  input.type = "text";
  input.name = "mcqs";
  input.placeholder = "Enter Question?";
  deleteIcon.classList.add("fas");
  deleteIcon.classList.add("fa-times");
  deleteIcon.setAttribute("id", "delete");
  optionDiv.classList.add("mcq-option");
  //icon.classList.add("fas");
  //icon.classList.add("fa-times");

  //icon.setAttribute("id", "delete");

  p1.textContent = "1";
  p2.textContent = "2";
  p3.textContent = "3";
  p4.textContent = "4";

  inOption1.classList.add("s-option");
  inOption1.setAttribute("value", "");
  inOption1.type = "text";
  inOption1.name = "option";
  inOption1.placeholder = "Option";

  inOption2.classList.add("s-option");
  inOption2.setAttribute("value", "");
  inOption2.type = "text";
  inOption2.name = "option";
  inOption2.placeholder = "Option";

  inOption3.classList.add("s-option");
  inOption3.setAttribute("value", "");
  inOption3.type = "text";
  inOption3.name = "option";
  inOption3.placeholder = "Option";

  inOption4.classList.add("s-option");
  inOption4.setAttribute("value", "");
  inOption4.type = "text";
  inOption4.name = "option";
  inOption4.placeholder = "Option";

  radio1.type = "radio";
  radio1.classList.add("radioBtn");
  radio1.name = "radiobox" + r;
  radio2.type = "radio";
  radio2.classList.add("radioBtn");
  radio2.name = "radiobox" + r;
  radio3.type = "radio";
  radio3.classList.add("radioBtn");
  radio3.name = "radiobox" + r;
  radio4.type = "radio";
  radio4.classList.add("radioBtn");
  radio4.name = "radiobox" + r;

  const myNodeList = document.getElementsByClassName("mcq-question");

  deleteIcon.addEventListener("click", function (e) {
    e.preventDefault();
    questionDiv.setAttribute("class", "target");
    if (questionDiv.classList[0] === "target") {
      questionDiv.remove();
    }

    for (var i = 0; i < myNodeList.length; i++) {
      num = i + 1;
      const number = (myNodeList[i].childNodes[0].childNodes[0].innerHTML =
        "Q # " + num);
      // console.log(number);
      num++;
    }
  });

  num++;
};

createQuestion();
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  r++;

  if (question.childElementCount === 0) {
    num = 1;
  }
  createQuestion();
});

addToForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
