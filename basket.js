
import products from './product.js';
const productContainer = document.getElementById('product-container')

products.forEach ((product) =>{
    const productList = document.createElement('div')
    productList.innerHTML = `
              <img width="50" src="${product.img}"/>
              <h4>${product.name}</h4>
              <p>R$ <span>${product.price}</span></p>  
    `
    productContainer.appendChild(productList)
    console.log(productContainer)
  });