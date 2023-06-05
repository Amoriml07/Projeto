calcularIMC = function (){
    var formulario = document.getElementById("formulario");
    
    var peso = +formulario.peso.value;    
    var metros = +formulario.altura.value;  
    
    
    var altura = (metros*100 + centimetros)/100;    
    var imc = pesp / (altura * altura);    
    formulario.imc.value = imc.toFixed(2);
    }