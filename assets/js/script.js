var questions = ["What's the capital of Belgium?", "How many citizens does Odense have?", "What is the legal sex limit in Denmark?", "What does Fablab mean?", "Which language is the most spoken in Belgium?", "In what year did Denmark win EM?", "Who is the mayor in Odense?", "What is the capital of Denmark?", "What is the football club of Odense called?"];

var randomQuestion = questions[Math.floor(Math.random() * questions.length)];

var label = document.querySelector(".random-question");

label.innerHTML = randomQuestion;

var btn = document.querySelector(".send-button");

function getName() {
  var name = document.querySelector(".Fname").value;
}

var nameval = btn.onclick = getName();

console.log(getName());
