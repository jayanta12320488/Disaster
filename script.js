function home(){
    document.getElementById("homes").style.color="rgb(20, 251, 20)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}

function program(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="rgb(20, 251, 20)";

}
function plan(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="rgb(20, 251, 20)";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}
function blog(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(20, 251, 20)";
    document.getElementById("programs").style.color="white";

}
function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(20, 251, 20)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}

// submit

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == ""){
        alert("Please Enter Name")
    }else if(number.value == ""){
        alert("Please Enter Number")
    }else{
        alert("Thanks For Join : " + name.value)
    }
}
// testing
function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
loco()
// exampl
