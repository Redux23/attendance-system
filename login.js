
const BASE_URI = 'http://localhost:3000/users'



$(document).ready(function () {


    let $email = $('#login-text');
  

    function loginToHome() {

        $('#login-submit').on('click', function (e) {

            e.preventDefault()

            let $registerUsers = $email.val()

            $.ajax({
                type: 'GET',
                url: BASE_URI,
                success: function (data) {
                    $.each(data, function (i, item) {

                        if (item.email === $registerUsers) {

                            
                            window.location.href = '/clock_in.html';
                        }

                    })

                },

            });

        })





    }
    loginToHome()
})





