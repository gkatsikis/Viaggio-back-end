import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

router.get('/', postsCtrl.index)
router.post('/',  checkAuth, postsCtrl.create)
router.get('/:id', checkAuth, postsCtrl.show)
router.put('/:id', checkAuth, postsCtrl.update)
router.delete('/:id', checkAuth, postsCtrl.delete)


export {
  router
}