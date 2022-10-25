window.onload = init;
    function init(){
        document.querySelector(".emergente .menor").addEventListener("click",adios);
        document.querySelector(".emergente .mayor").addEventListener("click",hola);
    }
        
    function adios(){
        location.href="errorEdad.html";
    }    
    function hola(){
        document.querySelector(".emergente").style.display="none";
        document.querySelector(".containerEdad").style.opacity="1";
    }