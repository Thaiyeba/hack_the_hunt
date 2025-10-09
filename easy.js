function checkAnswers() {
  const correctAnswers = {
    q1: "brother",
    q2: "22",
    q3: "x",
    q4: "keyboard",
    q5: "m"
  };

  let score = 0;

  for (let key in correctAnswers) {
    const userAnswer = document.getElementById(key).value.trim().toLowerCase();
    if (userAnswer === correctAnswers[key]) {
      score++;
    }
  }

  if (score === 5) {
    alert("🎉 Excellent! All answers are correct!");
    window.location.href = "coding.html";
  } else {
    alert("You got " + score + " out of 5 correct. ❌ Please try again!");
  }
}
