const container = document.getElementById("container");
for(let i=0;i<16;i++){
    let line = document.createElement("div");
    line.setAttribute("class","grid-line");
    container.appendChild(line);
    for(let i=0;i<16;i++){
        let element = document.createElement("div");
        element.setAttribute("class","grid-item");
        element.addEventListener("mouseenter",function(){
            this.classList.add("highlight");
        })
        element.addEventListener("mouseleave",function(){
            this.classList.remove("class","highlight");
        })
        line.appendChild(element);
    }
}