// filtrer les nombres pairs dans un tableau
function filtrerNombresPairs(tableau){
    return tableau.filter(function(valeur){
         return valeur%2==0
    })
}

// Trier par ordre croissant
function trierParOrdreCroissant(tableau){
    return tableau.sort()
}


// somme des elements d'un tableau
function sommeDesElementsDuTableau(tableau){
    let somme=0
    tableau.forEach(function(valeur){
        somme= somme + valeur
    })
    return somme
}

//  pour mettre la 1ere lettre d'une chaine ou celle de chaque mot d'une chaine en majuscule
function capitalizeWordAndSentence(chaine){
        const mots=chaine.split(" ")
        const phrase=mots.map(function(mot){
            return mot.charAt(0).toUpperCase() + mot.slice(1)
        })
        return phrase.join(" ")
}  

// filtrer les éléments supérieurs à 2 dans un tableau
export function filtrerElementsSuperieursA2(tableau){
             return tableau.filter(function(valeur){
                return valeur>2
            })
        }

// mot le plus long d'une chaine
export function motLePlusLong(chaine){
        return chaine.split(" ").reduce((motPrecedent, motSuivant) => {
            return motPrecedent.length > motSuivant.length ? motPrecedent : motSuivant
        })
    }

export function masquerNumeroDeTelephone(numero){
    return numero.replace(numero.slice(0,numero.length-4),"*".repeat(numero.length-4))
}

// palindrome
export function estUnPalindrome(chaine){
        return chaine===chaine.split("").reverse().join("")? console.log(chaine + " est un palindrome" ): console.log(chaine + " n'est pas un palindrome")
}

// inverser l'ordre des elements d'un tableau ou une chaine
export function inverserOrdre(tableau){
    return tableau.reverse()
}

// trouver les hashtags
export function findHashtag(chaine){
    chaine.forEach(function(){
      if(chaine.includes("#") ){
        return chaine.indexOf("#")
      }
    })   
}

export {sommeDesElementsDuTableau, capitalizeWordAndSentence, trierParOrdreCroissant, filtrerNombresPairs}