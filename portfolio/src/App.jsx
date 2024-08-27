import Typewriter from 'typewriter-effect'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Links from './components/Links/Links'

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
                                        'Sheng-Kai Wen',
                                        'an engineer',
                                        'a hockey player and baseball player'
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

                    <div id="main-links">
                        <Links />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
