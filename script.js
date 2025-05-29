const API = 'https://6835b7e7cd78db2058c2d331.mockapi.io/Spidercostumes';
const editcontainer = document.getElementById('inyectable')
const containerTotal = document.querySelector('.container')
const containerInyect = document.querySelector('.container--inyect')

fetch(API)
.then (respuesta => respuesta.json())
.then (data => {
    const spiderSignal = data;
    for(i=0; i<spiderSignal.length; i++){
        editcontainer.innerHTML += `
        <div class="container--inyect">
                <div class="container--inyect__img">
                    <img src="${spiderSignal[i].img}" alt="">
                </div>
                <div class="container--inyect__info">
                    <h3>Name: <span>${spiderSignal[i].Name}</span></h3>
                    <h3>Year: <span>1962</span> </h3>
                </div>
        `
      }
})