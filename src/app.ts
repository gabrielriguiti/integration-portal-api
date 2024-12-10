import express, { Request, Response } from 'express'

const app = express()
const port = 3000

// Middleware para lidar com JSON
app.use(express.json())

// Rota inicial
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, WebStorm com Node.js, Express e TypeScript!')
})


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})