import express from "express";
import { router } from "./config/routes"

const app = express()

const PORT = 3001;

app.use(express.json())
app.use(router);

app.listen(PORT, () => {
    console.log("Rodando na porta 3001")
})
