const express = require ("express");
const app = express();
var port = process.env.port || 3000;

app.use (express.urlencoded ({extended: false}));
app.use (express.json ());

app.get("/AddTwoNumbers", (req, res) =>{
    var num1 = parseInt (req.query.num1);
    var num2 = parseInt (req.query.num2);
    var sum = num1 + num2;
    res.send ("The sum of $(num1) and (num2) is $(sum)");
})

var port = 3000;
app.listen (port, () =>{
    console.log ("app listening to: " + {port});
})
