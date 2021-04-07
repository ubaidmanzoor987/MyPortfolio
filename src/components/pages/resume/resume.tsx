import './resume.css';
import Animation from '../../animation/animation'
import Skills from './myskills'
import ResumeData from './resumeData'
import Education from './educational'

function Resume()
{
    return(
        <div>
                <Animation/>
          <div className='resume'>
            <Skills/>
            <ResumeData/>
            <Education/> 
          </div>
          </div>
    );
}

export default Resume;