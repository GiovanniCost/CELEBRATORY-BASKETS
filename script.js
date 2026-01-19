import products from './product.js';  // ✅ Correto
let search = document.getElementById('search')
let searchBtn = document.getElementById('search-btn')
let searchFilter = document.getElementById('filter')

function searchValue(){
const inputValue = search.value
window.location = "productFilter.html" 

console.log(inputValue)
}

   searchBtn.addEventListener('click', searchValue)
  
