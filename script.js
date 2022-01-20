
// active class addition in drawer
const drawerListItems = document.querySelectorAll(".drawer-list-ul-li ");

drawerListItems.forEach(drawerItem =>{
    drawerItem.addEventListener("click", () => {
        drawerListItems.forEach(item => item.classList.remove("active"));
        drawerItem.classList.add("active");
    })});