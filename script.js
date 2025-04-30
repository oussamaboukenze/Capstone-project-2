var navMenu=document.querySelector(".top-container nav");
var svgMenu=document.querySelector(".svg-menu");
navMenu.style.display ==="block";
svgMenu.addEventListener("click",function(){
    if(navMenu.style.display ==="block"){
        navMenu.style.display = "none";
    }else{
        navMenu.style.display ="block";
    }
})