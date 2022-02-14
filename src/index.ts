import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({extended: true}));

app.get("/ping",(req: Request, res: Response) => {
    res.json({pong: true})
});

app.use((req: Request, res: Response) => {
    res.json(404);
    res.json({error: "Endpoint not Found"});
});


app.listen(process.env.DOOR, () => {
    console.log(`Server run on Door ${process.env.DOOR}`)
})

