/** Au click (évenement) sur la div swicth (élément),
 *  le cercle (élément) se déplace (action),
 * l'icone (élément) se déplace et se transforme (action),
 * la div container (élément) change de couleur de fond (action),
 * le titre (élément) change(action).
 */

//  je sélectionne et  je stocke
// la div swicth
const swicthbox =document.querySelector(".switch");
console.log(swicthbox);
// la div btn (le cercle)
const btn = document.querySelector('.btn');
console.log(btn);
// l'icone
const icone = document.querySelector('i');
console.log(icone);
//  la div container
const container = document.querySelector(".container");
console.log(container);
// le titre
const titre  = document.querySelector("h1");
console.log(titre);

//  je soumets la div swicth à une action au click
swicthbox.addEventListener ("click",function () {
    console.log('DIV cliquée!');
    //  je déplace le cercle
//  btn.style.left ='60px';
 //  je déplace le cercle
//  j'utilise .classlist.toggle
   btn.classList.toggle('btn-change');
 //  je déplace l'icone
 icone.classList.toggle('icone-change');
 //  je change l'icone
    
    //   icone.classList.toggle('fas fa-moon');
    //  icone.classList.toggle("fas fa-sun" );
//  la div swicth change de couleur de fond
 swicthbox.classList.toggle('switch-change');
// la div container change de couleur de fond
container.classList.toggle("container-change")
 //  je modifie le texte du titre
 if (titre.innerText ==='Dark-Mode') {
     titre.innerText ='Light-Mode';
 } else {
     titre.innerText ='Dark-Mode';
 }


});



