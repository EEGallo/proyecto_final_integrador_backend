export function insertCard(movie, i, movies){
    const card = createCard(movie);
    controlView(card);
    renderCard(card);
}


function createCard(movie){
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    //desestructuracion de array
    const {name, views, img} = movie;

    divCard.innerHTML = `
        <a href="./pages/movie.html">
        <img class="img-card" src=${img}/>
        <h2 class="name-card">${name}</h2>
        <p class="view-card">${views} View</p></a>`;
    return divCard;
}

function controlView(card){
    if (getViews(card) > 100){
        const trendingParagraph = document.createElement('h3');
        trendingParagraph.classList.add('more-views');
        trendingParagraph.textContent = 'Tendencia';
        card.appendChild(trendingParagraph);
    }
}


function getViews(card) {
    let paragraph = card.querySelectorAll('.view-card');
    let paragraphViews = paragraph[0];
    let contentView = paragraphViews.textContent
    let viewValue = contentView.split(' ')[0];
    return parseInt(viewValue);
}

function renderCard(card){
    const container = document.querySelector('#card-container');
    container.appendChild(card);
}