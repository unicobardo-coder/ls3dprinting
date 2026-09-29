const LS3D_CONFIG = {  
    emailjs: {  
        publicKey: "hopoM4it_MqCl4KlT",  
        serviceId: "service_1nyj1gz",  
        orderTemplateId: "template_3xsmrsf",  
        contactTemplateId: "template_3xsmrsf"  
    },  
    paypal: {  
        clientId: "IL_TUO_PAYPAL_CLIENT_ID"  
    },  
    stripe: {  
        publicKey: "pk_test_..."  
    },
    
    // Configurazione del Contatore Visite
    counter: {
        enabled: true,
        storageKey: "ls3d_visit_counter",
        init: function() {
            if (!this.enabled) return 0;
            // Parte da una base iniziale (es. 1250) e incrementa a ogni nuova sessione
            let count = parseInt(localStorage.getItem(this.storageKey) || "1250", 10);
            if (!sessionStorage.getItem("ls3d_visited")) {
                count += 1;
                localStorage.setItem(this.storageKey, count);
                sessionStorage.setItem("ls3d_visited", "true");
            }
            return count;
        }
    }
};

// Iniezione automatica del contatore nel footer di ogni pagina
window.addEventListener('DOMContentLoaded', () => {
    if (window.LS3D_CONFIG && LS3D_CONFIG.counter) {
        const totalVisits = LS3D_CONFIG.counter.init();
        const footer = document.querySelector('footer');
        if (footer && !document.getElementById('visitor-counter-badge')) {
            const badge = document.createElement('div');
            badge.id = 'visitor-counter-badge';
            badge.className = 'mt-2 text-[10px] text-gray-600 font-mono flex items-center justify-center gap-1.5';
            badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> Visite totali: <strong class="text-gray-400">${totalVisits}</strong>`;
            footer.appendChild(badge);
        }
    }
});
