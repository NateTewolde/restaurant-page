import createHomepage from "./home-page";
import createMenu from "./menu-page";
import createContactPage from "./contact-page";

createTabs();
formatTabs();

function createTabs() {
  const content = document.querySelector("#content");

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const homeTab = document.createElement("div");
  homeTab.classList.add("home-tab");
  homeTab.classList.add("tab");
  homeTab.textContent = "Home";
  tabs.appendChild(homeTab);
  homeTab.setAttribute("data-tab-id", "0");

  const menuTab = document.createElement("div");
  menuTab.classList.add("menu-tab");
  menuTab.classList.add("tab");
  menuTab.textContent = "Menu";
  tabs.appendChild(menuTab);
  menuTab.setAttribute("data-tab-id", "1");

  const contactTab = document.createElement("div");
  contactTab.classList.add("contact-tab");
  contactTab.classList.add("tab");
  contactTab.textContent = "Contact";
  tabs.appendChild(contactTab);
  content.appendChild(tabs);
  contactTab.setAttribute("data-tab-id", "2");
}

function formatTabs() {
  const tabs = document.querySelectorAll("[data-tab-id]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      let tabIndex = tab.getAttribute("data-tab-id");
      refreshPage();

      if (tabIndex === "0") {
        createHomepage();
      }
      if (tabIndex === "1") {
        createMenu();
      }
      if (tabIndex === "2") {
        createContactPage();
      }
    });
  });
}

//helper function
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function refreshPage() {
  const content = document.querySelector("#content");
  removeAllChildNodes(content);
  createTabs();
  formatTabs();
}
