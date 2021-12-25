// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";
import styles from "./Element.module.css";

function Element({runtime, coverImg,likeCount,descriptionIntro,title}){

    return(
        <div className={styles.movie}>
    
                <img className={styles.movie__img} src={coverImg} alt={title}/>
                <span className={styles.movie__runTime}>Runtime: {Math.floor(runtime/60)}h {runtime%60}m </span>
                <span className={styles.movie__like}>Like : {likeCount}</span>
                <h3>Description</h3>
                <p>{descriptionIntro}</p>
        </div>
    )
    } 
    export default Element;