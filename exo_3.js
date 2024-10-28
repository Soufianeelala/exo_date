function prochaineDateDansUneSemaine(dateStr) {
    const date = new Date(dateStr);
    
    // Ajoute 7 jours (7 * 24 * 60 * 60 * 1000 millisecondes)
    date.setDate(date.getDate() + 7);

    return date.toISOString().split("T")[0]; // Retourne au format "YYYY-MM-DD"
}

// Exemple d'utilisation
console.log(prochaineDateDansUneSemaine("2024-10-10")); // Affiche "2024-10-17"
