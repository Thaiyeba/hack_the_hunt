    let SECRET_KEY = "";

    const correctAnswers = {
      q1: "brother",
      q2: "22",
      q3: "x",
      q4: "keyboard",
      q5: "m"
    };

    function calculateSecretKey() {
      const a1 = correctAnswers.q1.charAt(0);
      const a2 = correctAnswers.q2.charAt(1);
      const a3 = correctAnswers.q3.charAt(0);
      const a4 = correctAnswers.q4.charAt(3);
      const a5 = correctAnswers.q5.charAt(0);
      return (a1 + a2 + a3 + a4 + a5).toLowerCase();
    }

    function checkAnswers() {
      let score = 0;
      let isAllCorrect = true;

      for (let key in correctAnswers) {
        const userAnswer = document.getElementById(key).value.trim().toLowerCase();
        if (userAnswer === correctAnswers[key]) score++;
        else isAllCorrect = false;
      }

      if (isAllCorrect) {
        alert("🎉 Excellent! All 5 answers are correct! A new challenge has appeared below.");
        SECRET_KEY = calculateSecretKey();
        document.getElementById('password-section').style.display = 'block';
        document.getElementById('password-section').scrollIntoView({ behavior: 'smooth' });
      } else {
        alert("You got " + score + " out of 5 correct. ❌ Please try again!");
        document.getElementById('password-section').style.display = 'none';
      }
    }

    function checkPassword() {
      const userPassword = document.getElementById('secret-password-input').value.trim().toLowerCase();
      if (userPassword === SECRET_KEY) {
        alert("🔑 Access Granted! Moving to the next level.");
        window.location.href = "coding.html";
      } else {
        alert("❌ Incorrect Key. Try again.");
        document.getElementById('secret-password-input').value = '';
      }
    }

