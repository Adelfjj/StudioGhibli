import CardNews from "../layout/CardNews";
import styles from "./News.module.css";

function News (){
    return(
        <section className={styles.news}>
            <CardNews/>
            <CardNews/>
            <CardNews/>
            <CardNews/>
        </section>
    )
}

export default News;