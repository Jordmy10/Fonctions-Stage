# FONCTIONS-STAGE
Il contient toutes les fonctions utilitaires sur les **tableaux** et les **chaines de caractères** faites en **Javascript** et leurs explications, ainsi que le **timer** réalisé, le style qui lui a été appliqué et comment les méthodes utilisées marchent.

## I-Fonctions Javascript
### 1. filtrerNombrePairs()
Cette fonction filtre un tableau pris en argument et retourne un tableau ne contenant que des nombres pairs

```javascript
function filtrerNombresPairs(tableau){
    return tableau.filter(function(valeur){
         return valeur%2==0
    })
}
```
### 2. TrierParOrdreCroissant()
Permet de trier un tableau pris en argument par ordre croissant grace à la méthode **sort()**
```javascript
function trierParOrdreCroissant(tableau){
    return tableau.sort()
}
```
### 3. sommeDesElementsD'unTableau()
Permet d'additionner tous les éléments contenus dans un tableau en le parcourant avec la méthode **forEach**
```javascript
function sommeDesElementsDuTableau(tableau){
    let somme=0
    tableau.forEach(function(valeur){
        somme= somme + valeur
    })
    return somme
}
```
### 4. capitalizeWordAndSentence()
Permet de mettre en majuscule la 1ere lettre d'un mot ou celle de chaque mot d'une phrase.
```javascript
function capitalizeWordAndSentence(chaine){
    const mots=chaine.split(" ")
    const phrase=mots.map(function(mot){
        return mot.charAt(0).toUpperCase() + mot.slice (1)
    })
    return phrase.join(" ")
}  
```
La méthode **split(" ")** permet de créer un nouveau tableau à partir de la chaine prise en argument en utilisant un **séparateur (ici l'espace " ")**.
Ensuite un nouveau tableau est créé grace à la fonction **map()**, avec pour condition que la 1ere lettre de la valeur (**mot.charAt(0)**) sois mise en majuscule grace à la méthode **toUppercase()**, puis on concatène cette 1ere lettre avec la suite du mot grace à **mot.slice(1)**.
Pour joindre chaque valeur du nouveau tableau comme une phrase, on utilise la méthode **join(" ")** avec le séparateur d'espace.
### 5. filtrerElementsSuperieursA2()
Permet de filtrer un tableau en retournant uniquement les nombres supérieurs à 2
```javascript
function filtrerElementsSuperieursA2(tableau){
    return tableau.filter(function(valeur){
        return valeur>2
    })
}
```
### 6. motLePlusLong()
Permet d'afficher le mot le plus long d'une phrase prise en argument
```javascript
function motLePlusLong(chaine){
        return chaine.split(" ").reduce((motPrecedent, motSuivant) => {
            return motPrecedent.length > motSuivant.length ? motPrecedent : motSuivant
        })
    }
```
La méthode **reduce()** permet d'effectuer une orération entre une valeur initiale et une valeur finale au fur et à mesure qu'on parcours le tableau, et à la fin retourne la dernière valeur de l'opération. Ici l'oépration compare les longueurs de chaque valeur initiale et finale du tableau et renvoie la valeur ayant la plus grande longueur.
### 7. masquerNumeroDeTelephone()
Permet de masquer les 4 derniers chiffres d'un numéro de téléphone en les remplaçant par des étoiles.
```javascript
function masquerNumeroDeTelephone(numero){
    return numero.replace(numero.slice(0,numero.length-4),"*".repeat(numero.length-4))
}
```
### 8. estUnPalindrome()
Permet de dirte si une chaine de caractères est un palindrome ou pas
```javascript
function estUnPalindrome(chaine){
        return chaine===chaine.split("").reverse().join("")? console.log(chaine + " est un palindrome" ): console.log(chaine + " n'est pas un palindrome")
}
```
### 9. inverserOrdre()
Permet d'inverser l'ordre des éléments d'un tableau grace à **reverse()**
```javascript
unction inverserOrdre(tableau){
    return tableau.reverse()
}
```