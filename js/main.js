const btn = document.getElementById("btn");
const gridContainer = document.getElementById("grid-cont");


btn.addEventListener("click", function() {
    for(let i=0; i<100; i++){
        const newCell = document.createElement("div");
        newCell.classList.add("cella");
        newCell.style.width = "calc(100% / 10 )";

        newCell.innerHTML= i;
        gridContainer.append(newCell);
    }

})