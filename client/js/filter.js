
import {updateTable} from "./tablaDinamica.js";
import {myCheckBox, listaTemporal} from "./script.js";

const filterAddsHandler = (e, filteredAds, temporalList) => {
  const $editorial = document.getElementById("FilterEditorial");
  const $promedio = document.getElementById("promedio");
  let selectedOption = $editorial.value;

  const calcularPromedioFuerza = (lista) => {
    const promedioFuerza = lista.reduce((total, current) => total + parseInt(current.fuerza), 0) / lista.length;
    $promedio.value = promedioFuerza.toFixed(2);
  };

  if (selectedOption !== "todos") {
    temporalList = filteredAds.filter((value) => value.editorial === selectedOption);
    calcularPromedioFuerza(temporalList);
  } else {
    temporalList = filteredAds;
    calcularPromedioFuerza(temporalList);
  }

  updateTable(temporalList);
};

const checkBoxHandler = (e) =>{
  const selectedFilters = {};
  myCheckBox.forEach((item) => {
    selectedFilters[item.name] = item.checked;
  });

const myMappedAdsList = listaTemporal.map((item) => {
    const mappedAdsList = {};
    for (const key in item) {
      if (selectedFilters[key] || key == "id") {
        mappedAdsList[key] = item[key];
      }
    }
    return mappedAdsList;
  });
  updateTable(myMappedAdsList);
}




export {filterAddsHandler, checkBoxHandler};