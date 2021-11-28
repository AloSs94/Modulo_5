import _ from 'lodash';
import './estilo.css';
import imagen from './Alicia.jpg';
import Datos from './datos.csv';
import yamljs from './datos.yaml';
import json5 from './datos.json5';
import './estilo.scss';

function componente() {

    const elemento = document.createElement('div');
    //loadash
    elemento.innerHTML = _.join(['Hola',Datos[0][1]],' ');
    elemento.classList.add('fondo');
    
    const AliMagen = new Image();
    AliMagen.src = imagen;
    elemento.appendChild(AliMagen);

    console.log(Datos);
    return elemento;
}

console.log(Datos)
console.log(yamljs.title);
console.log(json5.owner.name);

document.body.classList.add('fondo');
document.body.appendChild(componente());