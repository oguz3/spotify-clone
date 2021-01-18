//Navbar toggle button
function toggler(x) {
    x.classList.toggle("change");
    var sidenav = document.getElementById("mySidenav");
    var opacity = document.getElementById("opacity");
    sidenav.classList.toggle("open");
    opacity.classList.toggle("opa");
    document.body.classList.toggle("opa");
}