const content = document.querySelector("#content");

createHomepage();

function createHomepage() {
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");

  const restaurantImg = document.createElement("img");
  restaurantImg.src = "../src/images/restaurant-image.jpg";

  const restaurantHeadline = document.createElement("div");
  restaurantHeadline.classList.add("headline");

  const restaurantName = document.createElement("div");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Corner Bistro";

  const restaurantSlogan = document.createElement("div");
  restaurantSlogan.classList.add("restaurant-Slogan");
  restaurantSlogan.textContent =
    "When you're here, you're family. Eat Fresh. Have it your way.";

  restaurantHeadline.appendChild(restaurantName);
  restaurantHeadline.appendChild(restaurantSlogan);

  homePage.appendChild(restaurantImg);
  homePage.appendChild(restaurantHeadline);
  content.appendChild(homePage);
}
