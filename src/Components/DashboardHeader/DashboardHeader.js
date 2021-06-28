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

function DashboardHeader() {
    return (
        <div className="dashboard-header">
            <div className="">
                <div className="row">
                    <div className="col-md-3">
                        <div className="wrapper">
                            
                            <img src={logo} alt="some example image" className="logo" />
                            <div className="link-wrap">
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link filled-link" aria-current="page" href="#">Training Mode</a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link stroke-link" aria-current="page" href="#">Live Mode</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="second-col">
                            <ul class="nav nav-pills">
                                <li class="nav-item ">
                                    <a class="nav-link stroke-link" aria-current="page" href="#">Show All</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link filled-link" aria-current="page" href="#">Crypto</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link stroke-link" aria-current="page" href="#">Сommodities</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link filled-link" aria-current="page" href="#">Stock</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link stroke-link" aria-current="page" href="#">Index</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link stroke-link" aria-current="page" href="#">Currency</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="col-md-3">
                        <div className="third-col">
                            <img src={search} alt="some example image" className="" />
                            <img src={starStroke} alt="some example image" className="" />
                            <img src={cap} alt="some example image" className="" />
                            <div>
                                <img src={profile} alt="some example image" className="profile" />
                                <div className="notification-bar">
                                    <h6>12</h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default DashboardHeader