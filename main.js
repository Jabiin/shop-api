
const api = 'https://fakestoreapi.com/products';


async function getShopItems(){
    const data = await fetch(api)
    const result = await data.json()
    try {
        getShopItems()
    } catch (e) {
        console.error(e)
    }
    let displayResult = '';
   for await(let res of result){
    displayResult += `
    <div class="card">
    <h1 class="title">${res.title}</h1>
    <img src=${res.image} alt="" class="img">
    <p class="description">Description: ${res.description}</p>
    <p class="catagory">Catebory: ${res.category}</p>
    <p class="price">Price: ${res.price}</p>
    <button>Add to the Cart </button>
    </div>`
    
    document.getElementById('cards').innerHTML = displayResult;
   }  
}

getShopItems()

