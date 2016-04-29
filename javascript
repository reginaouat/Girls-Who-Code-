var catOpen = document.
getElementBYId("catOpen");
var catClosed = document. 
getElementBYId("catClosed");

catOpen.addListener ("mousedown",
    closeTheCatsEyes);
    catClosed.addlistener(" mouseup",
    open TheCatsEyes);
    
    function closeTheCatsEyes(){
    // make the catOpen display
      dissapear
  catOpen.style.display=
      'block';
}
Function openTheCatsEyes() {
    catOpen.style.display = 
    'none';
}

function openTheCatsEyes(){
    catOpen.style.display =
    'block';
    catOpen.style.display = 
    'none';
}
