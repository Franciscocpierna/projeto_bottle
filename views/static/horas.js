function carregar() {
    var horas = document.getElementById('horas')
    var data = new Date()
    var hora = data.getHours() 
    var minuto =  data.getMinutes()  
    horas.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    if (hora >= 0 && hora < 12) {
         horas.innerHTML +=`  Bom dia`
    }else if (hora >=12 && hora < 18){
          horas.innerHTML +=`  Boa Tarde`
    } else {
          horas.innerHTML +=`  Boa Noite`
    }
}