function display(id, what) {
  document.getElementById(id).style.display = what;
}

function size(id, what) {
  document.getElementById(id).style.flex = what;
}

function tankdetail(detail) {
  size("pump", "0 0 5em");
  document.getElementById("pump").addEventListener("click", function () {
    display("tankdetail", "none");
    display("pumplist", "block");
    size("pump", "0 0 25em");
  });
  size("tank", "0 0 25em");
  display("pumpdetail", "none");
  display("pumplist", "none");
  display("tankdetail", "block");
  document.getElementById("tankdetail").innerHTML = "<p>"+detail+" details</p>";
  display("tanklist", "block");
}

function pumpdetail(detail) {
  size("tank", "0 0 5em");
  document.getElementById("tank").addEventListener("click", function () {
    display("pumpdetail", "none");
    display("tanklist", "block");
    size("tank", "0 0 25em");
  });
  size("pump", "0 0 25em");
  display("tankdetail", "none");
  display("tanklist", "none");
  display("pumpdetail", "block");
  document.getElementById("pumpdetail").innerHTML = "<p>" + detail + " details</p>";
  display("pumplist", "block");
}