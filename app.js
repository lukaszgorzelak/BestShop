document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector(".hamburger");
    const list = document.querySelector(".page-nav-list");



hamburger.addEventListener("click",function(){
    console.log("tak");
    list.classList.toggle("develop");
})

});