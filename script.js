var boje, smer;
smer="to bottom";
function promeni() {
var checkBox = document.getElementById("nasumican-smer");
  if (checkBox.checked){
    stepen=Math.floor(Math.random()*360);
    smer=stepen+"deg";
  }
broj_boja=parseInt(document.getElementById("broj-boja").value);
r=[];
g=[];
b=[];
var boje;
for(i=0; i<=broj_boja; i++){
  r[i]=Math.floor(Math.random()*256);
  g[i]=Math.floor(Math.random()*256);
  b[i]=Math.floor(Math.random()*256);
}
if(broj_boja<1){
  window.alert("broj boja mora biti najmanje 1");
}
else{
  if(broj_boja==1){
    document.body.style.backgroundImage="none";
    document.body.style.backgroundColor="rgb("+r[0]+","+g[0]+","+b[0]+")";
    document.getElementById("kod").innerHTML="rgb("+r[0]+","+g[0]+","+b[0]+")";
  }
  else{
    boje="rgb("+r[0]+","+g[0]+","+b[0]+")";
    for(i=1; i<broj_boja;i++){
      boje=boje+","+ " rgb("+r[i]+","+g[i]+","+b[i]+")";
    }
    document.body.style.backgroundImage="linear-Gradient("+smer+","+boje;
    document.getElementById("kod").innerHTML="linear-Gradient( "+smer+", "+boje;
}
}
}
function odaberismer(){
document.getElementById("kontejner").style.height="101px";
}
var odabran=1;
function smerodabran(a){
document.getElementById("kontejner").style.height="0px";
if(a!=odabran){
  if(a==1){
    document.getElementById("gd").classList.add("odabran");
    document.getElementById("ld").classList.remove("odabran");
    document.getElementById("k1").classList.remove("odabran");
    document.getElementById("k2").classList.remove("odabran");
    smer="to bottom";
  }
  if(a==2){
    document.getElementById("ld").classList.add("odabran");
    document.getElementById("gd").classList.remove("odabran");
    document.getElementById("k1").classList.remove("odabran");
    document.getElementById("k2").classList.remove("odabran");
    smer="to right"
  }
  if(a==3){
    document.getElementById("k1").classList.add("odabran");
    document.getElementById("gd").classList.remove("odabran");
    document.getElementById("ld").classList.remove("odabran");
    document.getElementById("k2").classList.remove("odabran");
    smer="to bottom right";
  }
  if(a==4){
    document.getElementById("k2").classList.add("odabran");
    document.getElementById("gd").classList.remove("odabran");
    document.getElementById("ld").classList.remove("odabran");
    document.getElementById("k1").classList.remove("odabran");
    smer="to bottom left";
  }
  odabran=a;
}
}