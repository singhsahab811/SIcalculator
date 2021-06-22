function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    // var total=principal+interest;
    getResult(principal,rate,year,interest);
    // var changec=document.getElementById("result").innerHTML;
    // changec[0].style.backgroundColor="yellow";
}
function getResult(principal,rate,year,interest){
if(principal==0 ){
        alert("Please Enter Value greater than 0");
        principal.focus();
        return false;
    }
    else if(principal<0 ){
        alert("Please Enter Value greater than 0");
        principal.focus();
        return false;
    }
    else{
    document.getElementById("result").innerHTML="If you deposit "+principal+",<br\>at an interest rate of "+rate+"%<br\>You will receive an Interest amount of "+interest+",<br\>in the year "+year+"<br\>";
    }
}  

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
    document.getElementById("rate").style.backgroundcolor="red";
}
        