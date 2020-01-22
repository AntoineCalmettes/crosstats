import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../assets/animations/404.json'

export default class AnimatedNotFound extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return <Lottie options={defaultOptions}
            height={'auto'}
            width={'auto'}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused} />
    }
}