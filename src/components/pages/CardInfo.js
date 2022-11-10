import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CardInfo.module.css";

function CardInfo(){
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    },[id]);

    return(
        <div className={styles.card_info}> 
            {data && (
                <>
                    <div className={styles.movie_card}>
                        <img src={data.image} alt="movie" />
                        <div className={styles.info_mv}>
                            <h2>{data.title} <span>{data.rt_score}</span> </h2>
                            <p>Release Date: {data.release_date}</p>
                            <div>
                                <p>Director: {data.director}</p>
                                <p>Producer: {data.producer}</p>
                            </div>
                            <div className={styles.descr}>
                                <h3>Description</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
        </div>
    )
}

export default CardInfo;