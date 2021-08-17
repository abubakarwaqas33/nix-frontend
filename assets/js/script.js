function isOpenNavbar() {
   let navList = document.getElementById('navList');
    if(navList.classList.contains('collapse-header')) {
        navList.classList.remove("collapse-header");
    } else 
        navList.classList.add("collapse-header");

}