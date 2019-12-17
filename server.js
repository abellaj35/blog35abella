const express  = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
//config vars
const port = process.env.PORT || 3000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/blog35abella';



const app = express();

app.set('view engine','pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extendend: false }));
app.use('/', router);

//db connection
mongoose.set('useUnifiedTopology',true);
mongoose.set('useFindAndModify',false);
mongoose
 .connect(db, {useNewUrlParser: true})
 .then(() => {
   console.log(`DB connected @ ${db}`);
 })
 .catch(err => console.error(`Connection error ${err}`));

//listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
