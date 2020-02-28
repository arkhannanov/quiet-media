import React from 'react';
import {connect} from "react-redux";
import './Preview.scss';

class Preview extends React.Component {

    constructor(props) {
        super(props);
        // Не вызывайте здесь this.setState()!
        this.state = {orientation: null};
    }

    componentDidMount() {
        window.onorientationchange = () => {
            this.setState({orientation: window.orientation});
        };
        alert(window.orientation);
    }

    render() {

        const {bannerTitle, bannerType, verticalImage, gorizontalImage, targetLink} = this.props;
        const {orientation} = this.state;

        return <div className="banner" style={(orientation === 90) ? {
            backgroundImage: `url(${gorizontalImage})`,
            width: '400px',
            height: '400px',
            backgroundSize: 'cover'
        } : {backgroundImage: `url(${verticalImage})`, width: '400px', height: '400px', backgroundSize: 'cover'}
        }>
            {/*<img src={(orientation === 90) ? gorizontalImage : verticalImage} className="banner__image" width={400}/>*/}
            {(bannerType === "Прямой")
                ? <div style={{marginTop: '100px', display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{textAlign: 'center', color: 'blue'}}>{bannerTitle}</h1>
                    {targetLink && <button style={{marginTop: '100px', alignSelf: 'center'}}><a href={targetLink}
                                                                                 target="_blank"  rel="noopener noreferrer">Перейти</a></button>}
                </div>
                : <div style={{marginTop: '100px', display: 'flex', flexDirection: 'column'}}>
                    {targetLink && <button style={{marginTop: '100px', alignSelf: 'center'}}><a href={targetLink}
                                                                                                target="_blank"  rel="noopener noreferrer">Перейти</a></button>}
                    <h1 style={{textAlign: 'center', color: 'blue'}}>{bannerTitle}</h1>
                </div>

            }


        </div>

    }
}

const mapStateToProps = (state) => ({
    bannerTitle: state.preview.bannerTitle,
    bannerType: state.preview.bannerType,
    verticalImage: state.preview.verticalImage,
    gorizontalImage: state.preview.gorizontalImage,
    targetLink: state.preview.targetLink
})

export default connect(mapStateToProps, {})(Preview);