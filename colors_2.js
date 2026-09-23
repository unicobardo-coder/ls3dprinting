// Elenco globale dei colori con nome e codice esadecimale per i pallini visivi
let filamentColors = JSON.parse(localStorage.getItem('ls3d_filament_colors')) || [
    { name: "Nero Opaco", code: "#111827" },
    { name: "Bianco Perla", code: "#f3f4f6" },
    { name: "Grigio Techno", code: "#6b7280" },
    { name: "Verde Brand", code: "#10b981" },
    { name: "Rosso Fuoco", code: "#ef4444" },
    { name: "Blu Elettrico", code: "#3b82f6" },
    { name: "Oro Seta", code: "#eab308" },
    { name: "Argento Metallico", code: "#9ca3af" }
];

function saveFilamentColors(colors) {
    localStorage.setItem('ls3d_filament_colors', JSON.stringify(colors));
}

function addFilamentColor(name, code) {
    if (name && !filamentColors.some(c => c.name === name)) {
        filamentColors.push({ name, code: code || "#10b981" });
        saveFilamentColors(filamentColors);
    }
}

function removeFilamentColor(colorName) {
    filamentColors = filamentColors.filter(c => c.name !== colorName);
    saveFilamentColors(filamentColors);
}
