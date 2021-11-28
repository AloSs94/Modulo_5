import _ from 'lodash';
import './estilo.css';
import imagen from './Alicia.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';


if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration=>{
            console.log("SW registrado", registration);
        }).catch(error =>{
            console.log("SW no registrado",  error);
        });
    });
}

function componente() {
    const elemento = document.createElement('div');
    //loadash
    elemento.innerHTML = _.join(['Hola', 'webpack'],' ');
    elemento.classList.add('hola');
    
    const AliMagen = new Image();
    AliMagen.src = imagen;
    elemento.appendChild(AliMagen);

    console.log(Datos);
    return elemento;
}

console.log(yaml.title);
console.log(json5.owner.name);
document.body.appendChild(componente());