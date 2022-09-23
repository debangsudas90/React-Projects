import axios from 'axios'

const BASE_URL = "https://gogoanime2.p.rapidapi.com"

const options = {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com',
      'Access-Control-Allow-Origin': '*',
      crossorigin:true
    }
};

export const fetchFromApi = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}