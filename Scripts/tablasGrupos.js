function tablasGrupos(){
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
    
    var jugadores = JSON.parse('{"ID": "Jugadores","Jugadores": {"Trolden": [0,["2018Trolden1","2018Trolden2","2018Trolden3"]],"Amaz": [0, ["2018Amaz1","2018Amaz2","2018Amaz3"]],"Kripp": [0, ["2018Kripp1","2018Kripp2","2018Kripp3"]],"Savjz": [0,["2018Savjz1","2018Savjz2","2018Savjz3"]]}}');
    
    var grupos =JSON.parse('{"ID": "Grupos","Grupos":{"tabla_GrupoA": ["Amaz","Trolden","Savjz","Kripp"],"tabla_GrupoB": ["Trolden","Savjz","Kripp","Amaz"]}}');
    
    g=grupos.Grupos[idTabla];
        
    //Crea todas las celdas
    for(var j = 0; j < g.length; j++){
        //Crea un elemento <tr>
        var fila = document.createElement("tr");
        
        //Crea un elemento <td>
        var celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createElement("img");
        contenido.setAttribute("src","../Imagenes/Portraits/portrait"+g[j]+".jpg");
        contenido.setAttribute("width", "42");
        contenido.setAttribute("height", "42");
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(g[j]);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Crea un elemento <td>
        celda = document.createElement("td");
        //Crea el contenido de la celda
        contenido = document.createTextNode(jugadores.Jugadores[g[j]][0]);
        //Agrega el contenido a la celda
        celda.appendChild(contenido);
        //Agrega la celda en la fila
        fila.appendChild(celda);
        
        //Agrega la fila al cuerpo de la tabla
        tableBody.appendChild(fila);
    }
}