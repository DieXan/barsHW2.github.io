const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")

const funFirst = () =>{
    console.log("Первая кнопка is work")
}

const funSecond = () =>{
    console.log("Вторая кнопка is work")
}

const funThird = () =>{
    console.log("Третья кнопка is work")
}

const funFourth = () =>{
    console.log("Четвертая кнопка is work")
}


button1.addEventListener("click", funFirst);
button2.addEventListener("click", funSecond);
button3.addEventListener("click", funThird);
button4.addEventListener("click", funFourth);