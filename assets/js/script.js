/*//METTRE LE TEXTE EN COULEUR
function green(){
   document.getElementById('text').style.color = 'green';
}
function red(){
   document.getElementById('text').style.color = 'red';
}
function blue(){
   document.getElementById('text').style.color = 'blue';
}
*/
// EN 1 FONCTION
function changeColor(elmnt){  //function changeColor avec propriété elmnt
  var classValue = elmnt.getAttribute('class');  // on va rechercher l'attribut class avec getAttribute
  var classArray = classValue.split(' ');       // On utilise la fonction split pour séparer la chaîne de caractère, ici au niveau de l'espace (' '), contenu dans la variable classValue
  document.getElementById('text').style.color = classArray[1];  // on stocke le résultat dans la variable classArray qui devient un tableau.
}                                                               // ATTENTION LES INDEX DE TABLEAU COMMENCE A ITEM 0  : tableau[index]
//console.log permet d afficher les infos en faisant F12 sur HTML onglet console
//console.log(classValue);
