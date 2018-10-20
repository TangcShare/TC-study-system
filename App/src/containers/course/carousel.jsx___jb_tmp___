import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
class CourseCarousel extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }

    componentDidMount() {
        // simulate img loading
    }

    goToAd(){
        console.log('23333')
        this.props.history.push("/ad")
    }

    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`./././asset/picture/carousel${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                                onClick={()=>this.goToAd()}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default CourseCarousel=withRouter(CourseCarousel)