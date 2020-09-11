import Head from 'next/head'
import { useState } from 'react'
import { Row, Col, Card } from 'antd'
// import { Parallax } from 'react-parallax'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Jump from 'react-reveal/Jump'
import Section3web from '../component/section-3-web'
import Section3mobile from '../component/section-3-mobile'
import Section4web from '../component/section-4-web'
import Section4mobile from '../component/section-4-mobile'


export default function Home() {
  const [jump, setJump] = useState(0)
  const assetPrefix = process.env.ASSET_PREFIX

  setTimeout(() => {
    setJump(jump + 1)
  }, 1500);

  const section3Content = [
    {
      img: "Icon metro-stack.svg",
      // title: "Fullstack Developer",
      title: "TEST1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://github.com/EgrianoA",
      buttonLogo: "Icon awesome-github.svg",
      // buttonText: "EgrianoA",
      buttonText: "TEST1",
      parallaxConfig: {
        y: [150, -150]
      }
    },
    {
      img: "Group 315.svg",
      // title: "Designer",
      title: "TEST2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://dribbble.com/ArisatouGri",
      buttonLogo: "Icon awesome-dribbble.svg",
      // buttonText: "ArisatouGri",
      buttonText: "TEST2",
      parallaxConfig: {
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

  const redirect = (url) => {
    window.open(url)
  }



  return (
    <div className="homepage">
      <div className="background" style={{ backgroundImage: `url(${assetPrefix}/bg/All.svg)` }}>
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
                {/* <Fade cascade>
                 I'm Egriano Aristianto
                </Fade> */}
                <Fade cascade>
                  Lorem ipsum dolor sit amet
                </Fade>
              </h1>
              <h4>
                {/* <Fade cascade>
                  A Fullstack Developer (+ A Designer)
              </Fade> */}
                <Fade cascade>
                  consectetur adipiscing elit
              </Fade>
              </h4>

              <Row>
                <Slide right cascade>
                  <div className="icons">
                    <div className='round'>
                      <a onClick={() => redirect("https://www.linkedin.com/in/egrianoaristianto/")}>
                        <img src={`${assetPrefix}/assets/Icon awesome-linkedin.svg`} />
                      </a>
                    </div>
                    <div className='round'>
                      <a onClick={() => redirect("https://github.com/EgrianoA")}>
                        <img src={`${assetPrefix}/assets/Icon awesome-github.svg`} />
                      </a>
                    </div>
                    <div className='round'>
                      <a onClick={() => redirect("https://dribbble.com/ArisatouGri")}>
                        <img src={`${assetPrefix}/assets/Icon awesome-dribbble.svg`} />
                      </a>
                    </div>
                  </div>
                </Slide>
              </Row>
            </div>
          </Row>
          <Row className='section3'>
            <center>
              <Parallax y={[50, -50]} >
                <h2 className='gradientText'>What I do</h2>
              </Parallax>
              <Row gutter={16}>
                <Section3web content={section3Content} />
                <Section3mobile content={section3Content} />
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
          <Row >
            <div className='section5'>
              <center>
                <h4>Thank you for visiting my site!</h4>
                {/* <a><button className="section5Button"></button></a> */}
                <p>For detailed information about me and my works you can contact me through</p>
                <div className="icons">
                  <Row>
                    <div className="contactInfo">
                      <div className="email">
                        <Col xs={24}>
                          <img src={`${assetPrefix}/assets/Icon material-email.svg`} />
                        </Col>
                        <span>EgrianoA@gmail.com</span>
                      </div>
                      <div className="linkedin">
                        <Col xs={24}>
                          <img src={`${assetPrefix}/assets/Icon awesome-linkedin.svg`} />
                        </Col>
                        <a href={"https://www.linkedin.com/in/egrianoaristianto/"}>https://www.linkedin.com/in/egrianoaristianto/</a>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className="finalWord">
                  <p>Designed and coded with love by Egriano Aristianto</p>
                  <p>2020 - All right reserved</p>
                </div>
              </center>
            </div>
          </Row>
        </ParallaxProvider>
      </div>
    </div >

  )
}
