const btn = document.getElementById("btn");
let gridContainer = document.getElementById("grid-cont");


btn.addEventListener("click", function() {
   
    for(let i=0; i<100; i++){
        const newCell = document.createElement("div");
        newCell.classList.add("cella");
        newCell.style.width = "calc(100% / 10 )";

        newCell.innerHTML = i+1;
        gridContainer.append(newCell);
        newCell.addEventListener("click", function() {
            const numeroDentro = parseInt( this.textContent );
            newCell.classList.toggle("azzurro");
            console.log(numeroDentro)
        })
    }

})