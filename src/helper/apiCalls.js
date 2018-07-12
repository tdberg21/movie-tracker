export const fetchMovieData = async (key) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const response = await fetch(url);
  const results = await response.json();
  return results;
};

export const fetchUser = async (email, password) => {
  const url = 'http://localhost:3000/api/users'
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const results = await response.json()  
    return await results
  } catch (error) {
    console.log(error)
  }
} 
