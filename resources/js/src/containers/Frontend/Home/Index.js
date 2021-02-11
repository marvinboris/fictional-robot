import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faGamepad, faHeadset, faLaptop, faMicrophoneAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import OwlCarousel from 'react-owl-carousel2';

import HomeCarousel from './Carousel/Carousel';
import Product from './Product';
import BeautifulImage from './BeautifulImage';

import './Home.css';

import ImgProduct1 from '../../../assets/images/matebook-x-pro-2020-emerald-green@2x.png';
import ImgProduct2 from '../../../assets/images/huaweimate40pro@2x.png';
import ImgProduct3 from '../../../assets/images/Image 1@2x.png';
import ImgProduct4 from '../../../assets/images/MateBook-x-DB-634x800-1597913862@2x.png';
import ImgProduct5 from '../../../assets/images/sony-headset@2x.png';

import ImgPromotion1 from '../../../assets/images/51cjoSFwWrL._SL1200_@2x.png';
import ImgPromotion2 from '../../../assets/images/bose_quietcomfort_35_ii_plata_auriculares_bluetooth_01_l@2x.png';
import ImgPromotion3 from '../../../assets/images/11982648232041138147@2x.png';
import ImgPromotion4 from '../../../assets/images/ca400283@2x.png';
import ImgPromotion5 from '../../../assets/images/Sony-Playstation-5-System-Preorder-Walmart@2x.png';

import ImgLogoSony from '../../../assets/images/5848242ecef1014c0b5e49c8 (1).png';
import ImgLogoHuawei from '../../../assets/images/58ac4d880aaa10546adf2711 (1).png';
import ImgLogoCanon from '../../../assets/images/Canon_logo.png';
import ImgLogoBose from '../../../assets/images/5a1c3612f65d84088faf13fd.png';
import ImgLogoMijia from '../../../assets/images/mijia-logo.png';
import ImgLogoAqara from '../../../assets/images/20191018014914_646.png';
import ImgLogoMi from '../../../assets/images/9a54d3272a85435f8aa767452b6cf0fe.png';
import ImgLogoSamsung from '../../../assets/images/Samsung_logo.png';
import ImgLogoApple from '../../../assets/images/580b57fcd9996e24bc43c516.png';

import ImgLaptopOfTomorrow from '../../../assets/images/c5ef0be8ea56eb8af34620b866761ae7@2x.png';
import ImgHifi from '../../../assets/images/Consumer-Electronics-and-Home-Appliances@2x.png';
import ImgHeadphone from '../../../assets/images/ws_Sony_Headphones_852x480@2x.png';

const Wrapper = ({ children, className, style }) => <div className={`py-5 ${className}`} style={style}>
    <div className="py-5">
        <div className="container-fluid px-lg-5">
            {children}
        </div>
    </div>
</div>;

const Category = ({ children, icon }) => <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-3 pb-xl-0">
    <div className="rounded-15 bg-soft text-center text-secondary p-4 h-100">
        <div className="my-3">
            <FontAwesomeIcon icon={icon} fixedWidth size="4x" />
        </div>

        <div className="text-uppercase text-500">{children}</div>
    </div>
</div>;

const Promotion = props => <div className="col-md-6">
    <Product {...props} promo />
</div>;

const Brand = ({ img, height = 40 }) => <div className="px-2">
    <img src={img} style={{ height, objectFit: 'contain' }} alt={Math.random().img} />
</div>;

class Home extends Component {
    render() {
        return <div className="Home">
            <div className="embed-responsive embed-responsive-21by9 position-relative">
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                    <HomeCarousel />
                </div>
            </div>

            <Wrapper className="bg-white text-dark">
                <div className="mb-5">
                    <div className="text-500 text-large mb-4">BROWSE BY CATEGORIES</div>

                    <div className="row justify-content-center">
                        <Category icon={faHeadset}>HEADPHONES</Category>
                        <Category icon={faLaptop}>LAPTOPS</Category>
                        <Category icon={faMobileAlt}>SMARTPHONES</Category>
                        <Category icon={faMicrophoneAlt}>ACCESSORIES</Category>
                        <Category icon={faCamera}>CAMERAS</Category>
                        <Category icon={faGamepad}>GAMES</Category>
                    </div>
                </div>

                <div>
                    <div className="text-500 text-large mb-4">BEST SALES PRODUCTS</div>

                    <OwlCarousel ref="Products" options={{
                        responsive: { 0: { items: 1 }, 700: { items: 2 }, 1100: { items: 3 }, 1400: { items: 4 }, 1700: { items: 5 } },
                        loop: true,
                        dots: true,
                        nav: false,
                        autoplay: false
                    }}>
                        <Product brand={ImgLogoHuawei} img={ImgProduct1} name={`Huawei Matebook X Pro 2020 - i7 256/16GB 10Th Gen - 13" inches`} price={1340200} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct2} name={`Huawei Mate 40 Pro 5G - 256GB - 8GB 60W wireless charging`} price={850000} off={11} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct3} name={`Huawei P40 Pro 5G - 256GB - 8GB 6 months screen waranty`} price={850830} off={15} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct4} name={`Huawei Matebook X 2020 - 256/16GB Core i5 10Th Gen - 13" inches`} price={1240200} off={20} />
                        <Product brand={ImgLogoSony} img={ImgProduct5} name={`WH-1000XM4 Premium Wireless Noise Cancelling Headphone With Mic Black`} price={270000} off={30} />
                    </OwlCarousel>
                </div>
            </Wrapper>

            <Wrapper className="bg-soft text-dark">
                <div className="text-500 text-large mb-4">ON PROMOTION</div>

                <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 pb-3 pb-xl-0">
                        <div className="row">
                            <Promotion brand={ImgLogoSony} img={ImgPromotion1} name={`Huawei Matebook X Pro 2020 - i7 256/16GB 10Th Gen - 13" inches`} price={1340200} />
                            <Promotion brand={ImgLogoSony} img={ImgPromotion2} name={`Bose noise cancelling headphones`} price={850000} off={11} />
                            <Promotion brand={ImgLogoHuawei} img={ImgPromotion3} name={`Huawei Matepad Pro 2020 - i7 256/16GB 10Th Gen - 12" inches`} price={850830} off={15} />
                            <Promotion brand={ImgLogoCanon} img={ImgPromotion4} name={`Canon 80 EOS camera lenses 35-60 mm`} price={1240200} off={20} />
                        </div>
                    </div>

                    <div className="col-xxl-7 col-xl-6 col-lg-8 pb-3">
                        <div className="h-100 shadow-sm text-xx-large d-flex flex-column">
                            <div className="rounded-top p-4 bg-white position-relative">
                                <div className="embed-responsive embed-responsive-4by3 position-relative">
                                    <div className="position-absolute w-100 h-100 d-flex flex-column" style={{ top: 0, left: 0 }}>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <img src={ImgLogoSony} style={{ height: 32 }} />
                                            </div>

                                            <div className="ml-auto">
                                                <FontAwesomeIcon icon={faHeart} className="text-orange" size="2x" />
                                            </div>
                                        </div>

                                        <div className="flex-fill pt-3">
                                            <div className="img position-absolute w-100 h-100" style={{ top: 0, left: 0, background: `url("${ImgPromotion5}") no-repeat center`, backgroundSize: 'contain' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-fill p-4 bg-white d-flex flex-column justify-content-between">
                                <div className="mb-2 text-500">
                                    {`Playstation 5 Console With Extra Controller 1TB storage`}
                                </div>

                                <div className="d-flex">
                                    <div>
                                        <div>
                                            <span className="text-darkgreen text-700">{850000 * (1 - 11 / 100)}</span> <span className="text-darkgreen-50">XAF</span>
                                        </div>

                                        <div className="text-darkgreen-50 d-inline-block" style={{ textDecoration: 'line-through' }}>
                                            <span>{850000}</span> <span className="text-large">XAF</span>
                                        </div>
                                    </div>

                                    <div className="ml-auto d-flex justify-content-end">
                                        {11 > 0 && <div>
                                            <div className="rounded bg-lightgreen-50 text-darkgreen px-3 py-2">
                                                -{11}% Off
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

            <Wrapper className="bg-white text-dark">
                <div className="mb-5">
                    <div className="text-500 text-large mb-4">MOST POPULAR PRODUCTS</div>

                    <OwlCarousel ref="Most Popular Products" options={{
                        responsive: { 0: { items: 1 }, 700: { items: 2 }, 1100: { items: 3 }, 1400: { items: 4 }, 1700: { items: 5 } },
                        loop: true,
                        dots: true,
                        nav: false,
                        autoplay: false
                    }}>
                        <Product brand={ImgLogoHuawei} img={ImgProduct1} name={`Huawei Matebook X Pro 2020 - i7 256/16GB 10Th Gen - 13" inches`} price={1340200} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct2} name={`Huawei Mate 40 Pro 5G - 256GB - 8GB 60W wireless charging`} price={850000} off={11} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct3} name={`Huawei P40 Pro 5G - 256GB - 8GB 6 months screen waranty`} price={850830} off={15} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct4} name={`Huawei Matebook X 2020 - 256/16GB Core i5 10Th Gen - 13" inches`} price={1240200} off={20} />
                        <Product brand={ImgLogoSony} img={ImgProduct5} name={`WH-1000XM4 Premium Wireless Noise Cancelling Headphone With Mic Black`} price={270000} off={30} />
                    </OwlCarousel>
                </div>


                <div className="mb-5">
                    <OwlCarousel ref="Beautiful images" options={{
                        responsive: { 0: { items: 1 }, 700: { items: 2 }, 1100: { items: 2 }, 1400: { items: 3 }, 1700: { items: 3 } },
                        loop: true,
                        dots: true,
                        nav: false,
                        autoplay: false,
                        center: true,
                    }}>
                        <BeautifulImage img={ImgLaptopOfTomorrow} />
                        <BeautifulImage img={ImgHifi} />
                        <BeautifulImage img={ImgHeadphone} />
                    </OwlCarousel>
                </div>


                <div className="mb-5">
                    <div className="text-500 text-large mb-4">MIXED PRODUCTS</div>

                    <OwlCarousel ref="Mixed Products" options={{
                        responsive: { 0: { items: 1 }, 700: { items: 2 }, 1100: { items: 3 }, 1400: { items: 4 }, 1700: { items: 5 } },
                        loop: true,
                        dots: true,
                        nav: false,
                        autoplay: false
                    }}>
                        <Product brand={ImgLogoHuawei} img={ImgProduct1} name={`Huawei Matebook X Pro 2020 - i7 256/16GB 10Th Gen - 13" inches`} price={1340200} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct2} name={`Huawei Mate 40 Pro 5G - 256GB - 8GB 60W wireless charging`} price={850000} off={11} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct3} name={`Huawei P40 Pro 5G - 256GB - 8GB 6 months screen waranty`} price={850830} off={15} />
                        <Product brand={ImgLogoHuawei} img={ImgProduct4} name={`Huawei Matebook X 2020 - 256/16GB Core i5 10Th Gen - 13" inches`} price={1240200} off={20} />
                        <Product brand={ImgLogoSony} img={ImgProduct5} name={`WH-1000XM4 Premium Wireless Noise Cancelling Headphone With Mic Black`} price={270000} off={30} />
                    </OwlCarousel>
                </div>


                <div className="mb-5">
                    <div className="text-700 text-large d-inline-block py-2 pl-3 pr-5 bg-orange-35 text-orange rounded mb-4">TOP BRANDS</div>

                    <OwlCarousel ref="Top Brands" options={{
                        responsive: { 0: { items: 1 }, 700: { items: 3 }, 1100: { items: 5 }, 1400: { items: 7 }, 1700: { items: 9 } },
                        loop: true,
                        dots: true,
                        nav: false,
                        autoplay: false
                    }}>
                        <Brand img={ImgLogoSony} />
                        <Brand img={ImgLogoHuawei} />
                        <Brand img={ImgLogoCanon} />
                        <Brand img={ImgLogoBose} />
                        <Brand img={ImgLogoMijia} />
                        <Brand img={ImgLogoAqara} />
                        <Brand img={ImgLogoMi} />
                        <Brand img={ImgLogoSamsung} />
                        <Brand img={ImgLogoApple} />
                    </OwlCarousel>
                </div>
            </Wrapper>
        </div>;
    }
}

export default withRouter(Home);