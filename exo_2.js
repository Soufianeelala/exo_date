function estDateValide(dateStr) {
    const date = new Date(dateStr);

    // Vérifie si la date est invalide (NaN) ou si le format YYYY-MM-DD ne correspond pas
    if (isNaN(date.getTime())) {
        return false;
    }

    // Sépare la chaîne de date pour obtenir l'année, le mois et le jour
    const [annee, mois, jour] = dateStr.split("-").map(Number);

    // Vérifie si l'année, le mois et le jour correspondent exactement à ceux de l'objet Date
    return (
        date.getFullYear() === annee &&
        date.getMonth() === mois - 1 && // Mois commence à 0 dans Date, donc on soustrait 1
        date.getDate() === jour
    );
}

// Exemple d'utilisation
console.log(estDateValide("2024-02-29")); // true (année bissextile)
console.log(estDateValide("2023-02-29")); // false (non-bissextile)
console.log(estDateValide("2023-04-31")); // false (31 avril n'existe pas)
console.log(estDateValide("2022-12-25")); // true (date valide)
