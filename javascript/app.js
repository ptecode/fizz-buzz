
function fizzBuzz (num) {
    var message = "";
    for(var i = 1; i <= num; i += 1) {

        if(i % 3 === 0 && i % 5 === 0) {
            message += "<p>Fizz-Buzz</p>";
        }
        else if (i % 3 === 0) {
            message += "<p>Fizz</p>";
        }
        else if (i % 5 === 0) {
            message += "<p>Buzz</p>";
        }
        else {
            message += "<p>" + i + "</p>";
        }

    }
    return message;
}


var usernum = parseInt(prompt("Enter a number"));

console.log("user input is : " + usernum);

//checking for valid user input
if (isNaN(usernum) || usernum === 0) {
    alert("Please enter a number greater than 1");
    // Reload the current page
    document.location.reload(true);
}

//adding fizzbuzz to content
$(".content").append( fizzBuzz(usernum) ).css({
    "text-align": "center",
    "font-weight": "bold"
    });




