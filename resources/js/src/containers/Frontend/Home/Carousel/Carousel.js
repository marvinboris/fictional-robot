import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators
} from 'reactstrap';

import FirstImage from '../../../../assets/images/Huawei-mate-40-pro-5g-0@2x.png';
import SecondImage from '../../../../assets/images/Huawei-P40-Pro-Plus-Poster@2x.png';

const items = [
    {
        src: FirstImage,
        altText: 'Slide 1',
    },
    {
        src: SecondImage,
        altText: 'Slide 2',
    }
];

export default class HomeCarousel extends Component {
    state = {
        activeIndex: 0,
        animating: false
    }

    moveCircle = index => {
        setTimeout(() => {
            const top = index * 44;

            $('.circle-carousel-indicator').first().animate({ marginTop: top }, 'fast');
        }, 1);
    }

    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex }, () => this.moveCircle(nextIndex));
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex }, () => this.moveCircle(nextIndex));
    }

    goToIndex = newIndex => {
        if (this.state.animating) return;
        this.setState({ activeIndex: newIndex }, () => this.moveCircle(newIndex));
    }

    render() {
        const slides = items.map(item => (
            <CarouselItem onExiting={() => this.setState({ animating: true })} onExited={() => this.setState({ animating: false })} key={item.src} className="h-100">
                <div className="h-100" style={{ background: `url("${item.src}") no-repeat top center`, backgroundSize: 'cover' }}>
                    <div className="h-100" style={{ background: `linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25))`, backgroundSize: 'cover', opacity: .63 }}></div>
                </div>
            </CarouselItem>
        ));

        return (
            <Carousel id="carousel" activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} className="h-100 carousel-fade HomeCarousel">
                <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />

                {slides}

                {this.props.children}
            </Carousel>
        );
    }

}
