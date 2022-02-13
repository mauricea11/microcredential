// Change quantity amount to match select
var selectelement = document.getElementById('select');
var quantityamount = document.getElementById('quantityspan');


// Change modal title based off cart title
var itemstitle = document.querySelectorAll('.itemfigcaption');
var modalproductname = document.getElementById('modalproducttitle');

// Change modal price based on cart amount
var addcart = document.querySelectorAll('.cart');
var price = document.querySelectorAll('.itemprice');
var matchpricemodal = document.getElementById('modalprice');

// Change image based on select product
var outerimg = document.querySelectorAll('.cartimg');
var innerimgsection = document.querySelector('.modalimg');

addcart[0].addEventListener('click', function(event){
    if (price[0].innerText == '$15') {
        matchpricemodal.innerText = price[0].innerText;
        modalproductname.innerText = itemstitle[0].innerText;
        innerimgsection.src = "Sole-Revive-PDP-1.jpeg";
    }

 })

addcart[1].addEventListener('click', function(event){
  if (price[1].innerText == '$10') {
    matchpricemodal.innerText = price[1].innerText;
    modalproductname.innerText = itemstitle[1].innerText;
    innerimgsection.src = "Wipes.jpeg";
  }
 })
addcart[2].addEventListener('click', function(event){
  if (price[2].innerText == '$15') {
   matchpricemodal.innerText = price[2].innerText;
   modalproductname.innerText = itemstitle[2].innerText;
   innerimgsection.src = "Cleaningrag.jpeg";
  }
})
addcart[3].addEventListener('click', function(event){
  if (price[3].innerText == '$30') {
    matchpricemodal.innerText = price[3].innerText;
    modalproductname.innerText = itemstitle[3].innerText;
    innerimgsection.src = "pwtw-bleach-1.jpeg";
  }
 })
addcart[4].addEventListener('click', function(event){
  if (price[4].innerText == '$20') {
   matchpricemodal.innerText = price[4].innerText;
   modalproductname.innerText = itemstitle[4].innerText;
   innerimgsection.src = "Detergent.jpeg";
 }
})
addcart[5].addEventListener('click', function(event){
  if (price[5].innerText == '$15') {
    matchpricemodal.innerText = price[5].innerText;
    modalproductname.innerText = itemstitle[5].innerText;
    innerimgsection.src = "sneaker-laundry-bag.jpeg";
  }
 })

 selectelement.addEventListener('change', function(){
   quantityamount.innerText = selectelement.value;


     // //Change price based on quantity amount
     // if(price[0].innerText == '$15'){
     //   if(quantityamount.innerText == '1'){
     //     matchpricemodal.innerText = '$15';
     //   }
     //   else if (quantityamount.innerText == '2') {
     //     matchpricemodal.innerText = '$30';
     //   }
     //   else if (quantityamount.innerText == '3') {
     //     matchpricemodal.innerText = '$45';
     //   }
     //   else if (quantityamount.innerText == '4') {
     //     matchpricemodal.innerText = '$60'
     //   }
     //   else if (quantityamount.innerText == '5') {
     //     matchpricemodal.innerText = '$75';
     //   }
     //   else {
     //     matchpricemodal.innerText = '$90';
     //   }
     // }
     //
     // else if (matchpricemodal.innerText == '$10') {
     //   if(quantityamount.innerText == '1'){
     //     matchpricemodal.innerText = '$10';
     //   }
     //   else if (quantityamount.innerText == '2') {
     //     matchpricemodal.innerText = '$20';
     //   }
     //   else if (quantityamount.innerText == '3') {
     //     matchpricemodal.innerText = '$30';
     //   }
     //   else if (quantityamount.innerText == '4') {
     //     matchpricemodal.innerText = '$40'
     //   }
     //   else if (quantityamount.innerText == '5') {
     //     matchpricemodal.innerText = '$50';
     //   }
     //   else {
     //     matchpricemodal.innerText = '$60';
     //   }
     // }
     // else if (matchpricemodal.innerText == '$15') {
     //   if(quantityamount.innerText == '1'){
     //     matchpricemodal.innerText = '$15';
     //   }
     //   else if (quantityamount.innerText == '2') {
     //     matchpricemodal.innerText = '$30';
     //   }
     //   else if (quantityamount.innerText == '3') {
     //     matchpricemodal.innerText = '$45';
     //   }
     //   else if (quantityamount.innerText == '4') {
     //     matchpricemodal.innerText = '$60'
     //   }
     //   else if (quantityamount.innerText == '5') {
     //     matchpricemodal.innerText = '$75';
     //   }
     //   else {
     //     matchpricemodal.innerText = '$90';
     //   }
     // }
     // else if (matchpricemodal.innerText == '$30') {
     //   if(quantityamount.innerText == '1'){
     //     matchpricemodal.innerText = '$30';
     //   }
     //   else if (quantityamount.innerText == '2') {
     //     matchpricemodal.innerText = '$60';
     //   }
     //   else if (quantityamount.innerText == '3') {
     //     matchpricemodal.innerText = '$90';
     //   }
     //   else if (quantityamount.innerText == '4') {
     //     matchpricemodal.innerText = '$120'
     //   }
     //   else if (quantityamount.innerText == '5') {
     //     matchpricemodal.innerText = '$150';
     //   }
     //   else {
     //     matchpricemodal.innerText = '$180';
     //   }
     // }
     // else if (matchpricemodal.innerText == '$20') {
     //   if(quantityamount.innerText == '1'){
     //     matchpricemodal.innerText = '$20';
     //   }
     //   else if (quantityamount.innerText == '2') {
     //     matchpricemodal.innerText = '$40';
     //   }
     //   else if (quantityamount.innerText == '3') {
     //     matchpricemodal.innerText = '$60';
     //   }
     //   else if (quantityamount.innerText == '4') {
     //     matchpricemodal.innerText = '$80'
     //   }
     //   else if (quantityamount.innerText == '5') {
     //     matchpricemodal.innerText = '$100';
     //   }
     //   else {
     //     matchpricemodal.innerText = '$120';
     //   }
     // }
     // else {
     //   if(quantityamount.innerText == '1'){
     //     matchpricemodal.innerText = '$10';
     //   }
     //   else if (quantityamount.innerText == '2') {
     //     matchpricemodal.innerText = '$20';
     //   }
     //   else if (quantityamount.innerText == '3') {
     //     matchpricemodal.innerText = '$30';
     //   }
     //   else if (quantityamount.innerText == '4') {
     //     matchpricemodal.innerText = '$40'
     //   }
     //   else if (quantityamount.innerText == '5') {
     //     matchpricemodal.innerText = '$50';
     //   }
     //   else {
     //     matchpricemodal.innerText = '$60';
     //   }
     // }
 })
 // Send quantity, prices, size, and pictures to checkout
 function sendinfo(){
   let title = document.querySelector('#modalproducttitle').innerText;
   let price = matchpricemodal.innerHTML;
   let size = document.querySelector('#ml').innerText;
   let quantity = document.querySelector('#quantityspan').innerText;
   localStorage.setItem('product-title', title);
   localStorage.setItem('product-price', price);
   localStorage.setItem('product-size', size);
   localStorage.setItem('product-quantity', quantity);
 }
