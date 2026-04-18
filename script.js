let title=document.getElementById("title");
let content=document.getElementById("content");
let btn=document.getElementById("btn");
let posts= document.getElementById("posts");


btn.addEventListener("click",()=>{
    if(!title.value || !content.value){
    alert("fill up first!")
    }
    else{
    let div= document.createElement('div');
    div.innerHTML=`<h2>${title.value}</h2>
                   <p>${content.value}</p>`
    posts.appendChild(div);}
    title.value="";
    content.value="";
    
});