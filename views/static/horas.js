    
    let horas = document.getElementById('horas');
    let data = new Date();
    let hora = data.getHours();
    let minuto =  data.getMinutes();
    let listar = document.querySelector('select#flista');
    let vetores = [
     'SE EU ERREI','DINHEIRO NÃO HÁ', 'GIGANTE', 'ILUMINADO',
     'GOSTO DO SAMBA','ALDINHA','AMAR TODA HORA','LESSE','OCEANO','VENTOS', 'BRILHO DO SOL', 'ALMA PENADA', 'SAMBA DA PAZ', 'LAURINHA','VIVER VIVER','BRASIL', 'SILÊNCIO','FAKE NEWS', 'ESPERANÇA', 'MARCEL',  
     ];
    let url='';       
    let atual= "";
    
    let botao =document.getElementById('botao');
    
  
    function carregar() {
    
    horas.innerHTML = `<h3>Agora são <strong> ${hora} horas e ${minuto} </strong>minutos</h3>`
    if (hora >= 0 && hora < 12) {
         horas.innerHTML +=`<h3>  Bom dia<h3>`
         document.body.style.background="#e2cd9f"
    }else if (hora >=12 && hora < 18){
         horas.innerHTML +=`<h3>  Boa Tarde </h3>`
         document.body.style.background="rgb(203, 211, 218)"
    } else {
         horas.innerHTML +=`<h3>  Boa Noite</h3>`
         document.body.style.background="rgb(243, 236, 236)"
    }
     for (x in vetores) {
         let item = document.createElement('option')
         item.text = vetores[x]
         listar.appendChild(item)
     }
     
     document.getElementById("flista").value='SE EU ERREI';
     atual = document.getElementById("flista").value;
     botao.addEventListener('click', () => {
          executar(url)
     })
     
     
   
}

function executar(url) {
     atual = document.getElementById("flista").value;
     if (atual == 'SE EU ERREI') {
        url = "https://www.youtube.com/watch?v=HleV6DqQbx4" 
     }else if(atual == 'DINHEIRO NÃO HÁ') {
        url = "https://www.youtube.com/watch?v=7pgWexAEqo0"
     }else if(atual == 'GIGANTE'){ 
        url = "https://www.youtube.com/watch?v=q4Hk1PLarrY"
     }else if(atual == 'ILUMINADO') {
        url = "https://www.youtube.com/watch?v=q4Hk1PLarrY"
     }else if(atual == 'GOSTO DO SAMBA' ){ 
        url = "https://www.youtube.com/watch?v=KIY8s1CKGzg"
     }else if(atual == 'ALDINHA'){ 
        url = "https://www.youtube.com/watch?v=z-hIDOlS2Aw"
      }else if(atual == 'AMAR TODA HORA') {
        url =  "https://www.youtube.com/watch?v=-sdR-_lzvsY"
      }else if(atual == 'LESSE') {
        url =  "https://www.youtube.com/watch?v=PQiaSBR5yqM"
     }else if(atual == 'OCEANO'){ 
        url =  "https://www.youtube.com/watch?v=iXRSXd-E7cg"
     }else if(atual == 'VENTOS') {
        url =  "https://www.youtube.com/watch?v=LE0bOeuJEwk"
     }else if(atual == 'BRILHO DO SOL'){ 
        url = "https://www.youtube.com/watch?v=5gIMp8LJ_8I"
     }else if(atual == 'ALMA PENADA') {
        url = "https://www.youtube.com/watch?v=lChn6ax5P_I"
     }else if(atual == 'SAMBA DA PAZ'){ 
        url =  "https://www.youtube.com/watch?v=w6H40Y_EJ-Q" 
     }else if(atual == 'LAURINHA') {
        url =  "https://www.youtube.com/watch?v=-InbFYtCNvY"
     }else if(atual == 'VIVER VIVER'){ 
        url =  "https://www.youtube.com/watch?v=e8Wq9GjoAtc"         
     }else if(atual == 'BRASIL') {
        url =  "https://www.youtube.com/watch?v=zeUKrz58rmw" 
     }else if(atual == 'SILÊNCIO'){ 
        url =  "https://www.youtube.com/watch?v=lHWHn9mCZoM"
     }else if(atual == 'FAKE NEWS') {
        url =  "https://www.youtube.com/watch?v=jUPExxkc1po"
     }else if(atual == 'ESPERANÇA') {
          url =  "https://www.youtube.com/watch?v=a0sJA8bsaLI" 
     }else { 
        url =  "https://www.youtube.com/watch?v=I2vF7i0ATOk"
     }             
    const youtube = window.open(url,'_blank' )
    youtube.focus()
 

}
