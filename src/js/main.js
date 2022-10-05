var elHeader = document.querySelector(".site-header");
var elBurgerBtn = document.querySelector(".btn-burger");

elBurgerBtn.addEventListener("click", function(){
    elHeader.classList.toggle("show")    
})