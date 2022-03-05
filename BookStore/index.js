const express = require('express')
const app = express()
const fs = require('fs')
const fs1 = require('fs')

app.get('/', function(req, res) {
    fs.readFile('./BookStore.html', 'utf8' , (err, html) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        
        res.send(html)
    })

})

app.get('/detail', function(req, res) {
    fs1.readFile('./detail.html', 'utf8' , (err, html) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        
        res.send(html)
    })

})

app.listen(3000, ()=> {
    console.log("App is running on http://localhost:3000");
})