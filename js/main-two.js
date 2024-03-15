const API_URL = "https://api.escuelajs.co/api/v1/products"
const wrapper = document.querySelector(".wrapper__card")
const loading = document.querySelector(".loading")

async function fetchData(api){
    let data = await fetch(api)
    data
    .json()
    .then(res=>createCard(res))
    .catch(err=>console.log(err))
    .finally(()=>{
        loading.style.display="none"
    })
}
fetchData(API_URL)

function createCard(data){
    data.forEach(({images,price,title,id})=>{
let card = document.createElement("div")
// console.log(product);
card.classList.add("card")
card.innerHTML =`
<img src=${images} alt="">
            <h2>${price}</h2>
            <p>${title}</p>
`
card.addEventListener("click",()=>singleRoute(id))
wrapper.appendChild(card)
    })
}
function singleRoute(id){
  window.open(`/pages/product.html?id=${id}`,"_self")
}