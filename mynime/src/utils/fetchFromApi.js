import axios from 'axios'

const BASE_URL = "https://gogoanime2.p.rapidapi.com"

const options = {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
    }
};

export const fetchFromApi = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data.slice(0,18)
}