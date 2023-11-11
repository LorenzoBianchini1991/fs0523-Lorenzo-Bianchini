const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGVlZDMyNWM5NzAwMTg3ZjlmZDciLCJpYXQiOjE2OTk2MTQ0NDUsImV4cCI6MTcwMDgyNDA0NX0.jjT5KTnMu0Gr3tpio2Znm8H9u3rQJ8naxFdwKOB641Y";

document.addEventListener("DOMContentLoaded", function() {
  if (document.location.pathname.includes("backoffice.html")) {
    document.getElementById("addProductButton").addEventListener("click", createProduct);
    document.getElementById("resetFormButton").addEventListener("click", resetForm);
    document.getElementById("updateProductButton").addEventListener("click", updateProduct);
    getProducts();
  } else if (document.location.pathname.includes("homepage.html")) {
    getProducts();
  } else if (document.location.pathname.includes("productdetail.html")) {
    const productId = localStorage.getItem("selectedProductId");
    if (productId) {
      showProductDetails(productId);
    }
  }
});

function openProductDetail(productId) {
  localStorage.setItem("selectedProductId", productId);
  window.open("productdetail.html", "_blank");
}


// Funzione per ottenere la lista dei prodotti e visualizzarli sulla homepage o backoffice
async function getProducts() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`Errore durante il recupero dei prodotti: ${response.statusText}`);
    }

    const data = await response.json();
    if (document.location.pathname.includes("homepage.html")) {
      updateProductList(data, "productList", "productTemplate");
    } else if (document.location.pathname.includes("backoffice.html")) {
      updateBackofficeProductList(data);
    }
  } catch (error) {
    console.error(error);
  }
}

function updateProductList(products, productListId, productTemplateId) {
  const productList = document.getElementById(productListId);
  const productTemplate = document.getElementById(productTemplateId);
  productList.innerHTML = "";

  products.forEach(product => {
    const listItem = productTemplate.content.cloneNode(true);
    listItem.querySelector(".product-name").textContent = product.name;

    if (document.location.pathname.includes("backoffice.html")) {
      listItem.querySelector(".edit-button").addEventListener("click", () => editProduct(product._id));
      listItem.querySelector(".delete-button").addEventListener("click", () => deleteProduct(product._id));
    }
    
    listItem.querySelector(".details-button").addEventListener("click", () => openProductDetail(product._id));
    productList.appendChild(listItem);
  });
}

function updateBackofficeProductList(products) {
  const backofficeList = document.getElementById("backofficeProductList");
  backofficeList.innerHTML = "";

  products.forEach(product => {
      const listItem = document.createElement("li");
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      listItem.textContent = product.name;

      const editButton = document.createElement("button");
      editButton.className = 'btn btn-primary btn-sm';
      editButton.textContent = "Modifica";
      editButton.addEventListener("click", () => editProduct(product._id));

      const deleteButton = document.createElement("button");
      deleteButton.className = 'btn btn-danger btn-sm';
      deleteButton.textContent = "Cancella";
      deleteButton.addEventListener("click", () => deleteProduct(product._id));

      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      backofficeList.appendChild(listItem);
  });
}

// Funzione per visualizzare i dettagli di un singolo prodotto
async function showProductDetails(productId) {
  try {
      const response = await fetch(`${apiUrl}/${productId}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });

      if (!response.ok) {
          throw new Error(`Errore durante il recupero dei dettagli del prodotto: ${response.statusText}`);
      }

      const product = await response.json();
      const productDetails = document.getElementById("productDetails");
      productDetails.innerHTML = "";

      for (const key in product) {
          const detailItem = document.createElement("div");
          detailItem.innerHTML = `<strong>${key}:</strong> ${product[key]}`;
          productDetails.appendChild(detailItem);
      }

      localStorage.removeItem("selectedProductId");
  } catch (error) {
      console.error("Errore durante il recupero dei dettagli del prodotto:", error);
  }
}

// Funzione per creare un nuovo prodotto
async function createProduct(e) {
  e.preventDefault();
  const productName = document.getElementById("productName").value;
  const productDescription = document.getElementById("productDescription").value;
  const productBrand = document.getElementById("productBrand").value;
  const productImage = document.getElementById("productImage").value;
  const productPrice = document.getElementById("productPrice").value;

  if (!productName || !productDescription || !productBrand || !productImage || !productPrice) {
    return;
  }

  const newProduct = {
    name: productName,
    description: productDescription,
    brand: productBrand,
    imageUrl: productImage,
    price: parseFloat(productPrice)
  };

  try {
      const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(newProduct)
      });

      if (response.ok) {
          getProducts();
          console.log("Prodotto creato con successo!");
          resetForm();
      } else {
          console.error("Errore durante la creazione del prodotto:", response.statusText);
      }
  } catch (error) {
      console.error("Errore durante la creazione del prodotto:", error);
  }
}

// Funzione per resettare il form
function resetForm() {
  document.getElementById("productForm").reset();
  document.getElementById("updateProductButton").style.display = 'none';
  document.getElementById("addProductButton").style.display = 'block';
}

// Funzione per abilitare la modalità di modifica
async function editProduct(productId) {
  try {
      const response = await fetch(`${apiUrl}/${productId}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });

      if (!response.ok) {
          throw new Error(`Errore durante il recupero del prodotto: ${response.statusText}`);
      }

      const product = await response.json();

      document.getElementById("productName").value = product.name;
      document.getElementById("productDescription").value = product.description;
      document.getElementById("productBrand").value = product.brand;
      document.getElementById("productImage").value = product.imageUrl;
      document.getElementById("productPrice").value = product.price;
      document.getElementById("productId").value = productId;

      document.getElementById("updateProductButton").style.display = 'block';
      document.getElementById("addProductButton").style.display = 'none';
  } catch (error) {
      console.error("Errore durante il recupero del prodotto per la modifica:", error);
  }
}


// Funzione per aggiornare un prodotto esistente
async function updateProduct() {
  const productId = document.getElementById("productId").value;
  const updatedProduct = {
      name: document.getElementById("productName").value,
      description: document.getElementById("productDescription").value,
      brand: document.getElementById("productBrand").value,
      imageUrl: document.getElementById("productImage").value,
      price: parseFloat(document.getElementById("productPrice").value)
  };

  try {
      const response = await fetch(`${apiUrl}/${productId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(updatedProduct)
      });

      if (response.ok) {
          getProducts();
          resetForm();
          console.log("Prodotto aggiornato con successo!");
      } else {
          console.error("Errore durante l'aggiornamento del prodotto:", response.statusText);
      }
  } catch (error) {
      console.error("Errore durante l'aggiornamento del prodotto:", error);
  }
}

// Funzione per cancellare un prodotto esistente
async function deleteProduct(productId) {
  try {
      const response = await fetch(`${apiUrl}/${productId}`, {
          method: "DELETE",
          headers: {
              Authorization: `Bearer ${token}`
          }
      });

      if (response.ok) {
          getProducts();
          console.log("Prodotto cancellato con successo!");
      } else {
          console.error("Errore durante la cancellazione del prodotto:", response.statusText);
      }
  } catch (error) {
      console.error("Errore durante la cancellazione del prodotto:", error);
  }
}

// Funzione per cambiare la visualizzazione tra le pagine
function changePage(pageName) {
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const targetSection = document.getElementById(pageName);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
}

getProducts()

 



