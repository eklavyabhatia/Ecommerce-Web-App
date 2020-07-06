const express = require('express')
const port = 1234
const app = express()

app.use('/', express.static('./public'))


app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server started on ${port}`)
})