$('.caja').click(jugar);

function jugar(){
    var jugador1 = this.id;
    var jugador2 = maquina();
    mecanica(jugador1, jugador2)
    console.log(`${jugador1} vs ${jugador2}`)
}

function maquina(){
    var posibles = ['piedra', 'papel', 'tijera'];
    var salida = posibles[Math.floor(Math.random()*posibles.length)];
    return salida;  
}

function mecanica(jugador1, jugador2){
    switch(jugador1){
        case 'piedra':
            comprobarPiedra(jugador1, jugador2);
        break;
        case 'papel':
            comprobarPapel(jugador1, jugador2);
        break;
        case 'tijera':
            comprobarTijera(jugador1, jugador2);
        break;
    }
}

function comprobarPiedra(jugador1, jugador2){
    if(jugador2=='tijera'){
        ganar(jugador1, jugador2);
    }else if(jugador2=='papel'){
        perder(jugador1, jugador2);
    }else{
        empate(jugador1, jugador2);
    }
}
function comprobarPapel(jugador1, jugador2){
    if(jugador2=='piedra'){
        ganar(jugador1, jugador2);
    }else if(jugador2=='tijera'){
        perder(jugador1, jugador2);
    }else{
        empate(jugador1, jugador2);
    }
}
function comprobarTijera(jugador1, jugador2){
    if(jugador2=='papel'){
        ganar(jugador1, jugador2);
    }else if(jugador2=='piedra'){
        perder(jugador1, jugador2);
    }else{
        empate(jugador1, jugador2);
    }
}


function ganar(jugador1, jugador2){
    Swal.fire({
        icon: 'success',
        title: 'Ganaste',
        text: '¡Enhorabuena, has ganado!',
        footer: `Jugador: <span class="win">${jugador1}</span> - IA: <span class="losse">${jugador2}</span>`
    })
}
function perder(jugador1, jugador2){
    Swal.fire({
        icon: 'error',
        title: 'Perdiste',
        text: '¡Oh, no!¡Has perdido!',
        footer: `Jugador: <span class="losse">${jugador1}</span> - IA: <span class="win">${jugador2}</span>`
    })
}
function empate(jugador1, jugador2){
    Swal.fire({
        icon: 'question',
        title: 'Empate',
        text: '¡Has empatado!',
        footer: `Jugador: <span class="draw">${jugador1}</span> - IA: <span class="draw"> ${jugador2}</span>`
    })
}