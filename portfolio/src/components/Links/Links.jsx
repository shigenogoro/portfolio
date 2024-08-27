import './Links.css';

const Links = () => {
    return (
        <div className="links-container">
            <div className="social-container">
            {/* GitHub Page */}
            <a 
                href="https://github.com/shigenogoro"
                className="fa fa-github social-icon"
            ></a>

            {/* LinkedIn Page */}
            <a 
                href="https://www.linkedin.com/in/sheng-kai-wen-a90602130/"
                className='fa fa-linkedin social-icon'
            ></a>

            {/* Instagram Page */}
            <a 
                href="https://www.instagram.com/kyle990987/"
                className='fa fa-instagram social-icon'
            ></a>

            {/* Facebook Page */}
            <a 
                href="https://www.facebook.com/kyle.wen.12"
                className='fa fa-facebook social-icon'  
            ></a>
            </div>

            <div className="email-container">
                <a
                    href="mailto:gorowen56@gmail.com"
                    id="footer-email"
                >
                    <i className="fa fa-envelope email-icon"></i>
                    gorowen56@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Links;