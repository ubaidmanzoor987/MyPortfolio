import './resume.css'
import Grid from '@material-ui/core/Grid';
import { UserData } from '../../../userdata/userdata';
import Progress from './progress'

function Skills() {
    return (
        <div className='subabout'>
            <div className="aboutme" >My Skills</div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between' }}>

                <div className="skills">
                    <Grid container style={{ paddingTop: '30px' }} >
                        {Object.keys(UserData.skills).map((key: string) => {
                            return (
                                <Grid xs={12} sm={12} md={6} style={{ paddingTop: '30px', paddingRight: '80px' }}>
                                    <div style={{ fontSize: 18 }} key={key}>
                                        <div style={{ marginTop: "1rem", }}>{key}</div>
                                        <Progress percent={UserData.skills[key as 'HTML'].percent} />
                                    </div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>  

            </div>
        </div>
    );
}

export default Skills;