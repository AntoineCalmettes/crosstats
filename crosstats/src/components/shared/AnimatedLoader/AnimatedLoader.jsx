import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../assets/animations/loader.json'

export default class AnimatedLoader extends React.Component {

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
        height={160}
        width={160}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused} />
    }
}