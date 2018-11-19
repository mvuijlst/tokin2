function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function big(id) {
  document.getElementById(id).style.flex = "0 0 25em";
}
function small(id) {
  document.getElementById(id).style.flex = "0 0 5em";
}

function tankdetail(detail) {
  small("pump");
  document.getElementById("pump").addEventListener("click", function () {
    big("pump");
    show("pumplist");
    small("tank");
    hide("tanklist");
  });
  big("tank");
  hide("pumpdetail");
  hide("pumplist");
  show("tankdetail");
  document.getElementById("tankdetail").innerHTML = "<p>" + detail + " details</p>";
  show("tanklist");
}

function pumpdetail(detail) {
  small("tank");
  document.getElementById("tank").addEventListener("click", function () {
    hide("pumpdetail");
    show("tanklist");
    big("tank");
  });
  big("pump");
  hide("tankdetail");
  hide("tanklist");
  show("pumpdetail");
  document.getElementById("pumpdetail").innerHTML = "<p>" + detail + " details</p>";
  show("pumplist");
}