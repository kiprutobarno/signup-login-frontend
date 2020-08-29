const resetPassword = async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const url = `http://localhost:8000/auth/forgot/${email}`;

  let feedback = fetch(url, {
    method: "POST",
    headers: {
      mode: "cors",
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  let response = await feedback;
  let data = await response.json();
  console.log(data);
  let successAlert = document.getElementById("reset-success");
  let errorAlert = document.getElementById("reset-error");
  if (response.ok) {
    successAlert.classList.remove("d-none");
    successAlert.innerHTML = data.message;
    setTimeout(() => {
      successAlert.classList.add("d-none");
      window.location.href = "index.html";
    }, 2000);
  } else {
    errorAlert.innerHTML = data.error;
    errorAlert.classList.remove("d-none");
    setTimeout(() => {
      errorAlert.classList.add("d-none");
    }, 2000);
  }
};

/**
 * Frontend form validation
 */
(() => {
  "use-strict";
  /**Fetch all forms */
  let forms = document.querySelectorAll(".needs-validation");
  /**Loop over the forms to prevent submission */
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.getElementById("reset").addEventListener("submit", resetPassword);
