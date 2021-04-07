import '../../main.css';
import { UserData } from '../../../userdata/userdata'
import Animation from '../../animation/animation'

function Home() {
  return (
    <>
    <Animation />
        <div className='home'>
          
          <div>
            <div className="bold">{UserData.greet}<span className='color-primary'>{UserData.name}</span></div>
              <p style={{maxWidth:'750px'}}> {UserData.about} </p> 
            <div className="icons">
            
              <a className="icon" href={UserData.GithubHref} target="_blank">{UserData.GithubIcon}</a>
              <a className="icon" href={UserData.linkedinHref} target="_blank">{UserData.linkedinIcon}</a> 
              <a className="icon" href={UserData.UpworkHref} target="_blank">{UserData.UpworkIcon}</a>
              
            </div>
          </div>
        </div>
        </>
  )
}
export default Home;
