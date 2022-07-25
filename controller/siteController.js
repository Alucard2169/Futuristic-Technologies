const fs = require('fs');

let obj;
fs.readFile('./data.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});


module.exports.contact_get = (req, res) => {
    res.render('contactUs',{title:'Contact us'})
}

module.exports.product_get = (req, res) => {
    res.render('products', { title: 'Products', dataList: obj })
}

module.exports.about_get = (req, res) => {
    res.render('aboutUs',{title: "about us"})
}

module.exports.details_get = (req, res) => {
      let foundUser = obj.find(x => x.id === parseInt(req.params.id));
      let jsonString = JSON.stringify(foundUser);
      let data = JSON.parse(jsonString)
      res.render('laptop_id',{title: data.name, laptop: data})
}