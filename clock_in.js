const BASE_URI = 'http://localhost:3000/users'


$(document).ready(function(){


// console.log("We winning!!")

let fullname = $('#fullname').val();
let emall = $('#email').val();



function clockIn(){
 
  $('#clock-in').submit(function (e){

    e.preventDefault();

 $.ajax({
 type: 'POST',
 url: BASE_URI,


 })















  })  
    





}

clockIn()


})