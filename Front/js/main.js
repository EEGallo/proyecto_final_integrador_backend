import { insertCard } from "./funciones.js";


let movies;

async function loadData() {
    try {
        const response = await fetch('./data/data.json'); // Ajuste de la ruta
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        movies = await response.json();
        showOnScreen(movies);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

loadData();

function showOnScreen(movies) {
    movies.forEach(insertCard);
}