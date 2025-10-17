class todoList {

    constructor() {
        this.tasques = [];
    }

    // Afegeix una nova tasca a la llista i actualitza el DOM
    afegirTasca(item) {
        this.tasques.push(item);
        this.mostrarTasques();
    }

    // Elimina una tasca per índex 
    eliminarTasca(index) {
        this.tasques.splice(index, 1);
        this.mostrarTasques();
    }

    // Filtra les tasques per prioritat
    filtrarPerPrioritat(prioritat) {
        return this.tasques.filter(t => t.prioritat === prioritat);
    }

    // Filtra les tasques per nom de l'assignat
    filtrarPerAssignat(assignat) {
        if (!assignat) return this.tasques
        return this.tasques.filter(t => t.assignat.toLowerCase().includes(assignat.toLowerCase()));
    }

    // Ordena les tasques per data de creació o prioritat
    ordenarTasques(perPrioritat = false) {
        if (perPrioritat) {
            this.tasques.sort((a, b) => this.compararPrioritat(a.prioritat, b.prioritat));
        } else {
            this.tasques.sort((a, b) => a.dataCreacio - b.dataCreacio);
        }
        this.mostrarTasques();
    }

    // Comparació de prioritats per ordre
    compararPrioritat(p1, p2) {
        const prioritats = { "molt alta": 1, "alta": 2, "baixa": 3, "molt baixa": 4 };
        return prioritats[p1] - prioritats[p2];
    }

    // Mostra les tasques en el DOM
    mostrarTasques() {
        const llista = document.getElementById("llistaTasques");
        llista.innerHTML = ''; // Buida la llista abans d'afegir les noves tasques

        this.tasques.forEach((tasca, index) => {
            const tascaElem = document.createElement("div");
            tascaElem.classList.add("post-it", tasca.prioritat.replace(" ", "-"));

            // Mostra la informació de la tasca
            tascaElem.innerHTML = `
                <strong>${tasca.nom}</strong><br>
                Assignat a: ${tasca.assignat}<br>
                Prioritat: ${tasca.prioritat}<br>
                Data de creació: ${tasca.dataCreacio.toLocaleString()}<br>
                <button onclick="gestorTasques.eliminarTasca(${index})">Eliminar</button>
            `;
            llista.appendChild(tascaElem);
        });
    }

    // Mostra les tasques filtrades per nom en el DOM
    mostrarTasquesFiltrades(tasquesFiltrades){
        const llista = document.getElementById("llistaTasques");
        llista.innerHTML = ''; // Buida la llista antes de mostrar les tasques filtrades
    
        tasquesFiltrades.forEach((tasca, index) => {
            const tascaElem = document.createElement("div");
            tascaElem.classList.add("post-it", tasca.prioritat.replace(" ", "-"));
            
            tascaElem.innerHTML = `
                <strong>${tasca.nom}</strong><br>
                Assignat a: ${tasca.assignat}<br>
                Prioritat: ${tasca.prioritat}<br>
                Data de creació: ${tasca.dataCreacio.toLocaleString()}<br>
                <button onclick="gestorTasques.eliminarTasca(${index})">Eliminar</button>
            `;
            llista.appendChild(tascaElem);
        });
    }

}

// Instancia de la clase LlistaTasques
const gestorTasques = new todoList();

// Función para agregar una tarea nueva
function afegirTasca() {
    const nom = document.getElementById("nomTasca").value;
    const assignat = document.getElementById("assignatTasca").value;
    const prioritat = document.getElementById("prioritatTasca").value;
    const novaTasca = new Item(nom, assignat, prioritat);

    gestorTasques.afegirTasca(novaTasca);
}

// Función para filtrar tareas por prioridad
function filtrarTasquesPrioritat() {
    const prioritat = document.getElementById("filtrePrioritat").value;

    // Si seleccione totes les opcions me les retorne
    if(prioritat == "totes"){
        gestorTasques.mostrarTasques();
        return;
    }

    // Si seleccion una prioritat me mostre ixes tasques soles
    const filtrades = gestorTasques.filtrarPerPrioritat(prioritat);
    gestorTasques.mostrarTasquesFiltrades(filtrades);
}

// Funcion para filtrar por nombre
function filtrarTasquesNom() {
    const assignat = document.getElementById("filtreNom").value.trim();
    const tasquesFiltrades = gestorTasques.filtrarPerAssignat(assignat);
    gestorTasques.mostrarTasquesFiltrades(tasquesFiltrades);
}

// Función para ordenar tareas por fecha o prioridad
function ordenarTasques(perPrioritat) {
    gestorTasques.ordenarTasques(perPrioritat);
}