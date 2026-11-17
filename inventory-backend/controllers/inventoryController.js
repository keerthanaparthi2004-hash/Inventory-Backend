let { inventory, nextId } = require('../model/inventoryData');

// GET all - with filter & search
exports.getAllItems = (req, res) => {
  let result = [...inventory];
  const { category, minQuantity, search } = req.query;

  // Filtering by category ?category=Electronics
  if (category) {
    result = result.filter(item => item.category.toLowerCase() === category.toLowerCase());
  }
  // Filtering by quantity ?minQuantity=10
  if (minQuantity) {
    result = result.filter(item => item.quantity >= parseInt(minQuantity));
  }
  // Searching by name ?search=lap
  if (search) {
    result = result.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }

  res.json({ success: true, data: result });
};

// GET single item
exports.getItemById = (req, res) => {
  const item = inventory.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ success: false, message: "Item not found" });
  res.json({ success: true, data: item });
};

// POST - Add item
exports.createItem = (req, res) => {
  const newItem = { ...req.body, id: nextId++, };
  inventory.push(newItem);
  res.status(201).json({ success: true, data: newItem });
};

// PUT - Update item
exports.updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = inventory.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ success: false, message: "Item not found" });
  
  inventory[index] = { ...inventory[index], ...req.body };
  res.json({ success: true, data: inventory[index] });
};

// DELETE
exports.deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = inventory.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ success: false, message: "Item not found" });

  const deleted = inventory.splice(index, 1);
  res.json({ success: true, message: "Item deleted", data: deleted[0] });
};