import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import me from './assets/me.jpg'
import gh from './assets/github.png'
import linkedin from './assets/Linkedin.png'
import mail from './assets/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075clftr-121569963.png'
import resume from './assets/resume_placeholder.txt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img src={me} alt="it me"/>
        <h1>yo its me isaac</h1>
          <p>
            yo im isaac i like software and super smash bros melee
            the year is 20XX
          </p>
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        {/*   count is {count} */}
        {/* </button> */}
        {/* <p className="read-the-docs"> */}
        {/*   Click on the Vite and React logos to learn more */}
        {/* </p> */}

      <div className="logo">
        <a href={resume} download="resume_placeholder.txt">
          <button>
            click for resume (WIP)
          </button>
        </a>
        <a href="https://github.com/il225">
          <img src={gh} alt="my github" />
        </a>
        <a href="https://www.linkedin.com/in/isaaclanning/">
          <img src={linkedin} />
        </a>
        <a href="mailto:il225023@ohio.edu">
          <img src={mail} />
        </a>
      </div>
    </div>
  )
}

export default App
