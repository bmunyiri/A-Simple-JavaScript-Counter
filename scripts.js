
let counter = 0

function increment() {
    
    counter +=  1;

    document.getElementById( "counts" ).innerHTML=counter
  
}
let total =0
function saveAction() {
    document.getElementById( "prevEnt" ).innerHTML += counter + " -"

    counter = 0
    document.getElementById( "counts" ).innerHTML=counter
    
}
