import { Router } from "express"
import EmailController from "../controllers/email.controller.js"

const router = Router()
const emailController = new EmailController

router.post("/send-email", emailController.sendEmail)

export default router