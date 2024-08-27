/* eslint-disable react/no-unescaped-entities */
import './Intro.css';
import sakura from '../../assets/photo/sakura.jpg'

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-text-container">
                <h2 className="main-container-title">Hi, there!</h2>
                <p className="intro-content">
                    I'm Sheng-Kai(Kyle) Wen, a master's student in computer science at UMass Amherst, with a background in Physics and Electrical Engineering. 
                    <br /><br />
                    Inspired by my experiences in coaching and volunteering in Taiwan, I'm passionate about using software to enhance education, I aim to bridge the gap between underprivileged communities and urban areas.
                    <br /><br />
                    I'm adaptive, perseverant, and committed to impactful solutions.
                </p>

                <br />
                
                <h3 id="intro-list-title">Currently, I am: </h3>

                <ul className='intro-content'>
                  <li className="intro-list">developing an English tutoring website in collaboration with Prof. Chang-Ching Chen at NDHU.</li>
                  <li className="intro-list">seeking an internship opportunity to gain more industry experience in full-stack development.</li>
                </ul>
            </div>
            
            <div id="img-container">
                <img id='myPhoto' src={sakura} alt="Sheng-Kai's Photo" />
            </div>
        </div>
    )
}

export default Intro;