// ===== auth.js — Gestion de l'authentification avec localStorage =====

const AUTH_KEY = 'mii_users';
const SESSION_KEY = 'mii_session';

// Récupérer tous les utilisateurs
function getUsers() {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');
}

// Sauvegarder les utilisateurs
function saveUsers(users) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

// Récupérer la session courante
function getSession() {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}

// Connexion
function login(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email, nom: user.nom }));
        return { success: true, user };
    }
    return { success: false, message: 'Email ou mot de passe incorrect.' };
}

// Inscription
function register(nom, telephone, email, password) {
    const users = getUsers();
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'Un compte existe déjà avec cet email.' };
    }
    const newUser = { nom, telephone, email, password };
    users.push(newUser);
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email, nom }));
    return { success: true, user: newUser };
}

// Déconnexion
function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'index.html';
}

// Mise à jour de la navbar selon l'état de connexion
function updateNavbar() {
    const session = getSession();
    const authButtons = document.querySelector('.auth-buttons');
    if (!authButtons) return;

    if (session) {
        // Utilisateur connecté : afficher prénom + bouton déconnexion
        const signupBtn = authButtons.querySelector('.btn-signup, .btn-signup-link');
        if (signupBtn) signupBtn.remove();

        // Éviter les doublons
        if (!authButtons.querySelector('.btn-user-name')) {
            const userEl = document.createElement('span');
            userEl.className = 'btn-user-name';
            userEl.innerHTML = `<i class="fa-solid fa-circle-user" style="margin-right:6px;"></i>${session.nom.split(' ')[0]}`;
            authButtons.appendChild(userEl);

            const logoutBtn = document.createElement('button');
            logoutBtn.className = 'btn-logout';
            logoutBtn.textContent = 'Déconnexion';
            logoutBtn.addEventListener('click', logout);
            authButtons.appendChild(logoutBtn);
        }
    }
}

// Appel automatique au chargement
document.addEventListener('DOMContentLoaded', updateNavbar);
