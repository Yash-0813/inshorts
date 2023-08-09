import mongoose from "mongoose";
const url = `mongodb+srv://yash_0813:Yash0813@cluster0.6wbcpyc.mongodb.net/?retryWrites=true&w=majority` ||
    "mongodb://localhost:27017/inshorts";

mongoose.connect(url).then(() => {
    console.log(`Dtatbase Connected Successfully`, url);
}).catch((err) => {
    console.log("No connection");
});