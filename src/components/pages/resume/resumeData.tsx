import './resume.css'
import {UserData, worklogo} from '../../../userdata/userdata'
import Progress from './progress'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import useWindowSize from '../../../utils/windowsize'


function ResumeData(){
  const winSize = useWindowSize();
  let TitleFontSize = 42;
  let DescriptionfontSize = 20;
  if(winSize.width < 600)
  {
    TitleFontSize = 32;
  }
    return(
        <div className='subabout'>
        <div className="aboutme"  style={{fontSize: TitleFontSize + 'px' }}> RESUME </div> <br/> <br/>
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