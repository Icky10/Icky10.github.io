hambutton.addEventListener("click", () => {
    var x = document.getElementById("myHeader");
    if (x.className === "Header") {
        x.className += " responsive";
    } else {
        x.className = "Header";
    }
});

const cross = document.querySelectorAll("#cross")
for (let i = 0; i < cross.length; ++i) {
    cross[i].addEventListener("click", CloseInfo)
}
function CloseInfo() {
    for (let i = 0; i < Info.length; ++i) {
        Info[i].classList.remove("InfoActive");
    }
}

const Img = document.querySelectorAll("a.Equipment");
const Info = document.querySelectorAll("div.Info");
for (let i = 0; i < Img.length; ++i) {
    Img[i].addEventListener("click", Activate)
    function Activate() {
        for (let i = 0; i < Info.length; ++i) {
            Info[i].classList.remove("InfoActive");
        }
        Info[i].classList.add("InfoActive");
    }
}

