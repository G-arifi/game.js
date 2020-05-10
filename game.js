function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
var reponse = entierAleatoire(1, 100);
console.log(reponse);

alert("T'as 5 chances choisie un chifre entre 1-100 ");
var tries = 2;
for (let i = 1; i <= tries; i++){
var saisie = prompt("que pense tu?");
console.log(saisie);


    if (reponse == saisie){
            alert("ton reponse est correct");
            break;
    } else if (reponse > saisie){
        alert("c'est plus grand");
        
    } else if (reponse < saisie){
        alert("c'est plus petit");
    }


    if (i == tries){
    alert(`vous avez eu que ${tries} essaies `);
    }
}

