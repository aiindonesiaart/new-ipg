document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");
  const content = document.getElementById("content");

  errorMessage.textContent = "";

  console.log("Fetching CSV...");

  fetch('https://aiindonesiaart.github.io/access/image-pg.csv') 
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then(data => {
      console.log("Raw CSV Data:", data);

      const lines = data.split("\n").filter(line => line.trim() !== "");
      const headers = lines[0].split(",");
      const users = lines.slice(1).map(line => {
        const [csvEmail, csvPass, csvSession] = line.split(",");
        return {
          email: csvEmail.trim(),
          password: csvPass.trim(),
          session_days: csvSession.trim()
        };
      });

      let userFound = null;

      for (let user of users) {
        if (user.email === email && user.password === password) {
          userFound = user;
          break;
        }
      }

      if (!userFound) {
        errorMessage.textContent = "Invalid email or password.";
        return;
      }

      // Session logic
      const now = new Date();
      const storedLogin = localStorage.getItem("login_time_" + email);
      let loginTime = storedLogin ? new Date(storedLogin) : now;

      if (!storedLogin) {
        localStorage.setItem("login_time_" + email, loginTime.toISOString());
      }

      if (userFound.session_days !== "lifetime") {
        const sessionExpire = new Date(loginTime);
        sessionExpire.setDate(sessionExpire.getDate() + parseInt(userFound.session_days));

        if (now > sessionExpire) {
          errorMessage.textContent = "Your session has expired.";
          return;
        }
      }

      // Show content
      document.querySelector(".login-form").style.display = "none";
      content.style.display = "block";

    })
    .catch(err => {
      console.error("Error fetching or parsing CSV:", err);
      errorMessage.textContent = "Authentication failed. Please try again.";
    });
});
