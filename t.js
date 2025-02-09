


// TEMPERATURE CONVERSION PROGRAM

var textbox = document.getElementById("textbox");
var ctf = document.getElementById("ctf");
var ftc = document.getElementById("ftc");
var ctk = document.getElementById("ctk");
var ktc = document.getElementById("ktc");
var ftk = document.getElementById("ftk");
var ktf = document.getElementById("ktf");
var result = document.getElementById("result");
var temp;

function convert(){
    if(ctf.checked){
        temp = Number(textbox.value);

        temp = temp*9/5+32;
        result.textContent = temp.toFixed(3) + "°F";
    }else if(ftc.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(3) + "°C";
    }else if(ctk.checked){
        temp = Number(textbox.value);
        temp = (temp+273.15);
        result.textContent = temp.toFixed(3) + "°K";
    }else if(ktc.checked){
        temp = Number(textbox.value);
        temp = (temp-273.15);
        result.textContent = temp.toFixed(3) + "°C";
    }else if(ftk.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9)+273.15;
        result.textContent = temp.toFixed(3) + "°K";
    }else if(ktf.checked){
        temp = Number(textbox.value);
        temp =(temp-273.15)* 9/5 + 32;
        ;
        result.textContent = temp.toFixed(3) + "°F";
    }else{
        result.textContent="Please Select a Unit!"; 
    }
}

