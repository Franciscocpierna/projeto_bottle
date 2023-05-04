function carregar() {
    var horas = document.getElementById('horas')
    var data = new Date()
    var hora = data.getHours()
    horas.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
         // bom dia
    }else if (hora >=12 && hora < 18){
          // boa tarde 
    } else {
          // boa noite  
    }