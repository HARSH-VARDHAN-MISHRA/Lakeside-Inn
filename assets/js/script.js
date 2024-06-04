const navbarNav = document.querySelector("header nav .links");
const toogleMenuBtn = document.querySelector("header nav .toogle-nav");

toogleMenuBtn.addEventListener("click",()=>{
    if(navbarNav.classList.contains("active")){
        navbarNav.classList.remove("active")
        toogleMenuBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`
    }
    else{
        navbarNav.classList.add("active")
        toogleMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
})
