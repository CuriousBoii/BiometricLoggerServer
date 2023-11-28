const mongoose = require('mongoose')

const database = "MyDB"
const uri = "mongodb+srv://user0:vzd3k0RfORVrcEnX@cluster0.9z7l2le.mongodb.net/"+database+"?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser : true , useUnifiedTopology : true})
.then(() => {
  console.log("connected to " + database);
})
.catch((err) => {
  console.error(`Could not connect to ${database} due to`, err)
});
