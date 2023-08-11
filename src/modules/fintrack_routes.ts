import { Router } from 'express';

import { createFintrack, getFintracks, updateFintrack, getbyidFintracks, deleteFintrack } from './fintrack_controllers';

const router = Router();

router.post('/', createFintrack);

router.get('/', getFintracks);

router.get('/:id', getbyidFintracks);

router.put('/:id', updateFintrack);

router.delete('/:id', deleteFintrack);

export default router;