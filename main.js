function closeContactForm() {
    document.getElementById("contactForm").classList.remove('visible');
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
  }
  
  function checkEmailForm(email) {
    var emailForm = /\S+@\S+\.\S+/;
  
    return emailForm.test(email);
  }
  
  function checkPhoneNumber(phoneNumber) {
    var phoneForm = /^\d{9}$/;
  
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
  
  var verifiQuestion = [];
  
  verifiQuestion[0] = new question(
    "Podaj gatunek muzyczny",
    "Rap",
    "Gitara",
    "Saksofon"
  );
  verifiQuestion[1] = new question(
    "Jak nazywa się międzynarodowy konkurs muzyczny?",
    "Eurowizja",
    "XFactor",
    "Mam Talent"
  );
  
  var randomQuestion;
  var answers = [];
  
  document.addEventListener("DOMContentLoaded", function () {
    newQuestion();
  });
  
  function question(question, rightAnswer, wrongAnswer1, wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
  }
  
  function newQuestion() {
    var randomNumber = Math.floor(Math.random() * verifiQuestion.length);
    randomQuestion = verifiQuestion[randomNumber];
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
    var x;
    x = document.querySelector('input[name="answer"]:checked').value;
  
    if (x == randomQuestion.rightAnswer) {
      return true;
    } else {
      newQuestion();
      return false;
    }
  }
  