const express = require('express');
const app = express();
const ejs = require('ejs')
const router = require('./routers/routers')
const PORT = process.env.PORT || 3000;

app.set("view engine","ejs")
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('homepage', {
        title: "Home page"
    })
})

app.use(router)

app.listen(PORT, () => {
    console.log("started" )
})

