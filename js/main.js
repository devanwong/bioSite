!function(e){var o=new ScrollMagic.Controller,t=["#slide01","#slide02","#slide03"],r=["#slide01 header","#slide02 header","#slide03 header"],n=["#cb01","#cb02","#cb03"];if(!Modernizr.touch){r.forEach(function(e,t){{var r=t+1;new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle("#slide0"+r,"is-active").addTo(o)}}),n.forEach(function(t,r){{var n=e(t).attr("id");new ScrollMagic.Scene({triggerElement:t,triggerHook:.75}).setClassToggle("#"+n,"is-active").on("enter",function(o){e("nav").attr("class","is-light")}).addTo(o)}}),t.forEach(function(t,r){new ScrollMagic.Scene({triggerElement:t}).on("enter",function(o){e("nav").removeAttr("class")}).addTo(o)}),t.forEach(function(t,r){{var n=e(t).find(".bcg");new ScrollMagic.Scene({triggerElement:t,triggerHook:1,duration:"100%"}).setTween(TweenMax.from(n,1,{y:"-40%",autoAlpha:.3,ease:Power0.easeNone})).addTo(o)}});var a=new TimelineMax;a.to(e("#intro header, .scroll-hint"),.2,{autoAlpha:0,ease:Power1.easeNone}).to(e("#intro .bcg"),1.4,{y:"20%",ease:Power1.easeOut},"-=0.2").to(e("#intro"),.7,{autoAlpha:.5,ease:Power1.easeNone},"-=1.4");{new ScrollMagic.Scene({triggerElement:"#intro",triggerHook:0,duration:"100%"}).setTween(a).addTo(o)}o.scrollTo(function(e){TweenMax.to(window,1,{scrollTo:{y:e},ease:Power1.easeInOut})}),e(document).on("click","a[href^='#']",function(t){var r=e(this).attr("href");e(r).length>0&&(t.preventDefault(),o.scrollTo(r),window.history&&window.history.pushState&&history.pushState("",document.title,r))})}}(jQuery);

// slides.forEach(function (slide, index) {

//     var $bcg = $(slide).find('.bcg');

//     var slideParallaxScene = new ScrollMagic.Scene({
//         triggerElement: slide,
//         triggerHook: 1,
//         duration: "100%"
//     })
//     .setTween(TweenMax.from($bcg, 1, {y: '-40%', autoAlpha: 0.3, ease:Power0.easeNone}))
//     .addTo(controller);
// });
// TweenMax.from($bcg, 1, {y: '-40%', autoAlpha: 0.3, ease:Power0.easeNone})

// // move bcg container when intro gets out of the the view
// var introTl = new TimelineMax();

// introTl
//     .to($('#intro header, .scroll-hint'), 0.2, {autoAlpha: 0, ease:Power0.easeNone})
//     .to($('#intro .bcg'), 1.4, {y: '20%', ease:Power1.easeOut}, '-=0.2')
//     .to($('#intro'), 0.7, {autoAlpha: 0.5, ease:Power0.easeNone}, '-=1.4');

// var introScene = new ScrollMagic.Scene({
//     triggerElement: '#intro',
//     triggerHook: 0,
//     duration: "100%"
// })
// .setTween(introTl)
// .addTo(controller);

// // change behaviour of controller to animate scroll instead of jump
// controller.scrollTo(function (newpos) {
//     TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
// });

// //  bind scroll to anchor links
// $(document).on("click", "a[href^='#']", function (e) {
//     var id = $(this).attr("href");
//     if ($(id).length > 0) {
//         e.preventDefault();

//         // trigger scroll
//         controller.scrollTo(id);

//         // if supported by the browser we can even update the URL.
//         if (window.history && window.history.pushState) {
//             history.pushState("", document.title, id);
//         }
//     }
// });