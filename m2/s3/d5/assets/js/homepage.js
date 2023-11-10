document.addEventListener('DOMContentLoaded', function () {
  const mockProducts = [
    { _id: '1', name: 'Product 1' },
    { _id: '2', name: 'Product 2' },
  ];

  const productList = document.getElementById('productList');
  const productTemplate = document.getElementById('productTemplate');

  mockProducts.forEach(product => {
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
});

function showProductDetails(productId) {
  window.location.href = `productDetail.html?productId=${productId}`;
}