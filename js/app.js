const cambiarTitulo = () => {
  console.log("dentro de la funcion cambiar titulo");
  //Buscar un elemento del html
  // let tituloH1 = document.getElementById('titulo');
  let tituloH1 = document.querySelector("#titulo");
  console.log(tituloH1.innerHTML);

  tituloH1.innerHTML = "Título modificado";
  tituloH1.className = "text-warning";
};

const verMas = () => {
  console.log("Dentro de ver más");
  //obtener el elemento padre
  let contenedorPadre = document.querySelector("#contenedorPadre");
  let btnVerMas = document.getElementById("btnVerMas");

  if (btnVerMas.innerHTML === "Ver más") {
    //opción 1- camino largo
    //1- crear el elemento del html
    // let parrafo = document.createElement("p"); //crea la etiqueta <p></p>
    //2- agregar contenido al elemento html creado
    /*  parrafo.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        deleniti id officiis reiciendis amet officia fugiat asperiores! Soluta
        quia exercitationem eveniet ratione consectetur. Illum et vero
        corporis alias velit impedit at, dolor consequuntur. Fugit voluptas
        temporibus reiciendis illum, obcaecati tempora optio nobis voluptatum
        itaque magni distinctio laboriosam magnam, minus harum.`;
    parrafo.className = 'lead'; */
    //3- insertar el nuevo elemento html en el DOM
    // contenedorPadre.appendChild(parrafo);

    //opción 2- camino corto

    contenedorPadre.innerHTML += `<p class="lead">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
    deleniti id officiis reiciendis amet officia fugiat asperiores! Soluta
    quia exercitationem eveniet ratione consectetur. Illum et vero
    corporis alias velit impedit at, dolor consequuntur. Fugit voluptas
    temporibus reiciendis illum, obcaecati tempora optio nobis voluptatum
    itaque magni distinctio laboriosam magnam, minus harum.
  </p>`;

    //modicar el texto del botón
    btnVerMas.innerHTML = "Ocultar";
    btnVerMas.className = "btn btn-danger";
  } else {
    console.log("aqui vamos a borrar el elemento");
    console.log(contenedorPadre.hasChildNodes()); //devuelve true or false
    console.log(contenedorPadre.children.length); //retorna un array de nodos hijos

    if (
      contenedorPadre.hasChildNodes() &&
      contenedorPadre.children.length >= 2
    ) {
      //borrar el parrafo
      contenedorPadre.removeChild(contenedorPadre.children[1]);
      //modificar el texto y la estetica del botón

      btnVerMas.innerHTML = "Ver más";
      btnVerMas.className = "btn btn-primary"
    }
  }
};
