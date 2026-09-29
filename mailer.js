// ==========================================
// CONFIGURAZIONE EMAILJS PER LS3DMAKER
// ==========================================

(function() {
    // Inizializzazione con la tua chiave pubblica EmailJS (Public Key)
    emailjs.init("hopoM4it_MqCl4KlT"); 
})();

/**
 * 1. Invia l'email di riepilogo per una nuova richiesta d'ordine (da checkout.html)
 */
function sendOrderConfirmationEmail(orderData) {
    // Genera la lista formattata dei prodotti nel carrello
    const itemsSummary = orderData.items.map(item => 
        `• ${item.qty}x ${item.title} (Colore: ${item.color || 'Standard'}) - Prezzo: €${(Number(item.price) * Number(item.qty)).toFixed(2)}`
    ).join('\n');

    const templateParams = {
        to_name: orderData.name,
        to_email: orderData.email,
        order_number: orderData.number,
        order_date: orderData.date,
        order_items: itemsSummary,
        shipping_address: orderData.address,
        payment_method: orderData.gateway || "Contatto Diretto / Email",
        order_total: Number(orderData.total || 0).toFixed(2)
    };

    // Sostituisci 'IL_TUO_SERVICE_ID' e 'IL_TUO_TEMPLATE_ID' con i tuoi codici reali di EmailJS
    emailjs.send('service_1nyj1gz', 'template_3xsmrsf', templateParams)
        .then(function(response) {
            console.log('Email ordine inviata con successo!', response.status, response.text);
        }, function(error) {
            console.error('Errore durante l invio dell email ordine:', error);
        });
}

/**
 * 2. Invia l'email per una richiesta di informazioni o preventivo (da info.html)
 */
function sendInfoRequestEmail(infoData) {
    const templateParams = {
        to_name: infoData.name,
        to_email: infoData.email,
        order_number: "RICHIESTA-INFO",
        order_date: new Date().toLocaleDateString('it-IT'),
        order_items: `Messaggio ricevuto dal form di contatto:\n\n${infoData.message}`,
        shipping_address: "Non richiesta",
        payment_method: "N/A",
        order_total: "0.00"
    };

    // Puoi usare lo stesso Service ID e Template ID (o crearne uno specifico su EmailJS)
    emailjs.send('service_1nyj1gz', 'template_ltm9vpm', templateParams)
        .then(function(response) {
            console.log('Richiesta informazioni inviata con successo!', response.status, response.text);
        }, function(error) {
            console.error('Errore durante l invio della richiesta info:', error);
        });
}
