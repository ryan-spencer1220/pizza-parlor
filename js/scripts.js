// Business Logic

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.calculateTotal = function () {
  if (this.size == "small") {
    return "$10";
  } else if (this.size == "medium") {
    return "$15";
  } else {
    return "$20";
  }
};

var pizzaOne = new Pizza("pepperoni", "small");
console.log(pizzaOne);

console.log(pizzaOne.calculateTotal("small"));

$(document).ready(function () {
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    const inputName = $("input#name").val();
    const inputPizza = $("input#pizza").val();
    const inputSize = $("input#size").val();

    $("input#new-name").val("");
    $("input#new-pizza").val("");
    $("input#new-size").val("");
    calculateTotal(inputSize);
  });
});
