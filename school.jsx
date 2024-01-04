import { useState } from 'react';
import { useRouter } from 'next/router';
import { executeQuery } from '../lib/db';

export default function Input() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [establishedYear, setEstablishedYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await executeQuery('INSERT INTO school_data (name, location, established_year) VALUES (?, ?, ?)', [
        name,
        location,
        establishedYear,
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
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Established Year"
          value={establishedYear}
          onChange={(e) => setEstablishedYear(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
