import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home(){
    const [loading, setLoading] =useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async()=>{
        const json= await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
            )).json();
            setMovies(json.data.movies);
            setLoading(false);
    };
    console.log(movies);
    useEffect(()=>{
        getMovies();
    },[])
return(
    <div className={styles.container}>
        {loading ? (
        <div className={styles.loader}>
            <span>loading...</span>
            </div> 
        ): (
            <div className={styles.movies}>
                {movies.map((movie)=>(
                    <Movie
                    id={movie.id}
                    key={movie.id}
                    year={movie.year}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    genres={movie.genres}
                    synopsis={movie.synopsis}
                    />
                ))}
            </div>
        )}
    </div>
)
}

export default Home;