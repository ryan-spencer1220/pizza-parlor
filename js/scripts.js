// Business Logic

function Pizza(name, topping, size) {
  this.name = name;
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.calculateTotal = function () {
  if (this.size === "small") {
    return 10;
  } else if (this.size === "medium") {
    return 15;
  } else {
    return 20;
  }
};

$(document).ready(function () {
  $("form#pizza").submit(function (event) {
    event.preventDefault();
    const inputName = $("input#name").val();
    const inputPizza = $("#pizza :selected").val();
    const inputSize = $("input:radio[name=size]:checked").val();

    // $("input#new-name").val("");
    // $("input#new-pizza").val("");
    // $("input#new-size").val("");

    let newPizza = new Pizza(inputName, inputPizza, inputSize);
    let total = newPizza.calculateTotal();

    $("#total-value").text(total);
  });
});
