let inputProduct = document.getElementById("input_product");
let findProduct = document.getElementById("input_search");
let quatityProduct = document.getElementById("th_quantityProducts");
let tableDisplayProduct = document.getElementById("table_displayProduct");

let arrayProducts = [];

function addProduct() {
  let product = inputProduct.value;
  arrayProducts.push(product);
  updateTable(arrayProducts, arrayProducts.length - 1);
}

function editProduct(idProduct) {
  let nameEdited = inputProduct.value;
  arrayProducts[idProduct] = nameEdited;
  clearTable();
  renderTableDisplay(arrayProducts);
}

function deleteProduct(idProduct) {
  clearTable();
  arrayProducts.splice(idProduct, 1);
  renderTableDisplay(arrayProducts);
}

function searchProduct(value) {
  let tempArray = [];
  if (value === "") {
    clearTable();
    renderTableDisplay(arrayProducts);
  } else {
    for (let i = 0; i < arrayProducts.length; i++) {
      if (String(arrayProducts[i]).toLowerCase().includes(value)) {
        tempArray.push(arrayProducts[i]);
      }
    }

    clearTable();
    renderTableDisplay(tempArray);

    if (tempArray.length == 0) {
      updateQuantities(tempArray);
    }
  }
}

function updateQuantities(array) {
  quatityProduct.innerText = "Quantities: " + array.length;
}

function updateTable(array, idProduct) {
  let backgroundColorTd = "rgb(232, 235, 235)";
  updateQuantities(array);

  if ((idProduct + 1) % 2 == 0) {
    backgroundColorTd = "white";
  }

  let queriAddProduct = `<tr id="${idProduct}" class="tr_product" style="background-color:${backgroundColorTd};">
        <td class="td_name_product" onclick="sendNameIntoEdit('${array[idProduct]}')">${array[idProduct]}</td>
        <td class="td_button_edit" colspan="3">
            <button class=" text_edit" onclick="editProduct(this.closest('tr').id)">Edit</button>
        </td>
        <td class="td_button_edit" colspan="3">
            <button class="text_delete" onclick="deleteProduct(this.closest('tr').id)">Delete</button>
        </td>
   </tr>`;

  tableDisplayProduct.insertAdjacentHTML("beforeend", queriAddProduct);
}

function clearTable() {
  document.querySelector("#table_displayProduct").replaceChildren();
}

function renderTableDisplay(array) {
  for (let i = 0; i < array.length; i++) {
    updateTable(array, i);
  }
}

function sendNameIntoEdit(nameProduct) {
  inputProduct.value = "";
  inputProduct.value = nameProduct;
}
