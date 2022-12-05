import styles from './CardNews.module.css'
import cardimg from '../../img/Studio-Ghibli-and-Lucasfilm.webp'
function CardNews({newsData , handleClickCardNews}){
    
    const clickCardNews = (e) => {
        e.preventDefault();
        handleClickCardNews(newsData.id);
    }

    return(
        <article onClick={clickCardNews} className={styles.card_news}>
            <img src={newsData.image} alt={newsData.title}/>
            <div>
                <h2>{newsData.title}</h2>
                <p>{newsData.text}</p>
            </div>
            <span>{newsData.post_dat}</span>
        </article>
    )
}

export default CardNews;