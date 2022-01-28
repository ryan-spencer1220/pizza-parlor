// Business Logic

function Pizza(name, meatTopping, vegetableTopping, otherTopping, size) {
  this.name = name;
  this.meatTopping = meatTopping;
  this.vegetableTopping = vegetableTopping;
  this.othertopping = otherTopping;
  this.size = size;
  this.total = 0;
}

Pizza.prototype.calculateTotal = function () {
  if (this.size === "small") {
    this.total += 10;
    return this.total;
  } else if (this.size === "medium") {
    this.total += 15;
    return this.total;
  } else {
    this.total += 20;
    return this.total;
  }
};

let pizzaOne = ("Ryan", "Pepperoni", "Onion", "Pinapple", "small", 0);

//UI Logic

$(document).ready(function () {
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    const inputName = $("input#name").val();
    const inputMeatTopping = $("#meat-topping :selected").val();
    const inputVegetableTopping = $("#vegetable-topping :selected").val();
    const inputOtherTopping = $("#other-topping :selected").val();
    const inputSize = $("input:radio[name=size]:checked").val();
    const total = 0;

    let newPizza = new Pizza(
      inputName,
      inputMeatTopping,
      inputVegetableTopping,
      inputOtherTopping,
      inputSize,
      total
    );

    $("#total-value").text(newPizza.calculateTotal());
  });
});
