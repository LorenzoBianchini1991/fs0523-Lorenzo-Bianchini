const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGVlZDMyNWM5NzAwMTg3ZjlmZDciLCJpYXQiOjE2OTk2MTQ0NDUsImV4cCI6MTcwMDgyNDA0NX0.jjT5KTnMu0Gr3tpio2Znm8H9u3rQJ8naxFdwKOB641Y";

// Funzione per visualizzare i dettagli di un singolo prodotto
async function showProductDetails(productId) {
  try {
    const response = await fetch(`${apiUrl}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const product = await response.json();
    const productDetails = document.getElementById("productDetails");

    // Pulisci i dettagli prima di aggiungerli
    productDetails.innerHTML = "";

    // Aggiungi i dettagli del prodotto
    for (const key in product) {
      const detailItem = document.createElement("div");
      detailItem.innerHTML = `<strong>${key}:</strong> ${product[key]}`;
      productDetails.appendChild(detailItem);
    }
  } catch (error) {
    console.error("Errore durante il recupero dei dettagli del prodotto:", error);
  }
}

// ... (other functions)
