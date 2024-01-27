const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let loader = document.querySelector('.loadd h3');

let det = 0
 setInterval(()=>{
    if(det < 100){
        det++;
        loader.innerHTML = det;
    }
},40) 

gsap.to(".main .loaderpage",{
    y:"-110%",
    delay:5,
    expo:"power4 ease"
})