import { UserData } from "../../../userdata/userdata"
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import { useState, useEffect, useMemo, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from '../../../utils/windowsize'
import { maxHeaderSize } from "node:http";

function Reviewss() {
  const winSize = useWindowSize();
  let TitleFontSize = 42;
       if(winSize.width < 600)
       {
         TitleFontSize = 32;
       }
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  useEffect(() => {
    if (winSize.width < 1200) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    } else {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      });
    }
  }, [winSize])

  return (
    <div className="subabout">
      <div className='aboutme' style={{fontSize: TitleFontSize+ 'px'}}>Reviews</div>
      <br /> <br />
      <Grid container justify="flex-start" style={{ display: "flex", flexDirection: "row", maxWidth: '100%' }}>
        <div style={{ width: Math.max((winSize.width ? winSize.width : 0) - 600, 250) + 'px' }}>
          <Slider className='slide' {...settings} >
            {UserData.Reviews.map((reviews) => (
              <Grid xs={12} sm={12} md={12} lg={12} style={{ paddingTop: '30px' }} >
                <div className='reviews'>
                  <div className='client-review'>
                    {reviews.clientreviews}
                  </div>
                </div>
                <div className='client-name'>{reviews.clientname}</div>
                <div className='client-designation'>{reviews.designation}</div>
              </Grid>
            ))}
          </Slider>
        </div>
      </Grid>
      <br /> <br /> <br /> <br /> <br />
    </div>

  );
}

export default Reviewss;