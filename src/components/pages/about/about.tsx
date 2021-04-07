import './about.css'
import Animation from '../../animation/animation'
import Introduction from './introduction'
import Servicess from './services'
import Reviewss  from './reviews'

function About() {
    return (
          <div className='about-main'>
                <Animation/>
          <div className='about'>
            <Introduction/>   
            <Servicess/>
            <Reviewss/>
          </div>
          </div>
    )
  }
  export default About;