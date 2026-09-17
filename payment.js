// payment.js - Gestione Reindirizzamento PayPal sicuro e EmailJS (Predisposto)

const PAYPAL_USER = "unicobardo"; // Inserisci il tuo nome utente esatto di PayPal.Me
const ADMIN_EMAIL = "luigi.schiavello@gmail.com";
let selectedGateway = 'paypal';

function selectPaymentType(type) {
    selectedGateway = type;
    const isPayPal = type === 'paypal';
    
    document.getElementById('box-opt-paypal').className = isPayPal 
        ? "p-3 bg-blue-950/30 border-2 border-blue-500 rounded-xl cursor-pointer flex items-center justify-between"
        : "p-3 bg-gray-900 border border-gray-700 rounded-xl cursor-pointer flex items-center justify-between opacity-70";
        
    document.getElementById('box-opt-card').className = !isPayPal 
        ? "p-3 bg-blue-950/30 border-2 border-blue-500 rounded-xl cursor-pointer flex items-center justify-between"
        : "p-3 bg-gray-900 border border-gray-700 rounded-xl cursor-pointer flex items-center justify-between opacity-70";

    document.getElementById('card-inputs-container').classList.toggle('hidden', isPayPal);
}

function handlePayPalCheckout(orderData) {
    const totalAmount = orderData.total.toFixed(2);
    
    sessionStorage.setItem('pending_order', JSON.stringify(orderData));
    
    // Apriamo la pagina PayPal.Me pulita (senza forzare l'importo nell'URL che genera l'errore del merchant)
    window.open(`https://www.paypal.com/paypalme/${PAYPAL_USER}`, '_blank');
    
    showDownloadSection(orderData);
}

function handleCardCheckout(orderData) {
    alert("Il pagamento con carta di credito sarà presto attivo. Procedi momentaneamente con PayPal.");
}

function showDownloadSection(orderData) {
    document.getElementById('checkout-modal').classList.add('hidden');
    
    if (orderData.status === "Pagato") {
        sendAutomaticEmailBackground(orderData);
    }

    const successDiv = document.createElement('div');
    successDiv.id = 'success-download-modal';
    successDiv.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4';
    successDiv.innerHTML = `
        <div class="bg-dark-card border border-gray-800 rounded-2xl max-w-md w-full p-6 text-center space-y-4 font-mono">
            <div class="w-12 h-12 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
            <h3 class="text-xl font-bold text-white font-sans">Pagamento Iniziato!</h3>
            <p class="text-xs text-gray-400">Si è aperta la pagina PayPal per inviare l'importo di <strong class="text-white">€${orderData.total.toFixed(2)}</strong> a <span class="text-brand-400">${PAYPAL_USER}</span>. Subito dopo potrai scaricare o stampare la tua fattura PDF.</p>
            <button onclick="openInvoiceModal(); document.getElementById('success-download-modal').remove();" class="w-full py-3 bg-brand-500 text-black font-bold rounded-xl text-xs">
                Visualizza e Scarica Fattura PDF
            </button>
        </div>
    `;
    document.body.appendChild(successDiv);
}

function sendAutomaticEmailBackground(orderData) {
    /*
    emailjs.send("TUO_SERVICE_ID", "TUO_TEMPLATE_ID", {
        to_email: orderData.email,
        customer_name: orderData.name,
        order_id: orderData.id,
        order_total: orderData.total.toFixed(2),
        admin_bcc: ADMIN_EMAIL
    }).then(function(response) {
        console.log("Email inviata con successo!", response.status, response.text);
    }, function(error) {
        console.log("Errore invio email:", error);
    });
    */
}
