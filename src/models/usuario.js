import bd from "../infra/bd.js"

const UsuariosModel = {
    modelar : (obj) => {
        return {
            dados: {

                nome: obj.nome,
                email: obj.email,
                certificado: "esse objeto for modelado"
            },
            status: 200
        }
    },
    armazenar : (obj) => {
        bd.usuarios.push(obj)
        console.log(bd.usuarios)
        return {
            daddos : {msg : "Usuario criado com sucesso"},
            statys: 201
        }
    }
}

export default UsuariosModel