

function usdfunc(usd)
{ 
    inr = parseFloat(usd) * 74.28;
    document.getElementById("INR").innerHTML=usd+" USD In INR: "+inr

    yen = parseFloat(usd) * 109.14;
    document.getElementById("YEN").innerHTML=usd+" USD in YEN: "+yen

    euro = parseFloat(usd) * 0.84;
    document.getElementById("EURO").innerHTML=usd+" USD In EURO: "+euro

    pound = parseFloat(usd) * 0.72;
    document.getElementById("POUND").innerHTML=usd+" USD In POUND: "+pound
} 

function run()
{
    usd = document.getElementById("USD").value;
    usdfunc(usd)
}

