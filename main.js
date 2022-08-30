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




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}









// form setup



