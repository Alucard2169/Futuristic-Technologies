const express = require('express');
const app = express();
const ejs = require('ejs')
const router = require('./routers/routers')

app.set("view engine","ejs")
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('homepage', {
        title: "Home page"
    })
})

app.use(router)

app.listen(3000, () => {
    console.log("server listening on PORT: 3000" )
})

