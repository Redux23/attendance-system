
// To POST data to the backend
// console.log("money time!!")
const BASE_URI = 'http://localhost:3000/users'


$(document).ready(function () {

    // assigning the id of the input value to variables to be reused to save to user input data
    var $firstName = $("#first_name");
    var $lastName = $("#last_name");
    var $email = $("#email");

    

  function sendDataToDb(){
    

    // The function that runs the POST request from the form to the db.json
    $('.login-message').hide()
    $('#form-submit').submit(function(e) {

        e.preventDefault();
     

        var attendees = {
            first_name: $firstName.val(),
            last_name: $lastName.val(),
            email: $email.val()
        }

        // console.log(attendees)

        $.ajax({
            type: 'GET',
            url: BASE_URI,
            // data: attendees,
            success: function (data) {

                $('.login-message').show();
                
                const user = data.some(user => user.email === attendees.email)

                if(user) return $('.login-message').html('Email already taken!').css({color:'red'});
                
                
             
            


            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/users',
                data: attendees,
                success: function (success, error) {
                   
                       
                        window.location.href = '/login.html';

                
                   

                }
            })

            }
            
        })
       
    });

}
sendDataToDb();

});