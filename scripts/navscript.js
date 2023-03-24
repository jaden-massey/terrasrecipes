function navFunc() {
    var x = document.getElementById("navi");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }