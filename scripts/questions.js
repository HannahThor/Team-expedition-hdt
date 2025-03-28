const weekSelector = document.getElementById("week-selector");
const questionsList = document.getElementById("questionsList");

const clearQuestions = () => {
  const previousQuestions = [
    ...document.getElementsByClassName("questionItem"),
  ];
  previousQuestions.forEach((previous) => previous.remove());
};

weekSelector.addEventListener("change", async function (event) {
  clearQuestions();
  const week = event.target.value;
  const response = await fetch(
    `https://tortee-api.onrender.com/questions/${week}`
  );

  const questionJSON = await response.json();

  const questions = questionJSON.data;
  // loop over questions, put them into <li> items in the DOM questionsList
  const listElements = questions.map((question) => {
    const listElement = document.createElement("li");
    listElement.className = "questionItem";

    const questionParagraph = document.createElement("p");
    questionParagraph.innerHTML = question.question;

    listElement.appendChild(questionParagraph);
    return listElement;
  });

  questionsList.append(...listElements);
});
