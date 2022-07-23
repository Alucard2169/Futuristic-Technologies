const express = require('express');
const app = express();
const ejs = require('ejs')


app.set("view engine","ejs")
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('homepage', {
        title: "Home page"
    })
})

app.listen(3000, () => {
    console.log("server listening on PORT: 3000" )
})