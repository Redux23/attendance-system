//1. this is the GET request to populate the table
  const BASE_URI = ' http://localhost:3000/users'





$(document).ready(function () {

  var $data = $('tbody');

  function fetchAllAttendance() {
    $.get(BASE_URI, (data) => {
      // console.log("sucess", data);
      $.each(data, function (i, item) {
        // console.log(item);
        $data.append(
          `<tr>
            <th scope="row">${item.id}</th>
            <td>${item.first_name}</td>
            <td>${item.last_name}</td>
            <td>${item.email}</td>
            <td>${item.TimeStamp}</td>
            <td>${item.Action}</td>
          </tr>
          `)
          console.log(`${item.Action}`)
      })

    })
        
    
  }

 
  

 
  

  fetchAllAttendance()

 
});



















