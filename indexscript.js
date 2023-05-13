let img = 0;
function Change(){
    if (img ==0){
      document.getElementById("img").setAttribute("src", "/mainimagecasal.png");
    }
    else if (img ==1){
      document.getElementById("img").setAttribute("src", "/microcredito.png");
    }
    else if (img ==2){
      document.getElementById("img").setAttribute("src", "/credito-pessoal.png");
    }
    else if(img ==3){
      document.getElementById("img").setAttribute("src", "/credito-informatica.png");
    }
    else if(img ==4){
      document.getElementById("img").setAttribute("src", "/credito-saude.png");
      img=-1;
    }
    img++;
}
setInterval(Change, 2000);
