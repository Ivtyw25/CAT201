import express from 'express';
import { readFile } from 'fs/promises';
import cors from 'cors';


const app = express();
app.use(cors());
const PORT = 5000;

// Cache the JSON data on server start
let cacheData = {};
// Function to read and parse the JSON data
const readJSON = async () => {
  if (Object.keys(cacheData).length === 0) {
    // Only read the file once and cache it
    const data = await readFile('data.json', 'utf-8');
    cacheData = JSON.parse(data);
  }
  return cacheData;
};

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle requests by serving index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});
// Define an endpoint to get attractions
app.get('/getAttractions', async (req, res) => {
  try {
    const data = await readJSON();
    res.json(data); // Send the attractions data as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to read attractions data' });
  }
});
// New endpoints for each category
app.get('/getFoodAndBeverage', async (req, res) => {
    try {
      const data = await readJSON();
      res.json(data["Food and Beverage"]); // Send food and beverage data
    } catch (error) {
      console.error('Error fetching food and beverage data:', error); // Log the error
      res.status(500).json({ error: 'Failed to read food and beverage data' });
    }
  });
app.get('/getCultureAndHeritage', async (req, res) => {
  try {
    const data = await readJSON();
    res.json(data["Culture and Heritage"] || []); // Send culture and heritage data or empty array if not found
  } catch (error) {
    res.status(500).json({ error: 'Failed to read culture and heritage data' });
  }
});
app.get('/getNatureAndWildlife', async (req, res) => {
  try {
    const data = await readJSON();
    res.json(data["Nature and Wildlife"] || []); // Send nature and wildlife data or empty array if not found
  } catch (error) {
    res.status(500).json({ error: 'Failed to read nature and wildlife data' });
  }
});
app.get('/getAccommodations', async (req, res) => {
  try {
    const data = await readJSON();
    res.json(data["Accommodations"] || []); // Send accommodations data or empty array if not found
  } catch (error) {
    res.status(500).json({ error: 'Failed to read accommodations data' });
  }
});
app.get('/getBeaches', async (req, res) => {
  try {
    const data = await readJSON();
    res.json(data["Beaches"] || []); // Send beaches data or empty array if not found
  } catch (error) {
    res.status(500).json({ error: 'Failed to read beaches data' });
  }
});
app.get('/getFarmAndAnimals', async (req, res) => {
  try {
    const data = await readJSON();
    res.json(data["Farm and Animals"] || []); // Send farm and animals data or empty array if not found
  } catch (error) {
    res.status(500).json({ error: 'Failed to read farm and animals data' });
  }
});
app.get('/getThemeparks', async (req, res) => {
  try {
    const data = await readJSON();
    res.json(data["Themeparks"] || []); // Send theme parks data or empty array if not found
  } catch (error) {
    res.status(500).json({ error: 'Failed to read theme parks data' });
  }
});
app.get('/getTransportation', async (req, res) => {
  try {
    const data = await readJSON();
    res.json(data["Transportation"] || []); // Send transportation data or empty array if not found
  } catch (error) {
    res.status(500).json({ error: 'Failed to read transportation data' });
  }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});