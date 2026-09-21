// --- GESTIONE UTENTE, PASSWORD E RECENSIONI (auth.js) ---

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
    const passwordEl = document.getElementById('auth-password');
    
    const username = usernameEl ? usernameEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";
    const password = passwordEl ? passwordEl.value.trim() : "";

    if (!username || !email || !password) {
        alert("Per favore, compila tutti i campi (Username, Email e Password).");
        return;
    }

    // Recupera la lista degli utenti registrati salvati nel browser
    let users = JSON.parse(localStorage.getItem('ls3d_users')) || [];
    let existingUser = users.find(u => u.email === email);

    if (existingUser) {
        // Se l'utente esiste già, verifica che la password corrisponda
        if (existingUser.password !== password) {
            alert("Password errata! Riprova.");
            return;
        }
        currentUser = existingUser;
    } else {
        // Se non esiste, crea un nuovo account e salvalo
        currentUser = { username, email, password };
        users.push(currentUser);
        localStorage.setItem('ls3d_users', JSON.stringify(users));
    }

    // Salva l'utente corrente attivo
    localStorage.setItem('ls3d_current_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    alert(`Bentornato, ${currentUser.username}! Accesso effettuato con successo.`);
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
        alert("Devi prima effettuare l'accesso per poter lasciare un commento.");
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

    if (typeof openProductModal === 'function') {
        openProductModal(prodId);
    }
}

// Inizializzazione automatica UI utente al caricamento
document.addEventListener("DOMContentLoaded", () => {
    updateAuthUI();
});
