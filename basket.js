import products from './product.js';
const productContainer = document.getElementById('product-container');
const search = document.getElementById('search');
let searchBtn = document.getElementById('search-btn')


function formatCurrecy(value) {
return new Intl.NumberFormat('pt-BR', {
  style: 'currency',
   currency: 'BRL',
 }).format(value);
}

function clearTheField() {
    search.value = '';
  }

export function lookingForBaskets(){
    productContainer.innerHTML = ''; // Limpa container anterior
    
    products.forEach((item) =>{
    if( item.type === search.value){
      let basketsFound = document.createElement('div')
      let basket =  `
          <img width="50" src="${item.img}"/>
          <h4>${item.name}</h4>
          <p><span>${formatCurrecy(item.price)}</span></p>
          `;
          basketsFound.innerHTML = basket 
          productContainer.appendChild(basketsFound)
         
    } 
  })
}

document.addEventListener('DOMContentLoaded', function() {
  searchBtn = document.getElementById('search-btn')
  if(searchBtn) {
    searchBtn.addEventListener('click', lookingForBaskets)
    searchBtn.addEventListener('click', clearTheField)
  }
})





