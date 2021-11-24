import React from 'react'
import {useLocation} from 'react-router-dom'

import './NewsDetail.css'

function NewsDetail() {
    const {state} = useLocation()
    const date = new Date(state.publishedAt);
    const day = date.getDate();
    const month = date.getMonth()+1;
    return (
             <section className="detail">
                 <div className = "container">
                    <div className = "detail__wrap">
                        <div className="detail-block__left">
                            <h2 className="detail-block__title">{state.title}</h2>
                            <p className="detail-block__url news__url">{state.source.name}</p>
                            <div className="detail-block__date">
                            <span className="day">{day}</span>
                            /<span className="month">{month}</span>
                            </div>
                        </div>
                        <div className="detail-block__right">
                            <div className="detail-block__photo">
                                <img src={state.urlToImage} className="detail-block__icon" alt="news illustration"/>
                            </div>
                            <div className="detail-block__desc">{state.description}</div>
                        </div>
                    </div>
                 </div>
             </section>
         )
}

export default NewsDetail
