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
              
              <h3>Currently, I'm: </h3>

              <ul>
                <li>Student @UMass</li>
                <li>Internship</li>
              </ul>
            </div>

            <div className="links-container">
              <h2>Links</h2>
            </div>
          </div>
        </main>
        
      </div>
  )
}

export default App
