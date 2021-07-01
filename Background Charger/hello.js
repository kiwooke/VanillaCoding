function hexGenerator() {
        const hexNumbers = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
    ]
    let result = "#"
    for(let i=0; i<6; i++){
        const randomIndex = Math.floor(Math.random()*hexNumbers.length);
        result +=  hexNumbers[randomIndex];
    }
    
    return result;
}



const $span= document.querySelector(".hexcolor");
const $button= document.querySelector(".btn");
const $body = document.querySelector("body")
let colorValue = $span.innerText = hexGenerator();



function paintBg(e) {
    e.preventDefault();

    $span.innerText = hexGenerator();
    $body.style.backgroundColor = hexGenerator();
    // span 값과 body의 background-color 값이 서로 다른 hexGenerator()로 생성됨....... 어떻게 값을 일치시킬것인가?
}

$button.addEventListener("click", paintBg);
