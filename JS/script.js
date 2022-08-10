hambutton.addEventListener("click", () => {
    var x = document.getElementById("myHeader");
    if (x.className === "Header") {
        x.className += " responsive";
    } else {
        x.className = "Header";
    }
}
);