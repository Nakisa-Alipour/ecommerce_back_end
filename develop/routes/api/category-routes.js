const router = require('express').Router();
const { Category, Product } = require('../../models');

// Error handling middleware
const handleErrors = (res, err) => {
  console.error(err);
  res.status(500).json({ error: 'An unexpected error occurred' });
};

// Get all categories
router.get('/', (req, res) => {
  Category.findAll({ include: [{ model: Product }] })
    .then((categoryData) => {
      res.json(categoryData);
    })
    .catch((err) => handleErrors(res, err));
});

// Get a single category by ID
router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }],
  })
    .then((categoryData) => {
      if (!categoryData) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.json(categoryData);
    })
    .catch((err) => handleErrors(res, err));
});

// Create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((categoryData) => {
      res.status(201).json(categoryData);
    })
    .catch((err) => handleErrors(res, err));
});

// Update a category by ID
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((categoryData) => {
      if (categoryData[0] === 0) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.json(categoryData);
    })
    .catch((err) => handleErrors(res, err));
});

// Delete a category by ID
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((categoryData) => {
      if (categoryData === 0) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(204).end();
    })
    .catch((err) => handleErrors(res, err));
});

module.exports = router;
