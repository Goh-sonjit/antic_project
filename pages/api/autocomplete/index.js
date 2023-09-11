import axios from 'axios';

export default async function handler(req, res) {
  const API_KEY = "AIzaSyDEKx_jLb_baUKyDgkXvzS_o-xlOkvLpeE";
  const input = req.query.input;
  const city = req.query.city || "delhi";

  const url = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${input}in%20${city}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
