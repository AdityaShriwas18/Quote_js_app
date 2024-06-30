document.addEventListener('DOMContentLoaded', function() {
    const savedCards = document.querySelector('.saved-quote-list');
    loadSavedCards();

    function loadSavedCards() {
        const cards = JSON.parse(localStorage.getItem('savedCards')) || [];
        cards.forEach(card => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="card">
                    <p class="quote-content">"${card.quote}"</p>
                    <button class="deletebtn">Delete</button>
                    <h3 class="content-author">~${card.author}</h3>
                </div>`;
            savedCards.appendChild(li);
        });
    }

    function saveCardToLocalStorage(Quote, Author) {
        const cards = JSON.parse(localStorage.getItem('savedCards')) || [];

        cards.push({ Quote, Author });

        localStorage.setItem('savedCards', JSON.stringify(cards));
    }

    function addNewCard(Quote, Author) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="card">
                <p class="quote-content">"${Quote}"</p>
                <button class="deletebtn">Delete</button>
                <h3 class="content-author">~${Author}</h3>
            </div>`;
        savedCards.appendChild(li);

        saveCardToLocalStorage(Quote, Author);
    }

    addNewCard(Quote, Author);
});
