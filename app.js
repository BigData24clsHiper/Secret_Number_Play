let cantidad_intentos=0;
let nro_maximo_permitido=0;
let NroSecreto=0;
let lst_nros_sorteados=[];
//nro_maximo_permitido=10;
function Inicia_juego() {
    nro_maximo_permitido=parseInt(document.getElementById('ValorUsuario').value);
    console.log(nro_maximo_permitido);
    document.getElementById('comenzar').setAttribute('disabled','true')
    document.getElementById('intentar').removeAttribute('disabled');
    limpiar_casillas('ValorUsuario');
    Reiniciar_mensajes();
}
function Establecer_Juego() {
    AsignarTexto('h1','Juego del número secreto 2024!!!');
    AsignarTexto('p','Para empezar, deberá establecer el valor máximo de posibles números secretos')
    limpiar_casillas('ValorUsuario');
    //document.getElementById('intentar').removeAttribute('disabled');
}

function AsignarTexto(etiqueta,Descripcion_texto){
    let elementoHTML=document.querySelector(etiqueta);
    elementoHTML.innerHTML=Descripcion_texto;
}
function Reiniciar_mensajes() {
    AsignarTexto('h1','Juego del número secreto 2024!!!');
    AsignarTexto('p',`Indica un número del 1 al ${nro_maximo_permitido}`);
    cantidad_intentos=1;
    NroSecreto=GenerarNroSecreto();
    console.log(nro_maximo_permitido);
    
    //lst_nros_sorteados.push(NroSecreto);
}

function GenerarNroSecreto() {
    let nro_generado=Math.floor(Math.random()*nro_maximo_permitido+1);
    //valida si el nro generado se encuentra en la lista de nros sorteados.
    console.log(nro_generado);
    console.log(lst_nros_sorteados);
    if(lst_nros_sorteados.length==nro_maximo_permitido){
        AsignarTexto('p','Ya se sortearon todos los números posibles');
        document.getElementById('intentar').setAttribute('disabled','true')
    }
    else{
        if(lst_nros_sorteados.includes(nro_generado)){
            //Por recursividad se vuelve a llamar a la función Generar_Nro_Secreto() para que realice un nuevo intento de nro.sorteado
            return GenerarNroSecreto();
        }
        else{
            lst_nros_sorteados.push(nro_generado);
            return nro_generado;
        }
    }

}

function limpiar_casillas(etiqueta) {
    //document.querySelector(etiqueta).value='';
    document.getElementById(etiqueta).value='';
    document.getElementById(etiqueta).focus();
}
function reiniciar_juego() {
    //limpiar casillas
    //limpiar_casillas('#ValorUsuario');
    limpiar_casillas('ValorUsuario');
    //generar nuevo número aleatorio
    //Reiniciar intentos
    //Reiniciar mensajes de números intentos
    Reiniciar_mensajes();
    //desactivar botón nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
//console.log(NroSecreto());
//Reiniciar_mensajes();
Establecer_Juego();
console.log(NroSecreto);
function verificarIntento(){
    let nroUsuario=parseInt(document.getElementById('ValorUsuario').value);
    //Verificar_Nro_Sorteado();
    console.log(NroSecreto);
    if(nroUsuario===NroSecreto){
        AsignarTexto('p',`Felicidades, acertaste el número secreto en ${cantidad_intentos} ${(cantidad_intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //Usuario no acertó el juego
        if(nroUsuario>NroSecreto){
            AsignarTexto('p','El nro. secreto es menor que '+nroUsuario);
        }else{
            AsignarTexto('p','El nro. secreto es mayor que '+nroUsuario);
        }
        cantidad_intentos++;
        limpiar_casillas('#ValorUsuario');
    } 
    return;
}