function joursRestants(dateCibleStr) {
    const dateCible = new Date(dateCibleStr);
    const aujourdHui = new Date();
    
    // Réinitialiser l'heure pour éviter les problèmes d'heures/minutes/secondes
    aujourdHui.setHours(0, 0, 0, 0);
    dateCible.setHours(0, 0, 0, 0);

    // Calcule la différence en millisecondes
    const differenceEnMillisecondes = dateCible - aujourdHui;

    // Convertit la différence en jours
    const joursRestants = Math.ceil(differenceEnMillisecondes / (1000 * 60 * 60 * 24));

    // Si la date est passée, retourne 0
    return joursRestants < 0 ? 0 : joursRestants;
}

// Exemple d'utilisation
const dateCible = "2024-12-25"; // Noël
console.log(joursRestants(dateCible)); // Affiche le nombre de jours restants jusqu'au 25 décembre 2024
