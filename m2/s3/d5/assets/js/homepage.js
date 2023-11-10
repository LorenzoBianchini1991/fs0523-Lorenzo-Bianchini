const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGVlZDMyNWM5NzAwMTg3ZjlmZDciLCJpYXQiOjE2OTk2MTQ0NDUsImV4cCI6MTcwMDgyNDA0NX0.jjT5KTnMu0Gr3tpio2Znm8H9u3rQJ8naxFdwKOB641Y";

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
      listItem.querySelector(".details-button").addEventListener("click", () => showProductDetails(product._id));

      productList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
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

