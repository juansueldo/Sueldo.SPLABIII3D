function createTable(data){
    const table = document.createElement('table');
    if(data.length > 0){
        table.classList.add('table', 'table-hover', 'table-dark');
        table.appendChild(createtHead(data));
        data.forEach(item => {
            table.appendChild(createTBody(item));
        });
    }

    document.getElementById('tabla').appendChild(table);
}


function createtHead(data){
    const thead = document.createElement('thead');
    const objectKeys = Object.keys(data[0]);
    const tr = document.createElement('tr');
    tr.style.backgroundColor = '#000';
    thead.classList.add('table-dark');

    objectKeys.forEach(key => {
        if(key !== 'id'){
            const th = document.createElement('th');
            th.appendChild(document.createTextNode(key));
            tr.appendChild(th);
        }
    });

    return thead.appendChild(tr);
}


function createTBody(data) {
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const values = Object.values(data);

    values.forEach((key, index) => {
        if (key !== data.id) {
            const td = document.createElement('td');
            td.textContent = key;
            tr.appendChild(td);
        } else {
            tr.setAttribute('id', key);
        }
    });
    if (tbody.children.length % 2 === 0) {
        tr.classList.add("rowPar"); 
    } else {
        tr.classList.add("rowImpar"); 
    }

    return tbody.appendChild(tr);
}

function updateTable(data){
    if(data.length > 0){
        const table = document.getElementById('tabla');
        while(table.hasChildNodes()){
            table.removeChild(table.firstChild);
        }

        createTable(data);
    }
}

export {createTable, updateTable};