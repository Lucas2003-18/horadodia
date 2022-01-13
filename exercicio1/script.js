function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    /*var hora = 13; --aqui vc pode tirar o comentário p/ poder mudar as fotos */
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'manha.jpg';
        document.body.style.background = '#FCDCB5';
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpg';
        document.body.style.background = '#A5C8DA';
    }else{
        img.src =  'noite.jpg';
        document.body.style.background = '#024B66';
    }
}