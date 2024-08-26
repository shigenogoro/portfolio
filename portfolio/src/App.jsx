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
          <div className="background-image-container"></div>
          <div className="main-container">
            <Intro />
            <Links />
          </div>
        </main>
        
      </div>
  )
}

export default App
