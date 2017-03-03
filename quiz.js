var score = 0; //Set score to 0
var total = 0; //total no of questions
var points = 0; //points per correct answer
var answered = 0;
var unanswered = 0;
var wrong = 0;
var highest = total * points;
var seconds_left = 60;

function init() {

    sessionStorage.setItem('q1', 'a');
    sessionStorage.setItem('q2', 'a');
    sessionStorage.setItem('q3', 'a');
    sessionStorage.setItem('q4', 'd');
    sessionStorage.setItem('q5', 'c');
    sessionStorage.setItem('q6', 'a');
    sessionStorage.setItem('q7', 'd');
    sessionStorage.setItem('q8', 'c');
    sessionStorage.setItem('q9', 'c');
    sessionStorage.setItem('q10', 'c');


    //set correct answers
}


//add event listener
window.addEventListener('load', init, false);

$(document).ready(function() {

    var interval = setInterval(function() {
        document.getElementById('time').innerHTML = "<h1>You have " + --seconds_left + " seconds left</h1>";

        if (seconds_left <= 0) {
            document.getElementById('time').innerHTML = "<h1>Time is up</h1>";

            process('q1');
            process('q2');
            process('q3');
            process('q4');
            process('q5');
            process('q6');
            process('q7');
            process('q8');
            process('q9');
            process('q10');
            answered = 10 - unanswered;

            document.body.innerHTML = '';
            document.write("<p><h1><center> <font color='red'>Game over !! <br> <br>Your score is : " + score + "<br><br> No Of Answered Questions: " + answered + "<br><br> No Of Unanswered Questions: " + unanswered + "<br><br> No Of Wrong Answers: " + wrong + " </font></center> </h1></p>");

            /* var myWindow = window.open("lastpage.html");
myWindow.document.write("<p><h1><center> <font color='red'>Game over !! <br> <br>Your score is : "+score+"<br><br> No Of Answered Questions: " + answered + "<br><br> No Of Unanswered Questions: "+ unanswered +"<br><br> No Of Wrong Answers: " + wrong + " </font></center> </h1></p>");*/

            clearInterval(interval);
        }
    }, 1000);
    $(".myButton").click(function() {
        clearInterval(interval);
        process('q1');
        process('q2');
        process('q3');
        process('q4');
        process('q5');
        process('q6');
        process('q7');
        process('q8');
        process('q9');
        process('q10');
        answered = 10 - unanswered;
        document.body.innerHTML = '';
        document.write("<p><h1><center> <font color='red'>Game over !! <br> <br>Your score is : " + score + "<br><br> No Of Answered Questions: " + answered + "<br><br> No Of Unanswered Questions: " + unanswered + "<br><br> No Of Wrong Answers: " + wrong + " </font></center> </h1></p>");
        //    var myWindow = window.open("lastpage.html");



        //process answers}
    });

    function process(q) {

        if (q == 'q1') {
            var submitted = $('input[name=q1]:checked').val();
            if (submitted == sessionStorage.q1) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
        if (q == 'q2') {
            var submitted = $('input[name=q2]:checked').val();
            if (submitted == sessionStorage.q2) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
        if (q == 'q3') {
            var submitted = $('input[name=q3]:checked').val();
            if (submitted == sessionStorage.q3) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
        if (q == 'q4') {
            var submitted = $('input[name=q4]:checked').val();
            if (submitted == sessionStorage.q4) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
        if (q == 'q5') {
            var submitted = $('input[name=q5]:checked').val();
            if (submitted == sessionStorage.q5) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
        if (q == 'q6') {
            var submitted = $('input[name=q6]:checked').val();
            if (submitted == sessionStorage.q6) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }

        if (q == 'q7') {
            var submitted = $('input[name=q7]:checked').val();
            if (submitted == sessionStorage.q7) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
        if (q == 'q8') {
            var submitted = $('input[name=q8]:checked').val();
            if (submitted == sessionStorage.q8) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
        if (q == 'q9') {
            var submitted = $('input[name=q9]:checked').val();
            if (submitted == sessionStorage.q9) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
        if (q == 'q10') {
            var submitted = $('input[name=q10]:checked').val();
            if (submitted == sessionStorage.q10) {
                score++;
            } else if (submitted == undefined) {
                unanswered++;
            } else wrong++;
            return;
        }
    }

});