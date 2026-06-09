import { useState, useEffect } from 'react'
import rat from './assets/ratfront.png'
import './App.css'

function App() {

// fortune telling
const [fortune, setFortune] = useState("")


const fortunes = [
  "yes", "no", "maybe", "idk", "ummmmm", "uhhhhhhh", "perhaps", "why not", "What am I supposed to do", "sure", "Ew", "eh",
  "yup", "Nah", "ok", "definitely", "absolutely not", "...", "yay", "nope", "I guess", "I think that's fine", "oooof", "¯\\(ツ)/¯"
]

const askFortune = () => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  setFortune(randomFortune);
}
  

  return (
    <>
    <container className="container">
      <div className='main-content'>
        <div className="rat-img">
          <img src={rat} className="base" width="200" height="210" alt="rat" />
        </div>
        <div>
          <p className="fortune1">{fortune}</p>
          <p className="fortune2">{fortune}</p>
     <button
          type="button"
          className="ask"
          onClick={askFortune} 
        >
          Ask Mr Rat 
      </button>
        </div>
        </div>
       


      <section id="links">
  
          <ul>
            <li>
              <a href="/fonts/mr-rat.zip"  download>
                download mr rat font
              </a>
            </li>
            <li>
              <a href="https://instagram.com/gencive5" target="_blank"> 
                instagram
              </a>
            </li>
          </ul>
        
      </section>
      </container>


    </>
  )
}

export default App
