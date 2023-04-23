let img = 0;
function Change(){
    if (img ==0){
      document.getElementById("img").setAttribute("src", "/mainimagecasal.png");
    }
    else if (img ==1){
      document.getElementById("img").setAttribute("src", "/microcredito.png");
    }
    else if (img ==2){
      document.getElementById("img").setAttribute("src", "/creditopessoal.png");
    }
    else if(img ==3){
      document.getElementById("img").setAttribute("src", "/creditoinformatica.png");
    }
    else if(img ==4){
      document.getElementById("img").setAttribute("src", "/creditosaude.png");
      img=0;
      return;
    }
    img++;
}
setInterval(Change, 2000);
