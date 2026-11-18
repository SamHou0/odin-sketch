const container = document.getElementById("container");
const regenerateButton = document.getElementById("regen-button");
function generateGrid(count) {
    container.replaceChildren();
    for (let i = 0; i < count; i++) {
        let line = document.createElement("div");
        line.setAttribute("class", "grid-line");
        container.appendChild(line);
        for (let j = 0; j < count; j++) {
            let element = document.createElement("div");
            element.setAttribute("class", "grid-item");
            element.addEventListener("mouseenter", function () {
                this.classList.add("highlight");
            })
            element.addEventListener("mouseleave", function () {
                this.classList.remove("class", "highlight");
            })
            line.appendChild(element);
        }
    }
}
generateGrid(64);
regenerateButton.addEventListener("click", function () {
    const input = prompt("Enter a value to generate grid.");
    if (!isNaN(+input)&&(+input<=100)&&(input>0))
        generateGrid(+input);
})