function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 10) {
        img.style.width = "30%";
        img.style.height = "30%";
        img.setAttribute("src", "../imagens/bebe-homem.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "../imagens/jovem-homem.jpg");
        img.style.width = "30%";
        img.style.height = "30%";
        img.style.padding = "10%";
      } else if (idade < 50) {
        img.setAttribute("src", "../imagens/adulto-homem.jpg");
        img.style.width = "30%";
        img.style.height = "30%";
        img.style.padding = "10%";
      } else {
        img.setAttribute("src", "../imagens/idoso.jpg");
        img.style.width = "30%";
        img.style.height = "30%";
        img.style.padding = "10%";
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "../imagens/bebe-mulher.jpg");
        img.style.width = "30%";
        img.style.height = "30%";
        img.style.padding = "10%";
      } else if (idade < 21) {
        img.setAttribute("src", "../imagens/jovem-mulher.jpg");
        img.style.width = "30%";
        img.style.height = "30%";
        img.style.padding = "10%";
      } else if (idade < 50) {
        img.setAttribute("src", "../imagens/adulto-mulher.jpg");
        img.style.width = "30%";
        img.style.height = "30%";
        img.style.padding = "10%";
      } else {
        img.setAttribute("src", "../imagens/idosa.jpg");
        img.style.width = "30%";
        img.style.height = "30%";
        img.style.padding = "10%";
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
