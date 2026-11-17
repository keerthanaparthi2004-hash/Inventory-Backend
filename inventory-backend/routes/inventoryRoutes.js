const express = require('express');
const router = express.Router();
const controller = require('../controllers/inventoryController');
const { validateItem } = require('../middleware/validation');

router.get('/', controller.getAllItems);
router.get('/:id', controller.getItemById);
router.post('/', validateItem, controller.createItem);
router.put('/:id', validateItem, controller.updateItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;