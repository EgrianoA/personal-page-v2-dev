import { Row, Col } from 'antd'
import Slider from 'react-slick'
const section4web = (props) => {
    return (
        <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            className="slider-web">
            {props.content.map(content => {
                return (
                    <div>
                        <Row gutter={16}>
                            <Col span={12}>
                                <div className="sliderText">
                                    <p>{content.year}</p>
                                    <h4>{content.title}</h4>
                                    <span>
                                        <p className="desc">
                                            {content.desc}
                              </p><a>Detail</a></span>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="imageSection" style={{ backgroundColor: 'aquamarine' }} />
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </Slider>
    )
}

export default section4web;