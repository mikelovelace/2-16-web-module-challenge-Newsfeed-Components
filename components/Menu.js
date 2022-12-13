// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(linksArray) {
  // select elements
  const menuWrapper = document.createElement("div");
  const menuList = document.createElement("ul");

  // append children and add class
  menuWrapper.appendChild(menuList);
  menuWrapper.classList.add("menu");

  // loop through the links array ([menuItems]) while creating a list item and link at each iteration 
  // while also appending them and adding the text content and styles
  linksArray.forEach((linkText) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    menuList.appendChild(listItem);
    listItem.appendChild(link);
    link.textContent = linkText;
    link.href = "#";
    link.style.textDecoration = "none";
    link.style.color = "black";
  });

  // select element
  // add click event which toggles the class "menu--open"
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("menu--open");
  });

  // return parent
  return menuWrapper;
}

// invoke the menuMaker while passing in the data and append it to the header
const newMenu = menuMaker(menuItems);
const header = document.querySelector(".header");
header.appendChild(newMenu);
