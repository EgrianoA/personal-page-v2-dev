import { Col, Row } from 'antd'
import { Parallax } from 'react-scroll-parallax'
const section3web = (props) => {
    const assetPrefix = process.env.ASSET_PREFIX
    return (
        <div className="section3web">
            {props.content.map(content => {
                return (
                    <Col span={12}>
                        <Parallax {...content.parallaxConfig} >
                            <div className="section3Card">
                                <div className="section3Icon">
                                    <img src={`${assetPrefix}/assets/${content.img}`} />
                                </div>
                                <h4 className="section3Title">{content.title}</h4>
                                <p className="section3Desc">
                                    {content.desc}
                                </p>
                                <a><button className="section3Button">
                                    <Row>
                                        <div style={{ verticalAlign:"middle" }}>
                                                <img src={`${assetPrefix}/assets/${content.buttonLogo}`} />
                                                <span>{content.buttonText}</span>
                                        </div>
                                    </Row>
                                </button></a>
                            </div>
                        </Parallax>
                    </Col>
                )
            })}
        </div>
    )
}

export default section3web;