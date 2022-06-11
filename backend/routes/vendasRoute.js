const { Router } = require('express');
const VendasController = require('../controllers/VendasController');
const router = Router();
router.post('/api/vendas',  VendasController.insert);
router.get('/api/vendas',  VendasController.read);
router.get('/api/vendas/:id',  VendasController.read_one);
router.delete('/api/vendas/:id',  VendasController.delete_one);
router.put('/api/vendas/:id',  VendasController.update_one);
module.exports = router;