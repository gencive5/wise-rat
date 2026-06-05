import { useState } from 'react'
import rat from './assets/ratfront.png'
import './App.css'

function App() {

const [fortune, setFortune] = useState("")

const fortunes = [
  "yes", "no", "maybe", "idk", "ummmmm", "uhhhhhhh", "perhaps", "why not", "What am I supposed to do", "sure", "Ew", "eh",
  "yup", "Nah", "ok", "definitely", "absolutely not", "...", "yay", "nope", "I guess", "I think that's fine", "oooof", "¯\(ツ)/¯"
]

const askFortune = () => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  setFortune(randomFortune);
}
  

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={rat} className="base" width="200" height="210" alt="rat" />
        </div>
        <div>
          <p className="fortune1">{fortune}</p>
          <p className="fortune1">{fortune}</p>
     <button
          type="button"
          className="counter"
          onClick={askFortune} 
        >
          Ask Mr Rat 
      </button>
        </div>
       
      </section>


      <section id="next-steps">
        <div id="docs">
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                download mr rat font
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                instagram
              </a>
            </li>
          </ul>
        </div>
        
      </section>


    </>
  )
}

export default App
