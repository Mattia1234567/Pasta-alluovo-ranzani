// script.js

// Funzione per mostrare un messaggio quando si clicca su un prodotto
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Funzionalità in arrivo! Puoi inserire qui le foto dei prodotti.');
    });
});
