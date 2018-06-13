/* -----exercice 2-----

var prenom = prompt('Entrez votre prénom :');
alert("Bonjour "+prenom);

*/


/* -----exercice 3-------

var a =  prompt ('entrez le prix hors taxe') ;

a = a*(1+20/100);

alert("Prix TTC: "+a+"€");
*/

/* ----exercice 4-----
var c = prompt ("quelle est la températeur en C° ?")
 c = (c*1.8)+32;

alert("température en F°: "+c+"°F");
 */

/* --------exercice 5--------
 var monDiv = document.getElementById ('testjs');
 monDiv.setAttribute ('id', "1");
 monDiv.setAttribute ('class', 'maClasse')
 console.log (monDiv);
*/


/*
var newDiv = document.createElement("div");
  var newContent = document.createTextNode("2eme texte");

  newDiv.appendChild(newContent);


  document.body.appendChild(newDiv);

newDiv.style.color="blue";
newDiv.style.textAlign="center";

var maDiv = document.getElementsByTagName ("div");
console.log(maDiv);

var contenu1= maDiv[0].innerHTML;
var contenu2= maDiv[1].innerHTML;
console.log(maDiv[0].innerHTML);
maDiv[0].innerHTML=contenu2;
console.log(maDiv[0].innerHTML);
maDiv[1].innerHTML=contenu1;

maDiv[0].style.cssFloat="left";
maDiv[1].style.cssFloat="right";
*/


/* -----exercice 7 -------
var newDiv1 = document.createElement("p");
  var newContent1 = document.createTextNode("1er texte");

  newDiv1.appendChild(newContent1);

  var newDiv2 = document.createElement("p");
    var newContent2 = document.createTextNode("2eme texte");

    newDiv2.appendChild(newContent2);

    var newDiv3 = document.createElement("p");
      var newContent3 = document.createTextNode("3eme texte");

      newDiv3.appendChild(newContent3);

      document.body.appendChild (newDiv1);
      document.body.appendChild (newDiv2);
      document.body.appendChild (newDiv3);

      newDiv1.style.color="red";
      newDiv2.style.color="green";
      newDiv3.style.color="blue";

      newDiv1.style.cssFloat="left";
      newDiv2.style.cssFloat="left";
      newDiv3.style.cssFloat="left";

*/

var myImg = new Image();

myImg.src = 'https://user.oc-static.com/files/6001_7000/6410.jpg';


document.body.appendChild(myImg);

console.log(myImg.src);

myImg.addEventListener("click", function(){});
