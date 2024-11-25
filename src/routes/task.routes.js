import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/task.controller.js"
import { validateSchema } from "../middlewares/validator.zod.js";
import { createTaskSchema } from "../schemas/task.schema.js"

const router = Router()

router.get('/task', authRequired, getTasks)
router.get('/task/:id', authRequired, getTask)
router.post('/task', validateSchema(createTaskSchema), authRequired, createTask)
router.put('/task/:id', authRequired, updateTask)
router.delete('/task/:id', authRequired, deleteTask)

export default router