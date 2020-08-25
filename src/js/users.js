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
  if (response.ok) {
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
  }
};
