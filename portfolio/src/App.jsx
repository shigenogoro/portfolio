import Typewriter from 'typewriter-effect'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Links from './components/Links/Links'
import sakura from './assets/photo/sakura.jpg'

const App = () => {
return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <div className="background-image-container">
                    <div className="title-container">
                          <h1 id="title">
                              Hello, I am
                              <br />
                              <Typewriter 
                                options={{
                                    strings: [
                                        'Sheng-Kai Wen (Kyle)',
                                        'an engineer',
                                        'a hockey player and softball player'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 100
                                }}
                              />
                          </h1>
                    </div>
                </div>


                <div className="main-container">
                    <div id="main-intro">
                        <Intro />
                    </div>

                    <div id="img-container">
                      <img id='myPhoto' src={sakura} alt="Sheng-Kai's Photo" />
                    </div>
                </div>
            </main>

            <footer>
                <Links />
            </footer>
        </div>
    )
}

export default App
