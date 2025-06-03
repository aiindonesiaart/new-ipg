document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");
  const content = document.getElementById("content");

  errorMessage.textContent = "";

  fetch('https://aiindonesaiart.github.io/akses/image-pg.csv') 
    .then(response => response.text())
    .then(data => {
      const lines = data.split("\n").slice(1); // skip header
      let userFound = false;
      let sessionDays = null;

      for (let line of lines) {
        const [csvEmail, csvPass, csvSession] = line.trim().split(",");

        if (csvEmail === email && csvPass === password) {
          userFound = true;
          sessionDays = csvSession;

          // Check session expiration
          const now = new Date();
          const storedLogin = localStorage.getItem("login_time_" + email);
          let loginTime = storedLogin ? new Date(storedLogin) : now;

          if (!storedLogin) {
            // First login or no session yet
            localStorage.setItem("login_time_" + email, loginTime.toISOString());
          }

          if (sessionDays !== "lifetime") {
            const sessionExpire = new Date(loginTime);
            sessionExpire.setDate(sessionExpire.getDate() + parseInt(sessionDays));

            if (now > sessionExpire) {
              errorMessage.textContent = "Your session has expired.";
              return;
            }
          }

          // Show content
          content.style.display = "block";
          this.style.display = "none";
          break;
        }
      }

      if (!userFound) {
        errorMessage.textContent = "Invalid email or password.";
      }
    })
    .catch(err => {
      console.error(err);
      errorMessage.textContent = "Failed to load authentication data.";
    });
});
