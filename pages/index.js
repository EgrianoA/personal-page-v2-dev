import Head from 'next/head'
import { useState } from 'react'
import { Row, Col, Card } from 'antd'
// import { Parallax } from 'react-parallax'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Jump from 'react-reveal/Jump'


export default function Home() {
  const [jump, setJump] = useState(0)
  const assetPrefix = process.env.ASSET_PREFIX

  setTimeout(() => {
    setJump(jump + 1)
  }, 1500);



  return (
    <div className="homepage">
      {/* <img src={`${assetPrefix}/bg/Section-1.svg`} className="background" /> */}
      <div className="background">
        {/* <img src={`${assetPrefix}/bg/Section-1.svg`}/> */}
        {/* <Row className='section1'>
        <Parallax
          bgImage={`${assetPrefix}/bg/Section-1.png`}
          blur={{ min: -5, max: 15 }}
          strength={1000}
        >
          <center style={{ minHeight: '100vh' }}>
            <h1>SECTION 1</h1>
          </center>
        </Parallax>
        <center>
          <img src={`${assetPrefix}/bg/Subtraction 1.svg`}></img>
          <h1>SECTION 1</h1>
        </center>
      </Row>
      <Row className='section2'>
        <center>
          <h1>SECTION 2</h1>
          <Row gutter={16}>
            <Col span={12}>
              <div className="section2Card">
                <p>TEST 1</p>
              </div>
            </Col>
            <Col span={12}>
              <div className="section2Card">
                <p>TEST 2</p>
              </div>
            </Col>
          </Row>
        </center>
      </Row>
      <Row className='section3'>
        <center>
          <h1>SECTION 3</h1>
          <Row>
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className="slider">
              <div>
                <Row gutter={16}>
                  <Col span={12}>
                    <div className="sliderText">
                      <h1>LEFT SECTION</h1>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="imageSection" style={{ backgroundColor: 'aquamarine' }} />
                  </Col>
                </Row>
              </div>
              <div>
                <Row gutter={16}>
                  <Col span={12}>
                    <div className="sliderText">
                      <h1>LEFT SECTION 2</h1>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="imageSection" style={{ backgroundColor: 'aqua' }} />
                  </Col>
                </Row>
              </div>
              <div>
                <Row gutter={16}>
                  <Col span={12}>
                    <div className="sliderText">
                      <h1>LEFT SECTION 3</h1>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="imageSection" style={{ backgroundColor: 'bisque' }} />
                  </Col>
                </Row>
              </div>
            </Slider>
          </Row>
        </center>
      </Row>
      <Row className='section4'>
        <center>
          <h1>SECTION 4</h1>
        </center>
      </Row> */}
        <ParallaxProvider>
          <Row className="parallax-1">
            <center>

              <Jump spy={jump}>
                <Slide right cascade>
                  <h1 className='hi'>Hi!</h1>
                </Slide>
              </Jump>

              <Parallax y={[0, 250]} >
                <p>SCROLL</p>
              </Parallax>
              <Parallax y={[-25, 10]} >
                <img src={`${assetPrefix}/assets/Polygon 2.svg`} className="arrow-1" />
              </Parallax>
              <Parallax y={[-50, 20]} >
                <img src={`${assetPrefix}/assets/Polygon 3.svg`} className="arrow-2" />
              </Parallax>
            </center>
          </Row>
          <Row>
            <div className="parallax-2">

              <h1>
                <Fade cascade>
                  Lorem ipsum dolor sit amet
                </Fade>
              </h1>
              <h2>
                <Fade cascade>
                  consectetur adipiscing elit
              </Fade>
              </h2>

              <Row>
                <Slide right cascade>
                  <div className="icons">
                    <div className='round' />
                    <div className='round' />
                    <div className='round' />
                    <div className='round' />
                  </div>
                </Slide>
              </Row>
            </div>
          </Row>
          <Row className='parallax-3'>
            <center>
              <Parallax y={[50, -50]} >
                <h1 className='gradientText'>SECTION 2</h1>
              </Parallax>
              <Row gutter={16}>
                <Col span={12}>
                  <Parallax y={[150, -150]} >
                    <div className="parallax-3Card">
                      <p>TEST 1</p>
                    </div>
                  </Parallax>
                </Col>
                <Col span={12}>
                  <Parallax y={[250, -250]} >
                    <div className="parallax-3Card">
                      <p>TEST 2</p>
                    </div>
                  </Parallax>
                </Col>
              </Row>
            </center>
          </Row>
          <Row>
            <div className='section3'>
              <center>
                <h1>SECTION 3</h1>
                <Row>
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay
                    className="slider">
                    <div>
                      <Row gutter={16}>
                        <Col span={12}>
                          <div className="sliderText">
                            <h1>LEFT SECTION</h1>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className="imageSection" style={{ backgroundColor: 'aquamarine' }} />
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row gutter={16}>
                        <Col span={12}>
                          <div className="sliderText">
                            <h1>LEFT SECTION 2</h1>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className="imageSection" style={{ backgroundColor: 'aqua' }} />
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row gutter={16}>
                        <Col span={12}>
                          <div className="sliderText">
                            <h1>LEFT SECTION 3</h1>
                          </div>
                        </Col>
                        <Col span={12}>
                          <div className="imageSection" style={{ backgroundColor: 'bisque' }} />
                        </Col>
                      </Row>
                    </div>
                  </Slider>
                </Row>
              </center>
            </div>
          </Row>
          <Row className='section4'>
            <center>
              <h1>SECTION 4</h1>
            </center>
          </Row>
        </ParallaxProvider>
      </div>
    </div>

  )
}
