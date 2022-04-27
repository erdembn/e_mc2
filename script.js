let result =document.getElementById("result")
let button = document.getElementById("submit")



function einstein(){

let mass = document.getElementById("userinput").value;
let speedOfLight = 300000000
let joule = (mass) * (speedOfLight**2)


if ( mass=== "" || isNaN(mass) || mass === undefined || mass === null){
    result.innerHTML = "Please provide a number!"



}else{
    
    result.innerHTML = "E: " + joule
    

}

}

submit.addEventListener("click", einstein)

document.getElementById("userinput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
  
      document.getElementById("submit").click();
    }
  });