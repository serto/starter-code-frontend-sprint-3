// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [{
            id: 1,
            name: 'cooking oil',
            price: 10.5,
            type: 'grocery'
        },
        {
            id: 2,
            name: 'Pasta',
            price: 6.25,
            type: 'grocery'
        },
        {
            id: 3,
            name: 'Instant cupcake mixture',
            price: 5,
            type: 'grocery'
        },
        {
            id: 4,
            name: 'All-in-one',
            price: 260,
            type: 'beauty'
        },
        {
            id: 5,
            name: 'Zero Make-up Kit',
            price: 20.5,
            type: 'beauty'
        },
        {
            id: 6,
            name: 'Lip Tints',
            price: 12.75,
            type: 'beauty'
        },
        {
            id: 7,
            name: 'Lawn Dress',
            price: 15,
            type: 'clothes'
        },
        {
            id: 8,
            name: 'Lawn-Chiffon Combo',
            price: 19.99,
            type: 'clothes'
        },
        {
            id: 9,
            name: 'Toddler Frock',
            price: 9.99,
            type: 'clothes'
        }
    ]
    // Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    const lengthElement = products.length;

    for (let i = 0; i < lengthElement; i++) {

        if (id === products[i].id) {

            cartList.push(products[i]);
            break;
        }
    }

    console.log('cartList : ', cartList);
}

// Exercise 2
function cleanCart() {
    const lengthCartList = cartList.length;
    if (lengthCartList != 0) {
        for (let i = 0; i < lengthCartList; i++) {
            cartList.pop();
        }
    }
    console.log('cartList : ', cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    for (let x in cart) {
        if (cart[x].subtotalWithDiscount) {
            total += cart[x].subtotalWithDiscount
        } else {
            total += (cart[x].price * cart[x].quantity);
        }
    }
    console.log('total cart : ', total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.


    const lengthCartList = cartList.length;

    for (let i = 0; i < lengthCartList; i++) {

        let lengthCart = cart.length;
        let newElement = true;

        if (lengthCart == 0) {
            cart.push(cartList[0]);
            cart[0].quantity = 1;
        } else {
            for (let j = 0; j < lengthCart; j++) {

                if (cart[j].id == cartList[i].id) {
                    cart[j].quantity++;
                    newElement = false;
                }
            }
            if (newElement == true) {
                cart.push(cartList[i]);
                cart[lengthCart].quantity = 1;
            }
        }

    }

    console.log('cart: ', cart);

    applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    const lengthCart = cart.length;

    for (let i = 0; i < lengthCart; i++) {

        if ((cart[i].name == 'cooking oil') && (cart[i].quantity >= 3)) {
            cart[i].price = 10;
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        } else if (cart[i].name == 'cooking oil') {
            cart[i].price = 10.5;
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        }

        if ((cart[i].name == 'Instant cupcake mixture') && (cart[i].quantity >= 10)) {
            if (cart[i].price == 5) {
                cart[i].price *= (2 / 3);
            }
            cart[i].subtotalWithDiscount = Math.round(cart[i].price * cart[i].quantity * 100) / 100;
        } else if (cart[i].name == 'Instant cupcake mixture') {
            cart[i].price = 5;
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        }
    }

    console.log('cart with promos : ', cart);

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    const lengthElement = products.length;

    for (let i = 0; i < lengthElement; i++) {

        if (id === products[i].id) {

            const lengthCart = cart.length;

            if (lengthCart == 0) {
                cart.push(products[i]);
                cart[0].quantity = 1;
            } else {
                let newElement = true;

                for (let j = 0; j < lengthCart; j++) {

                    if (cart[j].id == products[i].id) {
                        cart[j].quantity++;
                        newElement = false;
                    }

                }
                if (newElement == true) {
                    cart.push(products[i]);
                    cart[lengthCart].quantity = 1;
                }
            }
        }
    }

    console.log('cart new: ', cart);
    applyPromotionsCart();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    const lengthCart = cart.length;

    if (lengthCart > 0) {

        for (let i = 0; i < lengthCart; i++) {

            if (cart[i].id == id) {

                (cart[i].quantity > 1) ? cart[i].quantity--: cart.splice(i, 1);
                break;
            }

        }

    }
    console.log('cart remove : ', cart);
    applyPromotionsCart();
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    const lengthCart = cart.length;
    var textEmptyCart = document.getElementById('textEmptyCart');
    console.log(textEmptyCart);

    document.getElementById("listCar").innerHTML = '';
    var totalCartText = document.getElementById("totalCart");
    totalCartText.innerHTML = '';

    if (lengthCart > 0) {
        for (let i = 0; i < lengthCart; i++) {
            var price;
            if (cart[i].subtotalWithDiscount) {
                price = cart[i].subtotalWithDiscount
            } else {
                price = (cart[i].price * cart[i].quantity);
            }

            var string = cart[i].name + " - quantity : " + cart[i].quantity + " - price : " + price + "$";

            var node = document.createElement("LI");
            var textnode = document.createTextNode(string);
            node.appendChild(textnode);
            document.getElementById("listCar").appendChild(node);

            calculateTotal();

            totalCartText.innerHTML = "Total Cart : " + total.toFixed(2) + "$";

            textEmptyCart.classList.add('hide');
        }

    } else {
        textEmptyCart.classList.remove('hide');
    }
}