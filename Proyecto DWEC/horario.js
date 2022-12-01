function horario(){

  document.write("Horario de la mañana: Lunes-Viernes "+"<br>");

  for (let i=9; i<16; i+=2){

    document.write(i + ":00 " + i + "" + ":00" + " "+"<br>");          
}
document.write("Horario de la tarde: Lunes-Viernes "+"<br>");

for (let i=16; i<22; i++){

  document.write(i + ":00 " + i + "" + ":00" + " "+"<br>");          
}



}