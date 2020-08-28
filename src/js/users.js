const loadUsers = async () => {
  let url = "http://localhost:8000/users";

  const feedback = fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.token,
    }),
  });

  const response = await feedback;
  const users = await response.json();

  let alert = document.getElementById("alert");

  if (response.ok) {
    let tableTitle = document.getElementById("table-title");
    let table = document.getElementById("table");
    tableTitle.classList.remove("d-none");
    table.classList.remove("d-none");
    let tableBody = document.getElementById("table-body");
    users.forEach((user) => {
      tableBody.innerHTML +=
        `<td>` +
        user.id +
        `</td>` +
        `<td>` +
        user.email +
        `</td>` +
        `<td>` +
        new Date(Date.parse(user.date_created)) +
        `</td>` +
        `<td>` +
        user.is_admin +
        `</td>`;
    });
  } else {
    alert.classList.remove("d-none");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  }
};
