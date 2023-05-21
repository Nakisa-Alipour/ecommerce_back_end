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
  Tag.findAll({ include: [{ model: Product }]})
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => handleErrors(res, err));
});

// Get a single tag by ID
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }],
  })
    .then((tagData) => {
      if (!tagData) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      res.json(tagData);
    })
    .catch((err) => handleErrors(res, err));
});


// Create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tagData) => {
      res.status(201).json(tagData);
    })
    .catch((err) => handleErrors(res, err));
});


// Update a tag's name by ID
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((tagData) => {
      if (tagData[0] === 0) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      res.json(tagData);
    })
    .catch((err) => handleErrors(res, err));
});

// Delete a tag by ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((tagData) => {
      if (tagData === 0) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      res.status(204).end();
    })
    .catch((err) => handleErrors(res, err));
});

module.exports = router;
