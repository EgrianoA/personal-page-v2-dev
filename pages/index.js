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
      <div className="background">
        <ParallaxProvider>
          <Row className="section1">
            <center>
              <Jump spy={jump}>
                <Slide right cascade>
                  <h1 className='hi'>Hi!</h1>
                </Slide>
              </Jump>

              <Parallax y={["0px", "125px"]} >
                <p>SCROLL</p>
              </Parallax>
              <Parallax y={["0px", "50px"]} >
                <img src={`${assetPrefix}/assets/Polygon 2.svg`} className="arrow-1" />
              </Parallax>
              <Parallax y={["-25px", "75px"]} >
                <img src={`${assetPrefix}/assets/Polygon 3.svg`} className="arrow-2" />
              </Parallax>
            </center>
          </Row>
          <Row>
            <div className="section2">

              <h1>
                <Fade cascade>
                  Lorem ipsum dolor sit amet
                </Fade>
              </h1>
              <h4>
                <Fade cascade>
                  consectetur adipiscing elit
              </Fade>
              </h4>

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
          <Row className='section3'>
            <center>
              <Parallax y={[50, -50]} >
                <h2 className='gradientText'>SECTION 3</h2>
              </Parallax>
              <Row gutter={16}>
                <Col span={12}>
                  <Parallax y={[150, -150]} >
                    <div className="section3Card">
                      <div className="section3Icon">
                      </div>
                      <h4 className="section3Title">TEST 1</h4>
                      <p className="section3Desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      <a><button className="section3Button"></button></a>
                    </div>
                  </Parallax>
                </Col>
                <Col span={12}>
                  <Parallax y={[250, -250]} >
                    <div className="section3Card">
                      <div className="section3Icon">
                      </div>
                      <h4 className="section3Title">TEST 2</h4>
                      <p className="section3Desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      <a><button className="section3Button"></button></a>
                    </div>
                  </Parallax>
                </Col>
              </Row>
            </center>
          </Row>
          <Row>
            <div className='section4'>
              <center>
                <h3>SECTION 4</h3>
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
                            <p>2020</p>
                            <h4>LEFT SECTION</h4>
                            <span>
                              <p className="desc">
                                t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p><a>Detail</a></span>
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
                            <p>2020</p>
                            <h4>LEFT SECTION 2</h4>
                            <span>
                              <p className="desc">
                                t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p><a>Detail</a></span>
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
                            <p>2020</p>
                            <h4>LEFT SECTION 3</h4>
                            <span>
                              <p className="desc">
                                t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p><a>Detail</a></span>
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
          <Row className='section5'>
            <center>
              <h1>SECTION 5</h1>
              <h3>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</h3>
              <a><button className="section5Button"></button></a>
              <h3>totam rem aperiam, eaque ipsa quae ab</h3>
              <div className="icons">
                <div className='round' />
                <div className='round' />
                <div className='round' />
                <div className='round' />
              </div>
            </center>
          </Row>
        </ParallaxProvider>
      </div>
    </div>

  )
}
