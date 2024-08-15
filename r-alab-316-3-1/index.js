// #316.3.4 adding menu interaction
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// #3.16.1.1 Getting started
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>DOM Manipulation</h1>.`;
mainEl.classList.add("flex-ctr");

// #316.1.2 create menu bar
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// #316.1.2 adding menu buttons — iterate through the menu
menuLinks.forEach((link) => {
  const anchorEl = document.createElement("a");
  anchorEl.setAttribute("href", link.href);
  anchorEl.textContent = link.text;
  topMenuEl.appendChild(anchorEl);
});

/* ************* #316.3 — second part ************* */

// #316.3.3 creating the submenu
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// #313.3.5 attaching a delegate {click} event to subMenuEl
subMenuEl.addEventListener("click", (e) => {
  // prevent default
  e.preventDefault();

  // return if clicked element is not an anchor
  if (e.target.tagName !== "A") return;
  //   print it out to check if it's working
  console.log(e.target.textContent);
  // set the {topMenuEl} top property to
});

// #316.3.4 adding menu interaction
// Select and cache all <a> elements inside of topMenuEl in variable topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  // return if clicked element is not an anchor
  if (e.target.tagName !== "A") return;
  console.log(e.target.textContent);

  // adding an event listener to either {add} or {remove} "active" class to the link <a>
  topMenuLinks.forEach((link) => {
    if (link === e.target) {
      link.classList.toggle("active");
    } else {
      link.classList.remove("active");
    }
  });

  // #316.5. adding submenu interaction
  /* #316.5.1 
    we need a variable to store which anchor is clicked, to achieve this we will use find() method 
     
    find() — this method of Array instances returns the first 
    element in the provided array that satisfies the provided testing function
   */
  const clickedAnchor = menuLinks.find(
    (link) => link.text === e.target.textContent
  );

  // 316.5.1 check if the clicked anchor within the {menuLinks} has a {subLinks}
  if (clickedAnchor.subLinks) {
    // set the {subMenueEl} top property to 100%
    subMenuEl.style.top = "100%";
    // call the {buildSubmenu()} function
    buildSubmenu(clickedAnchor.subLinks);
  } else {
    // set the {subMenueEl} top property to 0%
    subMenuEl.style.top = "0";
  }
});

// function buildSubmenu
function buildSubmenu(subLinks) {
  // 1. clear the subMenuEL
  subMenuEl.innerHTML = "";
  // 2. forEach() loop to iterate over the {subLinks} array
  subLinks.forEach((link) => {
    // 2.a. create an <a> element
    const subLinkAnchor = document.createElement("a");
    // 2.b. set <href> attribute with value {link.href}
    subLinkAnchor.setAttribute("href", link.href);
    // 2.c. add text to {subLinkAnchor}
    subLinkAnchor.textContent = link.text;
    // 2.d. append the new element
    subMenuEl.appendChild(subLinkAnchor);
  });
}
