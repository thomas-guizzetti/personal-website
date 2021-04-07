var achievementUl = document.getElementsByClassName("achievement-ul");
var achievementButtons = document.getElementsByClassName(
  "achievement-paragraph"
);
var achievementDivs = document.getElementsByClassName("achievements");
var icons = document.getElementsByClassName("far fa-arrow-alt-circle-up");

var navBarButton = document.getElementsByClassName("nav-bar-button");
var navBarPopUp = document.getElementsByClassName("nav-bar-popup");

console.log(icons.length);

navBarButton[0].addEventListener("click", function () {
  if (navBarPopUp[0].style.transform !== "translateY(0px)") {
    navBarPopUp[0].style.transform = "translateY(0px)";
  } else if (navBarPopUp[0].style.transform === "translateY(0px)") {
    navBarPopUp[0].style.transform = "translateY(-300px)";
  }
});

for (let i = 0; i < achievementButtons.length; i++) {
  achievementButtons[i].addEventListener("mouseover", function () {
    /*achievementUl[i].style.visibility = "visible";*/
    achievementUl[i].style.border = "1px solid white";
    achievementUl[i].style.boxShadow =
      "0 1px 6px rgba(255, 255, 255, 0.3), 0 1px 4px rgba(255, 255, 255, 0.24)";
    achievementUl[i].style.backgroundColor = "rgb(255,255,255,0.1)";
    icons[i].style.transform = "rotate(180deg)";
    icons[i].style.transitionDuration = "0.5s";
  });
  achievementButtons[i].addEventListener("mouseout", function () {
    /* achievementUl[i].style.visibility = "hidden";*/
    achievementUl[i].style.border = "1px solid transparent";
    achievementUl[i].style.boxShadow = "none";
    achievementUl[i].style.backgroundColor = "transparent";
    icons[i].style.transform = "rotate(0deg)";
    icons[i].style.transitionDuration = "0.5s";
  });
  /*achievementButtons[i].addEventListener("click", function(){
     if(achievementUl[i].style.visibility != "visible"){
    achievementUl[i].style.visibility = "visible";
    icons[i].style.transform = "rotate(180deg)";
    icons[i].style.transitionDuration = "0.5s";
  }
     else if(achievementUl[i].style.visibility == "visible"){
    achievementUl[i].style.visibility = "hidden";
    icons[i].style.transform = "rotate(0deg)";
    icons[i].style.transitionDuration = "0.5s";
  }
   
   })*/
}
