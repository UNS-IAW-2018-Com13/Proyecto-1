function start3(){
    generarTabla("tabla_GrupoA");
    generarTabla("tabla_GrupoB");
    generarTabla("tabla_GrupoC");
    generarTabla("tabla_GrupoD");
}

function abrirTab(id) {
    
    var tab = document.getElementById(id);
    $(tab).tab('show');
}

function generarTabla(idTabla) {
    //Crea los elementos <table> y <tbody>
    var tableBody = document.getElementById(idTabla);
    
    var data = '{ "ID": "Jugadores", "J2018": [ {"Nombre": "Trolden", "Puntaje": 0, "Mazos": ["2018Trolden1","2018Trolden2","2018Trolden3"]}, {"Nombre": "Amaz", "Puntaje": 0, "Mazos": ["2018Amaz1","2018Amaz2","2018Amaz3"]}, {"Nombre": "Kripp", "Puntaje": 0, "Mazos": ["2018Kripp1","2018Kripp2","2018Kripp3"]}, {"Nombre": "Savjz", "Puntaje": 0, "Mazos": ["2018Savjz1","2018Savjz2","2018Savjz3"]} ] }';
    
    var jugadores = JSON.parse(data);

    //Crea todas las celdas
    for(var j = 0; j < jugadores.J2018.length; j++){
    //for (var j = 0; j < 3; j++) {
        //Crea un elemento <tr>
        var fila = document.createElement("tr");
        
        //Crea un elemento <td>
        var celda = document.createElement("td");
        //Crea el contenido de la celda
        var contenido = document.createTextNode("portrait"+jugadores.J2018[j].Nombre+".jpg");
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(jugadores.J2018[j].Nombre);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(jugadores.J2018[j].Puntaje);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Agrega la fila al cuerpo de la tabla
        tableBody.appendChild(fila);
    }
}