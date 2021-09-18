/*
HOLA SI ESTAS LEYENDO ESTO ES PORQUE:
1) QUIERES MODIFICAR EL CODIGO Y CAMBIAR ALGUNAS COSAS.
2) ERES UNA PERSONA MUY CURIOSA(DE SER ASI, DEBERIAS APRENDER DESARROLLO WEB
    ES HERMOSO CREAR SOLUCIONES PARA PROBLEMAS COTIDIANOS COMO
    ESTA APLICACION LO HACE).
3) CREDITOS A ARTURO GARCIA NAMBO QUIEN PROGRAMO Y DISENO ESTA APLICACION CON HTML,CSS Y JAVASCRIPT >_<
    SALUDOS QUIEN QUIERA QUE SEAS.
*/

//CONSTANTES QUE SE USAN PARA LOS CALCULOS
const PI=3.1415927;
const ALTURA=2.8;
const MEDIDALAMINA=2.8705;
var bandera=0;
//FIN DE LAS CONSTANTES

//OBJETOS UTILIZADOS PARA OBTENCION DE LOS DATOS INTRODUCIDOS EN LA INTERFAZ
let objLamina={valor:document.getElementById("tbxLaminas").value,objeto:document.getElementById("tbxLaminas")};
let objVolumen={valor:document.getElementById("tbxVolumen").value,objeto:document.getElementById("tbxVolumen")};
let objRadio={valor:document.getElementById("tbxRadio").value,objeto:document.getElementById("tbxRadio")};
let objDiametro={valor:document.getElementById("tbxDiametro").value,objeto:document.getElementById("tbxDiametro")};
let objPerimetro={valor:document.getElementById("tbxPerimetro").value,objeto:document.getElementById("tbxPerimetro")};
let objCheckbox=document.getElementById("chbxModificar");
let objchbxDarkMode=document.getElementById("chbxDarkmode");
//FIN DE LA OBTENCION DE DATOS DE LA INTERFAZ

//LLAMADO DE LAS FUNCIONES DEPENDIENDO DEL EVENTO QUE OCURRA EN LOS TEXTBOXES
objCheckbox.onchange=function() {editConstantes()};
objLamina.objeto.onchange= function() {porLaminas()};
objPerimetro.objeto.onchange=function(){porPerimetro()};
objDiametro.objeto.onchange=function(){porDiametro()};
objRadio.objeto.onchange=function(){porRadio()};
objVolumen.objeto.onchange=function(){porVolumen()};
objchbxDarkMode.onclick=function(){
    window.open("interfazdark.html");
};
//FIN DE LAS LLAMADAS DE ONCHANGE Y ONCLICK

//FUNCIONES UTILIZADAS PARA LOS CALCULOS Y OTROS
function limpiar(){
    let objLamina=document.getElementById("tbxLaminas");
    objLamina.value="";
    let objPerimetro=document.getElementById("tbxPerimetro");
    objPerimetro.value="";
    let objDiametro=document.getElementById("tbxDiametro");
    objDiametro.value="";
    let objRadio=document.getElementById("tbxRadio");
    objRadio.value="";
    let objVolumen=document.getElementById("tbxVolumen");
    objVolumen.value="";
    bandera=0;
}

function porLaminas(){

    bandera=1;
    objPerimetro.objeto.value=(objLamina.objeto.value*MEDIDALAMINA);
    objDiametro.objeto.value=(objPerimetro.objeto.value/PI);
    objRadio.objeto.value=(objDiametro.objeto.value/2);
    objVolumen.objeto.value=((PI*Math.pow(objRadio.objeto.value,2))*ALTURA);
}

function porDiametro(){

    bandera=3;
    objRadio.objeto.value=objDiametro.objeto.value/2;
    objVolumen.objeto.value=(PI*(Math.pow(objRadio.objeto.value,2))*ALTURA);
    objPerimetro.objeto.value=((2*PI)*objRadio.objeto.value);
    objLamina.objeto.value=(((2*PI)*objRadio.objeto.value)/MEDIDALAMINA);
}

function porRadio(){

    bandera=4;
    objVolumen.objeto.value=(PI*Math.pow(objRadio.objeto.value,2)*ALTURA);
    objPerimetro.objeto.value=((2*PI)*objRadio.objeto.value);
    objLamina.objeto.value=(((2*PI)*objRadio.objeto.value)/MEDIDALAMINA);
    objDiametro.objeto.value=(objPerimetro.objeto.value/PI);
}

function porVolumen(){

    bandera=5;
    let radio=(((objVolumen.objeto.value/ALTURA))/PI);
    radio=Math.sqrt(radio);
    objRadio.objeto.value=radio;
    objPerimetro.objeto.value=((2*PI)*(radio));
    objDiametro.objeto.value=radio*2;
    objLamina.objeto.value=((2*PI)*(radio))/MEDIDALAMINA;
}
function porPerimetro(){

    bandera=2;
    objDiametro.objeto.value=(objPerimetro.objeto.value/PI);
    objRadio.objeto.value=(objDiametro.objeto.value/2);
    objVolumen.objeto.value=((PI*Math.pow(objRadio.objeto.value,2))*ALTURA);
    objLamina.objeto.value=(((2*PI)*objRadio.objeto.value)/MEDIDALAMINA);
}
function elegirFuncion(){
    switch(bandera){
        case 1:
            porLaminas();
            break;
        case 2:
            porPerimetro();
            break;
        case 3:
            porDiametro();
            break;
        case 4:
            porRadio();
            break;
        case 5:
            porVolumen();
            break
        default:
            alert("No se ha tecleado ninguna medida en ningun campo");
    }
}
function editConstantes(){
    if(window.confirm("Habla con el departamento de sistemas antes de cambiar los valores!, cambiar de todos modos?")){
        let altura=document.getElementById("tbxAlturaField");
        let pi=document.getElementById("tbxPi");
        let medida=document.getElementById("tbxMedidaLamina");
        medida.disabled=false;
        pi.disabled=false;
        altura.disabled=false;
        
    }else{
        objCheckbox.checked=false;
    }

}
//FIN DE LAS FUNCIONES USADAS