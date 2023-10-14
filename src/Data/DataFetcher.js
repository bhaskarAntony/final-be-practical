import axios from 'axios';

async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error so that the caller can handle it if needed
  }
}

const advantages = fetchData('http://localhost:3300/api/advantages');
const companies = fetchData('http://localhost:3300/api/companies');

export { advantages, companies };
