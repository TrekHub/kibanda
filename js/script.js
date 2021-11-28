//   1. Business Logic




//Constructor for Pizza
function Pizza(id, name, size, image, price, crust, topping) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.image = image
    this.price = price;
    this.crust = 'stuffed';
    this.topping = 'topping';
}


//Prototype for determining SIze
Pizza.prototype.setSize = function () {

};

//Prototype for determining Crust
Pizza.prototype.setCrust = function () {

};

//Prototype for determining Toppings
Pizza.prototype.SetToppings = function () {

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
$(document).ready(function () {

    $("#orderForm").submit(function (e, id) {

        e.preventDefault()
        const single = availablePizzas.find((pizza) => pizza.id === id)

        const number = $("#number").val()
        const size = $("#size").val()
        const crust = $("#crust").val()
        const topping = $("#topping").val()




        if(number,size,crust,topping) {

        cart.push({
            ...single,
            number,
            size,
            crust,
            topping

        })
        
            console.log(cart);
        }
        $("#number").val('')
        $("#size").val('')
        $("#crust").val('')
        $("#topping").val('')



    })

});

appendPizzasToMenu(availablePizzas)

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
                                <img height="20" class="iconCart" src="./images/icons/cart.svg" id="cart-icon" onClick = "pizzaOrder(${pizza.id})" data-bs-toggle="modal" data-bs-target="#addToCartModal"  alt=""
                                  >

                            </div>
                        </div>
                    </div>
                </div> -->
    `
}








function pizzaOrder(id) {
    const single = availablePizzas.find((pizza) => pizza.id === id)
    // console.log(single);

}