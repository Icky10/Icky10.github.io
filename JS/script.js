hambutton.addEventListener("click", () => {
    var x = document.getElementById("myHeader");
    if (x.className === "Header") {
        x.className += " responsive";
    } else {
        x.className = "Header";
    }
});

//Code for Equipment page
//code for exit button
const cross = document.querySelectorAll("a.Exit")
for (let i = 0; i < cross.length; ++i) {
    cross[i].addEventListener("click", CloseInfo)
}
function CloseInfo() {
    for (let i = 0; i < Info.length; ++i) {
        Info[i].classList.remove("InfoActive");
    }
}

//Code to show equipment info
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

//Code for Minigame
const clubs = document.querySelectorAll("a.Clubs")
const course = document.querySelectorAll("img.MinigameImg")
for (let i = 0; i < course.length; ++i) {
    clubs[i].addEventListener("click", Activate)
    function Activate() {
        clubs[i + 1].classList.remove("Deactive");
        clubs[i].classList.add("Deactive");
        course[i + 1].classList.remove("Deactive");
        course[i].classList.add("Deactive");
    }
}

//code to reset minigame
clubs[4].addEventListener("click", Reset)
function Reset() {
    for(let i = 0; i < course.length; ++i) {
        clubs[i].classList.add("Deactive");
        course[i].classList.add("Deactive");
    }
    clubs[0].classList.remove("Deactive");
    course[0].classList.remove("Deactive");
}