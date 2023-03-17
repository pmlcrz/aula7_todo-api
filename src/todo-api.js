import express from "express";
const app = express()

app.get('/entidadetarefa', function (req, res) {
  res.send("faculdade, preparar marmita, judô")
})

app.get('/entidadepessoas', function (req, res) {
    res.send("pessoa1, pessoa2, pessoa3")
  })

app.listen(3000)