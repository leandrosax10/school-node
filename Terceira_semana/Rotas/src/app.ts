import express  from "express";
import cors from "cors";
import routes from "./routers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Aplicação online na porta: ${PORT}`);
});