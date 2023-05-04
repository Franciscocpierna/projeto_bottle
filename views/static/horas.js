function carregar() {
    var horas = document.getElementById('horas')
    var data = new Date()
    var hora = data.getHours()
    var minuto =  data.getMinutes()
    horas.innerHTML = `<h1>Agora são <strong> ${hora} horas e ${minuto} </strong>minutos</h1>`
    if (hora >= 0 && hora < 12) {
         horas.innerHTML +=`<h2>  Bom dia<h2>`
         document.body.style.background="#e2cd9f"
    }else if (hora >=12 && hora < 18){
         horas.innerHTML +=`<h2>  Boa Tarde </h2>`
         document.body.style.background="rgb(203, 211, 218)"
    } else {
         horas.innerHTML +=`<h2>  Boa Noite</h2>`
         document.body.style.background="rgb(243, 236, 236)"
    }
}