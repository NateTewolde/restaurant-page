const content = document.querySelector("#content");

createHomepage();

function createHomepage() {
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");

  const restaurantImg = document.createElement("img");
  restaurantImg.src = "../src/images/restaurant-image.jpg";

  const restaurantHeadline = document.createElement("div");
  restaurantHeadline.classList.add("headline");
  restaurantHeadline.textContent =
    "When you're here, you're family. Eat Fresh. Have it your way. I don't even have to tell you what restaurants these taglines come from, because you already know! A good tagline can become part of your restaurant's identity, almost as much as your name and logo. The keys to selecting a great tagline? Keep it short, snappy, and easy to remember. If you're having trouble coming up with one, here is a list of 187 different restaurant taglines to get you started. Adopt one of these, or use one as a jumping off point to your own clever creation! There are a lot of ways you can go with your tagline if you're not trying to tie in a specific cuisine. You could choose to emphasize your great value, a fun or romantic atmosphere, or the high quality of your product.";

  homePage.appendChild(restaurantImg);
  homePage.appendChild(restaurantHeadline);
  content.appendChild(homePage);
}
