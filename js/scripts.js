
function suggestion(event) {
  event.preventDefault();
  
  const yesno = documument.querySelector("input[name='yesno']:checked").value;
  const flower = document.getElementById("flower").value;















  document.querySelector("p#results").innerText = "Language Suggestion: " + result;
  document.querySelector("p#results").removeAttribute("class");
}

window.addEventListener("load", function () {
  const form = document.getElementById("survey");
  form.addEventListener("submit", suggestion);
});