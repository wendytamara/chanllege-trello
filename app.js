window.addEventListener("load", function(){

var lista = document.getElementById("lista");
var inputOne = document.getElementById("inputOne");
var container2 = document.getElementById("container2");
var container1 = document.getElementById("container1");

lista.addEventListener("click", insertForm);
      function insertForm(event){

      var boton = document.createElement("input");
      boton.setAttribute("type", "submit");
      boton.setAttribute("value", "Guardar");
      boton.classList.add("campText")
      lista.setAttribute("placeholder", "Nombre de lista");
      container1.appendChild(boton);

       lista.removeEventListener("click",insertForm);

      boton.addEventListener("click", writingNotas);
      function writingNotas(event){

          if (lista.value) {
            var parrafo = document.createElement("p");
            var div = document.createElement("div");
            div.classList.add("containerParragraph");

            div.appendChild(parrafo);
            container1.insertBefore(div,lista);
            parrafo.textContent = lista.value;
            lista.value = "";

            lista.setAttribute("placeholder", "Añadir una tarea");
            boton.setAttribute("value", "Añadir");


          }

      }

//funcion para insertar 2do formulario //

boton.addEventListener("click", insertFormFilaTwo);
    function insertFormFilaTwo(event){

      var textListaFilaTwo = document.createElement("input");
      var botonFilaTwo = document.createElement("input");


      botonFilaTwo.setAttribute("type", "submit");
      botonFilaTwo.setAttribute("value", "Guardar");
      textListaFilaTwo.setAttribute("placeholder", "Nombre de lista");


      container2.appendChild(textListaFilaTwo);
      container2.appendChild(botonFilaTwo);



boton.removeEventListener("click",insertFormFilaTwo);


}

}

})
