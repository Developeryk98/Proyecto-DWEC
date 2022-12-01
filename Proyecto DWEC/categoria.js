function categoria(){
    let anyo;
    let anyoHoy;
    let categoria;
    
    
    do{



anyo=prompt("Introduce tu año de nacimiento");

anyoHoy=2022;
categoria= 2022-anyo;

if(categoria<=8 && categoria>=5){
   document.write("<p style='color:blue'><strong><u><i>Prebenajamin</i></u></strong></p>");
       

}else if(categoria<=10 && categoria>=9){
   document.write("<p style='color:yellow'><strong><u><i>Benjamin</i></u></strong></p>");


}else if(categoria<=12 && categoria>=11){
   document.write("<p style='color:green'><strong><u><i>Alevín</i></u></strong></p>");


}else if(categoria<=14 && categoria>=13){
   document.write("<p style='color:pink'><strong><u><i>Infantil</i></u></strong></p>");


}else if(categoria<=16 && categoria>=15){
   document.write("<p style='color:gray'><strong><u><i>Cadete</i></u></strong></p>");


}else if(categoria<=19 && categoria>=17){
   document.write("<p style='color:orange'><strong><u><i>Juvenil</i></u></strong></p>");


}else if(categoria>19 && categoria<70){
   document.write("<p style='color:purple'><strong><u><i>Adulto</i></u></strong></p>");


} else{
  alert("Introduce un valor correcto");
 
}


}while((!isFinite(anyo) && anyo>2022 && anyo>2017 && anyo<1950));



  
}