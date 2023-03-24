
function survey(event) {
  event.preventDefault();
























  document.querySelector("p#resutls").innerText = "Language Suggestion: " + " " + result;
  document.querySelector("").removeAttribute("class");
}

window.addEventListener("load", function () {
  const form = document.getElementById("survey");
  form.addEventListener("submit", selectLanguage);
});