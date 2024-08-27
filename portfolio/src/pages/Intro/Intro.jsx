import './Intro.css';
import sakura from '../../assets/photo/sakura.jpg'

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-text-container">
                <h2 className="main-container-title">Hi there!</h2>
                <p className="intro-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse voluptate illo eius itaque eaque enim, sapiente minus? Officiis omnis perferendis praesentium repellat rem repudiandae expedita magni reprehenderit nihil voluptatum cumque, eos repellendus minima fugiat tempore fuga dolores minus quasi, non atque id saepe molestiae enim! Nulla optio nobis itaque.
                </p>

                <br />
                
                <h3 id="intro-list-title">Currently, I am: </h3>

                <ul className='intro-content'>
                  <li className="intro-list">Student @UMass</li>
                  <li className="intro-list">Internship</li>
                </ul>
            </div>
            
            <div id="img-container">
                <img id='myPhoto' src={sakura} alt="Sheng-Kai's Photo" />
            </div>
        </div>
    )
}

export default Intro;