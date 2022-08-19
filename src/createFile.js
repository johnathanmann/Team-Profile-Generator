
const fs = require('fs');

var head = "<!DOCTYPE html><html><head><title>Development Team</title><meta charset='UTF-8' /><meta name='viewport' content='width=device-width, initial-scale=1' /><!-- Bootstrap stylesheet --><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'><!-- Local Stylesheet --><link rel='stylesheet' type='text/css' href='styles.css'></head><body>";

var bottom = "</section><!-- Font Awesome --><script src='https://kit.fontawesome.com/9ee8ab9af4.js' crossorigin='anonymous'></script><!-- Bootstrap JS --><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script></body></html>"

fs.appendFile("../dist/index.html", "hi", (err) =>
    err ? console.log(err) : console.log("Success!"));