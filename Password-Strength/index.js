var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (pass.value.length <= 4) {
    str.innerHTML = "weak";
    msg.style.color = "yellow";
    pass.style.borderColor = "yellow";
  } else if (pass.value.length > 4 && pass.value.length <= 8) {
    str.innerHTML = "good";
    msg.style.color = "yellow";
    pass.style.borderColor = "green";
  } else {
    str.innerHTML = "KIRUMA SOUICHI";
    msg.style.color = "#26d730";
    pass.style.borderColor = "#26d730";
    pass.style.backgroundColor = "#070F2B";
  }
});
