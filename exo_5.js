function formaterDate(dateStr) {
    const date = new Date(dateStr);

    // Options pour le formatage
    const options = { 
        weekday: 'long', // Jour de la semaine (long)
        year: 'numeric', // Année complète
        month: 'long', // Mois (long)
        day: 'numeric' // Jour
    };

    // Utilisation de toLocaleDateString() pour obtenir le format
    return date.toLocaleDateString('fr-FR', options);
}

// Exemple d'utilisation
console.log(formaterDate("2024-10-12")); // Affiche "samedi 12 octobre 2024"
