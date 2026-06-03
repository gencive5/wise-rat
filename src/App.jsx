import { useState } from 'react'
import fortune from './fortune'
import rat from './assets/ratfront.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={rat} className="base" width="200" height="210" alt="rat" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit and save to test
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Ask Mr Rat {count}
        </button>
      </section>


      <section id="next-steps">
        <div id="docs">
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                Learn more
              </a>
            </li>
          </ul>
        </div>
        
      </section>


    </>
  )
}

export default App
