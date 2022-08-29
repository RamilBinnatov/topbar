let showTopbar = document.querySelector(".show-topbar");
let hideTopbar = document.querySelector(".close-topbar");

let topbar = document.querySelector(".topbar");

let icons = document.querySelectorAll(".topbar .icons i");

showTopbar.addEventListener("click",function(){

    if(topbar.classList.contains("hide")){
        topbar.classList.remove("hide")
    }

    for (const item of icons) {
        item.classList.remove("d-none")
    }

    this.classList.add("d-none")

})

hideTopbar.addEventListener("click",function(){
    hideTop(this)
})

let hideTop = (elem) =>{
    if(!topbar.classList.contains("hide")){
        topbar.classList.add("hide")
    }

    for (const item of icons) {
        item.classList.remove("d-none")
    }

    elem.classList.add("d-none")
}

console.log("salam")


let input = document.querySelector(".text-input");


input.addEventListener("keyup", function (e) {
    
    if (e.keyCode == 13) {
        e.target.nextElementSibling.innerHTML = "";
        for (let i = 1; i <= e.target.value; i++) {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.innerText= i;

            e.target.nextElementSibling.append(li);

            let icon =document.createElement("i");
            icon.classList.add("fa-solid");
            icon.classList.add("fa-trash-can")
            icon.classList.add("my-icon")
            li.append(icon);
            
            icon.onclick = function(){
                this.parentNode.remove();
            }
        }

        e.target.value = "";
    }
})



