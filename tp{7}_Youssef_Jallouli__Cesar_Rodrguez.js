// coéquipier # 1: César Rodriguez
// coéquipier # 2: Youssef Jallouli
/**
 * Cette fonction permet à l'utilisateur
 * d'initialiser une histoire
 *
 * @param {string} n:le nombre de phrases 
 */

var creerHistoire = function(n) {
   
  switch (n>0){
    case true: pause();
      var phrase = prompt(last_3_words);
      var tab1 = phrase.split(" ");
      last_3_words =
      [tab1[tab1.length - 2],tab1[tab1.length - 1],tab1[tab1.length-1]].join(" ");
          tab2 = (tab2.concat(tab1)); 
      confirm("Passez le contrôle à l'autre joueur!");
 
      creerHistoire(n-1);
      break;
      
    
    case false :
  print(tab1);
      return tab1;
      
  }
  return tab2
  
};
do{var n = prompt("Vous etes combien de joueurs SVP ? ");
}while(n<=0);

var histoire = creerHistoire(n);
print(histoire);



    /* if (tab1.length>2){
      Avant_A_derniere = tab1[tab1.length - 3];
      Avant_derniere = tab1[tab1.length - 2];
      Dernière = tab1[tab1.length - 1]
    }else 
   if (tab1.length>0) {Avant_A_derniere = tab1[0]};
   if (tab1.length>1){Avant_derniere = tab1[1]};
   if (tab1.length>2){Dernière = tab1[2]};
 */

  /*
    while (i <= n) {
    i++; 
    var nvPhrase = prompt(three_last_words);
    var tab2 = nvPhrase.split(" ");
    tab1 = tab1.concat(tab2);
    if (tab1.length>2){
        Avant_A_derniere = tab1[tab1.length - 3];
        Avant_derniere = tab1[tab1.length - 2];
        Dernière = tab1[tab1.length - 1]
      }else 
     if (tab1.length>0) {Avant_A_derniere = tab1[0]};
     if (tab1.length>1){Avant_derniere = tab1[1]};
     if (tab1.length>2){Dernière = tab1[2]};    var three_last_words =
      Avant_A_derniere + " " + Avant_derniere + " " + Dernière;
    if (i < n) confirm("Passez le contrôle à l'autre joueur!");
   */