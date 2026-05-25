const quizData = [

  {
    question: "What does HTML stand for?",

    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],

    answer: "Hyper Text Markup Language"
  },

  {
    question: "Which language is used for styling web pages?",

    options: [
      "HTML",
      "CSS",
      "Python",
      "C"
    ],

    answer: "CSS"
  },

  {
    question: "Which language is used for webpage functionality?",

    options: [
      "Java",
      "Python",
      "JavaScript",
      "C++"
    ],

    answer: "JavaScript"
  }

];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

// Load Question

function loadQuestion(){

  let questionData =
  quizData[currentQuestion];

  // Display Question

  document.getElementById("question").innerHTML =
  questionData.question;

  // Display Options

  let optionsHTML = "";

  questionData.options.forEach(option => {

    optionsHTML += `

      <div class="option"
      onclick="selectAnswer(this,'${option}')">

      ${option}

      </div>

    `;
  });

  document.getElementById("options").innerHTML =
  optionsHTML;

  // Update Progress Bar

  let progress =
  (currentQuestion / quizData.length) * 100;

  document.getElementById("progressBar").style.width =
  progress + "%";
}

// Select Answer

function selectAnswer(element, answer){

  selectedAnswer = answer;

  // Remove old selected option

  let options =
  document.querySelectorAll(".option");

  options.forEach(option => {
    option.classList.remove("selected");
  });

  // Add selected class

  element.classList.add("selected");
}

// Next Question

function nextQuestion(){

  // Check Answer

  if(selectedAnswer ==
  quizData[currentQuestion].answer){

    score++;
  }

  currentQuestion++;
  selectedAnswer = "";

  // Load Next Question

  if(currentQuestion < quizData.length){

    loadQuestion();
  }

  // Quiz Completed

  else{

    document.getElementById("progressBar").style.width =
    "100%";

    document.querySelector(".quiz-box").innerHTML = `

      <h2>Quiz Completed 🎉</h2>

      <p id="result">
      Your Score: ${score} / ${quizData.length}
      </p>

    `;
  }
}

// Start Quiz

loadQuestion();