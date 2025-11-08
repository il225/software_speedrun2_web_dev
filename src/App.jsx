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
      <img src={me} alt="it's me"/>
        <a href="https://github.com/il225/software_speedrun2_web_dev"/>
      <h1>yo its me isaac</h1>
      <p>
        yo im isaac i like software and super smash bros melee
        the year is 20XX
      </p>

      <div>
        <a href={resume} download="resume_placeholder.txt">
          <button>
            click for resume (WIP)
          </button>
        </a>

        <div className="logo">
          <a href="https://github.com/il225"><img src={gh} alt="github logo" width="300" length="300"/></a>
          <a href="https://www.linkedin.com/in/isaaclanning/"><img src={linkedin} alt="linkedin logo" width="300" length="300"/></a>
          <a href="mailto:il225023@ohio.edu"><img src={mail} alt="a mail logo" width="300" length="300"/></a>
        </div>
      </div>

      <h2>Projects</h2>

      <div>
        <a href="https://github.com/il225/Letter_Enlarger/">"this is the letter enlarginator. it makes big letters"</a>
      </div>

      <div>
        <a href="https://github.com/il225/glassboatrapanui/">"this is a free website for a local business in Rapa Nui (Easter Island)"</a>
      </div>

      <div>
        <a href ="https://github.com/il225/software_speedrun2_web_dev">"this is the website you are looking at. programmers love recursion"</a>
      </div>
    </div>
  )
}

export default App
