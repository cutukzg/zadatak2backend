const express = require("express")
const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

const port = 3001
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

app.get("/healthcheck", (req, res) =>
    res
        .status(200)
        .send({ message: "Api is healthy and online" }))

app.post("/healthcheck", (req, res) =>
    res.status(200)
        .json({
            message: "You can post to this endpoint",
            app: "Healtcheck route"
        }))

app.use(express.json())
app.post("/data", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        status: "Success !", data: {
            body:
                req.body
        }
    });
});

app.get("*", (req, res) =>
    res
        .status(404)
        .json({ message: "Route does not exist", app: "Healtcheck route" })
);