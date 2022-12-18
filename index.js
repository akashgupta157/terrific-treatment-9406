var slide = document.getElementById("slider");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var next = document.getElementById('next')
var prev = document.getElementById('prev')
btn1.onclick = function () {
    slide.style.transform = "translateX(0px)";
    btn1.classList.add('active');
    btn2.classList.remove('active');
};
btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove('active');
    btn2.classList.add('active');
};
// prev.onclick=()=>{
//     slide.style.transform = "translateX(0px)";
//     prev.classList.add('active');
//     next.classList.remove('active');
// }
// next.onclick=()=>{
//     slide.style.transform = "translateX(-100%)";
//     next.classList.add('active');
//     prev.classList.remove('active');
// }
setInterval(() => {
    slide.style.transform = "translateX(0px)";
    prev.classList.add('active');
    next.classList.remove('active');
}, 3000);
setInterval(() => {
    slide.style.transform = "translateX(-100%)";
    next.classList.add('active');
    prev.classList.remove('active');
}, 6000);

var slide1 = document.getElementById("slider1");
        var btn11 = document.getElementById('btn11');
        var btn21 = document.getElementById('btn21');
        var btn31 = document.getElementById('btn31');
        var btn41 = document.getElementById('btn41');

        setInterval(() => {
            slide1.style.transform = "translateX(0px)";
            btn11.classList.add('active');
            btn21.classList.remove('active');
            btn31.classList.remove('active');
            btn41.classList.remove('active');
        }, 2000);

        setInterval(() => {
            slide1.style.transform = "translateX(-100%)";
            btn11.classList.remove('active');
            btn21.classList.add('active');
            btn31.classList.remove('active');
            btn41.classList.remove('active');
        }, 4000);
            
        setInterval(() => {
            slide1.style.transform = "translateX(-200%)";
            btn11.classList.remove('active');
            btn21.classList.remove('active');
            btn31.classList.add('active');
            btn41.classList.remove('active');
        }, 6000);
            
        setInterval(() => {
            slide1.style.transform = "translateX(-300%)";
            btn11.classList.remove('active');
            btn21.classList.remove('active');
            btn31.classList.remove('active');
            btn41.classList.add('active');
        }, 8000);
            
        
        btn11.onclick = function () {
            slide1.style.transform = "translateX(0px)";
            btn11.classList.add('active');
            btn21.classList.remove('active');
            btn31.classList.remove('active');
            btn41.classList.remive('active');
        };
        btn21.onclick = function () {
            slide1.style.transform = "translateX(-100%)";
            btn11.classList.remove('active');
            btn21.classList.add('active');
            btn31.classList.remove('active');
            btn41.classList.remove('active');
        };
        btn31.onclick = function () {
            slide1.style.transform = "translateX(-200%)";
            btn11.classList.remove('active');
            btn21.classList.remove('active');
            btn31.classList.add('active');
            btn41.classList.remove('active');
        };
        btn41.onclick = function () {
            slide1.style.transform = "translateX(-300%)";
            btn11.classList.remove('active');
            btn21.classList.remove('active');
            btn31.classList.remove('active');
            btn41.classList.add('active');
        };

        var slide2 = document.getElementById("slider2");
        var btn12 = document.getElementById('btn12');
        var btn22 = document.getElementById('btn22');
        var btn32 = document.getElementById('btn32');
        btn12.onclick = function () {
            slide2.style.transform = "translateX(0px)";
            btn12.classList.add('active');
            btn22.classList.remove('active');
            btn32.classList.remove('active');
        };
        btn22.onclick = function () {
            slide2.style.transform = "translateX(-100%)";
            btn12.classList.remove('active');
            btn22.classList.add('active');
            btn32.classList.remove('active');
        };
        btn32.onclick = function () {
            slide2.style.transform = "translateX(-200%)";
            btn12.classList.remove('active');
            btn22.classList.remove('active');
            btn32.classList.add('active');
        };
    
        setInterval(() => {
            slide2.style.transform = "translateX(0px)";
            btn12.classList.add('active');
            btn22.classList.remove('active');
            btn32.classList.remove('active');
        }, 3000);
            
        setInterval(() => {
            slide2.style.transform = "translateX(-100%)";
            btn12.classList.remove('active');
            btn22.classList.add('active');
            btn32.classList.remove('active');
        }, 6000);
            
        setInterval(() => {
            slide2.style.transform = "translateX(-200%)";
            btn12.classList.remove('active');
            btn22.classList.remove('active');
            btn32.classList.add('active');
        }, 9000);

        
        aa=document.getElementById("aa")
        aa.onclick=()=>{
            alert("First Login")
        }






