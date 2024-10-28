function calculerAge(dateNaissance) {
    const aujourdHui = new Date();
    const dateNaissanceObj = new Date(dateNaissance);

    let age = aujourdHui.getFullYear() - dateNaissanceObj.getFullYear();
    const mois = aujourdHui.getMonth() - dateNaissanceObj.getMonth();
    const jour = aujourdHui.getDate() - dateNaissanceObj.getDate();

    // Ajustement si l'anniversaire n'est pas encore passé cette année
    // if (mois < 0 || (mois === 0 && jour < 0)) {
    //     age--;
    // }

    return age;
}

// Exemple d'utilisation
console.log(calculerAge("1990-05-15")); // Affiche 34 en 2024
