// var i;
// var checker = false;
// function verify()
// {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;    
//     for(i = 0; i < 5; i++)
//     {
//         if((emails[i]===email)&&(pass[i]===password))
//         {
//             checker = true;
//         }
//     }

//     console.log(email);
//     console.log(password);
//     if(checker === true)
//     {
//         res.render('../index');
//     }
//     else
//     {
//         alert('invalid!!');
//     }
//     return checker;
// }

$(document).ready(function() {
    $("#loginbutton").on('click', function () {
        //  var email =  $("#emailid").val();
        //  var password = $("#passwordid").val();
        var email = document.getElementById('emailid').value;
        var password = document.getElementById('passwordid').value;
    });
    console.log("Hello");
})