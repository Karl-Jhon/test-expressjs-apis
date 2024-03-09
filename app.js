const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    console.log("GET Request Successfull!")
    res.send("Get Req Successfully initiated")
})

app.put("/put", (req, res) => {
    console.log("Put Request Successfull!")
    console.log(req.body)
    res.send("Data Update Request Revieved")
})

app.post("/post", (req, res) => {
    console.log("Post Request Successfull!")
    console.log(req.body)
    res.send("Data Update Request Revieved")
})

app.listen(PORT, () => {
    console.log(`Server established at ${PORT}`);
})