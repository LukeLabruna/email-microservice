import express, { urlencoded, json } from 'express'
import cors from "cors"
import emailRouter from "./routers/email.router.js"

const app = express()

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())

app.use("/api", emailRouter)
app.get("/", (req, res) => {
    res.status(200).json({status: "success", message: "Microservice working"})
})
export default app