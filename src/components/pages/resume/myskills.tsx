import './resume.css'
import Grid from '@material-ui/core/Grid';
import { UserData } from '../../../userdata/userdata';
import Progress from './progress'
import useWindowSize from '../../../utils/windowsize';

function Skills() {
    const winSize = useWindowSize();
    let TitleFontSize = 42;

    if(winSize.width < 600)
    {
      TitleFontSize = 32;
    }
    return (
        <div className='subabout'>
            <div className="aboutme" style={{fontSize: TitleFontSize + 'px' }}>My Skills</div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between' }}>

                <div className="skills">
                    <Grid container style={{ paddingTop: '30px' }} >
                        {Object.keys(UserData.skills).map((key: string) => {
                            return (
                                <Grid xs={12} sm={12} md={6} style={{ paddingTop: '30px', paddingRight: '5%' }}>
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
            <div style={{width: '100%'}}>
                <br /><br /><br />
                <div className="aboutme"  style={{fontSize: TitleFontSize + 'px' }}>Statistics</div>
                <br/>
                <div className='img-background'>
                    <Grid container>
                        {UserData.skillstats.map((stats) => {
                            return(
                                <Grid xs={12} md={6}>
                            <figure><embed className='statistics' src={stats}></embed></figure>
                        </Grid>
                            )
                        })}       
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Skills;