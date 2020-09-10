import { Col } from 'antd'
import { Parallax } from 'react-scroll-parallax'
import Slider from 'react-slick'
const section3mobile = (props) => {
    return (
        <Col span={24}>
            <div className="section3mobile">
                <Parallax y={["175px", "50px"]} >
                    <div className="section3Card">
                        <Slider
                            dots={true}
                            infinite={true}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay
                            className="slider-mobile">
                            {props.content.map(content => {
                                return (
                                    <div>
                                        <div className="section3Icon">
                                        </div>
                                        <h4 className="section3Title">{content.title}</h4>
                                        <p className="section3Desc">
                                            {content.desc}
                                        </p>
                                        <a><button className="section3Button"></button></a>
                                    </div>
                                )
                            })}
                        </Slider >
                    </div>
                </Parallax >
            </div>
        </Col >
    )
}

export default section3mobile;