import { inner } from './cards.js';

const orderBuys = {}
const buyCart = document.querySelector(".cartMainEverything");
const totalV = document.querySelector('.alignContainer')

let emptyCart = `
 <h2>Aún no tienes ninún producto</h2>
 `

buyCart.innerHTML = emptyCart

let productsBuys = []

document.addEventListener('click', function (event) {
    if (event.target.classList.contains("button")) {
        const idClothes = event.target.dataset.iduser;

        let currentClothes = null;
        for (let i = 0; i < inner.length; i++) {
            if (inner[i].id === parseInt(idClothes)) {
                currentClothes = inner[i];
            }
        }

        if (orderBuys[currentClothes.id]) {
            orderBuys[currentClothes.id].amount++;
        } else {
            orderBuys[currentClothes.id] = currentClothes;
            orderBuys[currentClothes.id].amount = 1;
        }

        const order = Object.values(orderBuys)
        const amount = document.querySelector('#amount');
        amount.textContent = Object.entries(orderBuys).length;

        let array = '';

        
        order.forEach(element => {
            array += `<div class="buysContent">
            <div class="imgCartBuy">
            <img src="${element.img}" alt="">
            </div>
            <div class="infoClothes">
            <div class="principalProductInfo">
            <div class="clothesName">${element.type}</div>
            <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
            <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
            </div>
            <div class="buttonsCart">
            <div data-id="${element.id}" class="operator remove">-</div>
            <div class="quantify">${element.amount} units</div>
            <div data-id="${element.id}" class="operator add">+</div>
            <i data-id="${element.id}" class=" trash fi fi-rr-trash"></i>
            </div>
            </div>
            </div>`
        });
        
        productsBuys = order;
       


        console.log(event)
        buyCart.innerHTML = array

    };

    if (event.target.classList.contains("add")) {
        let elementFinded = productsBuys.find((elementErase) =>
            elementErase.id == event.target.dataset.id
        )

        console.log(elementFinded.amount++)
        let array = '';

        productsBuys.forEach(element => {
            array += `<div class="buysContent">
               <div class="imgCartBuy">
               <img src="${element.img}" alt="">
               </div>
               <div class="infoClothes">
                   <div class="principalProductInfo">
                       <div class="clothesName">${element.type}</div>
                       <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
                       <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
                   </div>
                   <div class="buttonsCart">
                       <div data-id="${element.id}" class="operator remove">-</div>
                       <div class="quantify">${element.amount} units</div>
                       <div data-id="${element.id}" class="operator add">+</div>
                       <i data-id="${element.id}" class=" trash fi fi-rr-trash"></i>
                   </div>
               </div>
           </div>`
        });

        buyCart.innerHTML = array
    }

    if (event.target.classList.contains("remove")) {
        let elementFinded = productsBuys.find((elementErase) =>
            elementErase.id == event.target.dataset.id)

        if (elementFinded.amount == 0) {
            console.log('hola')
            productsBuys.splice(productsBuys.findIndex((elementErase) =>
                elementErase.id == event.target.dataset.id
            ),1) }

            console.log(elementFinded.amount--)
        let array = '';

        productsBuys.forEach(element => {
            array += `<div class="buysContent">
               <div class="imgCartBuy">
               <img src="${element.img}" alt="">
               </div>
               <div class="infoClothes">
                   <div class="principalProductInfo">
                       <div class="clothesName">${element.type}</div>
                       <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
                       <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
                   </div>
                   <div class="buttonsCart">
                       <div data-id="${element.id}" class="operator remove">-</div>
                       <div class="quantify">${element.amount} units</div>
                       <div data-id="${element.id}" class="operator add">+</div>
                       <i data-id="${element.id}" class=" trash fi fi-rr-trash"></i>
                   </div>
               </div>
           </div>`
        });

        buyCart.innerHTML = array
    }

    function totalValue() {
        let total = 0;
        productsBuys.forEach((valueTotal) => total += (valueTotal.price * valueTotal.amount))
        
        let dataTotalAmount = `<div id="totalPay" class="total">$${total}</div>
        <button>Checkout</button>`
        
        totalV.innerHTML = dataTotalAmount
        console.log(dataTotalAmount)
    }
    
    
    if (event.target.classList.contains("trash")){
        productsBuys.splice(productsBuys.findIndex((elementErase) =>
        elementErase.id == event.target.dataset.id
        ),1)

        let array = '';

        productsBuys.forEach(element => {
            array += `<div class="buysContent">
               <div class="imgCartBuy">
               <img src="${element.img}" alt="">
               </div>
               <div class="infoClothes">
                   <div class="principalProductInfo">
                       <div class="clothesName">${element.type}</div>
                       <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
                       <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
                   </div>
                   <div class="buttonsCart">
                       <div data-id="${element.id}" class="operator remove">-</div>
                       <div class="quantify">${element.amount} units</div>
                       <div data-id="${element.id}" class="operator add">+</div>
                       <i data-id="${element.id}" class=" trash fi fi-rr-trash"></i>
                   </div>
               </div>
           </div>`
        });

        buyCart.innerHTML = array
    }

    totalValue();
});


export { orderBuys }