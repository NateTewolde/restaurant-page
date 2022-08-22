console.log("hi there");

const content = document.querySelector("#content");
createHomepage();
function createHomepage() {
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");

  const restaurantImg = document.createElement("img");
  restaurantImg.src = "../src/images/restaurant-image.jpg";

  homePage.appendChild(restaurantImg);
  content.appendChild(homePage);
}
