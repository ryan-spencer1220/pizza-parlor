// Business Logic

function Pizza(name, meatTopping, veggieTopping, otherTopping, size) {
  this.name = name;
  this.meatTopping = meatTopping;
  this.veggieTopping = veggieTopping;
  this.othertopping = otherTopping;
  this.size = size;
  this.total = 0;
}

Pizza.prototype.addSize = function () {
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

Pizza.prototype.addMeat = function () {
  if (this.meatTopping != "No Meat") {
    this.total += 2;
    return this.total;
  } else {
    return this.total;
  }
};

Pizza.prototype.addVeggie = function () {
  if (this.veggieTopping != "No Vegetables") {
    this.total += 1;
    return this.total;
  } else {
    return this.total;
  }
};

//UI Logic

$(document).ready(function () {
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    const inputName = $("input#name").val();
    const inputMeatTopping = $("#meat-topping :selected").val();
    const inputVeggieTopping = $("#veggie-topping :selected").val();
    const inputOtherTopping = $("#other-topping :selected").val();
    const inputSize = $("input:radio[name=size]:checked").val();
    const total = 0;

    let newPizza = new Pizza(
      inputName,
      inputMeatTopping,
      inputVeggieTopping,
      inputOtherTopping,
      inputSize,
      total
    );

    newPizza.addSize();
    newPizza.addMeat();
    const finalTotal = newPizza.addVeggie();

    $("#total-value").text(finalTotal);
  });
});
