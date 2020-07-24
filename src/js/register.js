const registerUser = async (e) => {
  e.preventDefault();
  const url = "http://localhost:8000/auth/register";
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let response = fetch(url, {
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

  const data = await response;
  //   const feedback = await data.json();
  if (data.status === 201) {
    window.location.href = "index.html";
  }
};

document.getElementById("register").addEventListener("click", registerUser);
