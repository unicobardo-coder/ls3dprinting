// ==========================================
// GESTORE INVIO EMAIL CENTRALIZZATO (mailer.js)
// ==========================================

// Inizializzazione automatica EmailJS con la Public Key da config.js
(function() {
    if (typeof LS3D_CONFIG !== 'undefined' && typeof emailjs !== 'undefined') {
        emailjs.init(LS3D_CONFIG.emailjs.publicKey);
    }
})();

// 1. Invio email per la Conferma Ordine (usa orderTemplateId)
function sendOrderConfirmationEmail(orderData) {
    if (typeof LS3D_CONFIG === 'undefined') {
        console.error("File config.js non trovato!");
        return;
    }

    const templateParams = {
        order_number: orderData.number,
        order_id: orderData.id,
        customer_name: orderData.name,
        customer_email: orderData.email,
        customer_address: orderData.address,
        order_date: orderData.date,
        payment_gateway: orderData.gateway,
        order_total: `€${orderData.total.toFixed(2)}`,
        order_items: orderData.items.map(i => `${i.qty}x ${i.title} (Colore: ${i.color || 'Standard'}) - €${(i.price * i.qty).toFixed(2)}`).join('\n')
    };

    emailjs.send(LS3D_CONFIG.emailjs.serviceId, LS3D_CONFIG.emailjs.orderTemplateId, templateParams)
        .then(response => console.log('Email ordine inviata con successo!', response.status))
        .catch(error => console.error('Errore invio email ordine:', error));
}

// 2. Invio email per i Messaggi di Contatto/Info (usa contactTemplateId)
function sendContactEmail(contactData, onSuccess, onError) {
    if (typeof LS3D_CONFIG === 'undefined') {
        if (typeof onError === 'function') onError("Configurazione mancante");
        return;
    }

    const templateParams = {
        from_name: contactData.name,
        from_email: contactData.email,
        message: contactData.message,
        to_name: "LS3Dmaker Admin"
    };

    emailjs.send(LS3D_CONFIG.emailjs.serviceId, LS3D_CONFIG.emailjs.contactTemplateId, templateParams)
        .then(response => {
            if (typeof onSuccess === 'function') onSuccess(response);
        })
        .catch(error => {
            if (typeof onError === 'function') onError(error);
        });
}
