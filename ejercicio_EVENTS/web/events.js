window.onload=function() {       
    capas=document.getElementsByClassName("div_inicial");
    for(i=0;i<capas.length;i++){
        capas[i].onmouseover=resalta;
        capas[i].onmouseout=resalta;
    }
    capas2=document.getElementsByClassName("div2_inicial");
    for(j=0;j<capas2.length;j++){
        capas2[j].addEventListener("mouseover",resalta,true);
        capas2[j].addEventListener("mouseout",resalta,true);
    }            
}        
function resalta(){
    switch(this.className){
        case "div_inicial": this.className="div_modificado";break;
        case "div_modificado": this.className="div_inicial";break;
        case "div2_inicial": this.className="div2_modificado";break;
        case "div2_modificado": this.className="div2_inicial";break;
    }                                  
}      

