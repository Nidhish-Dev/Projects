import React, { useState } from 'react';
import './Create.css'

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, designation, city }),
      });

      if (!response.ok) {
        throw new Error('Failed to create employee');
      }

      const data = await response.json();
      console.log(data.message); 

      window.location.href = '/';
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div className='create'>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required /><br />
        
    
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        
     
        <input type="text" placeholder='Designation' value={designation} onChange={(e) => setDesignation(e.target.value)} required /><br />
        
       
        <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} required /><br />
        
        <button className='createbtn' type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
