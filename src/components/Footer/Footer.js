import React from 'react'

import './Footer.css'

function Footer() {
    return (
        <footer className = "footer">
            <div className ="container">
                <ul className="footer-info">
                    <li className="footer-info__item">
                        <h3 className="footer-info__title">News-app</h3>
                        <p className="footer-info__text">Single Page Application</p>
                    </li>
                    <li className="footer-info__item">
                        <p className="footer-info__text">REACT APP</p>
                    </li>
                    <li style={{textAlign: 'right'}}className="footer-info__item">
                        <p className="footer-info__text">Made by</p>
                        <h3 className="footer-info__title">Ivantsiv Yaroslav</h3>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
