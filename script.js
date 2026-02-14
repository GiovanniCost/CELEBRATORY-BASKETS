let search = document.getElementById('search')
let searchBtn = document.getElementById('search-btn')
const productContainer = document.getElementById('product-container');


function pageOpen() {

window.location.href = "productFilter.html";



}

document.addEventListener('DOMContentLoaded', function() {
  searchBtn = document.getElementById('search-btn')
  if(searchBtn) {
    searchBtn.addEventListener('click', pageOpen)
  }
})