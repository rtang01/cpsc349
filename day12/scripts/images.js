console.log('sup thot');

fetch('http://localhost:3000/images')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      let container = document.getElementById('container');
      json.forEach(function(post) {
        container.innerHTML += `<img src=${post['src']}>`;
      });
    });