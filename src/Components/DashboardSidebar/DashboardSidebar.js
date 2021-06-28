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

function DashboardSidebar() {
    return (
        <div className="dashboard-sidebar">
            <div className="top-section">
                <div className="head-sec">
                    <div className="wrapper">
                        <img src={stroke} alt="some example image" className="" />
                        <h5>Open Trades </h5>
                    </div>
                    <img src={arrowRight} alt="some example image" className="" />
                </div>
                <div className="content-sec">
                    <div className=" data">
                        <h6>Trades in progress</h6>
                        <h2>15</h2>
                    </div>
                    <div className="data">
                        <h6>Closest outcome</h6>
                        <div className="">
                            <h2>25m 40s</h2>
                            <h4>ETH 48 hour</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="middle-section">
                <div className="head-sec">
                    <div className="wrapper">
                        <img src={Union} alt="some example image" className="" />
                        <h5>Trading History </h5>
                    </div>
                    <img src={arrowRight} alt="some example image" className="" />
                </div>
                <div>
                    <ul class="nav nav-pills">
                        <li class="nav-item ">
                            <a class="nav-link stroke-link" aria-current="page" href="#">Last</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link stroke-link" aria-current="page" href="#">day</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link filled-link" aria-current="page" href="#">week</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link stroke-link" aria-current="page" href="#">month</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link stroke-link" aria-current="page" href="#">all</a>
                        </li>
                    </ul>
                    <div className="content-sec">
                        <div className=" data">
                            <h6>Total trades</h6>
                            <h2>245</h2>
                        </div>
                        <div className="data">
                            <h6>Profit</h6>
                            <div className="">
                                <h2>+21.5%</h2>
                            </div>
                        </div>
                    </div>
                    <img src={balance} alt="some example image" className="" />
                </div>
            </div>
            <div className="bottom-section">
                <div className="head-sec">
                    <div className="wrapper">
                        <img src={wallet} alt="some example image" className="" />
                        <h5>Training wallet </h5>
                    </div>
                    <img src={arrowRight} alt="some example image" className="" />
                </div>
                <div className="content-sec">
                    <div className=" data">
                        <h6>Trading</h6>
                        <h2>$ 34,752.00</h2>
                    </div>
                    <div className="data">
                        <div className="align-right">
                            <a href="#" className="stroked-btn">Top up</a>
                        </div>
                    </div>
                </div>
                <div className="content-sec">
                    <div className=" data">
                        <h6>Trading</h6>
                        <h2>$ 34,752.00</h2>
                    </div>
                    <div className="data">
                        <div className="align-right">
                            <a href="#" className="filled-btn">BuY DAI</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardSidebar