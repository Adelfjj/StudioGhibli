import styles from "./Home.module.css"
import Card from "../layout/Card";
import {useRef, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

function Home (){
    const carousel = useRef(null);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/films')
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    },[]);

    const handleClickCard = (id) =>{
        navigate(`/film/${id}`)
    }
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth - 215
    }
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth - 215
    }
    return(
       
         <div className={styles.home}>
            <section>
            <h2>Filmes do Studio Ghibli</h2>
                <div className={styles.carousel} ref={carousel}>
                    {data.length > 0 && 
                        data.map((anime) =>
                        <Card key={anime.id} 
                        handleClickCard = {handleClickCard}
                        animeData={anime}/>
                        )}
                </div>
                <span onClick={handleLeftClick} className={styles.prev} >&#10094;</span>
                <span onClick={handleRightClick} className={styles.next}>&#10095;</span>
            </section>
        </div>
    )
}

export default Home;