const inp = document.querySelector(".inp");
const clear = document.querySelector(".clear");
const add = document.querySelector(".add");
const notifs = document.querySelector(".notifs");
const color = document.querySelectorAll(".color");
let nott = document.querySelectorAll(".nott");
let nottnew
let cool

color.forEach(function(esd){
    esd.addEventListener("click",function(){
        inp.style.background = esd.id
        cool = esd.id
    })
})

function funclear (){
    inp.value = ""
    inp.style.background = "white"
    cool = "white"

}
function funadd (){
    
   if(inp.value){

    nottnew = document.createElement("div")
    nottnew.innerHTML = inp.value
    nottnew.classList.add("nott")
    nottnew.style.background = cool
    notifs.append(nottnew)
    nottnew.addEventListener("click",function(ert){
    ert.target.remove()
    })
    funclear()
   }
    
}

clear.addEventListener("click",funclear)

add.addEventListener("click",funadd)

document.body.addEventListener("keydown",function(esg){
 if(esg.keyCode === 13) {
        funadd()
 }
})



