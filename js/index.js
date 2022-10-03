 const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
 if(edadDelUsuario >= 18){
}else{
     alert("Eres menor de edad, no puedes ingresar a la página");
     var pagina="script.html"
     function redireccionar(){
         location.href=pagina
     }
         setTimeout("redireccionar()", 1);
 }