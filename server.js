var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
'arcticle-one':{
    title:'Article One|Draxler',
    heading:'Article One',
    date:'Sep 5,2016',
    content:`<p>
                this is the content of my article one. 
                this is the content of my article one. this is the content of my article one ,. come on im really doing something good now thanks to nptel & IIT madras & our sir Tanmai Gopal 
            </p>
            <p>
                this is the content of my article one. this is the content of my article one
            </p>
            <p>
                see you later folks.
            </p>`
},
'article-two':{
    title:'Article Two|Draxler',
    heading:'Article One',
    date:'Sep 5,2016',
    content:`<p>
                this is the content of my article two
            </p>
            <p>
                see you later folks.
            </p>`},
'article-three':{
title:'Article One|Draxler',
    heading:'Article One',
    date:'Sep 5,2016',
    content:`<p>
                this is the content of my third article
                </p>
            <p>
                see you later folks.
            </p>`
},
};
function createTemplate (data){
    var tile=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var HtmlTemplate=`<html>
    <head>
        <title>
            Article One|Draxler
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>    
            <a href="/">Home</a>
        </div>
        <hr/>
        <h2>
            ${heading}
        </h2>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`;
return HtmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
