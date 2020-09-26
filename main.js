let quotes=document.querySelectorAll(".quote");
let quotesAuthor=document.querySelectorAll(".quote-author");
let divQuote=document.querySelectorAll(".div-quote");
let border=document.querySelector(".only-border-div");
let sec2Article=document.querySelectorAll(".sec2-article");
let listItem=document.querySelectorAll(".item");
const parallax=document.querySelector(".section.sec-nr3");
const parallaxFirst=document.querySelector(".section.sec-nr1");

let tl=new TimelineMax({repeat:-1});
let tlpercentage=new TimelineMax({onUpdate:updatePercentage});
let tlsech1=new TimelineMax();
let tlarticles=new TimelineMax();
let tlList=new TimelineMax();

divQuote.forEach((item, i) => {
  tl.from(divQuote[i],2,{x:"-100%"})
  tl.to(divQuote[i],2,{opacity:1},"=-1")
  tl.to(quotesAuthor[i],.5,{opacity:1},"=-0.5")
  tl.to(divQuote[i],1,{delay:3,opacity:0})
  tl.to(divQuote[i],0,{x:"100%",opacity:0})
});


const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    triggerElement: border,
    duration:400,
    triggerHook:0.6
  })
  .setTween(tlpercentage)
  .addTo(controller);

  let scene2 = new ScrollMagic.Scene({
      triggerElement: ".sec2-h1",
      triggerHook:0.8,
      reverse: false
    })
    .setClassToggle('.sec2-h1','fade-in-h1')
    .addTo(controller);

    $(sec2Article).each(function(){
      let scene3 = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook:0.85,
          reverse:false
        })
        .setClassToggle(this,'fade-in-article')
        .addTo(controller);
    })
    $(listItem).each(function(){
      let scene4 = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook:0.8,
          reverse:false
        })
        .setClassToggle(this,'fade-in-item')
        .addTo(controller);
    })
  tlpercentage.from('.only-border-div', 1, { height: 0}, "=-.5");

  function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tlpercentage.progress();
  console.log(tlpercentage.progress());
}
