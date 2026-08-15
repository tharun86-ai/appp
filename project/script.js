// =============================
// LinguaLearn - script.js
// =============================

// Welcome Message
window.onload = function () {
    const user = localStorage.getItem("username");

    if (user) {
        const title = document.querySelector(".hero h1");
        if (title) {
            title.innerHTML = "Welcome, " + user + " 👋";
        }
    }

    updateProgress();
    updateStreak();
};

// ----------------------------
// Register
// ----------------------------
function registerUser() {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");

    window.location = "login.html";
}

// ----------------------------
// Login
// ----------------------------
function loginUser() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {

        alert("Login Successful!");

        window.location = "index.html";

    } else {

        alert("Invalid Email or Password");

    }
}

// ----------------------------
// Logout
// ----------------------------
function logout() {

    localStorage.removeItem("username");

    alert("Logged Out");

    window.location = "login.html";
}

// ----------------------------
// Progress
// ----------------------------
function completeLesson() {

    let progress = Number(localStorage.getItem("progress"));

    if (!progress) {
        progress = 0;
    }

    progress += 10;

    if (progress > 100)
        progress = 100;

    localStorage.setItem("progress", progress);

    updateProgress();

    alert("Lesson Completed!");
}

function updateProgress() {

    const progress = localStorage.getItem("progress") || 0;

    const bar = document.getElementById("progressBar");

    const text = document.getElementById("progressText");

    if (bar) {
        bar.style.width = progress + "%";
    }

    if (text) {
        text.innerHTML = progress + "% Completed";
    }
}

// ----------------------------
// Daily Streak
// ----------------------------
function updateStreak() {

    let streak = Number(localStorage.getItem("streak"));

    if (!streak)
        streak = 1;

    localStorage.setItem("streak", streak);

    const box = document.getElementById("streak");

    if (box) {
        box.innerHTML = "🔥 Daily Streak : " + streak;
    }
}

// ----------------------------
// Quiz
// ----------------------------

const questions = [

{
question:"Which word means Hello in French?",
options:["Hola","Bonjour","Hallo","Ciao"],
answer:1
},

{
question:"Which language is spoken in Japan?",
options:["Chinese","Japanese","Korean","Thai"],
answer:1
},

{
question:"Hola belongs to which language?",
options:["German","Spanish","French","English"],
answer:1
}

];

let current = 0;
let score = 0;

function loadQuestion(){

if(document.getElementById("question")==null)
return;

document.getElementById("question").innerHTML =
questions[current].question;

let options=document.getElementsByClassName("option");

for(let i=0;i<4;i++){

options[i].innerHTML=
questions[current].options[i];

}

}

function answer(index){

if(index==questions[current].answer){

score++;

}

current++;

if(current<questions.length){

loadQuestion();

}
else{

document.getElementById("quiz").innerHTML=
"<h2>Your Score : "+score+" / "+questions.length+"</h2>";

}

}

// ----------------------------
// Language Selection
// ----------------------------

function chooseLanguage(language){

localStorage.setItem("language",language);

alert(language+" Selected");

}

// ----------------------------
// Dark Mode
// ----------------------------

function toggleDark(){

document.body.classList.toggle("dark");

}

// ----------------------------
// Reset Progress
// ----------------------------

function resetProgress(){

localStorage.removeItem("progress");

updateProgress();

alert("Progress Reset");

}