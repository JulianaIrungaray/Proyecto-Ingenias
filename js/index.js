    //  const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
    //  if(edadDelUsuario >= 18){
    // }else{
    //      alert("Eres menor de edad, no puedes ingresar a la página");
    //      var pagina="script.html"
    //      function redireccionar(){
    //          location.href=pagina
    //      }
    //          setTimeout("redireccionar()", 1);
    //  } LO COMENTO PORQUE ES MOLESTO PARA TRABAJAR PORQUE TODO EL TIEMPO TE PIDE LA EDAD

    // recupera el botón
        let miboton = document.getElementById("boton-arriba");

    //cuando se hace scroll hacía abajo 20px muestrael botón
        window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        miboton.style.display = "block";
    } else {
        miboton.style.display = "none";
        }
    }

    //cuando se hace click al botón se va hacía arriba de la página
    function arribaFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

