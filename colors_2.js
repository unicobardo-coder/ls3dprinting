const defaultFilamentColors = [
    { name: "Nero", code: "#111827" },
    { name: "Bianco", code: "#f9fafb" },
    { name: "Grigio", code: "#6b7280" },
    { name: "Rosso", code: "#ef4444" },
    { name: "Blu", code: "#3b82f6" },
    { name: "Verde", code: "#10b981" },
    { name: "Giallo", code: "#f59e0b" },
    { name: "Arancione", code: "#f97316" },
    { name: "Viola", code: "#8b5cf6" },
    { name: "Rosa", code: "#ec4899" },
    { name: "Oro", code: "#d97706" },
    { name: "Argento", code: "#9ca3af" },
    { name: "Trasparente", code: "#e5e7eb" }
];

// Funzione che unisce i colori di default con quelli personalizzati salvati nell'Admin
function getDynamicFilamentColors() {
    try {
        const customColors = JSON.parse(localStorage.getItem('ls3d_colors'));
        if (customColors && Array.isArray(customColors) && customColors.length > 0) {
            const map = new Map();
            defaultFilamentColors.forEach(c => map.set(c.name.toLowerCase(), c));
            customColors.forEach(c => map.set(c.name.toLowerCase(), c));
            return Array.from(map.values());
        }
    } catch (e) {}
    return defaultFilamentColors;
}

// Variabile globale accessibile da catalogo, home e admin
const filamentColors = getDynamicFilamentColors();
