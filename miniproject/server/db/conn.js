const mongoose = require("mongoose");

const DB =
  "mongodb+srv://anuj108:qM2UBabWVmz9pKYT@cluster0.0jyrh8q.mongodb.net/mini-project?retryWrites=true&w=majority";

console.log(DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
    console.log("DISCONNECT HOGYA");
  });
