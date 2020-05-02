!function(e){var o=new ScrollMagic.Controller,t=["#slide01","#slide02","#slide03"],r=["#slide01 header","#slide02 header","#slide03 header"],n=["#cb01","#cb02","#cb03"];if(!Modernizr.touch){r.forEach(function(e,t){{var r=t+1;new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle("#slide0"+r,"is-active").addTo(o)}}),n.forEach(function(t,r){{var n=e(t).attr("id");new ScrollMagic.Scene({triggerElement:t,triggerHook:.75}).setClassToggle("#"+n,"is-active").on("enter",function(o){e("nav").attr("class","is-light")}).addTo(o)}}),t.forEach(function(t,r){new ScrollMagic.Scene({triggerElement:t}).on("enter",function(o){e("nav").removeAttr("class")}).addTo(o)}),t.forEach(function(t,r){{var n=e(t).find(".bcg");new ScrollMagic.Scene({triggerElement:t,triggerHook:1,duration:"100%"}).setTween(TweenMax.from(n,1,{y:"-40%",autoAlpha:.3,ease:Power0.easeNone})).addTo(o)}});var a=new TimelineMax;a.to(e("#intro header, .scroll-hint"),.2,{autoAlpha:0,ease:Power1.easeNone}).to(e("#intro .bcg"),1.4,{y:"20%",ease:Power1.easeOut},"-=0.2").to(e("#intro"),.7,{autoAlpha:.5,ease:Power1.easeNone},"-=1.4");{new ScrollMagic.Scene({triggerElement:"#intro",triggerHook:0,duration:"100%"}).setTween(a).addTo(o)}o.scrollTo(function(e){TweenMax.to(window,1,{scrollTo:{y:e},ease:Power1.easeInOut})}),e(document).on("click","a[href^='#']",function(t){var r=e(this).attr("href");e(r).length>0&&(t.preventDefault(),o.scrollTo(r),window.history&&window.history.pushState&&history.pushState("",document.title,r))})}}(jQuery);


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}