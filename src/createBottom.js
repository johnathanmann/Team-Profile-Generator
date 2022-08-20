const fs = require('fs');

var bottom = "</section><!-- Font Awesome --><script src='https://kit.fontawesome.com/9ee8ab9af4.js' crossorigin='anonymous'></script><!-- Bootstrap JS --><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script></body></html>"

function generateBottom (){
    fs.appendFile("./dist/index.html", bottom , (err) => { 
        if (err) { 
          console.log(err); 
        } 
      });
};

module.exports = generateBottom;