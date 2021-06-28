import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader'
import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar'
import DashboardCard from '../../Components/DashboardCard/DashboardCard'
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
function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardHeader/>
            <div className="dashboard-content">
                <div className="row">
                    <div className="col-md-3 left-sec">
                        <DashboardSidebar/>
                    </div>
                    <div className="col-md-9 right-sec">
                        <div className="wrap">
                            <div className="content-head">
                                <div className="row">
                                    <div className="col-md-7 ">
                                        <div className="first-col">
                                            <h6>Select assets, types and period:</h6>
                                            <a href="#" className="stroked-btn">Filter</a>
                                        </div>
                                    </div>
                                    <div className="col-md-2 align-right">
                                        <div className="second-col">
                                            <h6>Units:</h6>
                                            <a href="#" className="stroked-btn">%</a>
                                            <a href="#" className="filled-btn">$</a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 align-right">
                                        <div className="third-col">
                                            <h6>Sort by</h6>
                                            <select class="form-select" aria-label="Default select example">
                                                <option value="0">Trending</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <DashboardCard/>
                            <DashboardCard/>
                            <DashboardCard/>
                            <DashboardCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Dashboard