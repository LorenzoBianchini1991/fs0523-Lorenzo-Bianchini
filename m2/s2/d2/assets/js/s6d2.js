/* SALDI */

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const saldiSection = document.getElementById("saldiSection");

    toggleButton.addEventListener("click", function() {
        if (saldiSection.style.display !== "none") {
            saldiSection.style.display = "none";
            toggleButton.textContent = "Mostra sezione";
        } else {
            saldiSection.style.display = "block";
            toggleButton.textContent = "Nascondi sezione";
        }
    });
});

/* WELCOME SUMMER */

document.addEventListener("DOMContentLoaded", function() {
    const toggleWelcomeButton = document.getElementById("toggleWelcomeButton");
    const welcomeSummerSection = document.getElementById("welcomeSummerSection");

    toggleWelcomeButton.addEventListener("click", function() {
        if (welcomeSummerSection.style.display !== "none") {
            welcomeSummerSection.style.display = "none";
            toggleWelcomeButton.textContent = "Mostra sezione";
        } else {
            welcomeSummerSection.style.display = "block";
            toggleWelcomeButton.textContent = "Nascondi sezione";
        }
    });
});