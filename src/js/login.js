const userLogin = async (e) => {
  e.preventDefault();
  let url = "http://localhost:8000/auth/login";
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
    body: JSON.stringify({ email: email, password: password }),
  });

  const data = await response;
  if (data.status === 200) {
    document.location.href = "index.html";
  } else {
    let feedback = await data.json();
    console.log(feedback);
  }
};

document.getElementById("login").addEventListener("click", userLogin);
