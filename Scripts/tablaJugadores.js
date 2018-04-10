function tablaJugadores() {
    //Crea los elementos <table> y <tbody>
    tableBody = document.getElementsByTagName("tbody")[0];
    
    data = '{"ID": "Jugadores","Jugadores": {"Trolden": [0,["2018Trolden1","2018Trolden2","2018Trolden3"]],"Amaz": [0, ["2018Amaz1","2018Amaz2","2018Amaz3"]],"Kripp": [0, ["2018Kripp1","2018Kripp2","2018Kripp3"]],"Savjz": [0,["2018Savjz1","2018Savjz2","2018Savjz3"]],"DayNine": [0,0],"Kibler": [0,0],"Firebat":[0,0],"Trump":[0,0],"Dog":[0,0],"Frodan":[0,0],"Toast":[0,0],"Noxious":[0,0],"Thijs":[0,0],"Kolento":[0,0],"Brode":[0,0],"Forsen":[0,0]}}';
    var jugadores = JSON.parse(data);
    
    data2 = '{ "Trolden1": [ "drd", {"carta1": 1} ] }';
    var mazos = JSON.parse(data2);
     
    //Crea todas las celdas
    for(var i in jugadores.Jugadores){
        //Crea un elemento <tr>
        fila = document.createElement("tr");
        //Crea un elemento <td>
        celda = document.createElement("td");
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
        Bcelda = document.createElement("button");
        Bcelda.type = "button";
        $(Bcelda).addClass("btn");
        //$(celda).addClass("btn-primary");
        Bcelda.setAttribute("data-toggle","modal");
        Bcelda.setAttribute("data-target","#ventanaJugador");
        var m1;
        if (mazos.hasOwnProperty(i+"1")){
           m1= mazos[i+"1"][0]; 
        }else{
            m1="0";
        }
        
        Bcelda.setAttribute("onclick","llenarVentana('"+i+"','"+
                                    jugadores.Jugadores[i][0]+"','"+
                                    m1+"','"+
                                    m1+"','"+
                                    m1+"')");
        
        //Crea el contenido de la celda
        contenido = document.createTextNode(i);
        //Agrega el contenido a la celda
        Bcelda.appendChild(contenido);
        celda.appendChild(Bcelda);
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

function llenarVentana(nombre, puntaje,I1,I2,I3){
   var titulo = document.getElementById("tituloVentana");
   titulo.removeChild(titulo.firstChild);
   titulo.appendChild(document.createTextNode(nombre));
   var nombreJugador = document.getElementById("nombreJugador");
   nombreJugador.removeChild(nombreJugador.firstChild);
   nombreJugador.appendChild(document.createTextNode(nombre));
   var puntajeJugador = document.getElementById("puntuacionJugador");
   puntajeJugador.removeChild(puntajeJugador.firstChild);
   puntajeJugador.appendChild(document.createTextNode(puntaje));
   var avatar = document.getElementById("avatarJugador");
   avatar.setAttribute("src","../Imagenes/Portraits/portrait"+nombre+".jpg");
   avatar.setAttribute("width", "150");
   avatar.setAttribute("height", "150");
   var mazo1 = document.getElementById("imagenMazo1")
   mazo1.setAttribute("src","../Imagenes/icons/"+I1+".png");
   mazo1.setAttribute("width", "50");
   mazo1.setAttribute("height", "50");
   var mazo2 = document.getElementById("imagenMazo2")
   mazo2.setAttribute("src","../Imagenes/icons/"+I1+".png");
   mazo2.setAttribute("width", "50");
   mazo2.setAttribute("height", "50");
   var mazo3 = document.getElementById("imagenMazo3")
   mazo3.setAttribute("src","../Imagenes/icons/"+I1+".png");
   mazo3.setAttribute("width", "50");
   mazo3.setAttribute("height", "50");
 }