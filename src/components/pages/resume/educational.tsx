import './resume.css';
import Grid from '@material-ui/core/Grid';
import { UserData, worklogo } from '../../../userdata/userdata'

function Education() {
  return (
    <div className='subabout'>
      <div className="aboutme" style={{ fontSize: "25px" }}><span style={{ marginRight: '1rem', fontSize: '30px', width: '50px' }}>{worklogo.educationicon}</span>Educational Qualifications</div> <br /> <br />

      {UserData.education.map((work1: any) => {
        return (
          <Grid container className="myinfo" style={{ fontSize: 18 }}>
            <Grid xs={12} sm={12} md={3} style={{ marginTop: '20px' }} >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className='circle'>
                </div>
                <div className='experience-date'>
                  {work1.ExperienceDate}
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={9} style={{ display: 'flex', flexDirection: 'column', marginTop: '17px' }}>
              <div className='designation'>{work1.DegreeType}</div>
              <div className='company-name'>{work1.UniversityName}</div>
              <div className='summary'>{work1.summary}</div>
            </Grid>
          </Grid>
        );
      })}
      <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default Education;