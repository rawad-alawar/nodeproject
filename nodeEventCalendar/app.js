var express = require("express");
var app = express();

var port = process.env.PORT
var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');



app.use(express.static('public'));
app.use(express.static('bower_components')) //Bower is a package manager for the web. We use bower to manage our front end assets. Bower can be installed with NPM. Bower downloads and manages updates like NPM. It is similar to NPM and Package.json

app.set('views','./src/views')
app.set('view engine', 'ejs')


    
app.use('/Events', eventRouter) //if user goes to '/Events', they are routed to eventRouter.route('/'). If user goes to '/Events/event', they are routed to eventRouter.route('/event')
app.use('/Db', dbRouter)

app.get('/',function(req, res){
   // res.send("Aloha World")
   res.render('index',{
       list: ['first val', 'second val', 'third val'],
       nav: [{Link: 'Services', Text: 'Services'}, 
             {Link: 'Portfolio', Text: 'Portfolio'},
             {Link:'About', Text: 'About'},
             {Link: 'Team', Text: 'Team'},
             {Link: 'Contact', Text: 'Contact'},
             {Link: 'Events', Text: 'Events'}
        ]
   })
})

app.get('/routing',function(req, res){
    res.send("Aloha Routing")
})

app.listen(port, function(err){
    console.log("The server is running on port: " + port);
});
