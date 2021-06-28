import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../../Assets/Images/logo.svg';
import profile from '../../Assets/Images/profile.svg';
import stroke from '../../Assets/Images/stroke.svg';
import Union from '../../Assets/Images/Union.svg';
import wallet from '../../Assets/Images/wallet.svg';
import balance from '../../Assets/Images/balance.svg';
import cardIcon from '../../Assets/Images/cardIcon.svg';
import positiveBalance from '../../Assets/Images/positiveBalance.svg';
import graph from '../../Assets/Images/graph.svg';
import arrowRight from '../../Assets/Images/arrowRight.svg';
import starStroke from '../../Assets/Images/starStroke.svg';
import cap from '../../Assets/Images/cap.svg';
import search from '../../Assets/Images/search.svg';
import star from '../../Assets/Images/star.svg';
import './Style.css';

function DashboardCard() {
    return (
        <div className="card-section">
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 first-sec-wrap">
                                <div className="first-sec">
                                    <img src={star} alt="some example image" className="" />
                                    <div className="align-left">
                                        <h4>ETH 48 hours</h4>
                                        <h6>Crypto</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 second-sec-wrap">
                                <div className="second-sec">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="align-left">
                                                <div class="wrapper align-left">
                                                    <img src={cardIcon} alt="some example image" className="" />
                                                    <h4>2,2x</h4>
                                                </div>
                                                <h6>Outcome in 6h 41m</h6>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-4 img-wrap">
                                            <div className="">
                                                <img src={positiveBalance} alt="some example image" className="" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 img-wrap">
                                            <div className="ml-60">
                                                <img src={graph} alt="some example image" className="" />
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="third-sec">
                                    <div className="align-right">
                                        <h4>$ 34,346.00</h4>
                                        <h6>Total commitment funds</h6>
                                    </div>
                                </div>
                                <div className="notification">
                                    <h6>2</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardCard