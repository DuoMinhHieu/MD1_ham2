let products = [];

function addProduct() {
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;

    if (productName && !isNaN(+productPrice)) {
        let product = { name: productName, price: +productPrice };
        products.push(product);
        displayProducts();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin sản phẩm và giá.");
    }
}

function displayProducts() {
    let productsList = document.getElementById("productList");
    productsList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        let row = productsList.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = products[i].name;
        cell2.innerHTML = products[i].price;

        // Add Edit button
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            editProduct(i);
        };
        cell3.appendChild(editButton);

        // Add Delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteProduct(i);
        };
        cell3.appendChild(deleteButton);
    }
}

function editProduct(index) {
    // You can implement the edit logic here
    alert("Edit product with index: " + index);
}

function deleteProduct(index) {
    // You can implement the delete logic here
    products.splice(index, 1); // Remove the product at the specified index
    displayProducts();
}