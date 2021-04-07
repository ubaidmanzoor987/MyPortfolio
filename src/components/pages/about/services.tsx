import { UserData, Services } from '../../../userdata/userdata'
import Grid from '@material-ui/core/Grid';

function Servicess() {
      return (
            <div className='subabout'>
                  <div className="aboutme">Services </div>
                  <Grid container justify="flex-start" spacing={2} >
                        {Services.map((service) => (
                              <Grid xs={12} sm={12} md={6} lg={4} style={{ paddingTop: '30px' }} >
                                    <div className='services'>
                                          <div className='icons'>
                                                {service.ReactIcon}
                                          </div>
                                          <div className='my-service'>
                                                <h2>{service.myservice}</h2>
                                                <hr style={{ width: "100px", marginTop: "6px", border: "1px solid", color: '#cbced8' }}></hr>
                                          </div>
                                          <div className='about-service'>
                                                {service.aboutservice}
                                          </div>
                                    </div>
                              </Grid>
                        ))}
                  </Grid>
            </div>
      );
}

export default Servicess;