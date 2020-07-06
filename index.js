const express = require('express')
const port = 1234
const app = express()

app.use('/', express.static('./public'))
app.use('/api', require('./routes/api').route)

app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server started on ${port}`)
})