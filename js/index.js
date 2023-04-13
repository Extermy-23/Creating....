let quest = confirm("Desea ser redirecionado a otra pagina?")

switch (quest) {
    case (true):
            
        window.location.href = "paginas/practicasjs.html"

        break;

    default:   

        break;
}

(function(){ 


    let pasword = "andy230520"


    let comprobar = function (){

      /*    switch (document.formulario.password.value) {
            case ('andy230520'):
             
                   window.location.href = "https://professor-falken.com";

                break;
          
            default:
                alert("no es correcta")
                break;
          } */


          if (document.formulario.password.value = "andy230520") {

               alert("la contrasena es correcta")
            
          } else {
             
                

          }
           

    }

    let btn = document.getElementById('btn');
    btn.addEventListener("click", comprobar);

}())



