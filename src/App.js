import 'bulma/css/bulma.css'

import ProfileCard from "./ProfileCard"

import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <div className='container'>
        <section>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImg}/>
            </div>
            <div className='column is-4'>
              <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImg}/>
            </div>
            <div className='column is-4'>
              <ProfileCard title="Siri" handle="@siri " image={SiriImg}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App