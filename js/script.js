//   1. Business Logic


//Constructor for Pizza
function Pizza(id, name, size, image, price, crust, topping) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.image = image
    this.price = price;
    this.crust = crust;
    this.topping = topping;
}


//Prototype for determining SIze
Pizza.prototype.setSize = function () {
    checkSize()
};

//Prototype for determining Crust
Pizza.prototype.setCrust = function () {
    checkCrust()

};

//Prototype for determining Toppings
Pizza.prototype.SetToppings = function () {
    checkTopping()
}

//Prototype for determining Price
Pizza.prototype.pizzaPrice = function () {

}


//Creating the pizza Objects
const availablePizzas = [
    new Pizza(1, "Pepperoni", 'large', './images/pizza.png', 1100),
    new Pizza(2, "Chicken Tikka", 'large', './images/pizza.png', 1100),
    new Pizza(3, "Hawaiian", 'large', './images/pizza.png', 1100)
]





let cart = [];
// UI LOGIC


appendPizzasToMenu(availablePizzas)
let counter = 0
$('.alert').hide()



$("#btn-click").on("click", function (e) {
    e.preventDefault()

    number = $("#number").val()
    size = $("#size").val()
    crust = $("#crust").val()
    topping = $("#topping").val()

    checkCrust()
    checkSize()
    checkTopping()


    single.price = (sizePrice + crustPrice + toppingPrice) * parseInt(number);
    if (number, size, crust, topping) {

        cart.push({
            ...single,
            number,
            size,
            crust,
            topping

        });

        addToCart(cart)
        $("#count").text(`${counter}`)
        successAlert("Pizza Added to Cart Successfully &#x1F60A;")
        $(window).scrollTop(0);
       
    }
    

    getDeliveryPrice()

    // Clear Fields

    $("#size").val('')
    $("#crust").val('')
    $("#topping").val('')
})


//Close the Delivery Section

$("#btn-delivery").on("click", function (e) {
    e.preventDefault()

    $(".delivery").hide()
    getDeliveryPrice()

})


//Close the Checkout Modal

$("#btn-checkout").click(function () {


})

$("#btn-reciept").click(function(){
    successAlert("You have Successfully Checked Out &#x1F60A;")
})

// Toggle between the delivery section
$("#deliveryYes").click(function () {
    $(".delivery").toggle()

})

//Get the delivery Price

function getDeliveryPrice() {


    if ($("#deliveryYes").is(':checked')) {
        fullName = $("#fullNname").val()
        userLoc = $("#userLoc").val()
        phone = $("#phone").val()
        deliveryPrice = 300
    } else {
        deliveryPrice = 0
    }

    const finalTotal = cart.reduce((n, {
        price
    }) => n + price, 0) + deliveryPrice;
    $(".totalPrice").text(`Ksh ${finalTotal}`)
    $(".deliveryPrice").text(`Ksh ${deliveryPrice}`)


}
// Check for size

function checkSize() {
    if (size === 'large') {
        sizePrice = 1100
    } else if (size === 'medium') {
        sizePrice = 900
    } else {
        sizePrice = 500
    }


}

// Check for Crust

function checkCrust() {
    if (crust === 'crispy') {
        crustPrice = 300
    } else if (crust === 'stuffed') {

        crustPrice = 200
    } else {
        crustPrice = 150
    }

}

// Check for Topping

function checkTopping() {
    if (topping === 'garlic') {
        toppingPrice = 150
    } else if (topping === 'mushroom') {
        toppingPrice = 100
    } else {
        toppingPrice = 50
    }

}




//Append pizzas to the menu section
function appendPizzasToMenu(availablePizzas) {
    const menu = $(".menu")
    menu.html("")
    availablePizzas.forEach((pizza) => {
        menu.append(createPizza(pizza))

    });


}

//creating a pizza object UI
function createPizza(pizza) {
    return `
    <div id="pizzaCard" class="col-md-3">
                    <div class="card mt-5">
                        <div class="cardHeader">
                            <img src="${pizza.image}" height="180" width="220" alt="" />
                        </div>
                        <div class="cardFooter">
                            <h4 class="card-title mt-3 mx-2 fw-bold   ">${pizza.name} Pizza</h4>
                            <div class="ratings my-4 mx-2 ">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <h4 class="fw-bold text-success">4.5</h4>
                            </div>
                            <div class="card-price mx-3" id="price">
                                <h4 id="featured-price" class="fw-bold text-success">Ksh ${pizza.price}</h4> 
                                <img height="20" class="iconCart" src="./images/icons/cart.svg" id="cart-icon" onClick = "getSelectedPizza(${pizza.id})" data-bs-toggle="modal" data-bs-target="#addToCartModal"  alt=""
                                  >

                            </div>
                        </div>
                    </div>
                </div> -->
    `
}


// get the unique clicked pizza
function getSelectedPizza(id) {
    single = availablePizzas.find((pizza) => pizza.id === id);
    single.price = 0
    console.log(single);

}

function successAlert(msg) {
$("#alerts").append(`
<div class="alert alert-success alert-dismissible fade show" role="alert">
  ${msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`)
}

//Add to cart Function


function addToCart(cart) {
    const tableRow = $("#table-row");
    const tableRow2 = $("#table-row2");

    counter++;


    tableRow.html("")
    cart.forEach((x) => {
        tableRow.append(addItem(x))
    })
    tableRow2.html("")
    cart.forEach((x) => {
        tableRow2.append(addItem(x))
    })
}

//create cart item
function addItem(x) {
    return `
    <tr>
    <th scope="row">1</th>
    <td>${x.name}</td>
    <td>${x.number}</td>
    <td>${x.size}</td>
    <td>${x.crust}</td>
    <td>${x.topping}</td>
    <td>Ksh ${x.price}</td>
</tr>
    `
}