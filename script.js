let card = document.querySelector('.quote-list')
let savedCard = document.querySelector('.saved-quote-list')


async function getRandomQuote(){
    
    for (let i = 0; i < 50; i++) {
        try{
            const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
            const data = await response.json()
            var Author = data.data.author;
            var Quote = data.data.content;

            // let savebtn = document.createElement('button')
            // savebtn.classList.add('savebtn')

            let content  = document.createElement('li')
            content.innerHTML = `<div class="card">
                <p class="quote-content">" ${Quote} "</p>
                <h3 class="content-author" >~${Author}</h3>
                <button class="savebtn" >Save</button>
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
                <p class="quote-content">"${card.Quote}"</p>
                <button class="deletebtn">Delete</button>
                <h3 class="content-author">~${card.Author}</h3>
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
        console.log("save clicked");
        saveCardToLocalStorage(Quote, Author);
        savedCards.appendChild(li);

})


document.addEventListener('DOMContentLoaded', function() {
    loadSavedCards();
});