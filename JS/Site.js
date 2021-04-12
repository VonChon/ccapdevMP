
function redirect(name) {

    switch(name){
        case "Nike-FlyBy-Mid-2090": window.open("./Product1.html");break;
        case "Nike-Downshifter-2090": window.open("./Product2.html");break;
        case "Iphone12pro": window.open("./Product3.html");break;
        case "GalaxyS21": window.open("./Product4.html");break;
        case "UniqloMickey": window.open("./Product5.html");break;
    }
    
}

function search() {
    var item = document.getElementById("search").value;

    var prod1 = document.getElementById("FlyBy");
    var prod2 = document.getElementById("Downshifter");
    var prod3 = document.getElementById("iPhone");
    var prod4 = document.getElementById("Galaxy");
    var prod5 = document.getElementById("Uniqlo");

    prod1.style.display = "block";
    prod2.style.display = "block";
    prod3.style.display = "block";
    prod4.style.display = "block";
    prod5.style.display = "block";


    if(item === "Nike" || item === "shoes")
    {
        prod3.style.display = "none";
        prod4.style.display = "none";
        prod5.style.display = "none";
    }
    else if(item === "phone" || item === "phones" || item === "Phone" || item === "Phones")
    {
        prod1.style.display = "none";
        prod2.style.display = "none";
        prod5.style.display = "none";
    }
    else if(item === "clothes" || item === "clothing")
    {
        prod1.style.display = "none";
        prod2.style.display = "none";
        prod3.style.display = "none";
        prod4.style.display = "none";

    }
    else if(item === "Nike Fly.By Mid" || item === "Fly By Mid" ||item === "Nike Fly By Mid" ||item === "Nike FlyBy Mid")
    {
        prod5.style.display = "none";
        prod2.style.display = "none";
        prod3.style.display = "none";
        prod4.style.display = "none";
    }
    else if(item === "Nike Downshifter" || item === "nike downshifter")
    {
        prod5.style.display = "none";
        prod1.style.display = "none";
        prod3.style.display = "none";
        prod4.style.display = "none";
    }
    else if(item === "iPhone" || item === "IPhone" ||item === "Iphone" || item === "iphone")
    {
        prod5.style.display = "none";
        prod2.style.display = "none";
        prod1.style.display = "none";
        prod4.style.display = "none";
    }
    else if(item === "Samsung" || item === "samsung" ||item === "Galaxy S21" )
    {
        prod5.style.display = "none";
        prod2.style.display = "none";
        prod3.style.display = "none";
        prod1.style.display = "none";
    }
    else if(item === "Uniqlo" || item === "uniqlo")
    {
        prod1.style.display = "none";
        prod2.style.display = "none";
        prod3.style.display = "none";
        prod4.style.display = "none";
    }
    else
    {
        alert("product could not be found!");
    }
}
