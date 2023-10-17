import 'dotenv/config'

import {
  ClerkExpressWithAuth,
  LooseAuthProp,
  WithAuthProp,
} from '@clerk/clerk-sdk-node'
import cors from 'cors'
import express, { Request, Response } from 'express'

const app = express()

app.use(cors())

declare global {
  namespace Express {
    interface Request extends LooseAuthProp {}
  }
}

app.get('/me', ClerkExpressWithAuth(), (req: WithAuthProp<Request>, res: Response) => {
  if (!req.auth.sessionId) {
    return res.status(401).json({ error: "you aren't authenticated!" })
  }
  console.log('Você está autenticado!')
  return res.json(req.auth.userId);
})

app.listen(3333, () => console.log('server running!'))