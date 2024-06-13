function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d4c90a6e0890oeaa244ft334db3e3663";
  let context =
    "You are a culinary expert and have lots of knowledge about food. Your mission is to write recipes in basic HTML. Make sure to use the user instructions.";
  let prompt = `User instructions: Generate a recipe based on the ingredient entered ${instructionsInput.value} using the metric measurements`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink"> ⏳ Generating recipe...</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElemment = document.querySelector("#recipe-generator-form");
recipeFormElemment.addEventListener("submit", generateRecipe);
