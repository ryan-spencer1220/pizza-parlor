# _Epicodus Pizza Parlor_

#### By _Ryan Spencer_

#### _Web application used for ordering pizzas and calculating total cost_

## Technologies Used

- _HTML_
- _CSS/Bootstrap_
- _Javascript/jQuery_

## Description

_Web application allowing users to input delivery information, pizza size, and desired toppings. Final total is returned based on size and toppings selected. This exercise was designed to gain additional exposure to constructors and prototypes._

## Setup/Installation Requirements

- _Clone this repository to your desktop._
- _Navigate to the top level of the directory_
- _Open index.html in your browser_
  _OR_
- _Navigate to https://ryan-spencer1220.github.io/pizza-parlor/_

## Tests

_Describe: Pizza()_

_Test: "It should return a Pizza object with three properties for toppings and size"_ \
_Code: const pizzaOne= new Pizza("Pepperoni", "Onions", "Olives", "Medium");_ \
_Expected Output: Pizza { meatTopping: "Pepperoni", veggieTopping: "Onions", otherTopping: "Olives", size: "Medium" }_

_Describe: addSize()_

_Test: "It should return a Pizza object with two properties for toppings and size"_ \
_Code: const pizzaOne = new Pizza("No Meat", "No vegetables", "Just Cheese", "small");_ \
_Expected Output: "$10.00"_

_Describe: addSize()_

_Test: "It should return a Pizza object with two properties for toppings and size"_ \
_Code: const pizzaOne = new Pizza("No Meat", "No vegetables", "Just Cheese", "medium");_ \
_Expected Output: "$15.00"_

_Describe: addSize()_

_Test: "It should return a Pizza object with two properties for toppings and size"_ \
_Code: const pizzaOne = new Pizza("No Meat", "No vegetables", "Just Cheese", "large");_ \
_Expected Output: "$20.00"_

_Describe: addMeat()_

_Test: "It should add $2 to total when a meat is selected from the dropdown menu"_ \
_Code: const pizzaOne = new Pizza("No Meat", "No vegetables", "Just Cheese", "medium");_ \
_Expected Output: "$15.00"_

_Describe: addMeat()_

_Test: "It should add $2 to total when a meat is selected from the dropdown menu"_ \
_Code: const pizzaOne = new Pizza("Pepperoni", "No vegetables", "Just Cheese", "medium");_ \
_Expected Output: "$17.00"_

_Describe: addVeggie()_

_Test: "It should add $1 to total when a veggie is selected from the dropdown menu"_ \
_Code: const pizzaOne = new Pizza("No Meat", "No vegetables", "Just Cheese", "medium");_ \
_Expected Output: "$15.00"_

_Describe: addVeggie()_

_Test: "It should add $1 to total when a veggie is selected from the dropdown menu"_ \
_Code: const pizzaOne = new Pizza("No Meat", "Mushrooms", "Just Cheese", "medium");_ \
_Expected Output: "$16.00"_

## Known Bugs

- _No known bugs_

## License

_MIT_

Copyright (c) _2022_ _Ryan Spencer_
