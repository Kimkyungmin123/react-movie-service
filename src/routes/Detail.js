import { useEffect ,useState} from "react";
import {useParams} from "react-router-dom";
import Element from "../components/Element";


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
    <div>
        {loading ? (
        <h1>Loading...</h1>
        ):(
            <div>
            <Element
            runtime ={datas.runtime}
            coverImg ={datas.medium_cover_image}
            likeCount ={datas.like_count}
            descriptionIntro ={datas.description_intro}
            title ={datas.title}
            />
            </div>
        )
        }
    </div>

);
}
export default Detail ;