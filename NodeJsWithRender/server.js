import express from "express";
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/", (req, resp) => {
    console.log("Received request");
    resp.send("Hello abc");
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log("my server running, how great!!" + PORT ));

