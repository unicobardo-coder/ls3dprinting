// Elenco globale dei colori e materiali disponibili per i filamenti 3D
let filamentColors = JSON.parse(localStorage.getItem('ls3d_filament_colors')) || [
    "Nero Opaco", 
    "Bianco Perla", 
    "Grigio Techno", 
    "Verde Brand", 
    "Rosso Fuoco", 
    "Blu Elettrico", 
    "Oro Seta", 
    "Argento Metallico"
];

function saveFilamentColors(colors) {
    localStorage.setItem('ls3d_filament_colors', JSON.stringify(colors));
}

function addFilamentColor(colorName) {
    if (colorName && !filamentColors.includes(colorName)) {
        filamentColors.push(colorName);
        saveFilamentColors(filamentColors);
    }
}

function removeFilamentColor(colorName) {
    filamentColors = filamentColors.filter(c => c !== colorName);
    saveFilamentColors(filamentColors);
}
