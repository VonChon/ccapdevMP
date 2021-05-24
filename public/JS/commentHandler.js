

//For comment
$(document).ready(function() {
    $("#buttoncommentarea").on('click', function () {
        var comment = $("#commentarea").val();

        console.log(comment);
    });
})

//For feedback
$(document).ready(function() {
    $("#buttonfeedbackarea").on('click', function () {
        var feedback = $("#feedbackarea").val();

        console.log(feedback);
    });
})