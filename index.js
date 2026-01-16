const express = require("express");
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser');
const {restrictToLoggedinUserOnly,checkAuth} = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT || 8001;

const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const staticRouter = require('./routes/staticRouter');

connectToMongoDB(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/short-url");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine","ejs");
app.set('views',path.resolve('./views'));

app.use("/",checkAuth,staticRouter);
app.use("/url", restrictToLoggedinUserOnly,urlRoute);
app.use("/user", userRoute);

app.listen(PORT, () => console.log("Server Started!!"));
