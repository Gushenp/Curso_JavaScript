/* horas atuais */

var horasatuais = document.getElementById("horaatual");
var data = new Date();
var horas = data.getHours();
horasatuais.textContent = `Agora são ${horas} horas`

/* alterar imagem */

var imagem = document.getElementById('imagem')
var fundo = document.getElementById('fundo')

if ((horas >= 18 && horas <= 23) || (horas >= 0 && horas < 6)) {
    imagem.src = "Imagens/icon-noite.png";
    fundo.style.backgroundImage = "url('Imagens/noite.jpg')";
} else if (horas >= 6 && horas < 12) {
    imagem.src = "Imagens/icon-manha.png";
    fundo.style.backgroundImage = "url('Imagens/manha.jpg')";
} else if (horas >= 12 && horas < 18) {
    imagem.src = "Imagens/icon-tarde.png";
    fundo.style.backgroundImage = "url('Imagens/tarde.jpg')";
}


/* botão */

function man() {
    imagem.src = "Imagens/icon-manha.png";
    fundo.style.backgroundImage = "url('Imagens/manhã.jpg')";
    horasatuais.textContent = "Agora está de manha";

    fundo.classList.add("transicao-fundo");
    setTimeout(function(){
        fundo.classList.remove("transicao-fundo");
    }, 1000);
}

document.getElementById("man").onclick = man;

function tar() {
    imagem.src = "Imagens/icon-tarde.png";
    fundo.style.backgroundImage = "url('Imagens/tarde.jpg')";
    horasatuais.textContent = "Agora está de tarde";

    fundo.classList.add("transicao-fundo");
    setTimeout(function(){
        fundo.classList.remove("transicao-fundo");
    }, 1000);
}

document.getElementById("tar").onclick = tar;

function noi () {
    imagem.src = "Imagens/icon-noite.png";
    fundo.style.backgroundImage = "url('Imagens/noite.jpg')";
    horasatuais.textContent = "Agora está de noite";

    fundo.classList.add("transicao-fundo");
    setTimeout(function(){
        fundo.classList.remove("transicao-fundo");
    }, 1000);
}

document.getElementById("noi").onclick = noi;

/* horas atuais */

var horasatuais = document.getElementById("horaatual");
var data = new Date();
var horas = data.getHours();
horasatuais.textContent = `Agora são ${horas} horas`

/* alterar imagem */

var imagem = document.getElementById('imagem')
var fundo = document.getElementById('fundo')

if ((horas >= 18 && horas <= 23) || (horas >= 0 && horas < 6)) {
    imagem.src = "Imagens/icon-noite.png";
    fundo.style.backgroundImage = "url('Imagens/noite.jpg')";
} else if (horas >= 6 && horas < 12) {
    imagem.src = "Imagens/icon-manha.png";
    fundo.style.backgroundImage = "url('Imagens/manha.jpg')";
} else if (horas >= 12 && horas < 18) {
    imagem.src = "Imagens/icon-tarde.png";
    fundo.style.backgroundImage = "url('Imagens/tarde.jpg')";
}


/* botão */

function man() {
    imagem.src = "Imagens/icon-manha.png";
    fundo.style.backgroundImage = "url('Imagens/manhã.jpg')";
    horasatuais.textContent = "Agora está de manha";

    fundo.classList.add("transicao-fundo");
    setTimeout(function(){
        fundo.classList.remove("transicao-fundo");
    }, 1000);
}

document.getElementById("man").onclick = man;

function tar() {
    imagem.src = "Imagens/icon-tarde.png";
    fundo.style.backgroundImage = "url('Imagens/tarde.jpg')";
    horasatuais.textContent = "Agora está de tarde";

    fundo.classList.add("transicao-fundo");
    setTimeout(function(){
        fundo.classList.remove("transicao-fundo");
    }, 1000);
}

document.getElementById("tar").onclick = tar;

function noi () {
    imagem.src = "Imagens/icon-noite.png";
    fundo.style.backgroundImage = "url('Imagens/noite.jpg')";
    horasatuais.textContent = "Agora está de noite";

    fundo.classList.add("transicao-fundo");
    setTimeout(function(){
        fundo.classList.remove("transicao-fundo");
    }, 1000);
}

document.getElementById("noi").onclick = noi;