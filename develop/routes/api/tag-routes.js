const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Error handling middleware
const handleErrors = (res, err) => {
  console.error(err);
  res.status(500).json({ error: 'An unexpected error occurred' });
};

// The `/api/tags` endpoint

// Get all tags
router.get('/', (req, res) => {
  Tag.findAll({ include: [{ model: Product }, {model:ProductTag}] })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => handleErrors(res, err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
