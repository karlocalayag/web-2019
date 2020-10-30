//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-7"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-6"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-5"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-4"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv-2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


  
// var a = document.getElementById("project1");
// var b = document.getElementById("project2");
// var c = document.getElementById("project3");
// var d = document.getElementById("project4");
// var e = document.getElementById("project5");
// var f = document.getElementById("project6");
// var g = document.getElementById("project7");
// var h = document.getElementById("project8");
// var i = document.getElementById("project0");

// function display1() {
//   if (a.style.display === "block") {
//     a.style.display = "none"; 
//   } else {
//     a.style.display = "block";
//     b.style.display = "none";
//     c.style.display = "none";
//     d.style.display = "none";
//     e.style.display = "none";
//     f.style.display = "none";
//     g.style.display = "none";
//     h.style.display = "none";
//     i.style.display = "none";
//     window.scrollTo(0,390);

//   }

// }

// function display2() {
//   if (b.style.display === "block") {
//     b.style.display = "none";
//   } else {
//     b.style.display = "block";
//     a.style.display = "none";
//     c.style.display = "none";
//     d.style.display = "none";
//     e.style.display = "none";
//     f.style.display = "none";
//     g.style.display = "none";
//     h.style.display = "none";
//     i.style.display = "none";
//     window.scrollTo(0,340);

//   }

// }









// function display3() {
//   if (c.style.display === "block") {
//     c.style.display = "none";
//   } else {
//     c.style.display = "block";
//     a.style.display = "none";
//     b.style.display = "none";
//     d.style.display = "none";
//     e.style.display = "none";
//     f.style.display = "none";
//     g.style.display = "none";
//     h.style.display = "none";
//     i.style.display = "none";
//     window.scrollTo(0,240);

//   }
// }

// function display4() {
//   if (d.style.display === "block") {
//     d.style.display = "none";
//   } else {
//     d.style.display = "block";
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";
//     e.style.display = "none";
//     f.style.display = "none";
//     g.style.display = "none";
//     h.style.display = "none";
//     i.style.display = "none";
//     window.scrollTo(0,190);

//   }
// }

// function display5() {
//   if (e.style.display === "block") {
//     e.style.display = "none";
//   } else {
//     e.style.display = "block";
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";
//     d.style.display = "none";
//     f.style.display = "none";
//     g.style.display = "none";
//     h.style.display = "none";
//     i.style.display = "none";
//     window.scrollTo(0,140);
//   }
// }

// function display6() {
//   if (f.style.display === "block") {
//     f.style.display = "none";
//   } else {
//     f.style.display = "block";
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";
//     d.style.display = "none";
//     e.style.display = "none";
//     g.style.display = "none";
//     h.style.display = "none";
//     i.style.display = "none";
//     window.scrollTo(0,90);
//   }
// }
// function display7() {
//   if (g.style.display === "block") {
//     g.style.display = "none";
//   } else {
//     g.style.display = "block";
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";
//     d.style.display = "none";
//     e.style.display = "none";
//     f.style.display = "none";
//     h.style.display = "none";
//     i.style.display = "none";
//     window.scrollTo(0,40);
//   }
// }
// function display8() {
//   if (h.style.display === "block") {
//     h.style.display = "none";
//   } else {
//     h.style.display = "block";
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";
//     d.style.display = "none";
//     e.style.display = "none";
//     f.style.display = "none";
//     g.style.display = "none";
//     i.style.display = "none";
//     window.scrollTo(0,290);
//   }
// }

// function display0() {
//   if (i.style.display === "block") {
//     i.style.display = "none";
//   } else {
//     i.style.display = "block";
//     a.style.display = "none";
//     b.style.display = "none";
//     c.style.display = "none";
//     d.style.display = "none";
//     e.style.display = "none";
//     f.style.display = "none";
//     g.style.display = "none";
//     h.style.display = "none";
//     window.scrollTo(0,0);
//   }
// }



// function overAbout() {
//   document.getElementById("about").style.display = "block";
// }

// function outAbout() {
//   document.getElementById("about").style.display = "none";
// }

// function overName() {
//   document.getElementById("card").style.display = "block";
// }

// function outName() {
//   document.getElementById("card").style.display = "none";
// }



