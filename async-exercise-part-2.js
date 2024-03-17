
let baseURL = 'https://deckofcardsapi.com/api/deck';

// 1.
async function newCard(){
    let {data} = await axios.get(`${baseURL}/new/draw/`);
    let {suit, value} = data.cards[0];
    console.log(`${value} of ${suit}`)
};
newCard();

// // 2.

async function twoCard(){
    let {data: c1} = await axios.get(`${baseURL}/new/draw/`);
    console.log(`${c1.cards[0].value} of ${c1.cards[0].suit}`);
    let deckId = c1.deck_id
    let {data: c2} = await axios.get(`${baseURL}/${deckId}/draw/?count=1`)
    console.log(`${c2.cards[0].value} of ${c2.cards[0].suit}`);
};
twoCard();

// 3. 

async function cardStack(){
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let {data: c1} = await axios.get(`${baseURL}/new/shuffle`);
    let deckId = c1.deck_id;
    
    $btn.show().on('click', async function(){
        let {data: c2} = await axios.get(`${baseURL}/${deckId}/draw/?count=1`)
        let cardSrc = c2.cards[0].image;
        $cardArea.append( $('<img>', {src: cardSrc}));
        if (c2.remaining === 0){
            $btn.remove()
        }
    });
};

cardStack();