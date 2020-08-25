const registerUser = async (e) => {
  e.preventDefault();
  const url = "http://localhost:8000/auth/register";
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
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const response = await feedback;
  const data = await response.json();

  let errorAlert = document.getElementById("registration-error");

  if (response.ok) {
    window.location.href = "index.html";
  } else {
    errorAlert.classList.remove("d-none");
    errorAlert.innerHTML = data.error;
    setTimeout(() => {
      errorAlert.classList.add("d-none");
    }, 2000);
  }
};
document.getElementById("register").addEventListener("submit", registerUser);
