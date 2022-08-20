const fs = require('fs');

var head = "<!DOCTYPE html><html><head><title>Development Team</title><meta charset='UTF-8' /><meta name='viewport' content='width=device-width, initial-scale=1' /><!-- Bootstrap stylesheet --><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'><!-- Local Stylesheet --><link 'rel='stylesheet' type='text/css' href='styles.css'></head><body><header><h1 class='text-center p-5' style='background-color: rgb(116, 163, 234); color: #FFF'>Development Team</h1></header><section><div class='row'>";

function generateHead (){
    fs.appendFile("./dist/index.html", head , (err) => { 
        if (err) { 
          console.log(err); 
        } 
      });
};


module.exports = generateHead;