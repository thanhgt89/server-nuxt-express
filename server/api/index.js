import { Router } from 'express'

import home from './home'
import product from './product'

const router = Router()
// ROUTER HOMEPAGE
router.use(home)
router.use(product)

export default router
