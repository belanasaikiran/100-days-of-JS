const number = document.querySelector(".count") ;


const button = document.querySelector(".random-button")



// var random = Math.floor(Math.random() * 10)




const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    number.innerHTML = randomNumber;
}



//  to get number 10






button.addEventListener("click", generateNumber)






