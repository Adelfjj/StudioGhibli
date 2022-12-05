import { useEffect, useState } from "react";
import CardNews from "../layout/CardNews";
import styles from "./News.module.css";

function News (){

    const [data,setData] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/news',{
            method : "GET",
            headers : {
                'Content-type':'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    },[]);

    const handleClickCardNews = (id) =>{
        console.log(id);
    }
    return(
        <section className={styles.news}>
            {data.length > 0 && 
            data.map((news) => 
            <CardNews key={news.id}
            handleClickCardNews = {handleClickCardNews}
            newsData = {news}/>
            )}
        </section>
    )
}

export default News;