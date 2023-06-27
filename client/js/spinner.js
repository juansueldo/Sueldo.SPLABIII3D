

const $spinner = document.getElementById("spinner");


export function mostrarSpinner(){
    $spinner.classList.remove("hidden");
}
  
export function ocultarSpinner() {
    $spinner.classList.add("hidden");
}