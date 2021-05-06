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
    $info.removeChild ($info.firstChild);
    $info.appendChild($container);
};

const getCoronaBrazil = async() => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const getApi = await fetch (url);
    const json = await getApi.json();
    const brazil = await{
                    "uf" : "Brazil",
                    "suspeitos":json.data.cases,
                    "confirmados":json.data.confirmed,
                    "mortes":json.data.deaths
    }
    showData (brazil);

}

const getCoronaState = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/';
    const getApi = await fetch (url);
    const json = await getApi.json();
    BD = await json.data;

}
const findState = (evento) =>{
    const ufMap = evento.target.getAttribute('name');
    const getState = BD.find(estado => estado.state == ufMap);
    const state = {
        "uf":getState.uf,
        "suspeitos":getState.suspects,
        "confirmados":getState.cases,
        "mortes":getState.deaths
    }
    showData ( state );
   
}

const objectElement = document.getElementById( 'brsvg' )

objectElement.addEventListener("load",function(){
    objectElement.contentDocument.addEventListener( 'click', findState);
});

showData( BD[0])
getCoronaState ();
getCoronaBrazil ();
