const $home = document.getElementById("home");

export const crearCard = (data) => {
  if (Array.isArray(data)) {
    const divContenedor = document.createElement("div");
    divContenedor.classList.add("container");

    const imagenes = {
      fuerza: "./img/management.png",
      alias: "./img/detective.png",
      arma: "./img/fighting.png",
      editorial: "./img/comic-book.png",
    };

    const row = document.createElement("div");
    row.classList.add("row", "justify-content-center");

    data.forEach((objeto) => {
      const article = document.createElement("article");
      article.classList.add("col-lg-3", "col-md-6", "mb-4","m-2","contenedor");

      for (const key in objeto) {
        if (key === "id") continue;

        const divItem = document.createElement("div");
        divItem.classList.add("item");

        const texto = document.createElement("span");
        texto.classList.add("texto");
        texto.textContent = key + ": " + objeto[key];
        divItem.appendChild(texto);

        if (key in imagenes) {
          const img = document.createElement("img");
          img.src = imagenes[key];
          img.classList.add("icons");
          divItem.appendChild(img);
        }

        article.appendChild(divItem);
      }

      row.appendChild(article);
    });

    divContenedor.appendChild(row);
    $home.appendChild(divContenedor);
  }
};
