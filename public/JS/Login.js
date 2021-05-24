$(document).ready(function() {
    $("#loginbutton").on('click', function () {
        var email = document.getElementById('emailid').value;
        var password = document.getElementById('passwordid').value;
        
        console.log(email);
        console.log(password);
    });
});