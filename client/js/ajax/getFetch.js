import { ocultarSpinner } from "../spinner.js";
import { mostrarSpinner } from "../spinner.js";

const URL = "http://localhost:3000/superheroes";

const getFetch = () => {
    mostrarSpinner();
    fetch(URL)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        console.log(data);
        
      })
      .catch((err) => {
        console.error(`Error: ${err.status}- ${err.statusText}`);
      })
      .finally(() => {
        ocultarSpinner();
      });
  };
export const getFetchDB = (callback) => {
    mostrarSpinner();
    fetch(URL)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        console.log(data);
        callback(data);
        
      })
      .catch((err) => {
        console.error(`Error: ${err.status}- ${err.statusText}`);
      })
      .finally(() => {
        ocultarSpinner();
      });
  };
