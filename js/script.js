
// const number = 13;
// const verdict = number % 2 === 0 ? "even" : "odd";
// console.log(verdict);
//---

// const logMyAge = () => {
//     console.log("My age is 43");
// }
// logMyAge();
//---

// const greet = (who) => {
//     console.log('Hello,' + who + ' !')
// }
// greet('world');
//---

// const redBox = document.getElementById('red-box');
// console.log(redBox);
// //---

// const greenBox = document.querySelector('.box--green')
// console.log(greenBox);
// //---

// const boxes = document.querySelectorAll('.box')
// console.log(boxes);
// //---

// const getBoxByColor = (color) => {
//     return document.querySelector('.box--'+color);
// }
// const box = getBoxByColor('green');
// console.log(box);
// //---

// let brands = [];
// const cars = document.querySelectorAll('ul.cars li');
// // for (let i = 1; i < cars.length; i++) {
// //     brands[i] = cars[i].innerText;
// // }
// cars.forEach((element) => {
//     brands.push(element.innerText);
// })
// console.log(brands);
// //---

// let brands = [];
// const cars = document.querySelectorAll('ul.cars li');
// for (let i = 0; i < cars.length; i++) {
//     // if (i <3){
//     //     brands.push(cars[i].innerText);
//     // }
//     //---or could be written:
//     if (i === 3) {
//         break;
//     }
//     brands.push(cars[i].innerText);
// }
// console.log(brands);
// //---

// let brands = [];
// const cars = document.querySelectorAll('ul.cars li');
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].innerText == "Ford") {
//         continue;
//     }
//     brands.push(cars[i].innerText);
// }
// console.log(brands);
// //---

const cart = {
    total: {
        amount: 91.6,
        currency: 'CZK'
    },
    items: [
        {
            name: 'Apples',
            amount: '2kg',
            price: 62.6
        },
        {
            name: 'Cinnamon',
            amount: 1,
            price: 29
        }
    ]
}

let cart_stringified = JSON.stringify(cart);
const shopping_cart = JSON.parse(cart_stringified);
// console.log(shopping_cart);

// // let cheapest = null;
// // shopping_cart.items.forEach(item => {
// //     if (cheapest === null || item.price < cheapest.price) {
// //         cheapest = item;
// //     }
// //     console.log(cheapest);
// // });

const btnRemoveCheapest = document.querySelector('.remove-cheapest');

btnRemoveCheapest.addEventListener('click', event => {
    let cheapest = null;
    shopping_cart.items.forEach((item, index) => {
        if (cheapest === null || item.price < cheapest.price) {
            cheapest = item;
            //cheapest_index = index; ... easier than with indexOf
        }
        // console.log(cheapest);
    });
    let indexCheapest = shopping_cart.items.indexOf(cheapest)
    // console.log(indexCheapest);
    shopping_cart.items.splice([indexCheapest],);
    // console.log(shopping_cart);
    displayItems(shopping_cart);
})
//---

const displayItems = (object) => {
    const ulItems = document.querySelector('.items');
    ulItems.innerHTML = '';


    object.items.forEach(element => {
        // ulItems.innerHTML += '<li class="items__item">'+element.name+' '+ element.price+'</li>';
        const li = document.createElement('li');
        ulItems.appendChild(li);
        li.innerText = element.name + " | " + element.amount + " | " + element.price;
        // li.className = 'items__item';
        li.classList.add('items__item');
    });
    console.log(ulItems);
}
displayItems(shopping_cart);

const addItem = document.querySelector('.add-item');
addItem.addEventListener('click', event => {
    const itemInputName = document.querySelector('.item-name-input').value;
    const itemInputAmount = document.querySelector('.item-amount-input').value;
    const itemInputPrice = document.querySelector('.item-price-input').value;


    if (itemInputName !== "" && itemInputAmount !== "" && itemInputPrice !== "") {
        newItem = {
            name: itemInputName,
            amount: itemInputAmount,
            price: itemInputPrice
        };
    }

    shopping_cart.items.push(newItem);
    displayItems(shopping_cart);
    console.log(shopping_cart);
    document.querySelector('.item-name-input').value = "";
    document.querySelector('.item-amount-input').value = "";
    document.querySelector('.item-price-input').value = "";

})






