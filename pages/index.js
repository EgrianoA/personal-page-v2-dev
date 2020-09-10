import Head from 'next/head'
import { useState } from 'react'
import { Row, Col, Card } from 'antd'
// import { Parallax } from 'react-parallax'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Jump from 'react-reveal/Jump'
import Section4web from '../component/section-4-web'
import Section4mobile from '../component/section-4-mobile'
import Section3web from '../component/section-3-web'
import Section3mobile from '../component/section-3-mobile'


export default function Home() {
  const [jump, setJump] = useState(0)
  const assetPrefix = process.env.ASSET_PREFIX

  setTimeout(() => {
    setJump(jump + 1)
  }, 1500);

  const section3Content = [
    {
      img: "",
      title: "TEST 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "",
      buttonLogo: "",
      parallaxConfig : {
        y: [150, -150]
      }
    },
    {
      img: "",
      title: "TEST 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "",
      buttonLogo: "",
      parallaxConfig : {
        y: [250, -250]
      }
    }
  ]

  const section4Content = [
    {
      year: "2020",
      title: "LEFT SECTION",
      desc: "t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      url: "",
      img: ""
    },
    {
      year: "2020",
      title: "LEFT SECTION 2",
      desc: "t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      url: "",
      img: ""
    },
    {
      year: "2020",
      title: "LEFT SECTION 3",
      desc: "t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      url: "",
      img: ""
    },
  ]



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
              <div className="scroll">
                <Parallax y={["0px", "125px"]} >
                  <p>SCROLL</p>
                </Parallax>
                <Parallax y={["0px", "50px"]} >
                  <img src={`${assetPrefix}/assets/Polygon 2.svg`} className="arrow-1" />
                </Parallax>
                <Parallax y={["-25px", "75px"]} >
                  <img src={`${assetPrefix}/assets/Polygon 3.svg`} className="arrow-2" />
                </Parallax>
              </div>
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
                <Section3web content={section3Content} />
                <Section3mobile content={section3Content}/>
              </Row>
            </center>
          </Row>
          <Row>
            <div className='section4'>
              <center>
                <h3>SECTION 4</h3>
                <Row>
                  <Section4mobile content={section4Content} />
                  <Section4web content={section4Content} />
                </Row>
              </center>
            </div>
          </Row>
          <Row className='section5'>
            <center>
              <h4>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</h4>
              <a><button className="section5Button"></button></a>
              <h4>totam rem aperiam, eaque ipsa quae ab</h4>
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
    </div >

  )
}
