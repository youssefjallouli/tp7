// coéquipier # 1: César Rodriguez
// coéquipier # 2: Youssef Jallouli
/**
 * Cette fonction
 * d'initialiser une histoire
 * @param {string} tab1 :Tableau contient tout les mots des joueurs en ordre
 * @param {string} n:le nombre de phrases
 */

var creerHistoire = function(n) {
    switch (n > 0 && tab1 == "") {
      case true:
        var phrase = prompt("Entrez une phrase");
        tab1 = phrase.split(" ");                         //(case true) permet au premier joueur de saisir sa phrase
        confirm("Passez le contrôle à l'autre joueur!"); //et de sauvegarder les mots de sa phrase dans le tableau tab1
        creerHistoire(n - 1);
        break;
  
      case false:
        if (n == 0) {
          //tout les joueurs ont donné leurs phrases  si n==0
          break;
        }
  
        var Trois_derniers_Mots_du_dernier_joueur = [
          tab1[tab1.length - 3],
          tab1[tab1.length - 2],
          tab1[tab1.length - 1]
        ].join(" ");
  
        var phrase = prompt(Trois_derniers_Mots_du_dernier_joueur);
        var tab_auxiliare_contient_les_motsde_phrase = phrase.split(" ");
        tab1 = tab1.concat(tab_auxiliare_contient_les_motsde_phrase);
        confirm("Passez le contrôle à l'autre joueur!");
  
        creerHistoire(n - 1);
        break;
    }
  
    return tab1.join(" ");
  };
  
  do {
    var n = prompt("Vous etes combien de joueurs SVP ? ");
  } while (n <= 0);
  var tab1 = "";
  var histoire = creerHistoire(n);
  print(histoire);
  
