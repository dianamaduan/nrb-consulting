const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser= require('body-parser')
const telegramRoute = require('./route/index')
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use('/get/',telegramRoute)

app.get("/", function (request, response) {
    response.render("index", {});
});

app.listen(5001, () => console.log(`server started on port 5001`));
