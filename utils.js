function el(id){
  return document.getElementById(id);
}

function elClick(id, func){
  el(id).addEventListener('click', func);
}
