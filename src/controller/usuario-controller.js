import usuariosmodel from "../models/usuario.js"

const //criou uma funcao
    usuarioController = (app) => {


        app.get('/usuarios', (req, res) => {
            res.send("voce esta em usuarios")
        })
        //sempre requisicao com resposta// 


        app.post('/usuarios', (req, res) => {
            usuariosmodel.armazenar(req.body)
            res.send({
                msg: "usuario cadastrado com sucesso"
            })
        })
    }

//mostrar na app.js

export default usuarioController