var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

menuBtn.onclick = function(){
  if(sideNav.style.right == "-250px"){
    sideNav.style.right = "0";
  }
}
