const express = require(`express`);
const app = express();
const cors = require("cors")       //yo cors lai bolako
const bookRoute = require("./router/bookRoute")




app.use(cors({
    origin : "*"
}))


app.use(express.json())            //yo logic hald n bhujne bhayer rakhnaii parxa

// localhost:4000/api+ /hello = localhost:4000/api/hello
// localhost:4000/api + /books/:id = localhost:4000/api/books/:id
// localhost:4000/api/haha/ + /books = localhost:4000/api/haha//books
app.use("/api/books",bookRoute)           
//yo api bhanne ma je ni rakhda hunxa haiii



app.listen(4500,()=>{
    console.log(`The Port is Conected.`)
})