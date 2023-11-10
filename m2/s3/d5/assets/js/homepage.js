document.addEventListener('DOMContentLoaded', function () {
  const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
  renderProductList(savedProducts);
});

function renderProductList(products) {
  const productList = document.getElementById('productList');
  const productTemplate = document.getElementById('productTemplate');

  productList.innerHTML = '';

  products.forEach(product => {
    const listItem = productTemplate.content.cloneNode(true);
    const productNameSpan = listItem.querySelector('.product-name');
    const detailsButton = listItem.querySelector('.details-button');

    productNameSpan.textContent = product.name;
    detailsButton.dataset.productId = product._id;

    detailsButton.addEventListener('click', function () {
      showProductDetails(product._id);
    });

    productList.appendChild(listItem);
  });
}

function addProduct() {
  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;
  const productBrand = document.getElementById('productBrand').value;
  const productImage = document.getElementById('productImage').value;
  const productPrice = document.getElementById('productPrice').value;

  const newProduct = {
    name: productName,
    description: productDescription,
    brand: productBrand,
    imageUrl: productImage,
    price: parseFloat(productPrice)
  };

  const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

  savedProducts.push(newProduct);

  localStorage.setItem('products', JSON.stringify(savedProducts));

  renderProductList(savedProducts);

  resetForm();
}