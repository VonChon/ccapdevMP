function check(){
    var checker = true;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm-password').value;

    if(password !== confirm){
        checker = false;
    }

    if(checker === false){
        alert('Password does not match!');
    }
    else
    {
        window.open("./Site.html");
    }
}