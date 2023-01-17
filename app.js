const express = require('express');
var cors = require('cors')
const app = express()

const allRoutes = require('./routes');

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})