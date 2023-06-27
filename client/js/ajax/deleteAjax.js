import { ocultarSpinner } from "../spinner.js";
import { mostrarSpinner } from "../spinner.js";

const URL = "http://localhost:3000/superheroes";

export const deleteSuperheroe =(id)=>{

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
    xhr.open("DELETE", URL + "/" + id);
    xhr.send();

};