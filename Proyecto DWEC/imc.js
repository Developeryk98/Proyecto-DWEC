
 function imc(){


    let altura;
        let peso;
        let alturaX2;
        let imc;
    
       
        do{
    
    
    
        altura = prompt("Introduce tu altura");
        peso = prompt("Introduce tu peso");
        alturaX2=altura*altura;
        imc = peso/alturaX2;
    
    
    
        
    }while((!isFinite(altura) && altura!="" && altura!=null) && (!isFinite(peso) && peso!="" && peso!=null));
        
    
    if(imc<16.00){
            document.write("<p style='color:red'><strong><u><i>Infrapeso (Delgadez severa)</i></u></strong></p>");
        
    
        }else if(imc>16.00 && imc<16.99){
            document.write("<p style='color:red'><strong><u><i>Infrapeso (Delgadez moderada)</i></u></strong></p>");
        
    
        }else if(imc>17.00 && imc<18.49){
            document.write("<p style='color:red'><strong><u><i>Infrapeso (Delgadez aceptable)</i></u></strong></p>");
         
    
        }else if(imc>18.50 && imc<24.99){
            document.write("<p style='color:green'><strong><u><i>Peso normal</i></u></strong></p>");
         
    
        }else if(imc>25.00 && imc<29.99){
            document.write("<p style='color:red'><strong><u><i>Sobrepeso</i></u></strong></p>");
        
    
        }else if(imc>30.00 && imc<34.99){
            document.write("<p style='color:red'><strong><u><i>Obeso tipo I</i></u></strong></p>");
         
    
        }else if(imc>35.00 && imc<40.00){
            document.write("<p style='color:red'><strong><u><i>Obeso tipo II</i></u></strong></p>");
         
    
        }else if(imc>40.00){
            document.write("<p style='color:red'><strong><u><i>ObesoTipo III</i></u></strong></p>");
       
            
        }else{
            document.write("<strong><u><i>Introduce un valor correcto");
          
        }
    
    }