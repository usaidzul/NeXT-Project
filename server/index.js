const express = require('express');
var request = require("request");
const app = express();
const port = 5000;

app.get("/getWheretheiss", (req,res) =>{
  request(
    "https://api.wheretheiss.at/v1/satellites/25544",
    function(error, response, body){
      if (!error && response.statusCode == 200){
        
        var parseBody = JSON.parse(body);
        const m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var d = new Date(parseBody["timestamp"]);
        let lat = parseBody["latitude"];
        let lon = parseBody["longitude"];
        let day = d.getDate();
        let year = d.getFullYear();
        let month = m[d.getMonth()];
        // let time = d.getTime();
        var date = [day, month, year]
        let data = {
          date: date,
          lat : lat,
          lon : lon
        }
        res.send(data);
        // res.send(lon);
        // res.send(lat);
        console.log(data);
      }
    }
  )
});

app.listen(port, () => console.log('Listen ${port}'));