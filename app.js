import express from "express";
import usuarioController from "./src/controller/usuario-controller.js";

const app = express()

const port = 3000

app.use(express.json())

usuarioController(app)

app.listen(port, () => {

  console.log(`API up acesso em : localhost:${port}`)

})