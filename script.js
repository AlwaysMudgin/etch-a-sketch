let head = document.querySelector(".head")
let container = document.querySelector(".container")
let btn = document.createElement("button")
btn.innerText = "New Grid"
head.appendChild(btn)

btn.addEventListener("click", function() {
    let numSquares = prompt("Enter number of squares per side: ", "1-100")
    container.innerHTML = ""
    let dimension = 600 / numSquares
    for(let i = 0; i < numSquares; i++) {
        for(let j =0; j < numSquares; j++) {
        const square = document.createElement("div")
        square.classList.add("square")
        square.style.height = `${dimension}px`
        square.style.width = `${dimension}px`
        square.addEventListener("mouseover", function(e) {
            this.classList.add("squareColor")
        })
        container.appendChild(square)
        }
    }
})
