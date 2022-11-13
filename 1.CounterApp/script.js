const count = document.querySelector(".count");

// const add = document.querySelector(".add");

// const resetCount = document.querySelector(".reset");

// const sub = document.querySelector(".subtract");

const containerDiv = document.querySelector(".counter-div")


const buttons = document.querySelector(".buttons");


buttons.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add")){
        console.log("Add")

        count.innerHTML++;
        setColor();
    }


    if(e.target.classList.contains("subtract")){
        console.log("subtract")
        count.innerHTML--;
        setColor();

    }

    if(e.target.classList.contains("reset")){
        console.log("reset");
        count.innerHTML = 0;
        setColor();

    }
})

//  Old Format

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });

// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });




function setColor() {
    if(count.innerHTML > 0){
        count.style.color = "yellow";
        containerDiv.style.backgroundColor = "green";
    } else if(count.innerHTML < 0){
        count.style.color = "white"
        containerDiv.style.backgroundColor = "orangered";
    } else{
        count.style.color = "white"
        containerDiv.style.backgroundColor = "";

    }
}