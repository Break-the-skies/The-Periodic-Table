const dark_button = document.getElementById("Dark");
const light_button = document.getElementById("Light");
const table_general = document.getElementsByTagName("table");
const alkali = document.getElementsByClassName("Alkali_metal");
const alkali_earth = document.getElementsByClassName("Alkali_earth_metal");
const transition = document.getElementsByClassName("Transition_metal")
const post_transition = document.getElementsByClassName("Post-transition_metal");
const metalloid = document.getElementsByClassName("Metalloid");
const non_metal = document.getElementsByClassName("Non-metal")
const halogen = document.getElementsByClassName("Halogen");
const noble_gas = document.getElementsByClassName("Noble_gas");
const lanth = document.getElementsByClassName("Lanthanides");
const actin = document.getElementsByClassName("Actinides");

dark_button.addEventListener("click",dark_Color);
light_button.addEventListener("click",light_Color);
function dark_Color() {
    table_general.style.border-color == "whitesmoke";
    alkali.style.background-color == "#540505";
    alkali.style.color = "whitesmoke";
    alkali_earth.style.background-color == "#716000";
    alkali_earth.style.color = "whitesmoke";
    transition.style.background-color == "#05053d";
    transition.style.color == "whitesmoke";
    post_transition.style.background-color == "#004242";
    post_transition.style.color = "whitesmoke";
    metalloid.style.background-color == "#123524";
    metalloid.style.color = "whitesmoke";
    non_metal.style.background-color == "#32174d";
    non_metal.style.color = "whitesmoke";
    halogen.style.background-color == "#782600";
    halogen.style.color = "whitesmoke";
    noble_gas.style.background-color == "#202020";
    noble_gas.style.color = "whitesmoke";
    lanth.style.background-color == "#4e1e2f";
    lanth.style.color = "whitesmoke";
    actin.style.background-color == "#2b0218";
    actin.style.color = "whitesmo ke";}
function light_Color() {
    table_general.style.border-color == "black";
    alkali.style.background-color == "#ff4929";
    alkali.style.color = "black";
    alkali_earth.style.background-color == "#f0e68c";
    alkali_earth.style.color = "black";
    transition.style.background-color == "#b0c4de";
    transition.style.color = "black";
    post_transition.style.background-color == "#aaf0d1";
    post_transition.style.color = "black";
    metalloid.style.background-color == "#98fb98";
    metalloid.style.color = "black";
    non_metal.style.background-color == "#d8bfd8";
    non_metal.style.color = "black";
    halogen.style.background-color == "#fec067";
    halogen.style.color = "black";
    noble_gas.style.background-color == "#d3d3d3";
    nobele_gas.style.color = "black";
    lanth.style.background-color == "#ffb6c1";
    lanth.style.color = "black";
    actin.style.background-color == "#fe89c4";
    actin.style.color = "black";}