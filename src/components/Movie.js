import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({id, year, coverImg, title, genres,summary}){
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{year}</p>
            <p>{summary}</p>
            <ul>
            {genres.map((g) =>(
            <li key={g}>
            {g}
            </li>
            ))}
        </ul>

            
            

        </div>
    );

}
Movie.propTypes ={
    id :PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    coverImg :PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired
    // genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;