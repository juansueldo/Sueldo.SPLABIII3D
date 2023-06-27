import { ocultarSpinner } from "../spinner.js";
import { mostrarSpinner } from "../spinner.js";
import { updateTable } from "../tablaDinamica.js";
import {crearCard} from "../cards.js";


const URL = "http://localhost:3000/superheroes";

export const getSuperHeroes =()=>{

    mostrarSpinner();
    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);
                updateTable(data);
            }else{
                console.error(`Error: ${xhr.status}- ${xhr.statusText}`);
            }
            ocultarSpinner();
        }
        else{

        }
        
    });
    xhr.open("GET", URL);
    xhr.send();
    
};


export const getSuperHeroe =(id)=>{

    mostrarSpinner();
    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            }else{
                console.error(`Error: ${xhr.status}- ${xhr.statusText}`);
            }
            ocultarSpinner();
        }
        else{

        }
    });
    xhr.open("GET", URL + "/" + id);
    xhr.send();

};

export const getSuperHeroesDB = (callback) => {
    mostrarSpinner();
    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                callback(data); 
            } else {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
            ocultarSpinner();
        }
    });
    
    xhr.open("GET", URL);
    xhr.send();
};



export const getSuperHeroesCard =()=>{

    mostrarSpinner();
    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);
                crearCard(data);
            }else{
                console.error(`Error: ${xhr.status}- ${xhr.statusText}`);
            }
            ocultarSpinner();
        }
        else{

        }
        
    });
    xhr.open("GET", URL);
    xhr.send();
    
};