// payment.js - Gestione Pagamento PayPal e Invio Email con EmailJS

const PAYPAL_EMAIL = "unicobardo@gmail.com";

// INSERISCI QUI I TUOI CODICI PRESI DA EMAILJS
const EMAILJS_PUBLIC_KEY = "TUA_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "TUO_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TUO_TEMPLATE_ID";

function handlePayPalCheckout(orderData) {
    const totalAmount = orderData.total.toFixed(2);
    
    sessionStorage.setItem('pending_order', JSON.stringify(orderData));
    
    // Invia l'email automatica al cliente (e in BCC a te) tramite EmailJS
    sendOrderEmail(orderData);

    // Reindirizzamento a PayPal
    window.open('https://www.paypal.com/signin', '_blank');
    
    showDownloadSection(orderData);
}

function sendOrderEmail(orderData) {
    const itemsDescription = orderData.items.map(i => `${i.qty}x ${i.title} (€${(i.price * i.qty).toFixed(2)})`).join(', ');

    const templateParams = {
        customer_name: orderData.name,
        customer_email: orderData.email, // <-- Questa è la mail del cliente inserita nel checkout (To Email)
        customer_phone: orderData.phone,
        customer_address: orderData.address,
        message_details: itemsDescription + ` (Spedizione: €${orderData.shipping.toFixed(2)})`,
        order_total: `€${orderData.total.toFixed(2)}`
    };

    // Invio tramite SDK EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
        .then(function(response) {
            console.log("Email ordine inviata con successo!", response.status, response.text);
        }, function(error) {
            console.log("Errore invio email ordine:", error);
        });
}

function showDownloadSection(orderData) {
    const successDiv = document.createElement('div');
    successDiv.id = 'success-download-modal';
    successDiv.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4';
    successDiv.innerHTML = `
        <div class="bg-dark-card border border-gray-800 rounded-2xl max-w-md w-full p-6 text-center space-y-4 font-mono">
            <div class="w-12 h-12 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
            <h3 class="text-xl font-bold text-white font-sans">Ordine Registrato & Email Inviata!</h3>
            <p class="text-xs text-gray-400">
                Effettua il pagamento di <strong class="text-white">€${orderData.total.toFixed(2)}</strong> su PayPal inviandoli a: <br>
                <span class="text-brand-400 font-bold select-all">${PAYPAL_EMAIL}</span>
            </p>
            <p class="text-[11px] text-gray-500">Puoi scaricare o stampare la tua fattura PDF subito.</p>
            <button onclick="openInvoiceModal(); document.getElementById('success-download-modal').remove();" class="w-full py-3 bg-brand-500 text-black font-bold rounded-xl text-xs">
                Visualizza e Scarica Fattura PDF
            </button>
        </div>
    `;
    document.body.appendChild(successDiv);
}
