const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(require('path').join(__dirname,'./')));

app.get('/', function (req, res) {
//   res.send('Hello World')
    
    var options = {
        root: path.join(__dirname)
    };
    res.sendFile('index.html', options);
})

app.listen(3000, () => {
    console.log("Your project is running on port: 3000");
});

// command to run and install
// npm init
// npm i express
// npm i nodemon
// npm i path
// nodemon dev
// nodemon dev

//create a folder for images
//copy file tailwind.js into this folder
//index.js to call the HTML file and also config the port and index.html for design