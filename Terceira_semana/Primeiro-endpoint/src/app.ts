import  express  from "express";
import { Request, Response, Router } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();

router.get('/', (_req: Request, res: Response) => {
    const helloworld = { message: 'Hello World' };
    res.send(helloworld);
});

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Aplicação online na porta: ${PORT}`);
})