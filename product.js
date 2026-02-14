const products = [
    {name:"Cesta Personalizada Stich", price:120, type:"childrens",img:"assets/stich.jpeg" },
    {name:"Cesta Personalizada Angel", price:120, type:"childrens",img:"assets/angel.jpeg" },
    {name:"Cesta Personaliza Carneiro", price:120, type:"childrens",img:"assets/carneiro.jpeg" },
    {name:"Cesta Personaliza Espada", price:150, type:"gamer",img:"assets/espada.jpeg" },
    {name:"Cesta Personaliza Urso", price:150, type:"christmas",img:"assets/urso-natal.jpeg" },
    {name:"Cesta Personaliza Infantil natalina", price:150, type:"christmas",img:"assets/cesta.jpeg" },
    {name:"Cesta Personaliza Lontra", price:180, type:"affair",img:"assets/lontra.jpeg" },
    {name:"Cesta Personaliza Princesas", price:180, type:"christmas",img:"assets/cesta3.jpeg" },
];

export default products


/*export function filterBasket(){
  const listOfBaskets = products.filter((product) =>{
    if(product.type.toLowerCase() === search.value.toLowerCase()){
      const listOfBaskets = document.createElement('div');
      listOfBaskets.innerHTML = `
      <img width="50" src="${product.img}"/>
      <h4>${product.name}</h4>
      <p><span>${formatCurrecy(product.price)}</span></p>
      `;
      productContainer.appendChild(listOfBaskets);
      console.log(listOfBaskets)
      
    } else{
      console.log("Digite um valor Valido")
    }
  })
}*/