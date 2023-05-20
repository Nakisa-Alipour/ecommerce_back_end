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


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
