const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let loader = document.querySelector('.loadd h3');

let det = 0
 setInterval(()=>{
    if(det < 100){
        console.log(det)
        det++;
        loader.innerHTML = det;
    }
},40) 
