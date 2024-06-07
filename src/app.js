const express = require('express');
const bodyParser = require("body-parser");
const session = require('express-session');


const app = express();
const ServerKey = process.env.ServerKey || 3000;

app.use(express.static('../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));


//routes import
const route = require("./routes/route");

//route use
app.use("/", route);

// export default app;
app.listen(ServerKey,()=>{
    console.log("Server at port ",ServerKey," !!!");
}); 
