function Element({runtime, coverImg,likeCount,descriptionIntro,title}){

    return(
        <div>
    
                <img src={coverImg} alt={title}/>
                <p>Runtime: {runtime}</p>
                <p>Like: {likeCount}</p>
                <h3>Description</h3>
                <p>{descriptionIntro}</p>
        </div>
    )
    } 
    export default Element;