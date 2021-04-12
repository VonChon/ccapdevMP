var emails = [
    "user1@gmail.com",
    "user2@gmail.com",
    "user3@gmail.com",
    "user4@gmail.com",
    "user5@gmail.com",
];

var pass = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5"
];


var i;
var checker = false;
function verify()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    for(i = 0; i < 5; i++)
    {
        if((emails[i]===email)&&(pass[i]===password))
        {
            checker = true;
        }
    }
    console.log(email);
    console.log(password);
    if(checker === true)
    {
        window.open("./Site.html");
    }
    else
    {
        alert('invalid!!');
    }
    return checker;
}
