
function redirect(name) {

    switch(name){
        case "Nike-FlyBy-Mid-2090": location.replace("./Product1.html");break;
        case "Nike-Downshifter-2090": location.replace("./Product2.html");break;
        case "Iphone12pro": location.replace("./Product3.html");break;
        case "GalaxyS21": location.replace("./Product4.html");break;
        case "UniqloMickey": location.replace("./Product5.html");break;
    }
    
}

function search() {
    var item = document.getElementById("search").value;
    
    document.getElementById("bottom-header").style.display = "none";
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
    else if(item === "Pikachu" || item === "pikachu")
    {
        window.location.href = "../HTML/User1.html";
    }
    else if(item === "Doggo" || item === "doggo")
    {
        window.location.href = "../HTML/User2.html";
    }
    else if(item === "Catt" || item === "catt")
    {
        window.location.href = "../HTML/User3.html";
    }
    else if(item === "Nick" || item === "nick")
    {
        window.location.href = "../HTML/User4.html";
    }
    else if(item === "Levi" || item === "levi")
    {
        window.location.href = "../HTML/User5.html";
    }
    else
    {
        alert("Search not found!");
    }
}

function goHome(){
    location.replace("./Site.html");
}
