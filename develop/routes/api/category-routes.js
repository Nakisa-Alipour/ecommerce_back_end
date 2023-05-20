const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({ include: [{ model: Product }] })
    .then((categoryData) => {
      res.json(categoryData);
    })
    .catch((err) => {
      // Handle error
      console.log(err);
      res.json(err);
    });
});



router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {id: req.params.id},
    include: [{model: Product}]})
    .then((categoryData) => {
      res.json(categoryData);
    })
    .catch((err) => {
      // Handle error
      console.log(err);
      res.json(err);
    });

});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    // Handle error
    console.log(err);
    res.json(err);
  }); 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {id: req.params.id}
  }).then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    // Handle error
    console.log(err);
    res.json(err);
  });  
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body, {
    where: {id: req.params.id}
  }).then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    // Handle error
    console.log(err);
    res.json(err);
  });  
});

module.exports = router;
