const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("header ul.nav");
const main = document.querySelector("main");
const navLink = document.querySelectorAll(".nav-link");

if(window.innerWidth > 768){
    menu.classList.remove("showMenu");
    menuToggle.classList.remove("menuActive");
}

menuToggle.addEventListener("click", e=>{
    menuToggle.classList.toggle("menuActive"); 
    menu.classList.toggle("showMenu");
    main.classList.toggle("desfocar");

})

navLink.forEach(item=> item.addEventListener("click", closeMenu))

function closeMenu(){
    menuToggle.classList.remove("menuActive");
    main.classList.remove("desfocar");
    menu.classList.remove("showMenu");
}

//Animações

const debouce = function(func,wait,imediate){
  let timeout;
  return function(...args){
    const context = this;
    const later = function(){
      timeout = null;
      if(!imediate) func.apply(context, args);
    };
    const callNow = imediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context,args)
  };
};

const left = document.querySelectorAll("[data-left]");
const right = document.querySelectorAll("[data-right]");
const titles = document.querySelectorAll(".titulo");
const scale = document.querySelectorAll("[data-scale]")

function animeScroll(){
  const windowTop = window.pageYOffset + (innerHeight*0.75);
  //PageYoffset - Calculo em px do scroll da pagina.
  //offsetTop - Distancia do elemento para o topo do site.
  left.forEach(item=>{
    if(windowTop > item.offsetTop){
      item.classList.add("animar");
    }else{
      item.classList.remove("animar");
    }
  })

  right.forEach(item=>{
    if(windowTop > item.offsetTop){
      item.classList.add("animar");
    }else{
      item.classList.remove("animar");
    }
  })

  titles.forEach(item=>{
    if(windowTop > item.offsetTop){
      item.classList.add("animar");
    }else{
      item.classList.remove("animar");
    }
  })

  scale.forEach(item=>{
    if(windowTop > item.offsetTop){
      item.classList.add("animar");
    }else{
      item.classList.remove("animar");
    }
  })

}

animeScroll();
if(left.length || right.length || titles.length || scale.length){
  window.addEventListener("scroll", debouce( function(){
    animeScroll();
  }, 100));
}