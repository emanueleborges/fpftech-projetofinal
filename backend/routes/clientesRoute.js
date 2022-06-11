const { Router } = require('express');
const ClientesController = require('../controllers/ClientesController');
const router = Router();

router.post('/api/clientes',  ClientesController.insert);
router.get('/api/clientes',   ClientesController.read);
router.get('/api/clientes/:id', ClientesController.read_one);
router.delete('/api/clientes/:id', ClientesController.delete_one);
router.put('/api/clientes/:id',  ClientesController.update_one);

module.exports = router;