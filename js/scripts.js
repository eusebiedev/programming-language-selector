
function languageSuggestion(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const answer = document.querySelector("input[name='answer']:checked").value;
  const flower = document.getElementById("flower").value;

  let result;
  if (answer === "yes") {
    if (flower === "rose") {
      result = "Ruby";
    } else if (flower === "tulip") {
      result = "Python";
    } 
  }
  

  

  




  document.querySelector("p#results").innerText = "Hi: " + name + " " + "Your suggestion is: "
  + result;
  document.querySelector("p#results").removeAttribute("class");
}

window.addEventListener("load", function () {
  const form = document.getElementById("survey");
  form.addEventListener("submit", languageSuggestion);
});