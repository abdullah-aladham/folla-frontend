const html= document.getElementById("htmlPage");
const body=document.getElementById("body");
const navbar=document.getElementById("navbar")
const checkbox = document.getElementById("checkbox");
const chatContainer=document.getElementById("chat-container")

checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        html.setAttribute('data-bs-theme',"dark");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-dark");
    body.setAttribute("color","#e0e1dd");
    chatContainer.setAttribute("color","d590af")

        
    }else {
        html.setAttribute("data-bs-theme","light");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-light");
        body.setAttribute("color","dark");

    }
})