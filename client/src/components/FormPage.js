import { useState } from 'react';
import axios from 'axios';

function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { name, email });
      alert('User Created Successfully!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <br /><br />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <br /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default FormPage;
