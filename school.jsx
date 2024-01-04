import { useState } from 'react';
import { useRouter } from 'next/router';
import { executeQuery } from '../lib/db';

export default function Input() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [City, setLocation] = useState('');
  const [State, setState] = useState('');
  const [Contact, setContact] = useState('');
  const [Email, setEmail] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await executeQuery('INSERT INTO school_data (name,City,State,Contact,Email,) VALUES (?, ?, ?, ?, ?)', [
        name,
        City,
        State,
        Contact,
        Email,
      ]);
      router.push('/fetch');
    } catch (error) {
      console.error('Error saving the data:', error);
    }
  };

  return (
    <div>
      <h1>Input School Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={City}
          onChange={(e) => setCity(e.target.value)}
        />
         <input
          type="text"
          placeholder="State"
          value={State}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          value={Contact}
          onChange={(e) => setContact(e.target.value)}
        />
         <input
          type="text"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
