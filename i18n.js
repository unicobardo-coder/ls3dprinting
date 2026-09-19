const translations = {
    it: {
        navProducts: "Prodotti & Catalogo",
        navAbout: "Chi Siamo",
        navQuote: "Preventivi",
        navAdmin: "Admin",
        cartTitle: "Carrello",
        cartTotal: "Totale Carrello:",
        continueShopping: "Continua Shopping",
        checkoutBtn: "Vai al Checkout →",
        heroBadge: "Soluzioni di Stampa 3D & Prototipazione",
        heroTitle1: "Trasforma le tue idee in",
        heroTitle2: "Stampe 3D",
        catalogTitle: "Cataloghi & Modelli",
        
        // Chi Siamo (Italiano)
        aboutTitle: "Chi è LS3DMAKER",
        aboutSubtitle: "Artigianato digitale, prototipazione rapida e passione per la stampa 3D a Bologna.",
        aboutText1: "Siamo un laboratorio di manifattura digitale e prototipazione 3D con sede a Bologna. Trasformiamo idee, progetti e concept geometrici in oggetti reali, funzionali e di altissimo design.",
        aboutText2: "Utilizziamo stampanti di ultima generazione e una vasta gamma di filamenti tecnici e decorativi per garantire precisione millimetrica e finiture impeccabili, sia per singoli pezzi unici che per piccole serie."
    },
    en: {
        navProducts: "Products & Catalog",
        navAbout: "About Us",
        navQuote: "Quotes",
        navAdmin: "Admin",
        cartTitle: "Cart",
        cartTotal: "Cart Total:",
        continueShopping: "Continue Shopping",
        checkoutBtn: "Proceed to Checkout →",
        heroBadge: "3D Printing & Prototyping Solutions",
        heroTitle1: "Turn your ideas into",
        heroTitle2: "3D Prints",
        catalogTitle: "Catalogs & Models",
        
        // Chi Siamo (Inglese)
        aboutTitle: "About LS3DMAKER",
        aboutSubtitle: "Digital craftsmanship, rapid prototyping, and a passion for 3D printing in Bologna.",
        aboutText1: "We are a digital manufacturing and 3D prototyping laboratory based in Bologna. We transform ideas, designs, and geometric concepts into real, functional, and high-design objects.",
        aboutText2: "We use state-of-the-art printers and a wide range of technical and decorative filaments to ensure millimeter precision and impeccable finishes, for both single unique pieces and small series."
    },
    fr: {
        navProducts: "Produits & Catalogue",
        navAbout: "À Propos",
        navQuote: "Devis",
        navAdmin: "Admin",
        cartTitle: "Panier",
        cartTotal: "Total du panier:",
        continueShopping: "Continuer les achats",
        checkoutBtn: "Passer à la caisse →",
        heroBadge: "Solutions d'Impression 3D & Prototypage",
        heroTitle1: "Transformez vos idées en",
        heroTitle2: "Impressions 3D",
        catalogTitle: "Catalogues & Modèles",
        
        // Chi Siamo (Francese)
        aboutTitle: "À propos de LS3DMAKER",
        aboutSubtitle: "Artisanat numérique, prototypage rapide et passion pour l'impression 3D à Bologne.",
        aboutText1: "Nous sommes un laboratoire de fabrication numérique et de prototypage 3D basé à Bologne. Nous transformons des idées, des conceptions et des concepts géométriques en objets réels, fonctionnels et haut de gamme.",
        aboutText2: "Nous utilisons des imprimantes de pointe et une large gamme de filaments techniques et décoratifs pour garantir une précision millimétrique et des finitions impeccables."
    },
    es: {
        navProducts: "Productos & Catálogo",
        navAbout: "Quiénes Somos",
        navQuote: "Presupuestos",
        navAdmin: "Admin",
        cartTitle: "Carrito",
        cartTotal: "Total del Carrito:",
        continueShopping: "Continuar Comprando",
        checkoutBtn: "Ir al Pago →",
        heroBadge: "Soluciones de Impresión 3D & Prototipado",
        heroTitle1: "Transforma tus ideas en",
        heroTitle2: "Impresiones 3D",
        catalogTitle: "Catálogos & Modelos",
        
        // Chi Siamo (Spagnolo)
        aboutTitle: "Quiénes Somos - LS3DMAKER",
        aboutSubtitle: "Artesanía digital, creación rápida de prototipos y pasión por la impresión 3D en Bolonia.",
        aboutText1: "Somos un laboratorio de fabricación digital y prototipado 3D con sede en Bolonia. Transformamos ideas, diseños y conceptos geométricos en objetos reales, funcionales y de gran diseño.",
        aboutText2: "Utilizamos impresoras de última generación y una amplia gama de filamentos técnicos y decorativos para garantizar una precisión milimétrica y unos acabados impecables."
    },
    de: {
        navProducts: "Produkte & Katalog",
        navAbout: "Über Uns",
        navQuote: "Angebote",
        navAdmin: "Admin",
        cartTitle: "Warenkorb",
        cartTotal: "Warenkorb-Gesamt:",
        continueShopping: "Einkauf fortsetzen",
        checkoutBtn: "Zur Kasse →",
        heroBadge: "3D-Druck & Prototyping Lösungen",
        heroTitle1: "Verwandeln Sie Ihre Ideen in",
        heroTitle2: "3D-Drucke",
        catalogTitle: "Kataloge & Modelle",
        
        // Chi Siamo (Tedesco)
        aboutTitle: "Über LS3DMAKER",
        aboutSubtitle: "Digitale Handwerkskunst, Rapid Prototyping und Leidenschaft für den 3D-Druck in Bologna.",
        aboutText1: "Wir sind ein Labor für digitale Fertigung und 3D-Prototyping mit Sitz in Bologna. Wir verwandeln Ideen, Designs und geometrische Konzepte in reale, funktionale und formschöne Objekte.",
        aboutText2: "Wir nutzen modernste Drucker und eine breite Palette technischer und dekorativer Filamente, um millimetergenaue Präzision und makellose Oberflächen zu gewährleisten."
    }
};

// Funzione di cambio lingua aggiornata per includere anche il Tedesco (de)
function setLanguage(lang) {
    localStorage.setItem('ls3d_lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    const select = document.getElementById('lang-select');
    if (select) select.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('ls3d_lang') || 'it';
    setLanguage(savedLang);
});
