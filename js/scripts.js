function languageSuggestion(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const system = document.getElementById("system").value;
  const answer = document.querySelector("input[name='answer']:checked").value;
  const answer2 = document.querySelector("input[name='answer2']:checked").value;
  const flower = document.getElementById("flower").value;
  
  let result;
  if (answer === "yes") { //1st branching
    if (answer2 === "earth") {
    } if (flower === "rose") { 
      result = "Ruby";
    } else if (flower === "tulip") {
      result = "Python";
    } else {
      result = "Swift";
    }
  }
  if (answer === "no") {
    if (answer2 === "mars") {
    } if (flower === "rose") {
      result = "Swift";
    } else if (flower === "tulip") {
      result = "Python";
    } else if (system = "macintosh" || "windows") { //change to else
      result = "Ruby";
    } else {
      result = "Please select one";
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