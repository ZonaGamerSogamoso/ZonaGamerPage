
export const options = (endpoint) => {
  return {
    method: 'GET',
    url: `https://mmo-games.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '6cfdb9b605msh2cfb3881b475307p1f03b2jsnb7cba1b523cd',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
  }
};
