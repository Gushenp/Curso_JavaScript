function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    

    if(vel >= 60){
        res.innerHTML = `Voce passou de velocidade! Está multado!`    
    }else{
        res.innerHTML = `Sua velocidade é de ${vel}`
    }
}