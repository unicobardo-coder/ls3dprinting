// Dizionario multilingua per LS3Dmaker (Italiano, Inglese, Spagnolo, Francese)
const translations = {
    it: {
        flag: "🇮🇹",
        navProducts: "Prodotti",
        navAbout: "Chi Siamo",
        navQuote: "Preventivi",
        navAdmin: "Admin",
        cartTitle: "Carrello",
        cartEmpty: "Il carrello è vuoto.",
        cartTotal: "Totale Carrello:",
        continueShopping: "Continua Shopping",
        checkoutBtn: "Vai al Checkout →",
        heroBadge: "Soluzioni di Stampa 3D & Prototipazione",
        heroTitle1: "Trasforma le tue idee in",
        heroTitle2: "Stampe 3D",
        heroDesc: "Trasformiamo i tuoi progetti digitali in oggetti reali con materiali ad alta precisione e tecnologie avanzate.",
        catalogTitle: "Cataloghi & Modelli",
        filamentColor: "Colore Filamento:",
        addToCart: "Aggiungi al Carrello",
        backToCatalog: "← Torna al Catalogo",
        footerRights: "Tutti i diritti riservati."
    },
    en: {
        flag: "🇬🇧",
        navProducts: "Products",
        navAbout: "About",
        navQuote: "Quote Request",
        navAdmin: "Admin",
        cartTitle: "Your Cart",
        cartEmpty: "Your cart is empty.",
        cartTotal: "Total:",
        continueShopping: "Continue Shopping",
        checkoutBtn: "Proceed to Checkout →",
        heroBadge: "3D Printing & Prototyping Solutions",
        heroTitle1: "Turn Your Ideas into",
        heroTitle2: "3D Prints",
        heroDesc: "We turn your digital projects into real objects with high-precision materials and advanced technologies.",
        catalogTitle: "Catalog & Models",
        filamentColor: "Filament Color:",
        addToCart: "Add to Cart",
        backToCatalog: "← Back to Catalog",
        footerRights: "All rights reserved."
    },
    es: {
        flag: "🇪🇸",
        navProducts: "Productos",
        navAbout: "Sobre Nosotros",
        navQuote: "Presupuestos",
        navAdmin: "Admin",
        cartTitle: "Tu Carrito",
        cartEmpty: "El carrito está vacío.",
        cartTotal: "Total Carrito:",
        continueShopping: "Seguir Comprando",
        checkoutBtn: "Proceder al Pago →",
        heroBadge: "Soluciones de Impresión 3D y Prototipado",
        heroTitle1: "Convierte tus ideas en",
        heroTitle2: "Impresiones 3D",
        heroDesc: "Convertimos tus proyectos digitales en objetos reales con materiales de alta precisión y tecnologías avanzadas.",
        catalogTitle: "Catálogo y Modelos",
        filamentColor: "Color de Filamento:",
        addToCart: "Añadir al Carrito",
        backToCatalog: "← Volver al Catálogo",
        footerRights: "Todos los derechos reservados."
    },
    fr: {
        flag: "🇫🇷",
        navProducts: "Produits",
        navAbout: "À Propos",
        navQuote: "Devis",
        navAdmin: "Admin",
        cartTitle: "Votre Panier",
        cartEmpty: "Votre panier est vide.",
        cartTotal: "Total Panier :",
        continueShopping: "Continuer les achats",
        checkoutBtn: "Procéder au Paiement →",
        heroBadge: "Solutions d'Impression 3D & Prototypage",
        heroTitle1: "Transformez vos idées en",
        heroTitle2: "Impressions 3D",
        heroDesc: "Nous transformons vos projets numériques en objets réels grâce à des matériaux de haute précision et des technologies avancées.",
        catalogTitle: "Catalogue & Modèles",
        filamentColor: "Couleur du Filament :",
        addToCart: "Ajouter au Panier",
        backToCatalog: "← Retour au Catalogue",
        footerRights: "Tous droits réservés."
    }
};

// Gestione della lingua attiva (salvata in localStorage)
let currentLang = localStorage.getItem('ls3d_lang') || 'it';

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('ls3d_lang', lang);
        updatePageTexts();
    }
}

// Funzione che aggiorna i testi della pagina in base agli attributi data-i18n
function updatePageTexts() {
    const t = translations[currentLang];
    if (!t) return;

    // Aggiorna tutti gli elementi con attributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Aggiorna il selettore della lingua se presente nella pagina
    const selectEl = document.getElementById('lang-select');
    if (selectEl) {
        selectEl.value = currentLang;
    }
}

// Inizializzazione automatica al caricamento del DOM
document.addEventListener("DOMContentLoaded", () => {
    updatePageTexts();
});
