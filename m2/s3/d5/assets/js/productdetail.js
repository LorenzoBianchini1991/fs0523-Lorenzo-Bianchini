document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('productId');

  if (productId) {
    getProductDetails(productId);
  } else {
    console.error('Product ID not found in URL');
  }
});

async function getProductDetails(productId) {
  try {
    const response = await fetch(`${apiUrl}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const product = await response.json();
      const productDetails = document.getElementById('productDetails');

      productDetails.innerHTML = '';

      for (const key in product) {
        const detailItem = document.createElement('div');
        detailItem.innerHTML = `<strong>${key}:</strong> ${product[key]}`;
        productDetails.appendChild(detailItem);
      }
    } else {
      console.error('Error fetching product details:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
}