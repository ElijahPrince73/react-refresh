import 'bulma/css/bulma.css'

import ProfileCard from "./ProfileCard"

import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>
            Personal Digital Assistants
          </p>
        </div>
      </section>
      
      <div className='container'>
        <section>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard 
                title="Alexa" 
                handle="@alexa99" 
                image={AlexaImg}
                description="Alexa helps buy things"
              />
            </div>
            <div className='column is-4'>
              <ProfileCard 
                title="Cortana" 
                handle="@cortana32" 
                image={CortanaImg}
                description="Cortana who knows what it does?"
              />
            </div>
            <div className='column is-4'>
              <ProfileCard 
                title="Siri" 
                handle="@siri" 
                image={SiriImg}
                description="Siri is used by apple"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App