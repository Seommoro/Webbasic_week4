async function requestShowData(searchWord) {
  const response = await fetch(
    "https://api.tvmaze.com/search/shows?q=" + searchWord
  );
  const jsonData = await response.json();
  return jsonData;
}

/*const inputButton = document.getElementById("submit-data");
inputButton.addEventListener("click", function () {
  const searchTerm = document.getElementById("input-show").value;
  const contentArea = document.getElementById("content");
  requestShowData(searchTerm).then((result) => {
    result.forEach((element) => {
      let imageLink = "";
      if (element.show.image != null) {
        imageLink = element.show.image.medium;
      }
      let newDiv = document.createElement("div");
      //console.log(element.show.image.medium);
      newDiv.className = "show-data";
      newDiv.innerHTML =
        '<img src="' +
        imageLink +
        '"> <div class="show-info"> <h1>' +
        element.show.name +
        "</h1> <p>" +
        element.show.summary +
        "</p> </div>";
      contentArea.append(newDiv);
      console.log(element.score);
      console.log(element.show);
    });
  });
});*/

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = document.getElementById("input-show").value;
  const contentArea = document.getElementById("content");
  requestShowData(searchTerm).then((result) => {
    result.forEach((element) => {
      let imageLink = "";
      if (element.show.image != null) {
        imageLink = element.show.image.medium;
      }
      let newDiv = document.createElement("div");
      //console.log(element.show.image.medium);
      newDiv.className = "show-data";
      newDiv.innerHTML =
        '<img src="' +
        imageLink +
        '"> <div class="show-info"> <h1>' +
        element.show.name +
        "</h1> <p>" +
        element.show.summary +
        "</p> </div>";
      contentArea.append(newDiv);
      console.log(element.score);
      console.log(element.show);
    });
  });
});
