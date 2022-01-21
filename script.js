
// active class addition in drawer
const drawerListItems = document.querySelectorAll(".drawer-list-ul-li ");

drawerListItems.forEach(drawerItem =>{
    drawerItem.addEventListener("click", () => {
        drawerListItems.forEach(item => item.classList.remove("active"));
        drawerItem.classList.add("active");
    })});

    // active class addition in tabs
    const tabsListItems = document.querySelectorAll(".tabs-div-ul-li ");

tabsListItems.forEach(tabsItem =>{
    tabsItem.addEventListener("click", () => {
        tabsListItems.forEach(item => item.classList.remove("active-tabs"));
        tabsItem.classList.add("active-tabs");
    })});