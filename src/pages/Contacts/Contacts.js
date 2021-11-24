import React from 'react'
import imgAuthor from '../../assets/img/author.jpg'

import './Contacts.css'

function Contacts() {
    return (
        <section className="contacts">
           <div className = "container">
                <div className = "wrap">
                    <div className = "info-author">
                        <ul className = "info-author__list">
                            <li className = "info-author__item">
                                <a href="tel:+420608564307" className="info-author__phone">+420 608 564 307</a>
                            </li>
                            <li className = "info-author__item">
                                <div className="info-author__wrap">
                                    <p className="info-author__surname">Ivantsiv</p>
                                    <p className="info-author__name">Yaroslav</p>
                                </div>
                                <a href="mailto:yariki.r@gmail.com" className="info-author__email">yariki.r@gmail.com</a>
                            </li>
                            <li className = "info-author__item">
                                <p className="info-author__status">JavaScript developer</p>
                                <p className="info-author__desc">ES5,ES6,<span className="blue">ReactJS,Redux</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className = "author-photo">
                        <div className = "author-photo__img">
                            <img src={imgAuthor} alt="author"/>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default Contacts
