let verifyQuestions = [];
let randomQuestion;
let answers = [];

verifyQuestions = [{
        question: "Podaj gatunek muzyczny",
        rightAnswer: "Rap",
        wrongAnswer1: "Gitara",
        wrongAnswer2: "Saksofon"
    },
    {
        question: "Jak nazywa się międzynarodowy konkurs muzyczny, który odbywa się w Europie?",
        rightAnswer: "Eurowizja",
        wrongAnswer1: "XFactor",
        wrongAnswer2: "Mam Talent"
    },
    {
        question: "Instrumentem klawiszowym nie jest ",
        rightAnswer: "Gitara",
        wrongAnswer1: "Fortepian",
        wrongAnswer2: "Pianino"
    },
    {
        question: "Instrumentem strunowym jest ",
        rightAnswer: "Harfa",
        wrongAnswer1: "Akordeon",
        wrongAnswer2: "Trąbka"
    },
];

function closeContactForm() {
    document.getElementById("contactForm").classList.remove('visible');
    newQuestion();
}

function sendContactForm() {
    alert("Pomyślnie wysłano zgłoszenie");

    closeContactForm();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("msg").value = "";
    document.querySelector('input[name="answer"]:checked').checked = false;
    newQuestion();
}

function showContactForm() {
    document.getElementById("contactForm").classList.add('visible');
    newQuestion();
}

function checkEmailForm(email) {
    let emailForm = /\S+@\S+\.\S+/;

    return emailForm.test(email);
}

function checkPhoneNumber(phoneNumber) {
    let phoneForm = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/im

    return phoneForm.test(phoneNumber);
}

function checkIfEmptyOrWrong() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const msg = document.getElementById("msg").value;

    if (!name || !email || !phoneNumber || !msg)
        alert("Uzupełnij wszystkie pola!");
    else if (checkEmailForm(email) === false)
        alert("Podano zły adres email! Poprawna forma to example@example.com");
    else if (checkPhoneNumber(phoneNumber) === false)
        alert("Podano zły numer telefonu! Poprawna forma to XXXXXXXXX");
    else if (checkAnswer() === false) alert("Podano złą odpowiedź!");
    else {
        sendContactForm();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    newQuestion();
});

function newQuestion() {

    let randomNumber = Math.floor(Math.random() * verifyQuestions.length);
    randomQuestion = verifyQuestions[randomNumber];
    answers = [
        randomQuestion.rightAnswer,
        randomQuestion.wrongAnswer1,
        randomQuestion.wrongAnswer2,
    ];

    document.getElementById("question").innerHTML = randomQuestion.question;
    document.querySelector("input#answerA").value = answers[0];
    document.querySelector("#labelA").innerHTML = answers[0];
    document.querySelector("input#answerB").value = answers[1];
    document.querySelector("#labelB").innerHTML = answers[1];
    document.querySelector("input#answerC").value = answers[2];
    document.querySelector("#labelC").innerHTML = answers[2];
}

function checkAnswer() {
    let x = document.querySelector('input[name="answer"]:checked').value;

    if (x == randomQuestion.rightAnswer) {
        return true;
    } else {
        newQuestion();
        return false;
    }
}