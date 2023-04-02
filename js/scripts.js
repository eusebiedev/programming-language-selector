function languageSuggestion(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const system = document.getElementById("system").value;
  const answer = document.querySelector("input[name='answer']:checked").value;
  const answer2 = document.querySelector("input[name='answer2']:checked").value;
  const flower = document.getElementById("flower").value;
  
  let result;
  if (answer === "yes") {
    if (answer2 === "earth") {
      result = "Ruby";
    } else if (system === "macintosh" || system === "windows") {
      result = "Python";
    } else if (flower === "rose") {
      result = "C#";
    } else {
      result = "Swift";
    }
  }
  if (answer === "no") {
    if (answer2 === "mars") {
      result = "C#";
    } else if (flower === "tulip") {
      result = "Swift";
    } else if (system === "windows" || system === "macintosh") {
      result = "Ruby";
    } else {
      result = "Python";
    }
  }

  document.getElementById("survey").reset();
  document.querySelector("p#results").innerText = "Hi " + name + "! " + "Your Programming Language suggestion is: "
  + result;
  document.querySelector("p#results").removeAttribute("class");
}

window.addEventListener("load", function () {
  const form = document.getElementById("survey");
  form.addEventListener("submit", languageSuggestion);
});