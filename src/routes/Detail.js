import { useEffect ,useState} from "react";
import {useParams} from "react-router-dom";
import Element from "../components/Element";
import styles from "./Detail.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner  } from '@fortawesome/free-solid-svg-icons';


function Detail(){
    const {id} = useParams();
    const [loading,setLoading] =useState(true);
    const [datas, setDatas] =useState({});
    const getMovie = async()=>{
        const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDatas(json.data.movie);
        setLoading(false);
        
    };
    useEffect(()=>{
        getMovie();
    },[]);

return(
    <div className={styles.container}>
        {loading ? (
        <div className={styles.loader}>
        <span>Loading...</span>  <FontAwesomeIcon
                                icon={faSpinner} 
                                className={styles.icon}
                                />
        
        </div>
        ):(
            <div className={styles.movies}>
            <Element
            runtime ={datas.runtime}
            coverImg ={datas.medium_cover_image}
            originalImg={datas.background_image_original}
            likeCount ={datas.like_count}
            descriptionIntro ={datas.description_intro}
            title ={datas.title}
            url={datas.url}

            />
            </div>
        )
        }
    </div>

);
}
export default Detail ;