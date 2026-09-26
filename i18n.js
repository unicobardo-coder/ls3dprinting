// i18n.js - Gestione multilingua centralizzata per LS3DMAKER (IT, EN, FR, ES, DE)
const i18nTranslations = {
    it: {
        nav_chisiamo: "Chi Siamo",
        nav_catalogo: "Catalogo 3D",
        nav_accedi: "Accedi / Registrati",
        nav_admin: "Admin",
        hero_title: "Stampa 3D di Alta Precisione",
        hero_subtitle: "Realizziamo i tuoi progetti con materiali avanzati e finiture curate nei minimi dettagli.",
        hero_cta: "Esplora il Catalogo",
        vetrina_title: "Prodotti in Vetrina",
        vetrina_desc: "Clicca su un prodotto per visualizzarne i dettagli e l'anteprima 3D.",
        vetrina_all: "Vedi tutti →",
        cart_title: "Il tuo Carrello",
        cart_total: "Totale (incl. spedizione):",
        cart_checkout: "Procedi al Checkout Sicuro",
        empty_cart: "Il carrello è vuoto.",
        footer_copy: "LS3DMAKER © 2026 - Tutti i diritti riservati"
    },
    en: {
        nav_chisiamo: "About Us",
        nav_catalogo: "3D Catalog",
        nav_accedi: "Sign In / Register",
        nav_admin: "Admin",
        hero_title: "High-Precision 3D Printing",
        hero_subtitle: "We bring your projects to life with advanced materials and meticulous finishes.",
        hero_cta: "Explore Catalog",
        vetrina_title: "Featured Products",
        vetrina_desc: "Click on a product to view details and 3D preview.",
        vetrina_all: "View all →",
        cart_title: "Your Cart",
        cart_total: "Total (incl. shipping):",
        cart_checkout: "Proceed to Secure Checkout",
        empty_cart: "Your cart is empty.",
        footer_copy: "LS3DMAKER © 2026 - All rights reserved"
    },
    fr: {
        nav_chisiamo: "À propos",
        nav_catalogo: "Catalogue 3D",
        nav_accedi: "Connexion / S'inscrire",
        nav_admin: "Admin",
        hero_title: "Impression 3D de Haute Précision",
        hero_subtitle: "Nous donnons vie à vos projets avec des matériaux avancés et des finitions soignées.",
        hero_cta: "Explorer le Catalogue",
        vetrina_title: "Produits en Vedette",
        vetrina_desc: "Cliquez sur un produit pour voir les détails et l'aperçu 3D.",
        vetrina_all: "Voir tout →",
        cart_title: "Votre Panier",
        cart_total: "Total (frais de port incl.):",
        cart_checkout: "Procéder au Paiement Sécurisé",
        empty_cart: "Votre panier est vide.",
        footer_copy: "LS3DMAKER © 2026 - Tous droits réservés"
    },
    es: {
        nav_chisiamo: "Quiénes Somos",
        nav_catalogo: "Catálogo 3D",
        nav_accedi: "Iniciar Sesión / Registrarse",
        nav_admin: "Admin",
        hero_title: "Impresión 3D de Alta Precisión",
        hero_subtitle: "Hacemos realidad tus proyectos con materiales avanzados y acabados minuciosos.",
        hero_cta: "Explorar Catálogo",
        vetrina_title: "Productos Destacados",
        vetrina_desc: "Haz clic en un producto para ver los detalles y la vista previa 3D.",
        vetrina_all: "Ver todos →",
        cart_title: "Tu Carrito",
        cart_total: "Total (envío incl.):",
        cart_checkout: "Proceder al Pago Seguro",
        empty_cart: "El carrito está vacío.",
        footer_copy: "LS3DMAKER © 2026 - Todos los derechos reservados"
    },
    de: {
        nav_chisiamo: "Über uns",
        nav_catalogo: "3D-Katalog",
        nav_accedi: "Anmelden / Registrieren",
        nav_admin: "Admin",
        hero_title: "Hochpräziser 3D-Druck",
        hero_subtitle: "Wir verwirklichen Ihre Projekte mit fortschrittlichen Materialien und sorgfältigen Oberflächen.",
        hero_cta: "Katalog erkunden",
        vetrina_title: "Empfohlene Produkte",
        vetrina_desc: "Klicken Sie auf ein Produkt, um Details und 3D-Vorschau anzuzeigen.",
        vetrina_all: "Alle anzeigen →",
        cart_title: "Ihr Warenkorb",
        cart_total: "Gesamt (inkl. Versand):",
        cart_checkout: "Weiter zur sicheren Kasse",
        empty_cart: "Ihr Warenkorb ist leer.",
        footer_copy: "LS3DMAKER © 2026 - Alle Rechte vorbehalten"
    }
};

function changeLanguage(lang) {
    if (!i18nTranslations[lang]) return;
    const t = i18nTranslations[lang];

    // Mappatura dinamica degli elementi della pagina
    const elements = {
        'nav-chisiamo': t.nav_chisiamo,
        'nav-catalogo': t.nav_catalogo,
        'nav-accedi': t.nav_accedi,
        'nav-admin': t.nav_admin,
        'hero-title': t.hero_title,
        'hero-subtitle': t.hero_subtitle,
        'hero-cta': t.hero_cta,
        'vetrina-title': t.vetrina_title,
        'vetrina-desc': t.vetrina_desc,
        'vetrina-all': t.vetrina_all,
        'cart-title': t.cart_title,
        'cart-total-label': t.cart_total,
        'cart-checkout-btn': t.cart_checkout,
        'footer-copy': t.footer_copy
    };

    for (const [id, text] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    }

    localStorage.setItem('preferred_lang', lang);
    document.documentElement.lang = lang;
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'it';
    const selectElement = document.getElementById('lang-selector');
    if (selectElement) {
        selectElement.value = savedLang;
    }
    changeLanguage(savedLang);
});
