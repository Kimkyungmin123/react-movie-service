// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";
import styles from "./Element.module.css";
import {Link} from "react-router-dom";

function Element({runtime, coverImg,likeCount,descriptionIntro,title,originalImg,HOME}){

    return(
        <div>
            <img className={styles.movie__originalImg} src={originalImg} alt={title}/>
            <div className={styles.movie__home}>
                <Link to={`/react-movie-service/`}><span>HOME</span></Link>
            </div>
            <div className={styles.movie}>
                <div>
                
                    <img className={styles.movie__img} src={coverImg} alt={title}/>
                    <span className={styles.movie__title}>{title}</span>
                    <div className={styles.movie__etc}>
                        <span className={styles.movie__runTime}>⏱  { String(Math.floor(runtime/60)).padStart(2,"0")}h {String(runtime%60).padStart(2,"0")}m </span>
                        <span className={styles.movie__like}>👍  {likeCount}</span>
                    </div>
                </div>
                    <div className={styles.movie__description} >
                        <span>Description</span>
                        <p className={styles.movie__descriptionIntro}>{descriptionIntro}</p>
                    </div>
            </div>
            
        </div>
    )
    } 
    export default Element;