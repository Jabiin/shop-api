
const api = 'https://fakestoreapi.com/products';

async function getShopItems() {
   const data = await fetch(api);
   const result = await data.json();
   let displayResult = '';
   for await (let res of result) {
      displayResult += `
         <div class="card">
            <h1 class="title">${res.title}</h1>
            <img src=${res.image} alt="" class="img">
            <p class="description">Description: ${res.description}</p>
            <p class="category">Category: ${res.category}</p>
            <p class="price">Price: ${res.price}</p>
         </div>`;
      document.getElementById('cards').innerHTML = displayResult;
   }
}

getShopItems();

function search() {
   const searchBox = document.getElementById('search-item').value.toUpperCase();
   const products = document.querySelectorAll('.card');
   for (let i = 0; i < products.length; i++) {
      let productName = products[i].getElementsByTagName('h1')[0];
      if (productName) {
         let textValue = productName.textContent || productName.innerHTML;
         if (textValue.toUpperCase().indexOf(searchBox) > -1) {
            products[i].style.display = "";
         } else {
            products[i].style.display = "none";
         }
      }
   }
}

document.getElementById('search-item').addEventListener('input', search);

const toggle = document.querySelector('.theme-switch input[type="checkbox"]');

const icon = document.querySelector('.icon');

var storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if(storedTheme) {
 document.documentElement.setAttribute('data-theme', storedTheme)
}

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    icon.setAttribute("name", "sunny");

    if (currentTheme === "light") {
        targetTheme = "dark";
        icon.setAttribute("name", "moon");
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};