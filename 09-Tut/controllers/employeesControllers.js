const data = {
employees = require("../public/text/data/employees.json"),
setEmployees: function(data){this.employees = data}
};

//Route Handlers...

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployees = (req, res) => {

  const newEmployee = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
  }

  if(!newEmployee.first_name || !newEmployee.last_name){
    return res.status(400).json({'message':"First and Last Names are required"})
  }

data.setEmployees([...data.employees,newEmployee])
  res.status(201).json(data.employees);
};

const updateEmployee = (req, res) => {

  const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
  if(!employee){
    return res.status(400).json({"message":`Employee ID ${req.body.id} not found`})
  }

  if(req.body.first_name) employee.first_name = req.body.first_name
  if(req.body.last_name) employee.last_name = req.body.last_name
  if(req.body.email) employee.email = req.body.email
  if(req.body.gender) employee.gender = req.body.gender
  if(req.body.ip_address) employee.ip_address = req.body.ip_address
  const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id))
  const unsortedArray = [...filteredArray,employee];
  data.setEmployees(unsortedArray.sort((a,b) => a.id>b.id?1:a.id < b.id?-1:0))
  res.json(data.employees);
};

const deleteEmployees = (req, res) => {

  const employee = data.employess.find(emp => emp.id === parseInt(req.body.id));
  if(!employee){
    return res.status(400).json({"message":`Employee ID ${req.body.id} not found`})
  }
  const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
  data.setEmployees([...filteredArray])
  res.json(data.employees)

  res.json(
    data.employees
  );
};

const getEmployee = (req, res) => {
  const employee = data.employess.find(emp =>  emp.id === parseInt(req.params.id));
  if(!employee){
    return res.status(400).json({"message":`Employee ID ${req.params.id} not found`})
  }
  res.json(employee);
};

module.exports = {
  getAllEmployees,
  createNewEmployees,
  updateEmployee,
  deleteEmployees,
  getEmployee,
};
