const API = 'https://6835b7e7cd78db2058c2d331.mockapi.io/Spidercostumes';

const containerTotal = document.querySelector('.container')
const containerInyect = document.querySelector('.container--inyect')

fetch(API)
.then (respuesta => respuesta.json())
.then (data => {
    const spiderSignal = data;
    for(i=0; i<spiderSignal.lenght; i++){
        
    }
})