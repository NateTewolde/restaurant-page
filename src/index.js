import createHomepage from "./home-page";
import createMenu from "./menu-page";
import createContactPage from "./contact-page";
console.log("hik");
function createTabs() {
  const content = document.querySelector("#content");

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const homeTab = document.createElement("div");
  homeTab.classList.add("home-tab");
  homeTab.classList.add("tab");
  homeTab.textContent = "Home";
  tabs.appendChild(homeTab);
  homeTab.setAttribute("data-tab-id", "1");

  const menuTab = document.createElement("div");
  menuTab.classList.add("menu-tab");
  menuTab.classList.add("tab");
  menuTab.textContent = "Menu";
  tabs.appendChild(menuTab);
  menuTab.setAttribute("data-tab-id", "2");

  const contactTab = document.createElement("div");
  contactTab.classList.add("contact-tab");
  contactTab.classList.add("tab");
  contactTab.textContent = "Contact";
  tabs.appendChild(contactTab);
  content.appendChild(tabs);
  contactTab.setAttribute("data-tab-id", "3");
}
createTabs();

function formatTabs() {
  const tabs = document.querySelectorAll("[data-tab-id]");
  tabs.forEach((tab) => {
    console.log("test");
    tab.addEventListener("click", () => {
      console.log(tab);
    });
  });
}

formatTabs();
