var i=0;
var images=["mother.png","kid.jfif","father.jfif"];
var names=["Dr.Keerthi","Kushaan.M.Maskal","Dr.Manjunath.MK"];

function next(){
document.getElementById("img1").src=images[i];
document.getElementById("labelname").innerHTML=names[i];
i++;

if(i==3){
    i=0;
}
}