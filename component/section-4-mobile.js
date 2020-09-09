import { Row, Col } from 'antd'
import Slider from 'react-slick'
const section4mobile = (props) => {
    return (
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
                        <Row gutter={16}>
                            <Col span={24}>
                                <div className="imageSection" style={{ backgroundColor: 'aquamarine' }} />
                            </Col>
                            <Col span={24}>
                                <div className="sliderText">
                                    <p>{content.year}</p>
                                    <h4>{content.title}</h4>
                                    <span>
                                        <p className="desc">
                                            {content.desc}
                                      </p><a>Detail</a></span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </Slider>
    )
}

export default section4mobile;