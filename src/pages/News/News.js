import React from 'react'
import NewsItem from '../../components/NewsItem/NewsItem'

import './News.css'


function News({data}) {
    return (
        <section className="news">
        <div className = "container">
            <h2 className="news__title">To be<br/> up to <span className="blue">date</span></h2>
            <ul className="news__list">
                {
                    data && data.articles.map((item,index) => {
                        let datePublish = new Date(item.publishedAt);
                        return (
                            <NewsItem
                                key = {index}
                                title = {item.title}
                                author = {item.source.name}
                                day = {datePublish.getDate()}
                                month = {datePublish.getMonth() + 1}
                                detail = {item}
                            />
                        )
                    })
                }
            </ul>
        </div>
   </section>
    )
}

export default News
