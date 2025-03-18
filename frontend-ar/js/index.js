const html= document.getElementById("htmlPage");
const body=document.getElementById("body");
const navbar=document.getElementById("navbar")
const checkbox = document.getElementById("checkbox");
const wishlist=document.getElementById("wishlist");
const cart =document.getElementById("cart");//#a47fa6
const aboutusImg=document.getElementById("about-us-img");
checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        html.setAttribute('data-bs-theme',"dark");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-dark");
    body.setAttribute("color","#e0e1dd");
    wishlist.src="../images/wishlist-darkmode.svg"
    aboutusImg.src="../images/folla5.png"
        cart.src="../images/cart-darkmode.svg"
    }else {
        html.setAttribute("data-bs-theme","light");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-light");
        body.setAttribute("color","dark");
        wishlist.src="../images/wishlist.svg"
        aboutusImg.src="../images/folla4.png"
        cart.src="../images/cart.svg"


    }
})