const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 4000;
const cors=require('cors')
const router=require('./routes/routes')
app.use(cors())
app.use('/',router);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});
