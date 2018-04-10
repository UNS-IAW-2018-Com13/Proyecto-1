function start(){
    var est = obtenerEstilo();
    if(est !== null){
        var linkEstilo = document.getElementById("estiloBase");
        linkEstilo.href = "../Estilos/" + est + ".css";
    }
    crearLinks();
    crearDesplegable();
}

function guardarEstilo(idEstilo){
    localStorage.setItem("Estilo",idEstilo);
}

function obtenerEstilo(){
    return localStorage.getItem("Estilo");
}

function crearLinks(){
    var barra = document.getElementById("barraLinks");
    var liBarra = document.createElement("li");
    $(liBarra).addClass("nav-item");
    var linkBarra = document.createElement("a");
    linkBarra.setAttribute("id", "BarraLinkC");
    $(linkBarra).addClass("nav-link");    
    linkBarra.setAttribute("href","Jugadores.html");
    var titulo = document.createTextNode("JUGADORES");
    linkBarra.appendChild(titulo);
    liBarra.appendChild(linkBarra);
    barra.appendChild(liBarra);
    
    liBarra = document.createElement("li");
    $(liBarra).addClass("nav-item");
    linkBarra = document.createElement("a");
    linkBarra.setAttribute("id", "BarraLinkC");
    $(linkBarra).addClass("nav-link");
    linkBarra.setAttribute("href","Grupos.html");
    titulo = document.createTextNode("GRUPOS");
    linkBarra.appendChild(titulo);
    liBarra.appendChild(linkBarra);
    barra.appendChild(liBarra);
    
    liBarra = document.createElement("li");
    $(liBarra).addClass("nav-item");
    linkBarra = document.createElement("a");
    linkBarra.setAttribute("id", "BarraLinkC");
    $(linkBarra).addClass("nav-link");
    linkBarra.setAttribute("href","Partidos.html");
    titulo = document.createTextNode("PARTIDOS");
    linkBarra.appendChild(titulo);
    liBarra.appendChild(linkBarra);
    barra.appendChild(liBarra);
    
    liBarra = document.createElement("li");
    $(liBarra).addClass("nav-item");
    linkBarra = document.createElement("a");
    linkBarra.setAttribute("id", "BarraLinkC");
    $(linkBarra).addClass("nav-link");
    linkBarra.setAttribute("href","Estadisticas.html");
    titulo = document.createTextNode("ESTADISTICAS");
    linkBarra.appendChild(titulo);
    liBarra.appendChild(linkBarra);
    barra.appendChild(liBarra);
}

function crearDesplegable(){
    var tituloDesp = document.getElementById("navbarDropdownMenuLink");
    var est = obtenerEstilo();
    var titDesp;
    if(est !== null){
        titDesp = document.createTextNode(est);
    } else {
        titDesp = document.createTextNode("Estilos");
    }
    tituloDesp.appendChild(titDesp);
    var desplegable = document.getElementById("desplegable");
    var aOpcion = document.createElement("a");
    aOpcion.setAttribute("class","dropdown-item");
    aOpcion.id="desplegableI";
    aOpcion.setAttribute("onclick","cambiarEstilo('Standard','navbarDropdownMenuLink')");
    var titulo = document.createTextNode("Standard");
    aOpcion.appendChild(titulo);
    desplegable.appendChild(aOpcion);
    
    desplegable = document.getElementById("desplegable");
    aOpcion = document.createElement("a");
    aOpcion.id="desplegableI";
    aOpcion.setAttribute("class","dropdown-item");
    aOpcion.setAttribute("onclick","cambiarEstilo('Naxxramas','navbarDropdownMenuLink')");
    titulo = document.createTextNode("Naxxramas");
    
    aOpcion.appendChild(titulo);
    desplegable.appendChild(aOpcion);
}

function cambiarEstilo(idEstilo,idBarra){
    var tituloDesp = document.getElementById(idBarra);
    tituloDesp.removeChild(tituloDesp.firstChild);
    var linkEstilo = document.getElementById("estiloBase");
    linkEstilo.href = "../Estilos/" + idEstilo + ".css";
    var titDesp = document.createTextNode(idEstilo);
    tituloDesp.appendChild(titDesp);
    guardarEstilo(idEstilo);
}
