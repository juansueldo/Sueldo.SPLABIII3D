import { ocultarSpinner } from "../spinner.js";
import { mostrarSpinner } from "../spinner.js";
import { updateTable } from "../tablaDinamica.js";
const URL = "http://localhost:3000/superheroes";

export const updateSuperhero = (id, newData) => {
    mostrarSpinner();
    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                updateTable(data);
            } else {
                console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
            ocultarSpinner();
        }
    });
    
    xhr.open("PUT", URL + "/" + id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(newData));
};