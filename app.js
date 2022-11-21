const express = require('express');
const app = express();
const calculator = require('./calculator')
const port = 3000;


app.get('/',function (request,response){
    response.send("<h1>CI/CD Esimerkki</h1>");
});

app.get('/calculate/:x/:y',function (request,response){
        let x=parseInt(request.params.x);
        let y=parseInt(request.params.y);
        const result = calculator.add(x,y)
        response.json(result);
    }
    );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports =app;
