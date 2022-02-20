const data = {};
data.employees = require("../public/text/data/employees.json");

//Route Handlers...

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployees = (req, res) => {
  res.json({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
  });
};

const updateEmployee = (req, res) => {
  res.json({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
  });
};

const deleteEmployees = (req, res) => {
  res.json({
    id: req.body.id,
  });
};

const getEmployee = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllEmployees,
  createNewEmployees,
  updateEmployee,
  deleteEmployees,
  getEmployee,
};
