let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<3bb18ce1e0e6457cac08829db8d4f105>;

fetch(url)
  .then(r => {
    return r.json();
  })
  .then(data => {
    let results = data.results; // get the array of results from the data object
    let recipeList = document.createElement("ul"); // create a new `<li>`
    let body = document.querySelector("body"); // attach to the `<body>` node of the DOM
    body.appendChild(recipeList); // append the list to the body
    results.map(recipe => {
      // loop through each recipe object in the array of recipes
      let recipeItem = document.createElement("li"); // create a recipe item `<li>`
      recipeItem.innerHTML =
        '<a href="' + recipe.href + '">' + recipe.title + "</a>"; // add the link to each li with each recipe's title as the text and link as the href
      recipeList.appendChild(recipeItem); // append each recipe to the `<ul>`
    });
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });