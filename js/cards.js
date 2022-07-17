const cards = document.querySelector(".clothesCards");

const inner = [
    {   
        id: 1,
        price: 14.00,
        stock: 9,
        type: "Hoodies",
        img: "./images/featured1.png"
    },

    {   
        id: 2,
        price: 24.00,
        stock: 15,
        type: "Shirts",
        img: "./images/featured2.png"
    },

    {   
        id: 3,
        price: 54.00,
        stock: 20,
        type: "Sweartshirts",
        img: "./images/featured3.png"
    }
];

let str = '';

inner.forEach(element => {
    str += `<div class="cardFull">
    <div class="button" data-idUser='${element.id}'>+</div>
                    <div class="card">
                    <img src="${element.img}" alt="" srcset="">
                </div>
                <div class="cardFooter">
                    <div class="priceContainer">
                        <div class="price">$${element.price}.00</div>
                        <div class="priceSeparator"></div>
                        <div class="stock">stock: ${element.stock}</div>
                    </div>
                    <div class="typeClothes">${element.type}</div>
                </div>
        </div>`;
});

cards.innerHTML = str;

export {inner}