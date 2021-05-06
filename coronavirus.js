"use strict";

let BD = [
    {
        "uf" : "Brazil",
        "suspeitos":"100",
        "confirmados":"50",
        "mortes":"5",

    }
];

const showData = ( data ) => {
    const panel = `
        <div class= 'estado'>
            ${data.uf}
        </div>
        <div class = 'card suspeitos'>
            <div class = 'numeros'> ${data.suspeitos}</div>
            <div class = 'titulo'> SUSPEITOS </div>
        </div>
        <div class = 'card confirmados'>
            <div class = 'numeros'> ${data.confirmados}</div>
            <div class = 'titulo'> CONFIRMADOS </div>
        </div>
        </div>
        <div class = 'card mortes'>
            <div class = 'numeros'> ${data.mortes}</div>
            <div class = 'titulo'> MORTES </div>
        </div>
    `;

    const $container = document.createElement('div');
    $container.innerHTML = panel;
    
    const $info = document.getElementById('info');

    $info.appendChild($container);
};

showData( BD[0])