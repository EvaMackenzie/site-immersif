var log = function log(d) {
  "use strict";
  window.console.log(d);
};

var app = (function app() {
  "use strict";
  var watchEvents, dom, handleTheme, handleScrollTop, doFullpage, scrollLove, navItems, scrollPage;
  dom = {};

  window.onload = function start() {
    dom.toggle = document.getElementById("toggle_theme");
    dom.html = document.querySelector("html");
    dom.scrollLove = document.getElementById("start_course");
    dom.navItems = document.querySelectorAll(".nav.main .link");
    dom.heart = document.querySelector(".anim .heart");
    dom.scrollTop = document.getElementById("scroll_top");

    watchEvents();
  };

  scrollPage = function scrollPage(e) {
    var target = document.getElementById(this.getAttribute("data-target-id"));
    window.smoothScroll(target, 2000, 50);
    e.preventDefault();
  };

  scrollLove = function scrollLove() {
    window.smoothScroll(document.getElementById("pane_anim"), 2000, 50);
    dom.heart.classList.add("active");
  };

  handleTheme = function handleTheme() {
    dom.toggle.classList.toggle("fa-toggle-on");
    dom.toggle.classList.toggle("fa-toggle-off");
    dom.html.classList.toggle("dark");
    dom.html.classList.toggle("light");
  };

  handleScrollTop = function handleScrollTop() {
    window.smoothScroll(document.querySelector("html"), 2000, 50);
  };

  watchEvents = function() {
    var i;
    dom.toggle.onclick = handleTheme;
    dom.scrollTop.onclick = handleScrollTop;
    dom.scrollLove.onclick = scrollLove;

    for (i = 0; i < dom.navItems.length; i += 1) {
      dom.navItems[i].onclick = scrollPage;
    }
  };

}());
