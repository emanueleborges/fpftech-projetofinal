const { Router } = require('express');
const ProdutosController = require('../controllers/ProdutosController');
const router = Router();
router.post('/api/produtos',  ProdutosController.insert);
router.get('/api/produtos',   ProdutosController.read);
router.get('/api/produtos/:id', ProdutosController.read_one);
router.delete('/api/produtos/:id', ProdutosController.delete_one);
router.put('/api/produtos/:id',  ProdutosController.update_one);
module.exports = router;