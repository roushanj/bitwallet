var request = require('request');
var newUrl = document.getElementById('write');

// request blockchain.info api in json and save api data in variables
request({
    url: "https://blockchain.info/balance?active=" + newUrl,
    json: true
}, function(error, response, body) {
      
      balance = body.final_balance;
     
    
});

app.get('/', function (req, res) {
 
  res.send('value  ' + balance);
  
});