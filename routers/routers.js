const express = require('express');
const router = express.Router();
const fs = require('fs');


let obj;
fs.readFile('./data.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});



require('dotenv').config()

router.get('/about-us', (req, res) => {
    res.render('aboutUs',{title:'about us'})
})

router.get('/contact-us', (req, res) => {
    res.render('contactUs',{title:'Contact us'})
})

router.get('/products', (req, res) => {
  res.render('products', { title: 'Products', dataList: obj })
})

router.get('/laptop/:id', (req, res) => {
  let foundUser = obj.find(x => x.id === parseInt(req.params.id));
  let jsonString = JSON.stringify(foundUser);
  let data = JSON.parse(jsonString)
  res.render('laptop_id',{title: data.name, laptop: data})
})


module.exports = router;