
function recolocarTitle() {
    var anchoPantalla = window.innerWidth;
    var foto = document.getElementById("foto");
    var title = document.getElementById("title");

    if (anchoPantalla < 992) {
        foto.classList.add("order-12");
        title.classList.add("order-1");
    }else{
        foto.classList.remove("order-12");
        title.classList.remove("order-1");
    }
}

function collapseOn() {
    var anchoPantalla = window.innerWidth;
    var demo1 = document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");
    var demo3 = document.getElementById("demo3");

    if (anchoPantalla < 768) {
        demo1.classList.add("collapse");
        demo2.classList.add("collapse");
        demo3.classList.add("collapse");
    }else{
        demo1.classList.remove("collapse");
        demo2.classList.remove("collapse");
        demo3.classList.remove("collapse");
    }
}

function changeArrow() {
    var arrow = document.getElementById("arrow");
    if (arrow.classList.contains("bi-caret-down-fill")) {
        arrow.classList.remove("bi-caret-down-fill");
        arrow.classList.add("bi-caret-up-fill");
    } else{
        arrow.classList.remove("bi-caret-up-fill");
        arrow.classList.add("bi-caret-down-fill");
    }
    
}

window.addEventListener("load", recolocarTitle);
window.addEventListener("resize", recolocarTitle);

window.addEventListener("resize", collapseOn);
