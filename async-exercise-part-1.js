let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
async function myFavNum() {
    let {data} = await axios.get(`${baseURL}/${favNumber}`)
    console.log(data)
}

myFavNum();


// 2.
let multiNumbers = [5,6,7];
async function multiNums() {
    let {data} = await axios.get(`${baseURL}/${multiNumbers}`);
    for(let num in data){
        $('body').append(`<p>${data[num]}</p>`)
    }
}

multiNums();


// 3.
let fourFacts = [];
async function getFourFacts(){
    for(let i=1; i<5; i++){
        let {data} = await axios.get(`${baseURL}/${favNumber}`);
        $('body').append(`<p>${data}</p>`);
    }
};

getFourFacts();
