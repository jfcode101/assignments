// #4. adding menu interaction
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

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>DOM Manipulation</h1>.`;
mainEl.classList.add("flex-ctr");

// create menu bar
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

// iterate through the menu
menuLinks.forEach((link) => {
  const anchorEl = document.createElement("a");
  anchorEl.setAttribute("href", link.href);
  anchorEl.textContent = link.text;
  topMenuEl.appendChild(anchorEl);
});

/*...... Second Part .....*/

// #3. creating the submenu
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// #4. adding menu interaction
// Select and cache all <a> elements inside of topMenuEl in variable topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName !== "A") return;
  console.log(e.target.textContent);

  //  #4.1  add event listener to add "active" class to <a></a>
  // removing "active" class
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
    // console.log(link);
  });
  //  adding active class
  e.target.classList.add("active");

  // #5. add menu interaction ---- LAST CODE
  if (topMenuLinks) {
    // check if the clicked item is already active
    if (!e.target.classList.contains("active")) {
      // test console
      console.log(
        `${e.target.textContent.toUpperCase()} This anchor contains active`
      );
      // check if clicked <a> has a sublink
    }
  }
});

// test printing
// console.log(subMenuEl);
