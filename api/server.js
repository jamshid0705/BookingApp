const app=require('./middleware/app')
require('dotenv').config()
require('./config/db')


app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} port to listening !`);
});