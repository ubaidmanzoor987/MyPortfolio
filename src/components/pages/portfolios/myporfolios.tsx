import './portfolio.css'
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import Modal from 'react-modal'
import { UserData } from '../../../userdata/userdata'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from '../../../utils/windowsize'
import { AutorenewTwoTone } from '@material-ui/icons';




function Myportfolios() {

    const window = useRef();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showIndex, setShowIndex] = useState(0);
    const winSize = useWindowSize();
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    // 

    var ImgSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1  
    }

    useEffect(() => {
        if (winSize.width < 1000) {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
        else if (winSize.width < 1630) {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }

        // 
        else {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }
    }, [winSize])

    const data = UserData.portfoliodata;
    let E_grid: any[] = [];
    for (let i = 0; i < data.length; i += 3) {
        let i_grid = [];
        for (let k = 0; k < 3; k++) {
            const data1 = data[i + k];
            i_grid.push(<Grid style={{ display: 'flex', flexDirection: 'column' }} key={i + k}>
                <div className='rows'>
                    <div style={{ position: 'relative' }}>
                        <img src={data1.pic} className='images' />
                        <div className='protfolioImageHover' style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }} >
                            <div className='portfolio-links' style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }} >
                                <button onClick={() => { setModalIsOpen(true); setShowIndex(i + k) }} className='magnifier'>{data1.icon}</button>
                                <a href="https://dribbble.com/" target="_blank"><button className='magnifier'>{data1.linkicon}</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-name'><a href="https://dribbble.com/" target="_blank" className="portfolio-name-hover" >{data1.portfolioname}</a></div>
                    <div className='about-portfolio'>{data1.aboutPortfolio}</div>
                </div>
            </Grid>);
        }
        E_grid.push(i_grid);
    }

    const modalSliderImages = (UserData.portfoliodata[showIndex].pics).map((arr) => (
        <img key={arr} src={arr} className='my-image'></img> 
    ));

    return (
        <div className='subabout'>
            <div className="aboutme" > PORTFOLIOS </div> <br /> <br />
            <div className='port'>
                <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: Math.max((winSize.width ? winSize.width : 0) - 700, 300) + 'px' }}>
                        <Grid xs={12} sm={12} md={12} lg={12}>
                            <Slider className='slider' {...settings}>

                                {E_grid.map(grid => {
                                    return <div className='grid' >
                                        {grid}
                                    </div>
                                })}
                            </Slider>
                            <br /> <br /> <br /> <br /> <br />
                        </Grid>
                    </div>
                </Grid>
            </div>
            <Modal isOpen={modalIsOpen} style={{
                overlay: {
                    zIndex: 2000,
                    background: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                content: {
                    background: 'transparent',
                    borderColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: Math.max((winSize.width/2), 400) + 'px',
                    position: 'static'
                }
            }}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => { setModalIsOpen(false) }}
            >
                <div className='image-div' >
                    <div style={{ width: Math.max((winSize.width/2 - 200), 300) + 'px' }}>
                        <Slider  className='img-slider' {...ImgSettings}>
                            {modalSliderImages.map(grid => {
                                    return grid;
                                })}
                         </Slider>
                        <div className='description'><div className='inner-text'><span style={{ fontSize: '16px', fontWeight: 'bold' }} >Description: <br />  </span>{UserData.portfoliodata[showIndex].description}</div> </div>
                    </div>
                </div>  
            </Modal>
        </div>
    );
}

export default Myportfolios;