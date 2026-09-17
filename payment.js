// payment.js - Gestione Pagamento PayPal Sicura

const PAYPAL_EMAIL = "unicobardo@gmail.com";
const ADMIN_EMAIL = "luigi.schiavello@gmail.com";

function handlePayPalCheckout(orderData) {
    const totalAmount = orderData.total.toFixed(2);
    
    sessionStorage.setItem('pending_order', JSON.stringify(orderData));
    
    // Reindirizzamento alla pagina sicura standard di PayPal (funziona sempre senza errori di URL)
    window.open('https://www.paypal.com/signin', '_blank');
    
    showDownloadSection(orderData);
}

function showDownloadSection(orderData) {
    const successDiv = document.createElement('div');
    successDiv.id = 'success-download-modal';
    successDiv.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4';
    successDiv.innerHTML = `
        <div class="bg-dark-card border border-gray-800 rounded-2xl max-w-md w-full p-6 text-center space-y-4 font-mono">
            <div class="w-12 h-12 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
            <h3 class="text-xl font-bold text-white font-sans">Ordine Registrato!</h3>
            <p class="text-xs text-gray-400">
                Effettua il pagamento di <strong class="text-white">€${orderData.total.toFixed(2)}</strong> su PayPal inviandoli all'indirizzo: <br>
                <span class="text-brand-400 font-bold select-all">${PAYPAL_EMAIL}</span>
            </p>
            <p class="text-[11px] text-gray-500">Subito dopo puoi scaricare o stampare la tua fattura PDF.</p>
            <button onclick="openInvoiceModal(); document.getElementById('success-download-modal').remove();" class="w-full py-3 bg-brand-500 text-black font-bold rounded-xl text-xs">
                Visualizza e Scarica Fattura PDF
            </button>
        </div>
    `;
    document.body.appendChild(successDiv);
}
