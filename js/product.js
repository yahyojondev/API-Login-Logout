const API_URL = "https://api.escuelajs.co/api/v1/products"
const productTitle = document.querySelector(".product__title")
const notFound = document.querySelector(".not__found")

async function fetchSingleUser(api){
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")
   let data =await fetch(`${api}/${id}`)
   data
   .json()
   .then(res=>{
    if(res.message){
        return notFound.style.display="flex"
    }
    singleUser(res)})
   .catch(res=>console.log("err>>>",res))
}
fetchSingleUser(API_URL)

function singleUser(product){
   productTitle.setAttribute= ("value",product.title)
}