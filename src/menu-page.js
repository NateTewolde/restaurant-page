function createMenu() {
  const content = document.querySelector("#content");

  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");

  const restaurantInsideImg = document.createElement("img");
  restaurantInsideImg.src = "../src/images/restaurant-inside.jpg";

  const appetizers = document.createElement("div");
  appetizers.classList.add("appetizers-section");

  const TeriyakiMeatballs = document.createElement("div");
  TeriyakiMeatballs.classList.add("appetizer");
  const TeriyakiMeatballsHeader = document.createElement("div");
  TeriyakiMeatballsHeader.textContent = "Teriyaki Pineapple Meatballs $8.50";
  const TeriyakiMeatballsDesc = document.createElement("div");
  TeriyakiMeatballsDesc.textContent =
    "The savory and sweet taste of these meatballs is 🤌 The homemade sauce sets these meatballs apart.";
  const TeriyakiMeatballsImg = document.createElement("img");
  TeriyakiMeatballsImg.src = "../src/images/meatballs.jpg";
  TeriyakiMeatballs.appendChild(TeriyakiMeatballsHeader);
  TeriyakiMeatballs.appendChild(TeriyakiMeatballsDesc);
  TeriyakiMeatballs.appendChild(TeriyakiMeatballsImg);
  appetizers.appendChild(TeriyakiMeatballs);

  const ChickenParmesanSliders = document.createElement("div");
  ChickenParmesanSliders.classList.add("appetizer");
  const ChickenParmesanSlidersHeader = document.createElement("div");
  ChickenParmesanSlidersHeader.textContent =
    "Teriyaki Pineapple Meatballs $8.50";
  const ChickenParmesanSlidersDesc = document.createElement("div");
  ChickenParmesanSlidersDesc.textContent =
    "The savory and sweet taste of these meatballs is 🤌 The homemade sauce sets these meatballs apart.";
  const ChickenParmesanSlidersImg = document.createElement("img");
  ChickenParmesanSlidersImg.src = "../src/images/sliders.jpg";
  ChickenParmesanSliders.appendChild(ChickenParmesanSlidersHeader);
  ChickenParmesanSliders.appendChild(ChickenParmesanSlidersDesc);
  ChickenParmesanSliders.appendChild(ChickenParmesanSlidersImg);
  appetizers.appendChild(ChickenParmesanSliders);

  const TuscanSausageBeanDip = document.createElement("div");
  TuscanSausageBeanDip.classList.add("appetizer");
  const TuscanSausageBeanDipHeader = document.createElement("div");
  TuscanSausageBeanDipHeader.textContent = "Teriyaki Pineapple Meatballs $8.50";
  const TuscanSausageBeanDipDesc = document.createElement("div");
  TuscanSausageBeanDipDesc.textContent =
    "The savory and sweet taste of these meatballs is 🤌 The homemade sauce sets these meatballs apart.";
  const TuscanSausageBeanDipImg = document.createElement("img");
  TuscanSausageBeanDipImg.src = "../src/images/bean-dip.jpg";
  TuscanSausageBeanDip.appendChild(TuscanSausageBeanDipHeader);
  TuscanSausageBeanDip.appendChild(TuscanSausageBeanDipDesc);
  TuscanSausageBeanDip.appendChild(TuscanSausageBeanDipImg);
  appetizers.appendChild(TuscanSausageBeanDip);

  // MAINS
  const mains = document.createElement("div");
  mains.classList.add("mains-section");

  const TomatoPasta = document.createElement("div");
  TomatoPasta.classList.add("appetizer");
  const TomatoPastaHeader = document.createElement("div");
  TomatoPastaHeader.textContent = "Creamy Tomato Pasta $11.50";
  const TomatoPastaDesc = document.createElement("div");
  TomatoPastaDesc.textContent =
    "The tomato sauce gives the dish a creamy tang that is just delicious.";
  const TomatoPastaImg = document.createElement("img");
  TomatoPastaImg.src = "../src/images/tomato-pasta.jpg";
  TomatoPasta.appendChild(TomatoPastaHeader);
  TomatoPasta.appendChild(TomatoPastaDesc);
  TomatoPasta.appendChild(TomatoPastaImg);
  mains.appendChild(TomatoPasta);

  const HoneyMustardChicken = document.createElement("div");
  HoneyMustardChicken.classList.add("appetizer");
  const HoneyMustardChickenHeader = document.createElement("div");
  HoneyMustardChickenHeader.textContent = "Honey Mustard Chicken $13.00";
  const HoneyMustardChickenDesc = document.createElement("div");
  HoneyMustardChickenDesc.textContent =
    "This is a juicy and flavorful chicken dish that goes well with our aromatic coconut rice.";
  const HoneyMustardChickenImg = document.createElement("img");
  HoneyMustardChickenImg.src = "../src/images/honey-mustard-chicken.jpg";
  HoneyMustardChicken.appendChild(HoneyMustardChickenHeader);
  HoneyMustardChicken.appendChild(HoneyMustardChickenDesc);
  HoneyMustardChicken.appendChild(HoneyMustardChickenImg);
  mains.appendChild(HoneyMustardChicken);

  const PotRoast = document.createElement("div");
  PotRoast.classList.add("appetizer");
  const PotRoastHeader = document.createElement("div");
  PotRoastHeader.textContent = "Beef Pot Roast $13.50";
  const PotRoastDesc = document.createElement("div");
  PotRoastDesc.textContent =
    "This is our flaky and tender beef roast. The beef is sauteéd in red wine and slowcooked. ";
  const PotRoastImg = document.createElement("img");
  PotRoastImg.src = "../src/images/pot-roast.jpg";
  PotRoast.appendChild(PotRoastHeader);
  PotRoast.appendChild(PotRoastDesc);
  PotRoast.appendChild(PotRoastImg);
  mains.appendChild(PotRoast);
  //MAINS END

  //Beverages
  const beverages = document.createElement("div");
  beverages.classList.add("beverages-section");

  const coke = document.createElement("div");
  coke.classList.add("appetizer");
  const cokeHeader = document.createElement("div");
  cokeHeader.textContent = "Classic Coke $2.00";
  const cokeDesc = document.createElement("div");
  cokeDesc.textContent = "Mexican style coke with real cane sugar.";
  const cokeImg = document.createElement("img");
  cokeImg.src = "../src/images/coke.jpg";
  coke.appendChild(cokeHeader);
  coke.appendChild(cokeDesc);
  coke.appendChild(cokeImg);
  beverages.appendChild(coke);

  const icedTea = document.createElement("div");
  icedTea.classList.add("appetizer");
  const icedTeaHeader = document.createElement("div");
  icedTeaHeader.textContent = "Iced Tea $2.50";
  const icedTeaDesc = document.createElement("div");
  icedTeaDesc.textContent = "Made in house. Ice cold and refreshing";
  const icedTeaImg = document.createElement("img");
  icedTeaImg.src = "../src/images/iced-tea.jpg";
  icedTea.appendChild(icedTeaHeader);
  icedTea.appendChild(icedTeaDesc);
  icedTea.appendChild(icedTeaImg);
  beverages.appendChild(icedTea);

  const chocMilkshake = document.createElement("div");
  chocMilkshake.classList.add("appetizer");
  const chocMilkshakeHeader = document.createElement("div");
  chocMilkshakeHeader.textContent = "Chocolate Milk Shake $4.00";
  const chocMilkshakeDesc = document.createElement("div");
  chocMilkshakeDesc.textContent =
    "Creamy chocholate milkshake made with our homemade milk";
  const chocMilkshakeImg = document.createElement("img");
  chocMilkshakeImg.src = "../src/images/choc-milkshake.jpg";
  chocMilkshake.appendChild(chocMilkshakeHeader);
  chocMilkshake.appendChild(chocMilkshakeDesc);
  chocMilkshake.appendChild(chocMilkshakeImg);
  beverages.appendChild(chocMilkshake);

  //Beverages End

  menuPage.appendChild(restaurantInsideImg);
  menuPage.appendChild(appetizers);
  menuPage.appendChild(mains);
  menuPage.appendChild(beverages);
  content.appendChild(menuPage);
}

export default createMenu;
