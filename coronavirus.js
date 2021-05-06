"use strict";

let BD = [
    {
        "uf" : "Brazil",
        "suspeitos":"<div class='lds-ripple'><div></div><div></div></div>",
        "confirmados":"<div class='lds-ripple'><div></div><div></div></div>",
        "mortes":"<div class='lds-ripple'><div></div><div></div></div>",

    }
];

const showData = ( data ) => {
    const panel = `
        <div class= 'estado'>
            ${data.uf}
        </div>
        <div class = 'card suspeitos'>
            <div class = 'numeros'> ${data.suspeitos}</div>
            <div class = 'titulos'> SUSPEITOS </div>
        </div>
        <div class = 'card confirmados'>
            <div class = 'numeros'> ${data.confirmados}</div>
            <div class = 'titulos'> CONFIRMADOS </div>
        </div>
        </div>
        <div class = 'card mortes'>
            <div class = 'numeros'> ${data.mortes}</div>
            <div class = 'titulos'> MORTES </div>
        </div>
    `;

    const $container = document.createElement('div');
    $container.innerHTML = panel;
    
    const $info = document.getElementById('info');

    $info.appendChild($container);
};

showData( BD[0])