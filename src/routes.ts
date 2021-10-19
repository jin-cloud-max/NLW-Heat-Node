import { Router } from 'express'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateMessageController } from './controller/CreateMessageController'
import { ensureAuthenticate } from './middleware/ensureAuthenticate'

const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/messages", ensureAuthenticate, new CreateMessageController().handle)

export { router }