let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=7de525455add43dfb2ab4d25e3a83184";
fetch(url)
  .then(r => {
    return r.json();
  })
  .then(data => {
  let articles = data.articles;
  let newsList = document.createElement("ul");
  let body = document.querySelector("body");
  body.appendChild(newsList);
  articles.map(article => {
    let articleItem = document.createElement("li");
    articleItem.innerHTML =
      '<a href="'+ article.href + '">' + article.title + "</a>";
    newsList.appendChild(articleItem);
  });
})
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });