import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', postsCtrl.index)
router.post('/',  checkAuth, postsCtrl.create)
router.get('/:id', postsCtrl.show)
router.put('/:id', postsCtrl.update)
router.delete('/:id', checkAuth, postsCtrl.delete)

//comments
router.post('/:id/comments', postsCtrl.createComment)
router.delete('/:postId/comments/:commentId',  postsCtrl.deleteComment)
router.put('/:postId/comments/:commentId',  postsCtrl.updateComment)


export {
  router
}