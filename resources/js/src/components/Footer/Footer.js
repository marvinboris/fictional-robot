import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { faDownload, faEnvelope, faLink, faMoneyBillWaveAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Logo from '../UI/Logo/Logo';

import './Footer.css';

import ImgLogoVisa from '../../assets/images/58482363cef1014c0b5e49c1.png';
import ImgLogoPaypal from '../../assets/images/PayPal-Logo.png';
import ImgLogoBitcoin from '../../assets/images/5a521faf2f93c7a8d5137fd0.png';
import ImgLogoSkrill from '../../assets/images/1280px-Skrill_logo.svg.png';
import ImgLogoGooglePlay from '../../assets/images/5a902dbf7f96951c82922875.png';
import ImgLogoAppStore from '../../assets/images/png-clipart-app-store-iphone-apple-mobile-app-iphone-electronics-text.png';

const FooterBlock = ({ icon, title, className, children }) => <div className={className}>
    <div className="d-flex align-items-start mb-4">
        <div className="pr-3 mr-3 border-right border-border-50 text-darkgreen position-relative">
            <FontAwesomeIcon icon={icon} size="2x" />

            <div className="rounded-circle bg-darkgreen position-absolute" style={{ width: 10, height: 10, left: '100%', top: '50%', transform: 'translate(-50%,-50%)' }} />
        </div>

        <div className="text-blue">
            <div className="h4 text-poppins mb-3">{title}</div>

            <div className="bg-blue" style={{ width: 100, height: 2 }} />
        </div>
    </div>

    <div className="pl-5">{children}</div>
</div>;

const PaymentMethod = ({ img }) => <div className="d-inline-block pr-3 pb-3"><img src={img} style={{ height: 32, objectFit: 'contain' }} alt={Math.random() + img} /></div>;

const DownloadApp = props => <PaymentMethod {...props} />

export default () => {
    const [email, setEmail] = useState('');

    const inputChangedHandler = e => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
    };

    const submitHandler = e => {
        e.preventDefault();
    };

    return <div className="Footer bg-soft text-secondary">
        <footer className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-4">
                        <div className="mb-4"><Logo big /></div>

                        <div className="text-400 mb-4 text-poppins">
                            Best electronics online shopping cart. Get your electronics devices here at a very low cost.
                        </div>

                        <div className="">
                            <div className="h4">Subscribe to our newsletter</div>

                            <Form onSubmit={submitHandler}>
                                <FormGroup>
                                    <InputGroup className="rounded-pill">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className="rounded-pill rounded-right-0">
                                                <FontAwesomeIcon icon={faEnvelope} className="text-darkgreen" fixedWidth />
                                            </InputGroupText>
                                        </InputGroupAddon>

                                        <Input type="email" name="email" className="bg-soft" onChange={inputChangedHandler} value={email} placeholder="Input Email" />

                                        <InputGroupAddon addonType="append">
                                            <Button color="blue" className="rounded-pill rounded-left-0">
                                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" fixedWidth />

                                                Submit
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>

                    <div className="col-xxl-9 col-xl-8">
                        <div className="row justify-content-end">
                            <FooterBlock className="col-xxl-3 col-xl-4 text-uppercase" icon={faLink} title="LINKS">
                                <div className="text-large text-500">
                                    <div>ABOUT US</div>
                                    <div>STORE</div>
                                    <div>BLOG</div>
                                    <div>CONTACT</div>
                                </div>
                            </FooterBlock>

                            <FooterBlock className="col-xxl-4 col-xl-4" icon={faMoneyBillWaveAlt} title="PAYMENT METHODS">
                                <PaymentMethod img={ImgLogoVisa} />
                                <PaymentMethod img={ImgLogoPaypal} />
                                <PaymentMethod img={ImgLogoBitcoin} />
                                <PaymentMethod img={ImgLogoSkrill} />
                            </FooterBlock>

                            <FooterBlock className="col-xxl-4 col-xl-4" icon={faDownload} title="DOWNLOAD APP">
                                <DownloadApp img={ImgLogoGooglePlay} />
                                <DownloadApp img={ImgLogoAppStore} />
                            </FooterBlock>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <footer className="py-4 border-top border-border">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-4">
                        Copyrights {(new Date()).getFullYear()}. All rights reserved by <span className="text-700">Briluce</span>.
                    </div>

                    <div className="col-xxl-9 col-xl-8 d-flex align-items-center text-500">
                        <div className="px-3">Terms & Conditions</div>
                        <div className="px-3">Privacy policies</div>
                        <div className="px-3">Track Order</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>;
}