function tablaJugadores() {
    //Crea los elementos <table> y <tbody>
    tableBody = document.getElementsByTagName("tbody")[0];
    
    data = '{"ID": "Jugadores","Jugadores": {"Trolden": [0,["2018Trolden1","2018Trolden2","2018Trolden3"]],"Amaz": [0, ["2018Amaz1","2018Amaz2","2018Amaz3"]],"Kripp": [0, ["2018Kripp1","2018Kripp2","2018Kripp3"]],"Savjz": [0,["2018Savjz1","2018Savjz2","2018Savjz3"]],"DayNine": [0,0],"Kibler": [0,0],"Firebat":[0,0],"Trump":[0,0],"Dog":[0,0],"Frodan":[0,0],"Toast":[0,0],"Noxious":[0,0],"Thijs":[0,0],"Kolento":[0,0],"Brode":[0,0],"Forsen":[0,0]}}';
    
    var jugadores = JSON.parse(data);

    //Crea todas las celdas
    for(var i in jugadores.Jugadores){
        //Crea un elemento <tr>
        fila = document.createElement("tr");
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        celda.setAttribute("id", "cabeceras");
        //Crea el contenido de la celda
        contenido = document.createElement("img");
        contenido.setAttribute("src","../Imagenes/Portraits/portrait"+i+".jpg");
        contenido.setAttribute("width", "42");
        contenido.setAttribute("height", "42");
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(i);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(jugadores.Jugadores[i][0]);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Agrega la fila al cuerpo de la tabla
        tableBody.appendChild(fila);
    }
}
