let arrayFruits = [
  ["Apple", "25000"],
  ["Mango", "26000"],
  ["Orange", "27000"],
  ["Cucumber", "28000"],
];
let tbodyFruit = document.getElementById("tbody_tr_fruit");
let tempIndex = 0;
let form_add_fruit = document.getElementById("form_add_fruit");
let form_update_fruit = document.getElementById("form_update_fruit");
let div_button_update = document.getElementById("div_button_update");
let button_add_fruit = document.getElementById("button_add_fruit");

function displayFruits() {
  let queriAddFruit = "";
  for (let i = 0; i < arrayFruits.length; i++) {
    queriAddFruit += `<tr id="${i}">
        <td>${arrayFruits[i][0]}</td>
        <td>${arrayFruits[i][1]}</td>
        <td>
        <button onclick="displayUpdatingForm(this.closest('tr').id)">Edit</button>
        </td>
        <td>
        <button onclick="deleteFruit(this.closest('tr').id)">Delete</button>
        </td>
        </tr>
        `;
  }
  //   console.log(queriAddFruit);
  tbodyFruit.innerHTML = queriAddFruit;
}

displayFruits();

function addNewFruit() {
  let inputName = document.getElementById("input_add_name_fruit");
  let inputPrice = document.getElementById("input_add_price_fruit");
  if (inputName.value != "" && inputPrice.value != "") {
    let addNewFruit = [inputName.value, inputPrice.value];
    console.log(addNewFruit);
    arrayFruits.push(addNewFruit);
    displayFruits();

    inputName.value = "";
    inputPrice.value = "";
  } else {
    alert("Vui long nhap du thong tin");
  }
}

function deleteFruit(indexFruit) {
  console.log(indexFruit);
  arrayFruits.splice(Number(indexFruit), 1);
  displayFruits();
}

function displayUpdatingForm(indexFruit) {
  form_add_fruit.style.display = "none";
  form_update_fruit.style.display = "block";
  div_button_update.style.display = "block";
  button_add_fruit.setAttribute("disabled", "true");
  tempIndex = Number(indexFruit);

  let input_present_name = document.getElementById("input_update_name_fruit");
  let input_present_price = document.getElementById("input_update_price_fruit");

  input_present_name.value = arrayFruits[tempIndex][0];
  input_present_price.value = arrayFruits[tempIndex][1];
}

function editFruitByPrompt(indexFruit) {
  tempIndex = Number(indexFruit);
  let oldName = prompt("", arrayFruits[tempIndex][0]);
  let oldPrice = prompt("", arrayFruits[tempIndex][1]);
  console.log(oldName);
  console.log(oldPrice);
  if (oldName == "" || oldPrice == "") {
    alert("Please dont let inputs empty!!!");
  } else {
    arrayFruits[tempIndex][0] = oldName;
    arrayFruits[tempIndex][1] = oldPrice;
    displayFruits();
  }
}

function re_display_table() {
  form_update_fruit.style.display = "none";
  form_add_fruit.style.display = "block";
  div_button_update.style.display = "none";
  button_add_fruit.removeAttribute("disabled");
}
function updateFruit(e) {
  let input_updated_name = document.getElementById("input_update_name_fruit");
  let input_updated_price = document.getElementById("input_update_price_fruit");

  if (e) e.preventDefault();
  if (input_updated_name.value == "" || input_updated_price.value == "") {
    alert("Please dont let input empty!!!");
    re_display_table();
  } else {
    console.log(input_updated_name.value + "___" + input_updated_price.value);
    arrayFruits[tempIndex][0] = input_updated_name.value;
    arrayFruits[tempIndex][1] = input_updated_price.value;

    console.log(arrayFruits);

    displayFruits();

    re_display_table();
  }
}
