import axios from "axios"

const API_BASE_URL=process.env.NEXT_PUBLIC_API_URL
const TOKEN=process.env.NEXT_PUBLIC_ACCESS_TOKEN
const header= {
    "Accept": "application/json",
    "Authorization": `${TOKEN}`,
    "api_key": process.env.NEXT_PUBLIC_API_KEY,  
  }

export const getPopularMovies = async()=>{
    try {
        const res = await axios.get(`${API_BASE_URL}/popular?language=en-US&page=1`,{
            headers:header
        })
        // console.log({pop:res.data.results})
        return res.data.results
        
    } catch (error) {
        console.log(error)
    }
}
export const getNowPlayingMovies = async()=>{
    try {
        const res = await axios.get(`${API_BASE_URL}/now_playing?language=en-US&page=1`,{
            headers:header
        })
        // console.log({lat:res.data.results})

        return res.data.results
        
    } catch (error) {
        console.log(error)
    }
}
export const getTopRatedMovies = async()=>{
    try {
        const res = await axios.get(`${API_BASE_URL}/top_rated?language=en-US&page=1`,{
            headers:header
        })
        // console.log({top:res.data.results})

        return res.data.results
        
    } catch (error) {
        console.log(error)
    }
}
export const getUpComingMovies = async()=>{
    try {
        const res = await axios.get(`${API_BASE_URL}/upcoming?language=en-US&page=1`,{
            headers:header
        })
        // console.log({up:res.data.results})

        return res.data.results
        
    } catch (error) {
        console.log(error)
    }
}
export const searchMovies = async(query)=>{
    if(!query)
        return;
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,{
            headers:header
        })
        // console.log({search:res.data.results})

        return res.data.results
        
    } catch (error) {
        console.log(error)
    }
}


 
// const getLatestMovies = async () => {
//       const options = {
//           method: 'GET',
//           url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
       
//       };

//       try {
//           const res = await axios.request(options);
//           console.log(res.data);   

//            dispatch(setMoviesData({ type: 'latest', data: res.data.results }));

//       } catch (err) {
//           console.error(err);
//       }
//   }
  

//   useEffect(() => {
//       getLatestMovies();

//   }, []);