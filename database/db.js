import mongoose from "mongoose";
const url = `mongodb+srv://yash_0813:Yash0813@cluster0.6wbcpyc.mongodb.net/?retryWrites=true&w=majority`;

// const Connection = async (username, password) => {

//     try {
//         await
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`Dtatbase Connected Successfully`)
}).catch((err) => {
    console.log("No connection");
});
// } catch (error) {
// console.log("Error while connecting with the database", error);

// }
// }

// export default Connection;