// test de liaison
// alert("Hello World");

// Déclaration des cibles:
const plus = Array.from(document.getElementsByClassName("fa-plus-circle"))
// console.log(plus);
const qte = Array.from(document.getElementsByClassName("quantity"))
// console.log(qte);
const minus = Array.from(document.getElementsByClassName("fa-minus-circle"))
// console.log(minus);
const trash = Array.from(document.querySelectorAll(".fa-trash-alt"))
// console.log(trash);
const card = Array.from(document.querySelectorAll(".card"))
// console.log(card);
const heart = Array.from(document.getElementsByClassName("fa-heart"))
// console.log(heart);
const count = document.querySelector(".cart-count")
// console.log(count);

// ***************************************************************************************
// Définition des fonctions (plus,minus,trash,heart):
   for (const elt of plus){
        elt.addEventListener('click', function(){
            elt.nextElementSibling.innerHTML++;
            TotalPrice()
            count.innerHTML++;
    })
}
   for (const elt of minus){
        elt.addEventListener('click', function(){
        if(elt.previousElementSibling.innerHTML>1)
           elt.previousElementSibling.innerHTML--;
           TotalPrice()
           if(count.innerHTML>3)
           count.innerHTML--;
    })
}
   for (const i in trash){
       trash[i].addEventListener('click', function(){
        card[i].remove();
         TotalPrice();
         if(count.innerHTML>0)
         count.innerHTML--;
    })
}
   for (const elt of heart){
       elt.addEventListener('click', function(){
         if(elt.style.color === 'red'){
            elt.style.color = 'black';
        }
         else elt.style.color = 'red';
      })
}

// **********************************************************************************
// Définition de la fonction qui calcule le prix total:
 function TotalPrice(){
   const price = Array.from(document.querySelectorAll(".unit-price"));
   const quantity = Array.from(document.querySelectorAll(".quantity"));
   var total = 0;
 for(const i in price){
     total += price[i].innerHTML * quantity[i].innerHTML;
}
document.querySelector(".total").innerHTML = total

// console.log(total);
}
// TotalPrice()