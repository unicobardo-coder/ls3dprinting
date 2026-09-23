// --- GESTIONE INVIO EMAIL DI CONFERMA (EMAILJS) ---

function sendOrderConfirmationEmail(orderData) {
    if (!orderData || !orderData.items) return;

    const orderSummaryText = orderData.items.map(i => `${i.qty || 1}x ${i.title} (${i.color || 'Standard'}) - €${((Number(i.price) || 0) * (Number(i.qty) || 1)).toFixed(2)}`).join('\n');
    
    const emailParams = {
        to_email: orderData.email,
        customer_name: orderData.name,
        customer_address: orderData.address,
        order_id: orderData.id,
        order_total: Number(orderData.total || 0).toFixed(2),
        order_items: orderSummaryText,
        payment_gateway: orderData.gateway
    };

    if (typeof emailjs !== 'undefined') {
        emailjs.send("service_1nyj1gz", "template_437dnsk", emailParams)
            .then(function(response) {
                console.log("Email di conferma inviata con successo!", response.status);
            }, function(error) {
                console.error("Errore invio email:", error);
            });
    } else {
        console.warn("SDK EmailJS non trovato.");
    }
}
