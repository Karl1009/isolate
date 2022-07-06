import express from "express"
import cors from 'cors'
import dotenv from "dotenv"

import { errorHandler, pathNotFound } from './error';

dotenv.config();
const { PORT, NODE_ENV } = process.env
const app = express()
app.use(cors({credentials: true}))
app.use(express.json())


app.get('/health', (req, res) => {
    console.log('I am super healthy')
    throw new Error('create Error')
    return res.status(200).json({
        isSuccess: true,
        data: { name: "karl" }
    }
        )
})

app.use('/', (req, res) => {
    console.log('Hello World')
    // throw new Error('create error')
    return res.status(200).json({
        isSuccess: true,
        data: { name: "karl" }
    }
        )

})

app.all('*', (req, res) => {
    return res.status(404).json({

    })
  })

app.use(pathNotFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT} - ${NODE_ENV}`)
})
