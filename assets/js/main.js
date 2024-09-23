/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

/*==================== ABOUT TABS ====================*/
//selecting all the tabs with the contents
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

//looping each buttons
tabs.forEach((tab) => {
  //adding click functionality
  tab.addEventListener("click", () => {
    //remove the tab__active to all the tab
    tabs.forEach((t) => t.classList.remove("tab__active"));
    //then add the tab__active to the clicked tab
    tab.classList.add("tab__active");

    //hide the tab contents if the tab is not clicked
    tabContents.forEach((content) => content.classList.remove("tab__active"));
    //targeting the content for the clicked tab
    const target = document.querySelector(tab.dataset.target);
    //and then displays the content to the clicked tab by adding the tab__active
    target.classList.add("tab__active");
  });
});
