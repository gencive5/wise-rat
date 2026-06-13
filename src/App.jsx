import { useState, useEffect, useRef } from 'react'
import rat from './assets/ratfront.png'
import './App.css'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import './simplebar.css'

function App() {
  const [fortune, setFortune] = useState("")
  const simplebarRef = useRef(null);

  const fortunes = [
    "yes", "no", "maybe", "idk", "ummmmm", "uhhhhhhh", "perhaps", "why not", "What am I supposed to do", "sure", "Ew", "eh",
    "yup", "Nah", "ok", "definitely", "absolutely not", "...", "yay", "nope", "I guess", "I think that's fine", "oooof", "¯\\(ツ)/¯"
  ]

  const askFortune = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
  }

  // SimpleBar recalculation on mount & when fortune changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (simplebarRef.current && simplebarRef.current.recalculate) {
        simplebarRef.current.recalculate();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [fortune]);

  return (
    <div className="container">
      <div className="rat-img">
        <img src={rat} className="base" alt="rat" />
      </div>
      <div className='main-content'>
        <div>
            <SimpleBar 
              ref={simplebarRef}
              autoHide={false} 
              style={{ width: '100%', height: '100%' }}
              options={{
                autoHide: false,
                forceVisible: true
              }}
            >
              <p className="fortune1">{fortune}</p>
            </SimpleBar>    
        </div>
      </div>

      <section id="links">
        <p className="fortune2">{fortune}</p>
        <button type="button" className="ask" onClick={askFortune}>
          Ask Mr Rat 
        </button>
        <ul>
          <li>
            <a href="/fonts/mr-rat.zip" download>
              download mr rat font
            </a>
          </li>
          <li>
            <a href="https://instagram.com/gencive5" target="_blank" rel="noopener noreferrer"> 
              instagram
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App