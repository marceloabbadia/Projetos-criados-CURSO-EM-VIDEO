function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");

  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;

  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "dia.jpg";
    document.body.style.background = "#E0FFFF";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "tarde.jpg";
    document.body.style.background = "#FFD700";
  } else {
    //boa noite
    img.src = "noite.jpg";
    document.body.style.background = "#1C1C1C";
    document.getElementById("titular").style.color = "rgba(255, 255, 255)";
    document.getElementById("rodape").style.color = "rgba(255, 255, 255)";
  }
}
