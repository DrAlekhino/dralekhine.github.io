
const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
let message ="";
function greetings() {
   let message ="";
   for (i of names){
        if (i[0]=="J"){
           message+="Goodbye " +i+"<br>";

        } else{
          message+="Hello "+i+"<br>";
        }
        }
        
document.getElementById("demo").innerHTML=message;
   }
   
document.addEventListener("DOMContentLoaded", function() {
            greetings();
        });
