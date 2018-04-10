function crearTPartidos() {
    //Crea los elementos <table> y <tbody>
    tableBody = document.getElementById("TPartidos");
    
    var partidos = JSON.parse('{"ID": "Partidos","Partidos": [{"fecha": "01/01/2018","hora":" 00:00","J1": "Trolden","J1P": 0,"J2": "Amaz","J2P": 0},{"fecha": "01/01/2018","hora":" 00:00","J1": "Trolden","J1P": 0,"J2": "Amaz","J2P": 0},{"fecha": "01/01/2018","hora":" 00:00","J1": "Trolden","J1P": 0,"J2": "Amaz","J2P": 0},{"fecha": "01/01/2018","hora":" 00:00","J1": "Trolden","J1P": 0,"J2": "Amaz","J2P": 0}]}');

    //Crea todas las celdas
    for(var j = 0; j < partidos.Partidos.length; j++){
    //for (var j = 0; j < 3; j++) {
        //Crea un elemento <tr>
        fila = document.createElement("tr");
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        celda.setAttribute("id", "cabeceras");
        //Crea el contenido de la celda
        contenido = document.createTextNode(partidos.Partidos[j].fecha);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(partidos.Partidos[j].hora);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(partidos.Partidos[j].J1);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
         //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(partidos.Partidos[j].J1P);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda); 
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(partidos.Partidos[j].J2);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
         //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(partidos.Partidos[j].J1P);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        
        //Agrega la fila al cuerpo de la tabla
        tableBody.appendChild(fila);
    }
}
