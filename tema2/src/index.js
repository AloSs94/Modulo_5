import _ from 'lodash'

function componente() {
    const elemento = document.createElement('div');
    //loadash
    elemento.innerHTML = _.join(['Hola', 'webpack'],' ');

    return elemento;
}

document.body.appendChild(componente());