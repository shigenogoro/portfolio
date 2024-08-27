import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './pages/Intro/Intro'
import Resume from './pages/Resume/Resume'
import Links from './components/Links/Links'


const App = () => {
    // State Management
    const [page, setPage] = useState('intro');

    // Functions
    const scrollToSection = () => {
        const showSection = document.querySelector('.main-section');
        if(showSection) {
            showSection.scrollIntoView({behavior: 'smooth', block: 'end'});
        }
    }

    const handlePageChange = (pageName) => {
        setPage(pageName);
        scrollToSection();
        console.log(pageName);
    }


    return (
        <div>
            <header>
                <Navbar onPageChange={handlePageChange} />
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
            </header>

            <main className="main-section">
                {
                    page === 'intro' && <Intro />
                }

                {
                    page === 'resume' && <Resume />
                }
            </main>

            <footer>
                <Links />
            </footer>
        </div>
    )
}

export default App
