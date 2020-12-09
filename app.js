const http = require('http');
const db = require('./db'); 
const express = require("express")
const app = express()

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);
const port = 3050


app.get(`/`, (req, res) => {
    res.render(`home`);

});

app.get(`/projects`, (req,res) => {
    res.render(`project-list`, {
        locals: {
            projects: db
        }
    });
});

// app.get( '/projects/:id:' , (req, res) => {
//     const {id} = req.params;
//     const projects = db.find(f => f.projects === projects):


//     if (porjects) {
//         let htmldata = ``;
//         htmldata += `<h1>$project.`
//     }


// });

server.listen(port, () => console.log(`listening on ${port}`))

