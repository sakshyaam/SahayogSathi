import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential : true
}));

//accept data
app.use(express.json(
    {
        limit : "16kb"
    }
));
// handles data coming through url
app.use(express.urlencoded({
    extended : true
}))

app.use(express.static("public"))
app.use(cookieParser())