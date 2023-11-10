const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGVlZDMyNWM5NzAwMTg3ZjlmZDciLCJpYXQiOjE2OTk2MTQ0NDUsImV4cCI6MTcwMDgyNDA0NX0.jjT5KTnMu0Gr3tpio2Znm8H9u3rQJ8naxFdwKOB641Y";

document.addEventListener("DOMContentLoaded", function() {
    // Gestione eventi per backoffice.html
    if (document.location.pathname.includes("backoffice.html")) {
        document.getElementById("addProductButton").addEventListener("click", createProduct);
        document.getElementById("resetFormButton").addEventListener("click", resetForm);
    }
  
    // Gestione eventi per homepage.html
    if (document.location.pathname.includes("homepage.html")) {
        getProducts();
    }
  
    // Gestione eventi per productdetail.html
    if (document.location.pathname.includes("productdetail.html")) {
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

// Funzione per ottenere la lista dei prodotti e visualizzarli sulla homepage
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
    const productList = document.getElementById("productList");

    // Pulisci la lista prima di aggiungere i nuovi elementi
    productList.innerHTML = "";

    // Crea un template di prodotto
    const productTemplate = document.getElementById("productTemplate");

    // Aggiungi ogni prodotto alla lista sulla homepage
    data.forEach(product => {
      const listItem = productTemplate.content.cloneNode(true);

      // Popola il template con i dettagli del prodotto
      listItem.querySelector(".product-name").textContent = product.name;
      listItem.querySelector(".edit-button").addEventListener("click", () => editProduct(product._id));
      listItem.querySelector(".delete-button").addEventListener("click", () => deleteProduct(product._id));
      listItem.querySelector(".details-button").addEventListener("click", () => openProductDetail(product._id));

      productList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
  }
}

// Funzione per visualizzare i dettagli di un singolo prodotto
async function showProductDetails(productId) {
    console.log("Chiamata a showProductDetails con productId:", productId);
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
  
      if (!productDetails) {
        console.error("Elemento 'productDetails' non trovato nel DOM.");
        return;
      }
  
      productDetails.innerHTML = ""; // Pulisci i dettagli esistenti
  
      for (const key in product) {
        const detailItem = document.createElement("div");
        detailItem.innerHTML = `<strong>${key}:</strong> ${product[key]}`;
        productDetails.appendChild(detailItem);
      }

      // Rimozione dell'ID del prodotto da localStorage dopo aver caricato i dettagli
      localStorage.removeItem("selectedProductId");
      
    } catch (error) {
      console.error("Errore durante il recupero dei dettagli del prodotto:", error);
    }
}

// Funzione per creare un nuovo prodotto
async function createProduct(e) {
  e.preventDefault ()
  const productName = document.getElementById("productName").value;
  const productDescription = document.getElementById("productDescription").value;
  const productBrand = document.getElementById("productBrand").value;
  const productImage = document.getElementById("productImage").value;
  const productPrice = document.getElementById("productPrice").value;

  const newProduct = {
    name: productName,
    description: productDescription,
    brand: productBrand,
    imageUrl: productImage,
    price: parseFloat(productPrice)
  };

  try {
    // Effettua la chiamata POST per creare il nuovo prodotto
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newProduct)
    });

    // Se la risposta ha successo, aggiorna la lista dei prodotti
    if (response.ok) {
      // Aggiorna la lista dei prodotti dopo averne aggiunto uno nuovo
      getProducts();
      console.log("Prodotto creato con successo!");
      // Resetta il form
      resetForm();
    } else {
      // Se la risposta non ha successo, logga lo status
      console.error("Errore durante la creazione del prodotto:", response.statusText);
    }
  } catch (error) {
    // Se c'è un errore nella chiamata, logga l'errore
    console.error("Errore durante la creazione del prodotto:", error);
  }
}

// Nuova funzione per resettare il form
function resetForm() {
  document.getElementById("productForm").reset();
  // Nasconde i tasti di modifica e cancellazione
  document.getElementById("updateButton").style.display = 'none';
  document.getElementById("deleteButton").style.display = 'none';
}

// Nuova funzione per abilitare la modalità di modifica
async function editProduct(productId) {
  try {
    const response = await fetch(`${apiUrl}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const product = await response.json();

      // Popola il form con i dettagli del prodotto
      document.getElementById("productName").value = product.name;
      document.getElementById("productDescription").value = product.description;
      document.getElementById("productBrand").value = product.brand;
      document.getElementById("productImage").value = product.imageUrl;
      document.getElementById("productPrice").value = product.price;

      // Imposta l'ID del prodotto nel campo nascosto
      document.getElementById("productId").value = productId;

      // Mostra i tasti di modifica e cancellazione
      document.getElementById("updateButton").style.display = 'block';
      document.getElementById("deleteButton").style.display = 'block';
    } else {
      console.error("Errore durante il recupero del prodotto per la modifica:", response.statusText);
    }
  } catch (error) {
    console.error("Errore durante il recupero del prodotto per la modifica:", error);
  }
}


// Nuova funzione per aggiornare un prodotto esistente
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
      // Aggiorna la lista dei prodotti dopo l'aggiornamento
      getProducts();
      // Resetta il form
      resetForm();
      console.log("Prodotto aggiornato con successo!");
    } else {
      console.error("Errore durante l'aggiornamento del prodotto:", response.statusText);
    }
  } catch (error) {
    console.error("Errore durante l'aggiornamento del prodotto:", error);
  }
}

// Nuova funzione per cancellare un prodotto esistente
async function deleteProduct(productId) {
  try {
    const response = await fetch(`${apiUrl}/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.ok) {
      // Aggiorna la lista dei prodotti dopo la cancellazione
      getProducts();
      // Resetta il form
      resetForm();
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
  // Nascondi tutte le sezioni
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Mostra solo la sezione richiesta
  const targetSection = document.getElementById(pageName);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
}

// Avvia l'app ottenendo i prodotti iniziali
getProducts();

 



