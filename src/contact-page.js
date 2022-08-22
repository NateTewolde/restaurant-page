function createContactPage() {
  const content = document.querySelector("#content");

  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");

  const contactImg = document.createElement("img");
  contactImg.src = "../src/images/restaurant-staff.jpg";

  contactPage.appendChild(contactImg);
  content.appendChild(contactPage);
}

export default createContactPage;
