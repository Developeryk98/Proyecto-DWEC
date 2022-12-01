function fcm(){
   let edad;
   let sexo;
   let fcmh;
   let fcmm;
   let resultadoh;
   let resultadom;

  

   do{


    sexo=prompt("Introduce tu sexo, h si eres hombre o m si eres mujer");
    edad=prompt("Introduce tu edad");
   
    fcmh= 220;
    fcmm=226
    resultadoh= fcmh-edad;

    resultadom= fcmm-edad;
 

}while((!isFinite(edad) && edad!="" && edad!=null) && (sexo!="" && sexo!=null));




if(sexo=="h"){
document.write("Tu frecuencia cardiaca es: "+resultadoh+"<br>");
document.write("Zona de recuperación: "+(resultadom*0.70)+"<br>");
document.write("Zona de aeróbica: "+(resultadom*0.80)+"<br>");
document.write("Zona de anaeróbica: "+(resultadom*0.90)+"<br>");
document.write("Línea roja: "+(resultadom*0.99)+"<br>");



}else if(sexo=="m"){
document.write("Tu frecuencia cardiaca es: "+resultadom+"<br>");
document.write("Zona de recuperación: "+(resultadom*0.70)+"<br>");
document.write("Zona de aeróbica: "+(resultadom*0.80)+"<br>");
document.write("Zona de anaeróbica: "+(resultadom*0.90)+"<br>");
document.write("Línea roja: "+(resultadom*0.99)+"<br>");


}else{
document.write("<strong><u><i>Introduce un valor correcto");

}
}