import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import idcsRoutes from "./routes/idcs.js"
import dotenv from 'dotenv'
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit:"30mb",extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended : true}));


//idcs/validate
app.use('/idcs', idcsRoutes);

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Great, my server running on PORT " + PORT ));

