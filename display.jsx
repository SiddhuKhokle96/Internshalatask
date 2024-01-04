import { useEffect, useState } from 'react';
import { executeQuery } from '../lib/db';

export default function Fetch() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await executeQuery('SELECT * FROM school_data');
        setSchools(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>School Data</h1>
      <ul>
        {schools.map((school) => (
          <li key={school.id}>
            {school.name} - {school.location} (Est. {school.established_year})
          </li>
        ))}
      </ul>
    </div>
  );
}
