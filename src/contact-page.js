function createContactPage() {
  const content = document.querySelector("#content");

  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");

  const contactImg = document.createElement("img");
  contactImg.src = "../src/images/restaurant-staff.jpg";

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info-section");

  const email = document.createElement("div");
  email.textContent = "bistro@bistro-restaurant.com";
  contactInfo.appendChild(email);

  const phone = document.createElement("div");
  phone.textContent = "555-555-5555";
  contactInfo.appendChild(phone);

  contactPage.appendChild(contactImg);
  contactPage.appendChild(contactInfo);
  content.appendChild(contactPage);
}

export default createContactPage;
