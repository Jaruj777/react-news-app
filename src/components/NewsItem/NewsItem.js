import React from 'react'
import {useNavigate} from 'react-router-dom'

import './NewsItem.css'

function NewsItem(props) {
    let navigate = useNavigate()
    return (
        <li onClick = {()=> navigate('/news/' + props.title,{state: props.detail})} className = "news__item">
            <p className="news__text">{props.title}</p>
            <div className="news__info">
                <p className="news__url">{props.author}</p>
                <p className="news__date">
                    <span className="day">{props.day}</span>
                    /<span className="month">{props.month}</span>
                </p>
            </div>
        </li>
    )
}
export default NewsItem
