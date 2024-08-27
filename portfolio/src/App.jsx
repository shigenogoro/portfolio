import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Resume from './pages/Resume/Resume'
import Links from './components/Links/Links'


const App = () => {
    // State Management
    const [page, setPage] = useState('intro');

    // Functions
    const scrollToSection = () => {
        const showSection = document.querySelector('#main-section');
        if(showSection) {
            showSection.scrollIntoView({behavior: 'smooth'});
        }
    }


    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <section className="background-image-container">
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
                </section>


                <section className="main-section">
                    {
                        (page === 'intro' || page == '' || page === undefined) && (
                            <div>
                                <Intro />
                            </div>
                        )
                    }

                    {
                        (page === 'resume') && (
                            <Resume />
                        )
                    }
                </section>
            </main>

            <footer>
                <Links />
            </footer>
        </div>
    )
}

export default App
