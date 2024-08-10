var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");
var count = document.getElementById("count");

var counter = 0;
decrease.addEventListener("click",() =>{

   
   
        counter--
        count.textContent = counter;
       
})
reset.addEventListener("click",() =>{
    counter =0
    count.textContent = counter
})
increase.addEventListener("click",() =>{
    counter++
    count.textContent = counter
})