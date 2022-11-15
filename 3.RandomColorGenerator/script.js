const hex = document.querySelector(".hex")

const changeColor = document.querySelector(".changeColor")


    const GenerateColor = () => {
        const randomColor = Math.random().toString(16).substring(2, 8);

        document.body.style.backgroundColor = "#" + randomColor;
        hex.innerHTML = "#" + randomColor;
    }


changeColor.addEventListener("click", GenerateColor)





// let color = Math.random();

// // color = Math.random().toString(16)

// color = Math.random().toString(16).substring(2, 8)



// console.log(color)