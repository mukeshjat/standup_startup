window.addEventListener('scroll', function(){
    let navbar = document.getElementById("menu-bar");
    if(window.pageYOffset >= 82.1){
        navbar.classList.add('sticky');
        document.getElementById("perfect").style.marginTop = "83.6"
    } else{
        navbar.classList.remove('sticky');
        document.getElementById("perfect").style.marginTop = ""
    }
});