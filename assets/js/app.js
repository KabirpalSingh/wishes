function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log("Query variable %s not found", variable);
}

const message = document.getElementById("message");

const person = getQueryVariable("name");

console.log(person);

if (person) {
  message.innerHTML = `Dear <b>${person}</b>, may your life be as bright as Sun 🌄, as 
  beautiful as flowers 🌻, and you be showered with blessings and happiness 😋. 
  Happy New Year 2021`;
} else {
  message.innerHTML = `Dear, may your life be as bright as Sun 🌄, as 
  beautiful as flowers 🌻, and you be showered with blessings and happiness 😋. 
  Happy New Year 2021`;
}

function removeStart() {
  const start = document.getElementById("start");
  start.style.display = "none";

  setInterval(() => {
    const message = document.getElementById("message");
    message.style.transform = "scale(1)";
    message.style.opacity = "1";
  }, 200);
}
