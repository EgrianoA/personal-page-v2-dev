import { Col } from 'antd'
import { Parallax } from 'react-scroll-parallax'
const section3mobile = (props) => {
    return (
        <div className="section3mobile">
            <Parallax y={["300px", "-150px"]} >
                {props.content.map(content => {
                    return (
                        <Col span={24}>
                            <div className="section3Card">
                                <div className="section3Icon">
                                </div>
                                <h4 className="section3Title">{content.title}</h4>
                                <p className="section3Desc">
                                    {content.desc}
                                </p>
                                <a><button className="section3Button"></button></a>
                            </div>
                        </Col>
                    )
                })}
            </Parallax >
        </div>
    )
}

export default section3mobile;