const mongoose = require("mongoose");

async function connectToMongoDB(url) {
    mongoose.set("strictQuery",true);
  return mongoose
    .connect(url)
    .then(() => console.log("mongoDB connected"))
    .catch((err) => console.log("mongo error", err));
}
module.exports = { connectToMongoDB };
