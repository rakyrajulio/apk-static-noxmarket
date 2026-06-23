function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "Admin" && pass === "Admin") {
    window.location.href = "pages/dashboard.html";
  } else {
    alert("ID atau Password salah!");
  }
}

function togglePassword() {
  const input = document.getElementById("password");

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}