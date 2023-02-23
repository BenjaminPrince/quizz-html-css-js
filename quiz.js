// Quiz questions and answers
const quiz = [
  {
    question: "Question 1: Quelle est la capitale du Japon ?",
    choices: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
    answer: "Tokyo",
  
  },
  {
    question: "Question 2: Quel est le nom du plus haut sommet du Japon ?",
    choices: ["K2", "Mont Everest", "Mont Fuji", "Mont Kilimandjaro"],
    answer: "Mont Fuji",
  
  },
  {
    question: "Question 3: Quel est le nom de l'ancienne capitale du Japon ?",
    choices: ["Kyoto", "Hiroshima", "Tokyo", "Osaka"],
    answer: "Kyoto",
  
  },
  {
    question: "Question 4: Quelle est la signification de 'Sakura' en japonais ?",
    choices: ["Montagne", "Fleur de cerisier", "Eau", "Soleil"],
    answer: "Fleur de cerisier",
   
  },
  {
    question: "Question 5: Quelle est la signification de 'karaoke' en japonais ?",
    choices: ["Orchestre", "Chant vide", "Concert", "Karaoké"],
    answer: "Chant vide",
   
  }
];


// HTML elements
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

// Display current question and choices
function displayQuestion() {
  const currentQuestion = quiz[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = document.createElement("button");
    choice.textContent = currentQuestion.choices[i];
    choice.addEventListener("click", function() {
      if (choice.textContent === currentQuestion.answer) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex >= quiz.length) {
        displayResults();
      } else {
        displayQuestion();
      }
    });
    choicesElement.appendChild(choice);
  }
}

function displayResults() {
  questionElement.style.display = "none";
  choicesElement.style.display = "none";
  submitButton.style.display = "none";
  
  // Créer un conteneur pour les résultats
  const resultsContainer = document.createElement("div");

  // Parcourir toutes les questions du quiz
  for (let i = 0; i < quiz.length; i++) {
    const result = document.createElement("div");
    result.innerHTML = `<strong>${quiz[i].question}</strong>`;

    if (i === quiz.length - 1) {
      result.innerHTML += "<br>";
    }

    const answer = document.createElement("div");
    answer.textContent = `Réponse : ${quiz[i].answer}`;

    if (quiz[i].choices.indexOf(quiz[i].answer) === -1) {
      // Incorrect answer
      result.classList.add("incorrect");
    } else {
      // Correct answer
      result.classList.add("correct");
    }

    result.appendChild(answer);
    resultsContainer.appendChild(result);
  }

  // Ajouter le conteneur des résultats à la page
  resultElement.appendChild(resultsContainer);

  // Afficher les résultats
  resultElement.style.display = "block";
}







// Start quiz
displayQuestion();

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
  location.reload();
});


















