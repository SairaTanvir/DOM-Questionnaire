const addBtn = document.getElementById("add");
const question = document.getElementById("question");
const submit = document.getElementById("submit");
const addToForm = document.getElementById("form");
let num = 1;

const createQuestion = function (e) {
  //create elements that need to be added
  const questionDiv = document.createElement("div");
  const labelDiv = document.createElement("div");
  const label = document.createElement("label");
  const deleteIcon = document.createElement("i");
  const inputDiv = document.createElement("div");
  const input = document.createElement("input");

  // append the child
  labelDiv.appendChild(label);
  labelDiv.appendChild(deleteIcon);
  inputDiv.appendChild(input);
  questionDiv.appendChild(labelDiv);
  questionDiv.appendChild(inputDiv);
  question.appendChild(questionDiv);

  // add text content and classes
  questionDiv.setAttribute("class", "question");
  labelDiv.classList.add("label");
  label.textContent = "Question # " + num; //+ num; //the two needs to be a variable
  label.for = "detail-qs";
  deleteIcon.classList.add("fas");
  deleteIcon.classList.add("fa-times");
  deleteIcon.setAttribute("id", "delete");
  input.classList.add("input");
  input.setAttribute("value", "");
  input.setAttribute("id", "detail-qs");
  input.type = "text";
  input.name = "question";
  input.placeholder = "Enter Question?";

  const myNodeList = document.getElementsByClassName("question");

  deleteIcon.addEventListener("click", function (e) {
    e.preventDefault();
    questionDiv.setAttribute("class", "target");
    if (questionDiv.classList[0] === "target") {
      questionDiv.remove();
    }

    for (var i = 0; i < myNodeList.length; i++) {
      num = i + 1;
      const number = (myNodeList[i].childNodes[0].childNodes[0].innerHTML =
        "Question # " + num);
      // console.log(number);
      num++;
    }
  });
  num++;
};

createQuestion();
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (question.childElementCount === 0) {
    num = 1;
  }

  createQuestion();
});

addToForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
