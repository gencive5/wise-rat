import { useState, useEffect, useRef } from 'react'
import rat from './assets/ratfront.png'
import './App.css'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import './simplebar.css'

function App() {

// fortune telling
const [fortune, setFortune] = useState("")
const fortuneRef = useRef(null);


const fortunes = [
  "yes", "no", "maybe", "idk", "ummmmm", "uhhhhhhh", "perhaps", "why not", "What am I supposed to do", "sure", "Ew", "eh",
  "yup", "Nah", "ok", "definitely", "absolutely not", "...", "yay", "nope", "I guess", "I think that's fine", "oooof", "¯\\(ツ)/¯"
]

const askFortune = () => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  setFortune(randomFortune);
}

  if (fortuneRef.current) {
    setTimeout(() => {
      fortuneRef.current.scrollLeft = fortuneRef.current.scrollWidth;
    }, 10);
  }

  

  return (
    <>
    <div className="container">
      <div className="rat-img">
          <img src={rat} className="base" width="200" height="210" alt="rat" />
        </div>
      <div className='main-content'>
        
        <div>
          <div ref={fortuneRef}>
            <SimpleBar autoHide={false} style={{ width: '100vw', height: 'auto'}} >
            <p className="fortune1">{fortune}</p>
        </SimpleBar>
          
          </div>        
    
        </div>
        </div>
       


      <section id="links">

        <p className="fortune2">{fortune}</p>

         <button
          type="button"
          className="ask"
          onClick={askFortune} 
        >
          Ask Mr Rat 
      </button>
  
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
      </div>


    </>
  )
}

export default App
