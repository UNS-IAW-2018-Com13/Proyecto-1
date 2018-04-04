function crearTabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("tabla-jugadores")[0];
 
  
  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las filas de la tabla
    var fila = document.createElement("tr");
 
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    body.appendChild(fila);
  }
}