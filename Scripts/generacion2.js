function start() {
 generarTabs();
}

function generarTabs(){
    tableBody = document.getElementById("tabla");
    
    tabList = document.createElement("ul");
    tabList.class ="nav nav-tabs";
    tabList.id = "Lista";
    tabList.setAttribute("role","tablist");
    
    tab = document.createElement("li");
    tab.class = "nav-item";
  
    tabTitle = document.createElement("a");
    tabTitle.setAttribute("class","nav-link active");
    tabTitle.setAttribute("id","GRUPOA");
    tabTitle.setAttribute("data-toggle","tab");
    tabTitle.setAttribute("href","#grupoA");
    tabTitle.setAttribute("role","tab");
    tabTitle.setAttribute("aria-controls","home");
    tabTitle.setAttribute("aria-selected","true");
    
    tabTitle.appendChild(document.createTextNode("Nombre"));
    
    tab.appendChild(tabTitle);
    tabList.appendChild(tab);
    tableBody.appendChild(tabList);
    
    /*
    tab = document.createElement("li");
    tab.class = "nav-item";
    
    tabTitle = document.createElement("a");
    tabTitle.setAttribute("class","nav-link");
    tabTitle.setAttribute("id","GRUPOB");
    tabTitle.setAttribute("data-toggle","tab");
    tabTitle.setAttribute("href","#grupoB");
    tabTitle.setAttribute("role","tab");
    tabTitle.setAttribute("aria-controls","grupoB");
    tabTitle.setAttribute("aria-selected","false");
    
    tabContents = document.createElement("div");
    tabContents.class = "tab-content";
    tabContents.id = "contenido";
    
    tabAContent = document.createElement("div");
    tabAContent.class = "tab-pane fade show active";
    tabAContent.id = "grupoA";
    tabAContent.setAttribute("role","tabpanel");
    tabAContent.setAttribute("aria-labeled","GRUPOA");
    
    contenido = document.createTextNode("jugadores.J2018[j].Nombre");
    
    tabAContent.appendChild(contenido);
    tabContents.appendChild(tabAContent);
    
    
    tab.appendChild(tabTitle);
    tabList.appendChild(tab);
    tableBody.appendChild(tabList);
    tableBody.appendChild(tabAContent);
            
        /*        
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
            </li>
       */   
}

/*
 function generarAcordeon() {
    divAcordeon = document.getElementsByTagName("Acordeon")[0];
    
    for(var g = 0; g < 4; g++){
        divCarta = document.createElement("div");
        divCarta.class = "card";
        
        divHeader = document.createElement("div");
        divHeader.class = "card-header";
        divHeader.id = "header" + g;
        
        divH5 = document.createElement("h5");
        divH5.class = "mb-0";
        
        boton = document.createElement("button");
        boton.class = "btn btn-link";
        //boton.setAttribute("data-toggle","collapse");
        //boton.setAttribute("data-target","#cuerpo" + g);
        //boton.setAttribute("aria-expanded","true");
        //boton.setAttribute("aria-controls","cuerpo" + g);
        
        divCuerpo = document.createElement("div");
        divCuerpo.id = "cuerpo" + g;
        divCuerpo.class = "collapse show";
        //divCuerpo.setAttribute("aria-labelledby","header" + g);
        //divCuerpo.setAttribute("data-parent","#Acordeon");
        
        divCuerpoCarta = document.createElement("div");
        divCuerpoCarta.class = "card-body";
        contenido = document.createTextNode("ASD");
        
        divCuerpoCarta.appendChild(contenido);
        divCuerpo.appendChild(divCuerpoCarta);
        
        divH5.appendChild(boton);
        divHeader.appendChild(divH5);
        divCarta.appendChild(divHeader);
        
        divAcordeon.appendChild(divCarta);
        divAcordeon.appendChild(divCuerpo);
    }
}
 */
