function changeColor(){
    var arrhex=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    
 var clrda="#"
        for(var i=0;i<6;i++){
            clrda+=arrhex[rand()];
          }
          function rand(){
            return Math.floor(Math.random()*arrhex.length);
          }
var doc=document.getElementById("colorOutput");
var text=document.getElementById("colortext");
text.value=clrda 
doc.style.backgroundColor=clrda;
}
