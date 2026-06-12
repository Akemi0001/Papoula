const blurElement = document.getElementById("blurid");
const menuElement = document.getElementById("divhamburguer");
const fecharElement = document.getElementById("botaofechar");

function chamarbotao() {
    menuElement.style.display = "block"; 
    blurElement.style.display = "block";
    fecharElement.style.display = "block";

    setTimeout(() => {
        document.body.style.overflow = "hidden";
        menuElement.classList.add("active");
        blurElement.classList.add("active");
        fecharElement.classList.add("active");
    }, 10);
}

function fecharMenu() {
    menuElement.classList.remove("active");
    blurElement.classList.remove("active");
    fecharElement.classList.remove("active");

    setTimeout(() => {
        if (!menuElement.classList.contains("active")) {
            document.body.style.overflow = "auto";
            menuElement.style.display = "none";
            blurElement.style.display = "none";
            fecharElement.style.display = "none";
        }
    }, 300); 
}

blurElement.onclick = fecharMenu;