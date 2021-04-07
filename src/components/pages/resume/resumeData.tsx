import './resume.css'
import {UserData, worklogo} from '../../../userdata/userdata'
import Progress from './progress'
import React from 'react';
import Grid from '@material-ui/core/Grid';


function ResumeData(){
    return(
        <div className='subabout'>
        <div className="aboutme" > RESUME </div> <br/> <br/>
        <div className="aboutme" style={{fontSize: "25px"}}><span style={{marginRight:'1rem', fontSize: '30px', width:'50px'}}>{worklogo.workicon}</span>Working Experience</div> <br/> <br/> 
        {UserData.work.map((work1: any) => {
          return (
                <Grid container className="myinfo" style={{fontSize:18}}>
                      <Grid xs={12} sm={12} md={3} style={{marginTop: '20px'}} >
                          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <div className='circle'>
                            </div>
                            <div className='experience-date'>
                                {work1.ExperienceDate}
                            </div>
                          </div>
                      </Grid>
                      <Grid xs={12} sm={12} md={9}  style={{display: 'flex', flexDirection: 'column', marginTop: '17px'}}>
                        <div className='designation'>{work1.Experience}</div>
                        <div className='company-name'>{work1.companyname}</div>
                        <div className='summary'>{work1.summary}</div>
                      </Grid>
                </Grid>
          );
   })}
        </div>
    );
}

export default ResumeData;