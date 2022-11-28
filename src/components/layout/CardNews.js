import styles from './CardNews.module.css'
import cardimg from '../../img/Studio-Ghibli-and-Lucasfilm.webp'
function CardNews(){
    return(
        <article className={styles.card_news}>
            <img src={cardimg} alt=""/>
            <div>
                <h2>Star Wars ganha curta animado pelo Studio Ghibli na Disney +</h2>
                <p>O Studio Ghibli publicou em seu Twitter na semana passada, dia , um video misterioso no quyal era possivell ver o logo LucasFilm e... </p>
            </div>
            <span>14/11/2022</span>
        </article>
    )
}

export default CardNews;