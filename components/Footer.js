import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
           
            <div className="footer-icons">
                <h5>Redes Sociais</h5>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
            </div>

            <div className="footer-p">
                <h5>Telefones</h5>
                <p>(xx) x xxxx-xxxx</p>
            </div>

            <div className="footer-email"> 
                <h5>Email</h5>
                <p>email@domínio.com</p>
            </div>

        </div>
    )
}

export default Footer
