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
Pizza.prototype.setSize = function(){

};

//Prototype for determining Crust
Pizza.prototype.setCrust= function(){

};

//Prototype for determining Toppings
Pizza.prototype.SetToppings = function(){

}

//Prototype for determining Price
Pizza.prototype.pizzaPrice = function () {

}



//Creating the pizza Objects
const availablePizzas = [
    new Pizza(1, "Pepperoni", 'large', './images/pizza.jpg', 1000),
    new Pizza(2, "Chicken Tikka", 'large', './images/pizza.jpg', 1000),
    new Pizza(3, "Hawaiian", 'large', './images/pizza.jpg', 1000)
]







// UI LOGIC



//creating a pizza object UI
function createPizza(pizza){
    
}

