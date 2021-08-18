const sum: HTMLElement = document.querySelector('.sum')
const minus: HTMLElement = document.querySelector('.minus')
const multiply: HTMLElement = document.querySelector('.multiply')
const divide: HTMLElement = document.querySelector('.divide')
const count: HTMLElement = document.querySelector('.calculator__count')
const deletePicture: HTMLElement = document.querySelector('.calculator__digit-picture')
const equal: HTMLElement = document.querySelector('.calculator__equal')

const digits: NodeListOf<Element> = document.querySelectorAll('.calculator__digit')
let ourNumber: number = 0;
let sign: string = '';
let secondNumber: number;

sum.addEventListener("click", function () {
    sign = 'sum'
})
minus.addEventListener("click", function () {
    sign = 'minus'
})
multiply.addEventListener("click", function () {
    sign = 'multiply'
})
divide.addEventListener("click", function () {
    sign = 'divide'
})

equal.addEventListener('click', function (){
    
})

digits.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (!count.innerHTML) {
            debugger;
            count.innerHTML = elem.innerHTML;
        } else {
            if (count.innerHTML && sign === '') {
                count.innerHTML += elem.innerHTML;
            }
            if (count.innerHTML && sign !== '') {
                ourNumber = Number(count.innerHTML);
                switch (sign) {
                    case 'sum':
                        ourNumber += Number(elem.innerHTML);
                        count.innerText = String(ourNumber);
                        sign = '';
                        break;
                    case 'minus':
                        ourNumber -= Number(elem.innerHTML);
                        count.innerText = String(ourNumber);
                        sign = '';
                        break;
                    case 'multiply':
                        ourNumber *= Number(elem.innerHTML);
                        count.innerText = String(ourNumber);
                        sign = '';
                        break;
                    case 'divide':
                        ourNumber /= Number(elem.innerHTML);
                        count.innerText = String(ourNumber);
                        sign = '';
                        break;
                }
            }
        }
        console.log(sign)
    })
})

document.addEventListener('click', function (){
    switch (sign) {
        case 'minus':
            minus.style.backgroundColor = 'red'
            divide.style.backgroundColor = 'white'
            sum.style.backgroundColor = 'white'
            multiply.style.backgroundColor = 'white'
            break
        case 'sum':
            sum.style.backgroundColor = 'red'
            divide.style.backgroundColor = 'white'
            multiply.style.backgroundColor = 'white'
            minus.style.backgroundColor = 'white'
            break
        case 'multiply':
            multiply.style.backgroundColor = 'red'
            divide.style.backgroundColor = 'white'
            sum.style.backgroundColor = 'white'
            minus.style.backgroundColor = 'white'
            break
        case 'divide':
            divide.style.backgroundColor = 'red'
            multiply.style.backgroundColor = 'white'
            sum.style.backgroundColor = 'white'
            minus.style.backgroundColor = 'white'
            break
        case '':
            divide.style.backgroundColor = 'white'
            sum.style.backgroundColor = 'white'
            minus.style.backgroundColor = 'white'
            multiply.style.backgroundColor = 'white'
            break
    }
})
deletePicture.addEventListener('click', function (){
    count.innerHTML = count.innerHTML.split('').slice(0, count.innerHTML.length - 1).join('')
})