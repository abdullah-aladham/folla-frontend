const html= document.getElementById("htmlPage");
const body=document.getElementById("body");
const navbar=document.getElementById("navbar")
const checkbox = document.getElementById("checkbox");
const wishlist=document.getElementById("wishlist");
const cart =document.getElementById("cart");//#a47fa6
const aboutusImg=document.getElementById("about-us-img");
const btn=document.getElementsByClassName("button");
const wishbtn=document.getElementById("add-to-wish-btn");
const wishToast=document.getElementById("addtowish");
checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        //  localStorage.setItem('data-bs-theme',"dark");
        //  localStorage.setItem(checkbox,checkbox.checked)
        html.setAttribute('data-bs-theme',"dark");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-dark");
    body.setAttribute("color","#e0e1dd");
    wishlist.src="./images/wishlist-darkmode(1).svg"
    // aboutusImg.src="./images/folla5.png"
        cart.content="./images/cart-darkmode(1).svg"
        // localStorage.setItem('data-bs-theme','dark')
        btn.setAttribute("background-color","#e0e1dd");


    }else {
                 localStorage.setItem('data-bs-theme',"light") 
        //  localStorage.setItem(checkbox,!checkbox.checked)

        html.setAttribute("data-bs-theme","light");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-light");
        // body.setAttribute("color","dark");
        wishlist.src="./images/wishlist.svg"
        // aboutusImg.src="./images/folla4.png"
        cart.src="./images/cart.svg"
        // localStorage.setItem('data-bs-theme','light')



    }
})

if(wishbtn){
    const toastBootstrap=bootstrap.Toast.getOrCreateInstance(wishToast);
    wishbtn.addEventListener('click',()=>{
        toastBootstrap.show();
    })
}