"use strict";

var anchors = document.getElementsByTagName("a");
var burger = document.getElementById("burger");
var links = document.getElementsByClassName("anime");

burger.addEventListener("click", function () {
  for (var x of anchors) {
    x.classList.toggle("block");
  }

  this.classList.toggle("rotateZ");
});

for (var x of links) {
  x.addEventListener("click", function () {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("selected");
    }
    this.classList.add("selected");
  });
}
