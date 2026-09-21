// --- GESTIONE UTENTE, REGISTRAZIONE E RECENSIONI (auth.js) ---

let currentUser = JSON.parse(localStorage.getItem('ls3d_current_user')) || null;

function updateAuthUI() {
    const label = document.getElementById('user-status-label');
    if (label) {
        label.innerText = currentUser ? currentUser.username : "Accedi";
    }
}

function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    const form = document.getElementById('auth-form');
    const info = document.getElementById('user-logged-info');
    
    if (!modal) return;

    if (currentUser) {
        if(form) form.classList.add('hidden');
        if(info) info.classList.remove('hidden');
        const usernameEl = document.getElementById('logged-username');
        if(usernameEl) usernameEl.innerText = currentUser.username;
    } else {
        if(form) form.classList.remove('hidden');
        if(info) info.classList.add('hidden');
    }
    modal.classList.remove('hidden');
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if(modal) modal.classList.add('hidden');
}

function handleUserAuth() {
    const usernameEl = document.getElementById('auth-username');
    const emailEl = document.getElementById('auth-email');
    
    const username = usernameEl ? usernameEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";

    if (!username || !email) {
        alert("Inserisci username ed email per registrarti.");
        return;
    }

    currentUser = { username, email };
    localStorage.setItem('ls3d_current_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    alert(`Registrazione effettuata con successo! Benvenuto, ${username}.`);
}

function handleUserLogout() {
    currentUser = null;
    localStorage.removeItem('ls3d_current_user');
    updateAuthUI();
    closeAuthModal();
    alert("Disconnessione effettuata.");
}

// --- AGGIUNTA RECENSIONE PRODOTTO ---
function addProductReview(prodId) {
    if (!currentUser) {
        alert("Devi prima registrarti o effettuare l'accesso per poter lasciare un commento.");
        openAuthModal();
        return;
    }

    const textInput = document.getElementById('new-comment-text');
    const commentText = textInput ? textInput.value.trim() : "";

    if (!commentText) {
        alert("Scrivi il testo del commento prima di inviare.");
        return;
    }

    let products = JSON.parse(localStorage.getItem('ls3d_products')) || [];
    const p = products.find(item => item.id === prodId);
    if (!p) return;

    if (!p.reviews) p.reviews = [];

    p.reviews.push({
        user: currentUser.username,
        comment: commentText,
        date: new Date().toLocaleDateString('it-IT')
    });

    localStorage.setItem('ls3d_products', JSON.stringify(products));

    // Aggiorna la modale aperta se esiste la funzione
    if (typeof openProductModal === 'function') {
        openProductModal(prodId);
    }
}

// Inizializzazione automatica UI utente al caricamento
document.addEventListener("DOMContentLoaded", () => {
    updateAuthUI();
});
