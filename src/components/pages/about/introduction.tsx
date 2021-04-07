import { UserData } from '../../../userdata/userdata'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Progress from '../../pages/resume/progress';

function Introduction() {
      return (
            <div className='subabout'>
                  <div className="aboutme">ABOUT ME </div>
                  <hr />
                  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between' }}>
                        <Grid xs={12} sm={12} md={5} style={{ paddingTop: '30px' }}>
                              <img className='mypic' src={UserData.myPic} alt="pic" />
                        </Grid>
                        <Grid xs={12} sm={12} md={7} style={{ paddingTop: '30px' }}>
                              <div className='myself'>
                                    <div style={{ marginBottom: '20px' }}>
                                          {UserData.greet} <span className="color-primary"> {UserData.name}</span>
                                    </div>
                                    <div className='paragraph' style={{ fontSize: 19 }}>
                                          {UserData.about}
                                    </div>
                                    {Object.keys(UserData.about_info).map((key: string) => {
                                          return (
                                                <div className="myinfo" style={{ fontSize: 18 }}>
                                                      <div className='about_me_label' >{key}</div>
                                                      <div className='about_me_value'>: {UserData.about_info[key as 'FullName']}</div>
                                                </div>
                                          );
                                    })}
                                    <Button variant="contained" color="primary" style={{ marginTop: '20px', backgroundColor: "#037fff" }} disableElevation>
                                          DOWNLOAD CV
                                    </Button>
                              </div>
                        </Grid>
                  </div>
            </div>
      );
}

export default Introduction;