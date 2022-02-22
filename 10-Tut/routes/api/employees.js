const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/employeesControllers");
//instantiating empty objects for data
const data = {};
data.employees = require("../../public/text/data/employees.json");

router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployees)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployees);

router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
