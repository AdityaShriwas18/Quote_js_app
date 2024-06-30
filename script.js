let card = document.querySelector('.quote-list')
let savedcard = document.querySelector('.saved-quote-list')


async function getRandomQuote(){
    
    for (let i = 0; i < 50; i++) {
        try{
            const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
            const data = await response.json()
            let Author = data.data.author;
            let Quote = data.data.content;
            console.log(data.data.content);
            console.log(data.data.author);
        
            let content  = document.createElement('li')
            content.innerHTML = `<div class="card">
                <p class="quote-content">" ${Quote} "</p>
                <button class="savebtn" >Save</button>
                <h3 class="content-author" >~${Author}</h3>
              </div>`
        
            card.appendChild(content)
    
        } catch(error){
            console.log(error);
        }
        
    }


}

getRandomQuote()

const hamburger = document.getElementById('hamburger');
        const navbar = document.getElementById('navbar');

        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('open');
            hamburger.classList.toggle('open');
});



const savebtn = document.querySelector('.savebtn')


function saveCardToLocalStorage(Quote, Author) {
    const cards = JSON.parse(localStorage.getItem('savedCards')) || [];

    cards.push({ Quote, Author });

    localStorage.setItem('savedCards', JSON.stringify(cards));
}


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


savebtn.addEventListener('click',()=>{
    const li = document.createElement('li');
        li.innerHTML = `
            <div class="card">
                <p class="quote-content">"${Quote}"</p>
                <button class="deletebtn">Delete</button>
                <h3 class="content-author">~${Author}</h3>
            </div>`;
        saveCardToLocalStorage(Quote, Author);
        savedCards.appendChild(li);

})


document.addEventListener('DOMContentLoaded', function() {
    loadSavedCards();
});
