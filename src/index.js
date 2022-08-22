import createHomepage from "./home-page";
import createMenu from "./menu-page";
import createContactPage from "./contact-page";

function createTabs() {
  const content = document.querySelector("#content");

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const homeTab = document.createElement("div");
  homeTab.textContent = "Home";
  tabs.appendChild(homeTab);

  const menuTab = document.createElement("div");
  menuTab.textContent = "Menu";
  tabs.appendChild(menuTab);

  const contactTab = document.createElement("div");
  contactTab.textContent = "Contact";
  tabs.appendChild(contactTab);
  content.appendChild(tabs);
}
createTabs();
createHomepage();
