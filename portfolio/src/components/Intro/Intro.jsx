import './Intro.css';

const Intro = () => {
    return (
        <div className="intro-container">
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
    )
}

export default Intro;