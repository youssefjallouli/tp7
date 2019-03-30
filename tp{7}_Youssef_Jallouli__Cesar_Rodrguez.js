// coéquipier # 1: César Rodriguez
// coéquipier # 2: Youssef Jallouli
/**
 * Cette fonction permet à l'utilisateur
 * d'initialiser une histoire
 *
 * @param {string} n:le nombre de phrases
 */

var creerHistoire = function(n) {
  switch (n > 0 && tab1 == "") {
    case true:
      var trois_d = " Entrez une phrase!";
      var phrase = prompt(trois_d);
      var last_3_words = phrase.split(" ");
      tab1 = last_3_words;
      confirm("Passez le contrôle à l'autre joueur!");
      creerHistoire(n - 1);
      break;

    case false:
      if (n == 0) {
        break;
      }

      var trois_d = [
        tab1[tab1.length - 3],
        tab1[tab1.length - 2],
        tab1[tab1.length - 1]
      ].join(" ");

      var phrase = prompt(trois_d);
      var last_3_words = phrase.split(" ");
      tab1 = tab1.concat(last_3_words);
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

