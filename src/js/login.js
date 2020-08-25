const userLogin = async (e) => {
  e.preventDefault();
  let url = "http://localhost:8000/auth/login";
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let feedback = fetch(url, {
    method: "POST",
    headers: {
      mode: "cors",
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email: email, password: password }),
  });

  const response = await feedback;
  const data = await response.json();

  let errorAlert = document.getElementById("login-error");

  if (response.ok) {
    localStorage.token = data.token;
    window.location.href = "index.html";
  } else {
    errorAlert.classList.remove("d-none");
    errorAlert.innerHTML = data.error;
    setTimeout(() => {
      errorAlert.classList.add("d-none");
    }, 2000);
  }
};

document.getElementById("login").addEventListener("submit", userLogin);
