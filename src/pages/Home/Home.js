import React from 'react'
import { Link } from 'react-router-dom'
import NewsItem from '../../components/NewsItem/NewsItem'

import './Home.css'

function Home({data}) {
    return (
        <section className="introduction">
            <div className = "container">
                <h1 className="introduction__title">Is always<br/>latest <span className="blue"> news</span></h1>
                <ul className="introduction__news">
                        {
                            data && data.articles.slice(0,6).map((item,index) => {
                                let datePublish = new Date(item.publishedAt);
                                    return (
                                        <NewsItem
                                            key = {index}
                                            title = {item.title}
                                            author = {item.source.name}
                                            day = {datePublish.getDate()}
                                            month = {datePublish.getMonth()}
                                            detail = {item}
                                        />
                                    )
                                }
                            )
                        }
                </ul> 
                <div className="introduction__link">
                    <Link to="/news">Stay up to date</Link>
                </div>  
            </div>
         </section>
    )
}

export default Home
