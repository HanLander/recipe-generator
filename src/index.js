function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "The recipe will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  recipeElement.innerHTML = "";
}

let recipeFormElemment = document.querySelector("#recipe-generator-form");
recipeFormElemment.addEventListener("submit", generateRecipe);
