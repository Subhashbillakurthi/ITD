fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// // AJAX METHOD
// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/todos',
//   method: 'GET',
//   data: { keyword: 'example' },
//   success: function(response) {
//     console.log(response);
//   },
//   error: function(error) {
//     console.error('Error:', error);
//   }
// });

fetch('http://127.0.0.1:5500/assignment.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
