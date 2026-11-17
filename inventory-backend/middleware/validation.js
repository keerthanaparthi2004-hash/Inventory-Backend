exports.validateItem = (req, res, next) => {
  const { name, quantity, price } = req.body;

  if (req.method === 'POST' && (!name || name.trim() === '')) {
    return res.status(400).json({ success: false, message: "Name is required" });
  }
  if (req.method === 'POST' && quantity === undefined) {
    return res.status(400).json({ success: false, message: "Quantity is required" });
  }
  if (req.method === 'POST' && price === undefined) {
    return res.status(400).json({ success: false, message: "Price is required" });
  }
  if (quantity !== undefined && (quantity < 0 || !Number.isInteger(quantity))) {
    return res.status(400).json({ success: false, message: "Quantity must be >= 0" });
  }
  if (price !== undefined && price < 0) {
    return res.status(400).json({ success: false, message: "Price must be >= 0" });
  }
  next();
};