const html= document.getElementById("htmlPage");
const body=document.getElementById("body");
const navbar=document.getElementById("navbar")
const checkbox = document.getElementById("checkbox");
const wishlist=document.getElementById("wishlist");
const cart =document.getElementById("cart");//#a47fa6
checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        html.setAttribute('data-bs-theme',"dark");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-dark");
    body.setAttribute("color","#e0e1dd");
    wishlist.setAttribute("filter"," invert(100%) sepia(1%) saturate(2253%) hue-rotate(16deg) brightness(93%) contrast(90%);")

        
    }else {
        html.setAttribute("data-bs-theme","light");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-light");
        body.setAttribute("color","dark");

    }
})