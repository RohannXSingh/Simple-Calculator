document.addEventListener("DOMContentLoaded", function(){

    let input = document.querySelector("#input");
    const buttons = document.querySelectorAll(".numbers");
    
    buttons.forEach(function(button) {
     button.addEventListener("click", function(e){
        let value = e.target.textContent;
        if (value === "AC") {
            input.textContent = ""
        }
        else if (value === "=") {
           
           input.textContent = eval(input.textContent)
        }else if (value === "DEL"){
            input.textContent = input.textContent.slice(0, -1);
        } else{
            input.textContent += value;
        }
     })
    })
    });
    