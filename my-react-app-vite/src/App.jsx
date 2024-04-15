import {useEffect, useState} from "react";
//9ff64763
const API_URL ="http://www.omdbapi.com?apikey=9ff64763";
import "./App.css"
import MovieCard from "./MovieCard.jsx";
const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState("Spiderman");

    
        const searchMovies =async(title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            console.log(data.Search);
            setMovies(data.Search !==undefined ? data.Search : []);
        }
    useEffect(() => {
        searchMovies("Spiderman");
    },[])
    return(<div className="app"><h1>Movie Land</h1>
    <div className="search">
        <input
            placeholder="search for movies" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value)}}
                    />
                    <img alt="search " onClick={() => searchMovies(searchTerm)} src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"/>
                    </div>
                    { movies.length >0 ? (<div className="container">Z
                        {movies.map((m,i) => (<MovieCard key={i} movie ={m}/>))}
                        
                        </div>) :
                        (<div className="empty">
                            <h2>No movies found</h2>
                        </div>)}
                    </div>);
}
export default App