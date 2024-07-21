import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Create from './Create';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.message); 
        setEmployees(employees.filter(employee => employee._id !== id));
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
      });
  };

  return (
    <Router>
      <div>
        <div className="upper">
          <h1>Employee Management</h1>
          <div className='navlinks'>
          <Link to="/create"><button>+ Add New Employee</button></Link>
          <Link to="/"><button>Back</button></Link>
          </div>
        </div>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>City</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee,index) => (
                    <tr key={employee._id}>
                      <td>{index+1}</td>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.city}</td>
                      <td><button className='dltbtn' onClick={() => handleDelete(employee._id)}><lord-icon src="https://cdn.lordicon.com/drxwpfop.json"
    trigger="loop"
    delay="2000"
    stroke="bold"
    colors="primary:#ffffff,secondary:#08a88a"> </lord-icon></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          } />
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
