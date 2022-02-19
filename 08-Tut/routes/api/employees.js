const express = require("express");
const router = express.Router();

//instantiating empty objects for data
const data = {};
data.employees = require("../../public/text/data/employees.json");

router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      ip_address: req.body.ip_address,
    });
  })
  .put((req, res) => {
    res.json({
      id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      ip_address: req.body.ip_address,
    });
  })
  .delete((req, res) => {
    res.json({
      id: req.body.id,
    });
  });

router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
