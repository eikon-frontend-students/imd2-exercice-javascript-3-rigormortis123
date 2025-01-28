var input = document.querySelector(".form-input");
var button = document.querySelector(".form-button");
var articles = document.querySelectorAll(".articles-item");

function search() {
  var text = input.value;

  articles.forEach(function (article) {
    if (article.textContent.includes(text)) {
      article.style.display = "block";
      //   console.log("yeah yeah yeah");
    } else {
      article.style.display = "none";
      //   console.log("Noooooon");
    }
  });
}

button.addEventListener("click", search);
