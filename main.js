//getting modal opening buttons
var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn){
  btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');
      
        document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = (btn.closest(".modal").style.display = "none");
  };
});


window.onclick = function(e){
  if(e.target.className === 'modal') {
    e.target.style.display = "none";
  }
}


//Fullscreen Overlay Navigation
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}












// form setup



