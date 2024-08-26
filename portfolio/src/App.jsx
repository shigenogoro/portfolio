import './App.css'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  return (
      <div>
        <header>
          <Navbar />
        </header>

        <main>
          <div className="background-image-container"></div>
          <div className="main-container">
            <div className="intro-container">
              <h2>Hi there!</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse voluptate illo eius itaque eaque enim, sapiente minus? Officiis omnis perferendis praesentium repellat rem repudiandae expedita magni reprehenderit nihil voluptatum cumque, eos repellendus minima fugiat tempore fuga dolores minus quasi, non atque id saepe molestiae enim! Nulla optio nobis itaque.
              </p>

              <br />
              
              <h3>Currently, I am: </h3>

              <ul>
                <li>Student @UMass</li>
                <li>Internship</li>
              </ul>
            </div>

            <div className="links-container">
              <h2>Links</h2>
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
                >
                  <i className="fa fa-envelope email-icon"></i>
                  gorowen56@gmail.com
                </a>
              </div>
            </div>
          </div>
        </main>
        
      </div>
  )
}

export default App
