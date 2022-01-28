// Business Logic

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.calculateTotal = function (size) {
  if (this.size === small) {
    return "$10.00";
  } else if (this.size === medium) {
    return "15.00";
  } else {
    return "20.00";
  }
};

console.log(Pizza.calculateTotal(small));

// UI Logic

$(document).ready(function () {
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    const inputName = $("input#name").val();
    const inputPizza = $("input#pizza").val();
    const inputSize = $("input#size").val();

    $("input#new-name").val("");
    $("input#new-pizza").val("");
    $("input#new-size").val("");

    // console.log(calculateTotal(inputSize));
  });
});
