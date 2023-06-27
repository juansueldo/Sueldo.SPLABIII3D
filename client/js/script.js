import { Superheroe} from "./superheroes.js";
import { ValidarString } from "./validaciones.js";
import { createSuperHeroe } from "./ajax/createAjax.js";
import { deleteSuperheroe } from "./ajax/deleteAjax.js";
import {getFetchDB} from "./ajax/getFetch.js";
import { updateSuperhero } from "./ajax/updateAjax.js";
import { filterAddsHandler, checkBoxHandler } from "./filter.js";
import { updateTable } from "./tablaDinamica.js";



export const myCheckBox =  document.querySelectorAll(".filterCheck");
export let listaSuperheroes = [];
export let listaTemporal = [];
const $formulario = document.forms[0];
const $button = document.getElementById("button");
const $buttonCancel = document.getElementById("button-cancel");
const $titulo = document.getElementById("titulo");
const $select = document.getElementById("select-arma");
const $home = document.getElementById("home");
const btnGuardar = document.getElementById("guardar");
const armas = ["Armadura", "Espada", "Martillo", "Escudo", "Arma de Fuego", "Flechas"];

window.addEventListener("load", () => {
    getFetchDB((data)=>{
        listaSuperheroes = data;
        listaTemporal = data;
        updateTable(data);
    });
  
    myCheckBox.forEach((element)=> element.addEventListener("click",checkBoxHandler));
});

window.addEventListener("change", (ev) => {
    if(ev.target.matches('#FilterEditorial')){
      filterAddsHandler(ev, listaSuperheroes, listaTemporal);
    }
});

window.onload = () => {
    armas.forEach((arma) => {
        const $option = document.createElement("option");
        $option.value = arma;
        $option.textContent = arma;
        $select.appendChild($option);
      });
}

window.addEventListener("click", (e)=>{
    if(e.target.matches("td")){
        const idSuperHeroe = e.target.parentElement;
        cargarFormulario($formulario,idSuperHeroe);
        
        $button.classList.remove("hidden-btn");
        $buttonCancel.classList.remove("hidden-btn");
        $titulo.textContent = "Modificar/Eliminar SuperHeroe";
    }
    else if(e.target.matches("input[value='Eliminar']")){
        const id = parseInt($formulario.txtId.value);
        deleteSuperheroe(id);
    }
    else if(e.target.matches("input[value='Cancelar']")){
        resetFormulario();
    }
});

btnGuardar.addEventListener("click", (e)=>{
    e.preventDefault();
    const {txtId, txtNombre, txtAlias,rdoEditorial, txtFuerza} = $formulario;
    const valorSeleccionado = $select.value;
    if(txtId.value === ""){
        console.log("carga...");
        if(ValidarString(txtNombre.value,3, 50)){
            const newSuperHeroe = new Superheroe(Date.now(), txtNombre.value, parseInt(txtFuerza.value), txtAlias.value, rdoEditorial.value, valorSeleccionado);
            createSuperHeroe(newSuperHeroe);
            resetFormulario();
        }
        else{
            alert("Ingrese datos validos")
        }
          
    }
    else{
        console.log("modificacion...");
        const updateSuperHeroe = new Superheroe(parseInt(txtId.value),txtNombre.value, parseInt(txtFuerza.value), txtAlias.value, rdoEditorial.value, valorSeleccionado);
        console.log(updateSuperHeroe.id);
        updateSuperhero(updateSuperHeroe.id,updateSuperHeroe);
            resetFormulario();
 
    }
    
    resetFormulario();
});

function cargarFormulario(formulario, tr){
    formulario.txtId.value = tr.id;
    formulario.txtNombre.value = tr.children[0].textContent;
    formulario.txtAlias.value = tr.children[2].textContent;
    formulario.rdoEditorial.value = tr.children[3].textContent;
    formulario.txtFuerza.value = tr.children[1].textContent;
    $select.value = tr.children[4].textContent;

}

function resetFormulario(){
    $button.classList.add("hidden-btn");
    $buttonCancel.classList.add("hidden-btn");
    $titulo.textContent = "Informacion del SuperHeroe";
    $formulario.reset();
}

  









