import axios from 'axios';

const API_KEY = "cvno831r01qq3c7gedcgcvno831r01qq3c7gedd0";  // replace this
const BASE_URL = "https://finnhub.io/api/v1/quote";

export const fetchPrice = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}?symbol=${symbol}&token=${API_KEY}`);
    return response.data.c; // 'c' is current price
  } catch (error) {
    console.error("Error fetching price:", error);
    return null;
  }
};
