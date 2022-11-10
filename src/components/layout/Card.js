import styles from './Card.module.css';

function Card ({animeData , handleClickCard}){

    const clickCard = (e) => {
        e.preventDefault();
        handleClickCard(animeData.id);
    }
    return(
        <div onClick={clickCard} className={styles.card}>
            <img src={animeData.image} alt={animeData.title}/>
            <div className={styles.card_info}>
                <div>
                    <p>{animeData.title}</p> <span>{animeData.rt_score}</span>
                </div>
                <h2>Action,Drama</h2>
            </div>
        </div>
    )
}

export default Card;