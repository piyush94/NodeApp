const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('no'));

app.listen(8989, () => console.log('is2wix_auth started'));